import express from "express";
import BitlaController from "./bitla.controller.js";

const router = express.Router();
const controller = new BitlaController();

// router.get("/cities", controller.getCities);

router.get("/cities", (req, res) => {
  console.log("🔥 BITLA ROUTE HIT");
  controller.getCities(req, res);
});
router.get("/city-pairs", controller.getCityPairs);
router.get("/paired-cities/:cityId", controller.getPairedCities);
router.get("/schedules/:originId/:destinationId/:date", controller.getSchedules);
router.get("/schedule-and-availability/:scheduleId", controller.getScheduleAndAvailability);

export default router;
