// src/states/store.ts
import { create } from "zustand";

type City = {
  id: number;
  name: string;
};

type SearchState = {
  origin: City | null;
  destination: City | null;
  date: string | null; // "2025-12-12"

  setOrigin: (city: City | null) => void;
  setDestination: (city: City | null) => void;
  setDate: (date: string | null) => void;
  setSearch: (params: {
    origin?: City | null;
    destination?: City | null;
    date?: string | null;
  }) => void;
  reset: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  origin: null,
  destination: null,
  date: null,

  setOrigin: (origin) => set({ origin, destination: origin?.id === useSearchStore.getState().destination?.id ? null : useSearchStore.getState().destination }),
  setDestination: (destination) => set({ destination }),
  setDate: (date) => set({ date }),
  setSearch: (params) => set((state) => ({ ...state, ...params })),
  reset: () => set({ origin: null, destination: null, date: null }),
}));


type StagePoint = {
  id: string;
  name: string;
};

type StagePointsResult = {
  boarding: StagePoint[];
  dropoff: StagePoint[];
};

type ScheduleRow = {
  boarding_stages?: string;  // "2544|09:00"
  dropoff_stages?: string;   // "11100|11:00"
  stage_names?: Record<string, string>; // { "2544": "Circle", ... }
  [key: string]: any; // allow other fields
};

type SchedulesState = {
  schedules: ScheduleRow[] | null;

  setSchedules: (schedules: ScheduleRow[]) => void;
  getStagePoints: () => StagePointsResult;
  reset: () => void;
};

export const useSchedulesStore = create<SchedulesState>((set, get) => ({
  schedules: null,

  setSchedules: (schedules) => set({ schedules }),

  getStagePoints: () => {
    const schedules = get().schedules;
    if (!schedules || schedules.length === 0) {
      return { boarding: [], dropoff: [] };
    }

    const stageNames = schedules[0].stage_names || {};

    const boardingSet = new Set<string>();
    const dropoffSet = new Set<string>();

    schedules.forEach((s) => {
      if (s.boarding_stages) {
        const [id] = s.boarding_stages.split("|");
        boardingSet.add(id);
      }

      if (s.dropoff_stages) {
        const [id] = s.dropoff_stages.split("|");
        dropoffSet.add(id);
      }
    });

    const boarding = [...boardingSet].map((id) => ({
      id,
      name: stageNames[id] || "Unknown",
    }));

    const dropoff = [...dropoffSet].map((id) => ({
      id,
      name: stageNames[id] || "Unknown",
    }));

    return { boarding, dropoff };
  },

  reset: () => set({ schedules: null }),
}));

