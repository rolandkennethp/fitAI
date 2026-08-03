"use client";

import { useRouter } from "next/navigation";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { StatOptionCard } from "@/components/onboarding/StatOptionCard";
import { OptionGrid } from "@/components/onboarding/OptionGrid";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { SESSIONS_PER_WEEK_OPTIONS } from "@/data/onboarding-options";

export default function FrequencyStepPage() {
  const router = useRouter();
  const { data, update } = useOnboarding();

  return (
    <div>
      <StepHeading
        title="How many sessions per week?"
        subtitle="Used to generate your first plan. You can change it later."
      />

      <OptionGrid>
        {SESSIONS_PER_WEEK_OPTIONS.map((option) => (
          <StatOptionCard
            key={option.value}
            value={option.value}
            unit={option.unit}
            selected={data.sessionsPerWeek === option.value}
            onSelect={() => update("sessionsPerWeek", option.value)}
          />
        ))}
      </OptionGrid>

      <StepNav
        onBack={() => router.push("/onboarding/goal")}
        continueDisabled={!data.sessionsPerWeek}
        onContinue={() => router.push("/onboarding/duration")}
      />
    </div>
  );
}
