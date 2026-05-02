


// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import TourCard from "./TourCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import tirupatiTemple from "@/assets/tirupati-temple.jpg";
// import goaBeach from "@/assets/goa-beach.jpg";
// import udupiaTemple from "@/assets/udupi-temple.jpg";
// import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
// import TirupatiReviewsSection from "./TirupatiReviewsSection"; // ✅ Import reviews section

// const HeroSection = () => {
//   const tours = [
//     {
//       title: "5 Days Goa Trip",
//       description:
//         "With five days in Goa, enjoy a perfect mix of sun, sand, vibrant nightlife, and visits to stunning beaches and historic forts.",
//       image: goaBeach,
//     },
//     {
//       title: "5 Days Udupi Trip",
//       description:
//         "With five days in Udupi, explore the famous Sri Krishna Temple, relax on serene beaches, enjoy coastal cuisine, and visit...",
//       image: udupiaTemple,
//     },
//     {
//       title: "5 Days Kerala Trip",
//       description:
//         "With five days in Kerala, enjoy a delightful blend of backwaters, hill stations, spice plantations, and cultural experiences.",
//       image: keralaBackwaters,
//     },
//   ];

//   const itinerary = [
//     {
//       day: 1,
//       place: "Tirumala",
//       activities: "Visit Tirumala Venkateswara Temple, explore local markets",
//       stay: "Tirupati Hotel",
//     },
//     {
//       day: 2,
//       place: "Srikalahasti",
//       activities: "Temple tour, cultural activities",
//       stay: "Srikalahasti Guest House",
//     },
//   ];

//   // -------- Day 1 Carousel --------
//   const day1Images = [
//     "https://5.imimg.com/data5/SELLER/Default/2025/5/515246579/OD/MO/VZ/195676118/ac-bus-new-deluxe-sleeper-coach-bus-body-500x500.jpeg",
//     "https://5.imimg.com/data5/ANDROID/Default/2022/11/JN/LC/CG/113379803/product-jpeg.jpg",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? day1Images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === day1Images.length - 1 ? 0 : prev + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // -------- Day 2 Carousel --------
//   const day2Images = [
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Padmavathi_Ammavari_Temple.JPG/1200px-Padmavathi_Ammavari_Temple.JPG",
//     "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_Anand_nilayam4653.jpg",
//   ];
//   const [currentIndex2, setCurrentIndex2] = useState(0);

//   const prevSlide2 = () => {
//     setCurrentIndex2((prev) =>
//       prev === 0 ? day2Images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide2 = () => {
//     setCurrentIndex2((prev) =>
//       prev === day2Images.length - 1 ? 0 : prev + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide2, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gradient-to-b from-secondary/30 to-secondary/10 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-10 animate-fade-in">
//           <nav className="text-sm text-muted-foreground font-medium">
//             <span className="hover:text-primary transition-colors cursor-pointer">
//               Tirumala
//             </span>
//             <span className="mx-1">/</span>
//             <span className="text-primary font-semibold">Tirupati</span>
//             <span className="mx-1">/</span>
//             <span className="hover:text-primary transition-colors cursor-pointer">
//               7 Days Tour
//             </span>
//           </nav>
//         </div>

//         {/* Grid Layout (Left 60% / Right 40%) */}
//         <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-start px-4 lg:px-8">
//           {/* Left - Hero Image & Description */}
//           <div className="relative animate-slide-in-left">
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg"
//                 alt="Tirupati Temple Complex - Sacred Tirumala Venkateswara Temple"
//                 className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
//                 <div className="absolute bottom-8 left-8 right-8">
//                   <h1 className="text-white text-4xl lg:text-5xl font-bold mb-3 drop-shadow-2xl leading-tight">
//                     Tirupati - Padmavati Temple Darshan 1 Day Package
//                   </h1>
//                   <div className="w-20 h-1 bg-accent rounded-full"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Description Text */}
//             <div className="mt-8 text-foreground leading-relaxed animate-fade-in">
//               {/* -------- Day 1 -------- */}
//               <div className="mt-8 animate-fade-in">
//                 <h2 className="text-2xl font-bold text-foreground mb-4">
//                   Day 1 – Departure from Bengaluru
//                 </h2>

//                 {/* Day 1 Slider */}
//                 <div className="relative w-full h-[280px] overflow-hidden rounded-2xl mb-4">
//                   <div
//                     className="flex transition-transform duration-700 ease-in-out"
//                     style={{
//                       transform: `translateX(-${currentIndex * 100}%)`,
//                     }}
//                   >
//                     {day1Images.map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`Day 1 Slide ${idx + 1}`}
//                         className="w-full h-[280px] object-cover flex-shrink-0"
//                       />
//                     ))}
//                   </div>

//                   <button
//                     onClick={prevSlide}
//                     className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>

//                 <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2">
//                   <li>
//                     <strong>07:30 AM:</strong> Departure from Office Anand Rao
//                     Circle, Majestic. Kindly request all pilgrims to arrive 15
//                     minutes early at their boarding points.
//                   </li>
//                   <li>
//                     <strong>Pickup Points:</strong> Indranagar, ITI Gate, Tin
//                     Factory, KR Puram, Hoskote Toll.
//                   </li>
//                   <li>
//                     <strong>Tea/Dinner Break:</strong> After Hoskote Toll
//                     (depending on timings).
//                   </li>
//                   <li>
//                     <strong>Hotel:</strong> Udupi Gardenia (Dinner excluded).
//                   </li>
//                 </ul>
//               </div>

//               {/* -------- Day 2 -------- */}
//               <div className="mt-8 animate-fade-in">
//                 <h2 className="text-2xl font-bold text-foreground mb-4">
//                   Day 2 – Arrival at Tirupati & Tirumala Darshan
//                 </h2>

//                 {/* Day 2 Slider */}
//                 <div className="relative w-full h-[280px] overflow-hidden rounded-2xl mb-4">
//                   <div
//                     className="flex transition-transform duration-700 ease-in-out"
//                     style={{
//                       transform: `translateX(-${currentIndex2 * 100}%)`,
//                     }}
//                   >
//                     {day2Images.map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`Day 2 Slide ${idx + 1}`}
//                         className="w-full h-[280px] object-cover flex-shrink-0"
//                       />
//                     ))}
//                   </div>

//                   <button
//                     onClick={prevSlide2}
//                     className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={nextSlide2}
//                     className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>

//                 <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2">
//                   <li>
//                     <strong>Early Morning:</strong> Arrival in Tirupati. Check
//                     into the hotel for a brief freshening up (45–60 minutes; 2
//                     members per room).
//                   </li>
//                   <li>
//                     <strong>Breakfast:</strong> Enjoy a hearty breakfast at the
//                     hotel.
//                   </li>
//                   <li>
//                     <strong>Departure for Tirumala:</strong> Travel via APSRTC
//                     Non A/C bus.
//                   </li>
//                   <li>
//                     <strong>Tonsure:</strong> 1 hour allotted for Tonsure (Head
//                     Shave/Mundan).
//                   </li>
//                   <li>
//                     <strong>Dharma Darshanam:</strong> Participate at Tirumala
//                     Sri Venkateshwara Swamy Devasthanam (2–3+ hours depending on
//                     crowd). Laddu Prasadam provided.
//                   </li>
//                   <li>
//                     <strong>Lunch:</strong> Return to the hotel for lunch.
//                   </li>
//                   <li>
//                     <strong>Padmavati Ammaru Darshana:</strong> Depending on
//                     timeline, visit Padmavati Ammaru.
//                   </li>
//                   <li>
//                     <strong>Evening:</strong> Proceed back to Bangalore via A/C
//                     Sleeper Bus. Arrival in Bangalore same night.
//                   </li>
//                 </ul>
//               </div>

//               {/* ✅ Reviews Section Added here */}
//               <div className="mt-12">
//                 <TirupatiReviewsSection />
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Trip Planning + Tours */}
//           <div className="space-y-10 animate-fade-in">
//             {/* Trip Planning Section */}
//             <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
//               <div className="flex items-start space-x-4">
//                 <div className="w-2 h-16 bg-gradient-to-b from-primary to-accent rounded-full"></div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
//                     Plan your trip to Tirupati
//                   </h2>
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     Chat with a local specialist who can help organize your
//                     trip.
//                   </p>
//                   <Button className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
//                     Get Started
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* South India Tours Section */}
//             <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <div className="flex items-center space-x-3 mb-8">
//                 <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
//                 <h3 className="text-2xl font-bold text-foreground">
//                   South India 5 Days Tours and Itineraries
//                 </h3>
//               </div>
//               <div className="space-y-6">
//                 {tours.map((tour, index) => (
//                   <div
//                     key={index}
//                     className="animate-fade-in"
//                     style={{ animationDelay: `${0.3 + index * 0.1}s` }}
//                   >
//                     <TourCard
//                       title={tour.title}
//                       description={tour.description}
//                       image={tour.image}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// the above code is fully working but tirupatireviewsection in left side

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TourCard from "./TourCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import goaBeach from "@/assets/goa-beach.jpg";
import udupiaTemple from "@/assets/udupi-temple.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import TirupatiReviewsSection from "./TirupatiReviewsSection"; 
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const tours = [
    {
      title: "5 Days Goa Trip",
      description:
        "With five days in Goa, enjoy a perfect mix of sun, sand, vibrant nightlife, and visits to stunning beaches and historic forts.",
      image: goaBeach,
    },
    {
      title: "5 Days Udupi Trip",
      description:
        "With five days in Udupi, explore the famous Sri Krishna Temple, relax on serene beaches, enjoy coastal cuisine, and visit...",
      image: udupiaTemple,
    },
    {
      title: "5 Days Kerala Trip",
      description:
        "With five days in Kerala, enjoy a delightful blend of backwaters, hill stations, spice plantations, and cultural experiences.",
      image: keralaBackwaters,
    },
  ];

  // -------- Day 1 Carousel --------
  const day1Images = [
    "https://5.imimg.com/data5/SELLER/Default/2025/5/515246579/OD/MO/VZ/195676118/ac-bus-new-deluxe-sleeper-coach-bus-body-500x500.jpeg",
    "https://5.imimg.com/data5/ANDROID/Default/2022/11/JN/LC/CG/113379803/product-jpeg.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? day1Images.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === day1Images.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // -------- Day 2 Carousel --------
  const day2Images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Padmavathi_Ammavari_Temple.JPG/1200px-Padmavathi_Ammavari_Temple.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_Anand_nilayam4653.jpg",
  ];
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const prevSlide2 = () => {
    setCurrentIndex2((prev) =>
      prev === 0 ? day2Images.length - 1 : prev - 1
    );
  };
  const nextSlide2 = () => {
    setCurrentIndex2((prev) =>
      prev === day2Images.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide2, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="bg-gradient-to-b from-secondary/30 to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {/* <div className="mb-10 animate-fade-in">
          <nav className="text-sm text-muted-foreground font-medium">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Tirumala
            </span>
            <span className="mx-1">/</span>
            <span className="text-primary font-semibold">Tirupati</span>
            <span className="mx-1">/</span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              7 Days Tour
            </span>
          </nav>
        </div> */}

        {/* Grid Layout (Left 60% / Right 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-start px-4 lg:px-8">
          {/* ---------------- LEFT ---------------- */}
          <div className="relative animate-slide-in-left">
            {/* Main Hero Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg"
                alt="Tirupati Temple Complex - Sacred Tirumala Venkateswara Temple"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-8 left-8 right-8">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold mb-3 drop-shadow-2xl leading-tight">
                    Tirupati - Padmavati Temple Darshan 1 Day Package
                  </h1>
                  <div className="w-20 h-1 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* -------- Itinerary Content -------- */}
            <div className="mt-8 text-foreground leading-relaxed animate-fade-in">
              {/* Day 1 */}
              <div className="mt-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Day 1 – Departure from Bengaluru
                </h2>
                {/* Slider */}
                <div className="relative w-full h-[280px] overflow-hidden rounded-2xl mb-4">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {day1Images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Day 1 Slide ${idx + 1}`}
                        className="w-full h-[280px] object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2">
                  <li>
                    <strong>07:30 AM:</strong> Departure from Office Anand Rao
                    Circle, Majestic...
                  </li>
                  <li>
                    <strong>Pickup Points:</strong> Indranagar, ITI Gate, Tin
                    Factory, KR Puram, Hoskote Toll.
                  </li>
                  <li>
                    <strong>Tea/Dinner Break:</strong> After Hoskote Toll.
                  </li>
                  <li>
                    <strong>Hotel:</strong> Udupi Gardenia (Dinner excluded).
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="mt-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Day 2 – Arrival at Tirupati & Tirumala Darshan
                </h2>
                {/* Slider */}
                <div className="relative w-full h-[280px] overflow-hidden rounded-2xl mb-4">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}
                  >
                    {day2Images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Day 2 Slide ${idx + 1}`}
                        className="w-full h-[280px] object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                  <button
                    onClick={prevSlide2}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide2}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2">
                  <li>
                    <strong>Early Morning:</strong> Arrival in Tirupati. Check into hotel...
                  </li>
                  <li>
                    <strong>Breakfast:</strong> Enjoy a hearty breakfast.
                  </li>
                  <li>
                    <strong>Darshan:</strong> Participate at Tirumala Sri Venkateshwara.
                  </li>
                  <li>
                    <strong>Lunch & Evening:</strong> Return and depart back to Bangalore.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT ---------------- */}
          <div
           onClick={() => navigate("/coming-soon")} 
          className="space-y-10 animate-fade-in">
            {/* Trip Planning */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-16 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Plan your trip to Tirupati
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Chat with a local specialist who can help organize your trip.
                  </p>
                  <Button 
                    onClick={() => navigate("/coming-soon")}
                  className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Tours */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h3 className="text-2xl font-bold text-foreground">
                  South India 5 Days Tours and Itineraries
                </h3>
              </div>
              <div className="space-y-6">
                {tours.map((tour, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <TourCard
                    
                      title={tour.title}
                      description={tour.description}
                      image={tour.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Reviews moved to Right */}
            <div className="animate-fade-in bg-white  p-4 sm:p-6">
             
              <div className="text-sm sm:text-base">
                <TirupatiReviewsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




