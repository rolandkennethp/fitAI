import { Button } from "@/components/ui/Button";

interface WorkoutActionsBarProps {
  onFinish: () => void;
  onAdapt: () => void;
}

export function WorkoutActionsBar({
  onFinish,
  onAdapt,
}: WorkoutActionsBarProps) {
  return (
    <div className="flex items-center gap-5">
      <Button onClick={onFinish}>Finish Workout</Button>
      <button
        type="button"
        onClick={onAdapt}
        className="font-display text-sm tracking-wide text-ink-muted hover:text-white"
      >
        Adapt with FitAI
      </button>
    </div>
  );
}
