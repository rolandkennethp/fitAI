import { ThisWeekDay } from "@/types/progress";
import { cn } from "@/lib/utils";

export function ThisWeekHeatmap({ days }: { days: ThisWeekDay[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
        This Week
      </p>
      <div className="flex gap-2">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div
              className={cn(
                "h-8 w-8 rounded-[3px]",
                day.completed ? "bg-lime" : "border border-border",
              )}
            />
            <span className="text-[11px] text-ink-faint">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
