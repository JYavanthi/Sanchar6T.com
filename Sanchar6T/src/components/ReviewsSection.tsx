

// import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     name: "Akshith J",
//     location: "Banglore, Karnataka.",
//     review:
//       "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!",
//     rating: 5,
//     avatar: "AJ",
//   },
//   {
//     id: 2,
//     name: "Rushikesh R",
//     location: "Pune, Maharashtra",
//     review:
//       "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!",
//     rating: 5,
//     avatar: "RR",
//   },
//   {
//     id: 3,
//     name: "Yavanthi S",
//     location: "Banglore, Karnataka.",
//     review:
//       "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
//     rating: 5,
//     avatar: "YS",
//   },
// ];

// const ReviewsSection = () => {
//   return (
//     <div className="bg-[rgba(219,234,254,0.3)] py-[34px]">
//       <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <h2 className="mb-4 text-[36px] font-bold text-[#1e3a8a]">
//             Travelers Love Sanchar6T
//           </h2>
//           <p className="m-0 text-[18px] text-[rgba(30,58,138,0.7)]">
//             25,000+ people booked from Bengaluru on Sanchar6T last month
//           </p>
//         </div>

//         <div className="flex items-center">
//           <button className="p-[2px]">
//             <ChevronLeft />
//           </button>

//           <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {reviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="rounded-[32px] bg-white px-6 pb-6 pt-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
//               >
//                 <div className="mb-4 flex items-start gap-4">
//                   <div className="flex h-[67px] w-[67px] shrink-0 items-center justify-center rounded-full bg-[#0ea5a4] text-[27px] font-bold text-white">
//                     {review.avatar}
//                   </div>

//                   <div className="flex-1">
//                     <h4 className="m-0 text-[26px] font-semibold text-[#1e3a8a]">
//                       {review.name}
//                     </h4>
//                     <p className="mt-1 text-[17px] text-[rgba(30,58,138,0.7)]">
//                       {review.location}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-3 ml-[81px] flex gap-1">
//                   {Array.from({ length: review.rating }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-[22px] w-[22px] fill-[#facc15] text-[#facc15]"
//                     />
//                   ))}
//                 </div>

//                 <p className="m-0 text-[16px] leading-[1.7] text-[rgba(30,58,138,0.8)]">
//                   {review.review}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <button className="p-[2px]">
//             <ChevronRight />
//           </button>
//         </div>
//       </div>

//       <div className="mt-5 text-center">
//         <h4 className="text-[30px] text-[darkblue]">Read More Reviews →</h4>
//       </div>
//     </div>
//   );
// };

// export default ReviewsSection;


import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Akshith J",
    location: "Banglore, Karnataka.",
    review:
      "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!",
    rating: 5,
    avatar: "AJ",
  },
  {
    id: 2,
    name: "Rushikesh R",
    location: "Pune, Maharashtra",
    review:
      "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!",
    rating: 5,
    avatar: "RR",
  },
  {
    id: 3,
    name: "Yavanthi S",
    location: "Banglore, Karnataka.",
    review:
      "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
    rating: 5,
    avatar: "YS",
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1100) setItemsPerView(3);
      else if (window.innerWidth >= 480) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev >= reviews.length - itemsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[rgba(219,234,254,0.3)] py-6 md:py-[34px]">
      <div className="mx-auto max-w-[1280px] px-3 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 md:mb-12 text-center">
          <h2 className="mb-2 md:mb-4 text-[20px] md:text-[36px] font-bold text-[#1e3a8a]">
            Travelers Love Sanchar6T
          </h2>
          <p className="text-[12px] md:text-[18px] text-[rgba(30,58,138,0.7)]">
            25,000+ people booked from Bengaluru on Sanchar6T last month
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">

          {/* Left */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* Wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${index * (100 / itemsPerView)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="px-2 flex-shrink-0"
                  style={{
                    flexBasis: `${100 / itemsPerView}%`,
                  }}
                >
                  <div className="h-full flex flex-col justify-between bg-white rounded-[18px] md:rounded-[28px] px-3 md:px-6 py-4 shadow">

                    {/* Top */}
                    <div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="flex h-[38px] w-[38px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full bg-[#0ea5a4] text-[14px] md:text-[24px] font-bold text-white">
                          {review.avatar}
                        </div>

                        <div>
                          <h4 className="text-[13px] md:text-[22px] font-semibold text-[#1e3a8a]">
                            {review.name}
                          </h4>
                          <p className="text-[10px] md:text-[15px] text-[rgba(30,58,138,0.7)]">
                            {review.location}
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="mt-2 flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-[13px] w-[13px] md:h-[20px] md:w-[20px] fill-[#facc15] text-[#facc15]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review */}
                    <p className="mt-3 text-[11px] md:text-[15px] leading-[1.5] text-[rgba(30,58,138,0.8)] line-clamp-4">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 text-center">
        <h4 className="text-[16px] md:text-[28px] text-[darkblue] cursor-pointer">
          Read More Reviews →
        </h4>
      </div>
    </div>
  );
};

export default ReviewsSection;