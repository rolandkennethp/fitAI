"use client";

import { useRouter } from "next/navigation";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { StatOptionCard } from "@/components/onboarding/StatOptionCard";
import { OptionGrid } from "@/components/onboarding/OptionGrid";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { SESSION_DURATION_OPTIONS } from "@/data/onboarding-options";

export default function DurationStepPage() {
  const router = useRouter();
  const { data, update } = useOnboarding();

  return (
    <div>
      <StepHeading
        title="How long is a typical session?"
        subtitle="Used to generate your first plan. You can change it later."
      />

      <OptionGrid>
        {SESSION_DURATION_OPTIONS.map((option) => (
          <StatOptionCard
            key={option.value}
            value={option.value}
            unit={option.unit}
            selected={data.sessionDuration === option.value}
            onSelect={() => update("sessionDuration", option.value)}
          />
        ))}
      </OptionGrid>

      <StepNav
        onBack={() => router.push("/onboarding/frequency")}
        continueDisabled={!data.sessionDuration}
        onContinue={() => router.push("/onboarding/equipment")}
      />
    </div>
  );
}
