"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EMPTY_ONBOARDING_DATA, OnboardingData } from "@/types/onboarding";
import { loadDraft, saveDraft } from "@/services/onboardingService";

interface OnboardingContextValue {
  data: OnboardingData;
  update: <K extends keyof OnboardingData>(
    key: K,
    value: OnboardingData[K],
  ) => void;
  toggleEquipment: (value: OnboardingData["equipment"][number]) => void;
  toggleMuscleFocus: (value: OnboardingData["muscleFocus"][number]) => void;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<OnboardingData>(() => {
    const draft = loadDraft();
    return draft ?? EMPTY_ONBOARDING_DATA;
  });

  useEffect(() => {
    saveDraft(data);
  }, [data]);

  const update = useCallback(
    <K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const toggleEquipment = useCallback(
    (value: OnboardingData["equipment"][number]) => {
      setData((prev) => ({
        ...prev,
        equipment: prev.equipment.includes(value)
          ? prev.equipment.filter((v) => v !== value)
          : [...prev.equipment, value],
      }));
    },
    [],
  );

  const toggleMuscleFocus = useCallback(
    (value: OnboardingData["muscleFocus"][number]) => {
      setData((prev) => ({
        ...prev,
        muscleFocus: prev.muscleFocus.includes(value)
          ? prev.muscleFocus.filter((v) => v !== value)
          : [...prev.muscleFocus, value],
      }));
    },
    [],
  );

  const value = useMemo(
    () => ({ data, update, toggleEquipment, toggleMuscleFocus }),
    [data, update, toggleEquipment, toggleMuscleFocus],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return ctx;
}
