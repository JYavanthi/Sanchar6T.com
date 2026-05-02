import { ChevronDown, Search } from "lucide-react";

const FilterSidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border h-full overflow-y-auto">
      {/* Filters Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium text-base">Filters</h3>
        <button className="text-blue-primary text-xs hover:underline">
          CLEAR ALL
        </button>
      </div>

      {/* AC Filter */}
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-sm mb-3">AC</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="ac" /> <span>AC</span>
          </label>
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="non-ac" /> <span>Non-AC</span>
          </label>
        </div>
      </div>

      {/* Seat Type */}
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-sm mb-3">Seat type</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="seater" />
            <label htmlFor="seater" className="text-sm flex-1">
              Seater
            </label>
            <span className="text-xs text-gray-text">5</span>
          </div>
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="sleeper" /> <span>Sleeper</span>
          </label>
        </div>
      </div>

      {/* Single Seater/Sleeper */}
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-sm mb-3">Single Seater/Sleeper</h4>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" id="single-seats" /> <span>Single Seats</span>
        </label>
        <div className="text-xs text-gray-text mt-1">
          Separate single window seats
        </div>
      </div>

      {/* Pick up point */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-sm">
            Pick up point - Bangalore, Karnataka
          </h4>
          <button className="text-blue-primary text-xs hover:underline">
            CLEAR
          </button>
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-text" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-1 border rounded text-sm w-full"
          />
        </div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between">
            <label className="text-sm">Anand Rao Circle</label>
            <ChevronDown className="h-4 w-4 text-gray-text" />
          </div>
          <div className="text-sm text-gray-text pl-2">
            Majestic (Kempegowda Bus Station)
          </div>
          <div className="text-sm text-gray-text pl-2">
            Hudson Church / Corporation Circle
          </div>
          <div className="text-sm text-gray-text pl-2">Shanthinagar</div>
          <button className="text-blue-primary text-xs mt-2 hover:underline">
            Show all (163)
          </button>
        </div>
      </div>

      {/* Pick up time */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-sm">Pick up time - Bangalore</h4>
          <button className="text-blue-primary text-xs hover:underline">
            CLEAR
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center py-2 border rounded text-xs">
            12 AM - 6 AM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            6 AM - 12 PM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            12 PM - 6 PM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            6 PM - 12 AM
          </div>
        </div>
      </div>

      {/* Operators */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-sm">Operators</h4>
          <button className="text-blue-primary text-xs hover:underline">
            CLEAR
          </button>
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-text" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-1 border rounded text-sm w-full"
          />
        </div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between">
            <label className="text-sm">OurBus India Limited</label>
            <ChevronDown className="h-4 w-4 text-gray-text" />
          </div>
          <div className="text-sm text-gray-text">Yolo Bus</div>
          <div className="text-sm text-gray-text">NueGo</div>
          <div className="text-sm text-gray-text">FRESHBUS</div>
          <button className="text-blue-primary text-xs mt-2 hover:underline">
            Show all (100)
          </button>
        </div>
      </div>

      {/* Drop point */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-sm">
            Drop point - Tirupati, Andhra Pradesh
          </h4>
          <button className="text-blue-primary text-xs hover:underline">
            CLEAR
          </button>
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-text" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-1 border rounded text-sm w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="text-sm text-gray-text">RTC Bus Stand</div>
          <div className="text-sm text-gray-text">Chandragiri Road</div>
          <div className="text-sm text-gray-text">Cherigjali (Tirupati)</div>
          <div className="text-sm text-gray-text">Alipiri</div>
          <button className="text-blue-primary text-xs mt-2 hover:underline">
            Show all (40)
          </button>
        </div>
      </div>

      {/* Drop time */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-sm">
            Drop time - Tirupati, Andhra Pradesh
          </h4>
          <button className="text-blue-primary text-xs hover:underline">
            CLEAR
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center py-2 border rounded text-xs">
            12 AM - 6 AM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            6 AM - 12 PM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            12 PM - 6 PM
          </div>
          <div className="text-center py-2 border rounded text-xs">
            6 PM - 12 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
