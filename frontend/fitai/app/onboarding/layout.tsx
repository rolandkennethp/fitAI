"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { AiBadge } from "@/components/ui/AiBadge";
import { OnboardingProvider } from "@/hooks/useOnboarding";
import { ONBOARDING_STEPS } from "@/types/onboarding";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSegment = pathname.split("/").pop() ?? "";
  const stepIndex = ONBOARDING_STEPS.indexOf(currentSegment as never);
  const currentStep = stepIndex === -1 ? 1 : stepIndex + 1;
  const totalSteps = ONBOARDING_STEPS.length;

  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-bg">
        <header>
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <Logo />
            <span className="text-xs font-medium tracking-wider text-ink-muted">
              STEP {currentStep}/{totalSteps}
            </span>
          </div>
          <ProgressBar current={currentStep} total={totalSteps} />
        </header>

        <AiBadge />

        <main className="px-6 py-16 md:px-10 md:py-20">{children}</main>
      </div>
    </OnboardingProvider>
  );
}
