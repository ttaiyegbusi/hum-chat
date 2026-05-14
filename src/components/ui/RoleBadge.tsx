import { cn } from "@/lib/cn";

interface RoleBadgeProps {
  role: string;
  className?: string;
}

/**
 * Small uppercase pill used inline next to names in chat threads.
 * Originally DOCTOR/NURSE in the design; reframed for everyday social use.
 */
export function RoleBadge({ role, className }: RoleBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border border-line bg-canvas px-1.5 py-0.5",
        "text-[10px] font-medium uppercase tracking-wider text-muted-strong",
        className
      )}
    >
      {role}
    </span>
  );
}
