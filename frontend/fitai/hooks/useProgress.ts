"use client";

import { useEffect, useState } from "react";
import { ProgressSummary } from "@/types/progress";
import { getProgress } from "@/services/progressService";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getProgress().then((data) => {
      if (cancelled) return;
      setProgress(data);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { progress, isLoading };
}
