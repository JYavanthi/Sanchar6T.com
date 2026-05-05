// import { Button } from "@/components/ui/button";
// import { Calendar, MapPin, Users } from "lucide-react";
// import tirupatiTemple from "@/assets/tirupati-temple.jpg";
// import shirdiFTemple from "@/assets/shirdi-temple.jpg";
// import varanasiGhats from "@/assets/varanasi-ghats.jpg";
// import { useNavigate } from "react-router-dom";

// const packages = [
//   {
//     id: 1,
//     title: "Discover Tirupati by Train & Temple Trails – 7 Days",
//     description: "This soulful journey takes you through South India's spiritual heartland, combining sacred temples, heritage sites, and natural beauty. Begin with the divine darshan at Lord Venkateswara Temple in Tirumala, explore the goddess temples of Tiruchanur and Srikalahasti, and soak in the serenity of Talakona waterfalls and the Eastern Ghats.",
//     image: tirupatiTemple,
//     duration: "7 Days",
//     location: "Tirupati, Andhra Pradesh",
//     price: "₹15,000",
//     features: ["Divine Darshan", "Heritage Sites", "Natural Beauty"]
//   },
//   {
//     id: 2,
//     title: "Sacred Trails of Shirdi – 3-Day Divine Experience",
//     description: "This soulful getaway centers on the holy town of Shirdi, home to the revered Sai Baba Temple, where devotees from across the world gather for darshan and prayer. Alongside temple visits and spiritual rituals, explore the Dwarkamai mosque, Chavadi, and Sai Heritage Village.",
//     image: shirdiFTemple,
//     duration: "3 Days",
//     location: "Shirdi, Maharashtra",
//     price: "₹8,500",
//     features: ["Sai Baba Temple", "Spiritual Rituals", "Heritage Village"]
//   },
//   {
//     id: 3,
//     title: "Kashi – A Journey into India's Soul- 10 Days Soulful Experience",
//     description: "Experience the spirit of Varanasi, where faith and tradition flow with the Ganga. Witness sunrise boat rides and the evening Ganga Aarti, visit sacred temples including Kashi Vishwanath, and wander through lanes alive with culture, silk, and street food.",
//     image: varanasiGhats,
//     duration: "10 Days",
//     location: "Varanasi, Uttar Pradesh",
//     price: "₹22,000",
//     features: ["Ganga Aarti", "Sacred Temples", "Cultural Experience"]
//   }
// ];

// const PackagesSection = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="py-16 bg-light-blue/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-nav-blue mb-4">
//             Featured Trips
//           </h2>
//           <p className="text-lg text-nav-blue/70">
//             Customize these trips with the help of one of our local specialists
//           </p>
//         </div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {packages.map((pkg) => (
//             <div 
//               key={pkg.id} 
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={pkg.image} 
//                   alt={pkg.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                
//                 {/* Price Badge */}
//                 <div className="absolute top-4 right-4 bg-hero-accent text-nav-blue px-3 py-1 rounded-full font-bold">
//                   {pkg.price}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-nav-blue mb-3 line-clamp-2">
//                   {pkg.title}
//                 </h3>

//                 {/* Meta Info */}
//                 <div className="flex items-center gap-4 mb-4 text-sm text-nav-blue/70">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{pkg.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     <span>{pkg.location}</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-nav-blue/70 text-sm leading-relaxed mb-4 line-clamp-3">
//                   {pkg.description}
//                 </p>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {pkg.features.map((feature, index) => (
//                     <span 
//                       key={index}
//                       className="px-2 py-1 bg-light-blue text-xs text-nav-blue rounded-full"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Book Now Button */}
//                 <Button
//                  onClick={() => navigate("/coming-soon")} 
//                  className="w-full" variant="default">
//                   Book Now
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackagesSection;


import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../API-URLS";


type PackageItem = {
  PackageID: number;
  PackageName: string;
  State: string;
  Country: string;
  From: string;
  To: string;
  Noofdays: number | string;
  Shortdescription: string;
  Description: string;
  AdditionalNotes: string;
  PackagePrice: number | string;
  MediaId?: number | null;
};

// const API_BASE_URL = "http://localhost:5000/api";

const PackagesSection = () => {
  const navigate = useNavigate();

  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError("");

      // const response = await fetch(`${API_BASE_URL}/packages`);
      // const result = await response.json();

      const response = await fetch(`${API_URLS.API_BASE_URL}/packages`);
const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch packages");
      }

      setPackages(result.data || []);
    } catch (err: any) {
      console.error("Packages fetch error:", err);
      setError(err.message || "Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ONLY DB IMAGE
  const getPackageImage = (pkg: PackageItem) => {
    if (pkg.MediaId) {
      return `${API_URLS}/view-image/${pkg.MediaId}`;
    }
    return ""; // no fallback
  };

  const formatDuration = (days: number | string) => {
    const value = Number(days);
    return !isNaN(value) ? (value === 1 ? "1 Day" : `${value} Days`) : `${days}`;
  };

  const formatPrice = (price: number | string) => {
    const value = Number(price);
    return !isNaN(value)
      ? `₹${value.toLocaleString("en-IN")}`
      : `₹${price}`;
  };

  const getDescription = (pkg: PackageItem) => {
    return pkg.Shortdescription || pkg.Description || pkg.AdditionalNotes || "";
  };

  const getLocation = (pkg: PackageItem) => {
    if (pkg.To && pkg.State) return `${pkg.To}, ${pkg.State}`;
    if (pkg.State) return pkg.State;
    if (pkg.Country) return pkg.Country;
    return "Location not available";
  };

  return (
    <div className="bg-[rgba(219,234,254,0.2)] py-6">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[46px] font-bold text-[#1e3a8a]">
            Featured Trips
          </h2>
          <p className="text-[28px] text-[rgba(30,58,138,0.7)]">
            Customize these trips with the help of one of our local specialists
          </p>
        </div>

        {loading && (
          <div className="py-10 text-center text-[20px] font-semibold text-[#1e3a8a]">
            Loading packages...
          </div>
        )}

        {error && (
          <div className="py-10 text-center text-[18px] font-semibold text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.PackageID}
                onClick={() => navigate(`/package-details/${pkg.PackageID}`)}
                className="cursor-pointer overflow-hidden rounded-[10px] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.08)] transition duration-300 hover:shadow-[0_10px_22px_rgba(0,0,0,0.15)]"
              >
                <div className="relative h-[220px] overflow-hidden">

                  {/* 🔥 DB IMAGE ONLY */}
                  {pkg.MediaId ? (
                    <img
                      src={getPackageImage(pkg)}
                      alt={pkg.PackageName}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                      No Image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20"></div>

                  <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 font-bold text-[#1e3a8a]">
                    {formatPrice(pkg.PackagePrice)}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-[18px] font-bold text-[#1e3a8a]">
                    {pkg.PackageName}
                  </h3>

                  <div className="mb-3 flex flex-wrap gap-4 text-[14px] text-[rgba(30,58,138,0.7)]">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDuration(pkg.Noofdays)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{getLocation(pkg)}</span>
                    </div>
                  </div>

                  <p className="line-clamp-4 text-[14px] text-[rgba(30,58,138,0.7)]">
                    {getDescription(pkg)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && packages.length === 0 && (
          <div className="py-10 text-center text-[18px] font-semibold text-[#1e3a8a]">
            No packages found
          </div>
        )}
      </div>
    </div>
  );
};

export default PackagesSection;