"use client";

import { AiCoachPanel } from "@/components/dashboard/AiCoachPanel";
import { CoachMessage, SuggestedPrompt } from "@/types/coach";
import { useMobileCoach } from "@/hooks/useMobileCoach";
import { AskFitaiButton } from "./AskFitaiButton";

interface FloatingCoachOverlayProps {
  contextLabel: string;
  messages: CoachMessage[];
  prompts: SuggestedPrompt[];
  isSending: boolean;
  onSend: (text: string) => void;
  onApplyAction?: (messageId: string) => void;
  onKeepAsIs?: (messageId: string) => void;
}

export function FloatingCoachOverlay({
  contextLabel,
  messages,
  prompts,
  isSending,
  onSend,
  onApplyAction,
  onKeepAsIs,
}: FloatingCoachOverlayProps) {
  const { isOpen, open, close } = useMobileCoach();

  return (
    <>
      {!isOpen && <AskFitaiButton onClick={open} />}

      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <div className="absolute inset-y-0 right-0 w-full max-w-97.5">
            <AiCoachPanel
              className="h-full w-full"
              contextLabel={contextLabel}
              messages={messages}
              prompts={prompts}
              isSending={isSending}
              onSend={onSend}
              onClose={close}
              onApplyAction={onApplyAction}
              onKeepAsIs={onKeepAsIs}
            />
          </div>
        </div>
      )}
    </>
  );
}
