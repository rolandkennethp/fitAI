import { HistorySetLog } from "@/types/history";

function formatSet(set: HistorySetLog) {
  return set.weight > 0 ? `${set.weight} kg × ${set.reps}` : `BW × ${set.reps}`;
}

export function SetPill({ set }: { set: HistorySetLog }) {
  return (
    <span className="rounded-[3px] border border-border px-2.5 py-1 text-xs text-ink-muted">
      {formatSet(set)}
    </span>
  );
}
