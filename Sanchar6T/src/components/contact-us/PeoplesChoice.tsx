// import tirupatiImage from "@/assets/tirupati.jpg";
// import shirdiImage from "@/assets/shirdi.jpg";
// import maduraiImage from "@/assets/madurai.jpg";
// import coorgImage from "@/assets/coorg.jpg";
// import kashiImage from "@/assets/kashi.jpg";
// import { ChevronDown } from "lucide-react";

// const destinations = [
//   { name: "Tirupati", image: tirupatiImage },
//   { name: "Shirdi", image: shirdiImage },
//   { name: "Madurai\nMeenakshi", image: maduraiImage },
//   { name: "Coorg", image: coorgImage },
//   { name: "Kashi", image: kashiImage },
// ];

// const PeoplesChoice = () => {
//   return (
//     <div className="bg-[#F5F5F5]">
//       <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
//         People's Choice
//       </h2>
      
//       <div className="space-y-4">
//         {destinations.map((destination, index) => (
//   <div key={index} className="flex flex-col items-center p-4">
//     <div className="w-16 h-16 rounded-full overflow-hidden">
//       <img 
//         src={destination.image} 
//         alt={destination.name}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="mt-2">
//       <h3 className="font-medium text-foreground text-center whitespace-pre-line">
//         {destination.name}
//       </h3>
//     </div>
//   </div>
// ))}

//         {/* Expand indicator */}
//         <div className="flex justify-center pt-2">
//           <ChevronDown className="w-6 h-6 text-muted-foreground" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeoplesChoice;




import tirupatiImage from "@/assets/tirupati.jpg";
import shirdiImage from "@/assets/shirdi.jpg";
import maduraiImage from "@/assets/madurai.jpg";
import coorgImage from "@/assets/coorg.jpg";
import kashiImage from "@/assets/kashi.jpg";
import { ChevronDown } from "lucide-react";

const destinations = [
  { name: "Tirupati", image: tirupatiImage },
  { name: "Shirdi", image: shirdiImage },
  { name: "Madurai\nMeenakshi", image: maduraiImage },
  { name: "Coorg", image: coorgImage },
  { name: "Kashi", image: kashiImage },
];

const PeoplesChoice = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
        People's Choice
      </h2>
      
      <div className="space-y-4 px-2">
        {destinations.map((destination, index) => (
          <div key={index} className="flex flex-col items-center py-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium text-foreground text-center whitespace-pre-line">
                {destination.name}
              </h3>
            </div>
          </div>
        ))}

        {/* Expand indicator */}
        <div className="flex justify-center pt-2">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default PeoplesChoice;
