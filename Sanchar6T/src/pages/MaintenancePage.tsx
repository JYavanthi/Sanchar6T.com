import React from "react";
import { Settings, Loader2 } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col items-center gap-6 p-10 bg-white border shadow-md rounded-2xl">
        {/* Animated loading + settings icon */}
        <div className="relative w-24 h-24">
          <Loader2 className="w-20 h-20 absolute inset-0 m-auto animate-spin text-violet-600" />
          <Settings className="w-10 h-10 absolute inset-0 m-auto text-violet-800" />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 text-center">
          We are under maintenance
        </h1>
        <p className="text-gray-600 text-center text-sm">
          Please visit us later.
        </p>
      </div>

      {/* fallback css if tailwind not available */}
      <style>{`
        .animate-spin { animation: spin 1.8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
