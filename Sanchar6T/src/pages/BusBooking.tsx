// import { useEffect, useState } from "react";
// import SearchForm from "@/components/booking/SearchForm";
// import DatePicker from "@/components/booking/DatePicker";
// import TimelineHeader from "@/components/booking/TimelineHeader";
// import BusListing from "@/components/booking/BusListing";
// import BookingLabel from "@/components/booking/BookingLabel";
// import StickyForm from "@/components/booking/StickyForm"; // 👈 import StickyForm
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const BusBooking = () => {
//   // Keep your existing hardcoded data as fallback
//   const hardcodedBusData = [
//     {
//       busNumber: "Bng to Tpt Extra",
//       operator: "Via",
//       busType: "Leyland Luxura Sleeper, AC,",
//       departureTime: "08:00 PM",
//       arrivalTime: "03:00 AM",
//       duration: "07:00 Hrs", // ✅ hardcoded
//       date: "Thu, 04 Sep",
//       price: "₹ 1364/-",
//       seatsAvailable: 0,
//       totalSeats: 36,
//       amenities: ["AC", "Video"],
//       isVia: true,
//       viaStops: 1,
//     },
//     // ... rest of your existing hardcoded buses
//   ];

//   const [busData, setBusData] = useState(hardcodedBusData);
//   const [loading, setLoading] = useState(true);

//   // ✅ Utility function to calculate duration
//   const calculateDuration = (departure: string, arrival: string) => {
//     const dep = new Date(departure);
//     const arr = new Date(arrival);

//     if (isNaN(dep.getTime()) || isNaN(arr.getTime())) return "—";

//     let diffMs = arr.getTime() - dep.getTime();

//     // If arrival is on next day (after midnight)
//     if (diffMs < 0) {
//       diffMs += 24 * 60 * 60 * 1000;
//     }

//     const hours = Math.floor(diffMs / (1000 * 60 * 60));
//     const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")} Hrs`;
//   };

//   useEffect(() => {
//     const fetchBusData = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/bus-details"); // your Node.js API
//         const data = await res.json();

//         // Map DB data to the structure your BusListing component expects
//         const mappedData = data.map((bus: any) => {
//           const depTime = new Date(bus.DepartureTime);
//           const arrTime = new Date(bus.Arrivaltime);

//           return {
//             packageId: bus.PackageID,
//             busNumber: bus.PackageName,
//             operator: bus.OperatorID,
//             busType: bus.BusType,
//             departureTime: depTime.toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             arrivalTime: arrTime.toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             duration: calculateDuration(bus.DepartureTime, bus.Arrivaltime), // ✅ Auto duration
//             date: depTime.toLocaleDateString(),
//             price: `₹ ${bus.WkEndSeatPrice}/-`,
//             seatsAvailable: bus.BusSeats - (bus.FilledSeats || 0), // adjust if you have booked seats info
//             totalSeats: bus.BusSeats,
//             amenities: bus.amenities || [], // ✅ use backend amenities array safely
//             hasInfo: true,
//             isVia: bus.ViaStops > 0,
//             viaStops: bus.ViaStops || 0,
//             boardingPoints: bus.BoardingPoints?.split(",") || [],
//           };
//         });

//         setBusData(mappedData);
//         setLoading(false);
//         console.log("Bus data from API:", mappedData); // log values in console
//       } catch (err) {
//         console.error("Error fetching bus data:", err);
//         setLoading(false);
//       }
//     };

//     fetchBusData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] relative">
//       {/* Top search form */}
//       <Header />
//       <SearchForm />

//       {/* Date picker */}
//       <DatePicker />

//       {/* Timeline */}
//       <TimelineHeader />



//       {/* Bus listings */}
//       <div className="bg-[#ffffff]">
//         {loading
//           ? hardcodedBusData.map((bus, index) => (
//               <BusListing key={index} {...bus} />
//             ))
//           : busData.map((bus, index) => <BusListing key={index} {...bus} />)}
//       </div>

//       {/* Footer label */}
//       <div className="bg-[#106f94] text-white text-center py-4 text-sm font-medium">
//         <BookingLabel />

//       </div>
//       {/* added horizontal line below */}
// <div className="w-32 h-[2px] bg-white mx-auto mt-2 rounded-full"></div>
//       {/* Sticky form button + slide panel */}
//       <StickyForm /> 
//       <Footer />
//     </div>
//   );
// };

// export default BusBooking;
// the above code is fine only added sidebar thats it


// import { useEffect, useState } from "react";
// import SearchForm from "@/components/booking/SearchForm";
// import DatePicker from "@/components/booking/DatePicker";
// import BusListing from "@/components/booking/BusListing";
// import Sidebar from "@/components/sidebar/Sidebar";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import { Loader2 } from "lucide-react";
// import { useSearchParams } from "react-router-dom";
// import { useSchedulesStore } from "@/states/store";
// import { convertToBusListingProps } from "@/lib/convertData.util";

// const BusBooking = () => {
//   const { setSchedules, reset } = useSchedulesStore()
//   const [searchParams] = useSearchParams();

//   const from = searchParams.get("from");
//   const to = searchParams.get("to");
//   const dateParam = searchParams.get("date"); // e.g., "2025-11-27"

//   const originId = from ? Number(from) : null;
//   const destinationId = to ? Number(to) : null;

//   const [travelDate, setTravelDate] = useState<Date>(() => {
//     // Initial state: parse dateParam or default to today
//     if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
//       const parsed = new Date(dateParam);
//       if (!isNaN(parsed.getTime())) {
//         return parsed;
//       }
//     }
//     return new Date();
//   });

//   // Update travelDate when URL date changes (e.g., back/forward or new search)
//   useEffect(() => {
//     if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
//       const parsed = new Date(dateParam);
//       if (!isNaN(parsed.getTime())) {
//         setTravelDate(parsed);
//       }
//     }
//   }, [dateParam]);

//   // Format for API: "2025-11-27"
//   const travelDateStr = travelDate.toISOString().split("T")[0];

//   const { data: schedules, isLoading, refetch } = useQuery({
//     queryKey: [
//       "schedules",
//       originId,
//       destinationId,
//       travelDateStr,
//       Object.fromEntries(searchParams) // ← THIS IS THE MAGIC
//     ],
//     queryFn: () =>
//       BitlaRepository.getSchedules(
//         originId!,
//         destinationId!,
//         travelDateStr,
//         Object.fromEntries(searchParams) // ← send as plain object
//       ),
//     enabled: !!originId && !!destinationId && originId > 0 && destinationId > 0,
//     staleTime: 1 * 60 * 1000,     // optional: keep cache 5 mins
//   });

//   useEffect(() => {
//     console.log("Search params changed:", searchParams);
//   }, [searchParams])

//   useEffect(() => {
//     if (schedules?.data?.data.length > 0) {
//       console.log(schedules.data.data)
//       setSchedules(schedules.data.data)
//     } else {
//       reset()
//     }

//   }, [schedules])


//   return (
//     <div className="min-h-screen bg-[#f5f5f5] relative">
//       <SearchForm />
//       <div className="max-w-7xl mx-auto flex gap-6 mt-4 flex justify-center">
//       {/* <div className="max-w-7xl w-[75%] mx-auto flex gap-6 mt-4 justify-center"> */}
//         <div className="max-w-2/6 min-w-[300px]">
//           <Sidebar />
//         </div>
//         <div className="flex-2 flex flex-col gap-4 w-full mb-6">
//           <DatePicker selectedDate={travelDate} setSelectedDate={setTravelDate} />

//           {isLoading ? (
//             <div className="flex justify-center py-10">
//               <Loader2 className="w-8 h-8 animate-spin" />
//             </div>
//           ) : schedules?.data?.data?.length ? (
//             schedules.data.data.map((bus: any) => (
//               <BusListing key={bus.id} {...convertToBusListingProps(bus)} />
//             ))
//           ) : (
//             <div className="text-center py-10 text-gray-600">
//               No buses found for this route and date.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBooking;
import { useEffect, useState } from "react";
import SearchForm from "@/components/booking/SearchForm";
import DatePicker from "@/components/booking/DatePicker";
import BusListing from "@/components/booking/BusListing";
import Sidebar from "@/components/sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import BitlaRepository from "@/repositories/bitla.repository";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useSchedulesStore } from "@/states/store";
import { convertToBusListingProps } from "@/lib/convertData.util";

const BusBooking = () => {
  const { setSchedules, reset } = useSchedulesStore();
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dateParam = searchParams.get("date");

  const originId = from ? Number(from) : null;
  const destinationId = to ? Number(to) : null;

  const [travelDate, setTravelDate] = useState<Date>(() => {
    if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      const parsed = new Date(dateParam);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return new Date();
  });

  useEffect(() => {
    if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      const parsed = new Date(dateParam);
      if (!isNaN(parsed.getTime())) setTravelDate(parsed);
    }
  }, [dateParam]);

  const travelDateStr = travelDate.toISOString().split("T")[0];

  const { data: schedules, isLoading } = useQuery({
    queryKey: [
      "schedules",
      originId,
      destinationId,
      travelDateStr,
      Object.fromEntries(searchParams),
    ],
    queryFn: () =>
      BitlaRepository.getSchedules(
        originId!,
        destinationId!,
        travelDateStr,
        Object.fromEntries(searchParams)
      ),
    enabled: !!originId && !!destinationId && originId > 0 && destinationId > 0,
  });

  useEffect(() => {
    if (schedules?.data?.data?.length > 0) {
      setSchedules(schedules.data.data);
    } else {
      reset();
    }
  }, [schedules]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5]">
      <SearchForm />

      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 px-3 md:flex-row md:gap-6 md:px-4 xl:px-0">
        
        {/* SIDEBAR */}
<div className="w-full shrink-0 bg-[#facc16] md:w-[280px] lg:w-[300px]">
            <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 pb-6">

          <div className="w-full min-w-0">
            <DatePicker
              selectedDate={travelDate}
              setSelectedDate={setTravelDate}
            />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-4">
            {isLoading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : schedules?.data?.data?.length ? (
              schedules.data.data.map((bus: any) => (
                <BusListing
                  key={bus.id}
                  {...convertToBusListingProps(bus)}
                />
              ))
            ) : (
              <div className="rounded-xl bg-white py-10 text-center text-gray-600">
                No buses found for this route and date.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;