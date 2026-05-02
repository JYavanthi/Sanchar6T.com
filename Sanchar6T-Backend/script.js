const BASE_URL = "https://gds-stg.ticketsimply.co.in/gds/api";

const HEADERS = {
  "api-key": "TSSACPAPI73263707",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip"
};

function getTargetDate() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const input = args[0].trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
      return input;
    } else {
      console.error("Invalid date format. Please use YYYY-MM-DD");
      process.exit(1);
    }
  }
  // Default: today in local timezone
  return new Date().toISOString().split("T")[0];
}

const DATE = getTargetDate();
console.log(`Checking schedules for date: ${DATE}\n`);

async function getCityPairs() {
  const res = await fetch(`${BASE_URL}/city_pairs.json`, { headers: HEADERS });
  const data = await res.json();
  return data.result.slice(1); // skip header row
}

async function getCitiesMap() {
  const res = await fetch(`${BASE_URL}/cities.json`, { headers: HEADERS });
  const data = await res.json();
  const cityMap = new Map();
  data.result.slice(1).forEach(([id, name]) => {
    cityMap.set(id, name);
  });
  return cityMap;
}

async function checkSchedules() {
  const cityPairs = await getCityPairs();
  const cityMap = await getCitiesMap();

  const noServicePairs = [];
  const servicePairs = [];

  const promises = cityPairs.map(async ([origin_id, destination_id]) => {
    try {
      const url = `${BASE_URL}/schedules/${origin_id}/${destination_id}/${DATE}.json`;
      const res = await fetch(url, { headers: HEADERS });
      const data = await res.json();

      const originName = cityMap.get(origin_id) || origin_id;
      const destinationName = cityMap.get(destination_id) || destination_id;

      if (data.response && data.response.code === 402) {
        noServicePairs.push({ origin_id, originName, destination_id, destinationName });
      } else {
        // Get number of schedules from processed_schedules_count
        const totalSchedules = data.processed_schedules_count || 0;
        servicePairs.push({ origin_id, originName, destination_id, destinationName, totalSchedules });
        console.log(`Service exists: ${originName} -> ${destinationName} | Total Schedules: ${totalSchedules}`);
      }
    } catch (err) {
      console.error(`Error fetching schedule ${origin_id} -> ${destination_id}:`, err);
    }
  });

  await Promise.all(promises);

  // console.log("\n===== City Pairs WITH NO SERVICES =====");
  // console.table(noServicePairs);

  console.log("\n===== City Pairs WITH SERVICES =====");
  console.table(servicePairs);
}

checkSchedules();

