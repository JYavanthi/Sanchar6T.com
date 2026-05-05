import JourneyDetails from "@/components/booking-details/booking-details/JourneyDetails";
import TravellerDetails from "@/components/booking-details/booking-details/TravellerDetails";
import ContactDetails from "@/components/booking-details/booking-details/ContactDetails";
import GSTDetails from "@/components/booking-details/booking-details/GSTDetails";
import PincodeSection from "@/components/booking-details/booking-details/PincodeSection";
import TripAssured from "@/components/booking-details/booking-details/TripAssured";
import OffersSection from "@/components/booking-details/booking-details/OffersSection";
import PriceDetails from "@/components/booking-details/booking-details/PriceDetails";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; // import toast
import { API_URLS } from "../API-URLS";
const BusBookingDetails = () => {
  const [travellerData, setTravellerData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any>({});
  const [gstData, setGSTData] = useState<any>({});

  const params = new URLSearchParams(window.location.search);
  const dataString = params.get("data");

  let bookingData = null;
  if (dataString) {
    bookingData = JSON.parse(decodeURIComponent(dataString));
  }

  // const handleSubmit = async (saveFlag: "Y" | "N") => {
  //   try {
  //     for (const traveller of travellerData) {
  //       const payload = {
  //         BusBookingSeatID: 0,
  //         BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
  //         BusOperatorID: traveller.BusOperatorID ?? 5,
  //         UserID: traveller.UserID ?? 12,
  //         ForSelf: traveller.ForSelf ?? true,
  //         IsPrimary: traveller.IsPrimary ?? 1,
  //         SeatNo: traveller.SeatNo,
  //         FirstName: traveller.FirstName,
  //         MiddleName: traveller.MiddleName,
  //         LastName: traveller.LastName,
  //         Email: contactData.Email ?? "",
  //         ContactNo: contactData.ContactNo ?? "",
  //         Gender: traveller.Gender,
  //         AadharNo: traveller.AadharNo ?? "",
  //         PancardNo: traveller.PancardNo ?? "",
  //         BloodGroup: traveller.BloodGroup ?? "",
  //         DOB: traveller.DOB ?? null,
  //         FoodPref: traveller.FoodPref ?? "",
  //         Disabled: traveller.Disabled ?? false,
  //         Pregnant: traveller.Pregnant ?? false,
  //         RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
  //         RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
  //         CreatedBy: traveller.CreatedBy ?? 1,
  //         SavePassengerDetails: saveFlag,
  //       };

  //       await axios.post("http://localhost:5000/api/bus-booking-seat", payload);
  //     }

  //     toast.success("Booking saved successfully!");
  //   } catch (error: any) {
  //     console.error("Error submitting booking:", error.response || error.message);
  //     toast.error("Failed to save booking.");
  //   }
  // };

  const handleSubmit = async (saveFlag: "Y" | "N") => {
  try {
    let seatIds: number[] = [];
    let bookingdtlsId: any = null;
    let userId: any = null;

    for (const traveller of travellerData) {
      const payload = {
        BusBookingSeatID: 0,
        BusBookingDetailsID: traveller.BusBookingDetailsID ?? 101,
        BusOperatorID: traveller.BusOperatorID ?? 5,
        UserID: traveller.UserID ?? 12,
        ForSelf: traveller.ForSelf ?? true,
        IsPrimary: traveller.IsPrimary ?? 1,
        SeatNo: traveller.SeatNo,
        FirstName: traveller.FirstName,
        MiddleName: traveller.MiddleName,
        LastName: traveller.LastName,
        Email: contactData.Email ?? "",
        ContactNo: contactData.ContactNo ?? "",
        Gender: traveller.Gender,
        AadharNo: traveller.AadharNo ?? "",
        PancardNo: traveller.PancardNo ?? "",
        BloodGroup: traveller.BloodGroup ?? "",
        DOB: traveller.DOB ?? null,
        FoodPref: traveller.FoodPref ?? "",
        Disabled: traveller.Disabled ?? false,
        Pregnant: traveller.Pregnant ?? false,
        RegisteredCompanyNumber: gstData.RegisteredCompanyNumber ?? "",
        RegisteredCompanyName: gstData.RegisteredCompanyName ?? "",
        CreatedBy: traveller.CreatedBy ?? 1,
        SavePassengerDetails: saveFlag,
      };

const res = await axios.post(
  `${API_URLS.API_BASE_URL}/api/bus-booking-seat`,
  payload
);
      const data = res.data;
      console.log("🔥 API RESPONSE:", data);

      const resultData = data?.result?.[0];

      if (resultData?.BusBookingSeatID) {
        seatIds.push(resultData.BusBookingSeatID); // ✅ collect ALL seats
      }

      bookingdtlsId = resultData?.BookingdtlsID;
      userId = resultData?.UserID;
    }

    const finalResponse = {
      BookingdtlsID: bookingdtlsId,
      UserID: userId || 1,
      BusBookingSeatIDs: seatIds, // ✅ NOW FILLED
    };

    console.log("🔥 FINAL RESPONSE:", finalResponse);

    return finalResponse;

  } catch (error) {
    console.error("❌ Error:", error);
    return null;
  }
};
  return (
    <div className="min-h-screen bg-flixbus-background">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">
            <JourneyDetails />
            <TravellerDetails setTravellerData={setTravellerData} />
            <ContactDetails setContactData={setContactData} />
            <GSTDetails setGSTData={setGSTData} />
            <PincodeSection />
            <TripAssured />
          </div>


          <div className="lg:col-span-1 space-y-6">
            <OffersSection />
            <PriceDetails
              handleSubmit={handleSubmit}
              travellerData={travellerData}
              contactData={contactData}
              gstData={gstData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBookingDetails;






