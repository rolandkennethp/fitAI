"use client";

import { cn } from "@/lib/utils";
import { cardBaseStyles } from "./cardStyles";

interface StatOptionCardProps {
  value: number;
  unit: string;
  selected: boolean;
  onSelect: () => void;
}

export function StatOptionCard({
  value,
  unit,
  selected,
  onSelect,
}: StatOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        cardBaseStyles(selected),
        "flex flex-col items-center justify-center px-4 py-6"
      )}
    >
      <span
        className={cn(
          "font-display text-3xl",
          selected ? "text-lime" : "text-white"
        )}
      >
        {value}
      </span>
      <span className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
        {unit}
      </span>
    </button>
  );
}
