// import { ETicket } from "@/components/Ticket/ETicket";

// const Ticket = () => {
//   return (
//     <div style={{minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px'}}>
//       <ETicket />
//     </div>
//   );
// };

// export default Ticket;

import { useLocation } from "react-router-dom";
import { ETicket } from "@/components/Ticket/ETicket";

const Ticket = () => {
  const { state } = useLocation();
  const {
    totalPrice = 0,
    travellerData = [],
    contactData = {},
    gstData = {},
  } = state || {};

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <ETicket
        totalPrice={totalPrice}
        travellerData={travellerData}
        contactData={contactData}
        gstData={gstData}
      />
    </div>
  );
};

export default Ticket;
