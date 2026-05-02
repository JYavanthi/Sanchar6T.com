// cache/MasterCache.js  ← FINAL VERSION (copy-paste this)
// import { tableToJson } from "../utils/tableToJson.js";
//
// class CacheItem {
//   constructor(data, expiryMs) {
//     this.data = data;
//     this.expiryMs = expiryMs;
//     this.fetchedAt = Date.now();
//   }
//   isExpired() {
//     return Date.now() - this.fetchedAt > this.expiryMs;
//   }
// }
//
// export class MasterCache {
//   constructor(bitlaRepository) {
//     this.repo = bitlaRepository;
//     this.cache = new Map();
//
//     this.expiry = {
//       cities: 24 * 60 * 60 * 1000,      // 24h
//       cityPairs: 12 * 60 * 60 * 1000,   // 12h ← only this refreshes twice a day
//       masterData: 6 * 60 * 60 * 1000,
//       stages: 24 * 60 * 60 * 1000,
//       schedules: 0.1 * 60 * 60 * 1000
//     };
//
//     // Pre-warm on startup
//     this.preWarm();
//
//     // Check every 30 mins: only refresh expired ones
//     setInterval(() => this.backgroundRefresh(), 30 * 60 * 1000);
//   }
//
//   // Pre-load everything on server start (no first-request delay)
//   async preWarm() {
//     console.log("Pre-warming master cache...");
//     await Promise.all([
//       this.get('cities', () => this.repo.fetchCities()),
//       this.get('cityPairs', () => this.repo.fetchCityPairs(), {
//         transform: { travel_ids: this.transformIds }
//       }),
//       this.get("stages", () => this.repo.fetchStages()),
//       this.get("schedules", () => this.repo.fetchSchedules()),
//     ]);
//     console.log("Master cache pre-warmed and ready!");
//   }
//
//   async get(key, fetchFn, transformOptions = {}) {
//     const cached = this.cache.get(key);
//
//     if (cached && !cached.isExpired()) {
//       return cached.data; // Fast path: 0.01ms
//     }
//
//     // Only log when actually refreshing (not on every check)
//     if (!cached) {
//       console.log(`Cache MISS: ${key} → loading first time`);
//     } else {
//       console.log(`Cache EXPIRED: ${key} → refreshing (TTL: ${this.expiry[key] / 3600000}h)`);
//     }
//
//     try {
//       const rawData = await fetchFn();
//       const processed = tableToJson(rawData, transformOptions);
//       this.cache.set(key, new CacheItem(processed, this.expiry[key] || 12 * 60 * 60 * 1000));
//       return processed;
//     } catch (err) {
//       console.error(`Failed to load ${key}:`, err.message);
//       if (cached) {
//         console.warn(`Serving stale ${key} data`);
//         return cached.data;
//       }
//       throw err;
//     }
//   }
//
//   // Background refresh: only expired items
//   async backgroundRefresh() {
//     console.log("Background cache check running...");
//     for (const [key, item] of this.cache) {
//       if (item.isExpired()) {
//         console.log(`Background refresh triggered for: ${key}`);
//         this.get(key, this.getFetchFn(key), this.getTransform(key));
//       }
//     }
//   }
//
//   // Helper to avoid code duplication
//   getFetchFn(key) {
//     const map = {
//       cities: () => this.repo.fetchCities(),
//       cityPairs: () => this.repo.fetchCityPairs(),
//       stages: () => this.repo.fetchStages(),
//       schedules: () => this.repo.fetchSchedules(),
//     };
//     return map[key] || (() => Promise.resolve([]));
//   }
//
//   getTransform(key) {
//     return key === 'cityPairs' ? { transform: { travel_ids: this.transformIds } } : {};
//   }
//
//   transformIds(ids) {
//     return typeof ids === "string" && ids.trim()
//       ? ids.trim().split(",").map(id => parseInt(id.trim(), 10)).filter(n => !isNaN(n))
//       : [];
//   }
//
//   async forceRefreshAll() {
//     this.cache.clear();
//     await this.preWarm();
//   }
// }
//
// // Singleton
// let instance = null;
// export const getMasterCache = (bitlaRepository) => {
//   if (!instance) instance = new MasterCache(bitlaRepository);
//   return instance;
// };
//
// cache/MasterCache.js ← FINAL FIXED VERSION (Copy-Paste This)
// cache/masterCache.js
import { tableToJson } from "../utils/tableToJson.js";

class CacheItem {
  constructor(data, expiryMs) {
    this.data = data;
    this.expiryMs = expiryMs;
    this.fetchedAt = Date.now();
  }
  isExpired() {
    return Date.now() - this.fetchedAt > this.expiryMs;
  }
}

export class MasterCache {
  constructor(bitlaRepository) {
    this.repo = bitlaRepository;
    this.store = new Map();

    this.ttl = {
      cities: 24 * 60 * 60 * 1000,
      cityPairs: 12 * 60 * 60 * 1000,
      stages: 24 * 60 * 60 * 1000,
      schedules: 30 * 60 * 1000,     // raw per route+date
      filtered: 10 * 60 * 1000,      // filtered results
      default: 6 * 60 * 60 * 1000,
    };

    this.preWarm();
    setInterval(() => this.cleanup(), 60 * 60 * 1000);
  }

  async get(key, fetchFn = null, options = {}) {
    const cached = this.store.get(key);

    // 1. Cache HIT
    if (cached && !cached.isExpired()) {
      return cached.data;
    }

    // 2. Direct insert mode (for filtered results )
    if (fetchFn === null && options.data !== undefined) {
      const ttl = options.ttl ?? this.ttl.filtered ?? this.ttl.default;
      this.store.set(key, new CacheItem(options.data, ttl));
      return options.data;
    }

    if (!fetchFn) {
      return undefined;
    }

    // 3. Normal fetch mode
    console.log(cached ? `Cache expired: ${key}` : `Cache miss: ${key}`);

    try {
      const raw = await fetchFn();
      let data
      if (Array.isArray(raw)) {
        data = options.transform ? tableToJson(raw, options.transform) : tableToJson(raw);
      } else {
        data = raw
      }

      const ttl =
        options.ttl ??
        this.ttl[key.split("/")[0]] ??
        this.ttl.default;

      this.store.set(key, new CacheItem(data, ttl));
      return data;
    } catch (err) {
      if (cached) {
        console.warn(`Serving stale data for ${key}`);
        return cached.data;
      }
      throw err;
    }
  }

  async preWarm() {
    console.log("Pre-warming global master data...");
    await Promise.all([
      this.get("cities", () => this.repo.fetchCities()),
      this.get("cityPairs", () => this.repo.fetchCityPairs(), {
        transform: { travel_ids: this.transformIds },
      }),
      this.get("stages", () => this.repo.fetchStages()),
    ]);
    console.log("Global cache ready!");
  }

  invalidate(pattern = "") {
    for (const key of this.store.keys()) {
      if (key.startsWith(pattern)) this.store.delete(key);
    }
  }

  cleanup() {
    let count = 0;
    for (const [key, item] of this.store) {
      if (item.isExpired()) {
        this.store.delete(key);
        count++;
      }
    }
    if (count) console.log(`Cleaned ${count} expired cache entries`);
  }

  transformIds(ids) {
    return typeof ids === "string" && ids.trim()
      ? ids.trim().split(",").map((id) => parseInt(id.trim(), 10)).filter((n) => !isNaN(n))
      : [];
  }
}

// Singleton
let instance = null;
export const getMasterCache = (repo) => {
  if (!instance) instance = new MasterCache(repo);
  return instance;
};
