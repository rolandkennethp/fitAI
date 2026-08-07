import { HistorySummary } from "@/types/history";
import { MOCK_HISTORY } from "@/data/history-mock";

const MOCK_LATENCY_MS = 350;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getHistory(): Promise<HistorySummary> {
  await wait(MOCK_LATENCY_MS);
  return MOCK_HISTORY;
}
