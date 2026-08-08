import { ProgressSummary } from "@/types/progress";
import { MOCK_PROGRESS } from "@/data/progress-mock";

const MOCK_LATENCY_MS = 350;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProgress(): Promise<ProgressSummary> {
  await wait(MOCK_LATENCY_MS);
  return MOCK_PROGRESS;
}
