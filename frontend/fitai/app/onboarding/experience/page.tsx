"use client";

import { useRouter } from "next/navigation";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { DetailOptionCard } from "@/components/onboarding/DetailOptionCard";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { EXPERIENCE_OPTIONS } from "@/data/onboarding-options";

export default function ExperienceStepPage() {
  const router = useRouter();
  const { data, update } = useOnboarding();

  return (
    <div>
      <StepHeading
        title="How much training experience do you have?"
        subtitle="Used to generate your first plan. You can change it later."
      />

      <div className="flex max-w-2xl flex-col gap-3">
        {EXPERIENCE_OPTIONS.map((option) => (
          <DetailOptionCard
            key={option.value}
            label={option.label}
            description={option.description}
            selected={data.experienceLevel === option.value}
            onSelect={() => update("experienceLevel", option.value)}
          />
        ))}
      </div>

      <StepNav
        continueDisabled={!data.experienceLevel}
        onContinue={() => router.push("/onboarding/goal")}
      />
    </div>
  );
}
