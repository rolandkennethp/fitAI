import { cn } from "@/lib/utils";

interface OptionGridProps {
  children: React.ReactNode;
  columns?: 2 | 3;
  className?: string;
}

export function OptionGrid({ children, columns = 3, className }: OptionGridProps) {
  return (
    <div
      className={cn(
        "grid max-w-2xl gap-3",
        columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}
