"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useDashboardSummary } from "@/hooks/useDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { summary } = useDashboardSummary();
  const progressPct = summary
    ? summary.today.totalSets > 0
      ? Math.round(
          (summary.today.completedSets / summary.today.totalSets) * 100,
        )
      : 0
    : 0;

  return (
    <div className="flex h-screen bg-bg">
      <div className="hidden lg:block">
        <Sidebar todayProgressPct={progressPct} />
      </div>

      <div className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-border bg-bg px-4 py-3 lg:hidden">
        <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-lime font-display text-base font-bold text-black">
          F
        </span>
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open menu"
          className="text-white"
        >
          <Menu className="h-5 w-5" />
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

      <div className="min-w-0 flex-1 pt-14 lg:pt-0">{children}</div>
    </div>
  );
}
