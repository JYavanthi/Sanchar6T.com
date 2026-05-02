import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const OffersSection = () => {
  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#4A4A4A]">1C, 2B</h3>
        <button className="text-flixbus-blue text-sm underline">View Policies</button>
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold mb-3">Offers</h4>
        
        <RadioGroup className="space-y-3">
          <div className=" rounded-lg p-3 bg-[#f2f2f28f]">
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem 
                value="megabusseo" 
                id="megabusseo" 
                className="border-flixbus-border text-flixbus-blue"
              />
              <Label htmlFor="megabusseo" className="font-semibold text-flixbus-text">
                MEGABUSSEO
              </Label>
            </div>
            <p className="text-xs text-flixbus-light-text leading-relaxed ml-6">
              Up to 10% (Instant Discount and Mybtsa savings)
            </p>
          </div>
          
          <div className="bg-[#f2f2f28f] rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem 
                value="bustrainpass" 
                id="bustrainpass" 
                className="border-flixbus-border text-flixbus-blue"
              />
              <Label htmlFor="bustrainpass" className="font-semibold text-flixbus-text">
                BUSTRAINPASS
              </Label>
            </div>
            <p className="text-xs text-flixbus-light-text leading-relaxed ml-6">
              Travel Pass - Buy for Rs. 99 and get instant Rs. 50 off and 4 vouchers each worth Rs. 50 off on bus/Rs. 25 off on train bookings of Min. ATV Rs. 500.
            </p>
          </div>
        </RadioGroup>
        
        <div className="mt-4 flex gap-2">
          <Input 
            placeholder="Enter coupon code" 
            className="flex-1 text-sm border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue"
          />
          <Button 
            variant="outline" 
            className="border-flixbus-blue text-flixbus-blue hover:bg-flixbus-blue hover:text-white"
          >
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;


