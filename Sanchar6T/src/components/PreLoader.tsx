// src/components/Preloader.jsx
import logo from "@/assets/logo.jpeg";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img 
        src={logo} 
        alt="Sanchar6T Logo" 
        className="w-48 h-48 animate-pulse" // ✅ increased size
      />
    </div>
  );
};

export default PreLoader;
