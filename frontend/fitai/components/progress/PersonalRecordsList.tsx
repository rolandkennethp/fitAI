import { PersonalRecord } from "@/types/progress";

export function PersonalRecordsList({
  records,
}: {
  records: PersonalRecord[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Personal Records
      </p>
      <div className="flex flex-col">
        {records.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-between gap-3 border-b border-border-subtle py-3.5 last:border-b-0"
          >
            <div>
              <p className="text-sm font-semibold text-white">
                {record.exerciseName}
              </p>
              <p className="mt-0.5 text-xs text-ink-faint">
                {record.dateLabel}
              </p>
            </div>
            <p className="font-display text-base text-lime">
              {record.weight} kg × {record.reps}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
