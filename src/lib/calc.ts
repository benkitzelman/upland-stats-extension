import { DAYS_IN_MONTH } from "./constants";

export const yieldPerMonth = (hourlyYield: number) => hourlyYield * 24 * DAYS_IN_MONTH;
