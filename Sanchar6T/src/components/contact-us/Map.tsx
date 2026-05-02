// import React from "react";

// const Map: React.FC = () => {
//   const address =
//     "#293, 17th Cross, Sampige Road, Malleshwaram, 2nd Floor, Above Vodafone outlet, Opp to Vijaylakshmi Silk and Sarees, Bengaluru, India";

//   // Embed URL that uses the address query (no API key required)
//   const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
//     address
//   )}&t=&z=18&ie=UTF8&iwloc=&output=embed`;

//   // Link to open the same address in Google Maps (useful to adjust pin manually)
//   const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address
//   )}`;

//   return (
//     <div>
//       <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
//         <iframe
//           title="Office Location - Malleshwaram, Bengaluru"
//           width="100%"
//           height="100%"
//           loading="lazy"
//           style={{ border: 0 }}
//           allowFullScreen
//           referrerPolicy="no-referrer-when-downgrade"
//           src={mapSrc}
//         />
//       </div>

//       {/* small helper link to open Google Maps if you want to adjust the pinned location manually */}
//       <div className="mt-2 text-sm text-right">
//         <a
//           href={mapsLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline"
//         >
//           Open in Google Maps
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Map;

import React from "react";

const Map: React.FC = () => {
  const address =
    "#293, 17th Cross, Sampige Road, Malleshwaram, 2nd Floor, Above Vodafone outlet, Opp to Vijaylakshmi Silk and Sarees, Bengaluru, India";

  // Embed URL with higher zoom (19 for tighter focus)
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=19&ie=UTF8&iwloc=&output=embed`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="p-6 md:p-8">
      <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="Office Location - Malleshwaram, Bengaluru"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
      </div>

      <div className="mt-4 text-sm text-center">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default Map;
