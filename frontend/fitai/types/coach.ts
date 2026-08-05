export type CoachRole = "assistant" | "user";

export interface CoachActionChange {
  icon: "increase" | "change";
  label: string;
}

export interface CoachAction {
  type:
    | "reschedule_workout"
    | "shorten_workout"
    | "replace_exercise"
    | "adjust_load"
    | "none";
  summary: string;
  title?: string;
  changes?: CoachActionChange[];
  applied?: boolean;
}

export interface CoachMessage {
  id: string;
  role: CoachRole;
  content: string;
  timestamp: string;
  action?: CoachAction;
}

export interface SuggestedPrompt {
  id: string;
  label: string;
}
