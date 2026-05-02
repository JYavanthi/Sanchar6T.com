import { ChevronLeft, ChevronRight } from "lucide-react";

const BusResultsHeader = () => {
  const dates = [
    { day: "09", date: "Sep", label: "Tue" },
    { day: "10", date: "Sep", label: "Wed", active: true },
    { day: "11", date: "Sep", label: "Thu" },
    { day: "12", date: "Sep", label: "Fri" },
    { day: "13", date: "Sep", label: "Sat" },
    { day: "14", date: "Sep", label: "Sun" },
    { day: "15", date: "Sep", label: "Mon" },
    { day: "16", date: "Sep", label: "Tue" },
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="p-4">
        <h1 className="text-xl font-medium mb-4">
          Bangalore, Karnataka to Tirupati, Andhra Pradesh Bus
        </h1>

        {/* Date Navigation */}
        <div className="flex items-center gap-1 mb-4">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {dates.map((date, index) => (
            <button
              key={index}
              className={`flex flex-col py-2 px-3 h-auto rounded ${
                date.active
                  ? "bg-blue-primary text-white hover:bg-blue-dark"
                  : "hover:bg-blue-light"
              }`}
            >
              <span className="text-xs">{date.day} {date.date}</span>
              <span className="text-xs">{date.label}</span>
            </button>
          ))}
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Promotional Banners */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-xs font-bold">★</span>
            </div>
            <div>
              <div className="text-sm font-medium">Top Rated Buses</div>
              <div className="text-xs text-gray-text">
                Explore our highest rated buses on this route
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs mt-1 h-6 px-2 rounded">
                See buses
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
              <span className="text-xs font-bold">%</span>
            </div>
            <div>
              <div className="text-sm font-medium">MyDeals</div>
              <div className="text-xs text-gray-text">
                Upto ₹100 OFF on select buses
              </div>
              <button className="bg-blue-400 hover:bg-blue-500 text-white text-xs mt-1 h-6 px-2 rounded">
                See buses
              </button>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-400 rounded flex items-center justify-center">
              <span className="text-xs font-bold">⚡</span>
            </div>
            <div>
              <div className="text-sm font-medium">Prime Buses</div>
              <div className="text-xs text-gray-text">
                Explore buses with best amenities & handpicked operators
              </div>
              <button className="bg-purple-400 hover:bg-purple-500 text-white text-xs mt-1 h-6 px-2 rounded">
                See buses
              </button>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-400 rounded flex items-center justify-center">
              <span className="text-xs font-bold">P</span>
            </div>
            <div>
              <div className="text-sm font-medium">Prime</div>
            </div>
          </div>
        </div>

        {/* Results count and sort */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">326 buses found</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-text">SORT BY</span>
            <div className="flex items-center gap-2">
              <button className="text-blue-primary text-sm font-medium hover:underline">
                Relevance
              </button>
              <button className="text-sm hover:underline">Rating</button>
              <button className="text-sm hover:underline">Price</button>
              <button className="text-sm hover:underline">Fastest</button>
              <button className="text-sm hover:underline">Departure</button>
              <button className="text-sm hover:underline">Arrival</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusResultsHeader;
