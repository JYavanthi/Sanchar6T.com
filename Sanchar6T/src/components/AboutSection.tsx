// import heroGroup1 from "@/assets/hero-group-1.jpg";
// import heroGroup2 from "@/assets/hero-group-2.jpg";
// import heroGroup3 from "@/assets/hero-group-3.jpg";

// const AboutSection = () => {
//   return (
//     <section className="py-14 bg-white"> {/* reduced vertical padding */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Images Grid */}
//           <div className="space-y-3"> {/* reduced spacing between rows */}
//             {/* First row - single full-width image */}
//             <div>
//               <img 
//                 src={heroGroup1} 
//                 alt="Happy travelers group" 
//                 className="w-full h-72 md:h-[22rem] object-cover rounded-2xl shadow-elegant"
//               />
//             </div>
            
//             {/* Second row - two side-by-side images */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <img 
//                 src={heroGroup2} 
//                 alt="Travel consultation" 
//                 className="w-full h-56 object-cover rounded-2xl shadow-elegant"
//               />
//               <img 
//                 src={heroGroup3} 
//                 alt="Group dining experience" 
//                 className="w-full h-56 object-cover rounded-2xl shadow-elegant"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-4xl font-bold text-text-dark mb-2">
//                 About Us
//               </h2>
//               <h3 className="text-xl text-text-light mb-6">
//                 Your Journey. Our Promise.
//               </h3>
//             </div>

//             <div className="space-y-4 text-text-dark leading-relaxed">
//               <p>
//                 At Sanchar6T, we believe travel is more than just moving from one place to another
//                 —it's about creating seamless experiences and lasting memories. Specializing in
//                 Tirupati Balaji pilgrimages and custom travel solutions, we make your journey
//                 effortless, comfortable, and truly divine.
//               </p>

//               <p>
//                 With years of expertise and a deep understanding of devotional travel, we curate
//                 all-inclusive Tirupati packages featuring:
//               </p>

//               <ul className="space-y-2 list-disc list-inside text-text-dark ml-4">
//                 <li>Hassle-free travel in luxury AC buses & private cabs</li>
//                 <li>VIP Darshan arrangements for a smooth temple experience</li>
//                 <li>Comfortable stays & authentic vegetarian meals</li>
//                 <li>Personalized assistance every step of the way</li>
//               </ul>

//               <p>
//                 Led by our founder KN Nagesh, Sanchar6T is trusted by thousands of happy
//                 travelers who choose us for our reliability, transparency, and heartfelt service.
//                 Whether you're embarking on a spiritual pilgrimage or planning a group journey, we
//                 ensure every detail is handled with care, so you can focus on what truly matters— 
//                 your experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";

import heroGroup1 from "@/assets/hero-group-1.jpg";
import heroGroup2 from "@/assets/hero-group-2.jpg";
import heroGroup3 from "@/assets/hero-group-3.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-[56px] max-md:py-[40px]">
      <div className="mx-auto box-border max-w-[1280px] px-4 max-md:px-[14px]">
        <div className="grid grid-cols-2 items-center gap-[48px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[36px]">
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <img
                src={heroGroup1}
                alt="Happy travelers group"
                className="block h-[352px] w-full rounded-[24px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.12)] max-md:h-[260px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <img
                src={heroGroup2}
                alt="Travel consultation"
                className="block h-[224px] w-full rounded-[24px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.12)] max-md:h-[220px]"
              />
              <img
                src={heroGroup3}
                alt="Group dining experience"
                className="block h-[224px] w-full rounded-[24px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.12)] max-md:h-[220px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="m-0 text-center text-[40px] font-bold text-[#1f2937] max-md:text-[32px]">
                About Us
              </h2>
              <h3 className="m-0 text-center text-[20px] font-normal text-[#6b7280] max-md:text-[18px]">
                Your Journey. Our Promise.
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-[16px] leading-[1.8] text-[#1f2937] max-md:text-[15px] max-md:leading-[1.7]">
              <p className="m-0">
                At Sanchar6T, we believe travel is more than just moving from one
                place to another — it&apos;s about creating seamless experiences and
                lasting memories. Specializing in Tirupati Balaji pilgrimages and
                custom travel solutions, we make your journey effortless,
                comfortable, and truly divine.
              </p>

              <p className="m-0">
                With years of expertise and a deep understanding of devotional
                travel, we curate all-inclusive Tirupati packages featuring:
              </p>

              <ul className="m-0 ml-[18px] p-0 text-[#1f2937]">
                <li className="mb-2">
                  Hassle-free travel in luxury AC buses & private cabs
                </li>
                <li className="mb-2">
                  VIP Darshan arrangements for a smooth temple experience
                </li>
                <li className="mb-2">
                  Comfortable stays & authentic vegetarian meals
                </li>
                <li className="mb-2">
                  Personalized assistance every step of the way
                </li>
              </ul>

              <p className="m-0">
                Led by our founder KN Nagesh, Sanchar6T is trusted by thousands
                of happy travelers who choose us for our reliability,
                transparency, and heartfelt service. Whether you&apos;re embarking on
                a spiritual pilgrimage or planning a group journey, we ensure
                every detail is handled with care, so you can focus on what
                truly matters — your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;