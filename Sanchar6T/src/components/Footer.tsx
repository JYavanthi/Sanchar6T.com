// // import { Linkedin, Youtube, Facebook, Instagram, ThumbsUp } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import thumbsup from "@/assets/thumbsup.png";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#106f94] text-[#FFFFFF]">
// //       {/* Trust Badges Section */}
// //       <div className="px-6 py-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b border-footer-muted/30 pb-8">
            
// //             {/* Badge 1 - Satisfaction Guarantee */}
// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 bg-footer-foreground rounded-full flex items-center justify-center">
// //                 {/* <div className="w-20 h-20 bg-footer rounded flex items-center justify-center">
                
// //                  <img 
// //   src={thumbsup} 
// //   alt="thumbs up" 
// //   className="bg-white p-2 rounded-full w-18 h-18 object-contain" 
// // />
// //                 </div> */}
// //                 <div className="w-24 h-24 bg-footer rounded-full flex items-center justify-center">
// //   <ThumbsUp className="w-16 h-16 text-[#106f94] bg-white p-2 rounded-full" />
// // </div>
// //               </div>
// //               <p className="text-sm leading-relaxed">
// //                 100% satisfaction guarantee. If you are not fully satisfied, we'll work with you to make it right.
// //               </p>
// //             </div>
            
// //             {/* Badge 2 - For The Planet */}
// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 flex items-center justify-center">
// //                 <img
// //                   src="https://productcatalo.my.canva.site/buses/_assets/media/a7bba014fe97ac390a1ef826ffc815b5.png"
// //                   alt="For The Planet"
// //                   className="h-40 w-40 object-contain"
// //                 />
// //               </div>
// //               <p className="text-sm leading-relaxed">
// //                 <span className="font-semibold">FOR THE PLANET</span><br />
// //                 Proudly a member of 1% for the Planet to help you travel sustainably.
// //               </p>
// //             </div>
            
// //             {/* Badge 3 - BBB Accredited */}
// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 flex items-center justify-center">
// //                 <img
// //                   src="https://productcatalo.my.canva.site/buses/_assets/media/c4f7312badbbf9dcbf05b77a8dc11f8f.png"
// //                   alt="BBB Accredited"
// //                   className="h-40 w-40 object-contain"
// //                 />
// //               </div>
// //               <p className="text-sm leading-relaxed">
// //                 Sanchar6T is accredited by the Better Business Bureau with an A+ rating.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Partner Logos Section */}
// //       <div className="px-6 py-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b border-footer-muted/30 pb-8">
// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 flex items-center justify-center">
// //                 <img
// //                   src="https://productcatalo.my.canva.site/buses/_assets/media/4e2e595b02ccc3124a837fd80faf8790.png"
// //                   alt="APTDC"
// //                   className="h-40 w-40 object-contain"
// //                 />
// //               </div>
// //             </div>

// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 flex items-center justify-center">
// //                 <img
// //                   src="/src/assets/KSTDC.png"
// //                   alt="KSTDC"
// //                   className="h-40 w-40 object-contain"
// //                 />
// //               </div>
// //             </div>

// //             <div className="flex flex-col items-center space-y-3">
// //               <div className="w-40 h-40 flex items-center justify-center">
// //                 <img
// //                   src="/src/assets/ITDC.png"
// //                   alt="ITDC"
// //                   className="h-40 w-40 object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Footer Content */}
// //       <div className="bg-footer-dark px-6 py-12">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {/* Follow Us */}
// //             <div>
// //               <h3 className="text-footer-foreground font-semibold text-lg mb-6">Follow Us:</h3>
// //               <div className="space-y-4">
// //                 {/* <a href="#" className="flex items-center space-x-3 text-footer-muted hover:text-footer-foreground transition-colors">
// //                   <Linkedin className="w-5 h-5 text-blue-400" />
// //                   <span>LinkedIn</span>
// //                 </a> */}
// //                 {/* <a href="#" className="flex items-center space-x-3 text-footer-muted hover:text-footer-foreground transition-colors">
// //                   <Youtube className="w-5 h-5 text-red-500" />
// //                   <span>Youtube</span>
// //                 </a> */}
// //                 <a href="https://www.facebook.com/people/Sanchar6T/61578343475983/" className="flex items-center space-x-3 text-footer-muted hover:text-footer-foreground transition-colors">
// //                   <Facebook className="w-5 h-5 text-blue-500" />
// //                   <span>Facebook</span>
// //                 </a>
// //                 <a href="https://www.instagram.com/sanchar6t/?igsh=MWE5NmxpcjdveXdjZg%3D%3D#" className="flex items-center space-x-3 text-footer-muted hover:text-footer-foreground transition-colors">
// //                   <Instagram className="w-5 h-5 text-pink-500" />
// //                   <span>Instagram</span>
// //                 </a>
// //                 <a href="#" className="flex items-center space-x-3 text-footer-muted hover:text-footer-foreground transition-colors">
// //                   <span className="">GSTIN:</span> 29AFHFS2158D1ZW
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Trending Destinations */}
// //             <div>
// //               <h3 className="text-footer-foreground font-semibold text-lg mb-6">Trending Destinations</h3>
// //               <div className="space-y-3">
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Tirupati</Link>
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Shiridi</Link>
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Kashi</Link>
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Dandelli</Link>
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Goa</Link>
// //                 <Link to="/coming-soon" className="block text-footer-muted hover:text-footer-foreground transition-colors">Gokarna</Link>
// //               </div>
// //             </div>

// //             {/* Company */}
// //             <div>
// //               <h3 className="text-footer-foreground font-semibold text-lg mb-6">Company</h3>
// //               <div className="space-y-3">
// //                 {/* <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Meet our team</a> */}
// //                 <Link to="/contact-us" className="block text-footer-muted hover:text-footer-foreground transition-colors">Contact Us</Link>
// //                 {/* <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Career</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Sanchar6T Principles</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Become Local Tour Guide</a> */}
// //                 <Link to="/policy" className="block text-footer-muted hover:text-footer-foreground transition-colors">Privacy</Link>
// //                 <Link to="/terms" className="block text-footer-muted hover:text-footer-foreground transition-colors">T&C</Link>
// //               </div>
// //             </div>

// //             {/* Discover */}
// //             <div>
// //               <h3 className="text-footer-foreground font-semibold text-lg mb-6">Discover</h3>
// //               <div className="space-y-3">
// //                 <Link to="/about-us" className="block text-footer-muted hover:text-footer-foreground transition-colors">About Us</Link>
// //                 {/* <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">FAQ</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">NRI</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Women Safety</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Under 1year</a>
// //                 <a href="#" className="block text-footer-muted hover:text-footer-foreground transition-colors">Senior Citizens</a> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Contact Info & Copyright */}
// //       <div className="border-t border-footer-muted/20 px-6 py-6">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="space-y-4 text-footer-muted">
// //             <div className="bg-[#124a74]">
// //               <h4 className="text-footer-foreground font-semibold mb-2">Contact Info</h4>
// //               <p className="text-sm">
// //                 +91 9731312275, 8197882511, #293, 17th cross, sampige road, malleshwaram, 2nd floor,
// //                 Above Vodafone outlet, OPP to VijaylakshmiSilk and Sarees.
// //               </p>
// //             </div>
// //             <div className="text-sm">
// //               © Copyright Sanchar6T Tours and Travels - Developed By TechVaraha Solutions Pvt Ltd.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   ThumbsUp,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpeg";

// const Footer = () => {
//   return (
//     <>
//       <div className="flex justify-between border-t-[4px] border-t-[rgb(193,185,185)] px-[5px] py-[5px]">
//         <div className="flex flex-1 items-center">
//           <img
//             src={logo}
//             alt="Sanchar6T Logo"
//             className="h-[100px] w-1/2 flex-1 object-contain"
//           />

//           <div className="mt-2 flex flex-1 [font-family:Georgia,'Times_New_Roman',serif] text-[25px] font-[1000] leading-none tracking-[2px]">
//             <h1 className="flex-1 text-blue-600">
//               Sanchar<span className="text-red-600">6</span>T
//             </h1>
//           </div>
//         </div>

//         <div className="flex flex-[2] items-center justify-center gap-3 text-center">
//           <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
//             &lt; Home
//           </span>
//           <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
//             &lt; Sarva Darshan
//           </span>
//           <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
//             &lt; Make Payment
//           </span>
//           <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
//             &lt; Contact Us
//           </span>
//         </div>
//       </div>

//       <footer className="w-full bg-[#13789d] font-sans text-white">
//         {/* TRUST BADGES */}
//         {/* <div className="px-10 pb-[34px] pt-[46px]">
//           <div className="grid grid-cols-3 items-start gap-10 max-[1024px]:grid-cols-1">
//             <div className="flex flex-col items-center text-center">
//               <div className="mb-[30px] flex h-[110px] w-[104px] items-center justify-center rounded-full border-[4px] border-white">
//                 <ThumbsUp className="h-[56px] w-[56px] text-white" />
//               </div>

//               <p className="m-0 max-w-[520px] text-[17px] leading-[1.45] text-white max-[1024px]:max-w-full max-[1024px]:text-[18px]">
//                 100% satisfaction guarantee. If you are not fully satisfied,
//                 we’ll work with you to make it right.
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center">
//               <img
//                 src="https://productcatalo.my.canva.site/buses/_assets/media/a7bba014fe97ac390a1ef826ffc815b5.png"
//                 alt="For the Planet"
//                 className="mb-[18px] mt-[-54px] h-[221px] w-[318px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
//               />
//               <p className="m-0 mt-[-46px] max-w-[520px] text-[17px] leading-[1.45] text-white">
//                 Proudly a member of 1% for the Planet to help you travel
//                 sustainably.
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center">
//               <img
//                 src="https://productcatalo.my.canva.site/buses/_assets/media/c4f7312badbbf9dcbf05b77a8dc11f8f.png"
//                 alt="BBB A+"
//                 className="mb-[18px] h-[120px] w-[280px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
//               />
//               <p className="m-0 max-w-[520px] text-[17px] leading-[1.45] text-white max-[1024px]:max-w-full max-[1024px]:text-[18px]">
//                 Sanchar6T is accredited by the Better Business Bureau with an A+
//                 rating.
//               </p>
//             </div>
//           </div>
//         </div> */}

//         <div className="mx-auto h-[3px] w-[calc(100%-140px)] bg-[rgba(255,255,255,0.9)] max-[1024px]:w-[calc(100%-40px)]"></div>

//         {/* PARTNERS */}
//         <div className="px-10 pb-9 pt-10">
//           <div className="grid grid-cols-3 items-center gap-10 max-[1024px]:grid-cols-1">
//             <div className="flex items-center justify-center">
//               <img
//                 src="https://productcatalo.my.canva.site/buses/_assets/media/4e2e595b02ccc3124a837fd80faf8790.png"
//                 alt="APTDC"
//                 className="block h-[140px] w-[250px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
//               />
//             </div>

//             <div className="flex items-center justify-center">
//               <img
//                 src="/src/assets/KSTDC.png"
//                 alt="KSTDC"
//                 className="block h-[150px] w-[390px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
//               />
//             </div>

//             <div className="flex items-center justify-center">
//               <img
//                 src="/src/assets/ITDC.png"
//                 alt="ITDC"
//                 className="block h-[170px] w-[300px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto h-[3px] w-[calc(100%-140px)] bg-[rgba(255,255,255,0.9)] max-[1024px]:w-[calc(100%-40px)]"></div>

//         {/* MAIN FOOTER */}
//         <div className="px-10 py-[42px]">
//           <div className="grid grid-cols-4 gap-[34px] max-[1024px]:grid-cols-1">
//             <div>
//               <h3 className="mb-[18px] text-[30px] font-bold text-white">
//                 Follow Us
//               </h3>

//               <div className="flex flex-col gap-3">
//                 <a
//                   href="https://www.linkedin.com/people/Sanchar6T/61578343475983/"
//                   className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   <Linkedin className="h-[18px] w-[18px]" />
//                   <span>Linked In</span>
//                 </a>

//                 <a
//                   href="https://www.youtube.com/people/Sanchar6T/61578343475983/"
//                   className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   <Youtube className="h-[18px] w-[18px]" />
//                   <span>YouTube</span>
//                 </a>

//                 <a
//                   href="https://www.facebook.com/people/Sanchar6T/61578343475983/"
//                   className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   <Facebook className="h-[18px] w-[18px]" />
//                   <span>Facebook</span>
//                 </a>

//                 <a
//                   href="https://www.instagram.com/sanchar6t/"
//                   className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   <Instagram className="h-[18px] w-[18px]" />
//                   <span>Instagram</span>
//                 </a>

//                 <p className="m-0 text-[20px] leading-[1.5] text-[#e7f7ff]">
//                   GSTIN: 29AFHFS2158D1ZW
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h3 className="mb-[18px] text-[30px] font-bold text-white">
//                 Trending
//               </h3>

//               <div className="flex flex-col gap-3">
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Tirupati
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Shiridi
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Kashi
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Dandeli
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Goa
//                 </Link>
//                 <Link
//                   to="/coming-soon"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Gokarna
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h3 className="mb-[18px] text-[30px] font-bold text-white">
//                 Company
//               </h3>

//               <div className="flex flex-col gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Contact Us
//                 </Link>
//                 <Link
//                   to="/policy"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Privacy
//                 </Link>
//                 <Link
//                   to="/terms"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   T&amp;C
//                 </Link>
//                 <Link
//                   to="/policy"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Meet our team
//                 </Link>
//                 <Link
//                   to="/policy"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Guide
//                 </Link>
//                 <Link
//                   to="/policy"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Sanchar6T Principles
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h3 className="mb-[18px] text-[30px] font-bold text-white">
//                 Discover
//               </h3>

//               <div className="flex flex-col gap-3">
//                 <Link
//                   to="/about-us"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="/Faq"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   FAQ
//                 </Link>
//                 <Link
//                   to="/women-safety"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Women Safety
//                 </Link>
//                 <Link
//                   to="/senior-citizens"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   Senior Citizens
//                 </Link>
//                 <Link
//                   to="/nri"
//                   className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
//                 >
//                   NRI
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CONTACT */}
//         <div className="bg-[#124a74] px-10 py-[26px] text-center">
//           <h4 className="mb-[18px] text-[30px] font-bold text-white">
//             Contact Info
//           </h4>

//           <p className="mb-2 text-[20px]">
//             +91 9731312275, 8197882511, Malleshwaram, Bengaluru
//           </p>

//           <p className="mb-2 text-[20px]">
//             293, 17th cross, sampige road, malleshwaram, 2nd floor,
            
//             Above Vodafone outlet, OPP to VijaylakshmiSilk and Sarees.
//           </p>

//           <p className="mb-2 text-[20px] opacity-80">
//             © Sanchar6T Tours and Travels
//           </p>

//           <p className="mb-0 text-[20px]">GSTIN: 29AFHFS2158D1ZW</p>
//         </div>

//         <div className="px-[10px] py-[10px] text-center text-[22px]">
//           <p>
//             &copy; Copyright Sanchar6T Tours & Travels - Developed by
//             TechVaraha Solutions Pvt.ltd
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      {/* <div className="flex justify-between border-t-[4px] border-t-[rgb(193,185,185)] px-[5px] py-[5px]">
        <div className="flex flex-1 items-center">
          <img
            src={logo}
            alt="Sanchar6T Logo"
            className="h-[100px] w-1/2 flex-1 object-contain"
          />

          <div className="mt-2 flex flex-1 [font-family:Georgia,'Times_New_Roman',serif] text-[25px] font-[1000] leading-none tracking-[2px]">
            <h1 className="flex-1 text-blue-600">
              Sanchar<span className="text-red-600">6</span>T
            </h1>
          </div>
        </div>

        <div className="flex flex-[2] items-center justify-center gap-3 text-center">
          <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
            &lt; Home
          </span>
          <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
            &lt; Sarva Darshan
          </span>
          <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
            &lt; Make Payment
          </span>
          <span className="flex-1 text-[25px] font-semibold text-[#1e3a8a]">
            &lt; Contact Us
          </span>
        </div>
      </div> */}

      <footer className="w-full bg-[#13789d] font-sans text-white">
        {/* TRUST BADGES */}
        {/* <div className="px-10 pb-[34px] pt-[46px]">
          <div className="grid grid-cols-3 items-start gap-10 max-[1024px]:grid-cols-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-[30px] flex h-[110px] w-[104px] items-center justify-center rounded-full border-[4px] border-white">
                <ThumbsUp className="h-[56px] w-[56px] text-white" />
              </div>

              <p className="m-0 max-w-[520px] text-[17px] leading-[1.45] text-white max-[1024px]:max-w-full max-[1024px]:text-[18px]">
                100% satisfaction guarantee. If you are not fully satisfied,
                we’ll work with you to make it right.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="https://productcatalo.my.canva.site/buses/_assets/media/a7bba014fe97ac390a1ef826ffc815b5.png"
                alt="For the Planet"
                className="mb-[18px] mt-[-54px] h-[221px] w-[318px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
              />
              <p className="m-0 mt-[-46px] max-w-[520px] text-[17px] leading-[1.45] text-white">
                Proudly a member of 1% for the Planet to help you travel
                sustainably.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="https://productcatalo.my.canva.site/buses/_assets/media/c4f7312badbbf9dcbf05b77a8dc11f8f.png"
                alt="BBB A+"
                className="mb-[18px] h-[120px] w-[280px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
              />
              <p className="m-0 max-w-[520px] text-[17px] leading-[1.45] text-white max-[1024px]:max-w-full max-[1024px]:text-[18px]">
                Sanchar6T is accredited by the Better Business Bureau with an A+
                rating.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mx-auto h-[3px] w-[calc(100%-140px)] bg-[rgba(255,255,255,0.9)] max-[1024px]:w-[calc(100%-40px)]"></div>

        {/* PARTNERS */}
        <div className="px-10 pb-9 pt-10">
          <div className="grid grid-cols-3 items-center gap-10 max-[1024px]:grid-cols-1">
            <div className="flex items-center justify-center">
              <img
                src="https://productcatalo.my.canva.site/buses/_assets/media/4e2e595b02ccc3124a837fd80faf8790.png"
                alt="APTDC"
                className="block h-[140px] w-[250px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/src/assets/KSTDC.png"
                alt="KSTDC"
                className="block h-[150px] w-[390px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/src/assets/ITDC.png"
                alt="ITDC"
                className="block h-[170px] w-[300px] object-contain max-[1024px]:h-auto max-[1024px]:w-[220px]"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto h-[3px] w-[calc(100%-140px)] bg-[rgba(255,255,255,0.9)] max-[1024px]:w-[calc(100%-40px)]"></div>

        {/* MAIN FOOTER */}
        <div className="px-10 py-[42px]">
          <div className="grid grid-cols-4 gap-[34px] max-[1024px]:grid-cols-1 ">
            <div className="pl-16">
              <h3 className="mb-[18px] text-[30px] font-bold text-white ">
                Follow Us
              </h3>

              <div className="flex flex-col gap-3 items-start ">
                <a
                  href="https://www.linkedin.com/people/Sanchar6T/61578343475983/"
                  className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                  <span>Linked In</span>
                </a>

                <a
                  href="https://www.youtube.com/people/Sanchar6T/61578343475983/"
                  className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  <Youtube className="h-[18px] w-[18px]" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://www.facebook.com/people/Sanchar6T/61578343475983/"
                  className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  <Facebook className="h-[18px] w-[18px]" />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/sanchar6t/"
                  className="flex items-center gap-[10px] text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  <Instagram className="h-[18px] w-[18px]" />
                  <span>Instagram</span>
                </a>

                <p className="m-0 text-[20px] leading-[1.5] text-[#e7f7ff]">
                  GSTIN: 29AFHFS2158D1ZW
                </p>
              </div>
            </div>

            <div className="pl-16">
              <h3 className="mb-[18px] text-[30px] font-bold text-white ">
                Trending
              </h3>

              <div className="flex flex-col gap-3 ">
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Tirupati
                </Link>
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Shiridi
                </Link>
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Kashi
                </Link>
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Dandeli
                </Link>
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Goa
                </Link>
                <Link
                  to="/coming-soon"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Gokarna
                </Link>
              </div>
            </div>

            <div className="pl-16">
              <h3 className="mb-[18px] text-[30px] font-bold text-white ">
                Company
              </h3>

              <div className="flex flex-col gap-3 ">
                <Link
                  to="/contact-us"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  to="/policy"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  T&amp;C
                </Link>
                <Link
                  to="/policy"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Meet our team
                </Link>
                <Link
                  to="/policy"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Guide
                </Link>
                <Link
                  to="/policy"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Sanchar6T Principles
                </Link>
              </div>
            </div>

            <div className="pl-16">
              <h3 className="mb-[18px] text-[30px] font-bold text-white ">
                Discover
              </h3>

              <div className="flex flex-col gap-3 ">
                <Link
                  to="/about-us"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  to="/Faq"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  FAQ
                </Link>
                <Link
                  to="/women-safety"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Women Safety
                </Link>
                <Link
                  to="/senior-citizens"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  Senior Citizens
                </Link>
                <Link
                  to="/nri"
                  className="text-[20px] leading-[1.5] text-[#e7f7ff] no-underline hover:text-white"
                >
                  NRI
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="bg-[#124a74] px-10 py-[26px] text-center">
          <h4 className="mb-[18px] text-[30px] font-bold text-white">
            Contact Info
          </h4>

          <p className="mb-2 text-[20px]">
            +91 9731312275, 8197882511, Malleshwaram, Bengaluru
          </p>

          <p className="mb-2 text-[20px]">
            293, 17th cross, sampige road, malleshwaram, 2nd floor,
            
            Above Vodafone outlet, OPP to VijaylakshmiSilk and Sarees.
          </p>

          <p className="mb-2 text-[20px] opacity-80">
            © Sanchar6T Tours and Travels
          </p>

          <p className="mb-0 text-[20px]">GSTIN: 29AFHFS2158D1ZW</p>
        </div>

        <div className="px-[10px] py-[10px] text-center text-[22px]">
          <p>
            &copy; Copyright Sanchar6T Tours & Travels - Developed by
            TechVaraha Solutions Pvt.ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;