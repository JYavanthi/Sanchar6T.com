


// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const PriceDetails = ({
//   handleSubmit,
//   travellerData,
//   contactData,
//   gstData,
// }: {
//   handleSubmit: (flag: "Y" | "N") => void;
//   travellerData: any[];
//   contactData: any;
//   gstData: any;
// }) => {
//   const { state } = useLocation();
//   const { totalPrice = 0 } = state || {};
//   const navigate = useNavigate();

//   const [showPopup, setShowPopup] = useState(false);

//   const handleContinueClick = () => setShowPopup(true);

//   // const goToPayment = (flag: "Y" | "N") => {
//   //   handleSubmit(flag);
//   //   setShowPopup(false);
//   //   navigate("/payment", {
//   //     state: { totalPrice, travellerData, contactData, gstData },
//   //   });
//   // };
// const goToPayment = async (flag: "Y" | "N") => {
//   try {
//     await handleSubmit(flag);

//     const res = await axios.post(
//       "http://localhost:5000/create-order",
//       { amount: totalPrice }
//     );

//     const order = res.data;

//     const options = {
//       key: "rzp_test_RJLft75fL2W2QP",
//       amount: order.amount,
//       currency: order.currency,
//       name: "Sanchar6T Travel",
//       description: "Booking Payment",
//       order_id: order.id,

//       handler: async function (response: any) {
//         const verify = await axios.post(
//           "http://localhost:5000/verify-payment",
//           response
//         );

//         alert(verify.data.message);
//       },

//       theme: { color: "#3399cc" },
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open(); // 🔥 THIS IS REQUIRED

//   } catch (error) {
//     console.error(error);
//   }
// };

//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
//       <h3 className="text-lg font-semibold text-flixbus-text mb-4">Price details</h3>

//       <div className="space-y-3 mb-4">
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-flixbus-text">Base Fare</span>
//           <span className="font-semibold text-flixbus-text">₹{totalPrice}</span>
//         </div>

//         <div className="h-px bg-flixbus-border my-2"></div>

//         <div className="flex justify-between items-center">
//           <span className="text-base font-semibold text-flixbus-text">Amount</span>
//           <span className="text-lg font-bold text-flixbus-text">₹{totalPrice}</span>
//         </div>
//       </div>

//       <p className="text-xs text-flixbus-light-text mb-4">
//         Final payable amount will be updated on the next page
//       </p>

      
//       <button
//         onClick={handleContinueClick}
//         className="w-full bg-[#3D85C6] hover:bg-blue-600 text-white font-semibold py-3 text-base rounded-md"
//       >
//         CONTINUE
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
//             <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
//               Would you like to save the passenger details to your profile?
//             </h2>
//             <div className="flex justify-around mt-4">
//               <button
//                 onClick={() => goToPayment("Y")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => goToPayment("N")}
//                 className="px-4 py-2 rounded-md bg-[#4a4a4a] text-white hover:opacity-90"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PriceDetails;
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { API_URLS } from "../../../API-URLS";
const PriceDetails = ({
  handleSubmit,
  travellerData,
  contactData,
  gstData,
}: {
  handleSubmit: (flag: "Y" | "N") => Promise<any>; // ✅ must return data
  travellerData: any[];
  contactData: any;
  gstData: any;
}) => {
  const { state } = useLocation();
  const { totalPrice = 0 } = state || {};

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinueClick = () => setShowPopup(true);

const goToPayment = async (flag: "Y" | "N") => {
  try {
    setLoading(true);
    setShowPopup(false);

    // ✅ STEP 1: Get booking response
    const bookingResponse: any = await handleSubmit(flag);
    console.log("🔥 BOOKING RESPONSE:", bookingResponse);

    if (!bookingResponse) {
      alert("Booking failed. Please try again.");
      setLoading(false);
      return;
    }

    const bookingdtlsId = bookingResponse?.BookingdtlsID;
    const userId = bookingResponse?.UserID || 1;

    // ✅ FIX: ensure seatIds is NOT empty
    let busBookingSeatIds = bookingResponse?.BusBookingSeatIDs || [];

    if (!busBookingSeatIds || busBookingSeatIds.length === 0) {
      // fallback (VERY IMPORTANT)
      if (bookingResponse?.BusBookingSeatID) {
        busBookingSeatIds = [bookingResponse.BusBookingSeatID];
      }
    }

    console.log("✅ Seat IDs:", busBookingSeatIds);

    if (!bookingdtlsId || busBookingSeatIds.length === 0) {
      alert("Booking details not found.");
      setLoading(false);
      return;
    }

    // ✅ STEP 2: Save booking data
    // const bookingData = {
    //   travellerData,
    //   contactData: {
    //     ...contactData,
    //     UserID: userId,
    //   },
    //   gstData,
    //   totalPrice,
    //   bookingdtlsId,
    //   busBookingSeatIds,
    // };

    // localStorage.setItem("bookingData", JSON.stringify(bookingData));

    const bookingData = {
  travellerData,
  contactData,
  gstData,
  totalPrice,
  bookingdtlsId,
  busBookingSeatIds,
};

localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // ✅ STEP 3: Call PhonePe API
const res = await fetch(
  `${API_URLS.API_BASE_URL}/api/payment/create-order`,
  {
          method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalPrice * 100, // paisa
        busBookingSeatIds: busBookingSeatIds, // 🔥 REQUIRED
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("❌ Server error:", text);
      alert("Server error");
      setLoading(false);
      return;
    }

    const data = await res.json();
    console.log("🔥 PAYMENT RESPONSE:", data);

    // ✅ STEP 4: Redirect to PhonePe
    const redirectUrl =
      data?.phonepeResponse?.redirectUrl || data?.redirectUrl;

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error("❌ Payment failed:", data);
      alert("Payment initiation failed");
      setLoading(false);
    }

  } catch (error) {
    console.error("❌ Payment error:", error);
    alert("Something went wrong during payment");
    setLoading(false);
  }
};
  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4 relative">
      <h3 className="text-lg font-semibold text-flixbus-text mb-4">
        Price details
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-flixbus-text">Base Fare</span>
          <span className="font-semibold text-flixbus-text">
            ₹{totalPrice}
          </span>
        </div>

        <div className="h-px bg-flixbus-border my-2"></div>

        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-flixbus-text">
            Amount
          </span>
          <span className="text-lg font-bold text-flixbus-text">
            ₹{totalPrice}
          </span>
        </div>
      </div>

      <p className="text-xs text-flixbus-light-text mb-4">
        Final payable amount will be updated on the next page
      </p>

      {/* ✅ BUTTON */}
      <button
        onClick={handleContinueClick}
        disabled={loading}
        className={`w-full py-3 text-white font-semibold rounded-md ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#3D85C6] hover:bg-blue-600"
        }`}
      >
        {loading ? "Processing..." : "CONTINUE"}
      </button>

      {/* ✅ POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-[#3D85C6]">
              Would you like to save passenger details?
            </h2>

            <div className="flex justify-around mt-4">
              <button
                disabled={loading}
                onClick={() => goToPayment("Y")}
                className="px-4 py-2 bg-[#4a4a4a] text-white rounded-md"
              >
                Yes
              </button>

              <button
                disabled={loading}
                onClick={() => goToPayment("N")}
                className="px-4 py-2 bg-[#4a4a4a] text-white rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDetails;