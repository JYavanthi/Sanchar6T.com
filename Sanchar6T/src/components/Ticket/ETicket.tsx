import React from "react";
import luggageImg from "@/assets/luggage.jpg";
import busImg from "@/assets/bus1.jpg";
import dndImg from "@/assets/dnd.jpg";
import hazardousImg from "@/assets/danger.jpg";
import ticketImg from "@/assets/ticket.jpg";
import alcoholImg from "@/assets/alchohol.png";
import logoImg from "@/assets/logo.jpeg"

export const ETicket = ({
//   totalPrice = 0,
//   travellerData = [],
//   contactData = {},
//   gstData = {},
// }: {
//   totalPrice?: number;
//   travellerData?: any[];
//   contactData?: any;
//   gstData?: any;
// }) => {

 totalPrice = 0,
  travellerData = [],
  contactData = {},
  gstData = {},
  ticketNo = "",
  boardingPoint = "",
  droppingPoint = "",
  journeyDate = "",
}: any) =>{
  const passenger = travellerData?.[0] || {};
  const passengerName = `${passenger.FirstName || ""} ${passenger.LastName || ""}`.trim();

  return (
    <>
      <style>{`
        /* Custom E-Ticket Styles - Exact replica of PDF with larger fonts */
        .eticket-container { max-width: 900px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d0d0d0; font-family: Arial, sans-serif; line-height: 1.3; }
        .eticket-header-notice { font-size: 14px; color: #000000; padding: 12px 20px; border-bottom: 1px solid #d0d0d0; text-align: left; }
        .eticket-main-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 20px; border-bottom: 1px solid #d0d0d0; }
        .eticket-title { font-size: 32px; font-weight: bold; color: #000000; margin: 0; line-height: 1; }
        .eticket-brand { font-size: 18px; color: #000000; margin: 4px 0 0 0; }
        .eticket-help-section { text-align: right; font-size: 14px; }
        .eticket-help-title { font-weight: bold; color: #000000; margin: 0; }
        .eticket-help-phone { color: #000000; margin: 2px 0; }
        .eticket-help-link { color: #0066cc; text-decoration: underline; cursor: pointer; margin: 0; }
        .eticket-trip-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #d0d0d0; }
        .eticket-trip-title { font-size: 20px; font-weight: bold; color: #000000; margin: 0; }
        .eticket-ticket-number { font-size: 16px; color: #000000; text-align: right; }
        .eticket-ticket-number-label { font-weight: normal; }
        .eticket-ticket-number-value { font-weight: bold; }
        .eticket-journey-details { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
        .eticket-detail-item { text-align: left; }
        .eticket-detail-label { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 4px 0; }
        .eticket-detail-value { font-size: 14px; color: #000000; margin: 0; }
        .eticket-boarding-section, .eticket-dropping-section { display: grid; grid-template-columns: 200px 170px 220px 1fr; gap: 20px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
        .eticket-section-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0; }
        .eticket-location-name { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 4px 0; }
        .eticket-location-type { font-size: 12px; color: #666666; margin: 0; }
        .eticket-location-text { font-size: 14px; color: #000000; margin: 0; }
        .eticket-address-text { font-size: 14px; color: #000000; margin: 0; line-height: 1.2; }
        .eticket-arrival-time { margin-top: 16px; }
        .eticket-arrival-label { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 4px 0; }
        .eticket-arrival-value { font-size: 14px; color: #000000; margin: 0; }
        .eticket-passenger-payment { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
        .eticket-passenger-section { flex: 1; }
        .eticket-passenger-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 12px 0; }
        .eticket-passenger-name { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 6px 0; }
        .eticket-passenger-info { font-size: 14px; color: #000000; margin: 0 0 20px 0; }
        .eticket-important-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 12px 0; }
        .eticket-important-text { font-size: 12px; color: #000000; margin: 0 0 6px 0; }
        .eticket-chat-link { font-size: 12px; color: #0066cc; text-decoration: underline; cursor: pointer; margin: 0 0 12px 0; }
        .eticket-note-text { font-size: 12px; color: #000000; margin: 0; }
        .eticket-payment-section { flex: 1; }
        .eticket-seat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .eticket-seat-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0; }
        .eticket-seat-number { font-size: 14px; font-weight: bold; color: #000000; margin: 0; }
        .eticket-payment-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 16px 0; }
        .eticket-payment-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .eticket-payment-label { font-size: 14px; color: #000000; margin: 0; }
        .eticket-payment-amount { font-size: 14px; color: #000000; margin: 0; }
        .eticket-payment-total { border-top: 1px solid #d0d0d0; padding-top: 6px; margin-top: 6px; }
        .eticket-payment-total .eticket-payment-label { font-weight: bold; }
        .eticket-payment-total .eticket-payment-amount { font-weight: bold; }
        .eticket-savings { font-size: 14px; color: #008000; font-weight: bold; margin: 12px 0 0 0; }
        .eticket-guidelines { padding: 20px; }
        .eticket-guidelines-title { font-size: 20px; font-weight: bold; color: #000000; text-align: center; margin: 0 0 20px 0; }
        .eticket-restrictions-title { font-size: 14px; font-weight: bold; color: #000000; margin: 0 0 12px 0; }
        .eticket-restrictions-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .eticket-restriction-item { text-align: center; }
        .eticket-restriction-text { font-size: 12px; color: #000000; margin: 0; line-height: 1.3; }
        .eticket-restriction-bold { font-weight: bold; }
        .eticket-terms-title { font-size: 14px; font-weight: bold; color: #000000; margin: 20px 0 12px 0; }
        .eticket-terms-list { list-style: none; padding: 0; margin: 0; }
        .eticket-terms-item { font-size: 12px; color: #000000; margin: 0 0 6px 0; line-height: 1.4; }

        /* New: make all restriction images same small size */
        
.eticket-restriction-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eticket-restriction-img {
  width: 180px;       
  height: 180px;      
  object-fit: contain;
  margin-bottom: 10px; 
}

        @layer base { body { background-color: #f5f5f5; font-family: Arial, sans-serif; margin: 0; padding: 20px; } }
      `}</style>

      <div className="eticket-container">
        {/* Header Notice */}
        <div className="eticket-header-notice !text-[#dc2626]">
          Cancellation and refund are not applicable for Tirupati trips/packages.
        </div>

        {/* Main Header */}
        <div className="eticket-main-header">
          <div>
            <h1 className="eticket-title">eTICKET</h1>

            {/* ✅ Added Logo on top of Sanchar6T */}
            <img src={logoImg} alt="Sanchar6T Logo" style={{ height: "150px", marginBottom: "6px" }} />

            {/* <p className="eticket-brand !text-[#dc2626]">
              Sanchar6<strong className="text-[#020817]">T</strong>
            </p> */}
          </div>
          <div className="eticket-help-section">
            <p className="eticket-help-title">Need help with your trip? Boarding Point</p>
            <p className="eticket-help-phone">Ph. No.: +91 9731312275,<br /> +91 8197882511</p>
            <p className="eticket-help-link">Write to us here</p>
          </div>
        </div>

        {/* Trip Details Header */}
        <div className="eticket-trip-header">
          <h2 className="eticket-trip-title">{boardingPoint} → {droppingPoint}: {journeyDate}</h2>
          <div className="eticket-ticket-number">
            <span className="eticket-ticket-number-label">Ticket no: </span>
            <span className="eticket-ticket-number-value">{ticketNo || "N/A"}</span>
          </div>
        </div>

        {/* Journey Details */}
        <div className="eticket-journey-details">
          <div className="eticket-detail-item">
            <p className="eticket-detail-label">Coach Type</p>
            <p className="eticket-detail-value">A/C Sleeper</p>
            <p className="eticket-detail-value">(2+1)</p>
          </div>
          <div className="eticket-detail-item">
            <p className="eticket-detail-label">Reporting time</p>
            <p className="eticket-detail-value">5:45PM</p>
          </div>
          <div className="eticket-detail-item">
            <p className="eticket-detail-label">Departure time</p>
            <p className="eticket-detail-value">6:00PM</p>
          </div>
          <div className="eticket-detail-item">
            <p className="eticket-detail-label">Number of Passengers</p>
            <p className="eticket-detail-value" style={{ textAlign: "center" }}>{travellerData?.length || 1}</p>
          </div>
        </div>

        {/* Boarding Point */}
        <div className="eticket-boarding-section">
          <div><p className="eticket-section-title">Boarding point details</p></div>
          <div>
            <p className="eticket-location-name">{boardingPoint || "N/A"}</p>
            <p className="eticket-location-type">Location</p>
          </div>
          <div>
            <p className="eticket-location-text">Near Kempegowda Bus</p>
            <p className="eticket-location-text">Station, Majestic Metro,</p>
            <p className="eticket-location-text">central hub</p>
            <p className="eticket-location-type">Landmark</p>
          </div>
          <div>
            <p className="eticket-address-text">Majestic Bus Stand,</p>
            <p className="eticket-address-text">Opp. Bangalore City</p>
            <p className="eticket-address-text">Railway Station,</p>
            <p className="eticket-address-text">Near Majestic Metro</p>
            <p className="eticket-address-text">Station,</p>
            <p className="eticket-address-text">Dr. Rajkumar Road,</p>
            <p className="eticket-address-text">Majestic, Bengaluru,</p>
            <p className="eticket-address-text">Karnataka 560009</p>
            <p className="eticket-location-type">Address</p>
          </div>
        </div>

        {/* Dropping Point */}
        <div className="eticket-dropping-section">
          <div>
            <p className="eticket-section-title">Dropping point details</p>
            <div className="eticket-arrival-time">
              <p className="eticket-arrival-label">EST: Arrival Time</p>
              <p className="eticket-arrival-value">6:00AM</p>
            </div>
          </div>
          <div>
            <p className="eticket-location-name">Tirupati Bus Stand{droppingPoint || "N/A"}</p>
            <p className="eticket-location-type">Location</p>
          </div>
          <div>
            <p className="eticket-location-text">Near Tirupati Railway</p>
            <p className="eticket-location-text">Station, Central Bus Hub,</p>
            <p className="eticket-location-text">close to Alipiri Road</p>
            <p className="eticket-location-type">Landmark</p>
          </div>
          <div>
            <p className="eticket-address-text">Opp. Tirupati Railway</p>
            <p className="eticket-address-text">Station,</p>
            <p className="eticket-address-text">Near APSRTC Central</p>
            <p className="eticket-address-text">Bus Stand,</p>
            <p className="eticket-address-text">Alipiri Road Junction,</p>
            <p className="eticket-address-text">Tirupati, Andhra</p>
            <p className="eticket-address-text">Pradesh - 517501</p>
            <p className="eticket-location-type">Address</p>
          </div>
        </div>

        {/* Passenger & Payment Section */}
        <div className="eticket-passenger-payment">
          <div className="eticket-passenger-section">
            <p className="eticket-passenger-title">Passenger Details (Age, Gender)</p>
            <p className="eticket-passenger-name">{passengerName || "N/A"}</p>
            <p className="eticket-passenger-info">Age: {passenger?.Age || "-"} Gender: {passenger?.Gender || "-"}</p>
            <p className="eticket-passenger-info">Email: {contactData?.Email || "-"}</p>
            <p className="eticket-passenger-info">Phone: {contactData?.ContactNo || "-"}</p>

            <p className="eticket-important-title !text-[15px]">Important Information</p>
            <p className="eticket-important-text !text-[15px]">Please reach the boarding point by the reporting time</p>
            <p className="eticket-important-text !text-[15px]">Ensure your ticket is available for verification during boarding</p>
            <p className="eticket-chat-link !text-[15px]">Chat with us Link</p>

            <p className="eticket-note-text !text-[20px]">NOTE : This operator accepts mTicket, you need not carry a print out</p>
          </div>

          <div className="eticket-payment-section">
            <div className="eticket-seat-header">
              <p className="eticket-seat-title">Seat Number</p>
              <p className="eticket-seat-number">{passenger?.SeatNo || "-"}</p>
            </div>

            <p className="eticket-payment-title">Payment Details</p>

            <div className="eticket-payment-row">
              <span className="eticket-payment-label">Basic Fare</span>
              <span className="eticket-payment-amount">Rs. {totalPrice}</span>
            </div>

            <div className="eticket-payment-row eticket-payment-total">
              <span className="eticket-payment-label">Amount Paid</span>
              <span className="eticket-payment-amount">Rs. {totalPrice}</span>
            </div>

            <p className="eticket-savings">You saved Rs.50 via Sanchar6T</p>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="eticket-guidelines">
          <h3 className="eticket-guidelines-title !text-[20px]">Passenger Guidelines</h3>

          <h4 className="eticket-restrictions-title !text-[15px]">Travel Restrictions Important Don'ts During Travel</h4>

          {/* First row of restrictions */}
          <div className="eticket-restrictions-grid">
            <div className="eticket-restriction-item">
              <img src={ticketImg} alt="Ticket" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't board without a <span className="eticket-restriction-bold">valid ticket and ID</span> proof.</p>
            </div>
            <div className="eticket-restriction-item">
              <img src={hazardousImg} alt="Hazardous" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't carry hazardous, <span className="eticket-restriction-bold">illegal, or flammable</span> items.</p>
            </div>
            <div className="eticket-restriction-item">
              <img src={alcoholImg} alt="Alcohol" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't smoke, <span className="eticket-restriction-bold">consume alcohol, or</span> use drugs on board.</p>
            </div>
          </div>

          {/* Second row of restrictions */}
          <div className="eticket-restrictions-grid">
            <div className="eticket-restriction-item">
              <img src={dndImg} alt="Do Not Disturb" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't cause disturbance <span className="eticket-restriction-bold">or inconvenience to</span> fellow passengers.</p>
            </div>
            <div className="eticket-restriction-item">
              <img src={luggageImg} alt="Luggage" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't leave valuables <span className="eticket-restriction-bold">unattended or in luggage</span> storage.</p>
            </div>
            <div className="eticket-restriction-item">
              <img src={busImg} alt="Bus" className="eticket-restriction-img" />
              <p className="eticket-restriction-text !text-[15px]">Don't damage bus <span className="eticket-restriction-bold">property or package</span> facilities.</p>
            </div>
          </div>

          <h4 className="eticket-terms-title !text-[18px]">Terms and Conditions</h4>
          <ul className="eticket-terms-list">
            <li className="eticket-terms-item !text-[18px]">• Passenger must carry a valid government photo ID matching the ticket name.</li>
            <li className="eticket-terms-item !text-[18px]">• Report at the boarding point at least 30 minutes before departure. Late arrival may lead to seat cancellation without refund.</li>
            <li className="eticket-terms-item !text-[18px]">• Ticket is valid only for the passenger, date, and time mentioned. Non-transferable.</li>
            <li className="eticket-terms-item !text-[18px]">• Cancellations and refunds are as per operator policy. Eligible refunds will be processed within 7-10 working days.</li>
            <li className="eticket-terms-item !text-[18px]">• Rescheduling is subject to availability and fare difference, if any.</li>
          </ul>
        </div>
      </div>
    </>
  );
};



// import React from "react";
// import { useLocation } from "react-router-dom";
// import luggageImg from "@/assets/luggage.jpg";
// import busImg from "@/assets/bus1.jpg";
// import dndImg from "@/assets/dnd.jpg";
// import hazardousImg from "@/assets/danger.jpg";
// import ticketImg from "@/assets/ticket.jpg";
// import alcoholImg from "@/assets/alchohol.png";
// import logoImg from "@/assets/logo.jpeg";

// export const ETicket = ({
//   totalPrice = 0,
//   travellerData = [],
//   contactData = {},
//   gstData = {},
// }: {
//   totalPrice?: number;
//   travellerData?: any[];
//   contactData?: any;
//   gstData?: any;
// }) => {

//   // ✅ GET TICKET NO FROM URL
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const ticketNo = params.get("ticketNo");

//   return (
//     <>
//       <style>{`
//         /* (same CSS - no change) */
//         .eticket-container { max-width: 900px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d0d0d0; font-family: Arial; }
//         .eticket-ticket-number-value { font-weight: bold; }
//       `}</style>

//       <div className="eticket-container">

//         {/* HEADER */}
//         <div className="eticket-main-header">
//           <div>
//             <h1 className="eticket-title">eTICKET</h1>
//             <img src={logoImg} style={{ height: "120px" }} />
//           </div>
//         </div>

//         {/* ✅ TICKET NUMBER FIX */}
//         <div className="eticket-trip-header">
//           <h2>Bengaluru → Tirupati</h2>
//           <div>
//             Ticket no: <b>{ticketNo}</b>
//           </div>
//         </div>

//         {/* ✅ PASSENGER COUNT */}
//         <div className="eticket-journey-details">
//           <p>No. of Passengers: {travellerData.length}</p>
//         </div>

//         {/* ✅ PASSENGERS LOOP FIX */}
//         <div style={{ padding: "20px" }}>
//           <h3>Passengers</h3>

//           {travellerData.map((p: any, i: number) => (
//             <div key={i} style={{ marginBottom: "10px" }}>
//               <p><b>Name:</b> {p.FirstName} {p.LastName}</p>
//               <p><b>Seat:</b> {p.SeatNo}</p>
//               <p><b>Gender:</b> {p.Gender}</p>
//             </div>
//           ))}
//         </div>

//         {/* ✅ CONTACT DETAILS */}
//         <div style={{ padding: "20px" }}>
//           <p><b>Email:</b> {contactData?.Email}</p>
//           <p><b>Phone:</b> {contactData?.ContactNo}</p>
//         </div>

//         {/* ✅ ALL SEATS */}
//         <div style={{ padding: "20px" }}>
//           <p><b>All Seats:</b> {travellerData.map((p: any) => p.SeatNo).join(", ")}</p>
//         </div>

//         {/* ✅ PRICE */}
//         <div style={{ padding: "20px" }}>
//           <p><b>Total Paid:</b> ₹{totalPrice}</p>
//         </div>

//       </div>
//     </>
//   );
// };