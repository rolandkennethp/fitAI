"use client";

import { WeekPlanHeader } from "@/components/plan/WeekPlanHeader";
import { DayRow } from "@/components/plan/DayRow";
import { FloatingCoachOverlay } from "@/components/shared/FloatingCoachOverlay";
import { useWeekPlan } from "@/hooks/useWeekPlan";
import { useCoachChat } from "@/hooks/useCoachChat";
import { useMobileCoach } from "@/hooks/useMobileCoach";
import { INITIAL_PLAN_COACH_MESSAGES } from "@/data/plan-coach-mock";
import { SUGGESTED_PROMPTS } from "@/data/coach-mock";
import { sendPlanCoachMessage } from "@/services/planCoachService";
import Loading from "@/app/loading";

export default function WorkoutPlanPage() {
  const { weekPlan, isLoading, applyReschedule } = useWeekPlan();
  const { open: openCoach } = useMobileCoach();

  const { messages, send, isSending, resolveAction } = useCoachChat(
    INITIAL_PLAN_COACH_MESSAGES,
    (text) => sendPlanCoachMessage(text, weekPlan?.days ?? []),
  );

  function handleApply(messageId: string) {
    const message = messages.find((m) => m.id === messageId);
    if (message?.action?.reschedulePayload) {
      applyReschedule(message.action.reschedulePayload);
    }
    resolveAction(messageId, true);
  }

  function handleKeepAsIs(messageId: string) {
    resolveAction(messageId, false);
  }

  if (isLoading || !weekPlan) {
    return <Loading />;
  }

  const todayEntry = weekPlan.days.find((d) => d.status === "today");
  const contextLabel = todayEntry
    ? `Today · ${todayEntry.workoutName}`
    : "This Week";

  return (
    <div className="relative h-full overflow-y-auto px-6 py-8 lg:pl-10 md:pr-97 lg:py-10">
      <div className="space-y-6">
        <WeekPlanHeader weekPlan={weekPlan} onAdjustSchedule={openCoach} />

        <div className="rounded-sm border border-border">
          {weekPlan.days.map((day) => (
            <DayRow key={day.date} day={day} />
          ))}
        </div>

        <p className="text-xs text-ink-faint">
          FitAI rebalances this plan whenever you tell it something changed — a
          missed session, less time, or missing equipment.
        </p>
      </div>

      <FloatingCoachOverlay
        contextLabel={contextLabel}
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
        onApplyAction={handleApply}
        onKeepAsIs={handleKeepAsIs}
      />
    </div>
  );
}
