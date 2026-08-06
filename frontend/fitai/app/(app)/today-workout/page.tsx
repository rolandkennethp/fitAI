"use client";

import { useRouter } from "next/navigation";
import { sendCoachMessage } from "@/services/coachService";
import { WorkoutHeaderCard } from "@/components/workout/WorkoutHeaderCard";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { WorkoutActionsBar } from "@/components/workout/WorkoutActionsBar";
import { RestTimerPill } from "@/components/workout/RestTimerPill";
import { AiCoachPanel } from "@/components/dashboard/AiCoachPanel";
import { useActiveWorkout } from "@/hooks/useActiveWorkout";
import { useRestTimer } from "@/hooks/useRestTimer";
import { useCoachChat } from "@/hooks/useCoachChat";
import { useMobileCoach } from "@/hooks/useMobileCoach";
import { INITIAL_TODAY_COACH_MESSAGES } from "@/data/today-coach-mock";
import { SUGGESTED_PROMPTS } from "@/data/coach-mock";
import Loading from "@/app/loading";

export default function TodayWorkoutPage() {
  const router = useRouter();
  const restTimer = useRestTimer();

  const {
    workout,
    isLoading,
    elapsedSeconds,
    totals,
    toggleSetComplete,
    updateSetWeight,
    updateSetReps,
    addSet,
  } = useActiveWorkout((restSeconds) => restTimer.start(restSeconds));

  const { messages, send, isSending } = useCoachChat(
    INITIAL_TODAY_COACH_MESSAGES,
    sendCoachMessage,
  );
  const {
    isOpen: isCoachOpenMobile,
    open: openCoachMobile,
    close: closeCoachMobile,
  } = useMobileCoach();

  if (isLoading || !workout) {
    return <Loading />;
  }

  const contextLabel = `Today · ${workout.workoutName}`;

  return (
    <div className="flex h-full flex-col lg:flex-row lg:overflow-hidden">
      <main className="flex-1 space-y-6 overflow-y-auto [&::-webkit-scrollbar]:hidden px-6 py-8 pb-28 lg:px-10 lg:py-10">
        <WorkoutHeaderCard
          dayLabel={workout.dayLabel}
          workoutName={workout.workoutName}
          estimatedMinutes={workout.estimatedMinutes}
          completedSets={totals.completedSets}
          totalSets={totals.totalSets}
          elapsedSeconds={elapsedSeconds}
        />

        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              Exercises
            </p>
            <p className="text-xs text-ink-faint">
              {workout.exercises.length} total
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {workout.exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onToggleSetComplete={(setId) =>
                  toggleSetComplete(exercise.id, setId)
                }
                onChangeSetWeight={(setId, delta) =>
                  updateSetWeight(exercise.id, setId, delta)
                }
                onChangeSetReps={(setId, delta) =>
                  updateSetReps(exercise.id, setId, delta)
                }
                onAddSet={() => addSet(exercise.id)}
              />
            ))}
          </div>
        </div>

        <WorkoutActionsBar
          onFinish={() => router.push("/workout-complete")}
          onAdapt={openCoachMobile}
        />
      </main>

      <AiCoachPanel
        className="hidden shrink-0 lg:flex lg:h-full  lg:w-97.5"
        contextLabel={contextLabel}
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
      />

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

      {restTimer.isActive && restTimer.remainingSeconds !== null && (
        <RestTimerPill
          remainingSeconds={restTimer.remainingSeconds}
          onCancel={restTimer.cancel}
        />
      )}
    </div>
  );
}
