import { ArrowUp, Plus } from "lucide-react";
import { ActiveWorkoutExercise } from "@/types/activeWorkout";
import { SetRow } from "./SetRow";
import { ExerciseMenu } from "./ExerciseMenu";

function formatPerformance(perf: { weight: number; reps: number } | null) {
  if (!perf) return "—";
  return `${perf.weight} kg × ${perf.reps}`;
}

interface ExerciseCardProps {
  exercise: ActiveWorkoutExercise;
  onToggleSetComplete: (setId: string) => void;
  onChangeSetWeight: (setId: string, delta: number) => void;
  onChangeSetReps: (setId: string, delta: number) => void;
  onAddSet: () => void;
}

export function ExerciseCard({
  exercise,
  onToggleSetComplete,
  onChangeSetWeight,
  onChangeSetReps,
  onAddSet,
}: ExerciseCardProps) {
  const completedCount = exercise.sets.filter((s) => s.isCompleted).length;

  return (
    <div className="rounded-[4px] border border-border">
      <div className="flex items-start justify-between px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="pt-0.5 text-xs text-ink-faint">
            {String(exercise.order).padStart(2, "0")}
          </span>
          <div>
            <p className="text-base font-semibold text-white">
              {exercise.name}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
              {exercise.targetMuscle} · {exercise.equipment}
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <span className="text-xs text-ink-muted">
            {completedCount}/{exercise.sets.length}
          </span>
          <ExerciseMenu exerciseName={exercise.name} />
        </div>
      </div>

      <div className="flex justify-between gap-4 border-y border-border px-5 py-3">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-ink-faint">
            Previous
          </p>
          <p className="mt-0.5 text-sm text-ink-muted">
            {formatPerformance(exercise.previous)}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-ink-faint">
            Today
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-white">
            {formatPerformance(exercise.todayTarget)}
            {exercise.progressUp && (
              <span className="flex items-center gap-0.5 text-xs font-normal text-lime">
                <ArrowUp className="h-3 w-3" />
                progress
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 px-5 py-4">
        {exercise.sets.map((set) => (
          <SetRow
            key={set.id}
            set={set}
            onToggleComplete={() => onToggleSetComplete(set.id)}
            onChangeWeight={(delta) => onChangeSetWeight(set.id, delta)}
            onChangeReps={(delta) => onChangeSetReps(set.id, delta)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3">
        <button
          type="button"
          onClick={onAddSet}
          className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted hover:text-white"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Set
        </button>
        <span className="text-xs uppercase tracking-wide text-ink-faint">
          Rest {exercise.restSeconds}s
        </span>
      </div>
    </div>
  );
}
