// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
// import { motion } from "framer-motion"; // ✅ keep motion only
// import tirupatiTemple from "@/assets/tirupati-temple.jpg";
// import tirupatiKalasti from "@/assets/tirupati-kalasti.jpg";
// import studentTrip from "@/assets/student-trip.jpg";
// import coporateTours from "@/assets/corporate-tours.jpeg";
// import eventTrip from "@/assets/event-trip.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const carouselCards = [
//   {
//     src: tirupatiTemple,
//     title: "TIRUPATI",
//     subtitle: "Round Trip",
//     price: "Rs.5000",
//   },
//   {
//     src: tirupatiKalasti,
//     title: "Tirupati Kalahasti",
//     subtitle: "Round Trip",
//     price: "Rs.6000",
//   },
//   {
//     src: studentTrip,
//     title: "Student Trip",
//     subtitle: "Round Trip",
//     price: "Rs.4500",
//   },
//   {
//     src: coporateTours,
//     title: "Corporate Tours",
//     subtitle: "Round Trip",
//     price: "Rs.3500",
//   },
//   {
//     src: eventTrip,
//     title: "Event Trip",
//     subtitle: "Round Trip",
//     price: "Rs.25000",
//   },
// ];

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselCards.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + carouselCards.length) % carouselCards.length
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="https://productcatalo.my.canva.site/buses/_assets/media/7118155fa4fcbce624c567ea8c8b93e9.jpg"
//           alt="Beautiful coastal landscape with turquoise water"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-[400px]">
//           {/* Left Content */}
//           <div className="text-white z-10 text-center lg:text-left">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Explore India with
//               <br />
//               <span className="text-white">Ease</span>
//             </h1>

//             <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-white/95 leading-relaxed max-w-lg mx-auto lg:mx-0">
//               Get the affordable ticket for you in every season without any
//               worries. We are also giving a special offer on a round-trip for
//               some destinations, so you can earn points from it!
//             </p>

//             <Button
//               variant="hero"
//               onClick={() => navigate("/coming-soon")}
//               size="lg"
//               className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 font-semibold"
//             >
//               More Details
//             </Button>
//           </div>

//           {/* Right Carousel Cards */}
//           <div className="relative flex items-center justify-center z-10 mt-10 lg:mt-0">
//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
//             </button>

//             {/* Cards with Sliding Effect */}
//             <div className="relative flex items-center justify-center w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px]">
//               {carouselCards.map((card, index) => {
//                 const isActive = index === currentSlide;
//                 const isNext =
//                   index === (currentSlide + 1) % carouselCards.length;

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={false}
//                     animate={{
//                       scale: isActive ? 1 : 0.7,
//                       x: isActive ? 0 : isNext ? 160 : -160,
//                       zIndex: isActive ? 10 : 5,
//                       opacity: isActive ? 1 : 0.6,
//                     }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                     className="absolute rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
//                     style={{
//                       width: isActive ? "240px" : "140px",
//                       height: isActive ? "180px" : "100px",
//                     }}
//                   >
//                     <img
//                       src={card.src}
//                       alt={card.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/30"></div>

//                     {/* Overlay */}
//                     <div className="absolute bottom-3 left-3 text-white">
//                       <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1">
//                         {card.title}
//                       </h3>
//                       {isActive && (
//                         <div className="flex items-center gap-2">
//                           <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
//                             {card.price}
//                           </p>
//                           <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm opacity-90">
//                             {card.subtitle}
//                           </span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Plus Icon */}
//                     {isActive && (
//                       <div className="absolute top-2 right-2">
//                         <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
//                        <Link to="/coming-soon">  <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white font-bold" /></Link> 
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

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
//     <section className="relative min-h-[700px] overflow-hidden">
      
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <img
//           src="https://productcatalo.my.canva.site/buses/_assets/media/7118155fa4fcbce624c567ea8c8b93e9.jpg"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-[rgba(0,30,60,0.18)] z-[1]" />

//       {/* CONTAINER */}
//       <div className="relative z-[2] max-w-[1400px] mx-auto px-[40px] pt-[70px] pb-[40px]">
//         <div className="grid grid-cols-[1.1fr_0.9fr] gap-[20px] min-h-[590px]">

//           {/* LEFT */}
//           <div className="text-white">
//             <h1 className="text-[77px] font-bold leading-[1.2] max-w-[760px] mb-[15px]">
//               Explore India with <br />
//               <span>Ease</span>
//             </h1>

//             <p className="text-[19px] leading-[1.5] font-normal max-w-[900px] mb-[46px] mr-[44px] text-white/95">
//               Get the affordable ticket for you in every season without any worries.
//               We are also giving a special offer on a round-trip for some destinations,
//               so you can earn points from it!
//             </p>

//             <Button
//               onClick={() => navigate("/coming-soon")}
//               className="bg-[#f0d351] text-[#14213d] px-[23px] py-[18px] text-[16px] font-bold rounded-[14px] hover:bg-[#ebcd42]"
//             >
//               More Details
//             </Button>
//           </div>

//           {/* RIGHT */}
//           <div className="relative w-[500px] h-[520px] flex items-center justify-center ml-auto mt-[-82px]">

//             {/* LEFT NAV */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-[-9px] top-1/2 -translate-y-1/2 z-[20] w-[64px] h-[64px] flex items-center justify-center text-white"
//             >
//               <ChevronLeft className="w-[58px] h-[58px]" />
//             </button>

//             {/* CAROUSEL */}
//             <div className="relative w-[500px] h-[460px] flex items-center justify-center overflow-visible">

//               {carouselCards.map((card, index) => {
//                 const prevIndex = (currentSlide - 1 + carouselCards.length) % carouselCards.length;
//                 const nextIndex = (currentSlide + 1) % carouselCards.length;

//                 const isActive = index === currentSlide;
//                 const isNext = index === nextIndex;
//                 const isPrev = index === prevIndex;

//                 let x = 0;
//                 let scale = 1;
//                 let opacity = 0;
//                 let zIndex = 0;
//                 let sizeClass = "";

//                 if (isActive) {
//                   x = -75;
//                   opacity = 1;
//                   zIndex = 3;
//                   sizeClass = "w-[280px] h-[320px]";
//                 } else if (isNext) {
//                   x = 220;
//                   opacity = 1;
//                   zIndex = 2;
//                   sizeClass = "w-[120px] h-[320px]";
//                 } else if (isPrev) {
//                   x = -260;
//                   opacity = 0;
//                   zIndex = 1;
//                   sizeClass = "w-[120px] h-[280px]";
//                 } else {
//                   x = 260;
//                   scale = 0.95;
//                   opacity = 0;
//                   zIndex = 0;
//                 }

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={false}
//                     animate={{ x, scale, opacity, zIndex }}
//                     transition={{ duration: 0.65, ease: "easeInOut" }}
//                     className={`absolute top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2 
//                     rounded-[14px] overflow-hidden border-[2px] border-white/90 
//                     shadow-[0_18px_40px_rgba(0,0,0,0.18)] bg-white/10 ${sizeClass}`}
//                   >
//                     <img src={card.src} className="w-full h-full object-cover" />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />

//                     <div className="absolute bottom-0 left-0 right-0 px-[22px] pb-[20px]">
//                       <h3 className="text-white text-[24px] font-extrabold uppercase">
//                         {card.title}
//                       </h3>

//                       {isActive && (
//                         <div className="mt-2 flex justify-between items-end gap-3">
//                           <div className="flex gap-2 flex-wrap items-baseline">
//                             <p className="text-white text-[31px] font-extrabold">
//                               {card.price}
//                             </p>
//                             <span className="text-white/95 text-[16px]">
//                               {card.subtitle}
//                             </span>
//                           </div>

//                           <Link
//                             to="/coming-soon"
//                             className="w-[58px] h-[50px] rounded-full bg-white/90 flex items-center justify-center text-[#6c6400]"
//                           >
//                             <Plus className="w-[32px] h-[26px]" />
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
//               className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-[20] w-[64px] h-[64px] flex items-center justify-center text-white"
//             >
//               <ChevronRight className="w-[58px] h-[58px]" />
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
        <div className="grid min-h-[590px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[20px]">
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