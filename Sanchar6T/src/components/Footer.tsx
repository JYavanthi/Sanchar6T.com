
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
//       {/* <div className="flex justify-between border-t-[4px] border-t-[rgb(193,185,185)] px-[5px] py-[5px]">
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
//       </div> */}

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
//           <div className="grid grid-cols-4 gap-[34px] max-[1024px]:grid-cols-1 ">
//             <div className="pl-16">
//               <h3 className="mb-[18px] text-[30px] font-bold text-white ">
//                 Follow Us
//               </h3>

//               <div className="flex flex-col gap-3 items-start ">
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

//             <div className="pl-16">
//               <h3 className="mb-[18px] text-[30px] font-bold text-white ">
//                 Trending
//               </h3>

//               <div className="flex flex-col gap-3 ">
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

//             <div className="pl-16">
//               <h3 className="mb-[18px] text-[30px] font-bold text-white ">
//                 Company
//               </h3>

//               <div className="flex flex-col gap-3 ">
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

//             <div className="pl-16">
//               <h3 className="mb-[18px] text-[30px] font-bold text-white ">
//                 Discover
//               </h3>

//               <div className="flex flex-col gap-3 ">
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
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#13789d] text-white">

      {/* LINE */}
      <div className="mx-auto h-[2px] w-[90%] bg-white/80"></div>

      {/* PARTNERS */}
      <div className="px-4 sm:px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
          <img
            src="https://productcatalo.my.canva.site/buses/_assets/media/4e2e595b02ccc3124a837fd80faf8790.png"
            className="mx-auto h-[80px] sm:h-[120px] object-contain"
          />
          <img
            src="/src/assets/KSTDC.png"
            className="mx-auto h-[80px] sm:h-[120px] object-contain"
          />
          <img
            src="/src/assets/ITDC.png"
            className="mx-auto h-[80px] sm:h-[120px] object-contain"
          />
        </div>
      </div>

      <div className="mx-auto h-[2px] w-[90%] bg-white/80"></div>

      {/* MAIN */}
      <div className="px-4 sm:px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-center">

          {/* FOLLOW */}
          <div className="">
            <h3 className="mb-3 text-[18px] md:text-[26px] font-bold">
              Follow Us
            </h3>

            <div className="flex flex-col gap-2 items-center sm:items-center text-[14px] text-center md:text-[18px] text-[#e7f7ff]">
              <a className="flex gap-2 items-center  hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a className="flex gap-2 items-center hover:text-white">
                <Youtube className="h-4 w-4" /> YouTube
              </a>
              <a className="flex gap-2 items-center hover:text-white">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a className="flex gap-2 items-center hover:text-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <p className="text-[12px] md:text-[16px]">
                GSTIN: 29AFHFS2158D1ZW
              </p>
            </div>
          </div>

          {/* TRENDING */}
          <div>
            <h3 className="mb-3 text-[18px] md:text-[26px] font-bold">
              Trending
            </h3>
            <div className="flex flex-col gap-2 text-[14px] md:text-[18px] text-[#e7f7ff]">
              <Link to="/coming-soon">Tirupati</Link>
              <Link to="/coming-soon">Shiridi</Link>
              <Link to="/coming-soon">Kashi</Link>
              <Link to="/coming-soon">Dandeli</Link>
              <Link to="/coming-soon">Goa</Link>
              <Link to="/coming-soon">Gokarna</Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-3 text-[18px] md:text-[26px] font-bold">
              Company
            </h3>
            <div className="flex flex-col gap-2 text-[14px] md:text-[18px] text-[#e7f7ff]">
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/policy">Privacy</Link>
              <Link to="/terms">T&C</Link>
              <Link to="/policy">Meet our team</Link>
              <Link to="/policy">Guide</Link>
            </div>
          </div>

          {/* DISCOVER */}
          <div>
            <h3 className="mb-3 text-[18px] md:text-[26px] font-bold">
              Discover
            </h3>
            <div className="flex flex-col gap-2 text-[14px] md:text-[18px] text-[#e7f7ff]">
              <Link to="/about-us">About Us</Link>
              <Link to="/Faq">FAQ</Link>
              <Link to="/women-safety">Women Safety</Link>
              <Link to="/senior-citizens">Senior Citizens</Link>
              <Link to="/nri">NRI</Link>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT */}
      <div className="bg-[#124a74] px-4 sm:px-6 md:px-10 py-6 text-center">
        <h4 className="mb-3 text-[18px] md:text-[26px] font-bold">
          Contact Info
        </h4>

        <p className="text-[13px] md:text-[18px]">
          +91 9731312275, 8197882511, Malleshwaram, Bengaluru
        </p>

        <p className="text-[13px] md:text-[18px]">
          293, 17th cross, sampige road, malleshwaram, 2nd floor,
          Above Vodafone outlet.
        </p>

        <p className="text-[12px] md:text-[16px] opacity-80 mt-2">
          © Sanchar6T Tours and Travels
        </p>
      </div>

      {/* COPYRIGHT */}
      <div className="px-3 py-3 text-center text-[12px] md:text-[16px]">
        <p>
          © Copyright Sanchar6T Tours & Travels - Developed by TechVaraha
        </p>
      </div>
    </footer>
  );
};

export default Footer;