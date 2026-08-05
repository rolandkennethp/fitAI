"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useRestTimer() {
  const [remaining, setRemaining] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(
    (seconds: number) => {
      clear();
      setRemaining(seconds);
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev === null || prev <= 1) {
            clear();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    },
    [clear],
  );

  const cancel = useCallback(() => {
    clear();
    setRemaining(null);
  }, [clear]);

  useEffect(() => clear, [clear]);

  return {
    remainingSeconds: remaining,
    isActive: remaining !== null,
    start,
    cancel,
  };
}
