import { ExercisePerformance } from "@/types/workout";

export interface SetLog {
  id: string;
  setNumber: number;
  weight: number;
  reps: number;
  isCompleted: boolean;
}

export interface ActiveWorkoutExercise {
  id: string;
  order: number;
  name: string;
  targetMuscle: string;
  equipment: string;
  /** Seconds to rest after completing any set of this exercise. */
  restSeconds: number;
  previous: ExercisePerformance | null;
  /** Today's top-line target shown next to PREVIOUS (e.g. "63kg x 10"). */
  todayTarget: ExercisePerformance;
  /** Whether todayTarget represents progress over `previous`. */
  progressUp: boolean;
  sets: SetLog[];
}

export interface ActiveWorkout {
  dayLabel: string;
  workoutName: string;
  estimatedMinutes: number;
  /** Seconds elapsed since the workout was started. */
  elapsedSeconds: number;
  exercises: ActiveWorkoutExercise[];
}
