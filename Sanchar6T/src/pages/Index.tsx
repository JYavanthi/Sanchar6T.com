// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import BookingForm from "@/components/BookingForm";
// import ReviewsSection from "@/components/ReviewsSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import PackagesSection from "@/components/PackagesSection";
// import Footer from "@/components/Footer";
// import Promotion from "@/components/Promotion";
// import TravellerVideos from "@/components/TravellerVideos";
// import MeetOurGuide from "@/components/MeetOurGuide";
// import WhyTravelersLove from "@/components/WhyTravelersLove";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import ItineraryPlanner from "@/components/ItineraryPlanner";
// import MaintenancePage from "./MaintenancePage";


// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <HeroSection />
//       <BookingForm />
//       <ReviewsSection />
//       <Promotion />
//       <FeaturesSection />
//       <PackagesSection />
//     <ItineraryPlanner />
//       <TravellerVideos />
//       <MeetOurGuide />
//       <WhyTravelersLove />
//       <Footer />
//       <WhatsAppButton />
//       <MaintenancePage />
//     </div>
//   );
// };

// export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ReviewsSection from "@/components/ReviewsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import Promotion from "@/components/Promotion";
import TravellerVideos from "@/components/TravellerVideos";
import MeetOurGuide from "@/components/MeetOurGuide";
import WhyTravelersLove from "@/components/WhyTravelersLove";
import WhatsAppButton from "@/components/WhatsAppButton";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import MaintenancePage from "./MaintenancePage";
import BusAmenities from "@/components/BusAmenities";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BookingForm />
      <ReviewsSection />
      <Promotion />
      <FeaturesSection />
      <PackagesSection />
      <BusAmenities/>
    {/* <ItineraryPlanner /> */}
      <TravellerVideos />
      <MeetOurGuide />
      <WhyTravelersLove />
      <Footer />
      <WhatsAppButton />
      <MaintenancePage />
    </div>
  );
};

export default Index;
