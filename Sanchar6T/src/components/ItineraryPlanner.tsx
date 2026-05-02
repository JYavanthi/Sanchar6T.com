// import React, { useState } from "react";
// import { MapPin, Clock, Activity, Coffee, Star } from "lucide-react";

// const ItineraryPlanner = () => {
//   const [selectedPackage, setSelectedPackage] = useState("");
//   const [itinerary, setItinerary] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = () => {
//     if (!selectedPackage) {
//       alert("Please select a package");
//       return;
//     }

//     setLoading(true);
//     setItinerary([]);

//     // Simulate delay for "AI generation"
//     setTimeout(() => {
//       let generated = [];

//       if (selectedPackage === "TirupatiSrikalahasti") {
//         generated = [
//           {
//             day: "Day 01",
//             activities: [
//               { icon: <Clock />, text: "07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey." }
//             ]
//           },
//           {
//             day: "Day 02",
//             activities: [
//               { icon: <Clock />, text: "Early morning arrival in Tirupati." },
//               { icon: <Activity />, text: "Check into hotel for freshening up (45-60 mins, 2 members per room)." },
//               { icon: <Coffee />, text: "Breakfast at hotel." },
//               { icon: <MapPin />, text: "Proceed to Tirumala by APSRTC Non A/C bus." },
//               { icon: <Clock />, text: "1 hour allotted for Tonsure (Head Shave/Mundan)." },
//               { icon: <Activity />, text: "Dharshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (2-3 hrs). Laddu Prasadam provided." },
//               { icon: <MapPin />, text: "Return to hotel for lunch." },
//               { icon: <Activity />, text: "Visit Padmavathi Ammavaru Temple." },
//               { icon: <Clock />, text: "Evening free / local temple visits. Overnight stay." }
//             ]
//           },
//           {
//             day: "Day 03",
//             activities: [
//               { icon: <Clock />, text: "Check out from hotel, proceed to Srikalahasti Temple for Rahu-Ketu Pooja and darshan." },
//               { icon: <Coffee />, text: "Lunch en route." },
//               { icon: <MapPin />, text: "Return to Bangalore via A/C Sleeper Bus. Arrival by late night." }
//             ]
//           }
//         ];
//       } else if (selectedPackage === "TirupatiPakage") {
//         generated = [
//           {
//             day: "Day 01",
//             activities: [
//               { icon: <Clock />, text: "07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey." }
//             ]
//           },
//           {
//             day: "Day 02",
//             activities: [
//               { icon: <Clock />, text: "Early morning arrival in Tirupati." },
//               { icon: <Activity />, text: "Check into hotel for freshening up (45-60 mins, 2 members per room)." },
//               { icon: <Coffee />, text: "Breakfast at hotel." },
//               { icon: <MapPin />, text: "Proceed to Tirumala via APSRTC Non A/C bus." },
//               { icon: <Clock />, text: "1 hour allotted for Tonsure (Head Shave/Mundan)." },
//               { icon: <Activity />, text: "Dharshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (2-3 hrs). Laddu Prasadam provided." },
//               { icon: <MapPin />, text: "Return to hotel for lunch." },
//               { icon: <Activity />, text: "Padmavathi Ammavaru darshana depending on time." },
//               { icon: <MapPin />, text: "Return to Bangalore via A/C Sleeper Bus. Arrival same night." }
//             ]
//           }
//         ];
//       }

//       setItinerary(generated);
//       setLoading(false);
//     }, 1200); // 1.2s delay for effect
//   };

//   return (
//     <section className="max-w-5xl mx-auto p-6 font-sans">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Info Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-3 text-[#226cb2]">
//             Plan Your Pilgrimage Trip
//           </h2>
//           <p className="text-gray-700 flex items-center gap-2">
//             <Star className="text-[#226cb2]" />
//             <span>Choose your package below and get a beautifully detailed itinerary for your spiritual journey. </span>
           
//           </p>
//         </div>

//         {/* Right Form Section */}
//         <div className="flex-1 bg-white shadow p-6 rounded-xl">
//           <h2 className="font-semibold text-lg mb-4 text-[#226cb2]">
//             Select Package
//           </h2>

//           <div className="relative mb-4">
//             <MapPin className="absolute left-3 top-3 h-6 w-6 text-[#226cb2]" />
//             <select
//               value={selectedPackage}
//               onChange={(e) => setSelectedPackage(e.target.value)}
//               className="w-full border border-gray-300 rounded-md p-2 text-gray-700 text-lg pl-10"
//             >
//               <option value="">Pick Your Destination</option>
//               <option value="TirupatiSrikalahasti">
//                 Tirupati & Srikalahasti - 2 Days / 2 Nights
//               </option>
//               <option value="TirupatiPakage">
//                 Tirupati - 2 Days / 1 Night
//               </option>
//             </select>
//           </div>

//           <button
//             onClick={handleGenerate}
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 text-lg transition"
//           >
//             {loading ? "Generating..." : "Generate Itinerary"}
//           </button>
//         </div>
//       </div>

//       {/* Output Itinerary */}
//       {loading && (
//         <div className="mt-6 flex justify-center items-center">
//           <div className="loader border-t-4 border-b-4 border-yellow-400 rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {!loading && itinerary.length > 0 && (
//         <div className="mt-6 space-y-6">
//           {itinerary.map((dayItem, idx) => (
//             <div key={idx} className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
//               <h3 className="text-xl font-bold text-[#226cb2] mb-3">{dayItem.day}</h3>
//               <ul className="space-y-2">
//                 {dayItem.activities.map((act, i) => (
//                   <li key={i} className="flex items-start gap-2 text-gray-800">
//                     <span className="mt-1 text-yellow-600">{act.icon}</span>
//                     <span>{act.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Loader Styles */}
//       <style>{`
//         .loader {
//           border-top-color: transparent;
//           border-bottom-color: transparent;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ItineraryPlanner;

import React, { useState } from "react";
import { MapPin, Clock, Activity, Coffee, Star } from "lucide-react";

const ItineraryPlanner = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!selectedPackage) {
      alert("Please select a package");
      return;
    }

    setLoading(true);
    setItinerary([]);

    // Simulate delay for "AI generation"
    setTimeout(() => {
      let generated = [];

      if (selectedPackage === "TirupatiSrikalahasti") {
        generated = [
          {
            day: "Day 01",
            activities: [
              { icon: <Clock />, text: "07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey." }
            ]
          },
          {
            day: "Day 02",
            activities: [
              { icon: <Clock />, text: "Early morning arrival in Tirupati." },
              { icon: <Activity />, text: "Check into hotel for freshening up (45-60 mins, 2 members per room)." },
              { icon: <Coffee />, text: "Breakfast at hotel." },
              { icon: <MapPin />, text: "Proceed to Tirumala by APSRTC Non A/C bus." },
              { icon: <Clock />, text: "1 hour allotted for Tonsure (Head Shave/Mundan)." },
              { icon: <Activity />, text: "Dharshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (2-3 hrs). Laddu Prasadam provided." },
              { icon: <MapPin />, text: "Return to hotel for lunch." },
              { icon: <Activity />, text: "Visit Padmavathi Ammavaru Temple." },
              { icon: <Clock />, text: "Evening free / local temple visits. Overnight stay." }
            ]
          },
          {
            day: "Day 03",
            activities: [
              { icon: <Clock />, text: "Check out from hotel, proceed to Srikalahasti Temple for Rahu-Ketu Pooja and darshan." },
              { icon: <Coffee />, text: "Lunch en route." },
              { icon: <MapPin />, text: "Return to Bangalore via A/C Sleeper Bus. Arrival by late night." }
            ]
          }
        ];
      } else if (selectedPackage === "TirupatiPakage") {
        generated = [
          {
            day: "Day 01",
            activities: [
              { icon: <Clock />, text: "07:30 PM: Departure from Bangalore Majestic Bus Stand to Tirupati via A/C Sleeper Bus. Overnight journey." }
            ]
          },
          {
            day: "Day 02",
            activities: [
              { icon: <Clock />, text: "Early morning arrival in Tirupati." },
              { icon: <Activity />, text: "Check into hotel for freshening up (45-60 mins, 2 members per room)." },
              { icon: <Coffee />, text: "Breakfast at hotel." },
              { icon: <MapPin />, text: "Proceed to Tirumala via APSRTC Non A/C bus." },
              { icon: <Clock />, text: "1 hour allotted for Tonsure (Head Shave/Mundan)." },
              { icon: <Activity />, text: "Dharshanam at Tirumala Sri Venkateshwara Swamy Devasthanam (2-3 hrs). Laddu Prasadam provided." },
              { icon: <MapPin />, text: "Return to hotel for lunch." },
              { icon: <Activity />, text: "Padmavathi Ammavaru darshana depending on time." },
              { icon: <MapPin />, text: "Return to Bangalore via A/C Sleeper Bus. Arrival same night." }
            ]
          }
        ];
      }

      setItinerary(generated);
      setLoading(false);
    }, 1200); // 1.2s delay for effect
  };

  return (
    <section className="max-w-5xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3 text-[#226cb2]">
            Plan Your Pilgrimage Trip
          </h2>
          <p className="text-gray-700 flex items-center gap-2">
            <Star className="text-[#226cb2]" />
            <span>Choose your package below and get a beautifully detailed itinerary for your spiritual journey. </span>
           
          </p>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-white shadow p-6 rounded-xl">
          <h2 className="font-semibold text-lg mb-4 text-[#226cb2]">
            Select Package
          </h2>

          <div className="relative mb-4">
            <MapPin className="absolute left-3 top-3 h-6 w-6 text-[#226cb2]" />
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 text-lg pl-10"
            >
              <option value="">Pick Your Destination</option>
              <option value="TirupatiSrikalahasti">
                Tirupati & Srikalahasti - 2 Days / 2 Nights
              </option>
              <option value="TirupatiPakage">
                Tirupati - 2 Days / 1 Night
              </option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 text-lg transition"
          >
            {loading ? "Generating..." : "Generate Itinerary"}
          </button>
        </div>
      </div>

      {/* Output Itinerary */}
      {loading && (
        <div className="mt-6 flex justify-center items-center">
          <div className="loader border-t-4 border-b-4 border-yellow-400 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {!loading && itinerary.length > 0 && (
        <div className="mt-6 space-y-6">
          {itinerary.map((dayItem, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#226cb2] mb-3">{dayItem.day}</h3>
              <ul className="space-y-2">
                {dayItem.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-800">
                    <span className="mt-1 text-yellow-600">{act.icon}</span>
                    <span>{act.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Loader Styles */}
      <style>{`
        .loader {
          border-top-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ItineraryPlanner;
