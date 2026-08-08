"use client";

import { createContext, useContext } from "react";
import { useActiveWorkout } from "./useActiveWorkout";

type ActiveWorkoutContextValue = ReturnType<typeof useActiveWorkout>;

const ActiveWorkoutContext = createContext<ActiveWorkoutContextValue | null>(
  null,
);

export function ActiveWorkoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useActiveWorkout();
  return (
    <ActiveWorkoutContext.Provider value={value}>
      {children}
    </ActiveWorkoutContext.Provider>
  );
}

export function useActiveWorkoutContext() {
  const ctx = useContext(ActiveWorkoutContext);
  if (!ctx) {
    throw new Error(
      "useActiveWorkoutContext must be used within an ActiveWorkoutProvider",
    );
  }
  return ctx;
}
