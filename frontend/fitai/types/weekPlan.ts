export type DayStatus = "today" | "scheduled" | "recovery" | "missed";

export interface DayPlan {
  date: string;
  dayLabel: string;
  dateLabel: string;
  workoutName: string;
  isRestDay: boolean;
  durationMinutes: number | null;
  exerciseCount: number | null;
  status: DayStatus;
}

export interface WeekPlan {
  rangeLabel: string;
  trainingDaysCount: number;
  splitSummary: string;
  days: DayPlan[];
}
