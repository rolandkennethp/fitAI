"use client";

import { useCallback, useEffect, useState } from "react";
import { WeekPlan } from "@/types/weekPlan";
import { ReschedulePayload } from "@/types/coach";
import { getWeekPlan } from "@/services/weekPlanService";

export function useWeekPlan() {
  const [weekPlan, setWeekPlan] = useState<WeekPlan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getWeekPlan().then((data) => {
      if (cancelled) return;
      setWeekPlan(data);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const applyReschedule = useCallback(
    ({ missedDayIndex, targetDayIndex }: ReschedulePayload) => {
      setWeekPlan((prev) => {
        if (!prev) return prev;
        const missedDay = prev.days[missedDayIndex];

        const days = prev.days.map((day, i) => {
          if (i === missedDayIndex) {
            return { ...day, status: "missed" as const };
          }
          if (i === targetDayIndex) {
            return {
              ...day,
              workoutName: missedDay.workoutName,
              isRestDay: false,
              durationMinutes: missedDay.durationMinutes,
              exerciseCount: missedDay.exerciseCount,
              status: "scheduled" as const,
            };
          }
          return day;
        });

        return { ...prev, days };
      });
    },
    [],
  );

  return { weekPlan, isLoading, applyReschedule };
}
