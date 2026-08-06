import { CoachMessage } from "@/types/coach";

export const INITIAL_PLAN_COACH_MESSAGES: CoachMessage[] = [
  {
    id: "plan-coach-1",
    role: "assistant",
    content: "Today is Push, 55 min. Tell me what changed and I'll adapt it.",
    timestamp: new Date().toISOString(),
  },
];
