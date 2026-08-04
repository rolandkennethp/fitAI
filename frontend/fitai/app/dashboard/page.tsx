"use client";

import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { TodayWorkoutCard } from "@/components/dashboard/TodayWorkoutCard";
import { WeekAhead } from "@/components/dashboard/WeekAhead";
import { AiCoachPanel } from "@/components/dashboard/AiCoachPanel";
import { useDashboardSummary } from "@/hooks/useDashboard";
import { useCoachChat } from "@/hooks/useCoachChat";
import { INITIAL_COACH_MESSAGE, SUGGESTED_PROMPTS } from "@/data/coach-mock";

export default function DashboardPage() {
  const router = useRouter();
  const { summary, isLoading } = useDashboardSummary();
  const { messages, send, isSending } = useCoachChat([INITIAL_COACH_MESSAGE]);

  if (isLoading || !summary) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-ink-muted">Loading your dashboard…</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto  lg:flex-row">
      <main className="flex-1 space-y-8 overflow-y-auto [&::-webkit-scrollbar]:hidden px-6 py-8 lg:px-10 lg:py-10">
        <DashboardHeader
          dateLabel={summary.todayDateLabel}
          userName={summary.userName}
          streak={summary.currentStreak}
        />

        <TodayWorkoutCard
          today={summary.today}
          // TODO: /today-workout isn't built yet — route there once it exists.
          onStartWorkout={() => router.push("/today-workout")}
        />

        <WeekAhead days={summary.upcoming} />
      </main>

      <AiCoachPanel
        className="h-150 w-full shrink-0 lg:h-full lg:w-110"
        contextLabel={`Today · ${summary.today.workoutName}`}
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
      />
    </div>
  );
}
