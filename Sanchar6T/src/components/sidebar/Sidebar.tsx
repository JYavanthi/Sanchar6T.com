// import React, { useEffect, useMemo, useState } from 'react';
// import { Search, Clock, Sun, Moon, Sunset, Sunrise, Snowflake, Wind } from 'lucide-react';
// import { useSchedulesStore, useSearchStore } from '@/states/store';
// import { useSearchParams } from 'react-router-dom';
// import { Card, CardContent } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { X } from 'lucide-react';
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
// import { Label } from '../ui/label';


// const Sidebar = () => {
//   const { origin, destination } = useSearchStore();
//   const { schedules, getStagePoints } = useSchedulesStore();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { boarding, dropoff } = getStagePoints();

//   const hasActiveFilters = useMemo(() => {
//     const core = ['date', 'from', 'to'];
//     for (const key of searchParams.keys()) {
//       if (!core.includes(key)) return true;
//     }
//     return false;
//   }, [searchParams]);

//   const handleClearAll = () => {
//     const newParams = new URLSearchParams();
//     ['date', 'from', 'to'].forEach(key => {
//       const val = searchParams.get(key);
//       if (val) newParams.set(key, val);
//     });
//     setSearchParams(newParams);
//   };

//   return (
//     <Card className="w-full border rounded-none flex flex-col h-min mb-8"
//     >

//       <div className="p-4 border-b flex items-center justify-between shrink-0 w-min-[300px]">
//         <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
//         {hasActiveFilters && (
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleClearAll}
//             className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
//           >
//             <X className="w-4 h-4 mr-1" />
//             Clear all
//           </Button>
//         )}
//       </div>

//       {/* Scrollable Content */}
//       <ScrollArea className="flex-1">
//         <div className=" space-y-0">
//           <ACFilter schedules={schedules} />
//           <SeatTypeFilter schedules={schedules} />


//           {origin && destination && (
//             <div className="space-y-6">
//               <div>
//                 <LocationPointsFilter type="pickup" points={boarding} locationName={origin.name} />
//                 <Separator />
//                 <div className="mt-4">
//                   <TimeRangePicker type="departure" origin={origin} />
//                 </div>
//               </div>
//               <Separator />
//             </div>
//           )}


//           {schedules && schedules.length > 0 && (
//             <>
//               <OperatorFilter schedules={schedules} />
//             </>
//           )}


//           {origin && destination && (
//             <div className='pb-4'>
//               <LocationPointsFilter type="dropoff" points={dropoff} locationName={destination.name} />
//               <Separator />
//               <div className="mt-4">
//                 <TimeRangePicker type="arrival" destination={destination} />
//               </div>
//             </div>
//           )}
//         </div>
//       </ScrollArea>
//     </Card>
//   );
// };

// export default Sidebar;


// // Inside your Sidebar or Filter component

// interface OperatorFilterProps {
//   schedules: any[];
// }

// const OperatorFilter = ({ schedules = [] }: OperatorFilterProps) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [searchTerm, setSearchTerm] = useState("");

//   // Read selected operators from URL
//   const urlOperators = searchParams.get("operators");
//   const initialSelected = urlOperators ? urlOperators.split(",").map(decodeURIComponent) : [];

//   const [selectedOperators, setSelectedOperators] = useState<string[]>(initialSelected);

//   // Keep local state in sync when URL changes (back/forward, page load)
//   useEffect(() => {
//     if (urlOperators) {
//       setSelectedOperators(urlOperators.split(",").map(decodeURIComponent));
//     } else {
//       setSelectedOperators([]);
//     }
//   }, [urlOperators]);

//   // Extract unique operators with count
//   const operatorMap = useMemo(() => {
//     const map = new Map<string, number>();
//     schedules.forEach((bus) => {
//       const name = bus?.operator_service_name?.trim();
//       if (name) {
//         map.set(name, (map.get(name) || 0) + 1);
//       }
//     });
//     return map;
//   }, [schedules]);

//   // Filtered + sorted list
//   const filteredOperators = useMemo(() => {
//     return Array.from(operatorMap.entries())
//       .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
//       .sort(([a], [b]) => a.localeCompare(b));
//   }, [operatorMap, searchTerm]);

//   const toggleOperator = (operator: string) => {
//     const newSelection = selectedOperators.includes(operator)
//       ? selectedOperators.filter((o) => o !== operator)
//       : [...selectedOperators, operator];

//     setSelectedOperators(newSelection);

//     // Update URL
//     const newParams = new URLSearchParams(searchParams);
//     if (newSelection.length > 0) {
//       newParams.set("operators", newSelection.map(encodeURIComponent).join(","));
//     } else {
//       newParams.delete("operators");
//     }
//     setSearchParams(newParams, { replace: true });
//   };

//   const clearAll = () => {
//     setSelectedOperators([]);
//     const newParams = new URLSearchParams(searchParams);
//     newParams.delete("operators");
//     setSearchParams(newParams, { replace: true });
//   };

//   return (
//     <div style={{ padding: "16px", borderBottom: "1px solid #e5e5e5" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
//         <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", margin: "0" }}>
//           Operators
//         </h4>
//         {selectedOperators.length > 0 && (
//           <button
//             type="button"
//             onClick={clearAll}
//             style={{
//               color: '#9ca3af',
//               fontSize: '16px',
//               background: 'none',
//               border: 'none',
//               cursor: selectedOperators.length > 0 ? 'pointer' : 'default',
//               opacity: selectedOperators.length > 0 ? 1 : 0.5,
//               pointerEvents: selectedOperators.length > 0 ? 'auto' : 'none',
//             }}
//           >
//             CLEAR
//           </button>
//         )}
//       </div>

//       {/* Search */}
//       <div style={{ position: 'relative', marginBottom: '12px' }}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: '100%',
//             padding: '10px 36px 10px 12px',
//             border: '1px solid #d1d5db',
//             borderRadius: '0',
//             fontSize: '16px',
//             outline: 'none',
//           }}
//         />
//         <Search
//           size={18}
//           color="#9ca3af"
//           style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
//         />
//       </div>

//       {/* List */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           maxHeight: "400px",
//           overflowY: "auto",
//         }}
//       >
//         {filteredOperators.length === 0 ? (
//           <div style={{ color: '#9ca3af', fontSize: '16px', padding: '8px 0' }}>
//             No operators found
//           </div>
//         ) : (
//           filteredOperators.map(([operator, count]) => {
//             const isChecked = selectedOperators.includes(operator);

//             return (
//               <label
//                 key={operator}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   cursor: "pointer",
//                   padding: "8px",
//                   borderRadius: "8px",
//                   transition: "all 0.2s",
//                 }}
//                 onClick={() => toggleOperator(operator)}
//               >
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={() => { }}
//                   style={{
//                     width: "18px",
//                     height: "18px",
//                     accentColor: "#2563eb",
//                     cursor: "pointer",
//                     margin: 0,
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontSize: "16px",
//                     color: "#374151",
//                     fontWeight: isChecked ? "600" : "400",
//                     flex: 1,
//                   }}
//                 >
//                   {operator}
//                 </span>
//                 <span style={{ fontSize: "14px", color: "#6b7280" }}>({count})</span>
//               </label>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };


// // components/filters/ACFilter.tsx

// interface ACFilterProps {
//   schedules: any[] | null;
// }



// interface ACFilterProps {
//   schedules: any[] | null;
// }

// const ACFilter = ({ schedules }: ACFilterProps) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const acParam = searchParams.get("ac");
//   const currentValue = acParam === "true" ? "ac" : acParam === "false" ? "non-ac" : "";

//   const handleChange = (value: "ac" | "non-ac" | "") => {
//     const newParams = new URLSearchParams(searchParams);
//     if (value === "") {
//       newParams.delete("ac");
//     } else {
//       newParams.set("ac", value === "ac" ? "true" : "false");
//     }
//     setSearchParams(newParams, { replace: true });
//   };

//   return (
// <Card className="border-0 shadow-none">
//   <CardContent className="p-4 bg-[#e8e3d3] rounded-none">

//     <h4 className="text-base font-semibold text-gray-900 mb-4">
//       AC Type
//     </h4>

//     <RadioGroup value={currentValue} onValueChange={handleChange}>
//       <div className="grid grid-cols-2 gap-4">

//         {/* AC */}
//         <Label
//           htmlFor="ac"
//           className={`
//             flex items-center justify-center gap-2
//             py-3 rounded-2xl border cursor-pointer transition-all
//             ${currentValue === "ac"
//               ? "bg-white border-gray-800"
//               : "bg-white border-gray-300 hover:border-gray-400"}
//           `}
//         >
//           <RadioGroupItem value="ac" id="ac" className="hidden" />
//           <Snowflake className="w-5 h-5" />
//           <span className="font-medium">AC</span>
//         </Label>

//         {/* NON AC */}
//         <Label
//           htmlFor="non-ac"
//           className={`
//             flex items-center justify-center gap-2
//             py-3 rounded-2xl border cursor-pointer transition-all
//             ${currentValue === "non-ac"
//               ? "bg-white border-gray-800"
//               : "bg-white border-gray-300 hover:border-gray-400"}
//           `}
//         >
//           <RadioGroupItem value="non-ac" id="non-ac" className="hidden" />
//           <Snowflake className="w-5 h-5 rotate-45" />
//           <span className="font-medium">NON-AC</span>
//         </Label>

//       </div>
//     </RadioGroup>

//   </CardContent>
//   <Separator />
// </Card>
//   );
// };


// const SeatTypeFilter = ({ schedules }: { schedules: any[] | null }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const currentType = searchParams.get("seatType"); // null | "sleeper" | "seater"

//   const handleCardClick = (type: "sleeper" | "seater") => (e: React.MouseEvent) => {
//     e.preventDefault(); // ← CRITICAL: stop label from triggering input
//     e.stopPropagation();

//     // const new URLSearchParams(searchParams);

//     if (currentType === type) {
//       searchParams.delete("seatType");
//     } else {
//       searchParams.set("seatType", type);
//     }

//     setSearchParams(searchParams, { replace: true });
//   };

//   const isSleeperActive = currentType === "sleeper";
//   const isSeaterActive = currentType === "seater";

//   return (
//     <div style={{ padding: "16px", borderBottom: "1px solid #e5e5e5" }}>
//       <h4
//         style={{
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "#1f2937",
//           marginBottom: "16px",
//         }}
//       >
//         Seat Type
//       </h4>

//       <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

//         <div
//           role="button"
//           tabIndex={0}
//           onClick={handleCardClick("sleeper")}
//           onKeyDown={(e) => e.key === "Enter" && handleCardClick("sleeper")(e)}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//             cursor: "pointer",
//             padding: "12px 16px",
//             borderRadius: "0",
//             backgroundColor: isSleeperActive ? "#f0fdf4" : "#ffffff",
//             border: `2px solid ${isSleeperActive ? "#16a34a" : "#e5e7eb"}`,
//             transition: "all 0.2s",
//             boxShadow: isSleeperActive ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
//           }}
//         >
//           <div
//             style={{
//               width: "20px",
//               height: "20px",
//               borderRadius: "50%",
//               border: `2px solid ${isSleeperActive ?
//                 "#16a34a" : "#e5e7eb"}`,
//               backgroundColor: isSleeperActive ? "#16a34a" : "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {isSleeperActive && (
//               <div style={{ width: "10px", height: "10px", backgroundColor: "white", borderRadius: "50%" }} />
//             )}
//           </div>
//           <div>
//             <div style={{ fontSize: "17px", fontWeight: "600", color: "#166534" }}>
//               Sleeper / Semi-Sleeper</div>
//             <div style={{ fontSize: "13px", color: "#6b7280" }}>SL & SS buses</div>
//           </div>
//         </div>

//         {/* SEATER ONLY */}
//         <div
//           role="button"
//           tabIndex={0}
//           onClick={handleCardClick("seater")}
//           onKeyDown={(e) => e.key === "Enter" && handleCardClick("seater")(e)}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//             cursor: "pointer",
//             padding: "12px 16px",
//             borderRadius: "0",
//             backgroundColor: isSeaterActive ? "#fefce8" : "#ffffff",
//             border: `2px solid ${isSeaterActive ? "#ca8a04" : "#e5e7eb"}`,
//             transition: "all 0.2s",
//             boxShadow: isSeaterActive ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
//           }}
//         >
//           <div
//             style={{
//               width: "20px",
//               height: "20px",
//               borderRadius: "50%",
//               border: `2px solid ${isSeaterActive ? "#ca8a04" : "#e5e7eb"}`,
//               backgroundColor: isSeaterActive ? "#ca8a04" : "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {isSeaterActive && (
//               <div style={{ width: "10px", height: "10px", backgroundColor: "white", borderRadius: "50%" }} />
//             )}
//           </div>
//           <div>
//             <div style={{ fontSize: "17px", fontWeight: "600", color: "#a16207" }}>
//               Seater Only
//             </div>
//             <div style={{ fontSize: "13px", color: "#6b7280" }}>ST buses</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };


// // components/TimeRangePicker

// interface TimeSlot {
//   label: string;
//   icon: React.ElementType;
//   after: string;
//   before: string;
// }

// const timeSlots: TimeSlot[] = [
//   { label: '12 AM - 6 AM', icon: Moon, after: '00:00', before: '06:00' },
//   { label: '6 AM - 12 PM', icon: Sunrise, after: '06:00', before: '12:00' },
//   { label: '12 PM - 6 PM', icon: Sun, after: '12:00', before: '18:00' },
//   { label: '6 PM - 12 AM', icon: Sunset, after: '18:00', before: '23:59' },
// ];

// type TimeType = 'departure' | 'arrival';

// interface TimeRangePickerProps {
//   type: TimeType;
//   origin?: { name: string };
//   destination?: { name: string };
// }

// interface TimeRangePickerProps {
//   type: TimeType;
//   origin?: { name: string };
//   destination?: { name: string };
// }

// const TimeRangePicker: React.FC<TimeRangePickerProps> = ({ type, origin, destination }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const afterKey = type === 'departure' ? 'departureAfter' : 'arrivalAfter';
//   const beforeKey = type === 'departure' ? 'departureBefore' : 'arrivalBefore';

//   const getSelectedIndex = () => {
//     const after = searchParams.get(afterKey);
//     const before = searchParams.get(beforeKey);
//     if (!after || !before) return null;
//     return timeSlots.findIndex(s => s.after === after && s.before === before);
//   };

//   const [selectedIndex, setSelectedIndex] = useState<number | null>(getSelectedIndex());

//   useEffect(() => {
//     setSelectedIndex(getSelectedIndex());
//   }, [searchParams]);

//   const handleSelect = (index: number) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (selectedIndex === index) {
//       newParams.delete(afterKey);
//       newParams.delete(beforeKey);
//       setSelectedIndex(null);
//     } else {
//       newParams.set(afterKey, timeSlots[index].after);
//       newParams.set(beforeKey, timeSlots[index].before);
//       setSelectedIndex(index);
//     }
//     setSearchParams(newParams);
//   };

//   const handleClear = () => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.delete(afterKey);
//     newParams.delete(beforeKey);
//     setSearchParams(newParams);
//   };

//   const locationName = type === 'departure' ? origin?.name : destination?.name;
//   const title = type === 'departure' ? 'Departure time' : 'Arrival time';

//   return (
//     <div className="px-4">
//       <div className="flex items-center justify-between mb-4">
//         <h4 className="text-base font-semibold text-gray-900">
//           {title} {locationName && <span className="text-gray-500 font-bold">- {locationName}</span>}
//         </h4>
//         {selectedIndex !== null && (
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleClear}
//             className="text-gray-500 hover:text-gray-700 text-sm"
//           >
//             <X className="w-4 h-4 mr-1" />
//             Clear
//           </Button>
//         )}
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         {timeSlots.map((slot, idx) => {
//           const Icon = slot.icon;
//           const isSelected = selectedIndex === idx;

//           return (
//             <button
//               key={idx}
//               onClick={() => handleSelect(idx)}
//               className={`
//                 flex flex-col items-center justify-center p-4 rounded-none border-2 transition-all
//                 ${isSelected
//                   ? 'border-primary bg-primary/10 text-primary'
//                   : 'border-gray-200 hover:border-gray-300 bg-white'
//                 }
//               `}
//             >
//               <Icon size={28} className="mb-2" strokeWidth={2} />
//               <span className={`text-sm font-medium ${isSelected ? 'font-semibold' : ''}`}>
//                 {slot.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // components/LocationPointsFilter
// type PointType = 'pickup' | 'dropoff';

// interface Point {
//   id: string | number;
//   name: string;
// }

// interface LocationPointsFilterProps {
//   type: PointType;
//   points: Point[];
//   locationName?: string; // e.g. "New York" or "Los Angeles"
// }

// const LocationPointsFilter: React.FC<LocationPointsFilterProps> = ({
//   type,
//   points,
//   locationName,
// }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchTerm, setSearchTerm] = useState('');

//   const paramKey = type === 'pickup' ? 'pickup' : 'dropoff';

//   // Get currently selected IDs from URL (e.g. "1,2,3" → ['1','2','3'])
//   const selectedIds = useMemo(() => {
//     const param = searchParams.get(paramKey);
//     return param ? param.split(',').map(id => id.trim()) : [];
//   }, [searchParams, paramKey]);

//   // Filtered points based on search
//   const filteredPoints = useMemo(() => {
//     if (!searchTerm) return points;
//     return points.filter(point =>
//       point.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [points, searchTerm]);

//   // Toggle individual point
//   const togglePoint = (id: string | number) => {
//     const idStr = String(id);
//     const newSelected = selectedIds.includes(idStr)
//       ? selectedIds.filter(x => x !== idStr)
//       : [...selectedIds, idStr];

//     const newParams = new URLSearchParams(searchParams);
//     if (newSelected.length === 0) {
//       newParams.delete(paramKey);
//     } else {
//       newParams.set(paramKey, newSelected.join(','));
//     }
//     setSearchParams(newParams);
//   };

//   // Clear all
//   const handleClear = () => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.delete(paramKey);
//     setSearchParams(newParams);
//   };

//   const title = type === 'pickup' ? 'Pick up point' : 'Drop off point';
//   const hasSelection = selectedIds.length > 0;

//   return (
//     <div style={{ padding: '16px' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
//         <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
//           {title} {locationName && <span className="text-gray-500 font-bold">- {locationName}</span>}
//         </h4>
//         {selectedIds.length > 0 && (

//           <button
//             type="button"
//             onClick={handleClear}
//             style={{
//               color: '#9ca3af',
//               fontSize: '16px',
//               background: 'none',
//               border: 'none',
//               cursor: hasSelection ? 'pointer' : 'default',
//               opacity: hasSelection ? 1 : 0.5,
//               pointerEvents: hasSelection ? 'auto' : 'none',
//             }}
//           >
//             CLEAR
//           </button>
//         )}
//       </div>

//       {/* Search Input */}
//       <div style={{ position: 'relative', marginBottom: '12px' }}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             width: '100%',
//             padding: '10px 36px 10px 12px',
//             border: '1px solid #d1d5db',
//             borderRadius: '0',
//             fontSize: '16px',
//             outline: 'none',
//           }}
//         />
//         <Search
//           size={18}
//           color="#9ca3af"
//           style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
//         />
//       </div>

//       {/* Points List */}
//       {filteredPoints.length > 0 ? (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto' }}>
//           {filteredPoints.map((point) => {
//             const idStr = String(point.id);
//             const isChecked = selectedIds.includes(idStr);

//             return (
//               <label
//                 key={point.id}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '10px',
//                   cursor: 'pointer',
//                   padding: '4px 0',
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={() => togglePoint(point.id)}
//                   style={{ margin: 0, accentColor: '#2563eb' }}
//                 />
//                 <span
//                   className='capitalize'
//                   style={{
//                     fontSize: '16px',
//                     color: isChecked ? '#1f2937' : '#4b5563',
//                     fontWeight: isChecked ? 500 : 400,
//                   }}
//                 >
//                   {point.name}
//                 </span>
//               </label>
//             );
//           })}
//         </div>
//       ) : (
//         <div style={{ color: '#9ca3af', fontSize: '16px', padding: '8px 0' }}>
//           No points found
//         </div>
//       )}
//     </div>
//   );
// };


// import { Snowflake, BedDouble, Armchair } from "lucide-react";
// import { useSearchParams } from "react-router-dom";

// const Sidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // AC state
//   const acParam = searchParams.get("ac");
//   const currentAC =
//     acParam === "true" ? "ac" : acParam === "false" ? "non-ac" : "";

//   // Seat state
//   const currentSeat = searchParams.get("seatType");

//   const handleAC = (value: "ac" | "non-ac") => {
//     const newParams = new URLSearchParams(searchParams);

//     if (currentAC === value) {
//       newParams.delete("ac");
//     } else {
//       newParams.set("ac", value === "ac" ? "true" : "false");
//     }

//     setSearchParams(newParams, { replace: true }); // ✅ important fix
//   };

//   const handleSeat = (type: "sleeper" | "seater") => {
//     const newParams = new URLSearchParams(searchParams);

//     if (currentSeat === type) {
//       newParams.delete("seatType");
//     } else {
//       newParams.set("seatType", type);
//     }

//     setSearchParams(newParams, { replace: true }); // ✅ important fix
//   };

//   return (
//     <div className="w-[300px] bg-[#e8e3d3] ">

//       {/* AI Box */}
//       <div className="bg-[#0b1a4a] text-white p-4 rounded-md mb-5 shadow-sm">
//         <h3 className="font-semibold text-lg mb-3">
//           AI Powered Travel Assistant
//         </h3>

//         <div className="flex items-center bg-white rounded-full px-3 py-2">
//           <input
//             placeholder="TRY ASKING..."
//             className="flex-1 text-sm outline-none text-black placeholder:text-gray-400"
//           />
//         </div>
//       </div>

//       {/* FILTER GRID */}
//       <div className="grid grid-cols-2 gap-3 w-[280px]">
//         {/* AC */}
//         <div
//           onClick={() => handleAC("ac")}
//           className={`flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all
//           ${currentAC === "ac"
//               ? "bg-white border-black shadow-sm"
//               : "bg-white border-gray-300 hover:border-gray-500 hover:bg-gray-50"
//             }`}
//         >
//           <Snowflake className="w-5 h-5" />
//           <span className="font-medium">AC</span>
//         </div>

//         {/* NON AC */}
//         <div
//           onClick={() => handleAC("non-ac")}
//           className={`flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all
//           ${currentAC === "non-ac"
//               ? "bg-white border-black shadow-sm"
//               : "bg-white border-gray-300 hover:border-gray-500 hover:bg-gray-50"
//             }`}
//         >
//           <Snowflake className="w-5 h-5 rotate-45" />
//           <span className="font-medium">NON-AC</span>
//         </div>

//         {/* Sleeper */}
//         <div
//           onClick={() => handleSeat("sleeper")}
//           className={`flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all
//           ${currentSeat === "sleeper"
//               ? "bg-white border-black shadow-sm"
//               : "bg-white border-gray-300 hover:border-gray-500 hover:bg-gray-50"
//             }`}
//         >
//           <BedDouble className="w-5 h-5" />
//           <span className="font-medium">Sleeper</span>
//         </div>

//         {/* Seater */}
//         <div
//           onClick={() => handleSeat("seater")}
//           className={`flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all
//           ${currentSeat === "seater"
//               ? "bg-white border-black shadow-sm"
//               : "bg-white border-gray-300 hover:border-gray-500 hover:bg-gray-50"
//             }`}
//         >
//           <Armchair className="w-5 h-5" />
//           <span className="font-medium">Seater</span>
//         </div>

//       </div>

//       {/* Discount Button */}
//       <div className="mt-5 bg-yellow-400 p-4 relative">
//         <div className="flex flex-col gap-7 w-[190px]">
//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             Discounts (30)
//           </button>

//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             AC (15)
//           </button>

//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             Single Seats (15)
//           </button>

//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             Sleeper (115)
//           </button>

//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             Women (115)
//           </button>

//           <button className="bg-white rounded-full py-2 px-4 text-left font-medium shadow-sm hover:bg-gray-100">
//             NON AC (55)
//           </button>

//         </div>

//         {/* Right Side Vertical Text */}

//       </div>

//     </div>
//   );
// };

// export default Sidebar;


import { Snowflake, BedDouble, Armchair } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const acParam = searchParams.get("ac");
  const currentAC =
    acParam === "true" ? "ac" : acParam === "false" ? "non-ac" : "";

  const currentSeat = searchParams.get("seatType");

  const handleAC = (value: "ac" | "non-ac") => {
    const newParams = new URLSearchParams(searchParams);

    if (currentAC === value) {
      newParams.delete("ac");
    } else {
      newParams.set("ac", value === "ac" ? "true" : "false");
    }

    setSearchParams(newParams, { replace: true });
  };

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
    <div className="w-full rounded-xl bg-[#e8e3d3] p-3 md:w-[300px] md:rounded-none md:p-0">
      <div className="mb-4 rounded-md bg-[#0b1a4a] p-4 text-white shadow-sm md:mb-5">
        <h3 className="mb-3 text-base font-semibold md:text-lg">
          AI Powered Travel Assistant
        </h3>

        <div className="flex items-center rounded-full bg-white px-3 py-2">
          <input
            placeholder="TRY ASKING..."
            className="flex-1 text-sm text-black outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-3 md:w-[280px]">
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

      <div className="mt-4 rounded-xl bg-yellow-400 p-3 md:mt-5 md:rounded-none md:p-4">
        <div className="grid grid-cols-2 gap-3 md:flex md:w-[190px] md:flex-col md:gap-7">
          {[
            "Discounts (30)",
            "AC (15)",
            "Single Seats (15)",
            "Sleeper (115)",
            "Women (115)",
            "NON AC (55)",
          ].map((label) => (
            <button
              key={label}
              className="rounded-full bg-white px-3 py-2 text-left text-sm font-medium shadow-sm hover:bg-gray-100 md:px-4"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;