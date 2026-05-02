import { useLocation } from "react-router-dom";

const JourneyDetails = () => {
  const { state } = useLocation();
  const { boardingPoint, droppingPoint, duration, price, packageDetails } = state || {};

  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
      {/* Package details heading */}
      {packageDetails && (
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#3D85C6]">{packageDetails.busNumber}</h2>
          <p className="text-sm text-[#4A4A4A]">
            Operator: {packageDetails.operator} | Type: {packageDetails.busType} | Price: {price}
          </p>
        
        </div>
      )}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Departure */}
        <div>
          <div className="text-2xl font-bold text-[#3D85C6] mb-1">
            {boardingPoint?.time || "--:--"}
          </div>
          <div className="text-base font-semibold text-[#3D85C6] mb-1">
            {boardingPoint?.name || "Boarding"}
          </div>
          <div className="text-xs text-[#4A4A4A] leading-relaxed">
            {boardingPoint?.address}
          </div>
           
        </div>

        {/* Duration */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-sm text-[#3D85C6] mb-2">{duration}</div>
          <div className="w-full h-px bg-[#4A4A4A] relative">
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-[#4A4A4A] rounded-full -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#4A4A4A] rounded-full -translate-y-1/2"></div>
          </div>
        </div>

        {/* Arrival */}
        <div>
          <div className="text-2xl font-bold text-[#3D85C6] mb-1">
            {droppingPoint?.time || "--:--"}
          </div>
          <div className="text-base font-semibold text-[#3D85C6] mb-1">
            {droppingPoint?.name || "Dropping"}
          </div>
          <div className="text-xs text-[#4A4A4A] leading-relaxed">
            {droppingPoint?.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetails;
