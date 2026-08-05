"use client";

import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { TodayWorkoutCard } from "@/components/dashboard/TodayWorkoutCard";
import { WeekAhead } from "@/components/dashboard/WeekAhead";
import { AiCoachPanel } from "@/components/dashboard/AiCoachPanel";
import { useDashboardSummary } from "@/hooks/useDashboard";
import { useCoachChat } from "@/hooks/useCoachChat";
import { useMobileCoach } from "@/hooks/useMobileCoach";
import { INITIAL_COACH_MESSAGE, SUGGESTED_PROMPTS } from "@/data/coach-mock";
import Loading from "../../loading";

export default function DashboardPage() {
  const router = useRouter();
  const { summary, isLoading } = useDashboardSummary();
  const { messages, send, isSending } = useCoachChat([INITIAL_COACH_MESSAGE]);
  const { isOpen: isCoachOpenMobile, close: closeCoachMobile } =
    useMobileCoach();

  if (isLoading || !summary) {
    return <Loading />;
  }

  const contextLabel = `Today · ${summary.today.workoutName}`;

  return (
    <div className="flex h-full  flex-col lg:flex-row lg:overflow-hidden">
      <main className="flex-1 space-y-8 overflow-y-auto [&::-webkit-scrollbar]:hidden px-6 py-8 lg:px-10 lg:py-10">
        <DashboardHeader
          dateLabel={summary.todayDateLabel}
          userName={summary.userName}
          streak={summary.currentStreak}
        />

        <TodayWorkoutCard
          today={summary.today}
          onStartWorkout={() => router.push("/today-workout")}
        />

        <WeekAhead days={summary.upcoming} />
      </main>

      {/* Desktop: always-visible side panel */}
      <AiCoachPanel
        className="hidden shrink-0 lg:flex lg:h-full lg:w-97.5"
        contextLabel={contextLabel}
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
      />

      {/* Mobile: full-screen overlay, opened via the sparkle icon in the top bar */}
      {isCoachOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <AiCoachPanel
            className="h-full w-full"
            contextLabel={contextLabel}
            messages={messages}
            prompts={SUGGESTED_PROMPTS}
            isSending={isSending}
            onSend={send}
            onClose={closeCoachMobile}
          />
        </div>
      )}
    </div>
  );
}
