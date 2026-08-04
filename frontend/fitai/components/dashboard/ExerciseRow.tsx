import { WorkoutExercise } from "@/types/workout";

function formatPerformance(perf: { weight: number; reps: number } | null) {
  if (!perf) return "—";
  return `${perf.weight} × ${perf.reps}`;
}

export function ExerciseRow({ exercise }: { exercise: WorkoutExercise }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-6 py-4 last:border-b-0">
      <div className="flex items-center gap-4">
        <span className="w-5 text-sm text-ink-faint">
          {String(exercise.order).padStart(2, "0")}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{exercise.name}</p>
          <p className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
            {exercise.targetMuscle} · {exercise.sets} Sets
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8 text-right">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-ink-faint">
            Prev
          </p>
          <p className="text-sm text-ink-muted">
            {formatPerformance(exercise.previous)}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-ink-faint">
            Today
          </p>
          <p className="text-sm font-semibold text-white">
            {formatPerformance(exercise.today)}
          </p>
        </div>
      </div>
    </div>
  );
}
