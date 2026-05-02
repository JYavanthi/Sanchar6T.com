// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface DatePickerProps {
//   selectedDate: Date;
//   setSelectedDate: (date: Date) => void;
// }

// const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, setSelectedDate }) => {
//   const navigate = useNavigate();
//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // Normalize to midnight

//   // Find the start of the week that contains the selectedDate
//   const getWeekStart = (date: Date): Date => {
//     const d = new Date(date);
//     d.setHours(0, 0, 0, 0);
//     const day = d.getDay();
//     d.setDate(d.getDate() - day); // Go to Sunday
//     return d;
//   };

//   const [weekStart, setWeekStart] = useState<Date>(() => getWeekStart(selectedDate));

//   // Generate 7 days for the current week
//   const weekDates = Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(weekStart);
//     d.setDate(weekStart.getDate() + i);
//     return {
//       day: d.toLocaleDateString("en-US", { weekday: "short" }),
//       date: d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
//       fullDate: new Date(d),
//       isToday: d.toDateString() === today.toDateString(),
//       isSelected: d.toDateString() === selectedDate.toDateString(),
//       isPast: d < today,
//     };
//   });

//   // Sync week when selectedDate changes externally (e.g., from URL or SearchForm)
//   useEffect(() => {
//     setWeekStart(getWeekStart(selectedDate));
//   }, [selectedDate]);

//   const handlePrevWeek = () => {
//     const prev = new Date(weekStart);
//     prev.setDate(prev.getDate() - 7);
//     if (prev >= today || prev.toDateString() === today.toDateString()) {
//       setWeekStart(prev);
//     }
//   };

//   const handleNextWeek = () => {
//     const next = new Date(weekStart);
//     next.setDate(next.getDate() + 7);
//     setWeekStart(next);
//   };

//   const handleDateClick = (fullDate: Date) => {
//     if (fullDate < today) return; // Disable past dates
//     setSelectedDate(fullDate);
//     // Update URL so BusBooking refetches buses
//     const params = new URLSearchParams(window.location.search);
//     params.set("date", fullDate.toLocaleDateString("en-CA"));
//     navigate(`?${params.toString()}`, { replace: true });
//   };

//   return (
//     <div className="border bg-white">
//       <div className="max-w-6xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Previous Week */}
//           <ChevronLeft
//             className={`w-6 h-6 cursor-pointer transition-colors ${weekStart <= today
//               ? "text-gray-300 cursor-not-allowed"
//               : "text-gray-600 hover:text-gray-900"
//               }`}
//             onClick={handlePrevWeek}
//           />

//           {/* 7 Days */}
//           <div className="flex gap-1">
//             {weekDates.map((d) => (
//               <button
//                 key={d.fullDate.toISOString()}
//                 onClick={() => handleDateClick(d.fullDate)}
//                 disabled={d.isPast}
//                 className={`
//                   px-4 py-2 text-center rounded transition-all
//                   ${d.isSelected
//                     ? "bg-[#0b4d71] text-white font-medium"
//                     : d.isPast
//                       ? "text-gray-400 cursor-not-allowed"
//                       : d.isToday
//                         ? "bg-blue-50 text-blue-700 border border-blue-300"
//                         : "text-gray-700 hover:bg-gray-100"
//                   }
//                 `}
//               >
//                 <div className="text-xs font-medium">{d.day}</div>
//                 <div className="text-sm">{d.date}</div>
//               </button>
//             ))}
//           </div>

//           {/* Next Week */}
//           <ChevronRight
//             className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
//             onClick={handleNextWeek}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DatePicker;

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
//
//
// const DatePicker = ({ selectedDate, setSelectedDate }) => {
//   const today = new Date();
//
//   // Generate 7 days starting from startDate
//   const getWeekDates = (startDate: Date, selectedDate: Date) => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const dates = [];
//
//     for (let i = 0; i < 7; i++) {
//       const d = new Date(startDate);
//       d.setDate(startDate.getDate() + i);
//
//       dates.push({
//         day: days[d.getDay()],
//         date: d.toLocaleDateString("en-GB", {
//           day: "2-digit",
//           month: "short",
//         }), // e.g. 08-Sep
//         active: d.toDateString() === selectedDate.toDateString(), // highlight selected
//         fullDate: d,
//       });
//     }
//     return dates;
//   };
//
//   const [startDate, setStartDate] = useState(today);
//   const [dates, setDates] = useState(getWeekDates(today, today));
//
//   // Handle navigation
//   const handlePrev = () => {
//     // Block going before today
//     if (startDate <= today) return;
//
//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() - 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };
//
//   const handleNext = () => {
//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() + 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };
//
//   // Handle selecting a date
//   const handleSelectDate = (dateObj: any) => {
//     setSelectedDate(dateObj.fullDate);
//     setDates(getWeekDates(startDate, dateObj.fullDate));
//   };
//
//   return (
//     <div className="bg-white border-b border-gray-300">
//       <div className="max-w-6xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Left arrow */}
//           <ChevronLeft
//             className={`w-6 h-6 cursor-pointer ${startDate <= today ? "text-gray-300" : "text-gray-500"
//               }`}
//             onClick={handlePrev}
//           />
//
//           {/* Dates */}
//           <div className="flex gap-1">
//             {dates.map((date, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleSelectDate(date)}
//                 className={`px-4 py-2 text-center cursor-pointer rounded ${date.active
//                     ? "bg-[#0b4d71] text-white"
//                     : "text-[#555555] hover:bg-[#f2f2f2]"
//                   }`}
//               >
//                 <div className="text-sm font-medium">{date.day}</div>
//                 <div className="text-sm">{date.date}</div>
//               </div>
//             ))}
//           </div>
//
//           {/* Right arrow */}
//           <ChevronRight
//             className="w-6 h-6 text-gray-500 cursor-pointer"
//             onClick={handleNext}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default DatePicker;
//below code is with offers section and with more elaborated structure

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const DatePicker = () => {
//   const today = new Date();

//   // Generate 7 days starting from startDate
//   const getWeekDates = (startDate: Date, selectedDate: Date) => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const dates = [];

//     for (let i = 0; i < 7; i++) {
//       const d = new Date(startDate);
//       d.setDate(startDate.getDate() + i);

//       dates.push({
//         day: days[d.getDay()],
//         date: d.toLocaleDateString("en-GB", {
//           day: "2-digit",
//           month: "short",
//         }),
//         active: d.toDateString() === selectedDate.toDateString(),
//         fullDate: d,
//       });
//     }
//     return dates;
//   };

//   const [startDate, setStartDate] = useState(today);
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [dates, setDates] = useState(getWeekDates(today, today));

//   const handlePrev = () => {
//     if (startDate <= today) return;

//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() - 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };

//   const handleNext = () => {
//     const newStart = new Date(startDate);
//     newStart.setDate(newStart.getDate() + 7);
//     setStartDate(newStart);
//     setDates(getWeekDates(newStart, selectedDate));
//   };

//   const handleSelectDate = (dateObj: any) => {
//     setSelectedDate(dateObj.fullDate);
//     setDates(getWeekDates(startDate, dateObj.fullDate));
//   };

//   return (
//     <div className="w-full bg-[#f9f9f9] font-sans text-gray-800">
//       {/* Search Header */}
//       <div className="max-w-7xl mx-auto bg-white shadow p-4 rounded-md flex items-center space-x-2 mt-4">
//         <div className="flex-1">
//           <label className="text-xs text-gray-500">TO</label>
//           <div className="text-lg font-semibold">Tirupati, Andhra Pradesh</div>
//         </div>
//         <div className="flex-1">
//           <label className="text-xs text-gray-500">DEPART</label>
//           <div className="text-lg font-semibold">
//             {selectedDate.toLocaleDateString("en-GB", {
//               weekday: "short",
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             })}
//           </div>
//         </div>
//         <button className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold">
//           SEARCH
//         </button>
//       </div>

//       {/* Title */}
//       <div className="max-w-7xl mx-auto mt-4 text-lg font-semibold">
//         Bangalore, Karnataka to Tirupati, Andhra Pradesh Bus
//       </div>

//       {/* Week Date Picker */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-md shadow mt-3 p-2">
//         <ChevronLeft
//           className={`w-6 h-6 cursor-pointer ${
//             startDate <= today ? "text-gray-300" : "text-gray-500"
//           }`}
//           onClick={handlePrev}
//         />

//         {/* Spread dates evenly */}
//         <div className="flex flex-1 justify-between px-2">
//           {dates.map((date, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelectDate(date)}
//               className={`px-3 py-2 text-center cursor-pointer rounded ${
//                 date.active
//                   ? "bg-[#0b4d71] text-white"
//                   : "text-[#555555] hover:bg-[#f2f2f2]"
//               }`}
//             >
//               <div className="text-sm font-medium">{date.day}</div>
//               <div className="text-sm">{date.date}</div>
//             </div>
//           ))}
//         </div>

//         <ChevronRight
//           className="w-6 h-6 text-gray-500 cursor-pointer"
//           onClick={handleNext}
//         />
//       </div>

//       {/* Offers Row */}
//       <div className="max-w-7xl mx-auto flex space-x-2 mt-3">
//         {/* Top Rated Buses */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(210, 251, 236) 0%, rgb(182, 249, 248) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">Top Rated Buses</div>
//             <div className="text-xs text-gray-500">
//               Explore our highest rated buses on this route
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(32, 161, 115) 0%, rgb(27, 132, 131) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Ftop_rated_us.webp&w=128&q=75"
//             alt="Top Rated"
//             className="h-16 object-contain"
//           />
//         </div>

//         {/* MyDeals */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(226, 238, 255) 0%, rgb(195, 245, 255) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">MyDeals</div>
//             <div className="text-xs text-gray-500">
//               Upto ₹100 OFF on select buses
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fmmt_deals_us.webp&w=128&q=75"
//             alt="MyDeals"
//             className="h-16 object-contain"
//           />
//         </div>

//         {/* Primo Buses */}
//         <div
//           className="flex-1 p-3 rounded-lg flex items-center justify-between"
//           style={{
//             background:
//               "linear-gradient(to right, rgb(213, 208, 255) 0%, rgb(255, 224, 252) 100%)",
//           }}
//         >
//           <div>
//             <div className="font-semibold text-sm">Primo Buses</div>
//             <div className="text-xs text-gray-500">
//               Travel with best amenities & operators
//             </div>
//             <button
//               className="text-white font-semibold text-sm mt-1 px-3 py-1 rounded"
//               style={{
//                 background:
//                   "linear-gradient(to right, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
//               }}
//             >
//               See Buses →
//             </button>
//           </div>
//           <img
//             src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fprimo_us.webp&w=128&q=75"
//             alt="Primo"
//             className="h-16 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DatePicker;


import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleDays = useMemo(() => {
    if (screenWidth <= 420) return 3;
    if (screenWidth <= 768) return 4;
    if (screenWidth <= 1024) return 5;
    return 7;
  }, [screenWidth]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [startDate, setStartDate] = useState<Date>(() => {
    const d = new Date(selectedDate);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  useEffect(() => {
    const d = new Date(selectedDate);
    d.setHours(0, 0, 0, 0);
    setStartDate(d);
  }, [selectedDate]);

  const dates = Array.from({ length: visibleDays }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      }),
      fullDate: new Date(d),
      isToday: d.toDateString() === today.toDateString(),
      isSelected: d.toDateString() === selectedDate.toDateString(),
      isPast: d < today,
    };
  });

  const handlePrev = () => {
    const prev = new Date(startDate);
    prev.setDate(prev.getDate() - visibleDays);

    if (prev >= today || prev.toDateString() === today.toDateString()) {
      setStartDate(prev);
    } else {
      setStartDate(today);
    }
  };

  const handleNext = () => {
    const next = new Date(startDate);
    next.setDate(next.getDate() + visibleDays);
    setStartDate(next);
  };

  const handleDateClick = (fullDate: Date) => {
    if (fullDate < today) return;

    setSelectedDate(fullDate);

    const params = new URLSearchParams(window.location.search);
    params.set("date", fullDate.toLocaleDateString("en-CA"));
    navigate(`?${params.toString()}`, { replace: true });
  };

return (
  <div className="w-full max-w-full overflow-hidden rounded-xl border bg-white">
    <div className="w-full px-2 py-3 sm:px-3 md:px-4">
      <div className="flex w-full min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={startDate <= today}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border disabled:opacity-40 sm:h-9 sm:w-9"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          className="grid min-w-0 flex-1 gap-1"
          style={{
            gridTemplateColumns: `repeat(${visibleDays}, minmax(0, 1fr))`,
          }}
        >
          {dates.map((d) => (
            <button
              key={d.fullDate.toISOString()}
              onClick={() => handleDateClick(d.fullDate)}
              disabled={d.isPast}
              className={`
                min-w-0 overflow-hidden rounded-lg px-1 py-2 text-center transition-all
                ${
                  d.isSelected
                    ? "bg-[#0b4d71] text-white font-medium"
                    : d.isPast
                    ? "text-gray-400 cursor-not-allowed"
                    : d.isToday
                    ? "bg-blue-50 text-blue-700 border border-blue-300"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <div className="truncate text-[11px] font-medium sm:text-xs">
                {d.day}
              </div>
              <div className="truncate text-xs leading-5 sm:text-sm">
                {d.date}
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-9 sm:w-9"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);
};

export default DatePicker;