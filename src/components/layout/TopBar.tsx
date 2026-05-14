"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface TopBarProps {
  title: string;
  /** Optional back href; defaults to /dashboard. Set to null to hide. */
  backHref?: string | null;
  backLabel?: string;
  onOpenMenu: () => void;
  className?: string;
}

export function TopBar({
  title,
  backHref = "/dashboard",
  backLabel = "Dashboard",
  onOpenMenu,
  className,
}: TopBarProps) {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12",
        className
      )}
    >
      <div className="flex items-center gap-6 sm:gap-12 lg:gap-20">
        {backHref ? (
          <Link
            href={backHref}
            className="flex items-center gap-2 text-muted-strong transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} strokeWidth={1.6} />
            <span className="text-sm sm:text-base">{backLabel}</span>
          </Link>
        ) : (
          <span className="text-sm sm:text-base font-medium text-ink">Hum</span>
        )}
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg text-accent">/</span>
          <h1 className="text-base sm:text-lg font-medium text-ink">{title}</h1>
        </div>
      </div>
      <button
        onClick={onOpenMenu}
        className="text-sm sm:text-base font-medium text-ink transition-colors hover:text-accent"
        aria-label="Open menu"
      >
        [&nbsp;MENU&nbsp;]
      </button>
    </header>
  );
}
