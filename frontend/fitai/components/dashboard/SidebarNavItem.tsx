"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  collapsed?: boolean;
}

export function SidebarNavItem({
  label,
  href,
  icon: Icon,
  collapsed,
}: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-[3px] border-l-2 px-3 py-2.5 text-sm transition-colors",
        isActive
          ? "border-lime bg-lime/10 text-white"
          : "border-transparent text-ink-muted hover:bg-white/5 hover:text-white",
        collapsed && "justify-center px-0",
      )}
      title={collapsed ? label : undefined}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0",
          isActive ? "text-lime" : "text-ink-muted",
        )}
      />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
