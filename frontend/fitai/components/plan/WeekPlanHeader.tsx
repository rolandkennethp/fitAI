import { WeekPlan } from "@/types/weekPlan";
import { Button } from "@/components/ui/Button";

interface WeekPlanHeaderProps {
  weekPlan: WeekPlan;
  onAdjustSchedule: () => void;
}

export function WeekPlanHeader({
  weekPlan,
  onAdjustSchedule,
}: WeekPlanHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          This Week
        </h1>
        <p className="mt-1 text-sm text-ink-muted">
          {weekPlan.rangeLabel} · {weekPlan.trainingDaysCount} training days ·{" "}
          {weekPlan.splitSummary}
        </p>
      </div>
      <Button
        variant="secondary"
        onClick={onAdjustSchedule}
        className="px-4 py-2.5 text-xs"
      >
        Adjust Schedule
      </Button>
    </div>
  );
}
