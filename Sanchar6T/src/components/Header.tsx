



// import { useState, useContext } from "react";
// import { Phone, Mail, User, ChevronDown, Menu, X } from "lucide-react";
// import logo from "../assets/logo.jpeg";
// import { Link } from "react-router-dom";
// import { UserContext } from "./context/UserContext";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const { user, logout } = useContext(UserContext);

//   // helper to get first initial
//   const getInitial = (name?: string) => {
//     if (!name || name.length === 0) return "";
//     return name.charAt(0).toUpperCase();
//   };

//   return (
//     <header className="bg-white shadow-sm relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo + Brand */}
//           <div className="flex items-center gap-2">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Sanchar6T Logo"
//                 className="w-20 h-20 object-contain"
//               />
//             </Link>
//             <span className="font-bold text-xl">
//               <span className="text-red-600">SANCHAR</span>
//               <span className="text-violet">6</span>
//               <span className="text-red-600">T</span>
//             </span>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/tirupati-packages"
//               className="text-nav-blue font-medium hover:text-primary transition-colors"
//             >
//               Tirupati Packages
//             </Link>
//             <a
//               href="/coming-soon"
//               className="text-nav-blue font-medium hover:text-primary transition-colors"
//             >
//               Destination
//             </a>
//             <a
//               href="/coming-soon"
//               className="text-nav-blue font-medium hover:text-primary transition-colors"
//             >
//               Itineraries
//             </a>
//             <div className="flex items-center gap-1 text-nav-blue font-medium hover:text-primary transition-colors cursor-pointer">
//               <Link to="/coming-soon">
//                 <span>More</span>
//               </Link>
//               <ChevronDown className="w-4 h-4" />
//             </div>
//           </nav>

//           {/* Contact / User Icons */}
//           <div className="hidden md:flex items-center gap-2 relative">
//             <a
//               href="tel:+919731312275"
//               className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
//             >
//               <Phone className="w-4 h-4 text-white" />
//             </a>

//             {user ? (
//               <div className="flex items-center gap-2 relative">
//                 {/* Hello text */}
//                  <span className="text-nav-blue font-medium">Hello {user.Fname}</span>

//                 {/* First initial as icon */}
//                 <div
//                   onClick={() => setUserMenuOpen(!userMenuOpen)}
//                   className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer text-white font-bold"
//                 >
//                   {getInitial(user.Fname)}
//                 </div>

//                 {/* Dropdown below icon */}
//                 {userMenuOpen && (
//                   <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-md rounded-md z-50 flex flex-col">
//                     <Link
//                       to="/profile"
//                       className="px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                     >
//                       Profile
//                     </Link>
//                     <Link
//                       to="/my-trips"
//                       className="px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                     >
//                       My Trips
//                     </Link>
//                     <button
//                       onClick={logout}
//                       className="text-left px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                 <Link to="/login-signup">
//                   <User className="w-4 h-4 text-white" />
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Hamburger menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/tirupati-packages"
//               className="block text-nav-blue font-medium hover:text-primary transition-colors px-3 py-2 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               Tirupati Packages
//             </Link>
//             <a
//               href="#"
//               className="block text-nav-blue font-medium hover:text-primary transition-colors px-3 py-2 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               Destination
//             </a>
//             <a
//               href="#"
//               className="block text-nav-blue font-medium hover:text-primary transition-colors px-3 py-2 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               Itineraries
//             </a>
//             <div
//               className="flex items-center gap-1 text-nav-blue font-medium hover:text-primary transition-colors cursor-pointer px-3 py-2 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               <span>More</span>
//               <ChevronDown className="w-4 h-4" />
//             </div>

//             {/* Mobile Contact / User */}
//             <div className="flex items-center gap-2 mt-2 px-3">
//               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                 <Phone className="w-4 h-4 text-white" />
//               </div>
//               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                 <Mail className="w-4 h-4 text-white" />
//               </div>

//               {user ? (
//                 <div className="relative flex items-center gap-2">
//                   <span className="text-nav-blue font-medium">Hello</span>
//                   <div
//                     onClick={() => setUserMenuOpen(!userMenuOpen)}
//                     className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer text-white font-bold"
//                   >
//                     {getInitial(user.Fname)}
//                   </div>
//                   {userMenuOpen && (
//                     <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-md rounded-md z-50 flex flex-col">
//                       <Link
//                         to="/profile"
//                         className="px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                       >
//                         Profile
//                       </Link>
//                       <Link
//                         to="/my-trips"
//                         className="px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                       >
//                         My Trips
//                       </Link>
//                       <button
//                         onClick={logout}
//                         className="text-left px-4 py-2 text-nav-blue font-medium hover:bg-gray-100"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                   <Link to="/login-signup">
//                     <User className="w-4 h-4 text-white" />
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



import { useState, useContext } from "react";
import { Phone, Mail, User, ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo2.jpeg";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  const getInitial = (name?: string) => {
    if (!name || name.length === 0) return "";
    return name.charAt(0).toUpperCase();
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <header className="relative z-[100] w-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
      <div className="mx-auto w-[95%] max-w-[1280px]">
        <div className="flex min-h-[82px] items-center justify-between gap-3 md:min-h-[88px]">
          {/* Logo + Brand */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeAllMenus}>
              <img
                src={logo}
                alt="Sanchar6T Logo"
                className="h-[54px] w-[54px] object-contain sm:h-[64px] sm:w-[84px] md:h-[72px] md:w-[110px] xl:h-[85px] xl:w-[143px]"
              />

              <span className="text-[18px] font-[1000] leading-none tracking-[1px] [font-family:Georgia,'Times_New_Roman',serif] sm:text-[20px] md:text-[22px] xl:text-[25px]">
                <span className="text-[#1e3a8a]">Sanchar</span>
                <span className="text-red-600">6</span>
                <span className="text-[#1e3a8a]">T</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-8 lg:flex">
            <Link
              to="/tirupati-packages"
              className="whitespace-nowrap text-[16px] font-[800] text-[#1e3a8a] no-underline transition-colors duration-300 hover:text-[#0ea5a4] xl:text-[19px]"
            >
              Tirupati Packages
            </Link>

            <Link
              to="/coming-soon"
              className="whitespace-nowrap text-[16px] font-[800] text-[#1e3a8a] no-underline transition-colors duration-300 hover:text-[#0ea5a4] xl:text-[19px]"
            >
              Destination
            </Link>

            <Link
              to="/coming-soon"
              className="whitespace-nowrap text-[16px] font-[800] text-[#1e3a8a] no-underline transition-colors duration-300 hover:text-[#0ea5a4] xl:text-[19px]"
            >
              Itineraries
            </Link>

            <Link
              to="/coming-soon"
              className="flex items-center gap-1 whitespace-nowrap text-[16px] font-[800] text-[#1e3a8a] no-underline transition-colors duration-300 hover:text-[#0ea5a4] xl:text-[19px]"
            >
              <span>More</span>
              <ChevronDown className="h-4 w-4" />
            </Link>
          </nav>

          {/* Contact / User Icons */}
          <div className="relative hidden shrink-0 items-center gap-3 xl:gap-5 lg:flex">
            <a
              href="tel:+919731312275"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] no-underline xl:h-10 xl:w-10"
            >
              <Phone className="h-4 w-4 text-white xl:h-5 xl:w-5" />
            </a>

            <a
              href="mailto:info@sanchar6t.com"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] no-underline xl:h-10 xl:w-10"
            >
              <Mail className="h-4 w-4 text-white xl:h-5 xl:w-5" />
            </a>

            {user ? (
              <div className="relative flex items-center gap-2">
                {/* <span className="hidden text-[15px] font-[800] text-[#1e3a8a] xl:block">
                  Hello {user.Fname}
                </span> */}

                <div
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#1e3a8a] font-bold text-white xl:h-10 xl:w-10"
                >
                  {getInitial(user.FirstName)}
                </div>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full z-[999] mt-2 flex w-44 flex-col overflow-hidden rounded-[6px] border border-[#e5e7eb] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
                    <Link
                      to="/profile"
                      onClick={closeAllMenus}
                      className="cursor-pointer bg-white px-4 py-[10px] text-left text-[15px] font-[700] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f3f4f6]"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-trips"
                      onClick={closeAllMenus}
                      className="cursor-pointer bg-white px-4 py-[10px] text-left text-[15px] font-[700] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f3f4f6]"
                    >
                      My Trips
                    </Link>
                    <button
                      onClick={logout}
                      className="cursor-pointer border-none bg-white px-4 py-[10px] text-left text-[15px] font-[700] text-[#1e3a8a] transition-colors duration-300 hover:bg-[#f3f4f6]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e3a8a] xl:h-10 xl:w-10">
                <Link
                  to="/LoginPage"
                  className="flex items-center justify-center"
                >
                  <User className="h-4 w-4 text-white xl:h-5 xl:w-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div className="flex shrink-0 items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer rounded-[6px] border-none bg-transparent p-2 outline-none focus:shadow-[0_0_0_2px_rgba(14,165,164,0.35)]"
              type="button"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#1e3a8a]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1e3a8a]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="block bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] lg:hidden">
          <div className="mx-auto w-[95%] px-3 pb-3 pt-2">
            <Link
              to="/tirupati-packages"
              className="block rounded-[6px] px-3 py-[10px] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f9fafb] hover:text-[#0ea5a4]"
              onClick={closeAllMenus}
            >
              Tirupati Packages
            </Link>

            <Link
              to="/coming-soon"
              className="block rounded-[6px] px-3 py-[10px] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f9fafb] hover:text-[#0ea5a4]"
              onClick={closeAllMenus}
            >
              Destination
            </Link>

            <Link
              to="/coming-soon"
              className="block rounded-[6px] px-3 py-[10px] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f9fafb] hover:text-[#0ea5a4]"
              onClick={closeAllMenus}
            >
              Itineraries
            </Link>

            <Link
              to="/coming-soon"
              className="flex items-center gap-1 rounded-[6px] px-3 py-[10px] text-[#1e3a8a] no-underline transition-colors duration-300 hover:bg-[#f9fafb] hover:text-[#0ea5a4]"
              onClick={closeAllMenus}
            >
              <span>More</span>
              <ChevronDown className="h-4 w-4" />
            </Link>

            <div className="relative mt-2 flex items-center gap-3 px-3">
              <a
                href="tel:+919731312275"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a8a]"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>

              <a
                href="mailto:info@sanchar6t.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a8a]"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>

              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={closeAllMenus}
                    className="rounded-[6px] px-3 py-[8px] text-[15px] font-[700] text-[#1e3a8a] no-underline hover:bg-[#f3f4f6]"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeAllMenus();
                    }}
                    className="rounded-[6px] border-none bg-transparent px-3 py-[8px] text-[15px] font-[700] text-[#1e3a8a] hover:bg-[#f3f4f6]"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a8a]">
                  <Link
                    to="/login-signup"
                    onClick={closeAllMenus}
                    className="flex items-center justify-center"
                  >
                    <User className="h-5 w-5 text-white" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
