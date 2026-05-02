// import Suresh from "@/assets/man1.png";
// import Bhaskar from "@/assets/man 2.png";
// import Ravi from "@/assets/man 3.png";
// import Mani from "@/assets/man 4.png";


// const MeetOurGuide = () => {
//   const guides = [
//     {
//       id: 1,
//       name: "Suresh",
//       image:
//         // "https://productcatalo.my.canva.site/buses/_assets/media/644bf745a0fce1d3fa2a3731f3718bbf.jpg",
//         Suresh,
//       bio: "With a strong passion for traveling, I worked as an English-speaking guide for 10 years with a travel agent. I love to travel and communicate with tourists from all corners of the world.",
//     },
//     {
//       id: 2,
//       name: "Bhaskar",
//       image:
//         // "https://productcatalo.my.canva.site/buses/_assets/media/5fef04bbcad1023330078533aeb7a7b4.jpg",
//         Bhaskar,
//       bio: "As a professional guide for 8 years, I specialize in cultural tours and storytelling. My mission is to make every journey memorable and full of local experiences.",
//     },
//     {
//       id: 3,
//       name: "Ravi",
//       image:
//         // "https://productcatalo.my.canva.site/buses/_assets/media/dc8abbef9f3772cee8a50fb1dd3914c0.jpg",
//         Ravi,
//       bio: "Guiding travelers has been my passion for 12 years. I focus on adventure trips and love showing hidden gems while ensuring safety and fun.",
//     },
//     {
//       id: 4,
//       name: "Mani",
//       image:
//         // "https://productcatalo.my.canva.site/buses/_assets/media/14bb67c4115c450c6bacdb7d26868bae.jpg",
//         Mani,
//       bio: "For over 9 years, I have been helping travelers explore historic sites. I enjoy sharing stories and creating unforgettable travel experiences.",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[1200px] mx-auto py-12 px-6">
//       <h2 className="text-[36px] font-bold text-center mb-2 text-[#226cb2]">
//         Meet our Local Travel Specialists
//       </h2>
//       <p className="text-[16px] text-center mb-10  text-[#4F4F4F]">Experienced travel specialists with a passion for travel</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {guides.map((guide) => (
//           <div
//             key={guide.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
//           >
//             {/* Guide Image */}
//             <img
//               src={guide.image}
//               alt={guide.name}
//               className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//             />

//             {/* Text */}
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-[#226cb2] mb-2">
//                 {guide.name}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {guide.bio}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MeetOurGuide;


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

  return (
    <>
      <section className="mx-auto w-full max-w-[1200px] px-5 py-[42px]">

        {/* TITLE */}
        <h2 className="mb-2 text-center text-[36px] font-bold text-[#226cb2]">
          Meet our Local Travel Guides
        </h2>

        {/* SUBTITLE */}
        <p className="mb-10 text-center text-[16px] text-[#4f4f4f]">
          Experienced travel specialists with a passion for travel
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-4">

          {guides.map((guide) => (
            <div
              key={guide.id}
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.15)] transition duration-300 hover:shadow-[0_10px_22px_rgba(0,0,0,0.2)] group"
            >

              {/* IMAGE */}
              <img
                src={guide.image}
                alt={guide.name}
                className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="mb-2 text-[20px] font-semibold text-[#226cb2]">
                  {guide.name}
                </h3>

                <p className="text-[14px] leading-[1.6] text-[#666]">
                  {guide.bio}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* KNOW MORE */}
      <div className="mt-5 text-center">
        <h4 className="text-[30px] text-[darkblue]">
          Know More →
        </h4>
      </div>
    </>
  );
};

export default MeetOurGuide;