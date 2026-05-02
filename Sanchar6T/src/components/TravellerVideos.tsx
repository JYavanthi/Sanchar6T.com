// import { Play } from "lucide-react";

// const TravellerVideos = () => {
//   const videos = [
//     {
//       id: 1,
//       thumbnail:
//         "https://productcatalo.my.canva.site/buses/_assets/media/4d25969f72a3a1223adf0bbe33521e6c.jpg",
//       videoUrl: "#", 
//     },
//     {
//       id: 2,
//       thumbnail:
//         "https://productcatalo.my.canva.site/buses/_assets/media/8f0d8daf940adc67b3f5bb97e4ed74f6.jpg",
//       videoUrl: "#",
//     },
//     {
//       id: 3,
//       thumbnail:
//         "https://productcatalo.my.canva.site/buses/_assets/media/fda796ab31d453dc954aad8a5ed37074.jpg",
//       videoUrl: "#",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[1200px] mx-auto py-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-10 text-[#226cb2]">
//         Traveller Stories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
//           >
            
//             <img
//               src={video.thumbnail}
//               alt="Traveller Video"
//               className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
//             />

            
//             <a
//               href={video.videoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
//                 <Play size={32} className="text-[#226cb2] ml-1" />
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TravellerVideos;


import { Play } from "lucide-react";

const TravellerVideos = () => {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://productcatalo.my.canva.site/buses/_assets/media/4d25969f72a3a1223adf0bbe33521e6c.jpg",
      videoUrl: "https://www.youtube.com/",
    },
    {
      id: 2,
      thumbnail:
        "https://productcatalo.my.canva.site/buses/_assets/media/8f0d8daf940adc67b3f5bb97e4ed74f6.jpg",
      videoUrl: "https://www.youtube.com/",
    },
    {
      id: 3,
      thumbnail:
        "https://productcatalo.my.canva.site/buses/_assets/media/fda796ab31d453dc954aad8a5ed37074.jpg",
      videoUrl: "https://www.youtube.com/",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#226cb2]">
        Traveller Stories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Thumbnail */}
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.thumbnail}
                alt="Traveller Video"
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-[#226cb2] ml-1" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravellerVideos;
