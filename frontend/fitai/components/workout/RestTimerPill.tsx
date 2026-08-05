"use client";

import { X } from "lucide-react";
import { formatMinutesSeconds } from "@/lib/format";

interface RestTimerPillProps {
  remainingSeconds: number;
  onCancel: () => void;
}

export function RestTimerPill({
  remainingSeconds,
  onCancel,
}: RestTimerPillProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-lime/40 bg-bg-elevated px-5 py-2.5 shadow-lg">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
          Rest
        </span>
        <span className="font-display text-lg text-lime">
          {formatMinutesSeconds(remainingSeconds)}
        </span>
        <button
          type="button"
          onClick={onCancel}
          aria-label="Cancel rest timer"
          className="text-ink-muted hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
