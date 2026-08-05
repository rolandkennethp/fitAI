"use client";

import { Check } from "lucide-react";
import { SetLog } from "@/types/activeWorkout";
import { Stepper } from "./Stepper";
import { cn } from "@/lib/utils";

interface SetRowProps {
  set: SetLog;
  onToggleComplete: () => void;
  onChangeWeight: (delta: number) => void;
  onChangeReps: (delta: number) => void;
}

export function SetRow({
  set,
  onToggleComplete,
  onChangeWeight,
  onChangeReps,
}: SetRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-[3px] border px-2 py-2 transition-colors",
        set.isCompleted ? "border-lime/40 bg-lime/5" : "border-transparent",
      )}
    >
      <span className="w-4 text-sm text-ink-faint">{set.setNumber}</span>

      <Stepper
        value={set.weight}
        unit="kg"
        step={0.5}
        onChange={onChangeWeight}
        disabled={set.isCompleted}
      />
      <span className="text-sm text-ink-faint">×</span>
      <Stepper
        value={set.reps}
        unit="reps"
        step={1}
        onChange={onChangeReps}
        disabled={set.isCompleted}
      />

      <div className="flex-1" />

      <button
        type="button"
        onClick={onToggleComplete}
        aria-pressed={set.isCompleted}
        aria-label={
          set.isCompleted ? "Mark set incomplete" : "Mark set complete"
        }
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
          set.isCompleted
            ? "border-lime bg-lime text-black"
            : "border-border text-ink-faint hover:border-white/30 hover:text-white",
        )}
      >
        <Check className="h-4 w-4" />
      </button>
    </div>
  );
}
