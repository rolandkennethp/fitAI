import { CoachMessage } from "@/types/coach";
import { cn } from "@/lib/utils";
import { CoachActionCard } from "./CoachActionCard";

interface CoachMessageBubbleProps {
  message: CoachMessage;
  onApplyAction?: (messageId: string) => void;
  onKeepAsIs?: (messageId: string) => void;
}

export function CoachMessageBubble({
  message,
  onApplyAction,
  onKeepAsIs,
}: CoachMessageBubbleProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={cn("flex flex-col gap-1", !isAssistant && "items-end")}>
      {isAssistant && (
        <span className="text-xs font-semibold uppercase tracking-wide text-lime">
          FitAI
        </span>
      )}
      <p
        className={cn(
          "max-w-[90%] text-sm leading-relaxed",
          isAssistant
            ? "text-ink"
            : "rounded-[3px] border border-border bg-bg-card px-3 py-2 text-white",
        )}
      >
        {message.content}
      </p>
      {isAssistant && message.action?.title && (
        <CoachActionCard
          title={message.action.title}
          changes={message.action.changes}
          applied={message.action.applied}
          requiresConfirmation={message.action.requiresConfirmation}
          onApply={onApplyAction ? () => onApplyAction(message.id) : undefined}
          onKeepAsIs={onKeepAsIs ? () => onKeepAsIs(message.id) : undefined}
        />
      )}
    </div>
  );
}
