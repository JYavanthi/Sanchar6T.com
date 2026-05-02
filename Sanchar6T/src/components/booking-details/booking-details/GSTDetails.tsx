
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

// const GSTDetails = () => {
//   const [showGST, setShowGST] = useState(false);

//   return (
//     <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
//       {/* Toggle */}
//       <div className="flex items-center space-x-2 mb-4">
//         <Switch
//           id="gst-toggle"
//           checked={showGST}
//           onCheckedChange={setShowGST}
//           className="data-[state=checked]:bg-[#008cff]" // blue toggle color
//         />
//         <Label
//           htmlFor="gst-toggle"
//           className="text-sm text-[#3D85C6] font-medium"
//         >
//           Enter GST details (optional)
//         </Label>
//       </div>

//       {/* GST Fields (only show when toggle is ON) */}
//       {showGST && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Company Number */}
//           <div>
//             <Label
//               htmlFor="company-number"
//               className="text-sm font-medium text-flixbus-text"
//             >
//               Registered Company Number
//             </Label>
//             <Input
//               id="company-number"
//               placeholder="Eg: 12ABCDE4567ABCD"
//               className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue"
//             />
//           </div>

//           {/* Company Name */}
//           <div>
//             <Label
//               htmlFor="company-name"
//               className="text-sm font-medium text-flixbus-text"
//             >
//               Registered Company Name
//             </Label>
//             <Input
//               id="company-name"
//               placeholder="Eg: ABCDE Limited"
//               className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GSTDetails;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const GSTDetails = ({ setGSTData }: { setGSTData: any }) => {
  const [showGST, setShowGST] = useState(false);
  const [companyNumber, setCompanyNumber] = useState("");
  const [companyName, setCompanyName] = useState("");

  // Lift state up whenever GST details change
  const handleChange = () => {
    setGSTData({
      RegisteredCompanyNumber: companyNumber,
      RegisteredCompanyName: companyName
    });
  };

  return (
    <div className="bg-[#4A4A4A]-card rounded-lg border border-[#4A4A4A]-light p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-[#3D85C6] font-bold">GST Details</h2>
        <Switch checked={showGST} onCheckedChange={setShowGST} />
      </div>

      {showGST && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Company Number */}
          <div>
            <Label htmlFor="companyNumber" className="text-sm font-medium text-[#3D85C6]">
              GST Number
            </Label>
            <Input
              id="companyNumber"
              placeholder="Enter GST Number"
              value={companyNumber}
              onChange={(e) => { setCompanyNumber(e.target.value); handleChange(); }}
              className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
            />
          </div>

          {/* Company Name */}
          <div>
            <Label htmlFor="companyName" className="text-sm font-medium text-[#3D85C6]">
              Company Name
            </Label>
            <Input
              id="companyName"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => { setCompanyName(e.target.value); handleChange(); }}
              className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GSTDetails;
