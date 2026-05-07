
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
// import { motion } from "framer-motion";
// import tirupatiTemple from "@/assets/tirupati-temple.jpg";
// import tirupatiKalasti from "@/assets/tirupati-kalasti.jpg";
// import studentTrip from "@/assets/student-trip.jpg";
// import coporateTours from "@/assets/corporate-tours.jpeg";
// import eventTrip from "@/assets/event-trip.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const carouselCards = [
//   { src: tirupatiTemple, title: "TIRUPATI", subtitle: "Round Trip", price: "Rs.5000" },
//   { src: tirupatiKalasti, title: "Tirupati Kalahasti", subtitle: "Round Trip", price: "Rs.6000" },
//   { src: studentTrip, title: "Student Trip", subtitle: "Round Trip", price: "Rs.4500" },
//   { src: coporateTours, title: "Corporate Tours", subtitle: "Round Trip", price: "Rs.3500" },
//   { src: eventTrip, title: "Event Trip", subtitle: "Round Trip", price: "Rs.25000" },
// ];

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselCards.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);
            
//   return (
//     <section className="relative min-h-[520px] min-[462px]:min-h-[480px] min-[762px]:min-h-[680px] overflow-hidden">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <img
//           src="https://productcatalo.my.canva.site/buses/_assets/media/7118155fa4fcbce624c567ea8c8b93e9.jpg"
//           className="h-full w-full object-cover"
//           alt="Hero Background"
//         />
//       </div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 z-[1] bg-[rgba(0,30,60,0.18)]" />

//       {/* CONTAINER */}
//       <div className="relative z-[2] mx-auto max-w-[1400px] px-5 pb-10 pt-[20px] min-[762px]:pt-[55px] sm:px-8 lg:px-[40px] lg:pt-[30px]">
//         <div className="grid min-h-[590px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[20px]">
//           {/* LEFT */}
//           <div className="text-center text-white lg:text-left">
//             <h1 className="mb-[15px] max-w-[900px] text-[42px] font-bold leading-[1.15] sm:text-[56px] lg:text-[77px]">
//               Explore India with <br />
//               <span>Ease</span>
//             </h1>

//             <p className="mx-auto mb-[30px] max-w-[900px] text-[16px] font-normal leading-[1.5] text-white/95 sm:text-[18px] lg:mx-0 lg:mb-[46px] lg:mr-[44px] lg:text-[19px]">
//               Get the affordable ticket for you in every season without any worries.
//               We are also giving a special offer on a round-trip for some destinations,
//               so you can earn points from it!
//             </p>

//             <Button
//               onClick={() => navigate("/coming-soon")}
//               className="rounded-[14px] bg-[#f0d351] px-[23px] py-[18px] text-[16px] font-bold text-[#14213d] hover:bg-[#ebcd42]"
//             >
//               More Details
//             </Button>
//           </div>

//           {/* RIGHT */}
//           <div className="hidden min-[762px]:flex  relative mx-auto flex h-[390px] w-full max-w-[500px] items-center justify-center sm:h-[470px] lg:ml-auto lg:mt-[-82px] lg:h-[520px] lg:w-[500px]">
//             {/* LEFT NAV */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-1 top-1/2 z-[20] flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center text-white sm:left-[-9px] sm:h-[64px] sm:w-[64px]"
//             >
//               <ChevronLeft className="h-[42px] w-[42px] sm:h-[58px] sm:w-[58px]" />
//             </button>

//             {/* CAROUSEL */}
//             <div className="relative flex h-[360px] w-full max-w-[500px] items-center justify-center overflow-visible sm:h-[460px]">
//               {carouselCards.map((card, index) => {
//                 const prevIndex = (currentSlide - 1 + carouselCards.length) % carouselCards.length;
//                 const nextIndex = (currentSlide + 1) % carouselCards.length;

//                 const isActive = index === currentSlide;
//                 const isNext = index === nextIndex;
//                 const isPrev = index === prevIndex;

//                 const isMobile = window.innerWidth < 1024;

//                 let x = 0;
//                 let scale = 1;
//                 let opacity = 0;
//                 let zIndex = 0;
//                 let sizeClass = "";

//                 if (isMobile) {
//                   if (isActive) {
//                     x = 0;
//                     opacity = 1;
//                     zIndex = 3;
//                     sizeClass = "w-[260px] h-[310px]";
//                   } else {
//                     x = 0;
//                     opacity = 0;
//                     zIndex = 0;
//                     sizeClass = "w-[260px] h-[310px]";
//                   }
//                 } else {
//                   if (isActive) {
//                     x = -75;
//                     opacity = 1;
//                     zIndex = 3;
//                     sizeClass = "w-[280px] h-[320px]";
//                   } else if (isNext) {
//                     x = 220;
//                     opacity = 1;
//                     zIndex = 2;
//                     sizeClass = "w-[120px] h-[320px]";
//                   } else if (isPrev) {
//                     x = -260;
//                     opacity = 0;
//                     zIndex = 1;
//                     sizeClass = "w-[120px] h-[280px]";
//                   } else {
//                     x = 260;
//                     scale = 0.95;
//                     opacity = 0;
//                     zIndex = 0;
//                   }
//                 }

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={false}
//                     animate={{ x, scale, opacity, zIndex }}
//                     transition={{ duration: 0.65, ease: "easeInOut" }}
//                     className={` absolute left-2/2 top-[8%] -translate-x-1/2 overflow-hidden rounded-[14px] border-[2px] border-white/90 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:left-[25%] lg:top-[15%] ${sizeClass}`}
//                   >
//                     <img src={card.src} className="h-full w-full object-cover " alt={card.title} />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />

//                     <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[18px]">
//                       <h3 className="text-[22px] font-extrabold uppercase text-white sm:text-[24px]">
//                         {card.title}
//                       </h3>

//                       {isActive && (
//                         <div className="mt-2 flex items-end justify-between gap-3">
//                           <div className="flex flex-wrap items-baseline gap-2">
//                             <p className="text-[24px] font-extrabold text-white sm:text-[31px]">
//                               {card.price}
//                             </p>
//                             <span className="text-[14px] text-white/95 sm:text-[16px]">
//                               {card.subtitle}
//                             </span>
//                           </div>

//                           <Link
//                             to="/coming-soon"
//                             className="flex h-[44px] w-[48px] items-center justify-center rounded-full bg-white/90 text-[#6c6400] sm:h-[50px] sm:w-[58px]"
//                           >
//                             <Plus className="h-[24px] w-[28px] sm:h-[26px] sm:w-[32px]" />
//                           </Link>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* RIGHT NAV */}
//             <button
//               onClick={nextSlide}
//               className="absolute right-1 top-1/2 z-[20] flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center text-white sm:right-[-15px] sm:h-[64px] sm:w-[64px]"
//             >
//               <ChevronRight className="h-[42px] w-[42px] sm:h-[58px] sm:w-[58px]" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import tirupatiTemple from "@/assets/tirupati-temple.jpg";
import tirupatiKalasti from "@/assets/tirupati-kalasti.jpg";
import studentTrip from "@/assets/student-trip.jpg";
import coporateTours from "@/assets/corporate-tours.jpeg";
import eventTrip from "@/assets/event-trip.jpg";
import { Link, useNavigate } from "react-router-dom";

const carouselCards = [
  { src: tirupatiTemple, title: "TIRUPATI", subtitle: "Round Trip", price: "Rs.5000" },
  { src: tirupatiKalasti, title: "Tirupati Kalahasti", subtitle: "Round Trip", price: "Rs.6000" },
  { src: studentTrip, title: "Student Trip", subtitle: "Round Trip", price: "Rs.4500" },
  { src: coporateTours, title: "Corporate Tours", subtitle: "Round Trip", price: "Rs.3500" },
  { src: eventTrip, title: "Event Trip", subtitle: "Round Trip", price: "Rs.25000" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
            
  return (
    <section className="relative min-h-[520px] min-[462px]:min-h-[480px] min-[762px]:min-h-[680px] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://productcatalo.my.canva.site/buses/_assets/media/7118155fa4fcbce624c567ea8c8b93e9.jpg"
          className="h-full w-full object-cover"
          alt="Hero Background"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-[rgba(0,30,60,0.18)]" />

      {/* CONTAINER */}
      <div className="relative z-[2] mx-auto max-w-[1400px] px-5 pb-10 pt-[20px] min-[762px]:pt-[55px] sm:px-8 lg:px-[40px] lg:pt-[30px]">
        <div className="grid min-h-[590px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[20px] max-[760px]:min-h-[450px]">
          {/* LEFT */}
          <div className="text-center text-white lg:text-left">
            <h1 className="mb-[15px] max-w-[900px] text-[42px] font-bold leading-[1.15] sm:text-[56px] lg:text-[77px]">
              Explore India with <br />
              <span>Ease</span>
            </h1>

            <p className="mx-auto mb-[30px] max-w-[900px] text-[16px] font-normal leading-[1.5] text-white/95 sm:text-[18px] lg:mx-0 lg:mb-[46px] lg:mr-[44px] lg:text-[19px]">
              Get the affordable ticket for you in every season without any worries.
              We are also giving a special offer on a round-trip for some destinations,
              so you can earn points from it!
            </p>

            <Button
              onClick={() => navigate("/coming-soon")}
              className="rounded-[14px] bg-[#f0d351] px-[23px] py-[18px] text-[16px] font-bold text-[#14213d] hover:bg-[#ebcd42]"
            >
              More Details
            </Button>
          </div>

          {/* RIGHT */}
          <div className="hidden min-[762px]:flex  relative mx-auto flex h-[390px] w-full max-w-[500px] items-center justify-center sm:h-[470px] lg:ml-auto lg:mt-[-82px] lg:h-[520px] lg:w-[500px]">
            {/* LEFT NAV */}
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 z-[20] flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center text-white sm:left-[-9px] sm:h-[64px] sm:w-[64px]"
            >
              <ChevronLeft className="h-[42px] w-[42px] sm:h-[58px] sm:w-[58px]" />
            </button>

            {/* CAROUSEL */}
            <div className="relative flex h-[360px] w-full max-w-[500px] items-center justify-center overflow-visible sm:h-[460px]">
              {carouselCards.map((card, index) => {
                const prevIndex = (currentSlide - 1 + carouselCards.length) % carouselCards.length;
                const nextIndex = (currentSlide + 1) % carouselCards.length;

                const isActive = index === currentSlide;
                const isNext = index === nextIndex;
                const isPrev = index === prevIndex;

                const isMobile = window.innerWidth < 1024;

                let x = 0;
                let scale = 1;
                let opacity = 0;
                let zIndex = 0;
                let sizeClass = "";

                if (isMobile) {
                  if (isActive) {
                    x = 0;
                    opacity = 1;
                    zIndex = 3;
                    sizeClass = "w-[260px] h-[310px]";
                  } else {
                    x = 0;
                    opacity = 0;
                    zIndex = 0;
                    sizeClass = "w-[260px] h-[310px]";
                  }
                } else {
                  if (isActive) {
                    x = -75;
                    opacity = 1;
                    zIndex = 3;
                    sizeClass = "w-[280px] h-[320px]";
                  } else if (isNext) {
                    x = 220;
                    opacity = 1;
                    zIndex = 2;
                    sizeClass = "w-[120px] h-[320px]";
                  } else if (isPrev) {
                    x = -260;
                    opacity = 0;
                    zIndex = 1;
                    sizeClass = "w-[120px] h-[280px]";
                  } else {
                    x = 260;
                    scale = 0.95;
                    opacity = 0;
                    zIndex = 0;
                  }
                }

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{ x, scale, opacity, zIndex }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className={` absolute left-2/2 top-[8%] -translate-x-1/2 overflow-hidden rounded-[14px] border-[2px] border-white/90 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:left-[25%] lg:top-[15%] ${sizeClass}`}
                  >
                    <img src={card.src} className="h-full w-full object-cover " alt={card.title} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />

                    <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[18px]">
                      <h3 className="text-[22px] font-extrabold uppercase text-white sm:text-[24px]">
                        {card.title}
                      </h3>

                      {isActive && (
                        <div className="mt-2 flex items-end justify-between gap-3">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <p className="text-[24px] font-extrabold text-white sm:text-[31px]">
                              {card.price}
                            </p>
                            <span className="text-[14px] text-white/95 sm:text-[16px]">
                              {card.subtitle}
                            </span>
                          </div>

                          <Link
                            to="/coming-soon"
                            className="flex h-[44px] w-[48px] items-center justify-center rounded-full bg-white/90 text-[#6c6400] sm:h-[50px] sm:w-[58px]"
                          >
                            <Plus className="h-[24px] w-[28px] sm:h-[26px] sm:w-[32px]" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT NAV */}
            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 z-[20] flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center text-white sm:right-[-15px] sm:h-[64px] sm:w-[64px]"
            >
              <ChevronRight className="h-[42px] w-[42px] sm:h-[58px] sm:w-[58px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;