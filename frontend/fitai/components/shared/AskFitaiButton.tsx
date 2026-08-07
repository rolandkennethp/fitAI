import { Sparkles } from "lucide-react";

export function AskFitaiButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 hidden md:flex right-10 z-30 items-center gap-2 rounded-sm bg-lime px-5 py-3 font-semibold text-sm text-black shadow-lg transition-colors hover:bg-lime/90"
    >
      <Sparkles className="h-4 w-4" />
      Ask FitAI
    </button>
  );
}
