// import { useLocation } from "react-router-dom";

// const JourneyDetails = () => {
//   const { state } = useLocation();
//   const { boardingPoint, droppingPoint, duration, price, packageDetails } = state || {};

//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
//       {/* Package details heading */}
//       {packageDetails && (
//         <div className="mb-4">
//           <h2 className="text-xl font-bold text-[#3D85C6]">{packageDetails.busNumber}</h2>
//           <p className="text-sm text-[#4A4A4A]">
//             Operator: {packageDetails.operator} | Type: {packageDetails.busType} | Price: {price}
//           </p>
        
//         </div>
//       )}
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Departure */}
//         <div>
//           <div className="text-2xl font-bold text-[#3D85C6] mb-1">
//             {boardingPoint?.time || "--:--"}
//           </div>
//           <div className="text-base font-semibold text-[#3D85C6] mb-1">
//             {boardingPoint?.name || "Boarding"}
//           </div>
//           <div className="text-xs text-[#4A4A4A] leading-relaxed">
//             {boardingPoint?.address}
//           </div>
           
//         </div>

//         {/* Duration */}
//         <div className="flex flex-col items-center justify-center">
//           <div className="text-sm text-[#3D85C6] mb-2">{duration}</div>
//           <div className="w-full h-px bg-[#4A4A4A] relative">
//             <div className="absolute left-0 top-1/2 w-2 h-2 bg-[#4A4A4A] rounded-full -translate-y-1/2"></div>
//             <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#4A4A4A] rounded-full -translate-y-1/2"></div>
//           </div>
//         </div>

//         {/* Arrival */}
//         <div>
//           <div className="text-2xl font-bold text-[#3D85C6] mb-1">
//             {droppingPoint?.time || "--:--"}
//           </div>
//           <div className="text-base font-semibold text-[#3D85C6] mb-1">
//             {droppingPoint?.name || "Dropping"}
//           </div>
//           <div className="text-xs text-[#4A4A4A] leading-relaxed">
//             {droppingPoint?.address}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JourneyDetails;


import { useLocation } from "react-router-dom";

const JourneyDetails = () => {
  const { state } = useLocation();
  const { boardingPoint, droppingPoint, duration, price, packageDetails } =
    state || {};

  return (
    <div className="w-full rounded-lg border border-flixbus-border bg-flixbus-card p-3 sm:p-4 md:p-6">
      {packageDetails && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#3D85C6] sm:text-xl">
            {packageDetails.busNumber}
          </h2>
          <p className="text-xs text-[#4A4A4A] sm:text-sm">
            Operator: {packageDetails.operator} | Type: {packageDetails.busType} |
            Price: {price}
          </p>
        </div>
      )}

      <div className="grid w-full grid-cols-[1fr_minmax(70px,1.4fr)_1fr] items-center gap-2 sm:gap-4 md:gap-6 px-1 sm:px-3 md:px-6">
        {/* Departure */}
        <div className="min-w-0 text-left">
          <div className="mb-1 text-xl font-bold text-[#3D85C6] sm:text-2xl md:text-3xl">
            {boardingPoint?.time || "--:--"}
          </div>
          <div className="mb-1 text-sm font-semibold text-[#3D85C6] sm:text-base md:text-lg">
            {boardingPoint?.name || "Boarding"}
          </div>
          <div className="break-words text-[11px] leading-relaxed text-[#4A4A4A] sm:text-xs md:text-sm">
            {boardingPoint?.address}
          </div>
        </div>

        {/* Duration Line */}
        <div className="flex min-w-0 flex-col items-center justify-center">
          <div className="mb-2 text-[10px] text-[#3D85C6] sm:text-xs md:text-sm">
            {duration}
          </div>

          <div className="relative h-px w-full bg-[#4A4A4A]">
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#4A4A4A]" />
            <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#4A4A4A]" />
          </div>
        </div>

        {/* Arrival */}
        <div className="min-w-0 text-right">
          <div className="mb-1 text-xl font-bold text-[#3D85C6] sm:text-2xl md:text-3xl">
            {droppingPoint?.time || "--:--"}
          </div>
          <div className="mb-1 text-sm font-semibold text-[#3D85C6] sm:text-base md:text-lg">
            {droppingPoint?.name || "Dropping"}
          </div>
          <div className="break-words text-[11px] leading-relaxed text-[#4A4A4A] sm:text-xs md:text-sm">
            {droppingPoint?.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetails;