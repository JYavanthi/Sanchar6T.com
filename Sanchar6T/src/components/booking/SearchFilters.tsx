import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw, Search, MapPin } from "lucide-react";

const SearchFilters = () => {
  return (
    <div className="w-80 bg-card p-4 border-r border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet">
            <path d="M3 6h18l-2 5H5L3 6z" fill="currentColor"/>
            <path d="M19 6V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          <span className="text-violet font-medium">Filters</span>
        </div>
        <Button variant="ghost" size="sm" className="text-violet hover:text-violet hover:bg-violet-light">
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Live Tracking */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="live-tracking" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
          <label htmlFor="live-tracking" className="text-sm text-gray-dark flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Live Tracking
          </label>
        </div>
      </div>

      {/* Departure Time */}
      <div className="mb-6">
        <h3 className="text-violet font-medium mb-3">Departure Time</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="before-6am" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="before-6am" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-orange-500">🌅</span>
              Before 6 am (1)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="6am-12pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="6am-12pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-yellow-500">☀️</span>
              6 am to 12 pm (0)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="12pm-6pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="12pm-6pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-orange-400">🌅</span>
              12 pm to 6 pm (0)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="after-6pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="after-6pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-blue-500">🌙</span>
              After 6 pm (1)
            </label>
          </div>
        </div>
      </div>

      {/* Bus Types */}
      <div className="mb-6">
        <h3 className="text-violet font-medium mb-3">Bus Types</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="seater" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="seater" className="text-sm text-gray-dark">Seater (1)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sleeper" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="sleeper" className="text-sm text-gray-dark">Sleeper (1)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ac" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="ac" className="text-sm text-gray-dark">AC (1)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="non-ac" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="non-ac" className="text-sm text-gray-dark">Non AC (1)</label>
          </div>
        </div>
      </div>

      {/* Arrival Time */}
      <div className="mb-6">
        <h3 className="text-violet font-medium mb-3">Arrival Time</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="arr-before-6am" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="arr-before-6am" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-orange-500">🌅</span>
              Before 6 am (0)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="arr-6am-12pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="arr-6am-12pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-yellow-500">☀️</span>
              6 am to 12 pm (1)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="arr-12pm-6pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="arr-12pm-6pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-orange-400">🌅</span>
              12 pm to 6 pm (1)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="arr-after-6pm" className="data-[state=checked]:bg-violet data-[state=checked]:border-violet" />
            <label htmlFor="arr-after-6pm" className="text-sm text-gray-dark flex items-center gap-2">
              <span className="text-blue-500">🌙</span>
              After 6 pm (0)
            </label>
          </div>
        </div>
      </div>

      {/* Boarding Point */}
      <div className="mb-4">
        <h3 className="text-violet font-medium mb-3">Boarding Point</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-medium" />
          <Input 
            placeholder="" 
            className="pl-10 border-border focus:border-violet focus:ring-violet"
          />
        </div>
      </div>

      {/* Dropping Point */}
      <div className="mb-4">
        <h3 className="text-violet font-medium mb-3">Dropping Point</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-medium" />
          <Input 
            placeholder="" 
            className="pl-10 border-border focus:border-violet focus:ring-violet"
          />
        </div>
      </div>

      {/* Operator */}
      <div className="mb-4">
        <h3 className="text-violet font-medium mb-3">Operator</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-medium" />
          <Input 
            placeholder="" 
            className="pl-10 border-border focus:border-violet focus:ring-violet"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;