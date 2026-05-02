const PricingSidebar = () => {
  return (
    <div className="w-72 space-y-4">
      {/* Total Due Card */}
      <div className="bg-white rounded-lg border p-5" style={{borderColor: '#e0e0e0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold" style={{color: '#333'}}>Total Due</h3>
          <span className="text-lg font-bold" style={{color: '#27ae60'}}>₹ 3,255</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{color: '#666'}}>Base Fare</span>
            <span className="font-medium text-sm">₹ 3,100</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{color: '#666'}}>Operator Gst</span>
            <span className="font-medium text-sm">₹ 155</span>
          </div>
        </div>
      </div>
      
      {/* Scan to Pay Card */}
      <div className="bg-white rounded-lg border p-5" style={{borderColor: '#e0e0e0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <h4 className="font-semibold mb-2 text-sm" style={{color: '#333'}}>Scan to Pay</h4>
        <p className="text-xs mb-4" style={{color: '#666'}}>Instant Refund & High Success Rate</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1.5">
            {/* Payment Method Icons */}
            <div className="w-7 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#ff6b35'}}>
              <svg width="10" height="8" fill="white" viewBox="0 0 10 8">
                <path d="M5 0L4 1h2L5 0zM1 2v4l1-1-1-3zM9 2l-1 3 1 1V2zM5 8l1-1H4l1 1z"/>
              </svg>
            </div>
            <div className="w-7 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#4285f4'}}>
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div className="w-7 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#673ab7'}}>
              <span className="text-white text-xs font-bold">₹</span>
            </div>
            <div className="w-7 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#4caf50'}}>
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <div className="w-7 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#424242'}}>
              <span className="text-white text-xs font-bold">B</span>
            </div>
          </div>
          
          <div className="relative">
            {/* QR Code */}
            <div className="w-16 h-16 rounded-lg flex items-center justify-center relative" style={{backgroundColor: '#000'}}>
              <div className="w-14 h-14 bg-white rounded p-0.5 grid grid-cols-21 gap-px">
                {/* Realistic QR pattern */}
                <div className="col-span-3 row-span-3 bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="col-span-3 row-span-3 bg-black ml-auto"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="col-span-3 row-span-3 bg-black"></div>
              </div>
            </div>
            <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs px-2 py-0.5 rounded" style={{backgroundColor: '#4a90e2'}}>
              VIEW QR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSidebar;