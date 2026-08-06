import { CoachAction, CoachMessage } from "@/types/coach";
import { DayPlan } from "@/types/weekPlan";

const MOCK_LATENCY_MS = 700;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function id() {
  return `plan-coach-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function buildRescheduleProposal(days: DayPlan[]): CoachAction | null {
  const missedDayIndex = days.findIndex(
    (d) => !d.isRestDay && (d.status === "today" || d.status === "scheduled"),
  );
  if (missedDayIndex === -1) return null;

  const targetDayIndex = days.findIndex(
    (d, i) => i > missedDayIndex && d.isRestDay,
  );
  if (targetDayIndex === -1) return null;

  const missedDay = days[missedDayIndex];
  const targetDay = days[targetDayIndex];

  const unchangedDay = [...days]
    .slice(targetDayIndex + 1)
    .find((d) => !d.isRestDay && d.status === "scheduled");

  return {
    type: "reschedule_plan",
    summary: `Move ${missedDay.workoutName} from ${missedDay.dayLabel} to ${targetDay.dayLabel}`,
    title: "Schedule shifted by one day",
    requiresConfirmation: true,
    changes: [
      {
        icon: "remove",
        label: `${missedDay.dayLabel} — ${missedDay.workoutName} — Marked as missed`,
      },
      {
        icon: "add",
        label: `${targetDay.dayLabel} — ${targetDay.workoutName} — Becomes ${missedDay.workoutName}`,
      },
      ...(unchangedDay
        ? [
            {
              icon: "change" as const,
              label: `${unchangedDay.dayLabel} — ${unchangedDay.workoutName} — Unchanged`,
            },
          ]
        : []),
    ],
    reschedulePayload: { missedDayIndex, targetDayIndex },
  };
}

export async function sendPlanCoachMessage(
  userText: string,
  days: DayPlan[],
): Promise<CoachMessage> {
  await wait(MOCK_LATENCY_MS);
  const text = userText.toLowerCase();

  if (text.includes("skip")) {
    const action = buildRescheduleProposal(days);
    if (action) {
      const trainingDaysLeft = days.filter((d) => !d.isRestDay).length;
      return {
        id: id(),
        role: "assistant",
        content: `Noted. Rebalancing this week so you keep ${trainingDaysLeft} sessions.`,
        timestamp: new Date().toISOString(),
        action,
      };
    }
  }

  return {
    id: id(),
    role: "assistant",
    content:
      "Got it — I'll factor that in. (Connect the backend to make this real.)",
    timestamp: new Date().toISOString(),
  };
}
