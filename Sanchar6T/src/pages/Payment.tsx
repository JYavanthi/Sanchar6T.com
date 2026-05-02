// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "@/components/Header";
// import TravelDetailsCard from "@/components/payment/TravelDetailsCard";
// import LoginSection from "@/components/payment/LoginSection";
// import PaymentOptions from "@/components/payment/PaymentOptions";
// import PricingSidebar from "@/components/payment/PricingSidebar";
// import PaymentFooter from "@/components/payment/PaymentFooter";

// const Payment = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const {
//     totalPrice = 0,
//     travellerData = [],
//     contactData = {},
//     gstData = {},
//   } = state || {};

//   const handlePaymentDone = () => {
//     navigate("/ticket", {
//       state: { totalPrice, travellerData, contactData, gstData },
//     });
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
//       <Header />

//       <div className="max-w-none mx-auto px-4 py-4">
//         <div className="flex gap-4">
         
//           <div className="flex-1">
//             <TravelDetailsCard />
//             <LoginSection />
//             <PaymentOptions />

           
//             <div className="bg-white rounded-lg border p-5 mt-4" style={{ borderColor: "#e0e0e0", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
//               <h3 className="text-lg font-semibold mb-3" style={{ color: "#333" }}>Contact Details</h3>
//               <p className="text-sm" style={{ color: "#555" }}>
//                 <strong>Email:</strong> {contactData?.Email || "N/A"}
//               </p>
//               <p className="text-sm" style={{ color: "#555" }}>
//                 <strong>Phone:</strong> {contactData?.ContactNo || "N/A"}
//               </p>
//               <p className="text-sm mt-2 font-semibold" style={{ color: "#333" }}>
//                 <strong>Total Payable:</strong> ₹{totalPrice}
//               </p>
//             </div>

//             <button
//               onClick={handlePaymentDone}
//               className="mt-6 px-6 py-2 bg-green-600 text-white rounded"
//             >
//               Complete Payment
//             </button>
//           </div>

         
//           <PricingSidebar />
//         </div>
//       </div>

//       <PaymentFooter />
//     </div>
//   );
// };

// export default Payment;


import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import TravelDetailsCard from "@/components/payment/TravelDetailsCard";
import LoginSection from "@/components/payment/LoginSection";
import PaymentOptions from "@/components/payment/PaymentOptions";
import PricingSidebar from "@/components/payment/PricingSidebar";
import PaymentFooter from "@/components/payment/PaymentFooter";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { totalPrice = 0, travellerData = [], contactData = {}, gstData = {} } = state || {};

  const handlePaymentDone = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/payment/create-order", {
      merchantOrderId: "ORDER" + Date.now(),
      amount: totalPrice * 100, // convert INR to paise
    });

    const redirectUrl = response.data.redirectUrl;
    if (redirectUrl) window.location.href = redirectUrl;
  } catch (err) {
    console.error("Error creating payment order", err);
    alert("Payment initiation failed. Try again.");
  }
};


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />

      <div className="max-w-none mx-auto px-4 py-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <TravelDetailsCard />
            <LoginSection />
            <PaymentOptions />

            <div className="bg-white rounded-lg border p-5 mt-4" style={{ borderColor: "#e0e0e0", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#333" }}>Contact Details</h3>
              <p className="text-sm" style={{ color: "#555" }}><strong>Email:</strong> {contactData?.Email || "N/A"}</p>
              <p className="text-sm" style={{ color: "#555" }}><strong>Phone:</strong> {contactData?.ContactNo || "N/A"}</p>
              <p className="text-sm mt-2 font-semibold" style={{ color: "#333" }}><strong>Total Payable:</strong> ₹{totalPrice}</p>
            </div>

            <button
              onClick={handlePaymentDone}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded"
            >
              Complete Payment
            </button>
          </div>

          <PricingSidebar />
        </div>
      </div>

      <PaymentFooter />
    </div>
  );
};

export default Payment;
