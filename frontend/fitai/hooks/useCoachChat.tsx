"use client";

import { useCallback, useState } from "react";
import { CoachMessage } from "@/types/coach";

export function useCoachChat(
  initialMessages: CoachMessage[],
  sendMessage: (text: string) => Promise<CoachMessage>,
) {
  const [messages, setMessages] = useState<CoachMessage[]>(initialMessages);
  const [isSending, setIsSending] = useState(false);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMessage: CoachMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsSending(true);

      try {
        const reply = await sendMessage(trimmed);
        setMessages((prev) => [...prev, reply]);
      } finally {
        setIsSending(false);
      }
    },
    [sendMessage],
  );

  const resolveAction = useCallback((messageId: string, applied: boolean) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === messageId && m.action
          ? {
              ...m,
              action: applied
                ? { ...m.action, applied: true, requiresConfirmation: false }
                : {
                    ...m.action,
                    requiresConfirmation: false,
                    changes: undefined,
                  },
            }
          : m,
      ),
    );
  }, []);

  return { messages, send, isSending, resolveAction };
}
