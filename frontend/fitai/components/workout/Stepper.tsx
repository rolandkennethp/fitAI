"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperProps {
  value: number;
  unit: string;
  step: number;
  onChange: (delta: number) => void;
  disabled?: boolean;
}

export function Stepper({
  value,
  unit,
  step,
  onChange,
  disabled,
}: StepperProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-[3px] border border-border px-1.5 py-1.5",
        disabled && "opacity-50",
      )}
    >
      <button
        type="button"
        onClick={() => onChange(-step)}
        disabled={disabled}
        aria-label={`Decrease ${unit}`}
        className="flex h-6 w-6 items-center justify-center rounded-[2px] text-ink-muted hover:bg-white/5 hover:text-white disabled:pointer-events-none"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="min-w-[2.5rem] text-center text-sm font-semibold text-white">
        {value}{" "}
        <span className="ml-0.5 text-xs font-normal text-ink-muted">
          {unit}
        </span>
      </span>
      <button
        type="button"
        onClick={() => onChange(step)}
        disabled={disabled}
        aria-label={`Increase ${unit}`}
        className="flex h-6 w-6 items-center justify-center rounded-[2px] text-ink-muted hover:bg-white/5 hover:text-white disabled:pointer-events-none"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
