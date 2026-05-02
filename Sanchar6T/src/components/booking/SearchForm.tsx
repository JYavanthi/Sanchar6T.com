
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ArrowUpDown } from "lucide-react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import toOptions from "@/lib/toOptions.util";
// import { ComboboxDemo } from "../ui/combo-box";
// import { useSearchStore } from "@/states/store";
// import { useEffect, useMemo } from "react";
// import busImage from "@/assets/a-man-with-bus.png";  
// import cross from "@/assets/cross.png";  

// const SearchForm = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const { setOrigin, setDestination, setDate } = useSearchStore();

//   const urlFromId = searchParams.get("from") || "";
//   const urlToId = searchParams.get("to") || "";
//   const urlDate = searchParams.get("date") || "";

//   const today = new Date();
//   const todayStr = today.toLocaleDateString("en-CA");

//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);
//   const tomorrowStr = tomorrow.toLocaleDateString("en-CA");

//   const displayDate = urlDate || todayStr;

//   useEffect(() => {
//     if (!urlDate) {
//       const params = new URLSearchParams(searchParams);
//       params.set("date", todayStr);
//       navigate(`?${params.toString()}`, { replace: true });
//     }
//   }, []);

//   // API
//   const { data: originData } = useQuery({
//     queryKey: ["origin-cities"],
//     queryFn: () => BitlaRepository.getOriginCities(),
//   });

//   const { data: destData } = useQuery({
//     queryKey: ["destination-cities", urlFromId],
//     queryFn: () => BitlaRepository.getDestinationCities(Number(urlFromId)),
//     enabled: Boolean(urlFromId),
//   });

//   const originCities = originData?.data?.data ?? [];
//   const destinationCities = destData?.data?.data ?? [];

//   const originCity = useMemo(() => {
//     return originCities.find((c: any) => c.id === Number(urlFromId)) || null;
//   }, [urlFromId, originCities]);

//   const destCity = useMemo(() => {
//     return destinationCities.find((c: any) => c.id === Number(urlToId)) || null;
//   }, [urlToId, destinationCities]);

//   useEffect(() => {
//     setOrigin(originCity ? { id: originCity.id, name: originCity.name } : null);
//     setDestination(destCity ? { id: destCity.id, name: destCity.name } : null);
//     setDate(displayDate);
//   }, [urlFromId, urlToId, displayDate]);

//   const originOptions = toOptions(originCities, "id", "name").map((o) => ({
//     ...o,
//     value: String(o.value),
//   }));

//   const destinationOptions = toOptions(destinationCities, "id", "name").map((o) => ({
//     ...o,
//     value: String(o.value),
//   }));

//   const updateUrl = (updates: Record<string, string | null>) => {
//     const params = new URLSearchParams(searchParams);
//     Object.entries(updates).forEach(([k, v]) => {
//       if (v) params.set(k, v);
//       else params.delete(k);
//     });
//     navigate(`?${params.toString()}`, { replace: true });
//   };

//   const handleSearch = () => {
//     if (!urlFromId || !urlToId) return alert("Select cities");
//     navigate(`/bus-booking?from=${urlFromId}&to=${urlToId}&date=${displayDate}`);
//   };

// return (
//   <div>

//     {/* 🔵 HEADER */}
//     <div className="bg-[#273896] text-white py-10 text-center">

//       <h1 className="text-3xl font-semibold mb-6">
//         {originCity?.name || "Bangalore"} ➝ {destCity?.name || "Chennai"}
//       </h1>

//       <div className="flex justify-center items-center gap-5">

//         <div className="bg-yellow-400 text-black px-7 py-3 rounded-full font-bold text-lg">
//           123 Buses found
//         </div>

//         <div className="bg-gray-200 text-black px-7 py-3 rounded-full text-lg flex items-center gap-2">
//           Ratings ⭐
//         </div>

//         <div className="bg-gray-200 text-black px-7 py-3 rounded-full text-lg flex items-center gap-2">
//           Price ₹
//         </div>

//         <div className="bg-gray-200 text-black px-7 py-3 rounded-full text-lg">
//           Departure Time
//         </div>

//         <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full text-xl">
//           🔍
//         </div>

//       </div>
//     </div>

//     {/* ⚪ SEARCH BAR */}
// <div className="bg-gray-200 border-t p-[10px]">

//      <div className="max-w-7xl mx-auto bg-white border border-gray-400 flex items-center">

//         {/* FROM */}
//         <div className="flex items-center gap-3 px-6 py-4  w-[25%]">
//           <img src={busImage} className="w-10" />
//           <div>
//             <div className="text-gray-500 text-sm">From</div>
//             <ComboboxDemo
//               options={originOptions}
//               value={urlFromId}
//               onValueChange={(v) => updateUrl({ from: v, to: null })}
//               placeholder="Select"
//             />
//           </div>
//         </div>

//         {/* CENTER ICON */}
//         <div className="flex justify-center items-center w-[10%]">
//           <div className="bg-gray-200 p-3 rounded-full">
//             <img src={cross} className="w-8 h-8" />
//           </div>
//         </div>

//         {/* TO */}
//         <div className="flex items-center gap-3 px-6 py-4  w-[25%]">
//           <img src={busImage} className="w-10" />
//           <div>
//             <div className="text-gray-500 text-sm">To</div>
//             <ComboboxDemo
//               options={destinationOptions}
//               value={urlToId}
//               onValueChange={(v) => updateUrl({ to: v })}
//               placeholder="Select"
//             />
//           </div>
//         </div>

//         {/* DATE + BUTTONS */}
//         <div className="flex items-center gap-4 px-6 py-4 w-[40%]">

//           <div>
//             <div className="text-gray-500 text-sm">Date Of Journey</div>
//             <div className="text-lg font-semibold">{displayDate}</div>
//           </div>

//           <button
//             onClick={() => updateUrl({ date: todayStr })}
//             className="bg-yellow-400 px-5 py-2 rounded-full font-semibold"
//           >
//             Today
//           </button>

//           <button
//             onClick={() => updateUrl({ date: tomorrowStr })}
//             className="bg-yellow-400 px-5 py-2 rounded-full font-semibold"
//           >
//             Tomorrow
//           </button>

//           <Button
//             onClick={handleSearch}
//             className="bg-[#0b4d71] text-white px-6 py-2 rounded"
//           >
//             Search
//           </Button>

//         </div>

//       </div>
//     </div>

//   </div>
// );};

// export default SearchForm;

// import { Button } from "@/components/ui/button";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import toOptions from "@/lib/toOptions.util";
// import { ComboboxDemo } from "../ui/combo-box";
// import { useSearchStore } from "@/states/store";
// import { useEffect, useMemo } from "react";
// import { Search } from "lucide-react";
// import busImage from "@/assets/a-man-with-bus.png";
// import cross from "@/assets/cross.png";

// const SearchForm = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const { setOrigin, setDestination, setDate } = useSearchStore();

//   const urlFromId = searchParams.get("from") || "";
//   const urlToId = searchParams.get("to") || "";
//   const urlDate = searchParams.get("date") || "";

//   const today = new Date();
//   const todayStr = today.toLocaleDateString("en-CA");

//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);
//   const tomorrowStr = tomorrow.toLocaleDateString("en-CA");

//   const displayDate = urlDate || todayStr;

//   useEffect(() => {
//     if (!urlDate) {
//       const params = new URLSearchParams(searchParams);
//       params.set("date", todayStr);
//       navigate(`?${params.toString()}`, { replace: true });
//     }
//   }, []);

//   const { data: originData } = useQuery({
//     queryKey: ["origin-cities"],
//     queryFn: () => BitlaRepository.getOriginCities(),
//   });

//   const { data: destData } = useQuery({
//     queryKey: ["destination-cities", urlFromId],
//     queryFn: () => BitlaRepository.getDestinationCities(Number(urlFromId)),
//     enabled: Boolean(urlFromId),
//   });

//   const originCities = originData?.data?.data ?? [];
//   const destinationCities = destData?.data?.data ?? [];

//   const originCity = useMemo(() => {
//     return originCities.find((c: any) => c.id === Number(urlFromId)) || null;
//   }, [urlFromId, originCities]);

//   const destCity = useMemo(() => {
//     return destinationCities.find((c: any) => c.id === Number(urlToId)) || null;
//   }, [urlToId, destinationCities]);

//   useEffect(() => {
//     setOrigin(originCity ? { id: originCity.id, name: originCity.name } : null);
//     setDestination(destCity ? { id: destCity.id, name: destCity.name } : null);
//     setDate(displayDate);
//   }, [urlFromId, urlToId, displayDate]);

//   const originOptions = toOptions(originCities, "id", "name").map((o) => ({
//     ...o,
//     value: String(o.value),
//   }));

//   const destinationOptions = toOptions(destinationCities, "id", "name").map(
//     (o) => ({
//       ...o,
//       value: String(o.value),
//     })
//   );

//   const updateUrl = (updates: Record<string, string | null>) => {
//     const params = new URLSearchParams(searchParams);

//     Object.entries(updates).forEach(([k, v]) => {
//       if (v) params.set(k, v);
//       else params.delete(k);
//     });

//     navigate(`?${params.toString()}`, { replace: true });
//   };

//   const handleSearch = () => {
//     if (!urlFromId || !urlToId) {
//       alert("Select cities");
//       return;
//     }

//     navigate(
//       `/bus-booking?from=${urlFromId}&to=${urlToId}&date=${displayDate}`
//     );
//   };

//   return (
//     <div>
//       <div className="bg-[#273896] px-3 py-6 text-center text-white md:py-10">
//         <h1 className="mb-4 text-xl font-semibold sm:text-2xl md:mb-6 md:text-3xl">
//           {originCity?.name || "Bangalore"} ➝ {destCity?.name || "Chennai"}
//         </h1>

//         <div className="mx-auto flex max-w-5xl gap-5 overflow-x-auto pb-1 px-4 md:justify-center sm:justify-center ">
//           <div className="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black md:px-7 md:py-3 md:text-lg">
//             123 Buses found
//           </div>

//           <div className=" shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm text-black md:px-7 md:py-3 md:text-lg">
//             Ratings ⭐
//           </div>

//           <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm text-black md:px-7 md:py-3 md:text-lg">
//             Price ₹
//           </div>

//           <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm text-black md:px-7 md:py-3 md:text-lg">
//             Departure Time
//           </div>
//         </div>
//       </div>

//       <div className="border-t bg-gray-200 p-3 md:p-[10px]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl border border-gray-300 bg-white p-3 md:flex-row md:items-center md:gap-0 md:rounded-none md:p-0">
//           <div className="flex w-full items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 md:w-[25%] md:bg-white md:px-6 md:py-4">
//             <img src={busImage} className="w-12 md:w-16" />
//             <div className="min-w-0 flex-1">
//               <div className="text-xs text-gray-500 md:text-sm">From</div>
//               <ComboboxDemo
//                 options={originOptions}
//                 value={urlFromId}
//                 onValueChange={(v) => updateUrl({ from: v, to: null })}
//                 placeholder="Select"
//               />
//             </div>
//           </div>

//           <div className="hidden w-[10%] items-center justify-center md:flex">
//             <div className="rounded-full bg-gray-200 p-3">
//               <img src={cross} className="h-8 w-8 md:w-5 h-5" />
//             </div>
//           </div>

//           <div className="flex w-full items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 md:w-[25%] md:bg-white md:px-6 md:py-4">
//             <img src={busImage} className="w-12 md:w-16" />
//             <div className="min-w-0 flex-1">
//               <div className="text-xs text-gray-500 md:text-sm">To</div>
//               <ComboboxDemo
//                 options={destinationOptions}
//                 value={urlToId}
//                 onValueChange={(v) => updateUrl({ to: v })}
//                 placeholder="Select"
//               />
//             </div>
//           </div>

//           <div className="flex w-full flex-col gap-3 rounded-xl bg-gray-50 px-4 py-3 lg:w-[40%] lg:flex-row lg:items-center lg:bg-white lg:px-6 lg:py-4">
//             <div className="flex-1">
//               <div className="text-xs text-gray-500 md:text-sm">
//                 Date Of Journey
//               </div>
//               <div className="text-base font-semibold md:text-lg">
//                 {displayDate}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:items-center lg:gap-4">
//               <button
//                 onClick={() => updateUrl({ date: todayStr })}
//                 className="rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold md:px-5"
//               >
//                 Today
//               </button>

//               <button
//                 onClick={() => updateUrl({ date: tomorrowStr })}
//                 className="rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold md:px-5"
//               >
//                 Tomorrow
//               </button>

//               <Button
//                 onClick={handleSearch}
//                 className="col-span-2 rounded bg-[#0b4d71] px-3 py-2 text-white sm:col-span-1 lg:px-6"
//               >
//                 <Search className="mr-1 h-4 w-4 md:hidden" />
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;


// import { Button } from "@/components/ui/button";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import toOptions from "@/lib/toOptions.util";
// import { ComboboxDemo } from "../ui/combo-box";
// import { useSearchStore } from "@/states/store";
// import { useEffect, useMemo } from "react";
// import { Search } from "lucide-react";
// import busImage from "@/assets/a-man-with-bus.png";
// import cross from "@/assets/cross.png";

// const SearchForm = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const { setOrigin, setDestination, setDate } = useSearchStore();

//   const urlFromId = searchParams.get("from") || "";
//   const urlToId = searchParams.get("to") || "";
//   const urlDate = searchParams.get("date") || "";

//   const today = new Date();
//   const todayStr = today.toLocaleDateString("en-CA");

//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);
//   const tomorrowStr = tomorrow.toLocaleDateString("en-CA");

//   const displayDate = urlDate || todayStr;

//   useEffect(() => {
//     if (!urlDate) {
//       const params = new URLSearchParams(searchParams);
//       params.set("date", todayStr);
//       navigate(`?${params.toString()}`, { replace: true });
//     }
//   }, []);

//   const { data: originData } = useQuery({
//     queryKey: ["origin-cities"],
//     queryFn: () => BitlaRepository.getOriginCities(),
//   });

//   const { data: destData } = useQuery({
//     queryKey: ["destination-cities", urlFromId],
//     queryFn: () => BitlaRepository.getDestinationCities(Number(urlFromId)),
//     enabled: Boolean(urlFromId),
//   });

//   const originCities = originData?.data?.data ?? [];
//   const destinationCities = destData?.data?.data ?? [];

//   const originCity = useMemo(() => {
//     return originCities.find((c: any) => c.id === Number(urlFromId)) || null;
//   }, [urlFromId, originCities]);

//   const destCity = useMemo(() => {
//     return destinationCities.find((c: any) => c.id === Number(urlToId)) || null;
//   }, [urlToId, destinationCities]);

//   useEffect(() => {
//     setOrigin(originCity ? { id: originCity.id, name: originCity.name } : null);
//     setDestination(destCity ? { id: destCity.id, name: destCity.name } : null);
//     setDate(displayDate);
//   }, [urlFromId, urlToId, displayDate]);

//   const originOptions = toOptions(originCities, "id", "name").map((o) => ({
//     ...o,
//     value: String(o.value),
//   }));

//   const destinationOptions = toOptions(destinationCities, "id", "name").map(
//     (o) => ({
//       ...o,
//       value: String(o.value),
//     })
//   );

//   const updateUrl = (updates: Record<string, string | null>) => {
//     const params = new URLSearchParams(searchParams);

//     Object.entries(updates).forEach(([k, v]) => {
//       if (v) params.set(k, v);
//       else params.delete(k);
//     });

//     navigate(`?${params.toString()}`, { replace: true });
//   };

//   const handleSearch = () => {
//     if (!urlFromId || !urlToId) {
//       alert("Select cities");
//       return;
//     }

//     navigate(
//       `/bus-booking?from=${urlFromId}&to=${urlToId}&date=${displayDate}`
//     );
//   };

//   return (
//     <div>
//       {/* HEADER */}
//       <div className="bg-[#273896] px-3 py-6 text-center text-white md:py-10">
//         <h1 className="mb-4 text-xl font-semibold sm:text-2xl md:mb-6 md:text-3xl">
//           {originCity?.name || "Bangalore"} ➝ {destCity?.name || "Chennai"}
//         </h1>

//         {/* FILTER TABS */}
//         <div className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2 md:justify-center">
//           <div className="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black md:px-7 md:py-3 md:text-lg">
//             123 Buses found
//           </div>

//           <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg">
//             Ratings ⭐
//           </div>

//           <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg">
//             Price ₹
//           </div>

//           <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg">
//             Departure Time
//           </div>
//         </div>
//       </div>

//       {/* SEARCH BOX */}
//       <div className="border-t bg-gray-200 p-3">
//         <div
//           className="
//           mx-auto flex max-w-7xl flex-col gap-3 
//           rounded-2xl border border-gray-300 bg-white p-3

//           md:flex-row md:flex-wrap md:items-center md:gap-2
//           lg:flex-nowrap lg:gap-0
//         "
//         >
//           {/* FROM */}
//           <div className="flex w-full items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 md:w-[48%] lg:w-[25%] lg:bg-white lg:px-6 lg:py-4">
//             <img src={busImage} className="w-12 md:w-16" />
//             <div className="flex-1 min-w-0">
//               <div className="text-xs text-gray-500 md:text-sm">From</div>
//               <ComboboxDemo
//                 options={originOptions}
//                 value={urlFromId}
//                 onValueChange={(v) => updateUrl({ from: v, to: null })}
//                 placeholder="Select"
//               />
//             </div>
//           </div>

//           {/* SWITCH ICON */}
//           <div className="hidden md:flex md:w-[4%] items-center justify-center">
//             <div className="rounded-full bg-gray-200 p-3">
//               <img src={cross} className="h-5 w-5" />
//             </div>
//           </div>

//           {/* TO */}
//           <div className="flex w-full items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 md:w-[48%] lg:w-[25%] lg:bg-white lg:px-6 lg:py-4">
//             <img src={busImage} className="w-12 md:w-16" />
//             <div className="flex-1 min-w-0">
//               <div className="text-xs text-gray-500 md:text-sm">To</div>
//               <ComboboxDemo
//                 options={destinationOptions}
//                 value={urlToId}
//                 onValueChange={(v) => updateUrl({ to: v })}
//                 placeholder="Select"
//               />
//             </div>
//           </div>

//           {/* DATE + BUTTON */}
//           <div className="flex w-full flex-col gap-3 rounded-xl bg-gray-50 px-4 py-3 md:w-full md:flex-row md:flex-wrap md:items-center lg:w-[45%] lg:flex-nowrap lg:bg-white lg:px-6 lg:py-4">
//             <div className="flex-1">
//               <div className="text-xs text-gray-500 md:text-sm">
//                 Date Of Journey
//               </div>
//               <div className="text-base font-semibold md:text-lg">
//                 {displayDate}
//               </div>
//             </div>

//             <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:w-auto lg:flex lg:items-center lg:gap-8">
//               <button
//                 onClick={() => updateUrl({ date: todayStr })}
//                 className="rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold md:px-5"
//               >
//                 Today
//               </button>

//               <button
//                 onClick={() => updateUrl({ date: tomorrowStr })}
//                 className="rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold md:px-5"
//               >
//                 Tomorrow
//               </button>

//               <Button
//                 onClick={handleSearch}
//                 className="col-span-2 rounded bg-[#0b4d71] px-3 py-2 text-white sm:col-span-1 lg:px-6"
//               >
//                 <Search className="mr-1 h-4 w-4 md:hidden" />
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;

import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BitlaRepository from "@/repositories/bitla.repository";
import toOptions from "@/lib/toOptions.util";
import { ComboboxDemo } from "../ui/combo-box";
import { useSearchStore } from "@/states/store";
import { useEffect, useMemo } from "react";
import busImage from "@/assets/a-man-with-bus.png";
import cross from "@/assets/cross.png";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setOrigin, setDestination, setDate } = useSearchStore();

  const urlFromId = searchParams.get("from") || "";
  const urlToId = searchParams.get("to") || "";
  const urlDate = searchParams.get("date") || "";

  const today = new Date();
  const todayStr = today.toLocaleDateString("en-CA");

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowStr = tomorrow.toLocaleDateString("en-CA");

  const displayDate = urlDate || todayStr;

  useEffect(() => {
    if (!urlDate) {
      const params = new URLSearchParams(searchParams);
      params.set("date", todayStr);
      navigate(`?${params.toString()}`, { replace: true });
    }
  }, []);

  const { data: originData } = useQuery({
    queryKey: ["origin-cities"],
    queryFn: () => BitlaRepository.getOriginCities(),
  });

  const { data: destData } = useQuery({
    queryKey: ["destination-cities", urlFromId],
    queryFn: () => BitlaRepository.getDestinationCities(Number(urlFromId)),
    enabled: Boolean(urlFromId),
  });

  const originCities = originData?.data?.data ?? [];
  const destinationCities = destData?.data?.data ?? [];

  const originCity = useMemo(() => {
    return originCities.find((c: any) => c.id === Number(urlFromId)) || null;
  }, [urlFromId, originCities]);

  const destCity = useMemo(() => {
    return destinationCities.find((c: any) => c.id === Number(urlToId)) || null;
  }, [urlToId, destinationCities]);

  useEffect(() => {
    setOrigin(originCity ? { id: originCity.id, name: originCity.name } : null);
    setDestination(destCity ? { id: destCity.id, name: destCity.name } : null);
    setDate(displayDate);
  }, [urlFromId, urlToId, displayDate]);

  const originOptions = toOptions(originCities, "id", "name").map((o) => ({
    ...o,
    value: String(o.value),
  }));

  const destinationOptions = toOptions(destinationCities, "id", "name").map(
    (o) => ({
      ...o,
      value: String(o.value),
    })
  );

  const updateUrl = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([k, v]) => {
      if (v) params.set(k, v);
      else params.delete(k);
    });
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleSearch = () => {
    if (!urlFromId || !urlToId) {
      alert("Select cities");
      return;
    }

    navigate(
      `/bus-booking?from=${urlFromId}&to=${urlToId}&date=${displayDate}`
    );
  };

  return (
    <div>
      {/* HEADER */}
      <div className="bg-[#273896] px-3 py-6 text-center text-white md:py-10">
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl md:mb-6 md:text-3xl">
          {originCity?.name || "Bangalore"} ➝ {destCity?.name || "Chennai"}
        </h1>

        <div className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2 lg:justify-center md:justify-center min-[540px]:justify-center">
          <div className="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black md:px-7 md:py-3 md:text-lg">
            123 Buses found
          </div>
          <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg text-[#273896] ">
            Ratings ⭐
          </div>
          <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg text-[#273896]">
            Price ₹
          </div>
          <div className="shrink-0 rounded-full bg-gray-200 px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg text-[#273896]">
            Departure Time
          </div>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="border-t bg-gray-200 p-3">
        <div
          className="
            mx-auto grid max-w-7xl grid-cols-1 gap-3
            rounded-2xl border border-gray-300 bg-white p-3

            md:grid-cols-2
            lg:grid-cols-[25%_8%_25%_42%]
            lg:gap-0 lg:rounded-none lg:p-0
          "
        >
          {/* FROM */}
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 lg:bg-white lg:px-6 lg:py-4">
            <img src={busImage} className="w-12 md:w-16" alt="" />
            <div className="min-w-0 flex-1">
              <div className="text-xs text-gray-500 md:text-sm">From</div>
              <ComboboxDemo
                options={originOptions}
                value={urlFromId}
                onValueChange={(v) => updateUrl({ from: v, to: null })}
                placeholder="Select"
              />
            </div>
          </div>

          {/* DESKTOP ARROW ONLY */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="rounded-full bg-gray-200 p-3">
              <img src={cross} className="h-5 w-5" alt="" />
            </div>
          </div>

          {/* TO */}
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 lg:bg-white lg:px-6 lg:py-4">
            <img src={busImage} className="w-12 md:w-16" alt="" />
            <div className="min-w-0 flex-1">
              <div className="text-xs text-gray-500 md:text-sm">To</div>
              <ComboboxDemo
                options={destinationOptions}
                value={urlToId}
                onValueChange={(v) => updateUrl({ to: v })}
                placeholder="Select"
              />
            </div>
          </div>

          {/* DATE + BUTTON */}
          <div
            className="
              grid grid-cols-1 gap-3 rounded-xl bg-gray-50 px-4 py-3
              sm:grid-cols-[160px_1fr]
              md:col-span-2 md:grid-cols-[170px_1fr]
              lg:col-span-1 lg:grid-cols-[145px_1fr] lg:bg-white lg:px-3 lg:py-4
            "
          >
            <div className="text-center ">
              <div className="text-xs text-gray-500 md:text-sm">
                Date Of Journey
              </div>
              <div className="text-base font-semibold md:text-lg">
                {displayDate}
              </div>
            </div>

            <div
              className="
                grid grid-cols-3 gap-2
                sm:items-center
              "
            >
              <button
                onClick={() => updateUrl({ date: todayStr })}
                className="
                  rounded-full bg-yellow-400 px-2 py-2 text-xs font-semibold
                  sm:text-sm
                  xl:px-4
                "
              >
                Today
              </button>

              <button
                onClick={() => updateUrl({ date: tomorrowStr })}
                className="
                  rounded-full bg-yellow-400 px-2 py-2 text-xs font-semibold
                  sm:text-sm
                  xl:px-4
                "
              >
                Tomorrow
              </button>

              <Button
                onClick={handleSearch}
                className="
                  rounded bg-[#0b4d71] px-2 py-2 text-xs text-white
                  sm:text-sm
                  xl:px-4
                "
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;