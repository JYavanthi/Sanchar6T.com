import express from "express";
import cors from "cors";
import axios from "axios";
import sql from "mssql";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';
import BitlaRepository from "./modules/bitla/bitla.repository.js";
import { getMasterCache } from "./cache/masterCache.js";
import { errorHandler } from "./utils/catchErrorMiddleware.js";
import bitlaRoutes from "./modules/bitla/bitla.router.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
  MetaInfo
} from "pg-sdk-node";
dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/bitla", bitlaRoutes);


const razorpay = new Razorpay({
  key_id: "rzp_test_RJLft75fL2W2QP",
  key_secret: "fnNj1B05U7CjYW1RhYUcCYDZ",
});


// Database config for Windows Authentication
const dbConfig = {
  user: process.env.DB_USER,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 1433,
  options: {
    // trustedConnection: true,
    trustServerCertificate: true,
  },
  driver: "tedius",
};

const poolPromise = sql.connect(dbConfig)
  .then(pool => {
    console.log("✅ Connected to SQL Server successfully!");
    return pool;
  })
  .catch(err => {
    console.error("❌ Database connection failed:");
    console.error("🔍 Full error object:", JSON.stringify(err, null, 2));
    console.error("Raw error message:", err.message);
    process.exit(1); // Exit if DB connection fails
  });



process.on("SIGINT", async () => {
  await poolPromise;
  await sql.close();
  process.exit(0);
});



// Store OTPs temporarily in-memory (use DB/Redis in production)
let otpStore = {};

// ✅ Setup Nodemailer with Gmail + App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS.replace(/\s/g, ""), // 16-digit App password
  },
});

const bitlaRepo = new BitlaRepository();
getMasterCache(bitlaRepo);

// 📌 Route to send OTP
app.post("/api/send-otp", async (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP for this email
  otpStore[email] = otp;

  try {
    await transporter.sendMail({
      from: `"Sanchar6T Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your One-Time Password (OTP) Verification",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hello ${name || "User"},</h2>
          <p>Thank you for verifying your contact details with <strong>Sanchar6T</strong>.</p>
          <p>Your OTP for verification is:</p>
          <h1 style="letter-spacing: 3px; color: #3D85C6;">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>. Please do not share it with anyone.</p>
          <br/>
          <p>Regards,<br/>Sanchar6T Team</p>
        </div>
      `,
    });

    console.log(`✅ OTP sent to ${email}: ${otp}`);
    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("❌ Error sending OTP:", error);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});


app.get("/payment/redirect", async (req, res) => {
  const { orderId, seatIds } = req.query;

  console.log("🔥 Redirect HIT");
  console.log("OrderId:", orderId);
  console.log("SeatIds:", seatIds);

  try {
    const pool = await poolPromise;

    // ❌ अगर seatIds नहीं है → fail
    if (!seatIds || seatIds.length === 0) {
      console.error("❌ seatIds missing");

      return res.redirect(
        `${process.env.FRONT_END_URL}/payment-failed`
      );
    }

    // ✅ Generate Ticket No
    const ticketNo = "TKT" + Date.now();

    // ✅ UPDATE (FIXED)
    const result = await pool.request()
      .input("SeatIds", sql.VarChar, seatIds)
      .input("TicketNo", sql.VarChar, ticketNo)
      .query(`
        UPDATE BusBookingSeat
        SET 
          PaymentStatus = 'SUCCESS',   -- ✅ FIX (NOT BOOKED)
          Status = 'Booked',           -- ✅ ADD THIS
          TicketNo = @TicketNo,
          ModifiedDt = GETDATE()
        WHERE BusBookingSeatID IN (
          SELECT value FROM STRING_SPLIT(@SeatIds, ',')
        )
      `);

    console.log("✅ DB Updated:", result.rowsAffected);

    // ❌ अगर कोई row update नहीं हुई
    if (!result.rowsAffected || result.rowsAffected[0] === 0) {
      console.error("❌ No rows updated");

      return res.redirect(
        `${process.env.FRONT_END_URL}/payment-failed`
      );
    }

    // ✅ SUCCESS REDIRECT
    const redirectUrl = `${process.env.FRONT_END_URL}/ticket?ticketNo=${ticketNo}&seatIds=${seatIds}`;

    console.log("✅ Redirecting to:", redirectUrl);

    return res.redirect(redirectUrl);

  } catch (err) {
    console.error("❌ FULL ERROR:", err);

    return res.redirect(
      `${process.env.FRONT_END_URL}/payment-failed`
    );
  }
});



// app.get("/api/packages", async (req, res) => {
//   try {
//     const pool = await sql.connect({ dbConfig }); // ✅ FIXED

//     const result = await pool.request().query(`
//       SELECT
//         PackageID,
//         PackageName,
//         State,
//         Country,
//         [From],
//         [To],
//         Noofdays,
//         Shortdescription,
//         Description,
//         AdditionalNotes,
//         PackagePrice,
//         CreatedBy,
//         CreatedDt,
//         ModifiedBy,
//         ModifiedDt
//       FROM [Sanchar6T_PreProd].[dbo].[Package]  -- ✅ make sure DB name matches
//       ORDER BY PackageID ASC
//     `);

//     res.json({
//       success: true,
//       data: result.recordset,
//     });

//   } catch (err) {
//     console.error("❌ ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// });
 
app.get("/api/packages/:packageId", async (req, res) => {
  try {
    const { packageId } = req.params;
    const pool = await sql.connect({ dbConfig });

    const result = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT TOP 1
          p.PackageID,
          p.PackageName,
          p.State,
          p.Country,
          p.[From],
          p.[To],
          p.Noofdays,
          p.Shortdescription,
          p.Description,
          p.AdditionalNotes,
          p.PackagePrice,
          p.CreatedBy,
          p.CreatedDt,
          p.ModifiedBy,
          p.ModifiedDt,
          pm.MediaId
        FROM [Sanchar6T_PreProd].[dbo].[Package] p
        OUTER APPLY (
          SELECT TOP 1 MediaId
          FROM [Sanchar6T_PreProd].[dbo].[PackageMedia]
          WHERE PackageID = p.PackageID
          ORDER BY SortOrder ASC, MediaId ASC
        ) pm
        WHERE p.PackageID = @PackageID
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Package not found"
      });
    }

    res.json({
      success: true,
      data: result.recordset[0],
    });

  } catch (err) {
    console.error("❌ ERROR fetching package details:", err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});
app.get("/api/packages/:packageId/images", async (req, res) => {
  try {
    const { packageId } = req.params;
    const pool = await sql.connect({ dbConfig });

    const result = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT
          MediaId,
          PackageID,
          FileName,
          SortOrder,
          CreatedDt
        FROM [Sanchar6T_PreProd].[dbo].[PackageMedia]
        WHERE PackageID = @PackageID
        ORDER BY
          CASE WHEN SortOrder IS NULL THEN 1 ELSE 0 END,
          SortOrder ASC,
          MediaId ASC
      `);

    res.status(200).json({
      success: true,
      data: result.recordset,
    });
  } catch (err) {
    console.error("❌ ERROR fetching package images:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch package images",
      error: err.message,
    });
  }
});

app.get("/api/packages/:packageId/full-details", async (req, res) => {
  try {
    const { packageId } = req.params;
    const pool = await sql.connect({ dbConfig });

    const packageResult = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT TOP 1
          p.PackageID,
          p.PackageName,
          p.State,
          p.Country,
          p.[From],
          p.[To],
          p.Noofdays,
          p.Shortdescription,
          p.Description,
          p.AdditionalNotes,
          p.PackagePrice,
          p.CreatedBy,
          p.CreatedDt,
          p.ModifiedBy,
          p.ModifiedDt,
          pm.MediaId
        FROM [Sanchar6T_PreProd].[dbo].[Package] p
        OUTER APPLY (
          SELECT TOP 1 MediaId
          FROM [Sanchar6T_PreProd].[dbo].[PackageMedia]
          WHERE PackageID = p.PackageID
          ORDER BY SortOrder ASC, MediaId ASC
        ) pm
        WHERE p.PackageID = @PackageID
      `);

    if (packageResult.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Package not found"
      });
    }

    const highlightsResult = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT
          PkgHighlightID,
          PackageID,
          Title,
          Description,
          IsActive
        FROM [Sanchar6T_PreProd].[dbo].[PkgHighlight]
        WHERE PackageID = @PackageID
          AND IsActive = 1
        ORDER BY PkgHighlightID ASC
      `);

    const impNotesResult = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT
          PkgImpNoteID,
          PackageID,
          Description,
          IsActive
        FROM [Sanchar6T_PreProd].[dbo].[PkgImpNotes]
        WHERE PackageID = @PackageID
          AND IsActive = 1
        ORDER BY PkgImpNoteID ASC
      `);

    const includesResult = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT
          PkgIncludeID,
          PackageID,
          Description,
          IsIncluded,
          IsActive
        FROM [Sanchar6T_PreProd].[dbo].[PkgInclude]
        WHERE PackageID = @PackageID
          AND IsActive = 1
        ORDER BY IsIncluded DESC, PkgIncludeID ASC
      `);

    const itineraryResult = await pool.request()
      .input("PackageID", sql.Int, Number(packageId))
      .query(`
        SELECT
          PkgItineraryID,
          PackageID,
          Day,
          FromTime,
          ToTime,
          Title,
          Description,
          IsActive
        FROM [Sanchar6T_PreProd].[dbo].[PkgItinerary]
        WHERE PackageID = @PackageID
          AND IsActive = 1
        ORDER BY Day ASC, FromTime ASC, PkgItineraryID ASC
      `);

    res.json({
      success: true,
      data: {
        package: packageResult.recordset[0],
        highlights: highlightsResult.recordset,
        importantNotes: impNotesResult.recordset,
        includes: includesResult.recordset.filter(
          (x) => x.IsIncluded === true
        ),
        excludes: includesResult.recordset.filter(
          (x) => x.IsIncluded === false
        ),
        allIncludes: includesResult.recordset,
        itinerary: itineraryResult.recordset
      }
    });

  } catch (err) {
    console.error("❌ ERROR fetching full package details:", err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const {
      userType,
      status,
      password,
      firstName,
      middleName,
      lastName,
      email,
      contactNo,
      gender,
      aadharNo,
      pancardNo,
      bloodGroup,
      primaryUser,
      age,
      address,
      alternativeNumber,
      remarks,
      companyName,
      companyID,
      companyAddress,
      shopAddress,
      organisation,
      city,
      state,
      comments,
      gst,
      amount,
      type,
      transactionLimit
    } = req.body;

    const pool = await sql.connect({ dbConfig });

    await pool.request()
      .input("Flag", sql.Char(1), "I")
      .input("UserID", sql.Int, 0)
      .input("UserType", sql.Int, userType)
      .input("Status", sql.VarChar(250), status || "Active")
      .input("Password", sql.VarChar(2000), password)
      .input("FirstName", sql.VarChar(250), firstName)
      .input("MiddleName", sql.VarChar(250), middleName || null)
      .input("LastName", sql.VarChar(250), lastName || null)
      .input("Email", sql.VarChar(500), email)
      .input("ContactNo", sql.VarChar(50), contactNo)
      .input("Gender", sql.VarChar(50), gender || null)
      .input("AadharNo", sql.VarChar(2000), aadharNo || null)
      .input("PancardNo", sql.VarChar(2000), pancardNo || null)
      .input("BloodGroup", sql.VarChar(200), bloodGroup || null)
      .input("PrimaryUser", sql.Bit, primaryUser ?? 1)
      .input("Age", sql.VarChar(50), age || null)
      .input("Address", sql.VarChar(sql.MAX), address || null)
      .input("AlternativeNumber", sql.VarChar(50), alternativeNumber || null)
      .input("Remarks", sql.VarChar(2000), remarks || null)
      .input("CompanyName", sql.VarChar(2000), companyName || null)
      .input("CompanyID", sql.Int, companyID || null)
      .input("CompanyAddress", sql.VarChar(sql.MAX), companyAddress || null)
      .input("ShopAddress", sql.VarChar(sql.MAX), shopAddress || null)
      .input("Organisation", sql.VarChar(sql.MAX), organisation || null)
      .input("City", sql.VarChar(1500), city || null)
      .input("State", sql.VarChar(1500), state || null)
      .input("Comments", sql.VarChar(sql.MAX), comments || null)
      .input("GST", sql.VarChar(1500), gst || null)
      .input("Amount", sql.VarChar(250), amount || null)
      .input("Type", sql.VarChar(250), type || null)
      .input("TransactionLimit", sql.VarChar(250), transactionLimit || null)
      .input("CreatedBy", sql.Int, null)
      .execute("sp_User");

    res.status(200).json({
      success: true,
      message: "User registered successfully"
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Signup failed",
      error: error.message
    });
  }
});


app.post("/api/login", async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Email/Phone and password are required",
      });
    }

    const pool = await sql.connect({ dbConfig });

    const result = await pool.request()
      .input("EmailOrPhone", sql.VarChar(500), emailOrPhone)
      .input("Password", sql.VarChar(2000), password)
      .query(`
        SELECT TOP 1
          u.UserID,
          u.UserType,
          u.Status,
          spd.FirstName,
          spd.LastName,
          spd.Email,
          spd.ContactNo
        FROM [dbo].[User] u
        INNER JOIN [dbo].[UserSecurity] us
          ON u.UserID = us.UserID
        INNER JOIN [dbo].[SavedPassengerDtls] spd
          ON u.UserID = spd.UserID
        WHERE
          (spd.Email = @EmailOrPhone OR spd.ContactNo = @EmailOrPhone)
          AND us.[Password] = @Password
          AND u.[Status] = 'Active'
      `);

    if (result.recordset.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email/phone or password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.recordset[0],
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
});

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/api/upload-image", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const pool = await poolPromise;

    await pool.request()
      .input("UserID", sql.Int, 1)
      .input("PackageID", sql.Int, 101)
      .input("Section", sql.NVarChar, "Gallery")
      .input("SortOrder", sql.Int, 1)
      .input("FileName", sql.NVarChar, file.originalname)
      .input("FileData", sql.VarBinary(sql.MAX), file.buffer) // 🔥 important
      .input("CreatedBy", sql.Int, 1)
      .execute("InsertPackageMedia");

    res.json({ success: true, message: "Image uploaded" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
import fs from "fs";
import path from "path";

// app.get("/api/view-image/:id", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);

//     const pool = await poolPromise;

//     const result = await pool.request()
//       .input("MediaId", sql.Int, id)
//       .query(`
//         SELECT FileName, FileData
//         FROM PackageMedia
//         WHERE MediaId = @MediaId
//       `);

//     if (result.recordset.length === 0) {
//       return res.status(404).send("Image not found");
//     }

//     const fileName = result.recordset[0].FileName;
//     const fileData = result.recordset[0].FileData;

//     // 🔥 detect type
//     const ext = fileName.split(".").pop().toLowerCase();

//     let contentType = "image/jpeg";
//     if (ext === "png") contentType = "image/png";
//     if (ext === "jpg" || ext === "jpeg") contentType = "image/jpeg";

//     // 🔥 THIS IS KEY LINE
//     res.setHeader("Content-Type", contentType);
//     res.send(fileData);

//   } catch (err) {
//     console.error("❌ Error:", err);
//     res.status(500).send("Server error");
//   }
// });
// app.get("/api/packages", async (req, res) => {
//   try {
//     const pool = await sql.connect(dbConfig);

//     const result = await pool.request().query(`
//       SELECT
//         PackageID,
//         PackageName,
//         State,
//         Country,
//         [From],
//         [To],
//         Noofdays,
//         Shortdescription,
//         Description,
//         AdditionalNotes,
//         PackagePrice,
//         CreatedBy,
//         CreatedDt,
//         ModifiedBy,
//         ModifiedDt
//       FROM [Sanchar6T_Dev].[dbo].[Package]
//       ORDER BY PackageID ASC
//     `);

//     res.json({
//       success: true,
//       data: result.recordset,
//     });

//   } catch (err) {
//     console.error("❌ ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// });


app.get("/api/packages", async (req, res) => {
  try {
    const pool = await sql.connect({ dbConfig });

    const result = await pool.request().query(`
      SELECT
        p.PackageID,
        p.PackageName,
        p.State,
        p.Country,
        p.[From],
        p.[To],
        p.Noofdays,
        p.Shortdescription,
        p.Description,
        p.AdditionalNotes,
        p.PackagePrice,
        p.CreatedBy,
        p.CreatedDt,
        p.ModifiedBy,
        p.ModifiedDt,
        pm.MediaId
      FROM [Sanchar6T_PreProd].[dbo].[Package] p
      OUTER APPLY (
        SELECT TOP 1 MediaId
        FROM [Sanchar6T_PreProd].[dbo].[PackageMedia]
        WHERE PackageID = p.PackageID
        ORDER BY SortOrder ASC, MediaId ASC
      ) pm
      ORDER BY p.PackageID ASC
    `);

    res.json({
      success: true,
      data: result.recordset,
    });
  } catch (err) {
    console.error("❌ ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch packages",
      error: err.message,
    });
  }
});


app.get("/api/view-image/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!id || Number.isNaN(id)) {
      return res.status(400).send("Invalid MediaId");
    }

    const pool = await sql.connect({ dbConfig });

    const result = await pool.request()
      .input("MediaId", sql.Int, id)
      .query(`
        SELECT TOP 1 FileName, FileData
        FROM [Sanchar6T_PreProd].[dbo].[PackageMedia]
        WHERE MediaId = @MediaId
      `);

    if (!result.recordset || result.recordset.length === 0) {
      return res.status(404).send("Image not found");
    }

    const row = result.recordset[0];
    const fileName = row.FileName || "";
    const fileData = row.FileData;

    if (!fileData) {
      return res.status(404).send("Image data not found");
    }

    const ext = fileName.split(".").pop()?.toLowerCase();

    let contentType = "application/octet-stream";
    if (ext === "png") contentType = "image/png";
    else if (ext === "jpg" || ext === "jpeg") contentType = "image/jpeg";
    else if (ext === "gif") contentType = "image/gif";
    else if (ext === "webp") contentType = "image/webp";
    else if (ext === "bmp") contentType = "image/bmp";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `inline; filename="${fileName}"`);
    res.send(fileData);
  } catch (err) {
    console.error("❌ view-image error:", err);
    res.status(500).send(err.message || "Server error");
  }
});

app.get("/api/test-connection", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query("SELECT GETDATE() AS CurrentTime");

    res.json({
      success: true,
      message: "DB connected ✅",
      data: result.recordset
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Itinerary endpoint
app.post("/itinerary", async (req, res) => {
  try {
    const { city, days } = req.body;

    const prompt = `
🌍 Plan a fantastic ${days}-day travel itinerary for the beautiful city of ${city}! ✈️🏙️
For each day, provide:
- 🕒 Timings
- 🏞️ Places to visit
- 🍴 Meals or snacks
- 🚗 Transportation tips
- 🎉 Fun activities

Format response clearly with headings like "Day 1", "Day 2".
Use emojis for fun.`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a travel itinerary planner." },
          { role: "user", content: prompt },
        ],
        max_tokens: 1200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let itineraryText = response.data.choices[0].message.content;

    // 🔹 Clean response
    // Remove markdown headers (#, ##, ### etc.)
    itineraryText = itineraryText.replace(/#+\s?/g, "");

    // Remove bold markers (**)
    itineraryText = itineraryText.replace(/\*\*/g, "");

    // Wrap "Day X" as <h3> with blue color
    itineraryText = itineraryText.replace(
      /(Day\s*\d+)/gi,
      `<h3 style="color:#226cb2;">$1</h3>`
    );

    res.json({ itinerary: itineraryText });
  } catch (error) {
    console.error(error.message, error.response?.data);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
});

// ================= BusBookingDetails CRUD =================

// GET all BusBookingDetails
app.get("/api/bus-booking-details", async (req, res) => {
  try {
    let pool = await poolPromise;
    let result = await pool.request().query(`
      SELECT TOP (1000) *
      FROM [dbo].[BusBookingDetails]
      ORDER BY BusBooKingDetailID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL GET error:", err);
    res.status(500).json({ error: "Server error fetching bus booking details" });
  }
});

// GET BusBookingDetail by ID
app.get("/api/bus-booking-details/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid BusBooKingDetailID" });

  try {
    let pool = await poolPromise;
    let result = await pool.request()
      .input("BusBooKingDetailID", sql.Int, id)
      .query("SELECT * FROM [dbo].[BusBookingDetails] WHERE BusBooKingDetailID = @BusBooKingDetailID");

    if (result.recordset.length === 0) return res.status(404).json({ message: "Bus booking detail not found" });
    res.json(result.recordset[0]);
  } catch (err) {
    console.error("SQL GET by ID error:", err);
    res.status(500).json({ error: "Server error fetching bus booking detail" });
  }
});

// INSERT BusBookingDetail
app.post("/api/bus-booking-details", async (req, res) => {
  const { OperatorID, PackageID, WkEndSeatPrice, WkDaySeatPrice, DepartureTime, Arrivaltime, Status, CreatedBy } = req.body;

  try {
    let pool = await poolPromise;
    await pool.request()
      .input("Flag", sql.Char(1), "I")
      .input("BusBooKingDetailID", sql.Int, 0)
      .input("OperatorID", sql.Int, OperatorID)
      .input("PackageID", sql.Int, PackageID)
      .input("WkEndSeatPrice", sql.Numeric(18, 0), WkEndSeatPrice)
      .input("WkDaySeatPrice", sql.Numeric(18, 0), WkDaySeatPrice)
      .input("DepartureTime", sql.DateTime, DepartureTime)
      .input("Arrivaltime", sql.DateTime, Arrivaltime)
      .input("AvaialbleSeats", sql.DateTime, null)
      .input("Status", sql.VarChar(250), Status)
      .input("CreatedBy", sql.Int, CreatedBy)
      .execute("sp_BusBookingDetails");

    res.status(201).json({ message: "Bus booking detail created successfully" });
  } catch (err) {
    console.error("SQL INSERT error:", err);
    res.status(500).json({ error: err.message });
  }
});


const client = StandardCheckoutClient.getInstance(
  process.env.PHONEPE_CLIENT_ID,
  process.env.PHONEPE_CLIENT_SECRET,
  process.env.PHONEPE_CLIENT_VERSION,
  Env.SANDBOX // change to PRODUCTION later
);

// ================= BusBookingDetails CRUD =================

// GET all bus details with amenities
app.get("/api/bus-details", async (req, res) => {
  try {
    let pool = await poolPromise;

    const result = await pool.request().query(`
      SELECT 
        b.[BusBooKingDetailID],
        b.[OperatorID],
        b.[PackageID],
        b.[WkEndSeatPrice],
        b.[WkDaySeatPrice],
        b.[DepartureTime],
        b.[Arrivaltime],
        b.[Status],
        b.[PackageName],
        b.[BusNo],
        b.[BusSeats],
        b.[BusType],
        b.[FemaleSeatNo],
        a.[AMName]
      FROM [dbo].[vw_BusBookingDetails] b
      LEFT JOIN [dbo].[vw_BusAmenities] a
        ON b.OperatorID = a.BusOperatorID
    `);

    // Now group amenities for each bus
    const buses = {};
    result.recordset.forEach(row => {
      if (!buses[row.BusBooKingDetailID]) {
        buses[row.BusBooKingDetailID] = {
          BusBooKingDetailID: row.BusBooKingDetailID,
          OperatorID: row.OperatorID,
          PackageID: row.PackageID,
          WkEndSeatPrice: row.WkEndSeatPrice,
          WkDaySeatPrice: row.WkDaySeatPrice,
          DepartureTime: row.DepartureTime,
          Arrivaltime: row.Arrivaltime,
          Status: row.Status,
          PackageName: row.PackageName,
          BusNo: row.BusNo,
          BusSeats: row.BusSeats,
          BusType: row.BusType,
          FemaleSeatNo: row.FemaleSeatNo,
          amenities: []
        };
      }
      if (row.AMName) {
        buses[row.BusBooKingDetailID].amenities.push(row.AMName);
      }
    });

    const finalData = Object.values(buses);
    console.log("Bus Details with amenities:", finalData);
    res.json(finalData);

  } catch (err) {
    console.error("Error fetching bus details:", err);
    res.status(500).json({ error: "Server error fetching bus details" });
  }
});




app.post("/api/bus-booking-seat", async (req, res) => {
  try {
    const payload = req.body;
    const pool = await poolPromise;
    const procFullName = "dbo.sp_BusBookingSeat";

    // Convert SavePassengerDetails to 'Yes' or 'No' string for SP
    const saveFlag = payload.SavePassengerDetails === "Y" ? "Yes" : "No";

    const request = pool.request();

    // Map all parameters expected by your SP
    request.input("Flag", sql.Char(1), "I");
    request.input("BusBookingSeatID", sql.Int, payload.BusBookingSeatID ?? 0);
    request.input("BusBookingDetailsID", sql.Int, payload.BusBookingDetailsID);
    request.input("BusOperatorID", sql.Int, payload.BusOperatorID);
    request.input("UserID", sql.Int, payload.UserID ?? 0);
    request.input("ForSelf", sql.Bit, payload.ForSelf ? 1 : 0);
    request.input("IsPrimary", sql.Int, payload.IsPrimary ?? 1);
    request.input("SeatNo", sql.NVarChar(50), payload.SeatNo ?? null);
    request.input("FirstName", sql.VarChar(250), payload.FirstName ?? null);
    request.input("MiddleName", sql.VarChar(250), payload.MiddleName ?? null);
    request.input("LastName", sql.VarChar(250), payload.LastName ?? null);
    request.input("Email", sql.VarChar(150), payload.Email ?? null);
    request.input("ContactNo", sql.VarChar(50), payload.ContactNo ?? null);
    request.input("Gender", sql.VarChar(50), payload.Gender ?? null);
    request.input("AadharNo", sql.VarChar(20), payload.AadharNo ?? null);
    request.input("PancardNo", sql.VarChar(20), payload.PancardNo ?? null);
    request.input("BloodGroup", sql.VarChar(10), payload.BloodGroup ?? null);
    request.input("DOB", sql.DateTime, payload.DOB ? new Date(payload.DOB) : null);
    request.input("FoodPref", sql.VarChar(100), payload.FoodPref ?? null);
    request.input("Disabled", sql.Bit, payload.Disabled ? 1 : 0);
    request.input("Pregnant", sql.Bit, payload.Pregnant ? 1 : 0);
    request.input("RegisteredCompanyNumber", sql.VarChar(50), payload.RegisteredCompanyNumber ?? null);
    request.input("RegisteredCompanyName", sql.VarChar(50), payload.RegisteredCompanyName ?? null);
    request.input("DrivingLicence", sql.VarChar(100), payload.DrivingLicence ?? null);
    request.input("PassportNo", sql.VarChar(100), payload.PassportNo ?? null);
    request.input("RationCard", sql.VarChar(100), payload.RationCard ?? null);
    request.input("VoterID", sql.VarChar(100), payload.VoterID ?? null);
    request.input("Others", sql.VarChar(500), payload.Others ?? null);
    request.input("NRI", sql.Bit, payload.NRI ? 1 : 0);
    request.input("CreatedBy", sql.Int, payload.CreatedBy ?? 1);
    request.input("SavePassengerDetails", sql.VarChar(50), saveFlag);

    const result = await request.execute(procFullName);

    res.status(201).json({ message: "Booking saved successfully", result: result.recordset });
    //console.log (result);
  } catch (err) {
    console.error("SQL INSERT error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ error: err.message });
  }
});
// app.post("/api/payment/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     // 🔥 TEMP REDIRECT (for testing)
//     const redirectUrl = `https://sandbox.cashfree.com/pg/view/test?amount=${amount}`;

//     res.json({
//       success: true,
//       phonepeResponse: {
//         redirectUrl: redirectUrl
//       }
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


app.post("/api/payment/create-order", async (req, res) => {
  try {
    console.log("🔥 API HIT");

    const { amount, busBookingSeatIds } = req.body;

    // ✅ Validation
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    if (!Array.isArray(busBookingSeatIds) || busBookingSeatIds.length === 0) {
      return res.status(400).json({ error: "Seat IDs are required" });
    }

    console.log("🔥 Amount:", amount);
    console.log("🔥 Seat IDs:", busBookingSeatIds);

    // ✅ Better merchantOrderId (includes seatIds)
    const merchantOrderId = `ORD_${busBookingSeatIds.join("_")}_${Date.now()}`.substring(0, 35);

    // ✅ Redirect URL (important)
    const redirectUrl = `${process.env.BACK_END_URL}/payment/redirect?orderId=${merchantOrderId}&seatIds=${busBookingSeatIds.join(",")}`;

    console.log("🔥 Redirect URL:", redirectUrl);

    // ✅ Meta Info
    const metaInfo = MetaInfo.builder()
      .udf1("Sanchar6T")
      .build();

    // ✅ Payment Request
    const paymentRequest = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(Number(amount)) // already in paisa
      .redirectUrl(redirectUrl)
      .metaInfo(metaInfo)
      .build();

    console.log("🔥 Sending to PhonePe...");

    // ✅ Call PhonePe
    const response = await client.pay(paymentRequest);

    console.log("🔥 PhonePe Response:", response);

    if (!response?.redirectUrl) {
      throw new Error("No redirect URL from PhonePe");
    }

    // ✅ Final response
    return res.json({
      success: true,
      merchantOrderId,
      phonepeResponse: {
        redirectUrl: response.redirectUrl,
      },
    });

  } catch (err) {
    console.error("❌ FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      error: err.message || "Payment failed",
    });
  }
});

app.use(errorHandler)

const server = app.listen(PORT, () => {
  console.log(`✅ Server successfully running at http://localhost:${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ ERROR: Port ${PORT} is already in use.`);
    console.error('Please close the application running on that port or change the PORT number.');
  } else {
    console.error("❌ A severe error occurred while starting the server:", error);
  }
  process.exit(1);
});
