export interface ProgressStats {
  totalWorkouts: number;
  blockWeeks: number;
  currentStreakDays: number;
  personalBestStreak: number;
  totalVolumeTons: number;
  volumeChangePct: number;
  consistencyPct: number;
  completedSessions: number;
  plannedSessions: number;
}

export interface StrengthProgressionPoint {
  week: string;
  bench: number;
  squat: number;
  deadlift: number;
}

export interface WeeklyVolumePoint {
  week: string;
  volumeTons: number;
}

export interface WorkoutFrequencyPoint {
  week: string;
  count: number;
}

export interface PersonalRecord {
  id: string;
  exerciseName: string;
  weight: number;
  reps: number;
  dateLabel: string;
}

export interface ThisWeekDay {
  label: string;
  completed: boolean;
}

export interface ProgressSummary {
  rangeLabel: string;
  stats: ProgressStats;
  strengthProgression: StrengthProgressionPoint[];
  weeklyVolume: WeeklyVolumePoint[];
  workoutFrequency: WorkoutFrequencyPoint[];
  personalRecords: PersonalRecord[];
  thisWeek: ThisWeekDay[];
}
