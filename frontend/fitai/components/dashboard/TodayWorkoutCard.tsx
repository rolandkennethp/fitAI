import { Clock, Layers, Timer, ArrowRight } from "lucide-react";
import { TodayWorkout } from "@/types/workout";
import { Button } from "@/components/ui/Button";
import { ExerciseRow } from "./ExerciseRow";

interface TodayWorkoutCardProps {
  today: TodayWorkout;
  onStartWorkout: () => void;
}

export function TodayWorkoutCard({
  today,
  onStartWorkout,
}: TodayWorkoutCardProps) {
  const progressPct =
    today.totalSets > 0
      ? Math.round((today.completedSets / today.totalSets) * 100)
      : 0;

  return (
    <div className="rounded-sm border border-border">
      <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-lime">
            Today · {today.dayLabel}
          </p>
          <p className="mt-1 font-display text-4xl text-white sm:text-5xl">
            {today.workoutName}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Stat
            icon={Clock}
            label="Est."
            value={`${today.estimatedMinutes} min`}
          />
          <Stat
            icon={Layers}
            label="Sets"
            value={`${today.completedSets}/${today.totalSets}`}
          />
          <Stat
            icon={Timer}
            label="Elapsed"
            value={today.elapsedLabel ?? "--:--"}
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-full rounded-full bg-border-subtle">
            <div
              className="h-full rounded-full bg-lime transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="shrink-0 text-xs text-ink-muted">
            {progressPct}%
          </span>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
            Today&apos;s Exercises
          </p>
          <p className="text-xs text-ink-faint">
            {today.exercises.length} exercises
          </p>
        </div>
        <div>
          {today.exercises.map((exercise) => (
            <ExerciseRow key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-border px-6 py-5">
        <Button onClick={onStartWorkout} className="font-sans font-semibold">
          Start Workout
          <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-sm text-ink-muted">
          Need a change? Ask FitAI — &ldquo;I only have 40 minutes&rdquo;.
        </p>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-ink-muted">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-0.5 font-display text-xl text-white">{value}</p>
    </div>
  );
}
