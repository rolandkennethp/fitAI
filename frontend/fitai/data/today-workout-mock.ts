import { ActiveWorkout } from "@/types/activeWorkout";

function makeSets(
  entries: { weight: number; reps: number }[],
): ActiveWorkout["exercises"][number]["sets"] {
  return entries.map((entry, index) => ({
    id: `set-${index + 1}-${entry.weight}-${entry.reps}`,
    setNumber: index + 1,
    weight: entry.weight,
    reps: entry.reps,
    isCompleted: false,
  }));
}

export const MOCK_ACTIVE_WORKOUT: ActiveWorkout = {
  dayLabel: "Monday",
  workoutName: "Push",
  estimatedMinutes: 55,
  elapsedSeconds: 0,
  exercises: [
    {
      id: "ex-1",
      order: 1,
      name: "Bench Press",
      targetMuscle: "Chest",
      equipment: "Barbell",
      restSeconds: 90,
      previous: { weight: 60, reps: 8 },
      todayTarget: { weight: 63, reps: 10 },
      progressUp: true,
      sets: makeSets([
        { weight: 63, reps: 10 },
        { weight: 63, reps: 10 },
        { weight: 63, reps: 8 },
        { weight: 58, reps: 10 },
      ]),
    },
    {
      id: "ex-2",
      order: 2,
      name: "Overhead Press",
      targetMuscle: "Shoulders",
      equipment: "Barbell",
      restSeconds: 90,
      previous: { weight: 35, reps: 8 },
      todayTarget: { weight: 37, reps: 8 },
      progressUp: true,
      sets: makeSets([
        { weight: 37, reps: 8 },
        { weight: 37, reps: 8 },
        { weight: 34, reps: 8 },
      ]),
    },
    {
      id: "ex-3",
      order: 3,
      name: "Incline Dumbbell Press",
      targetMuscle: "Upper Chest",
      equipment: "Dumbbell",
      restSeconds: 90,
      previous: { weight: 22, reps: 10 },
      todayTarget: { weight: 25, reps: 10 },
      progressUp: true,
      sets: makeSets([
        { weight: 25, reps: 10 },
        { weight: 25, reps: 10 },
        { weight: 23, reps: 10 },
      ]),
    },
    {
      id: "ex-4",
      order: 4,
      name: "Cable Lateral Raise",
      targetMuscle: "Side Delts",
      equipment: "Cable",
      restSeconds: 90,
      previous: { weight: 10, reps: 15 },
      todayTarget: { weight: 10.5, reps: 15 },
      progressUp: true,
      sets: makeSets([
        { weight: 10.5, reps: 15 },
        { weight: 10.5, reps: 15 },
        { weight: 10.5, reps: 12 },
      ]),
    },
    {
      id: "ex-5",
      order: 5,
      name: "Triceps Pushdown",
      targetMuscle: "Triceps",
      equipment: "Cable",
      restSeconds: 90,
      previous: { weight: 30, reps: 12 },
      todayTarget: { weight: 30, reps: 12 },
      progressUp: false,
      sets: makeSets([
        { weight: 30, reps: 12 },
        { weight: 30, reps: 12 },
        { weight: 30, reps: 12 },
      ]),
    },
  ],
};
