import { cn } from "@/lib/utils";

/**
 * Base + selected/unselected styling shared by every selectable card variant
 * (detail, stat, label). Kept in one place so the "selected" look — lime
 * border, dark olive-tinted background, lime text — stays consistent.
 */
export function cardBaseStyles(selected: boolean) {
  return cn(
    "w-full rounded-[3px] border text-left transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime",
    selected
      ? "border-lime bg-lime-tint"
      : "border-border bg-bg-card hover:border-white/25"
  );
}
