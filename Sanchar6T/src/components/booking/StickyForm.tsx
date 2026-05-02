import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyForm() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Sticky Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-1/3 left-0 z-50 bg-[#3d85c6] text-white px-4 py-2 rounded-r-lg shadow-lg transform -translate-y-1/2 hover:bg-[#2d6da1]"
      >
        Packages
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#3d85c6]">
            Please Enter Your Details
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form className="p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile*
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Enter mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              From
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="From location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              To
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="To location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              No. of Seats
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Seats required"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              rows={3}
              placeholder="Enter message"
            ></textarea>
          </div>

          <Button className="w-full bg-[#3d85c6] hover:bg-[#2d6da1] text-white">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
