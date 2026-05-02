// import React from "react";

// const ContactUsSection = () => {
//   return (
//     <section className="bg-[#145873] text-white py-10 px-4 text-center">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-semibold mb-3">
//         Sanchar6T isn’t just about travel.
//       </h2>

//       {/* Subheading */}
//       <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
//         It’s about trust, comfort, and devotion—delivered to you, one unforgettable journey at a time.
//       </p>

//       {/* Contact Button */}
//       <button className="bg-white text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition">
//         Contact Us
//       </button>
//     </section>
//   );
// };

// export default ContactUsSection;

import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <section className="bg-[#145873] px-4 py-[40px] text-center text-white max-md:px-[14px] max-md:py-[32px]">
      
      <div className="mx-auto max-w-[900px]">

        {/* TITLE */}
        <h2 className="mb-3 text-[32px] font-semibold leading-[1.3] max-md:text-[24px]">
          Sanchar6T isn’t just about travel.
        </h2>

        {/* SUBTITLE */}
        <p className="mx-auto mb-6 max-w-[760px] text-[22px] leading-[1.6] max-md:text-[18px]">
          It’s about trust, comfort, and devotion—delivered to you, one
          unforgettable journey at a time.
        </p>

        {/* BUTTON */}
        <button className="rounded-full bg-white px-[32px] py-[14px] text-[20px] font-semibold text-black transition duration-300 hover:bg-[#e5e5e5] max-md:px-[26px] max-md:py-[12px] max-md:text-[18px]">
          Contact Us
        </button>

      </div>
    </section>
  );
};

export default ContactUsSection;
