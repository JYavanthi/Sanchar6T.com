// src/lib/parseBusData.ts
export type Gender = "M" | "F" | null;

export interface Seat {
  seatNumber: string | null;   // "A1" or null for non-seat
  seatType: string | null;     // "UB", "LB", ".GY", etc.
  raw: string;                 // original token
  isSeat: boolean;             // true when token represents a seat
  // Derived:
  isAvailable?: boolean;       // true if present in available list
  fare?: number;               // fare from available list or fares_hash fallback
  gst?: number;                // gst from available_gst
  isBooked?: boolean;          // inverse of isAvailable (if seat existing but not available -> booked)
  gender?: Gender;             // 'F' if in ladies_booked_seats, 'M' if in gents_booked_seats, else null
  isBlocked?: boolean;         // for gangway/driver/wc entries
}

export interface BusLayoutRow {
  columns: Seat[];
}

export interface ParsedStage {
  id: string;
  time: string;
  address: string;
  landmark?: string;
  contact?: string;
  name?: string;
}

export interface ParsedBusLayout {
  totalSeats: number;
  rows: BusLayoutRow[];
  availableSeats: { seatNumber: string; fare: number }[];
  availableGst: { seatNumber: string; gst: number }[];
  boardingStages: ParsedStage[];
  dropoffStages: ParsedStage[];
}

export interface ParsedBusData {
  id: string | number;
  bus_layout: ParsedBusLayout;
}

/**
 * parseCoachDetails
 * - details: the coach_details string from API
 * - Returns rows as array of columns; each column parsed into Seat (isSeat true/false)
 */
export function parseCoachDetails(details: string): BusLayoutRow[] {
  if (!details || typeof details !== "string") return [];

  // split by comma for rows
  const rowsRaw = details.split(",").map((r) => r.trim()).filter(Boolean);

  const rows: BusLayoutRow[] = rowsRaw.map((rowStr) => {
    // split by hyphen for columns in that row
    const colsRaw = rowStr.split("-").map((c) => c.trim()).filter((c) => c !== "");
    const columns: Seat[] = colsRaw.map((colRaw) => {
      // split by pipe
      const parts = colRaw.split("|").map(p => p.trim()).filter(Boolean);

      // If two parts (seatNumber|seatType) — seat
      if (parts.length >= 2 && parts[0].length > 0 && !parts[0].startsWith(".")) {
        return {
          seatNumber: parts[0],
          seatType: parts[1] ?? null,
          raw: colRaw,
          isSeat: true,
        };
      }

      // Otherwise treat as layout identifier or special (e.g. .GY, DOOR, .DR_IMG)
      return {
        seatNumber: null,
        seatType: parts[0] ?? colRaw,
        raw: colRaw,
        isSeat: false,
        isBlocked: true,
      };
    });

    return { columns };
  });

  return rows;
}

/** parseAvailableSeats: ",A4|300,A6|300" -> [{seatNumber:'A4', fare:300}, ...] */
export function parseAvailableSeats(avStr: string): { seatNumber: string; fare: number }[] {
  if (!avStr || typeof avStr !== "string") return [];
  return avStr
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
    .map(entry => {
      const [seatNumber, fareStr] = entry.split("|").map(p => p.trim());
      return { seatNumber, fare: fareStr ? parseFloat(fareStr) : 0 };
    });
}

/** parseAvailableGst: same as above for GST */
export function parseAvailableGst(gstStr: string): { seatNumber: string; gst: number }[] {
  if (!gstStr || typeof gstStr !== "string") return [];
  return gstStr
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
    .map(entry => {
      const [seatNumber, gstVal] = entry.split("|").map(p => p.trim());
      return { seatNumber, gst: gstVal ? parseFloat(gstVal) : 0 };
    });
}

/**
 * parseStages - parse boarding_stages or dropoff_stages
 * Each individual stage separated by '~', fields inside by '|'
 * returns array of ParsedStage
 */
export function parseStages(stageStr: string): ParsedStage[] {
  if (!stageStr || typeof stageStr !== "string") return [];

  // Some API responses may already have leading/trailing '|' — remove empty items
  const groups = stageStr.split("~").map(g => g.trim()).filter(Boolean);

  return groups.map(group => {
    const p = group.split("|").map(x => x.trim());
    return {
      id: p[0] ?? "",
      time: p[1] ?? "",
      address: p[2] ?? "",
      landmark: p[3] ?? "",
      contact: p[4] ?? "",
      name: p[5] ?? "",
    };
  });
}

/**
 * Main parse function: consumes raw API response and returns ParsedBusData
 * It merges available seats + GST + ladies/gents booked lists into seats grid
 */
export function parseBusData(apiResponse: any): ParsedBusData {
  if (!apiResponse) throw new Error("Empty API response");

  // layout may be under apiResponse.bus_layout or apiResponse.result.bus_layout
  const layout =
    apiResponse.bus_layout ??
    (apiResponse.result && apiResponse.result.bus_layout) ??
    (apiResponse.result?.bus_layout) ??
    null;

  if (!layout) throw new Error("bus_layout not found in API response");

  // available strings might be in layout.available / apiResponse.available_seats / layout.available_seats
  const availableStr =
    apiResponse.available_seats ??
    layout.available ??
    apiResponse.result?.available ??
    "";

  const availableGstStr =
    apiResponse.available_gst ??
    layout.available_gst ??
    "";

  const availSeats = parseAvailableSeats(availableStr);
  const availGsts = parseAvailableGst(availableGstStr);

  const availMap = new Map<string, number>(availSeats.map(a => [a.seatNumber, a.fare]));
  const gstMap = new Map<string, number>(availGsts.map(g => [g.seatNumber, g.gst]));

  // ladies_booked_seats and gents_booked_seats lists (comma separated)
  const ladiesBookedList = (layout.ladies_booked_seats ?? layout.ladies_seats ?? "") as string;
  const gentsBookedList = (layout.gents_booked_seats ?? layout.gents_seats ?? "") as string;

  const ladiesSet = new Set(
    ladiesBookedList
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)
  );
  const gentsSet = new Set(
    gentsBookedList
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)
  );

  // Parse rows
  const rows = parseCoachDetails(layout.coach_details ?? "");

  // Merge availability + gst + gender into seat objects
  for (const row of rows) {
    for (const col of row.columns) {
      if (!col.isSeat || !col.seatNumber) {
        // non-seat items (gangway, door, images)
        col.isAvailable = false;
        col.isBlocked = !!col.isBlocked;
        col.fare = 0;
        col.gst = 0;
        col.isBooked = false;
        col.gender = null;
        continue;
      }

      const sn = col.seatNumber;
      const fare = availMap.has(sn) ? availMap.get(sn)! : undefined;
      const gst = gstMap.has(sn) ? gstMap.get(sn)! : undefined;

      col.fare = fare ?? (layout.fares_hash?.[col.seatType ?? ""] ? Number(layout.fares_hash[col.seatType].Adult) : 0);
      col.gst = gst ?? 0;

      // Available if present in availMap
      col.isAvailable = availMap.has(sn);
      col.isBooked = !col.isAvailable;

      // Gender: if appears in ladies/gents booked lists, set gender accordingly
      if (ladiesSet.has(sn)) col.gender = "F";
      else if (gentsSet.has(sn)) col.gender = "M";
      else col.gender = null;

      // If seatType starts with '.' or contains 'GY' treat as blocked / not selectable
      col.isBlocked = !!(col.seatType && col.seatType.startsWith("."));
    }
  }

  // parse stages
  const boardingStages = parseStages(layout.boarding_stages ?? "");
  const dropoffStages = parseStages(layout.dropoff_stages ?? "");

  const parsed: ParsedBusLayout = {
    totalSeats: Number(layout.total_seats ?? 0),
    rows,
    availableSeats: availSeats,
    availableGst: parseAvailableGst(availableGstStr),
    boardingStages,
    dropoffStages,
  };

  // id might be at root or in result
  const id = apiResponse.id ?? apiResponse.result?.id ?? apiResponse.result?.trip_id ?? "unknown";

  return {
    id,
    bus_layout: parsed,
  };
}

