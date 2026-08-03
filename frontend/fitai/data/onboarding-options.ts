import {
  Equipment,
  ExperienceLevel,
  MuscleGroup,
  PrimaryGoal,
} from "@/types/onboarding";

// Reference/config data. Shaped the way it would come back from a future
// GET /api/onboarding/options config endpoint, so the UI never hardcodes copy.

export interface DetailOption<T extends string> {
  value: T;
  label: string;
  description: string;
}

export interface StatOption<T extends number> {
  value: T;
  unit: string;
}

export interface LabelOption<T extends string> {
  value: T;
  label: string;
}

export const EXPERIENCE_OPTIONS: DetailOption<ExperienceLevel>[] = [
  {
    value: "beginner",
    label: "Beginner",
    description: "Less than 1 year of consistent training",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    description: "1–3 years, familiar with main lifts",
  },
  {
    value: "advanced",
    label: "Advanced",
    description: "3+ years, structured programming",
  },
];

export const PRIMARY_GOAL_OPTIONS: DetailOption<PrimaryGoal>[] = [
  {
    value: "build_muscle",
    label: "Build Muscle",
    description: "Hypertrophy focus, moderate reps",
  },
  {
    value: "get_stronger",
    label: "Get Stronger",
    description: "Heavier loads, lower reps",
  },
  {
    value: "lose_fat",
    label: "Lose Fat",
    description: "Higher density, shorter rests",
  },
  {
    value: "stay_consistent",
    label: "Stay Consistent",
    description: "Sustainable, balanced sessions",
  },
];

export const SESSIONS_PER_WEEK_OPTIONS: StatOption<number>[] = [
  { value: 2, unit: "days" },
  { value: 3, unit: "days" },
  { value: 4, unit: "days" },
  { value: 5, unit: "days" },
  { value: 6, unit: "days" },
];

export const SESSION_DURATION_OPTIONS: StatOption<number>[] = [
  { value: 30, unit: "min" },
  { value: 45, unit: "min" },
  { value: 60, unit: "min" },
  { value: 75, unit: "min" },
  { value: 90, unit: "min" },
];

export const EQUIPMENT_OPTIONS: LabelOption<Equipment>[] = [
  { value: "barbell", label: "Barbell" },
  { value: "dumbbell", label: "Dumbbell" },
  { value: "cable", label: "Cable" },
  { value: "machine", label: "Machine" },
  { value: "bodyweight", label: "Bodyweight" },
  { value: "pullup bar", label: "Pull-up Bar" },
];

export const MUSCLE_FOCUS_OPTIONS: LabelOption<MuscleGroup>[] = [
  { value: "chest", label: "Chest" },
  { value: "back", label: "Back" },
  { value: "shoulders", label: "Shoulders" },
  { value: "arms", label: "Arms" },
  { value: "legs", label: "Legs" },
  { value: "core", label: "Core" },
];
