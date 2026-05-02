// modules/bitla/bitla.controller.js  ← FINAL WORKING VERSION
import { catchError } from "../../utils/catchErrorMiddleware.js";
import BitlaService from "./bitla.service.js";
import BitlaMethods from "./bitla.methods.js";

export default class BitlaController {
  constructor() {
    this.bitlaService = new BitlaService();
    this.bitlaMethods = new BitlaMethods();

    // CORRECT ORDER:
    // 1. Define the method first
    // 2. THEN wrap it with catchError
    this.getCities = catchError(this.getCities.bind(this));
    this.getCityPairs = catchError(this.getCityPairs.bind(this));
    this.getPairedCities = catchError(this.getPairedCities.bind(this));
    this.getSchedules = catchError(this.getSchedules.bind(this));
    this.getScheduleAndAvailability = catchError(this.getScheduleAndAvailability.bind(this));
  }

  // Define as regular async methods (NOT class fields, NOT arrow)
  async getCities(req, res) {
    const cities = await this.bitlaService.getCities();
    res.json({
      success: true,
      count: cities.length,
      data: cities,
    });
  }

  async getCityPairs(req, res) {
    console.log('getCityPairs');
    const cityPairs = await this.bitlaService.getCityPairs();
    res.json({
      success: true,
      count: cityPairs.length,
      data: cityPairs,
    });
  }

  async getPairedCities(req, res) {
    const cityPairs = await this.bitlaMethods.getDestinationCities(Number(req.params.cityId));
    res.json({
      success: true,
      data: cityPairs,
    });
  }

  async getSchedules(req, res) {
    const schedules = await this.bitlaMethods.getSchedules(Number(req.params.originId), Number(req.params.destinationId), req.params.date, req.query);
    res.json({
      success: true,
      data: schedules,
    });
  }

  async getScheduleAndAvailability(req, res) {
    const schedule = await this.bitlaMethods.getScheduleAndAvailability(Number(req.params.scheduleId));
    res.json({
      success: true,
      data: schedule,
    });
  }
}
