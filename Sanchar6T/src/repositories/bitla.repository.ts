import { axiosInstance } from "@/config/axiosInstance";

export default class BitlaRepository {
  public static async getOriginCities() {
    return await axiosInstance.get("/api/bitla/cities");
  }

  public static async getDestinationCities(cityId: number) {
    return await axiosInstance.get("/api/bitla/paired-cities/" + cityId);
  }

  public static async getSchedules(originId: number, destinationId: number, date: string, filters: any = {}) {
    return await axiosInstance.get("/api/bitla/schedules/" + originId + "/" + destinationId + "/" + date, { params: filters });
  }

  public static async getScheduleAndAvailability(scheduleId: string) {
    return await axiosInstance.get("/api/bitla/schedule-and-availability/" + scheduleId);
  }
}
