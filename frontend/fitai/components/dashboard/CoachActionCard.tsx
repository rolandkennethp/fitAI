import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { CoachActionChange } from "@/types/coach";
import { Button } from "@/components/ui/Button";

interface CoachActionCardProps {
  title: string;
  changes?: CoachActionChange[];
  applied?: boolean;
  requiresConfirmation?: boolean;
  onApply?: () => void;
  onKeepAsIs?: () => void;
}

function ChangeIcon({ icon }: { icon: CoachActionChange["icon"] }) {
  if (icon === "add")
    return <Plus className="mt-0.5 h-3 w-3 shrink-0 text-lime" />;
  if (icon === "remove")
    return <Minus className="mt-0.5 h-3 w-3 shrink-0 text-ink-faint" />;
  return <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-ink-faint" />;
}

export function CoachActionCard({
  title,
  changes,
  applied,
  requiresConfirmation,
  onApply,
  onKeepAsIs,
}: CoachActionCardProps) {
  return (
    <div className="mt-2 w-full max-w-[90%] rounded-[3px] border border-border bg-bg-card px-4 py-3">
      <p className="text-sm font-semibold text-white">{title}</p>

      {changes && changes.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {changes.map((change, i) => (
            <li
              key={i}
              className={
                change.icon === "add"
                  ? "flex items-start gap-2 text-xs text-white"
                  : "flex items-start gap-2 text-xs text-ink-muted"
              }
            >
              <ChangeIcon icon={change.icon} />
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

      {requiresConfirmation && !applied && (onApply || onKeepAsIs) && (
        <div className="mt-4 flex items-center gap-3">
          {onApply && (
            <Button
              variant="primary"
              onClick={onApply}
              className="px-4 font-sans font-semibold py-2 text-xs"
            >
              Apply Changes
            </Button>
          )}
          {onKeepAsIs && (
            <Button
              variant="ghost"
              onClick={onKeepAsIs}
              className="text-xs font-sans font-semibold"
            >
              Keep As Is
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
