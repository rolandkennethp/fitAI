"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface MobileCoachContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const MobileCoachContext = createContext<MobileCoachContextValue | null>(null);

export function MobileCoachProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const value = useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  );

  return (
    <MobileCoachContext.Provider value={value}>
      {children}
    </MobileCoachContext.Provider>
  );
}

export function useMobileCoach() {
  const ctx = useContext(MobileCoachContext);
  if (!ctx) {
    throw new Error("useMobileCoach must be used within a MobileCoachProvider");
  }
  return ctx;
}
