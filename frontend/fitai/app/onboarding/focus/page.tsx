"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { LabelOptionCard } from "@/components/onboarding/LabelOptionCard";
import { OptionGrid } from "@/components/onboarding/OptionGrid";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { MUSCLE_FOCUS_OPTIONS } from "@/data/onboarding-options";
import { submitOnboarding } from "@/services/onboardingService";

export default function FocusStepPage() {
  const router = useRouter();
  const { data, toggleMuscleFocus } = useOnboarding();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NOTE: once the AI Workout Generator screen exists, this should route
  // there first (it calls Gemini via the backend), then on to /dashboard.
  // For now we submit and go straight to the dashboard.
  async function handleFinish() {
    setIsSubmitting(true);
    try {
      await submitOnboarding(data);
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <StepHeading
        title="Any muscle groups you want to prioritise?"
        subtitle="Optional — FitAI will balance your plan either way."
      />

      <OptionGrid>
        {MUSCLE_FOCUS_OPTIONS.map((option) => (
          <LabelOptionCard
            key={option.value}
            label={option.label}
            selected={data.muscleFocus.includes(option.value)}
            onSelect={() => toggleMuscleFocus(option.value)}
          />
        ))}
      </OptionGrid>

      <StepNav
        onBack={() => router.push("/onboarding/equipment")}
        onSkip={handleFinish}
        continueLabel="Generate My Plan"
        isSubmitting={isSubmitting}
        onContinue={handleFinish}
      />
    </div>
  );
}
