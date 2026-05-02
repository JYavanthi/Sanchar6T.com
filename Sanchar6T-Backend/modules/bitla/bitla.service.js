import { getMasterCache } from "../../cache/masterCache.js";
import BitlaRepository from "./bitla.repository.js";

export default class BitlaService {
  constructor() {
    const bitlaRepository = new BitlaRepository();
    this.cache = getMasterCache(bitlaRepository);
    this.bitlaRepository = bitlaRepository;
  }
  async getCities() {
    return this.cache.get('cities', () => this.cache.repo.fetchCities());
  }

  async getCityPairs() {
    return this.cache.get('cityPairs', () => this.cache.repo.fetchCityPairs(), {
      transform: { travel_ids: this.cache.transformIds.bind(this.cache) }
    });
  }

  async getSchedules(originId, destinationId, date) {
    return this.cache.get(`schedules/${originId}/${destinationId}/${date}`, () => this.cache.repo.fetchSchedules(originId, destinationId, date));
  }


  // async getMasterData() {
  //   return this.cache.get('masterData', () => this.cache.repo.fetchMasterData());
  // }
  //
  async getSchedule(scheduleId) {
    return this.cache.get(`schedule/${scheduleId}`, () => this.cache.repo.fetchSchedule(scheduleId), { ttl: 30 * 60 * 1000 });
  }

  async getAvailability(scheduleId) {
    return this.cache.get(`availability/${scheduleId}`, () => this.bitlaRepository.fetchAvailability(scheduleId), { ttl: 10 * 1000 });
  };


  async forceRefreshCache() {
    await this.cache.forceRefreshAll();
  }
}
