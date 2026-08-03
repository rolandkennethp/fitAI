"use client";

import { cn } from "@/lib/utils";
import { cardBaseStyles } from "./cardStyles";

interface DetailOptionCardProps {
  label: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

export function DetailOptionCard({
  label,
  description,
  selected,
  onSelect,
}: DetailOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(cardBaseStyles(selected), "px-6 py-4")}
    >
      <div
        className={cn(
          "font-display text-base tracking-wide",
          selected ? "text-lime" : "text-white"
        )}
      >
        {label.toUpperCase()}
      </div>
      <div className="mt-1 text-sm text-ink-muted">{description}</div>
    </button>
  );
}
