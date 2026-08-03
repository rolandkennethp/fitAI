import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 select-none", className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-lime font-display text-base font-bold text-black">
        F
      </span>
      <span className="font-display text-xl tracking-tight">
        <span className="text-white">FIT</span>
        <span className="text-lime">AI</span>
      </span>
    </Link>
  );
}
