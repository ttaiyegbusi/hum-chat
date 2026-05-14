import { cn } from "@/lib/cn";

interface DoubleCheckProps {
  size?: number;
  className?: string;
}

/**
 * Orange double-check mark used as read-receipt indicator in chat messages
 * and conversation list previews.
 */
export function DoubleCheck({ size = 14, className }: DoubleCheckProps) {
  return (
    <svg
      width={size + 4}
      height={size}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block shrink-0", className)}
      aria-label="Read"
    >
      {/* First check */}
      <path
        d="M1 7 L4.5 10.5 L11 4"
        stroke="#EE5A2C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Second check, slightly offset */}
      <path
        d="M6.5 7 L10 10.5 L16.5 4"
        stroke="#EE5A2C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
