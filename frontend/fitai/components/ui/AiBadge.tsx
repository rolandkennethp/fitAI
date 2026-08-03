import { Sparkles } from "lucide-react";

/** Purely decorative brand mark — no interaction, no state. */
export function AiBadge() {
  return (
    <div className="fixed right-6 top-20 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-elevated md:right-10">
      <Sparkles className="h-5 w-5 text-lime" />
    </div>
  );
}
