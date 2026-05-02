import { Star, ChevronDown } from "lucide-react";

interface BusListingProps {
  operator: string;
  busType: string;
  departTime: string;
  departDate: string;
  arrivalTime: string;
  arrivalDate: string;
  duration: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  seatsLeft: number;
  amenities?: string[];
  isAC?: boolean;
  isPrime?: boolean;
  hasOffer?: boolean;
  operatorLogo?: string;
}

const BusListingCard = ({
  operator,
  busType,
  departTime,
  departDate,
  arrivalTime,
  arrivalDate,
  duration,
  price,
  originalPrice,
  rating,
  reviews,
  seatsLeft,
  amenities = [],
  isAC = true,
  isPrime = false,
  hasOffer = false,
  operatorLogo
}: BusListingProps) => {
  return (
    <div className="bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
      {/* Operator Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {operatorLogo && (
              <div className="w-10 h-10 rounded-full bg-gray-light flex items-center justify-center">
                <img src={operatorLogo} alt={operator} className="w-8 h-8 rounded-full" />
              </div>
            )}
            <div>
              <h3 className="font-medium text-base">{operator}</h3>
              <div className="text-sm text-gray-text">{busType}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">₹{price}</div>
            {originalPrice && (
              <div className="text-sm text-gray-text line-through">₹{originalPrice}</div>
            )}
            <button className="text-blue-primary text-xs flex items-center">
              View buses
              <ChevronDown className="h-3 w-3 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bus Details */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Timing */}
          <div className="flex items-center gap-8">
            <div>
              <div className="text-lg font-bold">{departTime}</div>
              <div className="text-sm text-gray-text">{departDate}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-text">{duration}</div>
              <div className="border-t border-dashed border-gray-medium w-16 my-1"></div>
            </div>
            <div>
              <div className="text-lg font-bold">{arrivalTime}</div>
              <div className="text-sm text-gray-text">{arrivalDate}</div>
            </div>
          </div>

          {/* Rating and Seats */}
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-rating text-rating" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-gray-text">{reviews} Reviews</span>
            </div>
            <div className="text-sm text-gray-text mb-2">{seatsLeft} Seats Left</div>
            <button className="bg-blue-primary hover:bg-blue-dark text-white px-6 py-2 font-medium">
              SELECT SEATS
            </button>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            {isAC && <span className="px-2 py-1 border rounded text-xs">On Time</span>}
            {amenities.includes("wifi") && (
              <span className="px-2 py-1 border rounded text-xs">Free Snacks</span>
            )}
            {isPrime && (
              <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs">Prime</span>
            )}
          </div>

          <div className="flex items-center gap-4 ml-auto text-sm text-gray-text">
            <button className="hover:text-blue-primary">Photos</button>
            <button className="hover:text-blue-primary">Amenities</button>
            <button className="hover:text-blue-primary">Pickup & Drop Points</button>
            <button className="hover:text-blue-primary">Ratings & Reviews</button>
            <button className="hover:text-blue-primary">Policies</button>
          </div>
        </div>
      </div>

      {/* Offer Banner */}
      {hasOffer && (
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-b-lg">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded p-1">
              <span className="text-pink-500 text-xs font-bold">🎁</span>
            </div>
            <div>
              <div className="text-sm font-medium">Special offers just for you!</div>
              <div className="text-xs">Up to 10% (Instant Discount and Mydeal savings)</div>
            </div>
            <button className="ml-auto px-2 py-1 text-xs bg-white text-purple-600 border border-white rounded hover:bg-gray-100">
              TAP TO COPY
            </button>
            <div className="text-xs">MEGABUSSEO</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusListingCard;
