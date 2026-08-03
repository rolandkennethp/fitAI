"use client";

import { useRouter } from "next/navigation";
import { StepHeading } from "@/components/onboarding/StepHeading";
import { LabelOptionCard } from "@/components/onboarding/LabelOptionCard";
import { OptionGrid } from "@/components/onboarding/OptionGrid";
import { StepNav } from "@/components/onboarding/StepNav";
import { useOnboarding } from "@/hooks/useOnboarding";
import { EQUIPMENT_OPTIONS } from "@/data/onboarding-options";

export default function EquipmentStepPage() {
  const router = useRouter();
  const { data, toggleEquipment } = useOnboarding();

  return (
    <div>
      <StepHeading
        title="What equipment can you use?"
        subtitle="Used to generate your first plan. You can change it later."
      />

      <OptionGrid>
        {EQUIPMENT_OPTIONS.map((option) => (
          <LabelOptionCard
            key={option.value}
            label={option.label}
            selected={data.equipment.includes(option.value)}
            onSelect={() => toggleEquipment(option.value)}
          />
        ))}
      </OptionGrid>

      <StepNav
        onBack={() => router.push("/onboarding/duration")}
        continueDisabled={data.equipment.length === 0}
        onContinue={() => router.push("/onboarding/focus")}
      />
    </div>
  );
}
