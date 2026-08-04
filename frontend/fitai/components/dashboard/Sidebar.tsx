"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Dumbbell,
  CalendarDays,
  History,
  TrendingUp,
  Sparkles,
  Settings,
  ChevronLeft,
  Activity,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SidebarNavGroup } from "./SidebarNavGroup";
import { SidebarNavItem } from "./SidebarNavItem";
import { cn } from "@/lib/utils";

interface SidebarProps {
  todayProgressPct: number;
  className?: string;
}

// Routes for Today's Workout, Workout Plan, History, Progress, AI Coach, and
// Profile are placeholders until those screens are built — swap the hrefs
// once each page exists.
export function Sidebar({ todayProgressPct, className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex h-full flex-col justify-between border-r border-border bg-bg transition-[width] duration-200",
        collapsed ? "w-19" : "w-70",
        className,
      )}
    >
      <div className="flex flex-col gap-6 overflow-y-auto px-4 py-5">
        <div className={cn("px-2", collapsed && "flex justify-center px-0")}>
          {collapsed ? (
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-lime font-display text-base font-bold text-black">
              F
            </span>
          ) : (
            <Logo />
          )}
        </div>

        <nav className="flex flex-col gap-5">
          <SidebarNavGroup title="Train" collapsed={collapsed}>
            <SidebarNavItem
              label="Dashboard"
              href="/dashboard"
              icon={LayoutDashboard}
              collapsed={collapsed}
            />
            <SidebarNavItem
              label="Today's Workout"
              href="/today-workout"
              icon={Dumbbell}
              collapsed={collapsed}
            />
            <SidebarNavItem
              label="Workout Plan"
              href="/workout-plan"
              icon={CalendarDays}
              collapsed={collapsed}
            />
          </SidebarNavGroup>

          <SidebarNavGroup title="Review" collapsed={collapsed}>
            <SidebarNavItem
              label="History"
              href="/history"
              icon={History}
              collapsed={collapsed}
            />
            <SidebarNavItem
              label="Progress"
              href="/progress"
              icon={TrendingUp}
              collapsed={collapsed}
            />
          </SidebarNavGroup>

          <SidebarNavGroup title="Coach" collapsed={collapsed}>
            <SidebarNavItem
              label="AI Coach"
              href="/ai-coach"
              icon={Sparkles}
              collapsed={collapsed}
            />
            <SidebarNavItem
              label="Profile & Settings"
              href="/profile"
              icon={Settings}
              collapsed={collapsed}
            />
          </SidebarNavGroup>
        </nav>
      </div>

      <div className="border-t border-border px-4 py-4">
        {!collapsed && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-ink-muted">
              <span className="font-medium uppercase tracking-wide">Today</span>
              <span>{todayProgressPct}%</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-border-subtle">
              <div
                className="h-full rounded-full bg-lime"
                style={{ width: `${todayProgressPct}%` }}
              />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setCollapsed((v) => !v)}
          className={cn(
            "flex items-center gap-2 text-xs text-ink-muted hover:text-white",
            collapsed && "w-full justify-center",
          )}
        >
          <ChevronLeft
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              collapsed && "rotate-180",
            )}
          />
          {!collapsed && <span>Collapse</span>}
        </button>

        {!collapsed && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-faint">
            <Activity className="h-3.5 w-3.5" />
            <span>FitAI · v1</span>
          </div>
        )}
      </div>
    </aside>
  );
}
