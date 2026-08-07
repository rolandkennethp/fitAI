interface HistoryHeaderProps {
  totalSessions: number;
  totalWeeks: number;
}

export function HistoryHeader({
  totalSessions,
  totalWeeks,
}: HistoryHeaderProps) {
  return (
    <div>
      <h1 className="font-display text-4xl text-white sm:text-5xl">History</h1>
      <p className="mt-1 text-sm text-ink-muted">
        {totalSessions} completed sessions · {totalWeeks} weeks of training
      </p>
    </div>
  );
}
