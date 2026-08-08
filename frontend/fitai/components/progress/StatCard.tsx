interface StatCardProps {
  label: string;
  value: string;
  unit?: string;
  caption: string;
}

export function StatCard({ label, value, unit, caption }: StatCardProps) {
  return (
    <div className="rounded-sm border border-border px-5 py-4">
      <p className="text-xs uppercase tracking-wide text-ink-muted">{label}</p>
      <p className="mt-2 font-display text-3xl text-white">
        {value}
        {unit && (
          <span className="ml-1 text-sm font-normal text-ink-muted">
            {unit}
          </span>
        )}
      </p>
      <p className="mt-1 text-xs text-ink-faint">{caption}</p>
    </div>
  );
}
