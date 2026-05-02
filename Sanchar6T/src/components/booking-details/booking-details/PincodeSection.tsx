import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PincodeSection = () => {
  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[#3D85C6] mb-2">Your pincode and state</h2>
        <p className="text-xs text-flixbus-light-text">
          (Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.)
        </p>
      </div>
      
      <div className="mb-4">
        <Label htmlFor="state" className="text-sm font-medium text-[#3D85C6]">Select the State</Label>
        <Select defaultValue="karnataka">
          <SelectTrigger className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent className="bg-flixbus-card border-flixbus-border">
            <SelectItem value="karnataka">Karnataka</SelectItem>
            <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
            <SelectItem value="telangana">Telangana</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="save-billing" 
          className="mt-1 border-flixbus-border data-[state=checked]:bg-flixbus-blue data-[state=checked]:border-flixbus-blue"
        />
        <Label htmlFor="save-billing" className="text-sm text-flixbus-text leading-relaxed">
          Confirm and save billing details to your profile
        </Label>
      </div>
    </div>
  );
};

export default PincodeSection;