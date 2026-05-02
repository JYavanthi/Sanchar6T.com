import BusListingCard from "./BusListingCard";

const BusListings = () => {
  const buses = [
    {
      operator: "APSRTC (Andhra Pradesh)",
      busType: "A/C Sleeper (2+1)",
      departTime: "00:10",
      departDate: "10 SEP",
      arrivalTime: "04:10",
      arrivalDate: "10 SEP",
      duration: "04h 00m",
      price: "667",
      originalPrice: "1112",
      rating: 4.1,
      reviews: 74,
      seatsLeft: 30,
      amenities: ["wifi", "charging"],
      isAC: true,
      hasOffer: false
    },
    {
      operator: "OurBus India Limited",
      busType: "Scania Multi-Axle AC Semi Sleeper (2+2)",
      departTime: "06:45",
      departDate: "10 SEP",
      arrivalTime: "14:30",
      arrivalDate: "10 SEP",
      duration: "05h 45m",
      price: "269",
      rating: 3.9,
      reviews: 135,
      seatsLeft: 38,
      amenities: ["wifi"],
      isAC: true,
      hasOffer: false
    },
    {
      operator: "FRESHBUS",
      busType: "Electric A/C Seater (2+2)",
      departTime: "07:05",
      departDate: "10 SEP",
      arrivalTime: "12:45",
      arrivalDate: "10 SEP",
      duration: "05h 40m",
      price: "314",
      originalPrice: "349",
      rating: 4.2,
      reviews: 234,
      seatsLeft: 38,
      amenities: ["wifi", "charging"],
      isAC: true,
      hasOffer: false
    },
    {
      operator: "HYBUS",
      busType: "Bharat Benz A/C Sleeper (2+1)",
      departTime: "14:00",
      departDate: "10 SEP",
      arrivalTime: "19:30",
      arrivalDate: "10 SEP",
      duration: "05h 30m",
      price: "494",
      originalPrice: "549",
      rating: 4.5,
      reviews: 135,
      seatsLeft: 22,
      amenities: ["wifi", "charging"],
      isAC: true,
      isPrime: true,
      hasOffer: false
    },
    {
      operator: "Rajesh Transports",
      busType: "Volvo 9600 Multi-Axle A/C Sleeper (2+1)",
      departTime: "16:00",
      departDate: "10 SEP",
      arrivalTime: "20:30",
      arrivalDate: "10 SEP",
      duration: "04h 30m",
      price: "1000",
      rating: 4.0,
      reviews: 7,
      seatsLeft: 30,
      amenities: ["wifi", "charging"],
      isAC: true,
      isPrime: true,
      hasOffer: true
    },
    {
      operator: "FRESHBUS",
      busType: "Electric A/C Seater (2+2)",
      departTime: "10:50",
      departDate: "10 SEP",
      arrivalTime: "16:30",
      arrivalDate: "10 SEP",
      duration: "05h 40m",
      price: "314",
      originalPrice: "349",
      rating: 4.2,
      reviews: 122,
      seatsLeft: 38,
      amenities: ["wifi", "charging"],
      isAC: true,
      hasOffer: false
    }
  ];

  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        {/* Concession Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <span className="text-sm text-green-700">
            Upto <strong>25%</strong> concession for senior citizens
          </span>
        </div>

        {buses.map((bus, index) => (
          <BusListingCard
            key={index}
            operator={bus.operator}
            busType={bus.busType}
            departTime={bus.departTime}
            departDate={bus.departDate}
            arrivalTime={bus.arrivalTime}
            arrivalDate={bus.arrivalDate}
            duration={bus.duration}
            price={bus.price}
            originalPrice={bus.originalPrice}
            rating={bus.rating}
            reviews={bus.reviews}
            seatsLeft={bus.seatsLeft}
            amenities={bus.amenities}
            isAC={bus.isAC}
            isPrime={bus.isPrime}
            hasOffer={bus.hasOffer}
          />
        ))}
      </div>
    </div>
  );
};

export default BusListings;