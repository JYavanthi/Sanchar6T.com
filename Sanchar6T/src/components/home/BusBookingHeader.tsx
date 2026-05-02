import { ArrowLeftRight, Calendar } from "lucide-react";

const BusBookingHeader = () => {
  return (
    <div className="bg-card border-b border-border p-4">
      <div className="flex items-center gap-4 max-w-6xl mx-auto">
        {/* FROM section */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-text font-medium mb-1">FROM</span>
          <div className="min-w-[200px]">
            <input
              value="Bangalore, Karnataka"
              readOnly
              className="border-0 bg-transparent text-base font-medium px-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Swap button */}
        <button className="p-2 rounded-full">
          <ArrowLeftRight className="h-4 w-4 text-gray-text" />
        </button>

        {/* TO section */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-text font-medium mb-1">TO</span>
          <div className="min-w-[200px]">
            <input
              value="Tirupati, Andhra Pradesh"
              readOnly
              className="border-0 bg-transparent text-base font-medium px-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Date section */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-text font-medium mb-1">DEPART</span>
          <div className="flex items-center gap-2 min-w-[150px]">
            <Calendar className="h-4 w-4 text-gray-text" />
            <span className="text-base font-medium">Wed, 10 Sep 2025</span>
          </div>
        </div>

        {/* Search button */}
        <button className="bg-blue-primary hover:bg-blue-dark text-white px-6 py-2 font-medium rounded-md">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default BusBookingHeader;
