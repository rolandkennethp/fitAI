"use client";

import { ProgressHeader } from "@/components/progress/ProgressHeader";
import { StatCard } from "@/components/progress/StatCard";
import { StrengthProgressionChart } from "@/components/progress/StrengthProgressionChart";
import { PersonalRecordsList } from "@/components/progress/PersonalRecordsList";
import { WeeklyVolumeChart } from "@/components/progress/WeeklyVolumeChart";
import { WorkoutFrequencyChart } from "@/components/progress/WorkoutFrequencyChart";
import { ThisWeekHeatmap } from "@/components/progress/ThisWeekHeatmap";
import { FloatingCoachOverlay } from "@/components/shared/FloatingCoachOverlay";
import { useProgress } from "@/hooks/useProgress";
import { useCoachChat } from "@/hooks/useCoachChat";
import { INITIAL_COACH_MESSAGE, SUGGESTED_PROMPTS } from "@/data/coach-mock";
import { sendCoachMessage } from "@/services/coachService";

export default function ProgressPage() {
  const { progress, isLoading } = useProgress();
  const { messages, send, isSending } = useCoachChat(
    [INITIAL_COACH_MESSAGE],
    sendCoachMessage,
  );

  if (isLoading || !progress) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-ink-muted">Loading your progress…</p>
      </div>
    );
  }

  const { stats } = progress;

  return (
    <div className="relative h-full overflow-y-auto px-6 py-8 lg:px-10 lg:py-10">
      <div className="space-y-6">
        <ProgressHeader rangeLabel={progress.rangeLabel} />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            label="Workouts"
            value={String(stats.totalWorkouts)}
            caption={`${stats.blockWeeks} week block`}
          />
          <StatCard
            label="Current Streak"
            value={String(stats.currentStreakDays)}
            unit="days"
            caption={`Personal best: ${stats.personalBestStreak}`}
          />
          <StatCard
            label="Total Volume"
            value={String(stats.totalVolumeTons)}
            unit="t"
            caption={`+${stats.volumeChangePct}% vs last block`}
          />
          <StatCard
            label="Consistency"
            value={String(stats.consistencyPct)}
            unit="%"
            caption={`${stats.completedSessions} of ${stats.plannedSessions} planned`}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-[4px] border border-border p-6 lg:col-span-2">
            <StrengthProgressionChart data={progress.strengthProgression} />
          </div>
          <div className="rounded-[4px] border border-border p-6">
            <PersonalRecordsList records={progress.personalRecords} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-[4px] border border-border p-6 lg:col-span-2">
            <WeeklyVolumeChart data={progress.weeklyVolume} />
          </div>
          <div className="flex flex-col gap-6 rounded-[4px] border border-border p-6">
            <WorkoutFrequencyChart data={progress.workoutFrequency} />
            <ThisWeekHeatmap days={progress.thisWeek} />
          </div>
        </div>
      </div>

      <FloatingCoachOverlay
        contextLabel="Progress"
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
      />
    </div>
  );
}
