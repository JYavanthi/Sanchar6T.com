// import { Star } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     name: "Akshith J",
//     location: "Banglore, Karnataka.",
//     review: "Booked my Tirupati pilgrimage via Sanchar6t – smooth bus booking, helpful guides, comfy Volvo ride and VIP darshan. Great value, would travel with them again!",
//     rating: 5,
//     avatar: "AJ"
//   },
//   {
//     id: 2,
//     name: "Rushikesh R",
//     location: "Pune, Maharashtra",
//     review: "Excellent service and well-planned itinerary. Our Shirdi trip was peaceful and perfectly managed. Highly recommended for spiritual travel!",
//     rating: 5,
//     avatar: "RR"
//   },
//   {
//     id: 3,
//     name: "Yavanthi S",
//     location: "Banglore, Karnataka.",
//     review: "Sanchar6t made our family trip to Kanyakumari super easy. Good coordination, decent pricing, and timely updates. Will book again!",
//     rating: 5,
//     avatar: "YS"
//   }
// ];

// const ReviewsSection = () => {
//   return (
//     <div className="py-16 bg-light-blue/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-nav-blue mb-4">
//             Travelers Love Sanchar6T
//           </h2>
//           <p className="text-lg text-nav-blue/70 mb-6">
//             25,000+ people booked from Bengaluru on Sanchar6T last month
//           </p>
//           {/* <button className="text-primary font-medium hover:underline">
//             Read more reviews
//           </button> */}
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review) => (
//             <div 
//               key={review.id} 
//               className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
//             >
//               {/* Header */}
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
//                   {review.avatar}
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-semibold text-nav-blue">{review.name}</h4>
//                   <p className="text-sm text-nav-blue/70">{review.location}</p>
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="flex gap-1 mb-3">
//                 {Array.from({ length: review.rating }).map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-yellow-button text-yellow-button" />
//                 ))}
//               </div>

//               {/* Review Text */}
//               <p className="text-nav-blue/80 leading-relaxed">{review.review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsSection;


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
  return (
    <div className="bg-[rgba(219,234,254,0.3)] py-[34px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[36px] font-bold text-[#1e3a8a]">
            Travelers Love Sanchar6T
          </h2>
          <p className="m-0 text-[18px] text-[rgba(30,58,138,0.7)]">
            25,000+ people booked from Bengaluru on Sanchar6T last month
          </p>
        </div>

        <div className="flex items-center">
          <button className="p-[2px]">
            <ChevronLeft />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-[32px] bg-white px-6 pb-6 pt-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-[67px] w-[67px] shrink-0 items-center justify-center rounded-full bg-[#0ea5a4] text-[27px] font-bold text-white">
                    {review.avatar}
                  </div>

                  <div className="flex-1">
                    <h4 className="m-0 text-[26px] font-semibold text-[#1e3a8a]">
                      {review.name}
                    </h4>
                    <p className="mt-1 text-[17px] text-[rgba(30,58,138,0.7)]">
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="mb-3 ml-[81px] flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-[22px] w-[22px] fill-[#facc15] text-[#facc15]"
                    />
                  ))}
                </div>

                <p className="m-0 text-[16px] leading-[1.7] text-[rgba(30,58,138,0.8)]">
                  {review.review}
                </p>
              </div>
            ))}
          </div>

          <button className="p-[2px]">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h4 className="text-[30px] text-[darkblue]">Read More Reviews →</h4>
      </div>
    </div>
  );
};

export default ReviewsSection;