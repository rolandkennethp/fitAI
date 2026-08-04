// Mirrors the shape the Spring Boot API will return for the dashboard:
//   GET /api/dashboard  ->  DashboardSummary

export interface ExercisePerformance {
  weight: number;
  reps: number;
}

export interface WorkoutExercise {
  id: string;
  order: number;
  name: string;
  targetMuscle: string;
  sets: number;
  /** Last time this exercise was performed. Null if never done before. */
  previous: ExercisePerformance | null;
  /** Today's planned target (becomes "actual" once the set is logged). */
  today: ExercisePerformance | null;
}

export interface TodayWorkout {
  dayLabel: string; // e.g. "MONDAY"
  workoutName: string; // e.g. "PUSH"
  estimatedMinutes: number;
  totalSets: number;
  completedSets: number;
  /** null until the workout has been started */
  elapsedLabel: string | null;
  exercises: WorkoutExercise[];
}

export interface UpcomingDay {
  date: string; // ISO date
  dayLabel: string; // "TUE"
  dateLabel: string; // "AUG 4"
  workoutName: string; // "PULL" | "REST" | ...
  isRestDay: boolean;
  durationMinutes: number | null;
}

export interface DashboardSummary {
  userName: string;
  todayDateLabel: string; // "MONDAY, AUGUST 3"
  currentStreak: number;
  today: TodayWorkout;
  upcoming: UpcomingDay[];
}
