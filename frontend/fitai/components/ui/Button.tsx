"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] font-display text-sm tracking-wide px-6 py-3.5 transition-colors duration-150 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  // Enabled = bright lime / black text. Disabled = muted olive, matching the
  // "no selection yet" CONTINUE button state in the design screenshots.
  primary:
    "bg-lime text-black hover:bg-lime/90 disabled:bg-lime-dim disabled:text-lime-dim-text",
  secondary:
    "border border-border text-white hover:border-white/40 bg-transparent",
  ghost:
    "text-ink-muted hover:text-white bg-transparent px-2 py-2 tracking-normal",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", isLoading, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
