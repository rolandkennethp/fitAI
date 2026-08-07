import { HistoryExercise } from "@/types/history";
import { SetPill } from "./SetPill";

export function SessionExerciseRow({
  exercise,
}: {
  exercise: HistoryExercise;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle px-6 py-4 last:border-b-0">
      <div>
        <p className="text-sm font-semibold text-white">{exercise.name}</p>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
          {exercise.targetMuscle}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {exercise.sets.map((set, i) => (
          <SetPill key={i} set={set} />
        ))}
      </div>
    </div>
  );
}
