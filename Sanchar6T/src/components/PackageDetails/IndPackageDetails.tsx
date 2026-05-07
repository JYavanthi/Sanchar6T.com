
// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Header from "../Header";
// import Footer from "../Footer";
// import "./IndPackageDetails.css";
// import { API_URLS } from "../../API-URLS";
// import {
//   CalendarDays,
//   Users,
//   Globe,
//   Clock3,
//   CircleCheck,
//   Bus,
//   X,
//   ArrowLeft,
//   ImageIcon,
// } from "lucide-react";

// type PackageItem = {
//   PackageID: number;
//   PackageName: string;
//   State: string;
//   Country: string;
//   From: string;
//   To: string;
//   Noofdays: number | string;
//   Shortdescription: string;
//   Description: string;
//   AdditionalNotes: string;
//   PackagePrice: number | string;
//   MediaId?: number | null;
// };

// type PackageData = {
//   PackageID: number;
//   PackageName: string;
//   State: string;
//   Country: string;
//   From: string;
//   To: string;
//   Noofdays: number;
//   Shortdescription: string;
//   Description: string;
//   AdditionalNotes: string;
//   PackagePrice: number;
//   MediaId?: number | null;
// };

// type PackageImage = {
//   MediaId: number;
//   PackageID: number;
//   FileName: string;
//   SortOrder: number | null;
// };

// type Highlight = {
//   PkgHighlightID: number;
//   PackageID: number;
//   Title: string;
//   Description: string;
//   IsActive: boolean | number;
// };

// type ImportantNote = {
//   PkgImpNoteID: number;
//   PackageID: number;
//   Description: string;
//   IsActive: boolean | number;
// };

// type IncludeItem = {
//   PkgIncludeID: number;
//   PackageID: number;
//   Description: string;
//   IsIncluded: boolean | number;
//   IsActive: boolean | number;
// };

// type ItineraryItem = {
//   PkgItineraryID: number;
//   PackageID: number;
//   Day: number;
//   FromTime: string;
//   ToTime: string;
//   Title: string;
//   Description: string;
//   IsActive: boolean | number;
// };



// const PackageDetails: React.FC = () => {
//   const navigate = useNavigate();
//   const { packageId } = useParams();

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [showAvailability, setShowAvailability] = useState(true);
//   const [showMobileAvailability, setShowMobileAvailability] = useState(false);

//   const [pkg, setPkg] = useState<PackageData | null>(null);
//   const [galleryImages, setGalleryImages] = useState<PackageImage[]>([]);
//   const [selectedMainImage, setSelectedMainImage] = useState<string>("");

//   const [highlights, setHighlights] = useState<Highlight[]>([]);
//   const [importantNotes, setImportantNotes] = useState<ImportantNote[]>([]);
//   const [includes, setIncludes] = useState<IncludeItem[]>([]);
//   const [excludes, setExcludes] = useState<IncludeItem[]>([]);
//   const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
// const [expandedTourIds, setExpandedTourIds] = useState<number[]>([]);
//   const [adults, setAdults] = useState<number>(1);
//   const [adultsInput, setAdultsInput] = useState<string>("1");
//   const [selectedDate, setSelectedDate] = useState<string>(() => {
//     const today = new Date();
//     return today.toISOString().split("T")[0];
//   });

//   const [allPackages, setAllPackages] = useState<PackageItem[]>([]);
//   const [packagesLoading, setPackagesLoading] = useState(true);

//   useEffect(() => {
//     if (!packageId) return;
//     fetchPackageDetails();
//     fetchPackageImages();
//     fetchAllPackages();
//   }, [packageId]);

//   const fetchPackageDetails = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await fetch(`${API_URLS.API_BASE}/packages/${packageId}/full-details`);
//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to fetch package details");
//       }

//       setPkg(result.data.package);
//       setHighlights(result.data.highlights || []);
//       setImportantNotes(result.data.importantNotes || []);
//       setIncludes(result.data.includes || []);
//       setExcludes(result.data.excludes || []);
//       setItinerary(result.data.itinerary || []);
//     } catch (err: any) {
//       console.error(err);
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
// const toggleTourReadMore = (id: number) => {
//   setExpandedTourIds((prev) =>
//     prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//   );
// };

//   const fetchPackageImages = async () => {
//     try {
//       const response = await fetch(`${API_URLS.API_BASE}/packages/${packageId}/images`);
//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to fetch package images");
//       }

//       const images = result.data || [];
//       setGalleryImages(images);

//       if (images.length > 0) {
//         setSelectedMainImage(`${API_URLS.API_BASE}/view-image/${images[0].MediaId}`);
//       } else {
//         setSelectedMainImage("");
//       }
//     } catch (err) {
//       console.error("Package images fetch error:", err);
//       setGalleryImages([]);
//       setSelectedMainImage("");
//     }
//   };

//   const fetchAllPackages = async () => {
//     try {
//       setPackagesLoading(true);

//       const response = await fetch(`${API_URLS.API_BASE}/packages`);
//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to fetch packages");
//       }

//       setAllPackages(result.data || []);
//     } catch (err) {
//       console.error("Packages fetch error:", err);
//       setAllPackages([]);
//     } finally {
//       setPackagesLoading(false);
//     }
//   };

//   const getPackageImage = (tourPkg: PackageItem) => {
//     if (tourPkg.MediaId) {
//       return `${API_URLS.API_BASE}/view-image/${tourPkg.MediaId}`;
//     }
//     return "";
//   };

//   const formatDuration = (days: number | string) => {
//     const value = Number(days);
//     if (!isNaN(value)) {
//       return value === 1 ? "1 Day" : `${value} Days`;
//     }
//     return `${days}`;
//   };

//   const getTourDescription = (tourPkg: PackageItem) => {
//     return (
//       tourPkg.Shortdescription ||
//       tourPkg.Description ||
//       tourPkg.AdditionalNotes ||
//       "Package details not available."
//     );
//   };

//   const relatedPackages = useMemo(() => {
//     if (!pkg) return [];

//     return allPackages
//       .filter((item) => item.PackageID !== pkg.PackageID)
//       .slice(0, 10);
//   }, [allPackages, pkg]);

//   const groupedItinerary = useMemo(() => {
//     return itinerary.reduce((acc: Record<number, ItineraryItem[]>, item) => {
//       if (!acc[item.Day]) acc[item.Day] = [];
//       acc[item.Day].push(item);
//       return acc;
//     }, {});
//   }, [itinerary]);

//   const formattedSelectedDate = useMemo(() => {
//     if (!selectedDate) return "Select date";
//     const date = new Date(selectedDate);
//     return date.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }, [selectedDate]);

//   const totalPrice = useMemo(() => {
//     if (!pkg) return 0;
//     return Number(pkg.PackagePrice || 0) * adults;
//   }, [pkg, adults]);

//   const handleAdultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const rawValue = e.target.value;

//     setAdultsInput(rawValue);

//     if (rawValue === "") return;

//     const value = Number(rawValue);

//     if (value < 1) {
//       alert("Select at least 1 adult");
//       setAdults(1);
//       setAdultsInput("1");
//       return;
//     }

//     setAdults(value);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "ArrowDown" && adults <= 1) {
//       e.preventDefault();
//       alert("Select at least 1 adult");
//       setAdults(1);
//       setAdultsInput("1");
//     }

//     if (["-", "e", "E", "."].includes(e.key)) {
//       e.preventDefault();
//     }
//   };


  
//   const handleAdultBlur = () => {
//     if (adultsInput.trim() === "") {
//       alert("Select at least 1 adult");
//       setAdults(1);
//       setAdultsInput("1");
//       return;
//     }

//     const value = Number(adultsInput);

//     if (isNaN(value) || value < 1) {
//       alert("Select at least 1 adult");
//       setAdults(1);
//       setAdultsInput("1");
//       return;
//     }

//     setAdults(value);
//     setAdultsInput(String(value));
//   };

//  useEffect(() => {
//   if (!galleryImages || galleryImages.length === 0) return;

//   // ✅ Only run for mobile screens
//   if (window.innerWidth > 768) return;

//   const interval = setInterval(() => {
//     setCurrentIndex((prev) =>
//       prev === galleryImages.length - 1 ? 0 : prev + 1
//     );
//   }, 2000); // 2 sec (you wanted)

//   return () => clearInterval(interval);
// }, [galleryImages]);
//   if (loading) {
//     return (
//       <>
//         <Header />
//         <div className="tirupati-page">
//           <div className="tirupati-container">
//             <h2>Loading package details...</h2>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (error || !pkg) {
//     return (
//       <>
//         <Header />
//         <div className="tirupati-page">
//           <div className="tirupati-container">
//             <h2>{error || "Package not found"}</h2>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       <div className="tirupati-page">
//         <div>
//           <p className="package-breadcrumb">
//             {pkg.State} / {pkg.PackageName}
//           </p>

//           <h1 className="page-title">
//             Discover {pkg.PackageName}
//           </h1>
//         </div>

//         <div className="tirupati-container">
//           <div className="T-hero-left">
//             <div className="gallery-wrap">
//               <div className="gallery-left-big">
//                 {selectedMainImage ? (
//                   <img
//                     // src={selectedMainImage}
//                      key={currentIndex} 
//                     src={
//   galleryImages[currentIndex]
//     ? `${API_URLS.API_BASE}/view-image/${galleryImages[currentIndex].MediaId}`
//     : selectedMainImage
// }
//                     alt={pkg.PackageName}
//                     className="gallery-main-img"
//                       style={{
//     animation: "fadeIn 1.6s ease"
//   }}
//                   />
//                 ) : (
//                   <div className="gallery-main-img no-image-box">No Image</div>
//                 )}
//                 <div className="mobile-gallery-actions">
//   <button className="mobile-gallery-circle">
//     <ArrowLeft size={20} />
//   </button>

 
// </div>

// <div className="mobile-gallery-bottom">
//  <div className="mobile-gallery-dots">
//   {galleryImages.slice(0, 5).map((img, index) => (
//     <span
//       key={img.MediaId}
//       className={
//         index === currentIndex
//           ? "mobile-gallery-dot active"
//           : "mobile-gallery-dot"
//       }
//       onClick={() => setCurrentIndex(index)}
//       style={{ cursor: "pointer" }}
//     />
//   ))}
// </div>

//   <div className="mobile-gallery-count">
//     <ImageIcon size={16} />
//     <span>{galleryImages.length}</span>
//   </div>
// </div>
//               </div>

//               <div className="gallery-right-grid">
//                 {galleryImages.length > 0 ? (
//                   galleryImages.slice(0, 4).map((img, index) => (
//                     <div
//                       className="gallery-small-card"
//                       key={img.MediaId}
//                       onClick={() => setSelectedMainImage(`${API_URLS.API_BASE}/view-image/${img.MediaId}`)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <img
//                         src={`${API_URLS.API_BASE}/view-image/${img.MediaId}`}
//                         alt={img.FileName || `${pkg.PackageName} ${index + 1}`}
//                         className="gallery-small-img"
//                       />
//                       {index === 3 && galleryImages.length > 4 && (
//                         <button className="gallery-view-btn">
//                           View all
//                         </button>
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="gallery-small-card">
//                     <div className="gallery-small-img no-image-box">No Image</div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {showAvailability && (
//               <div className="availability-inline-wrap desktop-availability-inline">
//                 <div className="gallery-availability-header">
//                   <h2 className="availability-modal-heading">1 option available</h2>
//                   <button
//                     type="button"
//                     className="availability-close-btn"
//                     onClick={() => setShowAvailability(false)} > 
  
//                     <X size={20} />
//                   </button>
//                 </div>

//                 <div className="availability-option-card">
//                   <h3>{pkg.PackageName}</h3>

//                   <div className="availability-option-top">
//                     <div className="availability-mini-info">
//                       <Clock3 size={20} />
//                       <span>{pkg.Noofdays} Days</span>
//                     </div>

//                     <div className="availability-mini-info">
//                       <Globe size={20} />
//                       <span>English</span>
//                     </div>
//                   </div>

//                   <div className="availability-pickup-row">
//                     <Bus size={20} />
//                     <div>
//                       <h4>Pickup route</h4>
//                       <p>
//                         {pkg.From} to {pkg.To}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="availability-divider"></div>

//                   <div className="availability-starting-block">
//                     <p className="starting-label">Travel date</p>
//                     <p className="starting-date">{formattedSelectedDate}</p>
//                     <h4 className="starting-hour">
//                       {adults} Adult{adults > 1 ? "s" : ""}
//                     </h4>
//                   </div>

//                   <div className="availability-divider"></div>

//                   <div className="availability-bottom-row">
//                     <div>
//                       <h2 className="availability-bottom-price">₹{totalPrice}</h2>
//                       <p>
//                         {adults} Adult{adults > 1 ? "s" : ""} x ₹{pkg.PackagePrice}
//                       </p>
//                     </div>

//                     <div className="availability-action-buttons">
//                       <button
//                         type="button"
//                         className="book-now-btn"
//                         onClick={() =>
//                           navigate("/bus-booking", {
//                             state: {
//                               packageId: pkg.PackageID,
//                               adults,
//                               travelDate: selectedDate,
//                               totalPrice,
//                             },
//                           })
//                         }
//                       >
//                         Book now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <p className="hero-description">
//               {pkg.Description || pkg.Shortdescription}
//             </p>

//             <div className="highlights-section">
//               <h2>Highlights</h2>
//               <div className="highlights-list">
//                 {highlights.length > 0 ? (
//                   highlights.map((item) => (
//                     <div className="highlight-item" key={item.PkgHighlightID}>
//                       <span className="highlight-icon"></span>
//                       <p>{item.Title || item.Description}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No highlights available.</p>
//                 )}
//               </div>
//             </div>

//             <div className="itinerary-section">
//               <h2 className="section-heading">Brief itinerary</h2>

//               <div className="itinerary-table-wrap">
//                 <table className="itinerary-table">
//                   <thead>
//                     <tr>
//                       <th>Day</th>
//                       <th>Title</th>
//                       <th>Description</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {itinerary.length > 0 ? (
//                       itinerary.map((item) => (
//                         <tr key={item.PkgItineraryID}>
//                           <td>Day {item.Day}</td>
//                           <td>{item.Title}</td>
//                           <td>{item.Description}</td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={3}>No itinerary available.</td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {Object.keys(groupedItinerary).map((dayKey) => (
//               <div className="day-details-section" key={dayKey}>
//                 <h2 className="day-title">Day {dayKey}</h2>

//                 <div className="day1-content">
//                   <ul className="day1-points">
//                     {groupedItinerary[Number(dayKey)].map((item) => (
//                       <li key={item.PkgItineraryID}>
//                         <strong>
//                           {item.FromTime} {item.ToTime ? `- ${item.ToTime}` : ""} - {item.Title}
//                         </strong>
//                         <p>{item.Description}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}

//             <div className="day-details-section">
//               <h2 className="day-title">Important Notes</h2>
//               <div className="day1-content">
//                 <ul className="day1-points">
//                   {importantNotes.length > 0 ? (
//                     importantNotes.map((note) => {
//                       const sentences = note.Description
//                         ?.split(".")
//                         .map((s) => s.trim())
//                         .filter((s) => s.length > 0);

//                       return sentences.map((sentence, index) => (
//                         <li key={`${note.PkgImpNoteID}-${index}`}>
//                           <p>{sentence}.</p>
//                         </li>
//                       ));
//                     })
//                   ) : (
//                     <li>
//                       <p>No important notes available.</p>
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </div>

//             <div className="day-details-section">
//               <h2 className="day-title">Includes</h2>
//               <div className="day1-content">
//                 <ul className="day1-points">
//                   {includes.length > 0 ? (
//                     includes.map((item) => (
//                       <li key={item.PkgIncludeID}>
//                         <p>{item.Description}</p>
//                       </li>
//                     ))
//                   ) : (
//                     <li>
//                       <p>No included items available.</p>
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </div>

//             <div className="day-details-section">
//               <h2 className="day-title">Excludes</h2>
//               <div className="day1-content">
//                 <ul className="day1-points">
//                   {excludes.length > 0 ? (
//                     excludes.map((item) => (
//                       <li key={item.PkgIncludeID}>
//                         <p>{item.Description}</p>
//                       </li>
//                     ))
//                   ) : (
//                     <li>
//                       <p>No excluded items available.</p>
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="T-hero-right">
//             <div className="availability-card">
//               <p className="availability-from">From</p>

//               <div className="availability-price-row">
//                 <h2>₹{totalPrice}</h2>
//                 <span>
//                   for {adults} person{adults > 1 ? "s" : ""}
//                 </span>
//               </div>

//               <div className="availability-select-box availability-input-box">
//                 <Users size={18} />
//                 <input
//                   type="number"
//                   min="1"
//                   step="1"
//                   value={adultsInput}
//                   onChange={handleAdultChange}
//                   onKeyDown={handleKeyDown}
//                   onBlur={handleAdultBlur}
//                   className="availability-field-input"
//                 />
//                 <span>Adult{adults > 1 ? "s" : ""}</span>
//               </div>

//               <div className="availability-select-box availability-input-box">
//                 <CalendarDays size={18} />
//                 <input
//                   type="date"
//                   min={new Date().toISOString().split("T")[0]}
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="availability-date-input"
//                 />
//               </div>

//               <div className="availability-select-box">
//                 <Globe size={18} />
//                 <span>English</span>
//               </div>

//               <button
//                 type="button"
//                 className="check-availability-btn"
//                 // onClick={() => setShowAvailability(true)}
//                 onClick={() => {
//   setShowAvailability(true);
//   setShowMobileAvailability(true);
// }}
//               >
//                 Check availability
//               </button>

//               <div className="availability-features">
//                 <div className="availability-feature-item">
//                   <CircleCheck size={18} />
//                   <div>
//                     <h4>Free cancellation</h4>
//                     <p>Cancel up to 24 hours in advance for a full refund</p>
//                   </div>
//                 </div>

//                 <div className="availability-feature-item">
//                   <CircleCheck size={18} />
//                   <div>
//                     <h4>Reserve now & pay later</h4>
//                     <p>Keep your travel plans flexible — book your spot and pay later.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {showMobileAvailability && (
//   <div className="mobile-availability-inline">
//     <div className="gallery-availability-header">
//       <h2 className="availability-modal-heading">1 option available</h2>

//       <button
//         type="button"
//         className="availability-close-btn"
//         onClick={() => setShowMobileAvailability(false)}
//       >
//         <X size={20} />
//       </button>
//     </div>

//     <div className="availability-option-card">
//       <h3>{pkg.PackageName}</h3>

//       <div className="availability-option-top">
//         <div className="availability-mini-info">
//           <Clock3 size={20} />
//           <span>{pkg.Noofdays} Days</span>
//         </div>

//         <div className="availability-mini-info">
//           <Globe size={20} />
//           <span>English</span>
//         </div>
//       </div>

//       <div className="availability-pickup-row">
//         <Bus size={20} />
//         <div>
//           <h4>Pickup route</h4>
//           <p>{pkg.From} to {pkg.To}</p>
//         </div>
//       </div>

//       <div className="availability-divider"></div>

//       <div className="availability-starting-block">
//         <p className="starting-label">Travel date</p>
//         <p className="starting-date">{formattedSelectedDate}</p>
//         <h4 className="starting-hour">
//           {adults} Adult{adults > 1 ? "s" : ""}
//         </h4>
//       </div>

//       <div className="availability-divider"></div>

//       <div className="availability-bottom-row">
//         <div>
//           <h2 className="availability-bottom-price">₹{totalPrice}</h2>
//           <p>
//             {adults} Adult{adults > 1 ? "s" : ""} x ₹{pkg.PackagePrice}
//           </p>
//         </div>

//         <button
//           type="button"
//           className="book-now-btn"
//           onClick={() =>
//             navigate("/bus-booking", {
//               state: {
//                 packageId: pkg.PackageID,
//                 adults,
//                 travelDate: selectedDate,
//                 totalPrice,
//               },
//             })
//           }
//         >
//           Book now
//         </button>
//       </div>
//     </div>
//   </div>
// )}
           

//             <div className="tour-list-card">
//               <h2>Explore India through Sanchar6T</h2>

//               <div className="tour-list">
//                 {packagesLoading ? (
//                   <p>Loading packages...</p>
//                 ) : relatedPackages.length > 0 ? (
//                   relatedPackages.map((tourPkg) => (
//                     <div
//                       className="tour-item"
//                       key={tourPkg.PackageID}
//                       onClick={() => navigate(`/package-details/${tourPkg.PackageID}`)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       {tourPkg.MediaId ? (
//                         <img
//                           src={getPackageImage(tourPkg)}
//                           alt={tourPkg.PackageName}
//                           className="tour-img"
//                         />
//                       ) : (
//                         <div className="tour-img no-image-box">No Image</div>
//                       )}

//                       <div className="tour-content">
//                         <h3>{tourPkg.PackageName}</h3>
//                         {/* <p>{getTourDescription(tourPkg)}</p> */}
//                         <p
//   className={
//     expandedTourIds.includes(tourPkg.PackageID)
//       ? "tour-desc tour-desc-expanded"
//       : "tour-desc"
//   }
// >
//   {getTourDescription(tourPkg)}
// </p>

// {getTourDescription(tourPkg).length > 70 && (
//   <button
//     type="button"
//     className="tour-read-more-btn"
//     onClick={(e) => {
//       e.stopPropagation();
//       toggleTourReadMore(tourPkg.PackageID);
//     }}
//   >
//     {expandedTourIds.includes(tourPkg.PackageID)
//       ? "Read less"
//       : "Read more"}
//   </button>
// )}
//                         <span className="tour-days-text">
//                           {formatDuration(tourPkg.Noofdays)}
//                         </span>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No packages found.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2 className="reviews-title">Traveler’s Reviews</h2>
//         <div className="reviews-card">
//           <div className="review-item">
//             <div className="review-top">
//               <div className="review-avatar">A</div>
//               <div className="review-content">
//                 <h3>Ananya Rao</h3>
//                 <p className="review-location">Bangalore, Karnataka</p>
//                 <div className="review-stars">★★★★★</div>
//               </div>
//             </div>
//             <p className="review-text">
//               "Sanchar6T made my entire travel experience seamless and unforgettable! From planning my itinerary to booking stays and transport, everything was handled with such professionalism and care."
//             </p>
//           </div>

//           <div className="review-item">
//             <div className="review-top">
//               <div className="review-avatar">H</div>
//               <div className="review-content">
//                 <h3>Harsh Vardhan</h3>
//                 <p className="review-location">Hyderabad, Telangana</p>
//                 <div className="review-stars">★★★★★</div>
//               </div>
//             </div>
//             <p className="review-text">
//               "The Tirupati trip was very well organized. Darshan timings, hotel stay, and local travel were all smooth. A peaceful and memorable journey for our family."
//             </p>
//           </div>

//           <div className="review-item">
//             <div className="review-top">
//               <div className="review-avatar">S</div>
//               <div className="review-content">
//                 <h3>Sneha Kapoor</h3>
//                 <p className="review-location">Mumbai, Maharashtra</p>
//                 <div className="review-stars">★★★★★</div>
//               </div>
//             </div>
//             <p className="review-text">
//               "Beautiful experience and well-managed package. The temple visit and stay arrangement were both comfortable and hassle-free."
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default PackageDetails;

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./IndPackageDetails.css";
import { API_URLS } from "../../API-URLS";
import {
  CalendarDays,
  Users,
  Globe,
  Clock3,
  CircleCheck,
  Bus,
  X,
  ArrowLeft,
  ImageIcon,
} from "lucide-react";

type PackageItem = {
  PackageID: number;
  PackageName: string;
  State: string;
  Country: string;
  From: string;
  To: string;
  Noofdays: number | string;
  Shortdescription: string;
  Description: string;
  AdditionalNotes: string;
  PackagePrice: number | string;
  MediaId?: number | null;
};

type PackageData = {
  PackageID: number;
  PackageName: string;
  State: string;
  Country: string;
  From: string;
  To: string;
  Noofdays: number;
  Shortdescription: string;
  Description: string;
  AdditionalNotes: string;
  PackagePrice: number;
  MediaId?: number | null;
};

type PackageImage = {
  MediaId: number;
  PackageID: number;
  FileName: string;
  SortOrder: number | null;
};

type Highlight = {
  PkgHighlightID: number;
  PackageID: number;
  Title: string;
  Description: string;
  IsActive: boolean | number;
};

type ImportantNote = {
  PkgImpNoteID: number;
  PackageID: number;
  Description: string;
  IsActive: boolean | number;
};

type IncludeItem = {
  PkgIncludeID: number;
  PackageID: number;
  Description: string;
  IsIncluded: boolean | number;
  IsActive: boolean | number;
};

type ItineraryItem = {
  PkgItineraryID: number;
  PackageID: number;
  Day: number;
  FromTime: string;
  ToTime: string;
  Title: string;
  Description: string;
  IsActive: boolean | number;
};



const PackageDetails: React.FC = () => {
  const navigate = useNavigate();
  const { packageId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAvailability, setShowAvailability] = useState(true);
  const [showMobileAvailability, setShowMobileAvailability] = useState(false);

  const [pkg, setPkg] = useState<PackageData | null>(null);
  const [galleryImages, setGalleryImages] = useState<PackageImage[]>([]);
  const [selectedMainImage, setSelectedMainImage] = useState<string>("");

  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [importantNotes, setImportantNotes] = useState<ImportantNote[]>([]);
  const [includes, setIncludes] = useState<IncludeItem[]>([]);
  const [excludes, setExcludes] = useState<IncludeItem[]>([]);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
const [expandedTourIds, setExpandedTourIds] = useState<number[]>([]);
  const [adults, setAdults] = useState<number>(1);
  const [adultsInput, setAdultsInput] = useState<string>("1");
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [allPackages, setAllPackages] = useState<PackageItem[]>([]);
  const [packagesLoading, setPackagesLoading] = useState(true);

  useEffect(() => {
    if (!packageId) return;
    fetchPackageDetails();
    fetchPackageImages();
    fetchAllPackages();
  }, [packageId]);

  const fetchPackageDetails = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URLS.API_BASE_URL}/packages/${packageId}/full-details`);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch package details");
      }

      setPkg(result.data.package);
      setHighlights(result.data.highlights || []);
      setImportantNotes(result.data.importantNotes || []);
      setIncludes(result.data.includes || []);
      setExcludes(result.data.excludes || []);
      setItinerary(result.data.itinerary || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
const toggleTourReadMore = (id: number) => {
  setExpandedTourIds((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
};

  const fetchPackageImages = async () => {
    try {
      const response = await fetch(`${API_URLS.API_BASE_URL}/packages/${packageId}/images`);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch package images");
      }

      const images = result.data || [];
      setGalleryImages(images);

      if (images.length > 0) {
        setSelectedMainImage(`${API_URLS.API_BASE_URL}/view-image/${images[0].MediaId}`);
      } else {
        setSelectedMainImage("");
      }
    } catch (err) {
      console.error("Package images fetch error:", err);
      setGalleryImages([]);
      setSelectedMainImage("");
    }
  };

  const fetchAllPackages = async () => {
    try {
      setPackagesLoading(true);

      const response = await fetch(`${API_URLS.API_BASE_URL}/packages`);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch packages");
      }

      setAllPackages(result.data || []);
    } catch (err) {
      console.error("Packages fetch error:", err);
      setAllPackages([]);
    } finally {
      setPackagesLoading(false);
    }
  };

  const getPackageImage = (tourPkg: PackageItem) => {
    if (tourPkg.MediaId) {
      return `${API_URLS.API_BASE_URL}/view-image/${tourPkg.MediaId}`;
    }
    return "";
  };

  const formatDuration = (days: number | string) => {
    const value = Number(days);
    if (!isNaN(value)) {
      return value === 1 ? "1 Day" : `${value} Days`;
    }
    return `${days}`;
  };

  const getTourDescription = (tourPkg: PackageItem) => {
    return (
      tourPkg.Shortdescription ||
      tourPkg.Description ||
      tourPkg.AdditionalNotes ||
      "Package details not available."
    );
  };

  const relatedPackages = useMemo(() => {
    if (!pkg) return [];

    return allPackages
      .filter((item) => item.PackageID !== pkg.PackageID)
      .slice(0, 10);
  }, [allPackages, pkg]);

  const groupedItinerary = useMemo(() => {
    return itinerary.reduce((acc: Record<number, ItineraryItem[]>, item) => {
      if (!acc[item.Day]) acc[item.Day] = [];
      acc[item.Day].push(item);
      return acc;
    }, {});
  }, [itinerary]);

  const formattedSelectedDate = useMemo(() => {
    if (!selectedDate) return "Select date";
    const date = new Date(selectedDate);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [selectedDate]);

  const totalPrice = useMemo(() => {
    if (!pkg) return 0;
    return Number(pkg.PackagePrice || 0) * adults;
  }, [pkg, adults]);

  const handleAdultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    setAdultsInput(rawValue);

    if (rawValue === "") return;

    const value = Number(rawValue);

    if (value < 1) {
      alert("Select at least 1 adult");
      setAdults(1);
      setAdultsInput("1");
      return;
    }

    setAdults(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && adults <= 1) {
      e.preventDefault();
      alert("Select at least 1 adult");
      setAdults(1);
      setAdultsInput("1");
    }

    if (["-", "e", "E", "."].includes(e.key)) {
      e.preventDefault();
    }
  };


  
  const handleAdultBlur = () => {
    if (adultsInput.trim() === "") {
      alert("Select at least 1 adult");
      setAdults(1);
      setAdultsInput("1");
      return;
    }

    const value = Number(adultsInput);

    if (isNaN(value) || value < 1) {
      alert("Select at least 1 adult");
      setAdults(1);
      setAdultsInput("1");
      return;
    }

    setAdults(value);
    setAdultsInput(String(value));
  };

 useEffect(() => {
  if (!galleryImages || galleryImages.length === 0) return;

  // ✅ Only run for mobile screens
  if (window.innerWidth > 768) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, 2000); // 2 sec (you wanted)

  return () => clearInterval(interval);
}, [galleryImages]);
  if (loading) {
    return (
      <>
        <Header />
        <div className="tirupati-page">
          <div className="tirupati-container">
            <h2>Loading package details...</h2>
          </div>
        </div>
      </>
    );
  }

  if (error || !pkg) {
    return (
      <>
        <Header />
        <div className="tirupati-page">
          <div className="tirupati-container">
            <h2>{error || "Package not found"}</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="tirupati-page">
        <div>
          <p className="package-breadcrumb">
            {pkg.State} / {pkg.PackageName}
          </p>

          <h1 className="page-title">
            Discover {pkg.PackageName}
          </h1>
        </div>

        <div className="tirupati-container">
          <div className="T-hero-left">
            <div className="gallery-wrap">
              <div className="gallery-left-big">
                {selectedMainImage ? (
                  <img
                    // src={selectedMainImage}
                     key={currentIndex} 
                    src={
  galleryImages[currentIndex]
    ? `${API_URLS.API_BASE_URL}/view-image/${galleryImages[currentIndex].MediaId}`
    : selectedMainImage
}
                    alt={pkg.PackageName}
                    className="gallery-main-img"
                      style={{
    animation: "fadeIn 1.6s ease"
  }}
                  />
                ) : (
                  <div className="gallery-main-img no-image-box">No Image</div>
                )}
                <div className="mobile-gallery-actions">
  <button className="mobile-gallery-circle">
    <ArrowLeft size={20} />
  </button>

 
</div>

<div className="mobile-gallery-bottom">
 <div className="mobile-gallery-dots">
  {galleryImages.slice(0, 5).map((img, index) => (
    <span
      key={img.MediaId}
      className={
        index === currentIndex
          ? "mobile-gallery-dot active"
          : "mobile-gallery-dot"
      }
      onClick={() => setCurrentIndex(index)}
      style={{ cursor: "pointer" }}
    />
  ))}
</div>

  <div className="mobile-gallery-count">
    <ImageIcon size={16} />
    <span>{galleryImages.length}</span>
  </div>
</div>
              </div>

              <div className="gallery-right-grid">
                {galleryImages.length > 0 ? (
                  galleryImages.slice(0, 4).map((img, index) => (
                    <div
                      className="gallery-small-card"
                      key={img.MediaId}
                      onClick={() => setSelectedMainImage(`${API_URLS.API_BASE_URL}/view-image/${img.MediaId}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`${API_URLS.API_BASE_URL}/view-image/${img.MediaId}`}
                        alt={img.FileName || `${pkg.PackageName} ${index + 1}`}
                        className="gallery-small-img"
                      />
                      {index === 3 && galleryImages.length > 4 && (
                        <button className="gallery-view-btn">
                          View all
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="gallery-small-card">
                    <div className="gallery-small-img no-image-box">No Image</div>
                  </div>
                )}
              </div>
            </div>

            {showAvailability && (
              <div className="availability-inline-wrap desktop-availability-inline">
                <div className="gallery-availability-header">
                  <h2 className="availability-modal-heading">1 option available</h2>
                  <button
                    type="button"
                    className="availability-close-btn"
                    onClick={() => setShowAvailability(false)} > 
  
                    <X size={20} />
                  </button>
                </div>

                <div className="availability-option-card">
                  <h3>{pkg.PackageName}</h3>

                  <div className="availability-option-top">
                    <div className="availability-mini-info">
                      <Clock3 size={20} />
                      <span>{pkg.Noofdays} Days</span>
                    </div>

                    <div className="availability-mini-info">
                      <Globe size={20} />
                      <span>English</span>
                    </div>
                  </div>

                  <div className="availability-pickup-row">
                    <Bus size={20} />
                    <div>
                      <h4>Pickup route</h4>
                      <p>
                        {pkg.From} to {pkg.To}
                      </p>
                    </div>
                  </div>

                  <div className="availability-divider"></div>

                  <div className="availability-starting-block">
                    <p className="starting-label">Travel date</p>
                    <p className="starting-date">{formattedSelectedDate}</p>
                    <h4 className="starting-hour">
                      {adults} Adult{adults > 1 ? "s" : ""}
                    </h4>
                  </div>

                  <div className="availability-divider"></div>

                  <div className="availability-bottom-row">
                    <div>
                      <h2 className="availability-bottom-price">₹{totalPrice}</h2>
                      <p>
                        {adults} Adult{adults > 1 ? "s" : ""} x ₹{pkg.PackagePrice}
                      </p>
                    </div>

                    <div className="availability-action-buttons">
                      <button
                        type="button"
                        className="book-now-btn"
                        onClick={() =>
                          navigate("/bus-booking", {
                            state: {
                              packageId: pkg.PackageID,
                              adults,
                              travelDate: selectedDate,
                              totalPrice,
                            },
                          })
                        }
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="hero-description">
              {pkg.Description || pkg.Shortdescription}
            </p>

            <div className="highlights-section">
              <h2>Highlights</h2>
              <div className="highlights-list">
                {highlights.length > 0 ? (
                  highlights.map((item) => (
                    <div className="highlight-item" key={item.PkgHighlightID}>
                      <span className="highlight-icon"></span>
                      <p>{item.Title || item.Description}</p>
                    </div>
                  ))
                ) : (
                  <p>No highlights available.</p>
                )}
              </div>
            </div>

            <div className="itinerary-section">
              <h2 className="section-heading">Brief itinerary</h2>

              <div className="itinerary-table-wrap">
                <table className="itinerary-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itinerary.length > 0 ? (
                      itinerary.map((item) => (
                        <tr key={item.PkgItineraryID}>
                          <td>Day {item.Day}</td>
                          <td>{item.Title}</td>
                          <td>{item.Description}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3}>No itinerary available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {Object.keys(groupedItinerary).map((dayKey) => (
              <div className="day-details-section" key={dayKey}>
                <h2 className="day-title">Day {dayKey}</h2>

                <div className="day1-content">
                  <ul className="day1-points">
                    {groupedItinerary[Number(dayKey)].map((item) => (
                      <li key={item.PkgItineraryID}>
                        <strong>
                          {item.FromTime} {item.ToTime ? `- ${item.ToTime}` : ""} - {item.Title}
                        </strong>
                        <p>{item.Description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="day-details-section">
              <h2 className="day-title">Important Notes</h2>
              <div className="day1-content">
                <ul className="day1-points">
                  {importantNotes.length > 0 ? (
                    importantNotes.map((note) => {
                      const sentences = note.Description
                        ?.split(".")
                        .map((s) => s.trim())
                        .filter((s) => s.length > 0);

                      return sentences.map((sentence, index) => (
                        <li key={`${note.PkgImpNoteID}-${index}`}>
                          <p>{sentence}.</p>
                        </li>
                      ));
                    })
                  ) : (
                    <li>
                      <p>No important notes available.</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="day-details-section">
              <h2 className="day-title">Includes</h2>
              <div className="day1-content">
                <ul className="day1-points">
                  {includes.length > 0 ? (
                    includes.map((item) => (
                      <li key={item.PkgIncludeID}>
                        <p>{item.Description}</p>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p>No included items available.</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="day-details-section">
              <h2 className="day-title">Excludes</h2>
              <div className="day1-content">
                <ul className="day1-points">
                  {excludes.length > 0 ? (
                    excludes.map((item) => (
                      <li key={item.PkgIncludeID}>
                        <p>{item.Description}</p>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p>No excluded items available.</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="T-hero-right">
            <div className="availability-card">
              <p className="availability-from">From</p>

              <div className="availability-price-row">
                <h2>₹{totalPrice}</h2>
                <span>
                  for {adults} person{adults > 1 ? "s" : ""}
                </span>
              </div>

              <div className="availability-select-box availability-input-box">
                <Users size={18} />
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={adultsInput}
                  onChange={handleAdultChange}
                  onKeyDown={handleKeyDown}
                  onBlur={handleAdultBlur}
                  className="availability-field-input"
                />
                <span>Adult{adults > 1 ? "s" : ""}</span>
              </div>

              <div className="availability-select-box availability-input-box">
                <CalendarDays size={18} />
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="availability-date-input"
                />
              </div>

              <div className="availability-select-box">
                <Globe size={18} />
                <span>English</span>
              </div>

              <button
                type="button"
                className="check-availability-btn"
                // onClick={() => setShowAvailability(true)}
                onClick={() => {
  setShowAvailability(true);
  setShowMobileAvailability(true);
}}
              >
                Check availability
              </button>

              <div className="availability-features">
                <div className="availability-feature-item">
                  <CircleCheck size={18} />
                  <div>
                    <h4>Free cancellation</h4>
                    <p>Cancel up to 24 hours in advance for a full refund</p>
                  </div>
                </div>

                <div className="availability-feature-item">
                  <CircleCheck size={18} />
                  <div>
                    <h4>Reserve now & pay later</h4>
                    <p>Keep your travel plans flexible — book your spot and pay later.</p>
                  </div>
                </div>
              </div>
            </div>

            {showMobileAvailability && (
  <div className="mobile-availability-inline">
    <div className="gallery-availability-header">
      <h2 className="availability-modal-heading">1 option available</h2>

      <button
        type="button"
        className="availability-close-btn"
        onClick={() => setShowMobileAvailability(false)}
      >
        <X size={20} />
      </button>
    </div>

    <div className="availability-option-card">
      <h3>{pkg.PackageName}</h3>

      <div className="availability-option-top">
        <div className="availability-mini-info">
          <Clock3 size={20} />
          <span>{pkg.Noofdays} Days</span>
        </div>

        <div className="availability-mini-info">
          <Globe size={20} />
          <span>English</span>
        </div>
      </div>

      <div className="availability-pickup-row">
        <Bus size={20} />
        <div>
          <h4>Pickup route</h4>
          <p>{pkg.From} to {pkg.To}</p>
        </div>
      </div>

      <div className="availability-divider"></div>

      <div className="availability-starting-block">
        <p className="starting-label">Travel date</p>
        <p className="starting-date">{formattedSelectedDate}</p>
        <h4 className="starting-hour">
          {adults} Adult{adults > 1 ? "s" : ""}
        </h4>
      </div>

      <div className="availability-divider"></div>

      <div className="availability-bottom-row">
        <div>
          <h2 className="availability-bottom-price">₹{totalPrice}</h2>
          <p>
            {adults} Adult{adults > 1 ? "s" : ""} x ₹{pkg.PackagePrice}
          </p>
        </div>

        <button
          type="button"
          className="book-now-btn"
          onClick={() =>
            navigate("/bus-booking", {
              state: {
                packageId: pkg.PackageID,
                adults,
                travelDate: selectedDate,
                totalPrice,
              },
            })
          }
        >
          Book now
        </button>
      </div>
    </div>
  </div>
)}
           

            <div className="tour-list-card">
              <h2>Explore India through Sanchar6T</h2>

              <div className="tour-list">
                {packagesLoading ? (
                  <p>Loading packages...</p>
                ) : relatedPackages.length > 0 ? (
                  relatedPackages.map((tourPkg) => (
                    <div
                      className="tour-item"
                      key={tourPkg.PackageID}
                      onClick={() => navigate(`/package-details/${tourPkg.PackageID}`)}
                      style={{ cursor: "pointer" }}
                    >
                      {tourPkg.MediaId ? (
                        <img
                          src={getPackageImage(tourPkg)}
                          alt={tourPkg.PackageName}
                          className="tour-img"
                        />
                      ) : (
                        <div className="tour-img no-image-box">No Image</div>
                      )}

                      <div className="tour-content">
                        <h3>{tourPkg.PackageName}</h3>
                        {/* <p>{getTourDescription(tourPkg)}</p> */}
                        <p
  className={
    expandedTourIds.includes(tourPkg.PackageID)
      ? "tour-desc tour-desc-expanded"
      : "tour-desc"
  }
>
  {getTourDescription(tourPkg)}
</p>

{getTourDescription(tourPkg).length > 70 && (
  <button
    type="button"
    className="tour-read-more-btn"
    onClick={(e) => {
      e.stopPropagation();
      toggleTourReadMore(tourPkg.PackageID);
    }}
  >
    {expandedTourIds.includes(tourPkg.PackageID)
      ? "Read less"
      : "Read more"}
  </button>
)}
                        <span className="tour-days-text">
                          {formatDuration(tourPkg.Noofdays)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No packages found.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="reviews-title">Traveler’s Reviews</h2>
        <div className="reviews-card">
          <div className="review-item">
            <div className="review-top">
              <div className="review-avatar">A</div>
              <div className="review-content">
                <h3>Ananya Rao</h3>
                <p className="review-location">Bangalore, Karnataka</p>
                <div className="review-stars">★★★★★</div>
              </div>
            </div>
            <p className="review-text">
              "Sanchar6T made my entire travel experience seamless and unforgettable! From planning my itinerary to booking stays and transport, everything was handled with such professionalism and care."
            </p>
          </div>

          <div className="review-item">
            <div className="review-top">
              <div className="review-avatar">H</div>
              <div className="review-content">
                <h3>Harsh Vardhan</h3>
                <p className="review-location">Hyderabad, Telangana</p>
                <div className="review-stars">★★★★★</div>
              </div>
            </div>
            <p className="review-text">
              "The Tirupati trip was very well organized. Darshan timings, hotel stay, and local travel were all smooth. A peaceful and memorable journey for our family."
            </p>
          </div>

          <div className="review-item">
            <div className="review-top">
              <div className="review-avatar">S</div>
              <div className="review-content">
                <h3>Sneha Kapoor</h3>
                <p className="review-location">Mumbai, Maharashtra</p>
                <div className="review-stars">★★★★★</div>
              </div>
            </div>
            <p className="review-text">
              "Beautiful experience and well-managed package. The temple visit and stay arrangement were both comfortable and hassle-free."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PackageDetails;