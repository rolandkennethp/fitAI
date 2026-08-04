import { Flame } from "lucide-react";

export function StreakBadge({ days }: { days: number }) {
  return (
    <div className="flex items-center gap-2 rounded-[3px] border border-border px-4 py-2.5">
      <Flame className="h-4 w-4 text-lime" />
      <span className="font-display text-lg text-white">{days}</span>
      <span className="text-xs uppercase tracking-wide text-ink-muted">
        Day Streak
      </span>
    </div>
  );
}
