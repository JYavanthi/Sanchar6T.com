import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"success" | "failed" | "loading">("loading");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const orderId = params.get("orderId");

    if (!orderId) {
      setStatus("failed");
      return;
    }

    // SANDBOX: assume success for testing
    setStatus("success");

    // --- Optional for production ---
    // axios.get(`/api/payment/status/${orderId}`).then(...).catch(...)
  }, [location]);

  if (status === "loading") return <div>Checking payment status...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow text-center">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
            <p>Your booking is confirmed.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => navigate("/ticket")}
            >
              View Ticket
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-red-600">Payment Failed!</h2>
            <p>Please try again later.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentResult;
