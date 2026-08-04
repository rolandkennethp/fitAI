"use client";

import { useCallback, useState } from "react";
import { CoachMessage } from "@/types/coach";
import { sendCoachMessage } from "@/services/coachService";

export function useCoachChat(initialMessages: CoachMessage[]) {
  const [messages, setMessages] = useState<CoachMessage[]>(initialMessages);
  const [isSending, setIsSending] = useState(false);

  const send = useCallback(async (text: string) => {
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
      const reply = await sendCoachMessage(trimmed);
      setMessages((prev) => [...prev, reply]);
    } finally {
      setIsSending(false);
    }
  }, []);

  return { messages, send, isSending };
}
