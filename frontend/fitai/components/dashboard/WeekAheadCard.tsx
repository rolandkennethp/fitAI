import { UpcomingDay } from "@/types/workout";
import { cn } from "@/lib/utils";

export function WeekAheadCard({ day }: { day: UpcomingDay }) {
  return (
    <div className="rounded-sm border border-border px-5 py-4">
      <p className="text-xs uppercase tracking-wide text-ink-muted">
        {day.dayLabel} · {day.dateLabel}
      </p>
      <p
        className={cn(
          "mt-2 font-display text-2xl",
          day.isRestDay ? "text-ink-muted" : "text-white",
        )}
      >
        {day.workoutName}
      </p>
      <p className="mt-1 text-xs text-ink-faint">
        {day.isRestDay ? "Recovery" : `${day.durationMinutes} min`}
      </p>
    </div>
  );
}
