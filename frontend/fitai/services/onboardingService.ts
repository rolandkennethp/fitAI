import { OnboardingData } from "@/types/onboarding";
import { markOnboardingComplete } from "@/services/authService";

// ---------------------------------------------------------------------------
// MOCK IMPLEMENTATION
// Replace with real calls once the backend exists:
//   POST /api/onboarding                -> submitOnboarding
//   POST /api/onboarding/generate-plan  -> generatePlan (kicks off Gemini via backend)
// ---------------------------------------------------------------------------

const STORAGE_KEY = "fitai_onboarding_draft";
const MOCK_LATENCY_MS = 500;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Persist in-progress onboarding answers so a refresh doesn't lose them. */
export function saveDraft(data: OnboardingData) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadDraft(): OnboardingData | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as OnboardingData) : null;
}

export function clearDraft() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(STORAGE_KEY);
}

/**
 * Final submission from the last onboarding step ("Generate My Plan").
 * In the real system this triggers the AI Workout Generator (Gemini, via the
 * backend) and returns the newly created plan. For now it just marks
 * onboarding complete and resolves.
 */
export async function submitOnboarding(data: OnboardingData): Promise<void> {
  await wait(MOCK_LATENCY_MS);
  markOnboardingComplete();
  clearDraft();
}
