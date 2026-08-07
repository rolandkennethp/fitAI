"use client";

import { useCallback, useEffect, useState } from "react";
import { HistorySummary } from "@/types/history";
import { getHistory } from "@/services/historyService";

export function useHistory() {
  const [history, setHistory] = useState<HistorySummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openSessionId, setOpenSessionId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getHistory().then((data) => {
      if (cancelled) return;
      setHistory(data);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleSession = useCallback((sessionId: string) => {
    setOpenSessionId((current) => (current === sessionId ? null : sessionId));
  }, []);

  return { history, isLoading, openSessionId, toggleSession };
}
