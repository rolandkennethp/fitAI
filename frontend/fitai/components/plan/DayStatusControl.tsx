import { useRouter } from "next/navigation";
import { DayStatus } from "@/types/weekPlan";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-[3px] border px-3 py-1.5 text-xs font-medium uppercase tracking-wide",
        className,
      )}
    >
      {label}
    </span>
  );
}

export function DayStatusControl({ status }: { status: DayStatus }) {
  const router = useRouter();

  if (status === "today") {
    return (
      <div className="flex items-center gap-2">
        <Badge label="Today" className="border-lime/40 text-lime" />
        <Button
          onClick={() => router.push("/today-workout")}
          className="px-4 py-2 text-xs"
        >
          Start
        </Button>
      </div>
    );
  }

  if (status === "missed") {
    return (
      <Badge label="Missed" className="border-red-500/30 text-red-400/80" />
    );
  }

  if (status === "recovery") {
    return <Badge label="Recovery" className="border-border text-ink-faint" />;
  }

  return <Badge label="Scheduled" className="border-border text-ink-muted" />;
}
