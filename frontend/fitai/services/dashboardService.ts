import { DashboardSummary } from "@/types/workout";
import { MOCK_DASHBOARD_SUMMARY } from "@/data/dashboard-mock";

const MOCK_LATENCY_MS = 400;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Replace with: const res = await fetch("/api/dashboard"); return res.json();
 */
export async function getDashboardSummary(): Promise<DashboardSummary> {
  await wait(MOCK_LATENCY_MS);
  return MOCK_DASHBOARD_SUMMARY;
}
