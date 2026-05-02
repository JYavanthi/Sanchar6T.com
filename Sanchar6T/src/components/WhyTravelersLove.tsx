// import React from "react";

// const features = [
//   {
//     img: "https://productcatalo.my.canva.site/buses/_assets/media/a74db5bc19f1652078e1596f663a0061.png",
//     title: "Customize your trip with the help of a local travel specialist",
//     desc: "Sanchar6T has handpicked the world’s top local travel specialists so you will have peace of mind and an unforgettable trip that meets your exact requirements.",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOOD-JtmzcyFe2WKY1qlMOJriNIQZYl29hA&s",
//     title: "Authentic travel experiences",
//     desc: "Sanchar6T’s local specialists ensure that you will have the best experience based on up-to-date local insights. On top of that, the vast majority of your money will go straight to support and grow local economies.",
//   },
//   {
//     img: "https://productcatalo.my.canva.site/buses/_assets/media/238ee6a9534e2f151b16138b864ecf2c.png",
//     title: "Secure & easy booking",
//     desc: "Once you are happy with the trip, you can easily book via Sanchar6T’s secure payment platform.",
//   },
//   {
//     img: "https://productcatalo.my.canva.site/buses/_assets/media/7c2dbc4efc05be1c6a5018472400f972.png",
//     title: "Local support during your trip",
//     desc: "You can always reach your local specialist with a quick message or call in case you hit a snag during your trip, or simply want some great local recommendations.",
//   },
// ];

// const WhyTravelersLove = () => {
//   return (
//     <section className="w-full max-w-[1300px] mx-auto py-16 px-6 text-center">
//       {/* Heading */}
//       <h1 className="font-bold mb-6 text-[#020e68] text-5xl md:text-6xl">
//         Why travelers love Sanchar6T
//       </h1>

//       {/* Subheading */}
//       <h3 className="font-light max-w-3xl mx-auto leading-relaxed mb-12 text-[#0c507e] text-lg md:text-xl">
//         Custom trips for independent travelers who are too busy to plan
//       </h3>

//       {/* Feature Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-left">
//         {features.map((feature, index) => (
//           <div key={index} className="flex items-start gap-4 md:gap-6">
//             <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-400 flex items-center justify-center">
//               <img
//                 src={feature.img}
//                 alt={feature.title}
//                   className="w-14 h-14 md:w-20 md:h-20 object-contain"
                 
//               />
//             </div>
//             <div>
//               <h4 className="font-semibold text-[#020e68] mb-2 md:mb-1 text-lg md:text-xl">
//                 {feature.title}
//               </h4>
//               <p className="text-gray-700 text-sm md:text-base">{feature.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyTravelersLove;

import suitcase from "@/assets/suitcase.png";

const features = [
  {
    img: "https://productcatalo.my.canva.site/buses/_assets/media/a74db5bc19f1652078e1596f663a0061.png",
    title: "Customize your trip with the help of a local travel specialist",
    desc: "Sanchar6T has handpicked the world’s top local travel specialists so you will have peace of mind and an unforgettable trip that meets your exact requirements.",
  },
  {
    img: suitcase,
    title: "Authentic travel experiences",
    desc: "Sanchar6T’s local specialists ensure that you will have the best experience based on up-to-date local insights. On top of that, the vast majority of your money will go straight to support and grow local economies.",
  },
  {
    img: "https://productcatalo.my.canva.site/buses/_assets/media/238ee6a9534e2f151b16138b864ecf2c.png",
    title: "Secure & easy booking",
    desc: "Once you are happy with the trip, you can easily book via Sanchar6T’s secure payment platform.",
  },
  {
    img: "https://productcatalo.my.canva.site/buses/_assets/media/7c2dbc4efc05be1c6a5018472400f972.png",
    title: "Local support during your trip",
    desc: "You can always reach your local specialist with a quick message or call in case you hit a snag during your trip.",
  },
];

const WhyTravelersLove = () => {
  return (
    <section className="mx-auto w-full max-w-[1300px] px-5 py-[60px] text-center">

      {/* TITLE */}
      <h1 className="mb-5 text-[48px] font-bold text-[#020e68] md:text-[56px]">
        Why travelers love Sanchar6T
      </h1>

      {/* SUBTITLE */}
      <h3 className="mx-auto mb-[50px] max-w-[700px] text-[20px] font-light leading-[1.6] text-[#0c507e]">
        Custom trips for independent travelers who are too busy to plan
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-[40px] text-left md:grid-cols-2 md:gap-[50px] md:px-[45px]">

        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-5">

            {/* ICON */}
            <div className="flex h-[80px] w-[80px] min-w-[80px] items-center justify-center rounded-full bg-[#facc15]">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-[77px] w-[93px] object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-2">
              <h4 className="text-[20px] font-semibold text-[#020e68]">
                {feature.title}
              </h4>

              <p className="text-[15px] leading-[1.6] text-[#555]">
                {feature.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyTravelersLove;
