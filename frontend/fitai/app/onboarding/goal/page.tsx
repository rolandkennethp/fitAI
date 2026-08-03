"use client";

import { useRouter } from "next/navigation";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { DetailOptionCard } from "@/components/onboarding/DetailOptionCard";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { PRIMARY_GOAL_OPTIONS } from "@/data/onboarding-options";

export default function GoalStepPage() {
  const router = useRouter();
  const { data, update } = useOnboarding();

  return (
    <div>
      <StepHeading
        title="What's your primary goal?"
        subtitle="Used to generate your first plan. You can change it later."
      />

      <div className="flex max-w-2xl flex-col gap-3">
        {PRIMARY_GOAL_OPTIONS.map((option) => (
          <DetailOptionCard
            key={option.value}
            label={option.label}
            description={option.description}
            selected={data.primaryGoal === option.value}
            onSelect={() => update("primaryGoal", option.value)}
          />
        ))}
      </div>

      <StepNav
        onBack={() => router.push("/onboarding/experience")}
        continueDisabled={!data.primaryGoal}
        onContinue={() => router.push("/onboarding/frequency")}
      />
    </div>
  );
}
