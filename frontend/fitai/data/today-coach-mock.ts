import { CoachMessage } from "@/types/coach";

export const INITIAL_TODAY_COACH_MESSAGES: CoachMessage[] = [
  {
    id: "today-coach-1",
    role: "assistant",
    content: "Today is Push, 55 min. Tell me what changed and I'll adapt it.",
    timestamp: new Date().toISOString(),
  },
  {
    id: "today-coach-2",
    role: "user",
    content: "I need more rest for the bench press",
    timestamp: new Date().toISOString(),
  },
  {
    id: "today-coach-3",
    role: "assistant",
    content: "Bumped intensity for today.",
    timestamp: new Date().toISOString(),
    action: {
      type: "adjust_load",
      summary: "Load increased across all sets",
      title: "Load increased across all sets",
      changes: [
        { icon: "increase", label: "Working weight — +5% on every set" },
        { icon: "change", label: "Rest — 90s → 75s" },
      ],
      applied: true,
    },
  },
  {
    id: "today-coach-4",
    role: "assistant",
    content: "Applied. Your plan is up to date.",
    timestamp: new Date().toISOString(),
  },
  {
    id: "today-coach-5",
    role: "user",
    content: "Set bench press rest to 120s",
    timestamp: new Date().toISOString(),
  },
  {
    id: "today-coach-6",
    role: "assistant",
    content:
      'I can adjust today\'s session or this week\'s schedule — tell me what changed, like "I only have 40 minutes" or "replace bench press".',
    timestamp: new Date().toISOString(),
  },
];
