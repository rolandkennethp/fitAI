import { StreakBadge } from "./StreakBadge";

interface DashboardHeaderProps {
  dateLabel: string;
  userName: string;
  streak: number;
}

export function DashboardHeader({
  dateLabel,
  userName,
  streak,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-wider text-ink-muted">
          {dateLabel}
        </p>
        <h1 className="mt-1 font-display text-3xl leading-tight text-white sm:text-4xl">
          Welcome Back, {userName.toUpperCase()}
        </h1>
      </div>
      <StreakBadge days={streak} />
    </div>
  );
}
