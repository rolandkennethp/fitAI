import { ArrowRight, Check, Plus } from "lucide-react";
import { CoachActionChange } from "@/types/coach";

interface CoachActionCardProps {
  title: string;
  changes?: CoachActionChange[];
  applied?: boolean;
}

export function CoachActionCard({
  title,
  changes,
  applied,
}: CoachActionCardProps) {
  return (
    <div className="mt-2 w-full max-w-[90%] rounded-[3px] border border-border bg-bg-card px-4 py-3">
      <p className="text-sm font-semibold text-white">{title}</p>

      {changes && changes.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {changes.map((change, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-ink-muted"
            >
              {change.icon === "increase" ? (
                <Plus className="mt-0.5 h-3 w-3 shrink-0 text-lime" />
              ) : (
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-lime" />
              )}
              {change.label}
            </li>
          ))}
        </ul>
      )}

      {applied && (
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-lime">
          <Check className="h-3.5 w-3.5" />
          Changes Applied
        </div>
      )}
    </div>
  );
}
