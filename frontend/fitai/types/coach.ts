export type CoachRole = "assistant" | "user";

export interface CoachActionChange {
  icon: "add" | "remove" | "change";
  label: string;
}

export interface ReschedulePayload {
  missedDayIndex: number;
  targetDayIndex: number;
}

export interface CoachAction {
  type:
    | "reschedule_workout"
    | "shorten_workout"
    | "replace_exercise"
    | "adjust_load"
    | "reschedule_plan"
    | "none";
  summary: string;
  title?: string;
  changes?: CoachActionChange[];
  applied?: boolean;
  requiresConfirmation?: boolean;
  reschedulePayload?: ReschedulePayload;
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
