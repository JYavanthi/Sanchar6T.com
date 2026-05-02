import { useState } from "react";

const TimelineHeader = () => {
  const [departTime, setDepartTime] = useState(0);
  const [arrivalTime, setArrivalTime] = useState(24);
  const [fare, setFare] = useState(3149);

  // helper to format time
  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, "0")}:00`;
  };

  return (
    <div className="bg-white border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Timeline values */}
          <div className="flex items-center gap-12">
            {/* Depart */}
            <div className="text-center">
              <div className="text-xs text-[#9e9e9e] mb-1">Depart</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-[#333333]">
                  00:00
                </span>
                <span className="w-8 h-px bg-[#e0e0e0]"></span>
                <span className="text-sm font-medium text-[#333333]">
                  24:00
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                value={departTime}
                onChange={(e) => setDepartTime(Number(e.target.value))}
                className="w-32 cursor-pointer accent-[#1976d2]"
              />
              <div className="text-xs text-[#333333] mt-1">
                Selected Departure Time: {formatTime(departTime)}
              </div>
            </div>

            {/* Arrival */}
            <div className="text-center">
              <div className="text-xs text-[#9e9e9e] mb-1">Arrival</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-[#333333]">
                  00:00
                </span>
                <span className="w-8 h-px bg-[#e0e0e0]"></span>
                <span className="text-sm font-medium text-[#333333]">
                  24:00
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(Number(e.target.value))}
                className="w-32 cursor-pointer accent-[#1976d2]"
              />
              <div className="text-xs text-[#333333] mt-1">
                Selected Arrival: {formatTime(arrivalTime)}
              </div>
            </div>

            {/* Fare */}
            <div className="text-center">
              <div className="text-xs text-[#9e9e9e] mb-1">Fare</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-[#333333]">
                  Rs. 0
                </span>
                <span className="w-8 h-px bg-[#e0e0e0]"></span>
                <span className="text-sm font-medium text-[#333333]">
                  Rs. 3149
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3149"
                step="50"
                value={fare}
                onChange={(e) => setFare(Number(e.target.value))}
                className="w-40 cursor-pointer accent-[#1976d2]"
              />
              <div className="text-xs text-[#333333] mt-1">
                Selected Fare: Rs. {fare}
              </div>
            </div>
          </div>

          {/* Right: Filters */}
          <div className="flex gap-3">
            <select className="border border-[#e0e0e0] rounded px-3 py-2 text-sm text-[#333333] bg-white hover:border-[#1976d2] focus:ring-1 focus:ring-[#1976d2] focus:border-[#1976d2]">
              <option>Bus Type</option>
            </select>
            <select className="border border-[#e0e0e0] rounded px-3 py-2 text-sm text-[#333333] bg-white hover:border-[#1976d2] focus:ring-1 focus:ring-[#1976d2] focus:border-[#1976d2]">
              <option>Boarding Point</option>
            </select>
            <select className="border border-[#e0e0e0] rounded px-3 py-2 text-sm text-[#333333] bg-white hover:border-[#1976d2] focus:ring-1 focus:ring-[#1976d2] focus:border-[#1976d2]">
              <option>Dropping Point</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;
