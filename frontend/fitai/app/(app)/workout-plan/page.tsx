"use client";

import { WeekPlanHeader } from "@/components/plan/WeekPlanHeader";
import { DayRow } from "@/components/plan/DayRow";
import { AskFitaiButton } from "@/components/plan/AskFitaiButton";
import { AiCoachPanel } from "@/components/dashboard/AiCoachPanel";
import { useWeekPlan } from "@/hooks/useWeekPlan";
import { useCoachChat } from "@/hooks/useCoachChat";
import { useMobileCoach } from "@/hooks/useMobileCoach";
import { INITIAL_PLAN_COACH_MESSAGES } from "@/data/plan-coach-mock";
import { SUGGESTED_PROMPTS } from "@/data/coach-mock";
import { sendPlanCoachMessage } from "@/services/planCoachService";

export default function WorkoutPlanPage() {
  const { weekPlan, isLoading, applyReschedule } = useWeekPlan();
  const {
    isOpen: isCoachOpen,
    open: openCoach,
    close: closeCoach,
  } = useMobileCoach();

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
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-ink-muted">Loading your plan…</p>
      </div>
    );
  }

  const todayEntry = weekPlan.days.find((d) => d.status === "today");
  const contextLabel = todayEntry
    ? `Today · ${todayEntry.workoutName}`
    : "This Week";

  return (
    <div className="relative h-full overflow-y-auto px-6 py-8 lg:px-10 lg:py-10">
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

      {!isCoachOpen && <AskFitaiButton onClick={openCoach} />}

      {isCoachOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={closeCoach} />
          <div className="absolute inset-y-0 right-0 w-full max-w-125">
            <AiCoachPanel
              className="h-full w-full"
              contextLabel={contextLabel}
              messages={messages}
              prompts={SUGGESTED_PROMPTS}
              isSending={isSending}
              onSend={send}
              onClose={closeCoach}
              onApplyAction={handleApply}
              onKeepAsIs={handleKeepAsIs}
            />
          </div>
        </div>
      )}
    </div>
  );
}
