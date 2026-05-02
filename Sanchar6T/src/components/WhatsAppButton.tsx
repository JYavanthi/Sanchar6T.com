import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918197882511";
  const message = "Hello! I’d like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      style={{ width: "70px", height: "70px" }} // make button bigger
    >
      <FaWhatsapp size={40} /> {/* larger icon */}
    </a>
  );
};

export default WhatsAppButton;
