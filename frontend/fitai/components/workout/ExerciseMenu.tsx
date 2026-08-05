"use client";

import { useState } from "react";
import { MoreVertical, Repeat, SkipForward } from "lucide-react";

export function ExerciseMenu({ exerciseName }: { exerciseName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: wire these to the AI Coach once exercise replacement / skip is
  // backed by the real endpoint (requirements.md section 14.3 / 14.4).
  function handleReplace() {
    setIsOpen(false);
    console.log(`Replace exercise: ${exerciseName}`);
  }

  function handleSkip() {
    setIsOpen(false);
    console.log(`Skip exercise: ${exerciseName}`);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Exercise options"
        className="flex h-6 w-6 items-center justify-center text-ink-muted hover:text-white"
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-8 z-20 w-48 rounded-[3px] border border-border bg-bg-elevated py-1 shadow-lg">
            <button
              type="button"
              onClick={handleReplace}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink hover:bg-white/5"
            >
              <Repeat className="h-3.5 w-3.5 text-ink-muted" />
              Replace Exercise
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink hover:bg-white/5"
            >
              <SkipForward className="h-3.5 w-3.5 text-ink-muted" />
              Skip Exercise
            </button>
          </div>
        </>
      )}
    </div>
  );
}
