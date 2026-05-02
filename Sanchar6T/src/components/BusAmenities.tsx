import React from "react";
import {
  Snowflake,
  Luggage,
  Wifi,
  PlugZap,
  Bed,
  BookOpen,
  Lightbulb,
  LogOut,
  Hammer,
  ShieldAlert,
} from "lucide-react";

const amenities = [
  { id: 1, title: "Air Conditioner", icon: Snowflake },
  { id: 2, title: "Luggage Compartment", icon: Luggage },
  { id: 3, title: "Wifi", icon: Wifi },
  { id: 4, title: "Charging Points", icon: PlugZap },
  { id: 5, title: "Pillow", icon: Bed },
  { id: 6, title: "Blanket", icon: BookOpen },
  { id: 7, title: "Reading Light", icon: Lightbulb },
  { id: 8, title: "Emergency Exit", icon: LogOut },
  { id: 9, title: "Hammer", icon: Hammer },
  { id: 10, title: "Fire Extinguisher", icon: ShieldAlert },
];

const BusAmenities = () => {
  return (
    <section className="w-full bg-white py-[30px] pb-[50px] md:py-[20px] md:pb-[30px]">
      <div className="mx-auto w-full max-w-[1900px]">

        {/* TITLE */}
        <h2 className="mb-[28px] text-center text-[64px] font-bold leading-[1.1] text-[#081b87] max-[1400px]:text-[52px] max-[1024px]:text-[42px] max-md:text-[34px] max-md:mb-[20px]">
          Bus Amenities
        </h2>

        {/* CARD */}
        <div className="overflow-hidden rounded-[44px] bg-[#3564a8] px-[26px] max-[1024px]:rounded-[28px] max-[1024px]:px-[20px] max-[1024px]:py-[28px]">

          <div className="grid grid-cols-5 items-start gap-x-[34px] max-[1024px]:grid-cols-3 max-md:grid-cols-2 max-md:gap-6">
            {amenities.map((item, index) => {
              const Icon = item.icon;

              return (
                <React.Fragment key={item.id}>
                  
                  {/* ITEM */}
                  <div className="flex min-h-[200px] flex-col items-center justify-center max-md:min-h-[170px]">
                    
                    <div className="mb-[14px] flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white max-[1024px]:h-[120px] max-[1024px]:w-[120px] max-md:h-[96px] max-md:w-[96px] max-md:border-[3px]">
                      <Icon className="h-[84px] w-[84px] text-white stroke-[1.8] max-[1400px]:h-[70px] max-[1400px]:w-[70px] max-[1024px]:h-[60px] max-[1024px]:w-[60px] max-md:h-[46px] max-md:w-[46px]" />
                    </div>

                    <p className="text-center text-[17px] font-medium text-white leading-[1.2] max-[1024px]:text-[20px] max-md:text-[16px]">
                      {item.title}
                    </p>
                  </div>

                  {/* DIVIDER */}
                  {index === 4 && (
                    <div className="col-span-full my-[4px] mb-[10px] border-t-[8px] border-dashed border-white opacity-95 max-[1024px]:hidden"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusAmenities;