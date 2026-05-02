import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export default class BitlaRepository {
  constructor() {
    this.apiUrl = process.env.BITLA_BASE_URL;
    this.apiKey = process.env.BITLA_API_KEY;
    this.client = axios.create({
      baseURL: this.apiUrl,
      headers: {
        "api-key": this.apiKey,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip",
      },
      timeout: 5000, // optional: timeout for all requests
    });

    this.client.interceptors.response.use(
      response => response,
      error => {
        console.error("Bitla API Error:", error.response?.data ?? error.message);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Fetches master data from the Bitla API.
   * @returns {Promise<any>}
   */
  // async fetchMasterData() {
  //   try {
  //     const response = await this.client.get("gds/api/masters.json");
  //     return response.data?.result;
  //   } catch (error) {
  //     console.error("Error fetching master data:", error);
  //     throw error;
  //   }
  // }

  async fetchCities() {
    try {
      const response = await this.client.get("gds/api/cities.json");
      return response.data?.result;
    } catch (error) {
      console.error("Error fetching cities:", error);
      throw error;
    }
  }

  async fetchCityPairs() {
    try {
      const response = await this.client.get("gds/api/city_pairs.json");
      return response.data?.result;
    } catch (error) {
      console.error("Error fetching city pairs:", error);
      throw error;
    }
  }

  async fetchStages() {
    try {
      const response = await this.client.get("gds/api/stages.json");
      return response.data?.result;
    } catch (error) {
      console.error("Error fetching stages:", error);
      throw error;
    }
  }

  async fetchSchedules(originId, destinationId, date) {
    try {
      const response = await this.client.get(`gds/api/schedules/${originId}/${destinationId}/${date}.json`);
      if (!response.data.result) {
        return [];
      }
      const headers = [...response.data.result[0]]; // clone
      headers.push("stage_names");
      const body = response.data.result.slice(1).map(row => [
        ...row,
        response.data.stage_names
      ]);
      return [headers, ...body];

    } catch (error) {
      console.error("Error fetching schedules:", error);
      throw error;
    }
  }

  async fetchSchedule(scheduleId) {
    try {
      const response = await this.client.get(`gds/api/schedule/${scheduleId}.json`);
      return response.data?.result;
    } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
    }
  }

  async fetchAvailability(scheduleId) {
    try {
      const response = await this.client.get(`gds/api/availability/${scheduleId}.json`);
      return response.data?.result;
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw error;
    }
  }
}

