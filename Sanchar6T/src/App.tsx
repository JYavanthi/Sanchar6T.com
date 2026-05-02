// import { useEffect, useState } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Tirupati from "./pages/TirupatiPackages";
// import Preloader from "./components/PreLoader";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import BusBooking from "./pages/BusBooking";
// import BookingDetails from "./pages/BookingDetails";
// import Practice from "./pages/Practice";
// import LoginPage from "./pages/LoginPage";
// import Payment from "./pages/Payment";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import ScrollToTop from "./components/ScrollToTop";
// import Ticket from "./pages/Ticket";
// import HotelRoom from "./pages/HotelRoom";
// import Cab from "./pages/Cab";
// import Flight from "./pages/Flight";
// import ComingSoonPage from "./pages/ComingSoonPage";
// import SideBarPage from "./pages/SideBarPage";
// import PhonePePayment from "./components/payment/PhonePePayment";
// import SignupLogin from "./pages/SignupLogin";
// import PaymentResult from "./pages/PaymentResult";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import PaymentFailed from "./components/PaymentFailed";
// const queryClient = new QueryClient();

// // ✅ Wrapper to handle Preloader on route changes
// const PageWrapper = ({ children }) => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 800); // adjust speed
//     return () => clearTimeout(timer);
//   }, [location.pathname]); // runs whenever route changes

//   if (loading) {
//     return <Preloader />;
//   }

//   return children;
// };

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop />
//           <PageWrapper>
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/tirupati-packages" element={<Tirupati />} />
//               <Route path="/about-us" element={<AboutUs />} />
//               <Route path="/contact-us" element={<ContactUs />} />
//               <Route path="/bus-booking" element={<BusBooking />} />
//               <Route path="/booking-details" element={<BookingDetails />} />
//               <Route path="/practice" element={<Practice />} />
//               <Route path="/payment" element={<Payment />} />
//               <Route path="/policy" element={<PrivacyPolicy />} />
//               <Route path="/terms" element={<TermsAndConditions />} />
//               <Route path="/ticket" element={<Ticket />} />
//               <Route path="/hotel-rooms" element={<HotelRoom />} />
//               <Route path="/cab" element={<Cab />} />
//               <Route path="/flight" element={<Flight />} />
//               <Route path="/coming-soon" element={<ComingSoonPage />} />
//               <Route path="sidebar" element={<SideBarPage />} />
//               <Route path="/phonepay-payment" element={<PhonePePayment />} />
//               <Route path="/login-signup" element={<SignupLogin />} />
//               <Route path="/payment-result" element={<PaymentResult />} />
//               <Route path="*" element={<NotFound />} />
//               <Route path="/payment-failed" element={<div>Payment Failed ❌</div>} />
//               <Route path="/payment-failed" element={<PaymentFailed />} />
//             </Routes>
//           </PageWrapper>
//         </BrowserRouter>
//       </TooltipProvider>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default App;



import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tirupati from "./pages/TirupatiPackages"; 
import Preloader from "./components/PreLoader";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BusBooking from "./pages/BusBooking";
import BookingDetails from "./pages/BookingDetails";
import Practice from "./pages/Practice";
import LoginPage from "./pages/LoginPage";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import Ticket from "./pages/Ticket";
import HotelRoom from "./pages/HotelRoom";
import Cab from "./pages/Cab";
import Flight from "./pages/Flight";
import ComingSoonPage from "./pages/ComingSoonPage";
import SideBarPage from "./pages/SideBarPage";
import PhonePePayment from "./components/payment/PhonePePayment";
import SignupLogin from "./pages/SignupLogin";
import PaymentResult from "./pages/PaymentResult";
import PackageDetails from "./components/PackageDetails/IndPackageDetails";
import Signup from "./pages/SignUp";
// import AgentLogin from "./pages/Agent_logIn"


const queryClient = new QueryClient();

// ✅ Wrapper to handle Preloader on route changes
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // adjust speed
    return () => clearTimeout(timer);
  }, [location.pathname]); // runs whenever route changes

  if (loading) {
    return <Preloader />;
  }

  return children;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tirupati-packages" element={<Tirupati />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/bus-booking" element={<BusBooking />} />
              <Route path="/booking-details" element={<BookingDetails />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/hotel-rooms" element={<HotelRoom />} />
              <Route path="/cab" element={<Cab />} />
              <Route path="/flight" element={<Flight />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="sidebar" element={<SideBarPage />} />
              <Route path="/phonepay-payment" element={<PhonePePayment />} />
              <Route path="/login-signup" element={<SignupLogin />} />
              <Route path="/payment-result" element={<PaymentResult />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/package-details/:packageId" element={<PackageDetails />} />
               <Route path="/LoginPage" element={<LoginPage />} />
               <Route path="/Sign-up" element={<Signup />} />
               {/* <Route path="/Agent-login" element={<AgentLogin />} /> */}

            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;



