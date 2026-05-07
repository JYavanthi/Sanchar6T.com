


// import { useEffect, useState } from "react";
// import { Calendar, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { API_URLS } from "../API-URLS";


// type PackageItem = {
//   PackageID: number;
//   PackageName: string;
//   State: string;
//   Country: string;
//   From: string;
//   To: string;
//   Noofdays: number | string;
//   Shortdescription: string;
//   Description: string;
//   AdditionalNotes: string;
//   PackagePrice: number | string;
//   MediaId?: number | null;
// };

// // const API_BASE_URL = "http://localhost:5000/api";

// const PackagesSection = () => {
//   const navigate = useNavigate();

//   const [packages, setPackages] = useState<PackageItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   const fetchPackages = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       // const response = await fetch(`${API_BASE_URL}/packages`);
//       // const result = await response.json();

//       const response = await fetch(`${API_URLS.API_BASE_URL}/packages`);
// const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to fetch packages");
//       }

//       setPackages(result.data || []);
//     } catch (err: any) {
//       console.error("Packages fetch error:", err);
//       setError(err.message || "Failed to load packages");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔥 ONLY DB IMAGE
//   const getPackageImage = (pkg: PackageItem) => {
//     if (pkg.MediaId) {
//       return `${API_URLS}/view-image/${pkg.MediaId}`;
//     }
//     return ""; // no fallback
//   };

//   const formatDuration = (days: number | string) => {
//     const value = Number(days);
//     return !isNaN(value) ? (value === 1 ? "1 Day" : `${value} Days`) : `${days}`;
//   };

//   const formatPrice = (price: number | string) => {
//     const value = Number(price);
//     return !isNaN(value)
//       ? `₹${value.toLocaleString("en-IN")}`
//       : `₹${price}`;
//   };

//   const getDescription = (pkg: PackageItem) => {
//     return pkg.Shortdescription || pkg.Description || pkg.AdditionalNotes || "";
//   };

//   const getLocation = (pkg: PackageItem) => {
//     if (pkg.To && pkg.State) return `${pkg.To}, ${pkg.State}`;
//     if (pkg.State) return pkg.State;
//     if (pkg.Country) return pkg.Country;
//     return "Location not available";
//   };

//   return (
//     <div className="bg-[rgba(219,234,254,0.2)] py-6">
//       <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <h2 className="mb-3 text-[46px] font-bold text-[#1e3a8a]">
//             Featured Trips
//           </h2>
//           <p className="text-[28px] text-[rgba(30,58,138,0.7)]">
//             Customize these trips with the help of one of our local specialists
//           </p>
//         </div>

//         {loading && (
//           <div className="py-10 text-center text-[20px] font-semibold text-[#1e3a8a]">
//             Loading packages...
//           </div>
//         )}

//         {error && (
//           <div className="py-10 text-center text-[18px] font-semibold text-red-600">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.PackageID}
//                 onClick={() => navigate(`/package-details/${pkg.PackageID}`)}
//                 className="cursor-pointer overflow-hidden rounded-[10px] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.08)] transition duration-300 hover:shadow-[0_10px_22px_rgba(0,0,0,0.15)]"
//               >
//                 <div className="relative h-[220px] overflow-hidden">

//                   {/* 🔥 DB IMAGE ONLY */}
//                   {pkg.MediaId ? (
//                     <img
//                       src={getPackageImage(pkg)}
//                       alt={pkg.PackageName}
//                       className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
//                       No Image
//                     </div>
//                   )}

//                   <div className="absolute inset-0 bg-black/20"></div>

//                   <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 font-bold text-[#1e3a8a]">
//                     {formatPrice(pkg.PackagePrice)}
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="mb-2 text-[18px] font-bold text-[#1e3a8a]">
//                     {pkg.PackageName}
//                   </h3>

//                   <div className="mb-3 flex flex-wrap gap-4 text-[14px] text-[rgba(30,58,138,0.7)]">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="h-4 w-4" />
//                       <span>{formatDuration(pkg.Noofdays)}</span>
//                     </div>

//                     <div className="flex items-center gap-1">
//                       <MapPin className="h-4 w-4" />
//                       <span>{getLocation(pkg)}</span>
//                     </div>
//                   </div>

//                   <p className="line-clamp-4 text-[14px] text-[rgba(30,58,138,0.7)]">
//                     {getDescription(pkg)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {!loading && !error && packages.length === 0 && (
//           <div className="py-10 text-center text-[18px] font-semibold text-[#1e3a8a]">
//             No packages found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PackagesSection;

import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const API_BASE_URL = "http://localhost:5000/api";

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

      const response = await fetch(`${API_BASE_URL}/packages`);
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
      return `${API_BASE_URL}/view-image/${pkg.MediaId}`;
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
          <h2 className="mb-3 text-[24px] sm:text-[32px] md:text-[46px] font-bold text-[#1e3a8a] ">
            Featured Trips
          </h2>
          <p className="text-[14px] sm:text-[18px] md:text-[28px] text-[rgba(30,58,138,0.7)]">
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
                  <h3 className="mb-2 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#1e3a8a]">
                    {pkg.PackageName}
                  </h3>

                  <div className="mb-3 flex flex-wrap gap-3 text-[12px] sm:text-[13px] md:text-[14px] text-[rgba(30,58,138,0.7)]">
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