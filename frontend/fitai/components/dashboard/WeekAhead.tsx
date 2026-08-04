import { UpcomingDay } from "@/types/workout";
import { WeekAheadCard } from "./WeekAheadCard";

export function WeekAhead({ days }: { days: UpcomingDay[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Rest of the Week
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {days.map((day) => (
          <WeekAheadCard key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}
