"use client";

import { HistoryHeader } from "@/components/history/HistoryHeader";
import { SessionCard } from "@/components/history/SessionCard";
import { FloatingCoachOverlay } from "@/components/shared/FloatingCoachOverlay";
import { useHistory } from "@/hooks/useHistory";
import { useCoachChat } from "@/hooks/useCoachChat";
import { INITIAL_COACH_MESSAGE, SUGGESTED_PROMPTS } from "@/data/coach-mock";
import { sendCoachMessage } from "@/services/coachService";

export default function HistoryPage() {
  const { history, isLoading, openSessionId, toggleSession } = useHistory();
  const { messages, send, isSending } = useCoachChat(
    [INITIAL_COACH_MESSAGE],
    sendCoachMessage,
  );

  if (isLoading || !history) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-ink-muted">Loading your history…</p>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-y-auto px-6 py-8 lg:px-10 lg:py-10">
      <div className="space-y-6">
        <HistoryHeader
          totalSessions={history.totalSessions}
          totalWeeks={history.totalWeeks}
        />

        <div className="rounded-[4px] border border-border">
          {history.sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              isOpen={openSessionId === session.id}
              onToggle={() => toggleSession(session.id)}
            />
          ))}
        </div>
      </div>

      <FloatingCoachOverlay
        contextLabel="History"
        messages={messages}
        prompts={SUGGESTED_PROMPTS}
        isSending={isSending}
        onSend={send}
      />
    </div>
  );
}
