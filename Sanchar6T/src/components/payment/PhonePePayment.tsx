import React, { useEffect, useState } from "react";

const PhonePePayment = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [amount] = useState(1000);
  const [isAgent, setIsAgent] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [prepaidBalance] = useState(1500);
  const [postpaidBalance] = useState(2500);

  // Load PhonePe SDK
  useEffect(() => {
    if (!document.querySelector('script[src*="phonepe-checkout.js"]')) {
      const script = document.createElement("script");
      script.src = "https://sdk.phonepe.com/public/checkout/v1/phonepe-checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleQrCode = () => setShowQrCode(!showQrCode);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Processing ₹${amount} via ${selectedOption.toUpperCase()}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-50 px-4 py-3 border-b">
          <div className="flex items-center">
            <img
              src="../assets/shoping-removebg-preview.png"
              alt="VRUAT Logo"
              className="h-8 w-auto mr-2"
            />
            <span className="font-semibold text-gray-800">VRUAT</span>
          </div>
          <span className="font-semibold text-indigo-600 text-lg">₹ {amount.toFixed(2)}</span>
        </div>

        {/* Body */}
        <div className="p-5 text-center">
          {/* QR Section */}
          <div className="mb-4">
            <button
              onClick={toggleQrCode}
              className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-150 flex items-center mx-auto"
            >
              <i className="fas fa-qrcode mr-2"></i>
              {showQrCode ? "Hide QR Code" : "Show QR Code"}
            </button>

            {showQrCode && (
              <div className="mt-4">
                <img
                  src="../assets/placeoldar.jpg"
                  alt="QR Code"
                  className="mx-auto rounded-md shadow-md w-52"
                />
                <p className="text-gray-500 text-sm mt-2">Scan with any UPI app</p>
                <div className="flex justify-center items-center mt-2 text-gray-600 text-sm">
                  <span className="mr-2">Checking payment status...</span>
                  <span className="animate-spin border-t-2 border-green-500 rounded-full w-4 h-4"></span>
                </div>
                <p className="text-green-600 font-bold mt-2">19:49</p>
                <div className="flex justify-center mt-2">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-1"></span>
                  <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                </div>
              </div>
            )}
          </div>

          {/* Payment Options */}
          <div className="space-y-3 text-left">
            {[
              { id: "upi", icon: "fa-at", title: "UPI ID", subtitle: "PhonePe, GPay, Paytm & more" },
              { id: "card", icon: "fa-credit-card", title: "Card", subtitle: "Visa, Mastercard, Rupay" },
              { id: "netbanking", icon: "fa-university", title: "Net Banking", subtitle: "Select your bank" },
              {
                id: "wallet",
                icon: "fa-wallet",
                title: "Wallet",
                subtitle: isAgent
                  ? `Use your Postpaid Wallet (₹${postpaidBalance.toFixed(2)})`
                  : `Use your Prepaid Wallet (₹${prepaidBalance.toFixed(2)})`,
              },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer hover:shadow-sm transition ${
                  selectedOption === opt.id ? "border-indigo-500" : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentOption"
                  value={opt.id}
                  checked={selectedOption === opt.id}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <i className={`fas ${opt.icon} text-gray-600`}></i>
                <div>
                  <span className="font-medium text-gray-800">{opt.title}</span>
                  <small className="block text-gray-500 text-sm">{opt.subtitle}</small>
                </div>
              </label>
            ))}
          </div>

          {/* Powered By */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            Powered by{" "}
            <img
              src="../assets/PhonePe_idwlva8idc_1.png"
              alt="PhonePe"
              className="inline h-5 align-middle"
            />
          </div>

          {/* Logos */}
          <div className="flex justify-center mt-3 gap-3">
            <img src="../assets/PhonePe_idwlva8idc_1.png" alt="PhonePe" className="h-6" />
            <img src="../assets/paytm.png" alt="Paytm" className="h-6" />
            <img src="../assets/google.jpeg" alt="Google Pay" className="h-6" />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t text-center">
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <span className="animate-spin inline-block mr-2 border-t-2 border-white rounded-full w-4 h-4"></span>
            )}
            PAY ₹ {amount.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhonePePayment;
