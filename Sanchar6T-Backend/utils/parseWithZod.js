import { z } from "zod";

/**
 * Parse and transform table data using Zod schema
 * Use after tableToJson() for safety + transformation
 *
 * @param {any[]} rawObjects - Output from tableToJson()
 * @param {z.ZodSchema} schema - Your Zod schema with .transform()
 * @returns {any[]} Clean, validated, transformed data
 */
export function parseWithZod(rawObjects, schema) {
  if (!Array.isArray(rawObjects)) return [];

  const result = [];
  for (const item of rawObjects) {
    const parsed = schema.safeParse(item);
    if (parsed.success) {
      result.push(parsed.data);
    } else {
      console.warn('Invalid row skipped:', item, parsed.error.message);
      // Or throw if you want strict mode
    }
  }
  return result;
}

