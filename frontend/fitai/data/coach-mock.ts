import { CoachMessage, SuggestedPrompt } from "@/types/coach";

export const INITIAL_COACH_MESSAGE: CoachMessage = {
  id: "coach-intro",
  role: "assistant",
  content: "Today is Push, 55 min. Tell me what changed and I'll adapt it.",
  timestamp: new Date().toISOString(),
};

// Shown as quick-tap chips above the input, taken directly from the example
// interactions in requirements.md section 15.
export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  { id: "prompt-1", label: "I skipped last Monday" },
  { id: "prompt-2", label: "I only have 40 minutes" },
  { id: "prompt-3", label: "Replace bench press" },
  { id: "prompt-4", label: "I don't have access to a cable machine" },
];
