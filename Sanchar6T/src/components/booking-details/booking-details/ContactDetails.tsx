// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import ReactCountryFlag from "react-country-flag";
// import { Link } from "react-router-dom";

// // List of countries
// const countries = [
//   { code: "IN", name: "India", dial_code: "+91" },
//   { code: "US", name: "United States", dial_code: "+1" },
//   { code: "GB", name: "United Kingdom", dial_code: "+44" },
//   { code: "CA", name: "Canada", dial_code: "+1" },
//   { code: "AU", name: "Australia", dial_code: "+61" },
//   { code: "SG", name: "Singapore", dial_code: "+65" },
//   { code: "JP", name: "Japan", dial_code: "+81" },
//   { code: "FR", name: "France", dial_code: "+33" },
//   { code: "DE", name: "Germany", dial_code: "+49" },
//   { code: "CN", name: "China", dial_code: "+86" },
//   { code: "BR", name: "Brazil", dial_code: "+55" },
//   { code: "ZA", name: "South Africa", dial_code: "+27" },
//   { code: "AE", name: "UAE", dial_code: "+971" },
//   { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
//   { code: "PK", name: "Pakistan", dial_code: "+92" },
//   { code: "BD", name: "Bangladesh", dial_code: "+880" },
//   { code: "LK", name: "Sri Lanka", dial_code: "+94" },
//   { code: "NP", name: "Nepal", dial_code: "+977" },
//   { code: "TH", name: "Thailand", dial_code: "+66" },
// ];

// const ContactDetails = ({ setContactData }: { setContactData: any }) => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Lift state up whenever email or mobile changes
//   const handleChange = () => {
//     setContactData({
//       Email: email,
//       ContactNo: mobileNumber
//     });
//   };

//   return (
//     <div className="bg-[#4A4A4A]-card rounded-lg border border-[#4A4A4A]-light p-6">
//       <div className="mb-4">
//         <h2 className="text-xl text-[#3D85C6] font-bold">Contact Details</h2>
//         <p className="text-sm text-[#4A4A4A]">We'll send your ticket here</p>
        
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Email */}
//         <div>
//           <Label htmlFor="email" className="text-sm font-medium text-[#3D85C6]">
//             Email Id*
//           </Label>
//           <Input
//             id="email"
//             placeholder="Type here"
//             value={email}
//             onChange={(e) => { setEmail(e.target.value); handleChange(); }}
//             className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
//           />
//         </div>

//         {/* Mobile */}
//         <div>
//           <Label htmlFor="mobile" className="text-sm font-medium text-[#3D85C6]">
//             Mobile Number*
//           </Label>

//           <div className="flex mt-1 border border-[#4A4A4A] rounded focus-within:ring-[#4A4A4A]">
//             {/* Flag + Dial Code */}
//             <div
//               className="flex items-center pl-2 cursor-pointer"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <ReactCountryFlag
//                 countryCode={selectedCountry.code}
//                 svg
//                 style={{ width: "1.5em", height: "1.5em" }}
//               />
//               <span className="ml-2">{selectedCountry.dial_code}</span>
//             </div>

//             {/* Dropdown for selection */}
//             {showDropdown && (
//               <select
//                 className="absolute ml-2 mt-1 bg-white border rounded z-50"
//                 value={selectedCountry.code}
//                 onChange={(e) => {
//                   setSelectedCountry(
//                     countries.find((c) => c.code === e.target.value) || countries[0]
//                   );
//                   setShowDropdown(false);
//                 }}
//               >
//                 {countries.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name} ({country.dial_code})
//                   </option>
//                 ))}
//               </select>
//             )}

//             {/* Mobile Input */}
//             <Input
//               id="mobile"
//               placeholder="Type here"
//               value={mobileNumber}
//               onChange={(e) => { setMobileNumber(e.target.value); handleChange(); }}
//               className="ml-2 flex-1 border-none focus:ring-0 focus:border-none"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;




import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import { toast } from "react-toastify";

// List of countries
const countries = [
  { code: "IN", name: "India", dial_code: "+91" },
  { code: "US", name: "United States", dial_code: "+1" },
  { code: "GB", name: "United Kingdom", dial_code: "+44" },
  { code: "CA", name: "Canada", dial_code: "+1" },
  { code: "AU", name: "Australia", dial_code: "+61" },
  { code: "SG", name: "Singapore", dial_code: "+65" },
  { code: "JP", name: "Japan", dial_code: "+81" },
  { code: "FR", name: "France", dial_code: "+33" },
  { code: "DE", name: "Germany", dial_code: "+49" },
  { code: "CN", name: "China", dial_code: "+86" },
  { code: "BR", name: "Brazil", dial_code: "+55" },
  { code: "ZA", name: "South Africa", dial_code: "+27" },
  { code: "AE", name: "UAE", dial_code: "+971" },
  { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
  { code: "PK", name: "Pakistan", dial_code: "+92" },
  { code: "BD", name: "Bangladesh", dial_code: "+880" },
  { code: "LK", name: "Sri Lanka", dial_code: "+94" },
  { code: "NP", name: "Nepal", dial_code: "+977" },
  { code: "TH", name: "Thailand", dial_code: "+66" },
];

const ContactDetails = ({ setContactData }: { setContactData: any }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  // OTP modal state
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  // Lift state up whenever email or mobile changes
  const handleChange = () => {
    setContactData({
      Email: email,
      ContactNo: mobileNumber,
      Primary: isPrimary,
    });
  };

  // ✅ Send OTP to backend
  const sendOtpToEmail = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("OTP sent to your email");
        return true;
      } else {
        toast.error(data.error || "Failed to send OTP");
        return false;
      }
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      toast.error("Server error while sending OTP");
      return false;
    }
  };

  // ✅ Handle primary selection
  const handlePrimaryChange = async (checked: boolean) => {
    if (checked) {
      if (!email) {
        toast.error("Email ID is required before setting as Primary");
        return;
      }
      const sent = await sendOtpToEmail();
      if (sent) {
        setIsPrimary(true);
        setShowOtpModal(true);
      }
    } else {
      setIsPrimary(false);
      setOtpVerified(false);
    }
    handleChange();
  };

  // ✅ Verify OTP
  const verifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: emailOtp }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("OTP Verified Successfully!");
        setOtpVerified(true);
        setShowOtpModal(false);
      } else {
        toast.error(data.error || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Server error while verifying OTP");
    }
  };

  return (
    <div className="bg-[#4A4A4A]-card rounded-lg border border-[#4A4A4A]-light p-6">
      <div className="mb-4">
        <h2 className="text-xl text-[#3D85C6] font-bold">Contact Details</h2>
        <p className="text-sm text-[#4A4A4A]">We'll send your ticket here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-[#3D85C6]">
            Email Id*
          </Label>
          <Input
            id="email"
            placeholder="Type here"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange();
            }}
            className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
          />
        </div>

        {/* Mobile */}
        <div>
          <Label htmlFor="mobile" className="text-sm font-medium text-[#3D85C6]">
            Mobile Number*
          </Label>

          <div className="flex mt-1 border border-[#4A4A4A] rounded focus-within:ring-[#4A4A4A]">
            {/* Flag + Dial Code */}
            <div
              className="flex items-center pl-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <ReactCountryFlag
                countryCode={selectedCountry.code}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <span className="ml-2">{selectedCountry.dial_code}</span>
            </div>

            {/* Dropdown for selection */}
            {showDropdown && (
              <select
                className="absolute ml-2 mt-1 bg-white border rounded z-50"
                value={selectedCountry.code}
                onChange={(e) => {
                  setSelectedCountry(
                    countries.find((c) => c.code === e.target.value) || countries[0]
                  );
                  setShowDropdown(false);
                }}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.dial_code})
                  </option>
                ))}
              </select>
            )}

            {/* Mobile Input */}
            <Input
              id="mobile"
              placeholder="Type here"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
                handleChange();
              }}
              className="ml-2 flex-1 border-none focus:ring-0 focus:border-none"
            />
          </div>
        </div>
      </div>

      {/* Primary Checkbox */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="primary"
          checked={isPrimary}
          onChange={(e) => handlePrimaryChange(e.target.checked)}
          className="w-4 h-4 accent-[#3D85C6] cursor-pointer"
        />
        <Label
          htmlFor="primary"
          className="text-sm font-medium text-[#3D85C6] cursor-pointer"
        >
          Mark as Primary
        </Label>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-center">
            {/* Logo */}
            <img src={logo} alt="Logo" className="mx-auto mb-4 w-24 h-24" />

            <h3 className="text-lg font-bold mb-2 text-[#3D85C6]">
              Verify Your Email
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Please enter the OTP sent to your email{" "}
              <strong>{email}</strong>.
            </p>

            <div className="mb-4">
              <Label
                htmlFor="emailOtp"
                className="text-sm text-[#3D85C6]"
              >
                Email OTP
              </Label>
              <Input
                id="emailOtp"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                placeholder="Enter email OTP"
                className="mt-1"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowOtpModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#3D85C6] text-white rounded"
                onClick={verifyOtp}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
