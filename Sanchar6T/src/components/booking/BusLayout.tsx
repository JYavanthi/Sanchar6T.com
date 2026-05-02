// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { BusData } from '@/repositories/bitla.helper.methods';
//
// interface Seat {
//   id: string;
//   price: number;
//   isAvailable: boolean;
//   isSelected: boolean;
//   type: 'seater' | 'sleeper';
// }
//
// interface BusLayoutProps {
//   duration: string;
//   busLayout: BusData;
// }
//
// const BusLayout: React.FC<BusLayoutProps> = ({ duration, busLayout }) => {
//   const coaches = 
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [hoveredSeat, setHoveredSeat] = useState<{ seat: Seat; x: number; y: number } | null>(null);
//   const [seatsVisible, setSeatsVisible] = useState(true);
//   const [selectedBoardingPoint, setSelectedBoardingPoint] = useState<number | null>(null);
//   const [selectedDropPoint, setSelectedDropPoint] = useState<number | null>(null);
//
//   const navigate = useNavigate();
//
//   const lowerBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `L${i + 1}`,
//     price: 599 + (i % 6) * 100,
//     isAvailable: i % 3 !== 0,
//     isSelected: false,
//     type: i < 12 ? 'seater' : 'sleeper',
//   }));
//
//   const upperBerthSeats: Seat[] = Array.from({ length: 18 }, (_, i) => ({
//     id: `U${i + 1}`,
//     price: 699 + (i % 6) * 100,
//     isAvailable: i % 4 !== 0,
//     isSelected: false,
//     type: i < 12 ? 'seater' : 'sleeper',
//   }));
//
//   const [femaleSeatId] = useState(() => {
//     const availableSeats = lowerBerthSeats.concat(upperBerthSeats).filter(s => s.isAvailable);
//     const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
//     return randomSeat.id;
//   });
//
//   const allSeats = [...lowerBerthSeats, ...upperBerthSeats];
//
//   const handleSeatClick = (seatId: string) => {
//     if (!allSeats.find(s => s.id === seatId)?.isAvailable) return;
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(id => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };
//
//   const handleBoardingPointSelect = (index: number) => {
//     setSelectedBoardingPoint(index);
//   };
//
//   const handleDropPointSelect = (index: number) => {
//     setSelectedDropPoint(index);
//   };
//
//   const calculateTotalPrice = () => {
//     return selectedSeats.reduce((total, seatId) => {
//       const seat = allSeats.find(s => s.id === seatId);
//       return total + (seat?.price || 0);
//     }, 0);
//   };
//
//   const isFormComplete =
//     selectedSeats.length > 0 && selectedBoardingPoint !== null && selectedDropPoint !== null;
//
//   const boardingPoints = [
//     {
//       time: '21:15, 06 SEP',
//       name: 'Morigate',
//       address: 'Shop no A-5 morigate golchakkar mother dairy infront of dispensary',
//       contact: '8604875557',
//       phone: '9319121024',
//     },
//     {
//       time: '21:30, 06 SEP',
//       name: 'ISBT Kashmiri Gate',
//       address: 'Morigate golchakkar',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//     {
//       time: '22:00, 06 SEP',
//       name: 'Akshardham Metro Station',
//       address: 'Yamuna bank metro Station',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//     {
//       time: '22:30, 06 SEP',
//       name: 'NOIDA 0 POINT NEAR PARICHOUK',
//       address: 'NOIDA 0 POINT',
//       contact: '8604875557',
//       phone: '9044266660',
//     },
//   ];
//
//   const droppingPoints = [
//     {
//       time: '03:45, 07 SEP',
//       name: 'Kanpur',
//       address: 'Ramadevi Chauraha Kanpur',
//       contact: '7439049009',
//       phone: '7408713009',
//     },
//   ];
//
//   const SeatComponent = ({ seat }: { seat: Seat }) => {
//     const isSelected = selectedSeats.includes(seat.id);
//
//     const availableImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available.png&w=64&q=75';
//     const selectedImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Selected.png&w=64&q=75';
//     const blockedImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Unavailable_Male.png&w=64&q=75';
//     const femaleImg =
//       'https://www.makemytrip.com/bus-mmt-next/_next/image?url=%2Fbus-mmt-next%2FSleeper_Available_Female.png&w=64&q=75';
//
//     let seatImage = availableImg;
//     if (!seat.isAvailable) seatImage = blockedImg;
//     else if (seat.id === femaleSeatId) seatImage = femaleImg;
//     if (isSelected) seatImage = selectedImg;
//
//     const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//       setHoveredSeat({ seat, x: rect.right, y: rect.top });
//     };
//
//     return (
//       <div
//         className={`relative scale-95 cursor-pointer transition-all duration-300 ${!seat.isAvailable ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
//           }`}
//         onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={() => setHoveredSeat(null)}
//       >
//         <img
//           src={seatImage}
//           alt={seat.id}
//           className={`w-12 h-10 object-contain mx-auto transition-transform duration-300 ${isSelected ? 'scale-110' : 'scale-100'
//             }`}
//         />
//         <div className="text-[11px] text-price-text mt-1 text-center">₹{seat.price}</div>
//       </div>
//     );
//   };
//
//   const handleContinue = () => {
//     if (!isFormComplete) return;
//     navigate('/booking-details', {
//       state: {
//         selectedSeats,
//         boardingPoint: boardingPoints[selectedBoardingPoint!],
//         droppingPoint: droppingPoints[selectedDropPoint!],
//         totalPrice: calculateTotalPrice(),
//         duration,
//       },
//     });
//   };
//
//   return (
//     <div className="">
//       <div className="max-w-7xl mx-auto">
//
//         {/* Show Duration */}
//         <h2 className="text-lg font-bold mb-4 text-primary bg-primary/10 p-4 px-8 border">
//           Trip Duration: {duration}
//         </h2>
//
//         <div className="grid grid-cols-2 gap-8 p-4 px-8">
//           {/* Seats Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Seats</h2>
//             {seatsVisible && (
//               <div className="space-y-6">
//                 <div className="flex gap-10">
//                   {/* LOWER BERTH */}
//                   <div>
//                     <h3 className="text-sm font-medium text-muted-foreground mb-3">
//                       LOWER BERTH ({lowerBerthSeats.length})
//                     </h3>
//                     <div className="grid grid-cols-3 gap-3">
//                       {lowerBerthSeats.map(seat => (
//                         <SeatComponent key={seat.id} seat={seat} />
//                       ))}
//                     </div>
//                   </div>
//                   {/* UPPER BERTH */}
//                   <div>
//                     <h3 className="text-sm font-medium text-muted-foreground mb-3">
//                       UPPER BERTH ({upperBerthSeats.length})
//                     </h3>
//                     <div className="grid grid-cols-3 gap-3">
//                       {upperBerthSeats.map(seat => (
//                         <SeatComponent key={seat.id} seat={seat} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//
//           {/* Boarding & Drop Points Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Select Pickup & Drop Points</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {/* Boarding */}
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">BOARDING POINTS</h3>
//                   <ChevronUp className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="space-y-2">
//                   {boardingPoints.map((point, index) => (
//                     <div
//                       key={index}
//                       className={`border rounded p-2 cursor-pointer transition-colors ${selectedBoardingPoint === index
//                         ? 'border-primary bg-seat-selected'
//                         : 'border-tab-border hover:border-primary'
//                         }`}
//                       onClick={() => handleBoardingPointSelect(index)}
//                     >
//                       <div className="font-medium text-xs">{point.time}</div>
//                       <div className="font-semibold text-sm">{point.name}</div>
//                       <div className="text-xs text-pickup-text mt-1">{point.address}</div>
//                       <div className="text-xs text-pickup-text">{point.contact}</div>
//                       <div className="text-xs text-pickup-text">{point.phone}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Dropping */}
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium">DROP POINTS</h3>
//                   <ChevronDown className="w-4 h-4 text-muted-foreground" />
//                 </div>
//                 <div className="space-y-2">
//                   {droppingPoints.map((point, index) => (
//                     <div
//                       key={index}
//                       className={`border rounded p-2 cursor-pointer transition-colors ${selectedDropPoint === index
//                         ? 'border-primary bg-seat-selected'
//                         : 'border-tab-border hover:border-primary'
//                         }`}
//                       onClick={() => handleDropPointSelect(index)}
//                     >
//                       <div className="font-medium text-xs">{point.time}</div>
//                       <div className="font-semibold text-sm">{point.name}</div>
//                       <div className="text-xs text-pickup-text mt-1">{point.address}</div>
//                       <div className="text-xs text-pickup-text">{point.contact}</div>
//                       <div className="text-xs text-pickup-text">{point.phone}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div>
//               {selectedSeats.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-sm font-medium text-muted-foreground mb-3">
//                     SELECTED SEATS ({selectedSeats.length})
//                   </h3>
//                   <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
//                     {selectedSeats.map(seatId => {
//                       const seat = allSeats.find(s => s.id === seatId);
//                       return (
//                         <div
//                           key={seatId}
//                           className="border rounded p-2 cursor-pointer transition-colors bg-seat-selected"
//                         >
//                           <div className="font-medium text-xs">{seatId}</div>
//                           <div className="font-semibold text-sm">₹{seat?.price}</div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}
//             </div>
//             {/*Total Price */}
//             <div>
//               {selectedSeats.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-sm font-medium text-muted-foreground mb-3">
//                     TOTAL PRICE
//                   </h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="border rounded p-2 cursor-pointer transition-colors bg-seat-selected">
//                       <div className="font-medium text-xs">Total Seats</div>
//                       <div className="font-semibold text-sm">{selectedSeats.length}</div>
//                     </div>
//                     <div className="border rounded p-2 cursor-pointer transition-colors bg-seat-selected">
//                       <div className="font-medium text-xs">Total Price</div>
//                       <div className="font-semibold text-sm">₹{calculateTotalPrice()}</div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//
//             <div className="border-t border-tab-border pt-4 mt-4">
//               <Button
//                 className="w-full"
//                 disabled={!isFormComplete}
//                 size="lg"
//                 onClick={handleContinue}
//               >
//                 CONTINUE
//               </Button>
//             </div>
//           </div>
//         </div>
//
//         {/* Tooltip */}
//         {hoveredSeat && (
//           <div
//             className="fixed z-[9999] w-48 bg-[#3D85C6] border border-gray-300 rounded shadow-lg p-3 text-xs text-[#FFFFFF]"
//             style={{ top: hoveredSeat.y, left: hoveredSeat.x + 20 }}
//           >
//             {!hoveredSeat.seat.isAvailable ? (
//               <div className="text-center font-bold text-lg">Booked</div>
//             ) : (
//               <>
//                 <div className="text-center text-xl font-bold">
//                   {hoveredSeat.seat.id === femaleSeatId ? 'Female Seat' : 'Seat Details'}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Seat No:</span> {hoveredSeat.seat.id}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Seat Type:</span> {hoveredSeat.seat.type}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Base Fare:</span> ₹{hoveredSeat.seat.price}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Discount:</span> ₹
//                   {Math.floor(hoveredSeat.seat.price * 0.1)}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Net Base Fare:</span> ₹
//                   {hoveredSeat.seat.price - Math.floor(hoveredSeat.seat.price * 0.1)}
//                 </div>
//                 <div>
//                   <span className="font-semibold">GST:</span> ₹
//                   {Math.floor(
//                     (hoveredSeat.seat.price - Math.floor(hoveredSeat.seat.price * 0.1)) * 0.18,
//                   )}
//                 </div>
//                 <div className="font-bold mt-1">
//                   <span>Total:</span> ₹
//                   {Math.floor(
//                     (hoveredSeat.seat.price - Math.floor(hoveredSeat.seat.price * 0.1)) * 1.18,
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
//
// export default BusLayout;
//
//
//
//
//
//
//
//
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { AlertCircle, Bus, Clock, IndianRupee, MapPin, User } from "lucide-react";
// import { BusData, Coach, Seat, parseBitlaBusLayoutFull } from "@/repositories/bitla.helper.methods";
//
// interface BusLayoutProps {
//   duration: string;
//   busData: BusData;
// }
//
// const BusLayout: React.FC<BusLayoutProps> = ({ duration, busData }) => {
//   const coaches: Coach[] = parseBitlaBusLayoutFull(busData);
//   console.log(coaches);
//
//   const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
//   const [selectedBoarding, setSelectedBoarding] = useState<number | null>(null);
//   const [selectedDrop, setSelectedDrop] = useState<number | null>(null);
//
//   const allSeats: Seat[] = coaches.flatMap(coach => coach.rows.flat()).filter(s => s.seatLabel);
//
//   const toggleSeat = (seat: Seat) => {
//     if (!seat.available || !seat.seatLabel) return;
//
//     setSelectedSeats(prev =>
//       prev.includes(seat)
//         ? prev.filter(s => s !== seat)
//         : [...prev, seat]
//     );
//   };
//
//   const totalFare = selectedSeats.reduce((sum, s) => sum + s.fare, 0);
//   const totalGST = selectedSeats.reduce((sum, s) => sum + s.gst, 0);
//   const grandTotal = totalFare + totalGST;
//
//   const isFormComplete = selectedSeats.length > 0 && selectedBoarding !== null && selectedDrop !== null;
//
//   // Use first coach for boarding/drop points (assuming all coaches have same points)
//   const boardingPoints = coaches[0]?.boarding_stages.split("|").filter(Boolean) || [];
//   const dropPoints = coaches[0]?.dropoff_stages.split("|").filter(Boolean) || [];
//
//   return (
//     <TooltipProvider>
//       <div className="max-w-6xl mx-auto p-4 space-y-6">
//         {/* Trip Info Header */}
//         <Card>
//           <CardContent className="flex items-center justify-between py-4">
//             <div className="flex items-center gap-3">
//               <Bus className="w-6 h-6 text-primary" />
//               <div>
//                 <h2 className="text-xl font-bold">Select Your Seat</h2>
//                 <p className="text-sm text-muted-foreground flex items-center gap-1">
//                   <Clock className="w-4 h-4" /> Trip Duration: <strong>{duration}</strong>
//                 </p>
//               </div>
//             </div>
//             <Badge variant="secondary" className="text-sm">
//               {allSeats.filter(s => s.available).length} Seats Available
//             </Badge>
//           </CardContent>
//         </Card>
//
//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Seat Layout Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {coaches.map((coach, coachIndex) => (
//               <Card key={coachIndex}>
//                 <CardHeader>
//                   <CardTitle className="text-lg flex items-center justify-between">
//                     <span>{coach.coach} Deck</span>
//                     <Badge variant="outline">Driver →</Badge>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ScrollArea className="h-96 w-full rounded-md border p-4">
//                     <div className="grid grid-cols-5 gap-3">
//                       {coach.rows.map((row, rowIndex) =>
//                         row.map((seat, colIndex) => {
//                           const isSelected = selectedSeats.includes(seat);
//                           const isAvailable = seat.available && seat.seatLabel;
//
//                           let seatStyle = "bg-muted border-2 border-dashed";
//                           let icon = null;
//
//                           if (!seat.seatLabel) {
//                             return <div key={`${rowIndex}-${colIndex}`} className="w-12 h-12" />;
//                           }
//
//                           if (!isAvailable) {
//                             seatStyle = "bg-gray-200 cursor-not-allowed";
//                           } else if (isSelected) {
//                             seatStyle = "bg-blue-500 text-white border-blue-600";
//                           } else if (seat.isLadies) {
//                             seatStyle = "bg-pink-100 border-pink-300 hover:bg-pink-200";
//                             icon = <User className="w-4 h-4" />;
//                           } else {
//                             seatStyle = "bg-green-100 border-green-300 hover:bg-green-200";
//                           }
//
//                           return (
//                             <Tooltip key={`${rowIndex}-${colIndex}`}>
//                               <TooltipTrigger asChild>
//                                 <div
//                                   className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs font-medium cursor-pointer transition-all shadow-sm ${seatStyle}`}
//                                   onClick={() => toggleSeat(seat)}
//                                 >
//                                   {icon || seat.seatLabel}
//                                   {isSelected && <span className="text-xs">✓</span>}
//                                 </div>
//                               </TooltipTrigger>
//                               <TooltipContent>
//                                 <div className="space-y-1 text-sm">
//                                   <p><strong>Seat {seat.seatLabel}</strong></p>
//                                   <p>Fare: ₹{seat.fare} + ₹{seat.gst} GST</p>
//                                   <p className={seat.available ? "text-green-600" : "text-red-600"}>
//                                     {seat.available ? "Available" : "Already Booked"}
//                                   </p>
//                                   {seat.isLadies && <Badge variant="secondary">Ladies Only</Badge>}
//                                 </div>
//                               </TooltipContent>
//                             </Tooltip>
//                           );
//                         })
//                       )}
//                     </div>
//                   </ScrollArea>
//
//                   {/* Seat Legend */}
//                   <div className="flex items-center justify-center gap-6 gap-6 mt-6">
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded bg-green-100 border-2 border-green-300" />
//                       <span className="text-sm">Available</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded bg-pink-100 border-2 border-pink-300" />
//                       <span className="text-sm">Ladies</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded bg-blue-500" />
//                       <span className="text-sm">Selected</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded bg-gray-200" />
//                       <span className="text-sm">Booked</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//
//           {/* Right Sidebar: Summary + Boarding/Dropping */}
//           <div className="space-y-6">
//             {/* Selected Seats Summary */}
//             <Card className={selectedSeats.length > 0 ? "border-blue-500 shadow-lg" : ""}>
//               <CardHeader>
//                 <CardTitle className="text-lg">Your Selection</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {selectedSeats.length === 0 ? (
//                   <p className="text-center text-muted-foreground py-8">
//                     No seats selected yet
//                   </p>
//                 ) : (
//                   <>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedSeats.map((seat) => (
//                         <Badge key={seat.seatLabel} variant="default" className="text-sm py-1">
//                           {seat.seatLabel}
//                         </Badge>
//                       ))}
//                     </div>
//
//                     <Separator />
//
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span>Base Fare</span>
//                         <span>₹{totalFare}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>GST</span>
//                         <span>₹{totalGST}</span>
//                       </div>
//                       <div className="flex justify-between font-bold text-lg pt-2 border-t">
//                         <span>Total Amount</span>
//                         <span className="text-primary">₹{grandTotal}</span>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </CardContent>
//             </Card>
//
//             {/* Boarding Point */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg flex items-center gap-2">
//                   <MapPin className="w-5 h-5" /> Boarding Point
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ScrollArea className="h-48">
//                   {boardingPoints.map((point, idx) => (
//                     <div
//                       key={idx}
//                       onClick={() => setSelectedBoarding(idx)}
//                       className={`p-3 rounded-lg border cursor-pointer mb-2 transition-all transition-all ${selectedBoarding === idx
//                         ? "border-blue-500 bg-blue-50"
//                         : "border-gray-200 hover:bg-gray-50"
//                         }`}
//                     >
//                       <p className="font-medium text-sm">{point.split("~")[0]}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {point.split("~")[1] || "Time not specified"}
//                       </p>
//                     </div>
//                   ))}
//                 </ScrollArea>
//               </CardContent>
//             </Card>
//
//             {/* Dropping Point */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg flex items-center gap-2">
//                   <MapPin className="w-5 h-5" /> Dropping Point
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ScrollArea className="h-48">
//                   {dropPoints.map((point, idx) => (
//                     <div
//                       key={idx}
//                       onClick={() => setSelectedDrop(idx)}
//                       className={`p-3 rounded-lg border cursor-pointer mb-2 transition-all ${selectedDrop === idx
//                         ? "border-blue-500 bg-blue-50"
//                         : "border-gray-200 hover:bg-gray-50"
//                         }`}
//                     >
//                       <p className="font-medium text-sm">{point.split("~")[0]}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {point.split("~")[1] || "Time not specified"}
//                       </p>
//                     </div>
//                   ))}
//                 </ScrollArea>
//               </CardContent>
//             </Card>
//
//             {/* Continue Button */}
//             <Button
//               size="lg"
//               className="w-full text-lg font-semibold"
//               disabled={!isFormComplete}
//               onClick={() => {
//                 console.log({
//                   selectedSeats,
//                   boardingPoint: boardingPoints[selectedBoarding!],
//                   droppingPoint: dropPoints[selectedDrop!],
//                   totalAmount: grandTotal,
//                 });
//                 // Navigate to passenger details
//               }}
//             >
//               {isFormComplete ? (
//                 <>Proceed to Book <IndianRupee className="w-5 h-5 ml-2" /></>
//               ) : (
//                 "Select Seat & Points to Continue"
//               )}
//             </Button>
//
//             {!isFormComplete && (
//               <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
//                 <AlertCircle className="w-4 h-4" />
//                 Please select seat, boarding, and dropping point
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </TooltipProvider >
//   );
// };
//
// export default BusLayout;
//
//
// import React, { useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Info, User, MapPin, DoorOpen } from "lucide-react";
// import type {
//   SeatIdentifiersMap,
//   ParsedBusLayout,
//   ParsedSeat
// } from "@/repositories/bitla.types"; // adjust import path to where you keep the parser/types
//
// // Props
// type SeatLayoutProps = {
//   parsedLayout: ParsedBusLayout; // output of parseBitlaBusLayoutFull(busData, seatIdentifiers)
//   seatIdentifiers: SeatIdentifiersMap; // full map for showing meanings (optional, used for tooltip)
//   onContinue?: (payload: {
//     selectedSeats: ParsedSeat[];
//     boardingStage?: any;
//     dropoffStage?: any;
//     totalFare: number;
//     totalGst: number;
//   }) => void;
//   maxSelectable?: number;
// };
//
// const colorForSeat = (seat: ParsedSeat) => {
//   if (!seat.seatLabel) return "bg-transparent";
//   if (!seat.available) return "bg-gray-200 border-gray-300 text-gray-600";
//   if (seat.isLadies) return "bg-pink-50 border-pink-400";
//   if (seat.isGents) return "bg-blue-50 border-blue-400";
//   return "bg-white border-green-400";
// };
//
// export default function SeatLayout({
//   parsedLayout,
//   seatIdentifiers,
//   onContinue,
//   maxSelectable = 6,
// }: SeatLayoutProps) {
//   const [selectedSeatLabels, setSelectedSeatLabels] = useState<string[]>([]);
//   const [hovered, setHovered] = useState<{ seat: ParsedSeat; x: number; y: number } | null>(null);
//   const [selectedBoarding, setSelectedBoarding] = useState<any | null>(null);
//   const [selectedDropoff, setSelectedDropoff] = useState<any | null>(null);
//
//   // Flatten seats for lookups
//   const allSeats = useMemo(
//     () =>
//       parsedLayout.rows.flatMap(r =>
//         r.columns.filter(c => !!c.seatLabel) as ParsedSeat[]
//       ),
//     [parsedLayout]
//   );
//
//   const toggleSeat = (seat: ParsedSeat) => {
//     if (!seat.seatLabel) return;
//     if (!seat.available) return;
//     const label = seat.seatLabel;
//     if (selectedSeatLabels.includes(label)) {
//       setSelectedSeatLabels(prev => prev.filter(s => s !== label));
//     } else {
//       if (selectedSeatLabels.length >= maxSelectable) return;
//       setSelectedSeatLabels(prev => [...prev, label]);
//     }
//   };
//
//   const selectedSeats = useMemo(
//     () => selectedSeatLabels.map(lbl => allSeats.find(s => s.seatLabel === lbl)!).filter(Boolean),
//     [selectedSeatLabels, allSeats]
//   );
//
//   const totalFare = useMemo(
//     () => selectedSeats.reduce((s, seat) => s + (seat.fare || 0), 0),
//     [selectedSeats]
//   );
//   const totalGst = useMemo(
//     () => selectedSeats.reduce((s, seat) => s + (seat.gst || 0), 0),
//     [selectedSeats]
//   );
//
//   // parse boarding and dropoff stages (Bitla uses "~" between individual, "|" inside each)
//   const boardingStages = useMemo(() => {
//     const raw = parsedLayout.boardingStages || "";
//     return typeof raw === "string"
//       ? raw.split("~").filter(Boolean).map(item => item.split("|").map(p => p.trim()))
//       : Array.isArray(raw) ? raw : [];
//   }, [parsedLayout]);
//
//   const dropoffStages = useMemo(() => {
//     const raw = parsedLayout.dropoffStages || "";
//     return typeof raw === "string"
//       ? raw.split("~").filter(Boolean).map(item => item.split("|").map(p => p.trim()))
//       : Array.isArray(raw) ? raw : [];
//   }, [parsedLayout]);
//
//   const handleContinue = () => {
//     if (selectedSeats.length === 0 || !selectedBoarding || !selectedDropoff) return;
//     onContinue?.({
//       selectedSeats,
//       boardingStage: selectedBoarding,
//       dropoffStage: selectedDropoff,
//       totalFare,
//       totalGst,
//     });
//   };
//
//   // Tooltip helper
//   const showTooltip = (e: React.MouseEvent, seat: ParsedSeat) => {
//     const rect = (e.target as HTMLElement).getBoundingClientRect();
//     setHovered({ seat, x: rect.right + 8, y: rect.top });
//   };
//
//   return (
//     <div className="max-w-6xl mx-auto space-y-6 p-4">
//       {/* Layout preview */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Info className="w-4 h-4" /> Seat Map (Exact Coach View)
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="max-h-[520px]">
//             <div className="space-y-3">
//               {parsedLayout.rows.map((row, rowIndex) => {
//                 // number of columns = row.columns.length
//                 return (
//                   <div key={rowIndex} className="flex items-start gap-2">
//                     {row.columns.map((col, colIndex) => {
//                       // special items (no seatLabel): show icon/label
//                       const isSpecial = !col.seatLabel;
//                       const meaning = (col as any).meaning || seatIdentifiers[col.code] || col.code;
//                       return (
//                         <div
//                           key={colIndex}
//                           className={`flex flex-col items-center justify-center w-14 min-h-12 p-1 rounded border ${isSpecial ? "bg-transparent border-dashed border-gray-200" : ` ${colorForSeat(col)} border`}`}
//                         >
//                           {isSpecial ? (
//                             <div className="flex flex-col items-center text-xs text-muted-foreground">
//                               {/* Icon for some known special codes */}
//                               {col.code === ".GY" && <div className="text-[10px] text-center">— Gangway —</div>}
//                               {col.code === "DOOR" && <DoorOpen className="w-4 h-4 text-yellow-600" />}
//                               {col.code?.startsWith(".DR") && <div className="text-[11px]">Driver</div>}
//                               {col.code?.startsWith(".WR") && <div className="text-[11px]">Washroom</div>}
//                               {/* fallback */}
//                               {![".GY", "DOOR"].includes(col.code) && !col.code?.startsWith(".DR") && !col.code?.startsWith(".WR") && (
//                                 <div className="text-[10px] text-center">{meaning}</div>
//                               )}
//                             </div>
//                           ) : (
//                             <button
//                               type="button"
//                               onClick={() => toggleSeat(col)}
//                               onMouseEnter={(e) => showTooltip(e, col)}
//                               onMouseLeave={() => setHovered(null)}
//                               className={`w-full h-full flex flex-col items-center justify-center gap-0 p-1 rounded focus:outline-none ${col.available ? "hover:scale-105" : "cursor-not-allowed opacity-60"}`}
//                               aria-pressed={selectedSeatLabels.includes(col.seatLabel!)}
//                             >
//                               <div className="text-xs font-medium">{col.seatLabel}</div>
//                               <div className="text-[10px] opacity-80">{col.code}</div>
//                               <div className="text-[11px] mt-1">₹{col.fare ?? 0}</div>
//                               {/* selection badge */}
//                               {selectedSeatLabels.includes(col.seatLabel!) && (
//                                 <div className="absolute -translate-y-4 translate-x-6 px-1 py-[1px] rounded text-white text-[10px] bg-blue-600">Sel</div>
//                               )}
//                             </button>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               })}
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//
//       {/* Right panel: boarding/drop & selected seats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Selected Seats */}
//         <Card className="col-span-2 md:col-span-1">
//           <CardHeader>
//             <CardTitle>Selected Seats</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex gap-2 flex-wrap">
//                 {selectedSeatLabels.length === 0 && <span className="text-sm text-muted-foreground">No seats selected</span>}
//                 {selectedSeatLabels.map(lbl => {
//                   const seat = allSeats.find(s => s.seatLabel === lbl)!;
//                   return (
//                     <div key={lbl} className="flex items-center gap-2 p-2 border rounded bg-slate-50">
//                       <div className="text-sm font-semibold">{lbl}</div>
//                       <div className="text-xs opacity-80">₹{seat.fare + (seat.gst ?? 0)}</div>
//                       <button
//                         className="text-xs text-red-600 ml-2"
//                         onClick={() => setSelectedSeatLabels(prev => prev.filter(x => x !== lbl))}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>
//
//               <div className="pt-2 border-t mt-2">
//                 <div className="flex justify-between text-sm">
//                   <div>Total Fare</div>
//                   <div>₹{totalFare.toFixed(2)}</div>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <div>Total GST</div>
//                   <div>₹{totalGst.toFixed(2)}</div>
//                 </div>
//                 <div className="flex justify-between font-semibold mt-2">
//                   <div>Grand Total</div>
//                   <div>₹{(totalFare + totalGst).toFixed(2)}</div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//
//         {/* Boarding Points */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Boarding Points</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               {boardingStages.length === 0 && <div className="text-sm text-muted-foreground">No boarding stages</div>}
//               {boardingStages.map((stageArr, i) => {
//                 // stageArr per spec: [id, time, address, landmark, contact, name] — may vary; show what exists
//                 const id = stageArr[0] ?? i;
//                 const time = stageArr[1] ?? "";
//                 const address = stageArr[2] ?? "";
//                 const contact = stageArr[4] ?? stageArr[3] ?? "";
//                 const name = stageArr[5] ?? stageArr[3] ?? "";
//                 const isSelected = selectedBoarding === id;
//                 return (
//                   <div
//                     key={i}
//                     className={`p-2 rounded border ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"} cursor-pointer`}
//                     onClick={() => setSelectedBoarding(id)}
//                   >
//                     <div className="text-xs font-semibold">{time} • {name}</div>
//                     <div className="text-xs text-muted-foreground">{address}</div>
//                     <div className="text-xs text-muted-foreground">Contact: {contact}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </CardContent>
//         </Card>
//
//         {/* Dropoff Points */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Drop Points</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               {dropoffStages.length === 0 && <div className="text-sm text-muted-foreground">No dropoff stages</div>}
//               {dropoffStages.map((stageArr, i) => {
//                 const id = stageArr[0] ?? i;
//                 const time = stageArr[1] ?? "";
//                 const address = stageArr[2] ?? "";
//                 const name = stageArr[5] ?? stageArr[3] ?? "";
//                 const contact = stageArr[4] ?? "";
//                 const isSelected = selectedDropoff === id;
//                 return (
//                   <div
//                     key={i}
//                     className={`p-2 rounded border ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"} cursor-pointer`}
//                     onClick={() => setSelectedDropoff(id)}
//                   >
//                     <div className="text-xs font-semibold">{time} • {name}</div>
//                     <div className="text-xs text-muted-foreground">{address}</div>
//                     <div className="text-xs text-muted-foreground">Contact: {contact}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//
//       <div className="flex justify-end gap-3">
//         <Button variant="secondary" onClick={() => { setSelectedSeatLabels([]); setSelectedBoarding(null); setSelectedDropoff(null); }}>
//           Reset
//         </Button>
//         <Button onClick={handleContinue} disabled={selectedSeats.length === 0 || !selectedBoarding || !selectedDropoff}>
//           Continue
//         </Button>
//       </div>
//
//       {/* Tooltip (absolute) */}
//       {hovered && hovered.seat && (
//         <div
//           style={{ top: hovered.y, left: hovered.x }}
//           className="fixed z-50 p-2 w-56 bg-black/90 text-white text-xs rounded shadow-lg"
//         >
//           <div className="flex items-center justify-between">
//             <div className="font-semibold">{hovered.seat.seatLabel}</div>
//             <div className="text-[11px] opacity-80">{hovered.seat.code}</div>
//           </div>
//           <div className="text-[12px] mt-1">{seatIdentifiers[hovered.seat.code] ?? hovered.seat.code}</div>
//           <div className="flex justify-between mt-2">
//             <div>Fare</div>
//             <div>₹{hovered.seat.fare ?? 0}</div>
//           </div>
//           <div className="flex justify-between text-[12px]">
//             <div>GST</div>
//             <div>₹{hovered.seat.gst ?? 0}</div>
//           </div>
//           <div className="mt-2 text-[12px]">Status: {hovered.seat.available ? "Available" : "Booked/Blocked"}</div>
//         </div>
//       )}
//     </div>
//   );
// }
//
//
// src/components/BusLayout.tsx
// import { useMemo, useState } from "react";
// import type {
//   ParsedBusData,
//   Seat,
//   ParsedBusLayout,
//   ParsedStage
// } from "@/repositories/bitla.helper.methods";
//
// type Props = {
//   parsed: ParsedBusData; // output of parseBusData(apiResponse)
//   maxSelectable?: number;
//   onContinue?: (payload: {
//     selectedSeats: Seat[];
//     boarding?: ParsedStage | null;
//     dropoff?: ParsedStage | null;
//     totalFare: number;
//     totalGst: number;
//   }) => void;
// };
//
// export default function BusLayout({ parsed, maxSelectable = 6, onContinue }: Props) {
//   const layout = parsed.bus_layout;
//   const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
//   const [hover, setHover] = useState<{ seat: Seat; x: number; y: number } | null>(null);
//   const [selectedBoardingIndex, setSelectedBoardingIndex] = useState<number | null>(null);
//   const [selectedDropIndex, setSelectedDropIndex] = useState<number | null>(null);
//
//   const allSeatsList = useMemo(
//     () => layout.rows.flatMap(r => r.columns).filter(c => c.isSeat) as Seat[],
//     [layout.rows]
//   );
//
//   function toggleSeat(label: string) {
//     const s = allSeatsList.find(x => x.seatNumber === label);
//     if (!s) return;
//     if (!s.isAvailable) return;
//
//     setSelectedLabels(prev => {
//       if (prev.includes(label)) return prev.filter(x => x !== label);
//       if (prev.length >= maxSelectable) return prev;
//       return [...prev, label];
//     });
//   }
//
//   const selectedSeats = selectedLabels.map(lbl => allSeatsList.find(s => s.seatNumber === lbl)!).filter(Boolean);
//
//   const totalFare = selectedSeats.reduce((acc, s) => acc + (s.fare ?? 0), 0);
//   const totalGst = selectedSeats.reduce((acc, s) => acc + (s.gst ?? 0), 0);
//
//   const boardingStages = layout.boardingStages;
//   const dropoffStages = layout.dropoffStages;
//
//   const handleContinue = () => {
//     if (selectedSeats.length === 0) return;
//     const boarding = selectedBoardingIndex !== null ? boardingStages[selectedBoardingIndex] : null;
//     const dropoff = selectedDropIndex !== null ? dropoffStages[selectedDropIndex] : null;
//     onContinue?.({
//       selectedSeats,
//       boarding,
//       dropoff,
//       totalFare,
//       totalGst,
//     });
//   };
//
//   // small helper for seat background class
//   const seatClass = (s: Seat) => {
//     if (!s.isSeat) return "bg-transparent";
//     if (s.isBlocked) return "bg-yellow-100 border-yellow-300 text-sm";
//     if (!s.isAvailable) {
//       // booked
//       if (s.gender === "F") return "bg-pink-100 border-pink-300 text-sm";
//       if (s.gender === "M") return "bg-sky-100 border-sky-300 text-sm";
//       return "bg-gray-200 border-gray-300 text-sm";
//     }
//     // available
//     if (selectedLabels.includes(s.seatNumber!)) return "bg-green-500 text-white";
//     if (s.gender === "F") return "bg-pink-50 border-pink-200";
//     if (s.gender === "M") return "bg-sky-50 border-sky-200";
//     return "bg-white border-green-200";
//   };
//
//   return (
//     <div className="mx-auto p-4 space-y-4">
//       <div className="bg-white p-4 rounded shadow border w-min">
//         <h3 className="font-semibold mb-2">Seat Map</h3>
//
//         <div className="space-y-2">
//           {layout.rows.map((row, rIdx) => (
//             <div key={rIdx} className="flex gap-2">
//               {row.columns.map((col, cIdx) => {
//                 const isSeat = !!col.isSeat && !!col.seatNumber;
//                 return (
//                   <div key={cIdx} className="relative">
//                     <div
//                       onClick={() => isSeat && col.isAvailable && toggleSeat(col.seatNumber!)}
//                       onMouseEnter={(e) => isSeat && setHover({ seat: col, x: (e.target as Element).getBoundingClientRect().left, y: (e.target as Element).getBoundingClientRect().top })}
//                       onMouseLeave={() => setHover(null)}
//                       className={`w-14 h-14 flex flex-col items-center justify-center rounded px-1 py-1 cursor-pointer select-none ${seatClass(col)} ${isSeat && "border"}`}
//                       title={isSeat ? `${col.seatNumber} • ${col.seatType}` : col.seatType ?? col.raw}
//                     >
//                       {isSeat ? (
//                         <>
//                           <div className="text-xs font-medium">{col.seatNumber}</div>
//                           <div className="text-[11px] mt-1">₹{col.fare ?? 0}</div>
//                         </>
//                       ) : (
//                         <div></div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//
//       {/* Right panel: boarding/drop + selected seats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="md:col-span-2 space-y-3">
//           <div className="bg-white p-4 rounded shadow">
//             <h4 className="font-medium mb-2">Selected Seats ({selectedSeats.length})</h4>
//             {selectedSeats.length === 0 ? (
//               <div className="text-sm text-muted-foreground">No seats selected</div>
//             ) : (
//               <div className="flex gap-2 flex-wrap">
//                 {selectedSeats.map(s => (
//                   <div key={s.seatNumber} className="p-2 rounded border bg-slate-50">
//                     <div className="font-medium">{s.seatNumber}</div>
//                     <div className="text-xs">Type: {s.seatType}</div>
//                     <div className="text-sm font-semibold">₹{s.fare}</div>
//                   </div>
//                 ))}
//               </div>
//             )}
//
//             <div className="mt-3 border-t pt-3">
//               <div className="flex justify-between">
//                 <div>Total Fare</div>
//                 <div>₹{totalFare.toFixed(2)}</div>
//               </div>
//               <div className="flex justify-between">
//                 <div>Total GST</div>
//                 <div>₹{totalGst.toFixed(2)}</div>
//               </div>
//               <div className="flex justify-between font-semibold mt-2">
//                 <div>Grand Total</div>
//                 <div>₹{(totalFare + totalGst).toFixed(2)}</div>
//               </div>
//             </div>
//           </div>
//
//           {/* Legend */}
//           <div className="bg-white p-4 rounded shadow">
//             <h4 className="font-medium mb-2">Legend</h4>
//             <div className="flex gap-4 flex-wrap">
//               <Legend color="bg-white border-green-200" label="Available" />
//               <Legend color="bg-gray-200" label="Booked" />
//               <Legend color="bg-pink-50 border-pink-200" label="Booked (Female)" />
//               <Legend color="bg-sky-50 border-sky-200" label="Booked (Male)" />
//             </div>
//           </div>
//         </div>
//
//         <div className="space-y-3">
//           {/* Boarding */}
//           <div className="bg-white p-4 rounded shadow">
//             <h4 className="font-medium mb-2">Boarding Points</h4>
//             {layout.boardingStages.length === 0 ? (
//               <div className="text-sm text-muted-foreground">No boarding stages</div>
//             ) : (
//               <div className="space-y-2">
//                 {layout.boardingStages.map((st, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setSelectedBoardingIndex(i)}
//                     className={`p-2 rounded border cursor-pointer ${selectedBoardingIndex === i ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
//                   >
//                     <div className="text-xs font-semibold">{st.time} • {st.name}</div>
//                     <div className="text-xs text-muted-foreground">{st.address}</div>
//                     <div className="text-xs text-muted-foreground">Contact: {st.contact}</div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//
//           {/* Dropoff */}
//           <div className="bg-white p-4 rounded shadow">
//             <h4 className="font-medium mb-2">Drop Points</h4>
//             {layout.dropoffStages.length === 0 ? (
//               <div className="text-sm text-muted-foreground">No dropoff stages</div>
//             ) : (
//               <div className="space-y-2">
//                 {layout.dropoffStages.map((st, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setSelectedDropIndex(i)}
//                     className={`p-2 rounded border cursor-pointer ${selectedDropIndex === i ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
//                   >
//                     <div className="text-xs font-semibold">{st.time} • {st.name}</div>
//                     <div className="text-xs text-muted-foreground">{st.address}</div>
//                     <div className="text-xs text-muted-foreground">Contact: {st.contact}</div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//
//       <div className="flex justify-end gap-2">
//         <button
//           onClick={() => { setSelectedLabels([]); setSelectedBoardingIndex(null); setSelectedDropIndex(null); }}
//           className="px-4 py-2 rounded border"
//         >
//           Reset
//         </button>
//         <button
//           onClick={handleContinue}
//           disabled={selectedSeats.length === 0 || selectedBoardingIndex === null || selectedDropIndex === null}
//           className={`px-4 py-2 rounded text-white ${selectedSeats.length === 0 || selectedBoardingIndex === null || selectedDropIndex === null ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"}`}
//         >
//           Continue
//         </button>
//       </div>
//
//       {/* Tooltip */}
//       {hover && (
//         <div style={{ position: "fixed", top: hover.y, left: hover.x + 24 }} className="z-50 p-2 bg-black text-white rounded text-xs w-52">
//           <div className="font-semibold">{hover.seat.seatNumber}</div>
//           <div className="text-[12px]">Type: {hover.seat.seatType}</div>
//           <div className="text-[12px]">Fare: ₹{hover.seat.fare ?? 0}</div>
//           <div className="text-[12px]">GST: ₹{hover.seat.gst ?? 0}</div>
//           <div className="text-[12px]">Status: {hover.seat.isAvailable ? "Available" : hover.seat.isBooked ? "Booked" : "N/A"}</div>
//           {hover.seat.gender && <div className="text-[12px]">Gender: {hover.seat.gender}</div>}
//         </div>
//       )}
//     </div>
//   );
// }
//
// function Legend({ color, label }: { color: string; label: string }) {
//   return (
//     <div className="flex items-center gap-2">
//       <div className={`w-6 h-6 rounded border ${color}`} />
//       <div className="text-sm">{label}</div>
//     </div>
//   );
// }
//
//


// import { useMemo, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { AlertCircle, Armchair, Bus, IndianRupee, MapPin, RotateCcw } from "lucide-react";
// import type {
//   ParsedBusData,
//   Seat,
//   ParsedStage,
// } from "@/repositories/bitla.helper.methods";
// import { getBerthLevel, LAYOUT } from "@/data/seat_layout_identifiers";
// import { FaMars, FaVenus } from "react-icons/fa";
// import seatAvailable from "../../assets/seat-img.jpeg";
// import seatSelected from "../../assets/Untitled design (5).png";
// import seatBooked from "../../assets/Untitled design (7).png";
// import seatLadies from "../../assets/Untitled design (6).png";
// import { useNavigate } from "react-router-dom";
// type Props = {
//   parsed: ParsedBusData;
//   maxSelectable?: number;
//   onContinue?: (payload: {
//     selectedSeats: Seat[];
//     boarding?: ParsedStage | null;
//     dropoff?: ParsedStage | null;
//     totalFare: number;
//     totalGst: number;
//   }) => void;
// };

// export default function BusLayout({
//   parsed,
//   onContinue,
// }: Props) {
//   const layout = parsed.bus_layout;
//   const maxSelectable = parsed.bus_layout.availableSeats.length;

//   const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
//   const [selectedBoardingIndex, setSelectedBoardingIndex] = useState<number | null>(null);
//   const [selectedDropIndex, setSelectedDropIndex] = useState<number | null>(null);

//   const allSeatsList = useMemo(
//     () => layout.rows.flatMap((r) => r.columns).filter((c) => c.isSeat) as Seat[],
//     [layout.rows]
//   );

//   const selectedSeats = selectedLabels
//     .map((lbl) => allSeatsList.find((s) => s.seatNumber === lbl))
//     .filter(Boolean) as Seat[];

//   const totalFare = selectedSeats.reduce((acc, s) => acc + (s.fare ?? 0), 0);
//   const totalGst = selectedSeats.reduce((acc, s) => acc + (s.gst ?? 0), 0);
//   const grandTotal = totalFare + totalGst;
// const navigate = useNavigate();
//   const allUniqueSeatTypes = useMemo(() => {
//     const set = new Set<string>();

//     allSeatsList.forEach((seat) => {
//       const type = seat.seatType?.trim();

//       // Skip if empty, null, or starts with "."
//       if (!type || type.startsWith(".")) return;

//       set.add(type);
//     });

//     return set;
//   }, [allSeatsList]);

//   const { lowerSeats, upperSeats } = useMemo(() => {
//     const lower: Seat[] = [];
//     const upper: Seat[] = [];

//     allSeatsList.forEach((seat) => {
//       const level = getBerthLevel(seat.seatType);

//       // Fallback: use z-index if seatType is missing or unknown
//       if (level === "Unknown") {
//       } else if (level === "Lower") {
//         lower.push(seat);
//       } else if (level === "Upper") {
//         upper.push(seat);
//       }
//     });

//     return { lowerSeats: lower, upperSeats: upper };
//   }, [allSeatsList]);

//   const isComplete =
//     selectedSeats.length > 0 &&
//     selectedBoardingIndex !== null &&
//     selectedDropIndex !== null;

//   const toggleSeat = (seat: Seat) => {
//     if (!seat.isAvailable || !seat.seatNumber) return;

//     setSelectedLabels((prev) => {
//       if (prev.includes(seat.seatNumber)) {
//         return prev.filter((x) => x !== seat.seatNumber);
//       }
//       if (prev.length >= maxSelectable) return prev;
//       return [...prev, seat.seatNumber];
//     });
//   };

//   const resetAll = () => {
//     setSelectedLabels([]);
//     setSelectedBoardingIndex(null);
//     setSelectedDropIndex(null);
//   };

//   // const handleContinue = () => {
//   //   if (!isComplete) return;

//   //   const boarding = selectedBoardingIndex !== null
//   //     ? layout.boardingStages[selectedBoardingIndex]
//   //     : null;
//   //   const dropoff = selectedDropIndex !== null
//   //     ? layout.dropoffStages[selectedDropIndex]
//   //     : null;

//   //   onContinue?.({
//   //     selectedSeats,
//   //     boarding,
//   //     dropoff,
//   //     totalFare,
//   //     totalGst,
//   //   });
//   // };

//   const handleContinue = () => {
//   if (!isComplete) return;

//   const boarding =
//     selectedBoardingIndex !== null
//       ? layout.boardingStages[selectedBoardingIndex]
//       : null;

//   const dropoff =
//     selectedDropIndex !== null
//       ? layout.dropoffStages[selectedDropIndex]
//       : null;

//   navigate("/booking-details", {
//     state: {
//       selectedSeats: selectedSeats.map((s) => s.seatNumber), // 🔥 FIX
//       boardingPoint: boarding,
//       droppingPoint: dropoff,
//       totalPrice: totalFare + totalGst,
//     },
//   });
// };

//   const getSeatStyle = (seat: Seat) => {
//     if (!seat.isSeat) return "bg-transparent";

//     if (!seat.isAvailable) {
//       if (seat.gender === "F") return "bg-pink-100 outline-pink-300";
//       if (seat.gender === "M") return "bg-sky-100 outline-sky-300";
//       return "bg-gray-200 outline-gray-300";
//     }

//     if (selectedLabels.includes(seat.seatNumber!)) {
//       return "bg-emerald-500 text-white outline-emerald-600 shadow-lg";
//     }

//     if (seat.gender === "F") return "bg-pink-50 outline-pink-300 hover:bg-pink-100";
//     if (seat.gender === "M") return "bg-sky-50 outline-sky-300 hover:bg-sky-100";

//     return "bg-white outline-green-300 hover:bg-green-50 shadow-sm";
//   };



//   return (
//     <TooltipProvider>
//       <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-8">
//         {/* Header */}
//         <Card>
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <Bus className="w-8 h-8 text-primary" />
//                 <div>
//                   <CardTitle className="text-2xl">Select Seats</CardTitle>
//                   <CardDescription>
//                     {allSeatsList.filter((s) => s.isAvailable).length} seats available • Max{" "}
//                     {maxSelectable} per booking
//                   </CardDescription>
//                 </div>
//               </div>
//               <Badge variant="secondary" className="text-lg px-4">
//                 {selectedSeats.length}/{maxSelectable} Selected
//               </Badge>
//             </div>
//           </CardHeader>
//         </Card>

//         <div className="grid lg:grid-cols-3 gap-4">
//           {/* Left: Seat Layout */}
//           <div className="lg:col-span-2 space-y-4">
//             <Card className="overflow-hidden">
//               <CardHeader className="space-y-4 border-b mb-4">
//                 <CardTitle>Seat Layout</CardTitle>
//                 <div className="flex items-center gap-6">
//                   <div className="flex items-center gap-2">
//                     <div className="w-5 h-5 rounded bg-white border-2 border-green-300" />
//                     <span className="text-sm">Available</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-5 h-5 rounded bg-emerald-500" />
//                     <span className="text-sm">Selected</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-5 h-5 rounded bg-pink-100 border-pink-300" />
//                     <span className="text-sm">Ladies Booked</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-5 h-5 rounded bg-gray-200" />
//                     <span className="text-sm">Booked</span>
//                   </div>
//                 </div>
//               </CardHeader>
// <CardContent className="flex flex-wrap gap-4 justify-center">
//                   {(["lower", "upper"] as const).map((seatType) => {
//                   if (seatType === "lower" && !lowerSeats.length) return null;
//                   if (seatType === "upper" && !upperSeats.length) return null;
//                   return (
//                     <div className="flex flex-col justify-start items-center gap-4">
//                       <h3 className="text-sm font-semibold">{seatType === "lower" ? "Lower" : "Upper"} Berth</h3>
//                       <div className="border border-gray-200 p-4 w-[180px]">
//                         {layout.rows.map((row, rIdx) => (
//                           <div key={rIdx} className="flex gap-[2px]">
//                             {row.columns.map((cell, cIdx) => {
//                               const seat = cell as Seat;
//                               const isSeat = seat.isSeat && seat.seatNumber && seatType == "lower" ? lowerSeats.includes(seat) : upperSeats.includes(seat);

//                               if (!isSeat) {
//                                 if (seatType.toUpperCase() != getBerthLevel(seat.seatType) && getBerthLevel(seat.seatType) != "Unknown") return null;
//                                 return (
//                                   <div className="p-2">
//                                     <div key={cIdx} className="w-8 h-8" />
//                                   </div>
//                                 );
//                               }

//                               return (
//                                 <Tooltip key={cIdx}>
//                                   <TooltipTrigger asChild>
//                                     <div>
//                                       <div
//                                         onClick={() => toggleSeat(seat)}
//                                         className="cursor-pointer flex items-center justify-center"
//                                       >
//                                         <img
//                                           src={
//                                             !seat.isAvailable
//                                               ? seatBooked
//                                               : selectedLabels.includes(seat.seatNumber!)
//                                                 ? seatSelected
//                                                 : seat.gender === "F"
//                                                   ? seatLadies
//                                                   : seatAvailable
//                                           }
//                                           alt="seat"
//                                           className="w-14 h-14 object-contain"
//                                         />
//                                       </div>
//                                     </div>
//                                   </TooltipTrigger>
//                                   <TooltipContent side="top" className="text-sm">
//                                     <div className="space-y-1">
//                                       <p className="font-bold">Seat {seat.seatNumber}</p>
//                                       <p>Type: {seat.seatType || "Standard"}</p>
//                                       <p>Fare: ₹{seat.fare} + ₹{seat.gst} GST</p>
//                                       <p>Status: {seat.isAvailable ? "Available" : "Booked"}</p>
//                                       {seat.gender && <Badge variant="outline">Gender: {seat.gender === "F" ? "Female" : "Male"}</Badge>}
//                                     </div>
//                                   </TooltipContent>
//                                 </Tooltip>
//                               );
//                             })}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )
//                 })/*}
//                 {/*
//                 <div className="space-y-2">
//                   {layout.rows.map((row, rIdx) => (
//                     <div key={rIdx} className="flex gap-2">
//                       {row.columns.map((cell, cIdx) => {
//                         const seat = cell as Seat;
//                         const isSeat = seat.isSeat && seat.seatNumber;

//                         if (!isSeat) {
//                           return <div key={cIdx} className="w-16 h-16" />;
//                         }

//                         return (
//                           <Tooltip key={cIdx}>
//                             <TooltipTrigger asChild>
//                               <div
//                                 onClick={() => toggleSeat(seat)}
//                                 className={`
//                                     w-16 h-16 rounded-lg border-2 cursor-pointer
//                                     flex flex-col items-center justify-center text-xs font-semibold
//                                     transition-all transform
//                                     ${getSeatStyle(seat)}
//                                   `}
//                               >
//                                 <div>{seat.seatNumber}</div>
//                                 <div className="text-[10px] opacity-80 mt-1">
//                                   ₹{seat.fare}
//                                 </div>
//                               </div>
//                             </TooltipTrigger>
//                             <TooltipContent side="top" className="text-sm">
//                               <div className="space-y-1">
//                                 <p className="font-bold">Seat {seat.seatNumber}</p>
//                                 <p>Type: {seat.seatType || "Standard"}</p>
//                                 <p>Fare: ₹{seat.fare} + ₹{seat.gst} GST</p>
//                                 <p>Status: {seat.isAvailable ? "Available" : "Booked"}</p>
//                                 {seat.gender && <Badge variant="outline">Gender: {seat.gender === "F" ? "Female" : "Male"}</Badge>}
//                               </div>
//                             </TooltipContent>
//                           </Tooltip>
//                         );
//                       })}
//                     </div>
//                   ))}
//                 </div>
//                 */}
//               </CardContent>
//             </Card>

//             {/* Selected Seats Summary */}
//             {selectedSeats.length > 0 && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     Selected Seats ({selectedSeats.length})
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {selectedSeats.length === 0 ? (
//                     <p className="text-center text-muted-foreground py-8">
//                       No seats selected
//                     </p>
//                   ) : (
//                     <>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedSeats.map((s) => (
//                           <Badge key={s.seatNumber} variant="default" className="text-sm">
//                             {s.seatNumber}
//                           </Badge>
//                         ))}
//                       </div>

//                       <Separator />

//                       <div className="space-y-2">
//                         <div className="flex justify-between text-sm">
//                           <span>Base Fare</span>
//                           <span>₹{totalFare}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span>GST</span>
//                           <span>₹{totalGst}</span>
//                         </div>
//                         <div className="pt-3 border-t flex justify-between font-bold text-lg">
//                           <span>Total</span>
//                           <span className="text-primary flex items-center">
//                             <IndianRupee className="w-5 h-5" />
//                             {grandTotal}
//                           </span>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-6 flex flex-col justify-between">

//             <div className="space-y-4">
//               {/* Boarding Point */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg flex items-center gap-2">
//                     <MapPin className="w-5 h-5" />
//                     Boarding Point
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {layout.boardingStages.map((stage, i) => (
//                     <div
//                       key={i}
//                       onClick={() => setSelectedBoardingIndex(i)}
//                       className={`
//                         p-3 rounded-lg border cursor-pointer mb-2 transition-all
//                         ${selectedBoardingIndex === i
//                           ? "border-primary bg-primary/10"
//                           : "border-gray-200 hover:bg-gray-50"}
//                       `}
//                     >
//                       <p className="font-semibold text-sm">{stage.time} • {stage.name}</p>
//                       <p className="text-xs text-muted-foreground mt-1">{stage.address}</p>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>

//               {/* Dropoff Point */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg flex items-center gap-2">
//                     <MapPin className="w-5 h-5" />
//                     Dropping Point
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {layout.dropoffStages.map((stage, i) => (
//                     <div
//                       key={i}
//                       onClick={() => setSelectedDropIndex(i)}
//                       className={`
//                         p-3 rounded-lg border cursor-pointer mb-2 transition-all
//                         ${selectedDropIndex === i
//                           ? "border-primary bg-primary/5"
//                           : "border-gray-200 hover:bg-gray-50"}
//                       `}
//                     >
//                       <p className="font-semibold text-sm">{stage.time} • {stage.name}</p>
//                       <p className="text-xs text-muted-foreground mt-1">{stage.address}</p>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-3">
//               <div className="flex gap-3">
//                 <Button variant="outline" onClick={resetAll} className="flex-1">
//                   Reset
//                 </Button>
//                 <Button
//                   className="flex-1"
//                   disabled={!isComplete}
//                   onClick={handleContinue}
//                 >
//                   Continue to Book
//                 </Button>
//               </div>

//               {!isComplete && (
//                 <div className="flex items-center gap-2 text-2 text-sm text-muted-foreground bg-amber-50 p-3 rounded-lg">
//                   <AlertCircle className="w-4 h-4 text-amber-600" />
//                   <span>Please select seat, boarding & dropping point</span>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// }


import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircle, Bus, IndianRupee, MapPin } from "lucide-react";
import type {
  ParsedBusData,
  Seat,
  ParsedStage,
} from "@/repositories/bitla.helper.methods";
import { getBerthLevel } from "@/data/seat_layout_identifiers";
import seatAvailable from "../../assets/seat-img.jpeg";
import seatSelected from "../../assets/Untitled design (5).png";
import seatBooked from "../../assets/Untitled design (7).png";
import seatLadies from "../../assets/Untitled design (6).png";
import { useNavigate } from "react-router-dom";

type Props = {
  parsed: ParsedBusData;
  maxSelectable?: number;
  onContinue?: (payload: {
    selectedSeats: Seat[];
    boarding?: ParsedStage | null;
    dropoff?: ParsedStage | null;
    totalFare: number;
    totalGst: number;
  }) => void;
};

export default function BusLayout({ parsed }: Props) {
  const navigate = useNavigate();
  const layout = parsed.bus_layout;
  const maxSelectable = parsed.bus_layout.availableSeats.length;

  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedBoardingIndex, setSelectedBoardingIndex] = useState<number | null>(null);
  const [selectedDropIndex, setSelectedDropIndex] = useState<number | null>(null);

  const allSeatsList = useMemo(
    () => layout.rows.flatMap((r) => r.columns).filter((c) => c.isSeat) as Seat[],
    [layout.rows]
  );

  const selectedSeats = selectedLabels
    .map((lbl) => allSeatsList.find((s) => s.seatNumber === lbl))
    .filter(Boolean) as Seat[];

  const totalFare = selectedSeats.reduce((acc, s) => acc + (s.fare ?? 0), 0);
  const totalGst = selectedSeats.reduce((acc, s) => acc + (s.gst ?? 0), 0);
  const grandTotal = totalFare + totalGst;

  const { lowerSeats, upperSeats } = useMemo(() => {
    const lower: Seat[] = [];
    const upper: Seat[] = [];

    allSeatsList.forEach((seat) => {
      const level = getBerthLevel(seat.seatType);
      if (level === "Lower") lower.push(seat);
      if (level === "Upper") upper.push(seat);
    });

    return { lowerSeats: lower, upperSeats: upper };
  }, [allSeatsList]);

  const isComplete =
    selectedSeats.length > 0 &&
    selectedBoardingIndex !== null &&
    selectedDropIndex !== null;

  const toggleSeat = (seat: Seat) => {
    if (!seat.isAvailable || !seat.seatNumber) return;

    setSelectedLabels((prev) => {
      if (prev.includes(seat.seatNumber!)) {
        return prev.filter((x) => x !== seat.seatNumber);
      }
      if (prev.length >= maxSelectable) return prev;
      return [...prev, seat.seatNumber!];
    });
  };

  const resetAll = () => {
    setSelectedLabels([]);
    setSelectedBoardingIndex(null);
    setSelectedDropIndex(null);
  };

  const handleContinue = () => {
    if (!isComplete) return;

    const boarding =
      selectedBoardingIndex !== null
        ? layout.boardingStages[selectedBoardingIndex]
        : null;

    const dropoff =
      selectedDropIndex !== null
        ? layout.dropoffStages[selectedDropIndex]
        : null;

    navigate("/booking-details", {
      state: {
        selectedSeats: selectedSeats.map((s) => s.seatNumber),
        boardingPoint: boarding,
        droppingPoint: dropoff,
        totalPrice: totalFare + totalGst,
      },
    });
  };

  return (
    <TooltipProvider>
      <div className="mx-auto w-full max-w-full space-y-5 overflow-hidden p-2 sm:p-3 lg:p-4">
        <Card className="w-full overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <Bus className="h-7 w-7 shrink-0 text-primary" />
                <div className="min-w-0">
                  <CardTitle className="text-lg sm:text-xl">Select Seats</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {allSeatsList.filter((s) => s.isAvailable).length} seats available • Max{" "}
                    {maxSelectable} per booking
                  </CardDescription>
                </div>
              </div>

              <Badge variant="secondary" className="w-fit px-3 py-1 text-sm">
                {selectedSeats.length}/{maxSelectable} Selected
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="min-w-0 space-y-4">
            <Card className="w-full overflow-hidden">
              <CardHeader className="space-y-3 border-b p-4">
                <CardTitle className="text-lg">Seat Layout</CardTitle>

                <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded border-2 border-green-300 bg-white" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-emerald-500" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-pink-100" />
                    <span>Ladies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-gray-200" />
                    <span>Booked</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="w-full overflow-hidden p-3 sm:p-4">
                <div className="w-full overflow-x-auto">
                  <div className="flex w-max min-w-full justify-center gap-2 pb-2">
                    {(["lower", "upper"] as const).map((seatType) => {
                      if (seatType === "lower" && !lowerSeats.length) return null;
                      if (seatType === "upper" && !upperSeats.length) return null;

                      return (
                        <div
                          key={seatType}
                          className="flex shrink-0 flex-col items-center gap-2"
                        >
                          <h3 className="text-sm font-semibold">
                            {seatType === "lower" ? "Lower" : "Upper"} Berth
                          </h3>

                          <div className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
                            {layout.rows.map((row, rIdx) => (
                              <div key={rIdx} className="flex items-center gap-[1px] sm:gap-[2px]">
                                {row.columns.map((cell, cIdx) => {
                                  const seat = cell as Seat;
                                  const level = getBerthLevel(seat.seatType);

                                  const isSeat =
                                    seat.isSeat &&
                                    seat.seatNumber &&
                                    (seatType === "lower"
                                      ? lowerSeats.includes(seat)
                                      : upperSeats.includes(seat));

                                  if (!isSeat) {
                                    if (
                                      seatType.toUpperCase() !== level &&
                                      level !== "Unknown"
                                    ) {
                                      return null;
                                    }

                                    return (
                                      // <div key={cIdx} className="p-1 sm:p-2">
                                      //   <div className="h-7 w-7 sm:h-8 sm:w-8" />
                                      // </div>
                                      <div key={cIdx} className="p-[2px]">
  <div className="h-4 w-2 sm:h-10 sm:w-10" />
</div>
                                    );
                                  }

                                  return (
                                    <Tooltip key={cIdx}>
                                      <TooltipTrigger asChild>
                                        <div
                                          onClick={() => toggleSeat(seat)}
                                          className="flex cursor-pointer items-center justify-center p-[2px]"
                                        >
                                          <img
                                            src={
                                              !seat.isAvailable
                                                ? seatBooked
                                                : selectedLabels.includes(seat.seatNumber!)
                                                ? seatSelected
                                                : seat.gender === "F"
                                                ? seatLadies
                                                : seatAvailable
                                            }
                                            alt="seat"
                                            className="h-16 w-9 object-contain sm:h-16 sm:w-12 lg:h-24 lg:w-11"
                                          />
                                        </div>
                                      </TooltipTrigger>

                                      <TooltipContent side="top" className="text-sm">
                                        <div className="space-y-1">
                                          <p className="font-bold">
                                            Seat {seat.seatNumber}
                                          </p>
                                          <p>Type: {seat.seatType || "Standard"}</p>
                                          <p>
                                            Fare: ₹{seat.fare} + ₹{seat.gst} GST
                                          </p>
                                          <p>
                                            Status:{" "}
                                            {seat.isAvailable ? "Available" : "Booked"}
                                          </p>
                                          {seat.gender && (
                                            <Badge variant="outline">
                                              Gender:{" "}
                                              {seat.gender === "F" ? "Female" : "Male"}
                                            </Badge>
                                          )}
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedSeats.length > 0 && (
              <Card className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">
                    Selected Seats ({selectedSeats.length})
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 p-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedSeats.map((s) => (
                      <Badge key={s.seatNumber} variant="default" className="text-sm">
                        {s.seatNumber}
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Fare</span>
                      <span>₹{totalFare}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>GST</span>
                      <span>₹{totalGst}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3 text-lg font-bold">
                      <span>Total</span>
                      <span className="flex items-center text-primary">
                        <IndianRupee className="h-5 w-5" />
                        {grandTotal}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="min-w-0 space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  Boarding Point
                </CardTitle>
              </CardHeader>

              <CardContent className="max-h-[260px] overflow-y-auto p-4 pt-0">
                {layout.boardingStages.map((stage, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedBoardingIndex(i)}
                    className={`mb-2 cursor-pointer rounded-lg border p-3 transition-all ${
                      selectedBoardingIndex === i
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {stage.time} • {stage.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stage.address}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  Dropping Point
                </CardTitle>
              </CardHeader>

              <CardContent className="max-h-[260px] overflow-y-auto p-4 pt-0">
                {layout.dropoffStages.map((stage, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedDropIndex(i)}
                    className={`mb-2 cursor-pointer rounded-lg border p-3 transition-all ${
                      selectedDropIndex === i
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {stage.time} • {stage.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stage.address}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 rounded-xl bg-white p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={resetAll}>
                  Reset
                </Button>
                <Button disabled={!isComplete} onClick={handleContinue}>
                  Continue
                </Button>
              </div>

              {!isComplete && (
                <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
                  <span>Please select seat, boarding & dropping point</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
