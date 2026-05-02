


import { useState } from "react";
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

const TirupatiReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-10"> {/* Reduced vertical padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8"> {/* Reduced bottom margin */}
          <h2 className="text-3xl font-bold text-nav-blue mb-3">
            Traveler’s Reviews
          </h2>

          <button className="text-primary font-medium hover:underline">
            Read more reviews
          </button>
        </div>

        {/* Carousel Review */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevReview}
            className="absolute left-0 md:-left-12 bg-white shadow rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-nav-blue" />
          </button>

          {/* Single Review Card */}
          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow w-full md:w-2/3">
            {/* Header */}
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {reviews[current].avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-nav-blue">
                  {reviews[current].name}
                </h4>
                <p className="text-sm text-nav-blue/70">
                  {reviews[current].location}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-button text-yellow-button"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-nav-blue/80 leading-relaxed text-sm">
              {reviews[current].review}
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={nextReview}
            className="absolute right-0 md:-right-12 bg-white shadow rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-nav-blue" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-5 gap-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TirupatiReviewsSection;
