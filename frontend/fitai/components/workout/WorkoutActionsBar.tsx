import { Button } from "@/components/ui/Button";

interface WorkoutActionsBarProps {
  onFinish: () => void;
}

export function WorkoutActionsBar({ onFinish }: WorkoutActionsBarProps) {
  return (
    <div className="flex items-center gap-5">
      <Button className="font-sans font-semibold" onClick={onFinish}>
        Finish Workout
      </Button>
    </div>
  );
}
