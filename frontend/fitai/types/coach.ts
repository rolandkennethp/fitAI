// Mirrors what the AI Coach endpoint will return once connected to the
// backend (which in turn calls Gemini). See requirements.md section 16:
// the AI never writes to the DB directly — it returns a structured action
// that the backend validates first. CoachAction is the frontend's typed
// placeholder for that structured payload.

export type CoachRole = "assistant" | "user";

export interface CoachAction {
  type: "reschedule_workout" | "shorten_workout" | "replace_exercise" | "none";
  summary: string;
}

export interface CoachMessage {
  id: string;
  role: CoachRole;
  content: string;
  timestamp: string;
  /** Present when the AI is proposing a concrete plan change. */
  action?: CoachAction;
}

export interface SuggestedPrompt {
  id: string;
  label: string;
}
