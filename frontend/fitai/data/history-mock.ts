import { HistorySummary } from "@/types/history";

export const MOCK_HISTORY: HistorySummary = {
  totalSessions: 24,
  totalWeeks: 6,
  sessions: [
    {
      id: "session-1",
      date: "2026-08-02",
      monthLabel: "Aug",
      dayNumberLabel: "02",
      fullDateLabel: "Saturday, Aug 2",
      workoutName: "Upper",
      durationMinutes: 47,
      volumeKg: 6240,
      exercises: [
        {
          id: "ex-1",
          name: "Pull Up",
          targetMuscle: "Back",
          sets: [
            { weight: 0, reps: 9 },
            { weight: 0, reps: 8 },
            { weight: 0, reps: 7 },
          ],
        },
        {
          id: "ex-2",
          name: "Bench Press",
          targetMuscle: "Chest",
          sets: [
            { weight: 60, reps: 8 },
            { weight: 60, reps: 8 },
            { weight: 57.5, reps: 8 },
          ],
        },
        {
          id: "ex-3",
          name: "Barbell Row",
          targetMuscle: "Back",
          sets: [
            { weight: 55, reps: 10 },
            { weight: 55, reps: 10 },
          ],
        },
      ],
    },
    {
      id: "session-2",
      date: "2026-07-31",
      monthLabel: "Jul",
      dayNumberLabel: "31",
      fullDateLabel: "Thursday, Jul 31",
      workoutName: "Pull",
      durationMinutes: 48,
      volumeKg: 7180,
      exercises: [
        {
          id: "ex-4",
          name: "Deadlift",
          targetMuscle: "Back",
          sets: [
            { weight: 100, reps: 6 },
            { weight: 100, reps: 6 },
            { weight: 95, reps: 6 },
          ],
        },
        {
          id: "ex-5",
          name: "Lat Pulldown",
          targetMuscle: "Back",
          sets: [
            { weight: 50, reps: 10 },
            { weight: 50, reps: 10 },
          ],
        },
        {
          id: "ex-6",
          name: "Barbell Curl",
          targetMuscle: "Biceps",
          sets: [
            { weight: 25, reps: 12 },
            { weight: 25, reps: 12 },
          ],
        },
      ],
    },
    {
      id: "session-3",
      date: "2026-07-29",
      monthLabel: "Jul",
      dayNumberLabel: "29",
      fullDateLabel: "Tuesday, Jul 29",
      workoutName: "Legs",
      durationMinutes: 61,
      volumeKg: 9450,
      exercises: [
        {
          id: "ex-7",
          name: "Back Squat",
          targetMuscle: "Quads",
          sets: [
            { weight: 90, reps: 8 },
            { weight: 90, reps: 8 },
            { weight: 85, reps: 8 },
          ],
        },
        {
          id: "ex-8",
          name: "Romanian Deadlift",
          targetMuscle: "Hamstrings",
          sets: [
            { weight: 70, reps: 10 },
            { weight: 70, reps: 10 },
          ],
        },
        {
          id: "ex-9",
          name: "Leg Press",
          targetMuscle: "Quads",
          sets: [
            { weight: 140, reps: 12 },
            { weight: 140, reps: 12 },
          ],
        },
      ],
    },
    {
      id: "session-4",
      date: "2026-07-26",
      monthLabel: "Jul",
      dayNumberLabel: "26",
      fullDateLabel: "Saturday, Jul 26",
      workoutName: "Push",
      durationMinutes: 55,
      volumeKg: 6820,
      exercises: [
        {
          id: "ex-10",
          name: "Bench Press",
          targetMuscle: "Chest",
          sets: [
            { weight: 60, reps: 8 },
            { weight: 60, reps: 8 },
            { weight: 60, reps: 7 },
          ],
        },
        {
          id: "ex-11",
          name: "Overhead Press",
          targetMuscle: "Shoulders",
          sets: [
            { weight: 35, reps: 8 },
            { weight: 35, reps: 8 },
          ],
        },
      ],
    },
    {
      id: "session-5",
      date: "2026-07-24",
      monthLabel: "Jul",
      dayNumberLabel: "24",
      fullDateLabel: "Thursday, Jul 24",
      workoutName: "Pull",
      durationMinutes: 44,
      volumeKg: 5980,
      exercises: [
        {
          id: "ex-12",
          name: "Deadlift",
          targetMuscle: "Back",
          sets: [
            { weight: 95, reps: 6 },
            { weight: 95, reps: 6 },
          ],
        },
        {
          id: "ex-13",
          name: "Pull Up",
          targetMuscle: "Back",
          sets: [
            { weight: 0, reps: 8 },
            { weight: 0, reps: 7 },
          ],
        },
      ],
    },
  ],
};
