"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HistorySession } from "@/types/history";
import { SessionExerciseRow } from "./SessionExerciseRow";
import { cn } from "@/lib/utils";

interface SessionCardProps {
  session: HistorySession;
  isOpen: boolean;
  onToggle: () => void;
}

export function SessionCard({ session, isOpen, onToggle }: SessionCardProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 shrink-0">
            <p className="text-xs uppercase tracking-wide text-ink-faint">
              {session.monthLabel}
            </p>
            <p className="font-display text-2xl text-white">
              {session.dayNumberLabel}
            </p>
          </div>
          <div>
            <p className="font-display text-2xl text-white sm:text-3xl">
              {session.workoutName}
            </p>
            <p className="mt-0.5 text-xs text-ink-muted">
              {session.durationMinutes} min ·{" "}
              {session.volumeKg.toLocaleString()} kg volume
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-[3px] border border-lime/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-lime">
            Completed
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-ink-muted transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="border-t border-border px-6 py-3 text-xs font-medium uppercase tracking-wide text-ink-faint sm:px-8">
              {session.fullDateLabel}
            </p>
            <div>
              {session.exercises.map((exercise) => (
                <SessionExerciseRow key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
