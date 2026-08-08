"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ActiveWorkout, SetLog } from "@/types/activeWorkout";
import { getActiveWorkout, logSet } from "@/services/todayWorkoutService";

interface CompletionEvent {
  restSeconds: number;
  nonce: number;
}

export function useActiveWorkout() {
  const [workout, setWorkout] = useState<ActiveWorkout | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [lastCompletionEvent, setLastCompletionEvent] =
    useState<CompletionEvent | null>(null);

  useEffect(() => {
    let cancelled = false;
    getActiveWorkout().then((data) => {
      if (cancelled) return;
      setWorkout(data);
      setElapsedSeconds(data.elapsedSeconds);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!workout) return;
    const id = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [workout]);

  const updateSet = useCallback(
    (exerciseId: string, setId: string, updater: (set: SetLog) => SetLog) => {
      setWorkout((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          exercises: prev.exercises.map((ex) =>
            ex.id !== exerciseId
              ? ex
              : {
                  ...ex,
                  sets: ex.sets.map((s) => (s.id === setId ? updater(s) : s)),
                },
          ),
        };
      });
    },
    [],
  );

  const toggleSetComplete = useCallback((exerciseId: string, setId: string) => {
    setWorkout((prev) => {
      if (!prev) return prev;
      const exercise = prev.exercises.find((ex) => ex.id === exerciseId);
      const set = exercise?.sets.find((s) => s.id === setId);
      if (!exercise || !set) return prev;

      const nextCompleted = !set.isCompleted;
      logSet(exerciseId, setId, {
        weight: set.weight,
        reps: set.reps,
        isCompleted: nextCompleted,
      });

      if (nextCompleted) {
        setLastCompletionEvent((prevEvent) => ({
          restSeconds: exercise.restSeconds,
          nonce: (prevEvent?.nonce ?? 0) + 1,
        }));
      }

      return {
        ...prev,
        exercises: prev.exercises.map((ex) =>
          ex.id !== exerciseId
            ? ex
            : {
                ...ex,
                sets: ex.sets.map((s) =>
                  s.id === setId ? { ...s, isCompleted: nextCompleted } : s,
                ),
              },
        ),
      };
    });
  }, []);

  const updateSetWeight = useCallback(
    (exerciseId: string, setId: string, delta: number) => {
      updateSet(exerciseId, setId, (s) => ({
        ...s,
        weight: Math.max(0, Math.round((s.weight + delta) * 2) / 2),
      }));
    },
    [updateSet],
  );

  const updateSetReps = useCallback(
    (exerciseId: string, setId: string, delta: number) => {
      updateSet(exerciseId, setId, (s) => ({
        ...s,
        reps: Math.max(0, s.reps + delta),
      }));
    },
    [updateSet],
  );

  const addSet = useCallback((exerciseId: string) => {
    setWorkout((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        exercises: prev.exercises.map((ex) => {
          if (ex.id !== exerciseId) return ex;
          const last = ex.sets[ex.sets.length - 1];
          const newSet: SetLog = {
            id: `set-${ex.id}-${ex.sets.length + 1}-${Date.now()}`,
            setNumber: ex.sets.length + 1,
            weight: last?.weight ?? 0,
            reps: last?.reps ?? 0,
            isCompleted: false,
          };
          return { ...ex, sets: [...ex.sets, newSet] };
        }),
      };
    });
  }, []);

  const totals = useMemo(() => {
    if (!workout) return { completedSets: 0, totalSets: 0 };
    const allSets = workout.exercises.flatMap((ex) => ex.sets);
    return {
      completedSets: allSets.filter((s) => s.isCompleted).length,
      totalSets: allSets.length,
    };
  }, [workout]);

  return {
    workout,
    isLoading,
    elapsedSeconds,
    totals,
    lastCompletionEvent,
    toggleSetComplete,
    updateSetWeight,
    updateSetReps,
    addSet,
  };
}
