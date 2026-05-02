// utils/toOptions.ts

interface Option<V = any> {
  value: V;
  label: string;
}

interface ToOptionsConfig {
  includeEmpty?: boolean;
  emptyLabel?: string;
  emptyValue?: string | number | null;
}

/**
 * Convert any array of objects → [{ value, label }] for dropdowns
 * Fully type-safe, works in strict mode, perfect inference
 */
export const toOptions = <
  T extends Record<string, any>,
  V extends T[keyof T] = T[keyof T],
  L extends T[keyof T] = T[keyof T]
>(
  data: T[] = [],
  valueKey: keyof T,
  labelKey: keyof T,
  config: ToOptionsConfig = {}
): Option<V>[] => {
  const {
    includeEmpty = false,
    emptyLabel = "Select an option",
    emptyValue = "",
  } = config;

  if (!Array.isArray(data) || data.length === 0) {
    return includeEmpty ? [{ value: emptyValue as V, label: emptyLabel }] : [];
  }

  const result: Option<V>[] = data.map((item) => ({
    value: item[valueKey] as V,
    label: String(item[labelKey] ?? "").trim(),
  }));

  if (includeEmpty) {
    result.unshift({ value: emptyValue as V, label: emptyLabel });
  }

  return result;
};

// Optional helpers (fully typed)
export const toCityOptions = (cities: { id: number; name: string }[]) =>
  toOptions(cities, "id", "name");

export const toStopOptions = (stops: { id: number; name: string }[]) =>
  toOptions(stops, "id", "name", { emptyLabel: "Choose boarding point" });

export default toOptions;
