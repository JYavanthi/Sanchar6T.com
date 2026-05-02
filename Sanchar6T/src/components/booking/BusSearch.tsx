import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar } from "lucide-react";

const BusSearch = () => {
  return (
    <div className="bg-card border-b border-border p-4">
      <div className="flex items-center gap-4 max-w-6xl mx-auto">
        {/* Bus Icon */}
        <div className="bg-violet/10 p-2 rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-violet">
            <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="16" r="1" fill="currentColor"/>
            <circle cx="16" cy="16" r="1" fill="currentColor"/>
            <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Departure */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-dark block mb-1">Departure</label>
          <Input 
            placeholder="" 
            className="border-border focus:border-violet focus:ring-violet"
          />
        </div>

        {/* Arrow */}
        <div className="pt-6">
          <ArrowRight className="w-5 h-5 text-gray-medium" />
        </div>

        {/* Destination */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-dark block mb-1">Destination</label>
          <Input 
            placeholder="" 
            className="border-border focus:border-violet focus:ring-violet"
          />
        </div>

        {/* Date */}
        <div className="bg-orange-100 p-2 rounded">
          <Calendar className="w-6 h-6 text-orange-600" />
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium text-gray-dark block mb-1">Departure Date</label>
          <Input 
            value="02/23/2025"
            className="border-border focus:border-violet focus:ring-violet"
          />
        </div>

        {/* Modify Button */}
        <div className="pt-6">
          <Button className="bg-violet hover:bg-violet/90 text-white px-8 py-2 rounded-full">
            Modify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusSearch;