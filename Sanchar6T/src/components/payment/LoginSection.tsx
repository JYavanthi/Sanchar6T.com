const LoginSection = () => {
  return (
    <div className="bg-white rounded-lg border p-5 mb-4" style={{borderColor: '#e0e0e0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold mb-1 text-sm" style={{color: '#333'}}>Additional discounts and saved payment options</h3>
          <p className="text-xs" style={{color: '#666'}}>Get exclusive discounts and use previously saved payment methods on logging in.</p>
        </div>
        
        <button className="text-white px-4 py-2 rounded font-medium text-xs" style={{backgroundColor: '#4a90e2'}}>
          LOG IN &gt;
        </button>
      </div>
    </div>
  );
};

export default LoginSection;