import { DayPlan } from "@/types/weekPlan";
import { DayStatusControl } from "./DayStatusControl";
import { cn } from "@/lib/utils";

export function DayRow({ day }: { day: DayPlan }) {
  const isMissed = day.status === "missed";
  const isToday = day.status === "today";
  const isRest = day.isRestDay;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-5 last:border-b-0 sm:px-8",
        isToday && "bg-lime/5",
      )}
    >
      <div className="w-24 shrink-0">
        <p className="text-xs uppercase tracking-wide text-ink-faint">
          {day.dateLabel}
        </p>
        <p className="text-sm font-semibold text-white">{day.dayLabel}</p>
      </div>

      <div className={cn("flex-1", isMissed && "opacity-50")}>
        <p
          className={cn(
            "font-display text-2xl sm:text-3xl",
            isMissed && "line-through decoration-2",
            isRest || isMissed ? "text-ink-muted" : "text-white",
          )}
        >
          {day.workoutName}
        </p>
        {isRest ? (
          <p className="mt-0.5 text-xs text-ink-faint">Recovery</p>
        ) : (
          day.durationMinutes !== null && (
            <p
              className={cn(
                "mt-0.5 text-xs",
                isMissed ? "text-ink-faint" : "text-ink-muted",
              )}
            >
              {day.durationMinutes} min · {day.exerciseCount} exercises
            </p>
          )
        )}
      </div>

      <DayStatusControl status={day.status} />
    </div>
  );
}
