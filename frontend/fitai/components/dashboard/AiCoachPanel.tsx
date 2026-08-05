"use client";

import { useState } from "react";
import { ArrowUp, Sparkles, X } from "lucide-react";
import { CoachMessage, SuggestedPrompt } from "@/types/coach";
import { CoachMessageBubble } from "./CoachMessageBubble";
import { SuggestedPromptChip } from "./SuggestedPromptChip";
import { cn } from "@/lib/utils";

interface AiCoachPanelProps {
  contextLabel: string;
  messages: CoachMessage[];
  prompts: SuggestedPrompt[];
  isSending: boolean;
  onSend: (text: string) => void;
  className?: string;
  /** Present only for the mobile full-screen overlay variant. */
  onClose?: () => void;
}

export function AiCoachPanel({
  contextLabel,
  messages,
  prompts,
  isSending,
  onSend,
  className,
  onClose,
}: AiCoachPanelProps) {
  const [draft, setDraft] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim() || isSending) return;
    onSend(draft);
    setDraft("");
  }

  return (
    <aside
      className={cn(
        "relative flex h-full flex-col border-l border-border bg-bg",
        className,
      )}
    >
      <div className="absolute right-3 top-2 sm:hidden flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-elevated">
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close AI Coach"
            className="flex h-full w-full items-center justify-center text-ink-muted hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <Sparkles className="h-5 w-5 text-lime" />
        )}
      </div>

      <div className="flex items-center justify-between border-b border-border px-6 py-5 pr-20 sm:pr-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="text-sm font-semibold uppercase tracking-wide text-white">
            AI Coach
          </span>
        </div>
        <span className="text-xs uppercase tracking-wide text-ink-faint">
          Context: {contextLabel}
        </span>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
        {messages.map((message) => (
          <CoachMessageBubble key={message.id} message={message} />
        ))}
        {isSending && (
          <p className="text-xs text-ink-faint">FitAI is thinking…</p>
        )}
      </div>

      <div className="border-t border-border px-6 py-5">
        <div className="mb-4 grid grid-cols-2 gap-2">
          {prompts.map((prompt) => (
            <SuggestedPromptChip
              key={prompt.id}
              label={prompt.label}
              disabled={isSending}
              onClick={() => onSend(prompt.label)}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Tell me what changed..."
            disabled={isSending}
            className="flex-1 rounded-[3px] border border-border bg-bg-card px-4 py-3 text-sm text-white placeholder:text-ink-faint focus:border-lime focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isSending || !draft.trim()}
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-lime text-black transition-opacity disabled:cursor-not-allowed disabled:bg-lime-dim disabled:text-lime-dim-text"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </form>
      </div>
    </aside>
  );
}
