// components/converters/convertToBusListingProps.ts
import { BusListingProps } from "@/components/booking/BusListing";

interface StageNames {
  [stageId: string]: string;
}

interface RawSchedule {
  id: number;
  number: string;
  operator_service_name: string;
  bus_type: string;
  dep_time: string;
  arr_time: string;
  duration: string;
  available_seats: number;
  total_seats: number;
  fare_str: string;
  show_fare_screen?: string;
  is_cancellable: boolean;
  is_ac_bus: boolean;
  allow_reschedule: boolean;
  boarding_stages: string;
  dropoff_stages: string;
  amenities: string[] | null;
  stage_names: StageNames;
  travel_date: string;
  via: string;
  cancellation_policies: string;
  last_seats?: string;
  social_distancing_guaranteed: boolean;
  no_coach_layout: boolean;
}

const parseStages = (stagesStr: string) => {
  if (!stagesStr) return [];
  return stagesStr
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
    .map(part => {
      const [id, time] = part.split("|");
      return { id: id?.trim(), time: time?.trim() };
    });
};

// components/converters/convertToBusListingProps.ts

interface SeatTypePrice {
  type: string;
  code: string;
  price: number;
  displayName: string;
}

const SEAT_TYPE_MAP: Record<string, string> = {
  SS: "Semi Sleeper",
  SL: "Sleeper",
  LB: "Lower Berth",
  UB: "Upper Berth",
  ST: "Seater",
  PB: "Push Back",
  NPB: "No Push Back",
  BS: "Semi Cama",
  WSS: "Window Semi Sleeper",
  WST: "Window Seater",
  WLB: "Window Lower Berth",
  WUB: "Window Upper Berth",
  BU: "Cama Suite",
  PREMIUM: "Premium",
  "CAMA VIP": "Cama VIP",
  EXECUTIVO: "Ejecutivo",
  "SALON CAMA": "Salon Cama",
  // Add more as needed
};

const parseFareStr = (fareStr: string): SeatTypePrice[] => {
  if (!fareStr) return [];

  return fareStr
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const match = item.match(/^([A-Z]+):?\s*([\d.]+)/i);
      if (!match) return null;

      const code = match[1].toUpperCase();
      const price = parseFloat(match[2]);
      const displayName = SEAT_TYPE_MAP[code] || code;

      return { code, price, type: displayName, displayName };
    })
    .filter(Boolean) as SeatTypePrice[];
};

const formatDuration = (duration: string) => {
  if (!duration) return "N/A";
  const [h, m] = duration.split(":");
  return `${h}h ${m}m`;
};

export const convertToBusListingProps = (
  bus: RawSchedule
): BusListingProps & {
  seatPrices?: SeatTypePrice[];
  cheapestPrice?: number;
  viaStops?: string[];
  lastSeatsWarning?: boolean;
  noCoachLayout?: boolean;
} => {
  const seatPrices = parseFareStr(bus.fare_str || bus.show_fare_screen || "");
  const prices = seatPrices.map((s) => s.price);
  const cheapestPrice = prices.length > 0 ? Math.min(...prices) : null;

  const boardingStages = parseStages(bus.boarding_stages);
  const dropoffStages = parseStages(bus.dropoff_stages);

  const boardingPoints = boardingStages.map((s) => {
    const name = bus.stage_names?.[s.id] || `Point ${s.id}`;
    return `${name} (${s.time})`;
  });

  const dropoffPoints = dropoffStages.map((s) => {
    const name = bus.stage_names?.[s.id] || `Point ${s.id}`;
    return `${name} (${s.time})`;
  });

  const viaStops = bus.via
    ? bus.via.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const hasLastSeats = !!bus.last_seats && parseInt(bus.last_seats) <= 5;

  return {
    busNumber: bus.id.toString(),
    operator: bus.operator_service_name,
    busType: bus.bus_type || "AC Bus",
    departureTime: bus.dep_time,
    arrivalTime: bus.arr_time,
    duration: formatDuration(bus.duration || ""),
    date: bus.travel_date,
    price: cheapestPrice?.toString() || "N/A", // Show cheapest price on main card
    seatsAvailable: bus.available_seats,
    totalSeats: bus.total_seats,
    amenities: bus.amenities || [],
    boardingPoints,
    dropoffPoints,
    seatPrices, // ← All seat types + prices
    cheapestPrice,
    isCancellable: bus.is_cancellable,
    allowReschedule: bus.allow_reschedule,
    viaStops,
    lastSeatsWarning: hasLastSeats,
    noCoachLayout: bus.no_coach_layout,
    socialDistancing: bus.social_distancing_guaranteed,
  };
};
