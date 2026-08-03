"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface StepNavProps {
  onBack?: () => void;
  onContinue: () => void;
  onSkip?: () => void;
  continueLabel?: string;
  continueDisabled?: boolean;
  isSubmitting?: boolean;
}

export function StepNav({
  onBack,
  onContinue,
  onSkip,
  continueLabel = "Continue",
  continueDisabled = false,
  isSubmitting = false,
}: StepNavProps) {
  return (
    <div className="mt-8 flex items-center gap-4">
      {onBack && (
        <Button variant="secondary" onClick={onBack} type="button">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      )}

      <Button
        variant="primary"
        onClick={onContinue}
        disabled={continueDisabled}
        isLoading={isSubmitting}
        type="button"
      >
        {continueLabel}
        <ArrowRight className="h-4 w-4" />
      </Button>

      {onSkip && (
        <Button variant="ghost" onClick={onSkip} type="button">
          Skip this step
        </Button>
      )}
    </div>
  );
}
