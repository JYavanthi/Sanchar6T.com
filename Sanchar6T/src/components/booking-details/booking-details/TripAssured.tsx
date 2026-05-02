import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const TripAssured = () => {
  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-12 h-12 bg-flixbus-blue rounded-full flex items-center justify-center flex-shrink-0">
        
          <img src="https://tripmoneycmsimgak.mmtcdn.com/img/TA_3x_1_1b6a50dc96.png" alt=""  />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-[16px]">Get TripAssured at just ₹21</h3>
          
            <img className="w-8 h-8" src="https://jsak.mmtcdn.com/bus_cdn_dt/static/media/newIcon.9d355bd2.svg" alt="" />
          </div>
          <div className="text-sm  mb-3">
        <span className="font-bold text-[16px]">Flat </span><span className="text-[#4A4A4A]">2x Refund{" "}</span>
            <button className="text-[#008cff] text-[16px] underline">Full Terms And Conditions</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2 text-sm">
             
              <img className="w-8 h-8" src="https://tripmoneycmsimgak.mmtcdn.com/img/For_Hospitalisation_Coverage_3x_d0f1a3ad1d.png" alt=""  />
           <span className="font-bold text-[16px]">Upto ₹75000</span>   <span className="text-[#4A4A4A] text-[16px]"> for Hospitalisation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <img className="w-8 h-8" src="https://tripmoneycmsimgak.mmtcdn.com/img/Disability_coverage_3x_adc537fb9a.png" alt="" />
            <span className="font-bold text-[16px]">Upto ₹5 lakh</span>  <span className="text-[#4A4A4A] text[16px]"> for Death/Disability</span>
            </div>
          </div>
          
          <div className=" p-3 rounded-lg mb-4">
            <div className="h-[33px] px-[14px] py-[8px] rounded-l-lg bg-gradient-to-r from-[#f4e9ff] to-white whitespace-nowrap text-[#3023ae] font-bold text-[12px] ml-auto -mr-4 flex items-center">
  5 Lakh+ people secured their trips with TripAssured
</div>

          </div>
          
          <RadioGroup defaultValue="add" className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="add" 
                id="add-tripassured" 
                className="border border-[#008cff] text[#008cff]"
              />
              <Label htmlFor="add-tripassured" className="text-sm font-medium text-flixbus-text">
                Add TripAssured at ₹21/Person{" "}
                <button className="text-[#008cff]">Details</button>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="no" 
                id="no-tripassured" 
                className="border border-[#008cff] text[#008cff]"
              />
              <Label htmlFor="no-tripassured" className="text-sm text-flixbus-light-text">
                No, I don't need it
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default TripAssured;