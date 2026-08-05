import { Clock, Layers, Timer } from "lucide-react";
import { formatMinutesSeconds } from "@/lib/format";

interface WorkoutHeaderCardProps {
  dayLabel: string;
  workoutName: string;
  estimatedMinutes: number;
  completedSets: number;
  totalSets: number;
  elapsedSeconds: number;
}

export function WorkoutHeaderCard({
  dayLabel,
  workoutName,
  estimatedMinutes,
  completedSets,
  totalSets,
  elapsedSeconds,
}: WorkoutHeaderCardProps) {
  const progressPct =
    totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  return (
    <div className="rounded-[4px] border border-border">
      <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-lime">
            Today · {dayLabel}
          </p>
          <p className="mt-1 font-display text-4xl text-white sm:text-5xl">
            {workoutName}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Stat icon={Clock} label="Est." value={`${estimatedMinutes} min`} />
          <Stat
            icon={Layers}
            label="Sets"
            value={`${completedSets}/${totalSets}`}
          />
          <Stat
            icon={Timer}
            label="Elapsed"
            value={formatMinutesSeconds(elapsedSeconds)}
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
    <div>
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-ink-muted">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-0.5 font-display text-xl text-white">{value}</p>
    </div>
  );
}
