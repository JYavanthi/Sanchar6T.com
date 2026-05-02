import { getMasterCache } from "../../cache/masterCache.js";
import BitlaRepository from "./bitla.repository.js";
import BitlaService from "./bitla.service.js";

export default class BitlaMethods {
  constructor() {
    const bitlaRepository = new BitlaRepository();
    this.cache = getMasterCache(bitlaRepository);
    this.service = new BitlaService();
  }

  async getDestinationCities(cityId) {
    // Fetch cached cities & pairs
    const cities = await this.cache.get(
      "cities",
      () => this.cache.repo.fetchCities()
    );

    const cityPairs = await this.cache.get(
      "cityPairs",
      () => this.cache.repo.fetchCityPairs(),
      {
        transform: { travel_ids: this.cache.transformIds.bind(this.cache) },
      }
    );

    // Convert list → dictionary for faster lookups
    const cityMap = new Map(cities.map((c) => [c.id, c]));

    // 1️⃣ Destinations where cityId is origin
    const destinations = cityPairs
      .filter((pair) => pair.origin_id === cityId)
      .map((pair) => ({
        ...cityMap.get(pair.destination_id), // full city data
        travel_ids: pair.travel_ids, // add travel ids
        origin_id: pair.origin_id,
        destination_id: pair.destination_id,
      }))
      .filter(Boolean);

    // 2️⃣ Origins where cityId is destination
    // const origins = cityPairs
    //   .filter((pair) => pair.destination_id === cityId)
    //   .map((pair) => ({
    //     ...cityMap.get(pair.origin_id), // full city data
    //     travel_ids: pair.travel_ids, // add travel ids
    //     origin_id: pair.origin_id,
    //     destination_id: pair.destination_id,
    //   }))
    //   .filter(Boolean);

    return destinations;
  }

  makeFilterKey(filters) {
    const normalized = {
      ac: filters.ac ?? null,
      seatType: filters.seatType ?? null,
      operators: filters.operators
        ? Array.isArray(filters.operators)
          ? filters.operators.slice().sort().join(",")
          : String(filters.operators)
        : null,
      busType: filters.busType
        ? Array.isArray(filters.busType)
          ? filters.busType.slice().sort().join(",")
          : String(filters.busType)
        : null,
      after: filters.departureAfter || null,
      before: filters.departureBefore || null,
      afterArrival: filters.arrivalAfter || null,
      beforeArrival: filters.arrivalBefore || null,
      minFare: filters.minFare ?? null,
      maxFare: filters.maxFare ?? null,
      minSeats: filters.minSeats ?? null,
      cancellable: filters.cancellable ?? null,
      pickup: filters.pickup
        ? Array.isArray(filters.pickup)
          ? filters.pickup.map(String).sort().join(",")
          : String(filters.pickup)
        : null,
      dropoff: filters.dropoff
        ? Array.isArray(filters.dropoff)
          ? filters.dropoff.map(String).sort().join(",")
          : String(filters.dropoff)
        : null,
    };
    return btoa(JSON.stringify(normalized)).replace(/=/g, "");
  }

  timeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + (m || 0);
  }

  extractFare(fareInput) {
    if (!fareInput) return 0;
    const match = String(fareInput).match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  }

  applyFilters(schedules, filters) {
    return schedules.filter((bus) => {
      // ────── AC ──────
      if (filters.ac !== undefined) {
        const wantsAC = filters.ac === "true" || filters.ac === true;
        const isAC = bus.is_ac_bus === true
        if (wantsAC !== isAC) return false;
      }

      if (filters.seatType) {
        const wanted = filters.seatType; // "sleeper" or "seater"
        const fareCode = (bus.fare_str || bus.show_fare_screen || "").toUpperCase();
        const isSleeperCategory = fareCode.includes("SL") || fareCode.includes("SS");
        const isSeaterOnly = fareCode.includes("ST");
        if (wanted === "sleeper" && !isSleeperCategory) return false;
        if (wanted === "seater" && !isSeaterOnly) return false;
      }

      // ────── CANCELLABLE ──────
      if (filters.cancellable !== undefined) {
        const wants = filters.cancellable === "true" || filters.cancellable === true;
        if (wants !== bus.is_cancellable) return false;
      }

      // ────── OPERATORS ──────
      if (filters.operators) {
        const selected = decodeURIComponent(String(filters.operators))
          .split(",")
          .map(s => s.trim())
          .filter(Boolean);

        if (!selected.includes(bus.operator_service_name)) {
          return false;
        }
      }

      // ────── BUS TYPE (e.g. "Multi Axle", "Volvo", "Sleeper") ──────
      if (filters.busType) {
        const keywords = decodeURIComponent(String(filters.busType))
          .split(",")
          .map(s => s.trim().toLowerCase())
          .filter(Boolean);

        const busTypeLower = (bus.bus_type || "").toLowerCase();
        if (!keywords.some(k => busTypeLower.includes(k))) {
          return false;
        }
      }

      // ────── PICKUP POINTS (boarding_stages) ──────
      if (filters.pickup) {
        const selectedPickupIds = String(filters.pickup)
          .split(",")
          .map(s => s.trim())
          .filter(Boolean);

        const boardingStages = String(bus.boarding_stages || "");
        if (!boardingStages) return false;

        const availablePickupIds = boardingStages
          .split(",")
          .map(stage => stage.split("|")[0]?.trim())  // Extract ID before "|"
          .filter(Boolean);

        const hasMatch = availablePickupIds.some(id => selectedPickupIds.includes(id));
        if (!hasMatch) return false;
      }

      // ────── DROPOFF POINTS (dropoff_stages) ──────
      if (filters.dropoff) {
        const selectedDropoffIds = String(filters.dropoff)
          .split(",")
          .map(s => s.trim())
          .filter(Boolean);

        const dropoffStages = String(bus.dropoff_stages || "");
        if (!dropoffStages) return false;

        const availableDropoffIds = dropoffStages
          .split(",")
          .map(stage => stage.split("|")[0]?.trim())  // Extract ID before "|"
          .filter(Boolean);

        const hasMatch = availableDropoffIds.some(id => selectedDropoffIds.includes(id));
        if (!hasMatch) return false;
      }

      // ────── TIME FILTERS (departure & arrival) ──────
      const depMinutes = this.timeToMinutes(bus.dep_time);
      const arrMinutes = this.timeToMinutes(bus.arr_time);

      if (filters.departureAfter) {
        if (depMinutes < this.timeToMinutes(filters.departureAfter)) return false;
      }
      if (filters.departureBefore) {
        if (depMinutes > this.timeToMinutes(filters.departureBefore)) return false;
      }
      if (filters.arrivalAfter) {
        if (arrMinutes < this.timeToMinutes(filters.arrivalAfter)) return false;
      }
      if (filters.arrivalBefore) {
        if (arrMinutes > this.timeToMinutes(filters.arrivalBefore)) return false;
      }

      // ────── FARE & SEATS ──────
      const fare = this.extractFare(bus.fare_str || bus.show_fare_screen);

      if (filters.minFare !== undefined) {
        const min = Number(filters.minFare);
        if (!isNaN(min) && fare < min) return false;
      }
      if (filters.maxFare !== undefined) {
        const max = Number(filters.maxFare);
        if (!isNaN(max) && fare > max) return false;
      }
      if (filters.minSeats !== undefined) {
        const seats = Number(filters.minSeats);
        if (!isNaN(seats) && bus.available_seats < seats) return false;
      }

      return true;
    });
  }

  async getSchedules(originId, destinationId, date, filters = {}) {
    const rawKey = `schedules/${originId}/${destinationId}/${date}/raw`;
    const filterKey = this.makeFilterKey(filters);
    const filteredKey = `schedules/${originId}/${destinationId}/${date}/filtered/${filterKey}`;

    // 1. Try cached filtered result
    const cached = await this.cache.get(filteredKey, null);
    if (cached !== undefined) {
      console.log("Filtered cache HIT");
      return cached;
    }

    // 2. Get raw data
    const rawSchedules = await this.cache.get(rawKey, () =>
      this.cache.repo.fetchSchedules(originId, destinationId, date)
    );

    // 3. Filter
    const result = this.applyFilters(rawSchedules, filters);

    // 4. Cache filtered result for 10 minutes
    await this.cache.get(filteredKey, null, { data: result });

    return result;
  }

  async getScheduleAndAvailability(scheduleId) {
    const schedule = await this.service.getSchedule(scheduleId);
    const availability = await this.service.getAvailability(scheduleId);
    let available_data;
    if (Array.isArray(availability) && availability.length > 0) {
      available_data = {
        available_seats: availability[0].available,
        available_gst: availability[0].available_gst,
      };
    }

    return {
      id: schedule.id,
      bus_layout: schedule.bus_layout,
      ...available_data,
    };
  }
}
