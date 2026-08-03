"use client";

import { cn } from "@/lib/utils";
import { cardBaseStyles } from "./cardStyles";

interface LabelOptionCardProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export function LabelOptionCard({
  label,
  selected,
  onSelect,
}: LabelOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        cardBaseStyles(selected),
        "flex items-center justify-center px-4 py-6 text-sm font-medium",
        selected ? "text-lime" : "text-white"
      )}
    >
      {label}
    </button>
  );
}
