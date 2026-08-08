export function ProgressHeader({ rangeLabel }: { rangeLabel: string }) {
  return (
    <div>
      <h1 className="font-display text-4xl text-white sm:text-5xl">Progress</h1>
      <p className="mt-1 text-sm text-ink-muted">{rangeLabel}</p>
    </div>
  );
}
