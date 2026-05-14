import { cn } from "@/lib/cn";

interface BracketBadgeProps {
  children: React.ReactNode;
  className?: string;
  spaced?: boolean;
}

/**
 * Renders text wrapped in square brackets — the design's signature pattern.
 * Used for unread counts [ 5 ], the [ MENU ] button, viewer counts [65], etc.
 *
 * The `spaced` variant adds spaces inside the brackets ([ 5 ] vs [5]) to match
 * the design where unread counts use spacing but viewer counts don't.
 */
export function BracketBadge({ children, className, spaced = false }: BracketBadgeProps) {
  return (
    <span className={cn("tabular-nums", className)}>
      [{spaced ? "\u00A0" : ""}
      {children}
      {spaced ? "\u00A0" : ""}]
    </span>
  );
}
