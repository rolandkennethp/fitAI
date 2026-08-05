import { ActiveWorkout } from "@/types/activeWorkout";
import { MOCK_ACTIVE_WORKOUT } from "@/data/today-workout-mock";

const MOCK_LATENCY_MS = 350;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Replace with: const res = await fetch("/api/workouts/today"); return res.json();
 */
export async function getActiveWorkout(): Promise<ActiveWorkout> {
  await wait(MOCK_LATENCY_MS);
  return MOCK_ACTIVE_WORKOUT;
}

/**
 * Replace with: await fetch(`/api/workouts/today/exercises/${exerciseId}/sets/${setId}`,
 *   { method: "PATCH", body: JSON.stringify(payload) })
 * Logging a set is fire-and-forget from the UI's perspective — local state
 * updates optimistically in useActiveWorkout regardless of this call.
 */
export async function logSet(
  exerciseId: string,
  setId: string,
  payload: { weight: number; reps: number; isCompleted: boolean },
): Promise<void> {
  await wait(150);
}
