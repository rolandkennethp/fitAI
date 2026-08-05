"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useDashboardSummary } from "@/hooks/useDashboard";
import { MobileCoachProvider, useMobileCoach } from "@/hooks/useMobileCoach";

function MobileTopBar({ progressPct }: { progressPct: number }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { toggle: toggleCoach } = useMobileCoach();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-border bg-bg px-4 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open menu"
          className="text-white"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={toggleCoach}
          aria-label="Open AI Coach"
          className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-bg-elevated text-lime"
        >
          <Sparkles className="h-4 w-4" />
        </button>
      </div>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="absolute inset-y-0 left-0">
            <div className="relative h-full">
              <Sidebar todayProgressPct={progressPct} />
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
                className="absolute right-3 top-4 text-ink-muted hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetched once here so the desktop rail and the mobile drawer's copy of
  // the sidebar always agree on "Today" progress.
  const { summary } = useDashboardSummary();
  const progressPct = summary
    ? summary.today.totalSets > 0
      ? Math.round(
          (summary.today.completedSets / summary.today.totalSets) * 100,
        )
      : 0
    : 0;

  return (
    <MobileCoachProvider>
      <div className="flex h-screen bg-bg">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar todayProgressPct={progressPct} />
        </div>

        {/* Mobile: hamburger (left) opens the nav drawer, sparkle (right) opens AI Coach */}
        <MobileTopBar progressPct={progressPct} />

        <div className="min-w-0 flex-1 pt-14 lg:pt-0">{children}</div>
      </div>
    </MobileCoachProvider>
  );
}
