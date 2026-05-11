


// import { Snowflake, BedDouble, Armchair } from "lucide-react";
// import { useSearchParams } from "react-router-dom";

// const Sidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const acParam = searchParams.get("ac");
//   const currentAC =
//     acParam === "true" ? "ac" : acParam === "false" ? "non-ac" : "";

//   const currentSeat = searchParams.get("seatType");

//   const handleAC = (value: "ac" | "non-ac") => {
//     const newParams = new URLSearchParams(searchParams);

//     if (currentAC === value) {
//       newParams.delete("ac");
//     } else {
//       newParams.set("ac", value === "ac" ? "true" : "false");
//     }

//     setSearchParams(newParams, { replace: true });
//   };

//   const handleSeat = (type: "sleeper" | "seater") => {
//     const newParams = new URLSearchParams(searchParams);

//     if (currentSeat === type) {
//       newParams.delete("seatType");
//     } else {
//       newParams.set("seatType", type);
//     }

//     setSearchParams(newParams, { replace: true });
//   };

//   return (
// <div className="mt-[10px] w-full rounded-xl bg-[#e8e3d3] p-3 md:w-[300px] md:rounded-none md:p-0">      {/* <div className="mb-4 rounded-md bg-[#0b1a4a] p-4 text-white shadow-sm md:mb-5">
//         <h3 className="mb-3 text-base font-semibold md:text-lg">
//           AI Powered Travel Assistant
//         </h3>

//         <div className="flex items-center rounded-full bg-white px-3 py-2">
//           <input
//             placeholder="TRY ASKING..."
//             className="flex-1 text-sm text-black outline-none placeholder:text-gray-400"
//           />
//         </div>
//       </div> */}

// <div className="grid w-full grid-cols-2 gap-3 p-[10px] md:w-[280px]">
//           <div
//           onClick={() => handleAC("ac")}
//           className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
//             currentAC === "ac"
//               ? "border-black bg-white shadow-sm"
//               : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
//           }`}
//         >
//           <Snowflake className="h-5 w-5" />
//           <span className="font-medium">AC</span>
//         </div>

//         <div
//           onClick={() => handleAC("non-ac")}
//           className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
//             currentAC === "non-ac"
//               ? "border-black bg-white shadow-sm"
//               : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
//           }`}
//         >
//           <Snowflake className="h-5 w-5 rotate-45" />
//           <span className="font-medium">NON-AC</span>
//         </div>

//         <div
//           onClick={() => handleSeat("sleeper")}
//           className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
//             currentSeat === "sleeper"
//               ? "border-black bg-white shadow-sm"
//               : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
//           }`}
//         >
//           <BedDouble className="h-5 w-5" />
//           <span className="font-medium">Sleeper</span>
//         </div>

//         <div
//           onClick={() => handleSeat("seater")}
//           className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
//             currentSeat === "seater"
//               ? "border-black bg-white shadow-sm"
//               : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
//           }`}
//         >
//           <Armchair className="h-5 w-5" />
//           <span className="font-medium">Seater</span>
//         </div>
//       </div>

//       <div className="mt-4 rounded-xl bg-yellow-400 p-3 md:mt-5 md:rounded-none md:p-4">
//         <div className="grid grid-cols-2 gap-3 md:flex md:w-[190px] md:flex-col md:gap-7">
//           {[
//             "Discounts (30)",
//             "AC (15)",
//             "Single Seats (15)",
//             "Sleeper (115)",
//             "Women (115)",
//             "NON AC (55)",
//           ].map((label) => (
//             <button
//               key={label}
//               className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4"
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Snowflake, BedDouble, Armchair } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [counts, setCounts] = useState({
    totalBuses: 0,
    acCount: 0,
    nonAcCount: 0,
    sleeperCount: 0,
    seaterCount: 0,
  });

  const acParam = searchParams.get("ac");

  const currentAC =
    acParam === "true" ? "ac" : acParam === "false" ? "non-ac" : "";

  const currentSeat = searchParams.get("seatType");

  // FETCH COUNTS
  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const from = searchParams.get("from");
        const to = searchParams.get("to");
        const date = searchParams.get("date");

        if (!from || !to || !date) return;

        // IMPORTANT:
        // COUNTS SHOULD ALWAYS COME FROM ORIGINAL DATA
        // NOT FILTERED DATA

        const response = await fetch(
          `http://localhost:5000/api/bitla/schedules/${from}/${to}/${date}?from=${from}&to=${to}&date=${date}`
        );

        const result = await response.json();

        console.log("API RESULT", result);

        const buses = result.data || [];

        // TOTAL BUSES
        const totalBuses = buses.length;

        // AC COUNT
        const acCount = buses.filter(
          (bus: any) => bus.is_ac_bus === true
        ).length;

        // NON AC COUNT
        const nonAcCount = buses.filter(
          (bus: any) => bus.is_ac_bus === false
        ).length;

        // SLEEPER COUNT
        // Includes:
        // Sleeper
        // Sleeper/Seater
        // Bharath Benz Sleeper

        const sleeperCount = buses.filter((bus: any) => {
          const type = bus.bus_type?.toLowerCase() || "";

          return type.includes("sleeper");
        }).length;

        // SEATER COUNT
        const seaterCount = buses.filter((bus: any) => {
          const type = bus.bus_type?.toLowerCase() || "";

          return type.includes("seater");
        }).length;

        setCounts({
          totalBuses,
          acCount,
          nonAcCount,
          sleeperCount,
          seaterCount,
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchBusData();
  }, [searchParams]);

  // AC FILTER
  const handleAC = (value: "ac" | "non-ac") => {
    const newParams = new URLSearchParams(searchParams);

    if (currentAC === value) {
      newParams.delete("ac");
    } else {
      newParams.set("ac", value === "ac" ? "true" : "false");
    }

    setSearchParams(newParams, { replace: true });
  };

  // SEAT FILTER
  const handleSeat = (type: "sleeper" | "seater") => {
    const newParams = new URLSearchParams(searchParams);

    if (currentSeat === type) {
      newParams.delete("seatType");
    } else {
      newParams.set("seatType", type);
    }

    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className="mt-[10px] w-full rounded-xl bg-[#e8e3d3] p-3 md:w-[300px] md:rounded-none md:p-0">

      {/* TOP FILTERS */}

      <div className="grid w-full grid-cols-2 gap-3 p-[10px] md:w-[280px]">

        {/* AC */}
        <div
          onClick={() => handleAC("ac")}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
            currentAC === "ac"
              ? "border-black bg-white shadow-sm"
              : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
          }`}
        >
          <Snowflake className="h-5 w-5" />
          <span className="font-medium">AC</span>
        </div>

        {/* NON AC */}
        <div
          onClick={() => handleAC("non-ac")}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
            currentAC === "non-ac"
              ? "border-black bg-white shadow-sm"
              : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
          }`}
        >
          <Snowflake className="h-5 w-5 rotate-45" />
          <span className="font-medium">NON-AC</span>
        </div>

        {/* SLEEPER */}
        <div
          onClick={() => handleSeat("sleeper")}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
            currentSeat === "sleeper"
              ? "border-black bg-white shadow-sm"
              : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
          }`}
        >
          <BedDouble className="h-5 w-5" />
          <span className="font-medium">Sleeper</span>
        </div>

        {/* SEATER */}
        <div
          onClick={() => handleSeat("seater")}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
            currentSeat === "seater"
              ? "border-black bg-white shadow-sm"
              : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50"
          }`}
        >
          <Armchair className="h-5 w-5" />
          <span className="font-medium">Seater</span>
        </div>

      </div>

      {/* COUNTS */}

      <div className="mt-4 rounded-xl bg-yellow-400 p-3 md:mt-5 md:rounded-none md:p-4">

        <div className="grid grid-cols-2 gap-3 md:flex md:w-[190px] md:flex-col md:gap-7">

          {/* ALL */}
          <button className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4">
            All Buses ({counts.totalBuses})
          </button>

          {/* AC */}
          <button className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4">
            AC ({counts.acCount})
          </button>

          {/* NON AC */}
          <button className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4">
            NON AC ({counts.nonAcCount})
          </button>

          {/* SLEEPER */}
          <button className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4">
            Sleeper ({counts.sleeperCount})
          </button>

          {/* SEATER */}
          <button className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4">
            Seater ({counts.seaterCount})
          </button>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;