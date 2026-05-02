import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DatePicker = () => {
  const today = new Date();

  const getWeekDates = (startDate: Date, selectedDate: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);

      dates.push({
        day: days[d.getDay()],
        date: d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }),
        active: d.toDateString() === selectedDate.toDateString(),
        fullDate: d,
      });
    }
    return dates;
  };

  const [startDate, setStartDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [dates, setDates] = useState(getWeekDates(today, today));

  const handlePrev = () => {
    if (startDate <= today) return;
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() - 7);
    setStartDate(newStart);
    setDates(getWeekDates(newStart, selectedDate));
  };

  const handleNext = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() + 7);
    setStartDate(newStart);
    setDates(getWeekDates(newStart, selectedDate));
  };

  const handleSelectDate = (dateObj: any) => {
    setSelectedDate(dateObj.fullDate);
    setDates(getWeekDates(startDate, dateObj.fullDate));
  };

  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between bg-white rounded-md shadow mt-3 p-2">
      <ChevronLeft
        className={`w-6 h-6 cursor-pointer ${
          startDate <= today ? "text-gray-300" : "text-gray-500"
        }`}
        onClick={handlePrev}
      />

      <div className="flex gap-2 overflow-x-auto">
        {dates.map((date, index) => (
          <div
            key={index}
            onClick={() => handleSelectDate(date)}
            className={`px-4 py-2 text-center cursor-pointer rounded ${
              date.active
                ? "bg-[#0b4d71] text-white"
                : "text-[#555555] hover:bg-[#f2f2f2]"
            }`}
          >
            <div className="text-lg font-semibold">{date.day}</div>
            <div className="text-lg">{date.date}</div>
          </div>
        ))}
      </div>

      <ChevronRight
        className="w-6 h-6 text-gray-500 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
};

const BusResults = () => {
  return (
    <div className="w-full bg-[#f9f9f9] font-sans text-gray-800">
      {/* Search Header */}
      <div className="max-w-6xl mx-auto bg-white shadow p-4 rounded-md flex items-center space-x-4 mt-4">
        <div className="flex-1">
          <label className="text-base text-gray-500">TO</label>
          <div className="text-2xl font-bold">Tirupati, Andhra Pradesh</div>
        </div>
        <div className="flex-1">
          <label className="text-base text-gray-500">DEPART</label>
          <div className="text-2xl font-bold">Sat, 27 Sep 2025</div>
        </div>
        <button className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg">
          SEARCH
        </button>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto mt-4 text-2xl font-bold">
        Bangalore, Karnataka to Tirupati, Andhra Pradesh Bus
      </div>

      {/* Updated Date Picker */}
      <DatePicker />

      {/* Offers Row */}
      <div className="max-w-6xl mx-auto flex space-x-4 mt-3">
        {/* First card */}
        <div
          className="flex-1 p-5 rounded-lg flex items-center justify-between"
          style={{
            background:
              "linear-gradient(to right, rgb(210, 251, 236) 0%, rgb(182, 249, 248) 100%)",
          }}
        >
          <div>
            <div className="font-bold text-xl">Top Rated Buses</div>
            <div className="text-lg text-gray-500">
              Explore our highest rated buses on this route
            </div>
            <button
              className="text-white font-bold text-lg mt-3 px-4 py-2 rounded"
              style={{
                background:
                  "linear-gradient(to right, rgb(32, 161, 115) 0%, rgb(27, 132, 131) 100%)",
              }}
            >
              See Buses →
            </button>
          </div>
          <img
            src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Ftop_rated_us.webp&w=128&q=75"
            alt="Top Rated"
            className="h-24 object-contain"
          />
        </div>

        {/* Second card */}
        <div
          className="flex-1 p-5 rounded-lg flex items-center justify-between"
          style={{
            background:
              "linear-gradient(to right, rgb(226, 238, 255) 0%, rgb(195, 245, 255) 100%)",
          }}
        >
          <div>
            <div className="font-bold text-xl">MyDeals</div>
            <div className="text-lg text-gray-500">
              Upto ₹100 OFF on select buses
            </div>
            <button
              className="text-white font-bold text-lg mt-3 px-4 py-2 rounded"
              style={{
                background:
                  "linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%)",
              }}
            >
              See Buses →
            </button>
          </div>
          <img
            src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fmmt_deals_us.webp&w=128&q=75"
            alt="MyDeals"
            className="h-24 object-contain"
          />
        </div>

        {/* Third card */}
        <div
          className="flex-1 p-5 rounded-lg flex items-center justify-between"
          style={{
            background:
              "linear-gradient(to right, rgb(213, 208, 255) 0%, rgb(255, 224, 252) 100%)",
          }}
        >
          <div>
            <div className="font-bold text-xl">Primo Buses</div>
            <div className="text-lg text-gray-500">
              Travel with best amenities & operators
            </div>
            <button
              className="text-white font-bold text-lg mt-3 px-4 py-2 rounded"
              style={{
                background:
                  "linear-gradient(to right, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
              }}
            >
              See Buses →
            </button>
          </div>
          <img
            src="https://www.makemytrip.com/bus-mmt-next/_next/image?url=https%3A%2F%2Fjsak.mmtcdn.com%2Fbus_cdn_rnw%2Fstatic%2Fimages%2FBus%2FfilterCarousel%2Fprimo_us.webp&w=128&q=75"
            alt="Primo"
            className="h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BusResults;
