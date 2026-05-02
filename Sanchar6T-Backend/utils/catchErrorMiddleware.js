// middleware/catchError.js
// utils/catchErrorMiddleware.js  ← REPLACE WITH THIS EXACT CODE
// utils/catchErrorMiddleware.js
export const catchError = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
// middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ success: false, error: "Something went wrong" });
};
