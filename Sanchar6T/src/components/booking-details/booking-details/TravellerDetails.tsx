import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import maleImg from "@/assets/male.png";
import femaleImg from "@/assets/female.png";

const TravellerDetails = ({ setTravellerData }: { setTravellerData: any }) => {
  const { state } = useLocation();
  const { selectedSeats = [] } = state || {};
  const [docTypes, setDocTypes] = useState<{ [key: number]: string }>({});
  const [travellerType, setTravellerType] = useState<"IND" | "NRI">("IND");
  const [formData, setFormData] = useState<{ [key: number]: any }>({});
  const [copyFromFirst, setCopyFromFirst] = useState(false);

  const docLabels: Record<string, string> = {
    aadhar: "Aadhar Card",
    pan: "Pan Card",
    dl: "D/L",
    passport: "Passport No",
    voter: "Voter ID",
    ration: "Ration Card",
    others: "Others",
  };

  const getDocumentOptions = () => {
    if (travellerType === "NRI") return [];
    return ["aadhar", "pan", "dl", "passport", "voter", "ration", "others"];
  };

  const handleInputChange = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [index]: { ...prev[index], [field]: value }
    }));
  };

  const handleDocTypeChange = (index: number, value: string) => {
    setDocTypes((prev) => ({ ...prev, [index]: value }));
    handleInputChange(index, "docType", value);
  };

  const copyFirstTraveller = () => {
    if (!formData[0]) return;
    setFormData((prev) => {
      const updated = { ...prev };
      selectedSeats.forEach((_, i) => {
        if (i !== 0) updated[i] = { ...formData[0] };
      });
      return updated;
    });
    setDocTypes((prev) => {
      const updated = { ...prev };
      selectedSeats.forEach((_, i) => {
        if (i !== 0) updated[i] = docTypes[0] || "";
      });
      return updated;
    });
  };

  // ✅ Map Aadhaar/PAN/etc. properly
  useEffect(() => {
    const payload = selectedSeats.map((seatId, i) => {
      const t = formData[i] || {};
      const docType = docTypes[i];

      return {
        SeatNo: seatId,
        FirstName: t.name || "",
        MiddleName: t.middleName || "",
        LastName: t.lastName || "",
        Gender: t.gender || "",
        DOB: t.dob || null,
        AadharNo: docType === "aadhar" ? t.docNo || "" : "",
        PancardNo: docType === "pan" ? t.docNo || "" : "",
        DrivingLicense: docType === "dl" ? t.docNo || "" : "",
        PassportNo: docType === "passport" ? t.docNo || "" : "",
        VoterId: docType === "voter" ? t.docNo || "" : "",
        RationCard: docType === "ration" ? t.docNo || "" : "",
        OtherDoc: docType === "others" ? t.docNo || "" : "",
        FoodPref: t.foodPref || "",
        Disabled: t.disabled || false,
        Pregnant: t.pregnant || false,
        IsPrimary: i === 0 ? 1 : 0,
        CreatedBy: 1,
      };
    });
    setTravellerData(payload);
  }, [formData, docTypes, selectedSeats, setTravellerData]);

  return (
    <div className="bg-flixbus-card rounded-lg border border-flixbus-border p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#3D85C6]">Traveller Details</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#3D85C6] font-medium">IND</span>
          <button
            type="button"
            className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 ${
              travellerType === "NRI" ? "bg-[#3d85c6]" : "bg-gray-300"
            }`}
            onClick={() => setTravellerType(travellerType === "IND" ? "NRI" : "IND")}
          >
            <span
              className={`inline-block w-5 h-5 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
                travellerType === "NRI" ? "translate-x-6" : "translate-x-1"
              }`}
            ></span>
          </button>
          <span className="text-sm text-[#3D85C6] font-medium">NRI</span>
        </div>
      </div>

      {selectedSeats.length > 1 && (
        <div className="mb-4 flex items-center space-x-2">
          <input
            id="copyFromFirst"
            type="checkbox"
            checked={copyFromFirst}
            onChange={(e) => {
              const checked = e.target.checked;
              setCopyFromFirst(checked);
              if (checked) copyFirstTraveller();
            }}
          />
          <Label htmlFor="copyFromFirst" className="text-sm text-[#3D85C6] font-medium">
            Copy details from 1st traveller
          </Label>
        </div>
      )}

      {selectedSeats.map((seatId: string, index: number) => (
        <div key={seatId} className="mb-8">
          {/* Seat Info */}
          <div className="flex items-center mb-4 justify-between">
            <div className="flex items-center">
              <span className="text-sm text-[#4A4A4A] mr-1">Seat</span>
              <span className="px-2 py-1 rounded text-sm font-bold">{seatId}</span>
            </div>
          </div>

          {/* Row 1: Name, Age, Gender, Document */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-end">
            <div className="md:col-span-2 flex flex-col">
              <Label htmlFor={`name${index}`} className="text-sm font-medium text-[#3D85C6]">Name</Label>
              <Input
                id={`name${index}`}
                value={formData[index]?.name || ""}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                placeholder="Type here"
                className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue w-48"
              />
            </div>

            {/* Age */}
            <div className="md:col-span-1 flex flex-col">
              <Label htmlFor={`age${index}`} className="text-sm font-medium text-[#3D85C6]">Age</Label>
              <Input
                id={`age${index}`}
                value={formData[index]?.age || ""}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
                placeholder="eg : 24"
                className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue w-20"
              />
            </div>

            {/* Gender */}
            <div className="md:col-span-1 flex flex-col">
              <Label className="text-sm font-medium text-[#3D85C6]">Gender</Label>
              <div className="flex gap-4 mt-1">
                <div
                  className={`flex items-center justify-center w-16 aspect-square rounded-full border cursor-pointer ${
                    formData[index]?.gender === "male" ? "border-[#3D85C6] bg-[#e0f2fe]" : "border-gray-300 bg-white"
                  }`}
                  onClick={() => handleInputChange(index, "gender", "male")}
                >
                  <img src={maleImg} alt="Male" className="w-12 h-12 object-contain" />
                </div>
                <div
                  className={`flex items-center justify-center w-16 aspect-square rounded-full border cursor-pointer ${
                    formData[index]?.gender === "female" ? "border-[#3D85C6] bg-[#ffe4e6]" : "border-gray-300 bg-white"
                  }`}
                  onClick={() => handleInputChange(index, "gender", "female")}
                >
                  <img src={femaleImg} alt="Female" className="w-12 h-12 object-contain" />
                </div>
              </div>
            </div>

            {/* Document */}
            <div className="md:col-span-2 flex gap-4 w-full">
              {travellerType === "IND" ? (
                <>
                  <div className="flex-1 flex flex-col">
                    <Label className="text-sm font-medium text-[#3D85C6]">Document</Label>
                    <Select
                      value={docTypes[index] || ""}
                      onValueChange={(value) => handleDocTypeChange(index, value)}
                    >
                      <SelectTrigger className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {getDocumentOptions().map((doc) => (
                          <SelectItem key={doc} value={doc}>{docLabels[doc]}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {docTypes[index] && (
                      <>
                        <Label htmlFor={`docNo${index}`} className="text-sm font-medium text-[#3D85C6]">{docLabels[docTypes[index]]}</Label>
                        <Input
                          id={`docNo${index}`}
                          value={formData[index]?.docNo || ""}
                          onChange={(e) => handleInputChange(index, "docNo", e.target.value)}
                          placeholder={`Enter ${docLabels[docTypes[index]]}`}
                          className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue w-full"
                        />
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col">
                  <Label htmlFor={`passport${index}`} className="text-sm font-medium text-[#3D85C6]">Passport No</Label>
                  <Input
                    id={`passport${index}`}
                    value={formData[index]?.passport || ""}
                    onChange={(e) => handleInputChange(index, "passport", e.target.value)}
                    placeholder="Enter Passport No"
                    className="mt-1 border-flixbus-border focus:border-flixbus-blue focus:ring-flixbus-blue w-full"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-8 mt-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`disabled${index}`}
                checked={formData[index]?.disabled || false}
                onChange={(e) => handleInputChange(index, "disabled", e.target.checked)}
                className="h-4 w-4"
              />
              <Label htmlFor={`disabled${index}`} className="text-sm text-[#3D85C6]">NRI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`pregnant${index}`}
                checked={formData[index]?.pregnant || false}
                onChange={(e) => handleInputChange(index, "pregnant", e.target.checked)}
                className="h-4 w-4"
              />
              <Label htmlFor={`pregnant${index}`} className="text-sm text-[#3D85C6]">Pregnant Woman</Label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravellerDetails;

