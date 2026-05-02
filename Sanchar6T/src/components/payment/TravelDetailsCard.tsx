import { ChevronDown } from "lucide-react";

const TravelDetailsCard = () => {
  return (
    <div className="bg-white rounded-lg border p-5 mb-4" style={{borderColor: '#e0e0e0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          {/* Bus Icon */}
          <div className="w-11 h-11 rounded-lg flex items-center justify-center mt-1" style={{backgroundColor: '#e8f4fd'}}>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <rect x="2" y="4" width="24" height="12" rx="2" fill="#4a90e2"/>
              <rect x="4" y="6" width="6" height="3" fill="white"/>
              <rect x="11" y="6" width="6" height="3" fill="white"/>
              <rect x="18" y="6" width="6" height="3" fill="white"/>
              <circle cx="7" cy="16" r="2" fill="#333"/>
              <circle cx="21" cy="16" r="2" fill="#333"/>
            </svg>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-base" style={{color: '#333'}}>Bangalore</h3>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{color: '#999'}}>
                <path d="M5 10l3-3-3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <h3 className="font-semibold text-base" style={{color: '#333'}}>Hyderabad</h3>
            </div>
            
            <div className="flex items-center space-x-4 text-sm mb-3" style={{color: '#666'}}>
              <div className="flex items-center space-x-1">
                <div className="w-3.5 h-3.5 rounded-sm flex items-center justify-center" style={{backgroundColor: '#666'}}>
                  <div className="w-2 h-2.5 bg-white rounded-sm"></div>
                </div>
                <span>KSM Roadways(Bharat Benz A/C Sleeper (2+1))</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{color: '#999'}}>
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                  <path d="M7 3v4l2 2" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <span>Mon, 15 Sep 25, 7:31 PM</span>
              </div>
              
              <span className="font-medium" style={{color: '#333'}}>(9h 14m)</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm" style={{color: '#666'}}>
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{color: '#999'}}>
                  <path d="M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 9c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
                <span>abc (Primary), +1 traveller</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{color: '#999'}}>
                  <path d="M12.25 10.5v1.25a.25.25 0 0 1-.25.25H2a.25.25 0 0 1-.25-.25V10.5A1.75 1.75 0 0 1 3.5 8.75h7a1.75 1.75 0 0 1 1.75 1.75zM7 1.75a2.25 2.25 0 0 1 2.25 2.25v1H4.75v-1A2.25 2.25 0 0 1 7 1.75z" fill="currentColor"/>
                </svg>
                <span>+91-7712781633</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="flex items-center space-x-1 text-sm font-medium mt-1" style={{color: '#4a90e2'}}>
          <span>VIEW DETAILS</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TravelDetailsCard;