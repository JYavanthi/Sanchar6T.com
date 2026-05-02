



// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Users, ArrowUpDown, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // images
// import busImg from "@/assets/bus.png";
// import cabImg from "@/assets/car.png";
// import hotelImg from "@/assets/hotel.png";
// import offerImg from "@/assets/special-offers.png";
// import womenImg from "@/assets/women.png";

// const womenImages = [
//   "https://st.redbus.in/Images/INDOFFER/women/women1.svg",
//   "https://st.redbus.in/Images/INDOFFER/women/women2.svg",
//   "https://st.redbus.in/Images/INDOFFER/women/women3.svg",
// ];

// const BookingForm = () => {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState("BUSES");
//   const [womenOnly, setWomenOnly] = useState(false);

//   const [departure, setDeparture] = useState("");
//   const [destination, setDestination] = useState("");
//   const [leaving, setLeaving] = useState("2025-03-15");
//   const [passengers, setPassengers] = useState(1);

//   const [departureList, setDepartureList] = useState([]);
//   const [destinationList, setDestinationList] = useState([]);

//   const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
//   const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

//   const timeoutRef = useRef(null);




//   const fetchLocations = (query, type) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:5000/api/bitla/cities?search=${query}`
//         );

//         const data = await res.json();

//         // ✅ GET DATA
//         let list = (data.data || []).map((item) => ({
//           id: item.id,
//           name: item.name,
//         }));

//         // ✅ FILTER (IMPORTANT 🔥)
//         if (query) {
//           list = list.filter((item) =>
//             item.name.toLowerCase().includes(query.toLowerCase())
//           );
//         }

//         if (type === "departure") {
//           setDepartureList(list);
//           setShowDepartureDropdown(true);
//         } else {
//           setDestinationList(list);
//           setShowDestinationDropdown(true);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }, 300);
//   };

//   const loadAllCities = async (type) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/bitla/cities?search=`
//       );

//       const data = await res.json();

//       const list = (data.data || []).map((item) => ({
//         id: item.id,
//         name: item.name,
//       }));

//       if (type === "departure") {
//         setDepartureList(list);
//         setShowDepartureDropdown(true);
//       } else {
//         setDestinationList(list);
//         setShowDestinationDropdown(true);
//       }
//     } catch (err) {
//       console.log("LOAD ALL ERROR:", err);
//     }
//   };
//   // ✅ close dropdown
//   useEffect(() => {
//     const handleClick = () => {
//       setShowDepartureDropdown(false);
//       setShowDestinationDropdown(false);
//     };
//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, []);

//   const swapLocations = () => {
//     setDeparture(destination);
//     setDestination(departure);
//   };

//   const tabs = [
//     { id: "BUSES", img: busImg, label: "BUSES" },
//     { id: "CABS", img: cabImg, label: "CABS" },
//     { id: "HOTELS", img: hotelImg, label: "HOTELS" },
//     { id: "SPECIAL_OFFERS", img: offerImg, label: "SPECIAL OFFERS" },
//   ];

//   return (
//     <div className="relative -mt-20 z-10">
//       <div className="max-w-[1200px] mx-auto px-4">
//         <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">

//           {/* Tabs */}
//           <div className="flex justify-between border-b pb-2">
//             <div className="flex gap-3">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-4 py-2 ${activeTab === tab.id
//                     ? "text-blue-900 border-b-2 border-blue-900"
//                     : "text-gray-600"
//                     }`}
//                 >
//                   <img src={tab.img} className="w-5 h-5" />
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* Women toggle */}
//             <div className="flex items-center gap-2">
//               <img src={womenImg} className="w-5 h-5" />
//               <span className="text-blue-900 font-semibold">WOMEN</span>
//               <button
//                 onClick={() => setWomenOnly(!womenOnly)}
//                 className={`w-12 h-6 rounded-full ${womenOnly ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//               />
//             </div>
//           </div>

//           {/* Booking Row */}
//           <div className="flex gap-4 flex-wrap">

//             {/* ✅ DEPARTURE */}
//             <div className="relative">
//               <input
//                 value={departure}
//                 placeholder="Departure"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   loadAllCities("departure"); // ✅ LOAD ALL ON CLICK
//                 }}
//                 onChange={(e) => {
//                   setDeparture(e.target.value);
//                   fetchLocations(e.target.value, "departure");
//                 }}
//                 className="bg-gray-100 px-4 py-3 rounded-lg"
//               />

//               {showDepartureDropdown && (
//                 <div className="absolute bg-white shadow-lg w-full mt-1 rounded max-h-60 overflow-auto z-50">
//                   {departureList.length > 0 ? (
//                     departureList.map((item, i) => (
//                       <div
//                         key={i}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setDeparture(item.name);            // ✅ SET VALUE
//                           setShowDepartureDropdown(false);    // ✅ CLOSE DROPDOWN
//                         }}
//                         className="p-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         {item.name}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-2 text-gray-400">Type to search...</div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Swap */}
//             <button onClick={swapLocations}>
//               <ArrowUpDown />
//             </button>

//             {/* ✅ DESTINATION */}
//             <div className="relative">
//               <input
//                 value={destination}
//                 placeholder="Destination"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   loadAllCities("destination"); // ✅ SAME AS DEPARTURE
//                 }}
//                 onChange={(e) => {
//                   setDestination(e.target.value);
//                   fetchLocations(e.target.value, "destination");
//                 }}
//                 className="bg-gray-100 px-4 py-3 rounded-lg"
//               />

//               {showDestinationDropdown && (
//                 <div className="absolute bg-white shadow-lg w-full mt-1 rounded max-h-60 overflow-auto z-50">
//                   {destinationList.length > 0 ? (
//                     destinationList.map((item, i) => (
//                       <div
//                         key={i}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setDestination(item.name);
//                           setShowDestinationDropdown(false);
//                         }}
//                         className="p-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         {item.name}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-2 text-gray-400">Type to search...</div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Date */}
//             <input
//               type="date"
//               value={leaving}
//               onChange={(e) => setLeaving(e.target.value)}
//               className="bg-gray-100 px-4 py-3 rounded-lg"
//             />

//             {/* Passengers */}
//             <input
//               type="number"
//               min={1}
//               value={passengers}
//               onChange={(e) =>
//                 setPassengers(e.target.value ? Number(e.target.value) : 1)
//               }
//               className="bg-gray-100 px-4 py-3 rounded-lg w-24"
//             />

//             {/* Search */}
//             <Button
//               onClick={() =>
//                 navigate("/bus-booking", {
//                   state: { departure, destination, leaving, passengers },
//                 })
//               }
//             >
//               <Search />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;

import React, { useEffect, useState } from "react";
import { Users, ArrowUpDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Carousel images
const womenImages = [
  "https://st.redbus.in/Images/INDOFFER/women/women1.svg",
  "https://st.redbus.in/Images/INDOFFER/women/women2.svg",
  "https://st.redbus.in/Images/INDOFFER/women/women3.svg",
];

// Assets
import busImg from "@/assets/bus.png";
import cabImg from "@/assets/car.png";
import hotelImg from "@/assets/hotel.png";
import offerImg from "@/assets/special-offers.png";
import womenImg from "@/assets/women.png";

type TabId = "BUSES" | "CABS" | "HOTELS" | "SPECIAL_OFFERS";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState<TabId>("BUSES");
  const [womenOnly, setWomenOnly] = useState(false);

  const [departure, setDeparture] = useState("BENGALURU");
  const [destination, setDestination] = useState("TIRUPATI");
  const [leaving, setLeaving] = useState("2025-03-15");
  const [returning, setReturning] = useState("2025-03-15");
  const [passengers, setPassengers] = useState(1);

  const [showPopup, setShowPopup] = useState(false);
  const [current, setCurrent] = useState(0);

  const [showOffersPopup, setShowOffersPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showPopup) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % womenImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showPopup]);

  const tabs = [
    { id: "BUSES", img: busImg, label: "BUSES" },
    { id: "CABS", img: cabImg, label: "CABS" },
    { id: "HOTELS", img: hotelImg, label: "HOTELS" },
    { id: "SPECIAL_OFFERS", img: offerImg, label: "SPECIAL OFFERS" },
  ];

  const swapLocations = () => {
    setDeparture(destination);
    setDestination(departure);
  };

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);

    if (tabId === "CABS") navigate("/cab");
    else if (tabId === "HOTELS") navigate("/hotel-rooms");
    else if (tabId === "SPECIAL_OFFERS") setShowOffersPopup(true);
  };

  return (
    <div className="relative z-10 mt-[-80px] max-lg:mt-[-50px] max-md:mt-[-35px] ">
      <div className="mx-auto w-[95%] max-w-[1700px]">
        <div className="rounded-[24px] bg-white px-4 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:px-5 :px-8">
          {/* TOP BAR */}
          <div className="flex flex-col gap-6 border-b border-gray-300 pb-4 lg:flex-row xl:items-center xl:justify-between">
            {/* TABS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:flex xl:flex-wrap xl:items-center xl:gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id as TabId)}
                  className={`flex items-center justify-center gap-2 border-b-2 px-3 py-3 text-[14px] font-semibold sm:text-[15px] lg:justify-start lg:px-4 ${
                    activeTab === tab.id
                      ? "border-blue-900 text-blue-900"
                      : "border-transparent text-gray-500 hover:text-blue-900"
                  }`}
                >
                  <img src={tab.img} className="h-[26px] w-[26px] shrink-0" alt="" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* WOMEN TOGGLE */}
            <div className="flex items-center justify-end gap-2 xl:justify-start">
              <img src={womenImg} className="h-5 w-5 shrink-0" alt="" />
              <span className="text-[15px] font-bold text-blue-900 sm:text-[16px]">
                WOMEN
              </span>

              <button
                type="button"
                onClick={() => setWomenOnly(!womenOnly)}
                className={`relative h-6 w-12 shrink-0 rounded-full transition ${
                  womenOnly ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-[2px] h-5 w-5 rounded-full bg-white transition ${
                    womenOnly ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* FORM */}
          {activeTab === "BUSES" && (
           
            <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">

  {/* ROUTE */}
  <div className="flex w-full flex-col gap-3 rounded-[16px] bg-gray-100 px-4 py-4 md:flex-row md:items-center md:justify-between lg:flex-[1.4]">
    
    <div className="flex flex-1 flex-col text-center">
      <span className="text-sm text-gray-500">Departure</span>
      <input
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        className="w-full bg-transparent text-center text-lg font-bold text-blue-900 outline-none sm:text-xl"
      />
    </div>

    <button
      type="button"
      onClick={swapLocations}
      className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white md:mx-3"
    >
      <ArrowUpDown className="rotate-90" />
    </button>

    <div className="flex flex-1 flex-col text-center">
      <span className="text-sm text-gray-500">Destination</span>
      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full bg-transparent text-center text-lg font-bold text-blue-900 outline-none sm:text-xl"
      />
    </div>
  </div>

  {/* DATE */}
  <div className="flex w-full flex-col rounded-[16px] bg-gray-100 px-4 py-4 sm:flex-row lg:flex-[1.3]">
    
    <div className="flex flex-1 flex-col text-center sm:pr-4">
      <span className="text-sm text-gray-500">Leaving on</span>
      <input
        type="date"
        value={leaving}
        onChange={(e) => setLeaving(e.target.value)}
        className="bg-transparent text-center text-lg font-bold text-blue-900 outline-none sm:text-xl"
      />
    </div>

    <div className="my-3 h-px bg-gray-300 sm:my-0 sm:mx-1 sm:h-auto sm:w-px sm:bg-black"></div>

    <div className="flex flex-1 flex-col text-center sm:pl-4">
      <span className="text-sm text-gray-500">Returning on</span>
      <input
        type="date"
        value={returning}
        onChange={(e) => setReturning(e.target.value)}
        className="bg-transparent text-center text-lg font-bold text-blue-900 outline-none sm:text-xl"
      />
    </div>
  </div>

  {/* PASSENGERS + SEARCH */}
  <div className="flex w-full flex-col gap-4 sm:flex-row lg:flex-[0.6]">

    <div className="flex flex-1 items-center justify-center rounded-[16px] bg-gray-100 px-4 py-4">
      <Users className="mr-2 text-blue-900" />
      <div className="text-center">
        <span className="block text-sm text-gray-500">Passengers</span>
        <input
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value) || 1)}
          className="w-16 bg-transparent text-center text-lg font-bold text-blue-900 outline-none sm:text-xl"
        />
      </div>
    </div>

    <button
      type="button"
      onClick={() =>
        navigate("/bus-booking", {
          state: { departure, destination, leaving, returning, passengers, womenOnly },
        })
      }
      className="flex h-[62px] w-full items-center justify-center rounded-[16px] bg-blue-900 text-white hover:bg-blue-800 sm:w-[82px] lg:min-h-[84px]"
    >
      <Search size={30} />
    </button>

  </div>
</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;