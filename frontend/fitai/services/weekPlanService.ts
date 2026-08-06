import { WeekPlan } from "@/types/weekPlan";
import { MOCK_WEEK_PLAN } from "@/data/week-plan-mock";

const MOCK_LATENCY_MS = 350;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getWeekPlan(): Promise<WeekPlan> {
  await wait(MOCK_LATENCY_MS);
  return MOCK_WEEK_PLAN;
}
