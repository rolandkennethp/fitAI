export interface HistorySetLog {
  weight: number;
  reps: number;
}

export interface HistoryExercise {
  id: string;
  name: string;
  targetMuscle: string;
  sets: HistorySetLog[];
}

export interface HistorySession {
  id: string;
  date: string;
  monthLabel: string;
  dayNumberLabel: string;
  fullDateLabel: string;
  workoutName: string;
  durationMinutes: number;
  volumeKg: number;
  exercises: HistoryExercise[];
}

export interface HistorySummary {
  totalSessions: number;
  totalWeeks: number;
  sessions: HistorySession[];
}
