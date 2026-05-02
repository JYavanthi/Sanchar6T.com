import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.jpeg";

const Cab = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Content Section */}
      <div className="flex-1 bg-white flex flex-col justify-center px-12 lg:px-16">
        <div className="max-w-md">
          <img src={Logo} alt="Logo" className="h-32 w-32 mb-6" />
          
          <div className="space-y-6">
            <h1 className="text-6xl font-normal text-[#1666C5] leading-tight">
              Coming Soon.
            </h1>
            
            <p className="text-lg text-[#374151] leading-relaxed">
              We're building something exciting for all travelers! Soon you'll be able to:
            </p>
            
            <ul className="space-y-3 text-[#374151]">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#1666C5] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Book luxury & budget hotels at the best prices</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#1666C5] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Plan customized travel packages with ease</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#1666C5] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Get seamless flight + hotel + cab bookings in one place</span>
              </li>
            </ul>
            
            <Button
              onClick={handleGoBack}
              className="bg-[#ffcf06] hover:bg-[#ffcf06]/90 text-black font-medium px-12 py-3 rounded-full text-sm uppercase mt-8"
            >
              GO BACK
            </Button>
          </div>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://productcatalo.my.canva.site/buses/_assets/media/f4f08d7e46ac1918893f9b6ae31d9f21.jpg"
          alt="Luxury hotel room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Cab;
