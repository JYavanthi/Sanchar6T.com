
// import Suresh from "@/assets/man1.png";
// import Bhaskar from "@/assets/man 2.png";
// import Ravi from "@/assets/man 3.png";
// import Mani from "@/assets/man 4.png";

// const MeetOurGuide = () => {
//   const guides = [
//     {
//       id: 1,
//       name: "Suresh",
//       image: Suresh,
//       bio: "With a strong passion for traveling, I worked as an English-speaking guide for 10 years with a travel agent. I love to travel and communicate with tourists from all corners of the world.",
//     },
//     {
//       id: 2,
//       name: "Bhaskar",
//       image: Bhaskar,
//       bio: "As a professional guide for 8 years, I specialize in cultural tours and storytelling. My mission is to make every journey memorable and full of local experiences.",
//     },
//     {
//       id: 3,
//       name: "Ravi",
//       image: Ravi,
//       bio: "Guiding travelers has been my passion for 12 years. I focus on adventure trips and love showing hidden gems while ensuring safety and fun.",
//     },
//     {
//       id: 4,
//       name: "Mani",
//       image: Mani,
//       bio: "For over 9 years, I have been helping travelers explore historic sites. I enjoy sharing stories and creating unforgettable travel experiences.",
//     },
//   ];

//   return (
//     <>
//       <section className="mx-auto w-full max-w-[1200px] px-5 py-[42px]">

//         {/* TITLE */}
//         <h2 className="mb-2 text-center text-[36px] font-bold text-[#226cb2]">
//           Meet our Local Travel Guides
//         </h2>

//         {/* SUBTITLE */}
//         <p className="mb-10 text-center text-[16px] text-[#4f4f4f]">
//           Experienced travel specialists with a passion for travel
//         </p>

//         {/* GRID */}
//         <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-4">

//           {guides.map((guide) => (
//             <div
//               key={guide.id}
//               className="overflow-hidden rounded-[20px] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.15)] transition duration-300 hover:shadow-[0_10px_22px_rgba(0,0,0,0.2)] group"
//             >

//               {/* IMAGE */}
//               <img
//                 src={guide.image}
//                 alt={guide.name}
//                 className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />

//               {/* CONTENT */}
//               <div className="p-5">
//                 <h3 className="mb-2 text-[20px] font-semibold text-[#226cb2]">
//                   {guide.name}
//                 </h3>

//                 <p className="text-[14px] leading-[1.6] text-[#666]">
//                   {guide.bio}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>
//       </section>

//       {/* KNOW MORE */}
//       <div className="mt-5 text-center">
//         <h4 className="text-[30px] text-[darkblue]">
//           Know More →
//         </h4>
//       </div>
//     </>
//   );
// };

// export default MeetOurGuide;


import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Suresh from "@/assets/man1.png";
import Bhaskar from "@/assets/man 2.png";
import Ravi from "@/assets/man 3.png";
import Mani from "@/assets/man 4.png";

const MeetOurGuide = () => {
  const guides = [
    {
      id: 1,
      name: "Suresh",
      image: Suresh,
      bio: "With a strong passion for traveling, I worked as an English-speaking guide for 10 years with a travel agent. I love to travel and communicate with tourists from all corners of the world.",
    },
    {
      id: 2,
      name: "Bhaskar",
      image: Bhaskar,
      bio: "As a professional guide for 8 years, I specialize in cultural tours and storytelling. My mission is to make every journey memorable and full of local experiences.",
    },
    {
      id: 3,
      name: "Ravi",
      image: Ravi,
      bio: "Guiding travelers has been my passion for 12 years. I focus on adventure trips and love showing hidden gems while ensuring safety and fun.",
    },
    {
      id: 4,
      name: "Mani",
      image: Mani,
      bio: "For over 9 years, I have been helping travelers explore historic sites. I enjoy sharing stories and creating unforgettable travel experiences.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile (<480)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 480);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? guides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === guides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-[42px]">

        {/* TITLE */}
        <h2 className="mb-2 text-center text-[22px] sm:text-[28px] md:text-[36px] font-bold text-[#226cb2]">
          Meet our Local Travel Guides
        </h2>

        {/* SUBTITLE */}
        <p className="mb-6 md:mb-10 text-center text-[13px] sm:text-[14px] md:text-[16px] text-[#4f4f4f]">
          Experienced travel specialists with a passion for travel
        </p>

        {/* 🔥 MOBILE CAROUSEL */}
        {isMobile ? (
          <div className="relative flex items-center">

            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 bg-white shadow p-2 rounded-full"
            >
              <ChevronLeft />
            </button>

            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {guides.map((guide) => (
                  <div
                    key={guide.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="flex flex-col bg-white rounded-[16px] shadow p-4">

                      <img
                        src={guide.image}
                        alt={guide.name}
                        className="h-[180px] w-full object-cover rounded-[12px]"
                      />

                      <h3 className="mt-3 text-[16px] font-semibold text-[#226cb2]">
                        {guide.name}
                      </h3>

                      <p className="mt-2 text-[12px] text-[#666] line-clamp-4">
                        {guide.bio}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 z-10 bg-white shadow p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        ) : (
          /* ✅ GRID (tablet + desktop) */
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="h-[200px] md:h-[250px] w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-[16px] md:text-[20px] font-semibold text-[#226cb2]">
                    {guide.name}
                  </h3>

                  <p className="mt-2 text-[13px] md:text-[14px] text-[#666] line-clamp-4">
                    {guide.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <div className="mt-4 text-center">
        <h4 className="text-[16px] md:text-[30px] text-[darkblue] cursor-pointer">
          Know More →
        </h4>
      </div>
    </>
  );
};

export default MeetOurGuide;