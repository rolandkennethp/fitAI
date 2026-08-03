// These types mirror what the Spring Boot API will eventually expect on
// POST /api/onboarding (see services/onboardingService.ts).

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type PrimaryGoal =
  | "build_muscle"
  | "get_stronger"
  | "lose_fat"
  | "stay_consistent";

export type Equipment =
  | "barbell"
  | "dumbbell"
  | "cable"
  | "machine"
  | "bodyweight"
  | "kettlebell";

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "legs"
  | "core";

export interface OnboardingData {
  experienceLevel: ExperienceLevel | null;
  primaryGoal: PrimaryGoal | null;
  sessionsPerWeek: number | null;
  sessionDuration: number | null;
  equipment: Equipment[];
  muscleFocus: MuscleGroup[];
}

export const EMPTY_ONBOARDING_DATA: OnboardingData = {
  experienceLevel: null,
  primaryGoal: null,
  sessionsPerWeek: null,
  sessionDuration: null,
  equipment: [],
  muscleFocus: [],
};

// Route segment for each step, in order. Doubles as the source of truth for
// step numbering ("STEP X/6") and progress bar percentage.
export const ONBOARDING_STEPS = [
  "experience",
  "goal",
  "frequency",
  "duration",
  "equipment",
  "focus",
] as const;

export type OnboardingStep = (typeof ONBOARDING_STEPS)[number];
