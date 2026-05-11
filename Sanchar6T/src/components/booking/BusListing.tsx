// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Monitor, User } from "lucide-react";
// // import BusLayout from "./BusLayout.tsx";
// //
// // export interface BusListingProps {
// //   busNumber: string;
// //   operator: string;
// //   busType: string;
// //   departureTime: string;
// //   arrivalTime: string;
// //   duration: string;
// //   date: string;
// //   price: string;
// //   seatsAvailable: number;
// //   totalSeats: number;
// //   amenities?: string[];
// //   hasInfo?: boolean;
// //   isVia?: boolean;
// //   viaStops?: number;
// //   boardingPoints?: string[];
// // }
// //
// // const BusListing = ({
// //   busNumber,
// //   operator,
// //   busType,
// //   departureTime,
// //   arrivalTime,
// //   duration,
// //   date,
// //   price,
// //   seatsAvailable,
// //   totalSeats,
// //   amenities = [],
// //   hasInfo = false,
// //   isVia = false,
// //   viaStops = 0,
// //   boardingPoints = [],
// // }: BusListingProps) => {
// //   const hasSeats = seatsAvailable > 0;
// //
// //   // State
// //   const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
// //   const [showSeats, setShowSeats] = useState(false);
// //
// //   return (
// //     <div className="relative bg-white border-b border-gray-200 hover:bg-gray-50">
// //       <div className="max-w-6xl mx-auto px-6 py-4">
// //         <div className="flex items-center justify-between">
// //           {/* Left Section */}
// //           <div className="flex-1 max-w-sm">
// //             <div className="flex items-center gap-2 mb-1">
// //               <span className="text-lg font-semibold text-[#3d85c6]">
// //                 {busNumber}
// //               </span>
// //               {hasInfo && (
// //                 <div className="flex gap-1 relative">
// //                   <User className="w-4 h-4 text-gray-500" />
// //                   <div
// //                     className="relative"
// //                     onMouseEnter={() => setShowAmenitiesModal(true)}
// //                     onMouseLeave={() => setShowAmenitiesModal(false)}
// //                   >
// //                     <Monitor className="w-4 h-4 text-gray-500 cursor-pointer" />
// //                     {showAmenitiesModal && (
// //                       <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-300 shadow-lg rounded-lg p-3 z-50">
// //                         <h3 className="text-sm font-semibold text-[#3d85c6] mb-2">
// //                           Amenities
// //                         </h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {amenities.length > 0 ? (
// //                             amenities.map((a, idx) => (
// //                               <span
// //                                 key={idx}
// //                                 className="px-2 py-1 bg-[#3d85c6]/10 text-[#3d85c6] text-xs rounded"
// //                               >
// //                                 {a}
// //                               </span>
// //                             ))
// //                           ) : (
// //                             <span className="text-sm text-gray-500">
// //                               No amenities listed
// //                             </span>
// //                           )}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                   <span className="text-sm text-gray-500">+{viaStops}</span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //
// //           {/* Middle Section */}
// //           <div className="flex-1 max-w-md">
// //             <div className="flex items-center gap-2 mb-2">
// //               <div className="w-6 h-4 bg-[#3d85c6] rounded-sm flex items-center justify-center">
// //                 <span className="text-xs text-white font-medium">2+1</span>
// //               </div>
// //               <span className="text-sm text-gray-700">{busType}</span>
// //               {amenities.map((a, idx) => (
// //                 <span key={idx} className="text-xs text-gray-500">
// //                   {a}
// //                 </span>
// //               ))}
// //             </div>
// //
// //             <div className="flex items-center gap-8">
// //               <div className="text-center">
// //                 <div className="text-lg font-semibold text-[#3d85c6]">
// //                   {departureTime}
// //                 </div>
// //                 <div className="text-sm text-gray-500">{date}</div>
// //               </div>
// //
// //               <div className="flex-1 text-center">
// //                 <div className="text-sm text-gray-500">{duration}</div>
// //                 <div className="w-full h-0.5 bg-gray-300 my-1 relative"></div>
// //               </div>
// //
// //               <div className="text-center">
// //                 <div className="text-lg font-semibold text-[#3d85c6]">
// //                   {arrivalTime}
// //                 </div>
// //                 <div className="text-sm text-gray-500">{date}</div>
// //               </div>
// //             </div>
// //           </div>
// //
// //           {/* Right Section */}
// //           <div className="flex items-center gap-6">
// //             <div className="text-center">
// //               <div className="text-lg font-bold text-[#3d85c6]">
// //                 {seatsAvailable}
// //               </div>
// //               <div className="text-sm text-gray-500">Seats available</div>
// //             </div>
// //
// //             <div className="text-center">
// //               <div className="text-xl font-bold text-[#3d85c6]">{price}</div>
// //             </div>
// //
// //             <div>
// //               {hasSeats ? (
// //                 <Button
// //                   onClick={() => setShowSeats((prev) => !prev)}
// //                   className="bg-[#3d85c6] hover:bg-[#2d6da1] text-white px-6 py-2 rounded text-sm font-medium"
// //                 >
// //                   {showSeats ? "HIDE SEATS" : "VIEW SEATS"}
// //                 </Button>
// //               ) : (
// //                 <Button
// //                   className="bg-gray-400 text-white px-6 py-2 rounded text-sm font-medium"
// //                   disabled
// //                 >
// //                   SOLD OUT
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //
// //       {/* ✅ Replace old Seat Layout with new Index component */}
// //       {showSeats && (
// //         <div className="max-w-6xl mx-auto px-6 py-6 border-t border-gray-300 bg-gray-50">
// //           <BusLayout duration={duration} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// //
// // export default BusListing;
// //
// // components/booking/BusListing.tsx
// // components/booking/BusListing.tsx
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Separator } from "@/components/ui/separator";
// import {
//   Bus, Clock, MapPin, MapPinCheck, Users, IndianRupee,
//   Shield, RefreshCw, AlertTriangle, AlertCircle, ChevronDown, ChevronUp, CheckCircle2, Ticket,
//   Loader2
// } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import { parseBusData } from "@/repositories/bitla.helper.methods";
// import BusLayout from "./BusLayout";
// import { useNavigate } from "react-router-dom";

// export interface BusListingProps {
//   busNumber: string;
//   operator: string;
//   busType: string;
//   departureTime: string;
//   arrivalTime: string;
//   duration: string;
//   date: string;
//   price: string;
//   seatsAvailable: number;
//   totalSeats: number;
//   amenities?: string[];
//   boardingPoints?: string[];
//   dropoffPoints?: string[];
//   seatPrices?: { type: string; price: number }[];
//   cheapestPrice?: number;
//   isCancellable?: boolean;
//   allowReschedule?: boolean;
//   viaStops?: string[];
//   lastSeatsWarning?: boolean;
//   noCoachLayout?: boolean;
//   socialDistancing?: boolean;
// }

// const BusListing = (props: BusListingProps) => {
//   const navigate = useNavigate();

//   const [showSeats, setShowSeats] = useState(false);
//   const hasSeats = props.seatsAvailable > 0;

//   const schedule_and_availability = useQuery({
//     queryKey: ['schedule_and_availability', props.busNumber, props.date],
//     queryFn: () => BitlaRepository.getScheduleAndAvailability(props.busNumber),
//     enabled: !!props.busNumber
//   });

//   return (
//     <Card className="overflow-hidden border shadow-none hover:shadow-sm transition-all duration-400 rounded-none bg-white">
//       <div className="p-4">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] xl:grid-cols-[320px,1fr,360px] gap-8 items-start">

//           {/* Left: Operator */}
//           <div className="space-y-5">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-primary/10 rounded-xl">
//                 <Bus className="w-7 h-7 text-primary" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">{props.operator}</h3>
//                 <p className="text-base text-gray-600">{props.busType}</p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {props.isCancellable && <Badge className="bg-emerald-100 text-emerald-800">Free Cancellation</Badge>}
//               {props.allowReschedule && <Badge className="bg-violet-100 text-violet-800"><RefreshCw className="w-3.5 h-3.5 mr-1" />Reschedule</Badge>}
//               {props.socialDistancing && <Badge className="bg-sky-100 text-sky-800"><Shield className="w-3.5 h-3.5 mr-1" />Social Distancing</Badge>}
//               {props.lastSeatsWarning && <Badge className="bg-orange-100 text-orange-800 animate-pulse"><AlertTriangle className="w-3.5 h-3.5 mr-1" />Last {props.seatsAvailable} Seats!</Badge>}
//             </div>

//             {props?.amenities?.length ? (
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="ghost" size="sm">
//                       <AlertCircle className="w-4 h-4 mr-1" />
//                       {props?.amenities.length} Amenities
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <div className="grid grid-cols-2 gap-2">
//                       {Array.isArray(props?.amenities) ? props.amenities.map(a => (
//                         <div key={a} className="flex items-center gap-2">
//                           <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
//                           <span className="text-sm">{a}</span>
//                         </div>
//                       )) : null}
//                     </div>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             ) : null}
//           </div>

//           {/* Center: Timeline */}
//           <div className="flex items-center justify-center">
//             <div className="flex items-center gap-12">
//               <div className="text-center">
//                 <p className="text-4xl font-bold text-primary">{props.departureTime}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {new Date(props.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
//                 </p>
//                 {props.boardingPoints?.[0] && (
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger>
//                         <p className="text-xs text-gray-600 mt-2 flex items-center gap-1 justify-center capitalize whitespace-nowrap">
//                           <MapPin className="w-3.5 h-3.5 text-green-600" />
//                           {props.boardingPoints[0].split(" (")[0]}
//                         </p>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p className="font-semibold text-green-700 mb-1">Boarding Points</p>
//                         {props.boardingPoints.map((p, i) => <p key={i} className="text-sm capitalize whitespace-nowrap">{p}</p>)}
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 )}
//               </div>

//               <div className="relative">
//                 <div className="w-40 h-1 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-white p-2 rounded-full shadow-none">
//                     <Clock className="w-5 h-5 text-primary" />
//                   </div>
//                 </div>
//                 <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-bold text-primary">
//                   {props.duration}
//                 </p>
//               </div>

//               <div className="text-center">
//                 <p className="text-4xl font-bold text-primary">{props.arrivalTime}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {new Date(props.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
//                 </p>
//                 {props.dropoffPoints?.[0] && (
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger>
//                         <p className="text-xs text-gray-600 mt-2 flex items-center gap-1 justify-center capitalize whitespace-nowrap">
//                           <MapPinCheck className="w-3.5 h-3.5 text-red-600" />
//                           {props.dropoffPoints[0].split(" (")[0]}
//                         </p>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p className="font-semibold text-red-700 mb-1">Dropoff Points</p>
//                         {props.dropoffPoints.map((p, i) => <p key={i} className="text-sm whitespace-nowrap capitalize">{p}</p>)}
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right: Price + Seat Types + CTA */}
//           <div className="flex flex-col items-end space-y-6">
//             {/* Seat-wise Pricing */}
//             {/*
//             {props.seatPrices && props.seatPrices.length > 0 && (
//               <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 w-full max-w-xs">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Ticket className="w-5 h-5 text-primary" />
//                   <p className="font-semibold text-gray-800">Seat Prices</p>
//                 </div>
//                 <div className="space-y-2">
//                   {props.seatPrices.map((seat) => (
//                     <div key={seat.code} className="flex justify-between items-center">
//                       <span className="text-sm font-medium text-gray-700">{seat.type}</span>
//                       <span className={`font-bold text-lg ${seat.price === props.cheapestPrice ? "text-green-600" : "text-primary"}`}>
//                         ₹{seat.price}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             */}

//             {/* Main Price & Availability */}
//             <div className="text-right">
//               <div className="flex items-center justify-end gap-2">
//                 <IndianRupee className="w-7 h-7 text-primary" />
//                 <span className="text-5xl font-black text-primary leading-none">
//                   {props.cheapestPrice || props.price}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600 mt-2">
//                 <Users className="inline w-4 h-4 mr-1" />
//                 <strong>{props.seatsAvailable}</strong> seats left
//               </p>
//             </div>

//             <Button
//               onClick={() => setShowSeats(!showSeats)}
//               disabled={!hasSeats || props.noCoachLayout}
//               className="w-min text-lg font-semibold py-7 rounded-xl shadow-none hover:shadow-sm rounded-none"
//             >
//               {showSeats ? (
//                 <>Hide Seat Layout <ChevronUp className="ml-2" /></>
//               ) : (
//                 <>
//                   {hasSeats
//                     ? (props.noCoachLayout ? "Layout Unavailable" : "Select Seat & Book")
//                     : "Sold Out"
//                   }
//                   {!hasSeats || props.noCoachLayout ? null : <ChevronDown className="ml-2" />}
//                 </>
//               )}
//             </Button>
//           </div>
//         </div>

//         {props.viaStops.length ? (
//           <div className="mt-6 pt-4 border-t text-center text-xs text-gray-500">
//             Via: <span className="font-medium text-gray-700">{props.viaStops.join(" → ")}</span>
//           </div>
//         ) : null}
//       </div>

//       {showSeats && hasSeats && !props.noCoachLayout && (
//         <>
//           <Separator />
//           <div className="bg-secondary">
//             <div className="max-w-7xl mx-auto">
//               {schedule_and_availability.isLoading && (
//                 <Loader2 className="animate-spin" />
//               )}
//               {schedule_and_availability.isError && (
//                 <p className="text-red-500">Error: {schedule_and_availability.error.message}</p>
//               )}
//               {schedule_and_availability.data && (
//                 <BusLayout parsed={parseBusData(schedule_and_availability.data?.data?.data)}
//                   onContinue={(payload) => {
//                     const encoded = encodeURIComponent(JSON.stringify(payload));
//                     navigate(`/booking?data=${encoded}`);
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </>
//       )}
//     </Card>
//   );
// };

// export default BusListing;


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Separator } from "@/components/ui/separator";
// import {
//   Bus, Users, ChevronDown, ChevronUp, Loader2
// } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import { parseBusData } from "@/repositories/bitla.helper.methods";
// import BusLayout from "./BusLayout";
// import { useNavigate } from "react-router-dom";

// const BusListing = (props) => {
//   const navigate = useNavigate();
//   const [showSeats, setShowSeats] = useState(false);
//   const hasSeats = props.seatsAvailable > 0;

//   const schedule_and_availability = useQuery({
//     queryKey: ['schedule_and_availability', props.busNumber, props.date],
//     queryFn: () => BitlaRepository.getScheduleAndAvailability(props.busNumber),
//     enabled: !!props.busNumber
//   });

//   return (
//     <Card className="border rounded-xl bg-white hover:shadow-md transition">

//       <div className="p-5">

//         {/* 🔥 MAIN GRID FIXED */}
//         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px]  items-center">

//           {/* ✅ LEFT SECTION */}
//           <div className="space-y-4">

//             {/* Rating + Operator */}
//             <div className="flex items-center gap-3">
//               <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
//                 4.3
//               </div>

//               <div>
//                 <h3 className="text-lg font-bold text-gray-900">{props.operator}</h3>
//                 <p className="text-sm text-gray-500">{props.busType}</p>
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {props.isCancellable && (
//                 <Badge className="bg-green-100 text-green-700 text-xs">Free Cancellation</Badge>
//               )}
//               {props.allowReschedule && (
//                 <Badge className="bg-purple-100 text-purple-700 text-xs">Reschedule</Badge>
//               )}
//             </div>
//           </div>

//           {/* ✅ CENTER SECTION (TIME LINE FIXED) */}
//           <div className="flex items-center justify-center gap-10">

//             {/* Departure */}
//             <div className="text-center">
//               <p className="text-2xl font-bold text-blue-900">{props.departureTime}</p>
//             </div>

//             {/* Duration line */}
//             <div className="flex flex-col items-center">
//               <div className="w-24 h-[2px] bg-gray-400 relative">
//                 <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-600">
//                   {props.duration}
//                 </span>
//               </div>
//             </div>

//             {/* Arrival */}
//             <div className="text-center">
//               <p className="text-2xl font-bold text-blue-900">{props.arrivalTime}</p>
//             </div>

//           </div>

//           {/* ✅ RIGHT SECTION */}
//           <div className="flex flex-col items-end gap-3">

//             {/* Price */}
//             <div className="text-right">
//               <p className="text-3xl font-bold text-black">
//                 ₹{props.cheapestPrice || props.price}
//               </p>
//               <p className="text-green-600 text-sm font-medium">
//                 Available Seats ({props.seatsAvailable})
//               </p>
//             </div>

//             {/* Button */}
//             <Button
//               onClick={() => setShowSeats(!showSeats)}
//               disabled={!hasSeats || props.noCoachLayout}
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full"
//             >
//               {showSeats ? (
//                 <>Hide Seats <ChevronUp className="ml-2" /></>
//               ) : (
//                 <>
//                   View Seats
//                   <ChevronDown className="ml-2" />
//                 </>
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* VIA STOPS */}
//         {props.viaStops?.length ? (
//           <div className="mt-4 text-center text-xs text-gray-500">
//             Via: <span className="font-medium">{props.viaStops.join(" → ")}</span>
//           </div>
//         ) : null}

//       </div>

//       {/* SEAT LAYOUT */}
//       {showSeats && hasSeats && !props.noCoachLayout && (
//         <>
//           <Separator />
//           <div className="bg-gray-50 p-4">
//             {schedule_and_availability.isLoading && (
//               <Loader2 className="animate-spin" />
//             )}
//             {schedule_and_availability.data && (
//               <BusLayout
//                 parsed={parseBusData(schedule_and_availability.data?.data?.data)}
//                 onContinue={(payload) => {
//                   const encoded = encodeURIComponent(JSON.stringify(payload));
//                   navigate(`/booking?data=${encoded}`);
//                 }}
//               />
//             )}
//           </div>
//         </>
//       )}

//     </Card>
//   );
// };

// export default BusListing;

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import BitlaRepository from "@/repositories/bitla.repository";
// import { parseBusData } from "@/repositories/bitla.helper.methods";
// import BusLayout from "./BusLayout";
// import { useNavigate } from "react-router-dom";

// const BusListing = (props: any) => {
//   const navigate = useNavigate();
//   const [showSeats, setShowSeats] = useState(false);

//   const hasSeats = props.seatsAvailable > 0;

//   const schedule_and_availability = useQuery({
//     queryKey: ["schedule_and_availability", props.busNumber, props.date],
//     queryFn: () => BitlaRepository.getScheduleAndAvailability(props.busNumber),
//     enabled: !!props.busNumber,
//   });

//   return (
//     <Card className="w-full min-w-0 overflow-hidden rounded-xl border bg-white transition hover:shadow-md">
//       <div className="p-4 md:p-5">
//         <div className="grid min-w-0 grid-cols-1 gap-5 min-[1051px]:grid-cols-[250px_minmax(180px,1fr)_200px] xl:grid-cols-[280px_minmax(220px,1fr)_240px] min-[1051px]:items-center">
//           <div className="min-w-0 space-y-3">
//             <div className="flex min-w-0 items-start gap-3">
//               <div className="shrink-0 rounded bg-green-600 px-2 py-1 text-xs font-bold text-white min-[1051px]:px-3 min-[1051px]:text-sm">
//                 4.3
//               </div>

//               <div className="min-w-0">
//                 <h3 className="truncate text-base font-bold text-gray-900 min-[1051px]:text-base xl:text-lg">
//                   {props.operator}
//                 </h3>
//                 <p className="truncate text-xs text-gray-500 xl:text-sm">
//                   {props.busType}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {props.isCancellable && (
//                 <Badge className="bg-green-100 text-xs text-green-700">
//                   Free Cancellation
//                 </Badge>
//               )}

//               {props.allowReschedule && (
//                 <Badge className="bg-purple-100 text-xs text-purple-700">
//                   Reschedule
//                 </Badge>
//               )}
//             </div>
//           </div>

//           <div className="flex min-w-0 items-center justify-between gap-4 md:justify-center md:gap-8">
//             <div className="shrink-0 text-left md:text-center">
//               <p className="text-lg font-bold text-blue-900 min-[1051px]:text-lg xl:text-2xl">
//                 {props.departureTime}
//               </p>
//             </div>

//             <div className="flex min-w-0 flex-1 flex-col items-center md:flex-none">
//               <span className="mb-1 whitespace-nowrap text-[10px] text-gray-600 min-[1051px]:text-xs">
//                 {props.duration}
//               </span>
//               <div className="h-[2px] w-full max-w-[70px] bg-gray-400 min-[1051px]:max-w-[90px]" />
//             </div>

//             <div className="shrink-0 text-right md:text-center">
//               <p className="text-lg font-bold text-blue-900 min-[1051px]:text-lg xl:text-2xl">
//                 {props.arrivalTime}
//               </p>
//             </div>
//           </div>

//           <div className="flex min-w-0 items-center justify-between gap-3 min-[1051px]:flex-col min-[1051px]:items-end">
//             <div className="min-w-0 text-left min-[1051px]:text-right">
//               <p className="truncate text-xl font-bold text-black min-[1051px]:text-xl xl:text-3xl">
//                 ₹{props.cheapestPrice || props.price}
//               </p>
//               <p className="truncate text-xs font-medium text-green-600 min-[1051px]:text-sm">
//                 Available Seats ({props.seatsAvailable})
//               </p>
//             </div>

//             <Button
//               onClick={() => setShowSeats(!showSeats)}
//               disabled={!hasSeats || props.noCoachLayout}
//               className="shrink-0 rounded-full bg-yellow-400 px-3 py-2 text-xs font-semibold text-black hover:bg-yellow-500 min-[1051px]:px-4 min-[1051px]:text-sm xl:px-6 xl:text-base"
//             >
//               {showSeats ? (
//                 <>
//                   Hide <ChevronUp className="ml-1 h-4 w-4" />
//                 </>
//               ) : (
//                 <>
//                   View Seats <ChevronDown className="ml-1 h-4 w-4" />
//                 </>
//               )}
//             </Button>
//           </div>
//         </div>

//         {props.viaStops?.length ? (
//           <div className="mt-4 truncate text-center text-xs text-gray-500">
//             Via:{" "}
//             <span className="font-medium">
//               {props.viaStops.join(" → ")}
//             </span>
//           </div>
//         ) : null}
//       </div>

//       {showSeats && hasSeats && !props.noCoachLayout && (
//         <>
//           <Separator />
//           <div className="overflow-x-auto bg-gray-50 p-3 md:p-4">
//             {schedule_and_availability.isLoading && (
//               <Loader2 className="animate-spin" />
//             )}

//             {schedule_and_availability.data && (
//               <BusLayout
//                 parsed={parseBusData(schedule_and_availability.data?.data?.data)}
//                 onContinue={(payload) => {
//                   const encoded = encodeURIComponent(JSON.stringify(payload));
//                   navigate(`/booking?data=${encoded}`);
//                 }}
//               />
//             )}
//               </div>
//         </>
//       )}
//     </Card>
//   );
// };

// export default BusListing;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import BitlaRepository from "@/repositories/bitla.repository";
import { parseBusData } from "@/repositories/bitla.helper.methods";
import BusLayout from "./BusLayout";
import { useNavigate } from "react-router-dom";

const BusListing = (props: any) => {
  const navigate = useNavigate();
  const [showSeats, setShowSeats] = useState(false);

  const hasSeats = props.seatsAvailable > 0;

  const schedule_and_availability = useQuery({
    queryKey: ["schedule_and_availability", props.busNumber, props.date],
    queryFn: () => BitlaRepository.getScheduleAndAvailability(props.busNumber),
    enabled: !!props.busNumber,
  });

  return (
    <Card className="w-full min-w-0 overflow-hidden rounded-xl border bg-white transition hover:shadow-md">
      <div className="p-4 md:p-5">
        <div className="grid min-w-0 grid-cols-1 gap-5 min-[1051px]:grid-cols-[250px_minmax(180px,1fr)_200px] xl:grid-cols-[280px_minmax(220px,1fr)_240px] min-[1051px]:items-center">
          
          {/* LEFT */}
          <div className="min-w-0 space-y-3">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                {/* <div className="shrink-0 rounded bg-green-600 px-2 py-1 text-xs font-bold text-white min-[1051px]:px-3 min-[1051px]:text-sm">
                  4.3
                </div> */}

                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-gray-900 min-[1051px]:text-base xl:text-lg">
                    {props.operator}
                  </h3>
                  <p className="truncate text-xs text-gray-500 xl:text-sm">
                    {props.busType}
                  </p>
                </div>
              </div>

              {/* TIMINGS ONLY FOR 768px - 1050px */}
              <div className="hidden min-[768px]:flex min-[1051px]:hidden items-center gap-5">
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-900">
                    {props.departureTime}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="mb-1 whitespace-nowrap text-[10px] text-gray-600">
                    {props.duration}
                  </span>
                  <div className="h-[2px] w-[60px] bg-gray-400" />
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-blue-900">
                    {props.arrivalTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {props.isCancellable && (
                <Badge className="bg-green-100 text-xs text-green-700">
                  Free Cancellation
                </Badge>
              )}

              {props.allowReschedule && (
                <Badge className="bg-purple-100 text-xs text-purple-700">
                  Reschedule
                </Badge>
              )}
            </div>
          </div>

          {/* TIMINGS FOR MOBILE BELOW 768px AND DESKTOP ABOVE 1050px */}
          <div className="flex min-w-0 items-center justify-between gap-4 min-[768px]:hidden min-[1051px]:flex min-[1051px]:justify-center min-[1051px]:gap-8">
            <div className="shrink-0 text-left min-[1051px]:text-center">
              <p className="text-xl font-bold text-blue-900 min-[1051px]:text-xl xl:text-2xl">
                {props.departureTime}
              </p>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center min-[1051px]:flex-none">
              <span className="mb-1 whitespace-nowrap text-[12px] text-gray-600 min-[1051px]:text-s">
                {props.duration}
              </span>
              <div className="h-[2px] w-full max-w-[70px] bg-gray-400 min-[1051px]:max-w-[90px]" />
            </div>

            <div className="shrink-0 text-right min-[1051px]:text-center">
              <p className="text-xl font-bold text-blue-900 min-[1051px]:text-xl xl:text-2xl">
                {props.arrivalTime}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex min-w-0 items-center justify-between gap-3 min-[1051px]:flex-col min-[1051px]:items-end">
            <div className="min-w-0 text-left min-[1051px]:text-right">
              <p className="truncate text-xl font-bold text-black min-[1051px]:text-xl xl:text-3xl">
                ₹{props.cheapestPrice || props.price}
              </p>
              <p className="truncate text-xs font-medium text-green-600 min-[1051px]:text-sm">
                Available Seats ({props.seatsAvailable})
              </p>
            </div>

            <Button
              onClick={() => setShowSeats(!showSeats)}
              disabled={!hasSeats || props.noCoachLayout}
              className="shrink-0 rounded-full bg-yellow-400 px-3 py-2 text-xs font-semibold text-black hover:bg-yellow-500 min-[1051px]:px-4 min-[1051px]:text-sm xl:px-6 xl:text-base"
            >
              {showSeats ? (
                <>
                  Hide <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  View Seats <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {props.viaStops?.length ? (
          <div className="mt-4 truncate text-center text-xs text-gray-500">
            Via: <span className="font-medium">{props.viaStops.join(" → ")}</span>
          </div>
        ) : null}
      </div>

      {showSeats && hasSeats && !props.noCoachLayout && (
        <>
          <Separator />
          <div className="overflow-x-auto bg-gray-50 p-3 md:p-4">
            {schedule_and_availability.isLoading && (
              <Loader2 className="animate-spin" />
            )}

            {schedule_and_availability.data && (
              <BusLayout
                parsed={parseBusData(schedule_and_availability.data?.data?.data)}
                onContinue={(payload) => {
                  const encoded = encodeURIComponent(JSON.stringify(payload));
                  navigate(`/booking?data=${encoded}`);
                }}
              />
            )}
          </div>
        </>
      )}
    </Card>
  );
};

export default BusListing;