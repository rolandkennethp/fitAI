"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavGroupProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
  defaultOpen?: boolean;
}

export function SidebarNavGroup({
  title,
  children,
  collapsed,
  defaultOpen = true,
}: SidebarNavGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (collapsed) {
    return <div className="flex flex-col gap-1">{children}</div>;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-faint hover:text-ink-muted"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            !isOpen && "-rotate-90",
          )}
        />
      </button>
      {isOpen && <div className="mt-1 flex flex-col gap-1">{children}</div>}
    </div>
  );
}
