import { cn } from "@/lib/cn";

interface VerifiedSealProps {
  size?: number;
  className?: string;
}

/**
 * The orange scalloped seal with a white check, used inline next to names.
 * Recreated as SVG to match the source design exactly.
 */
export function VerifiedSeal({ size = 14, className }: VerifiedSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block shrink-0", className)}
      aria-label="Verified"
    >
      {/* Scalloped seal shape — 12 points */}
      <path
        d="M12 1.5 L13.8 2.9 L16 2.4 L17.1 4.3 L19.3 4.9 L19.4 7.1 L21.1 8.5 L20.4 10.6 L21.3 12.6 L19.9 14.3 L20 16.5 L17.9 17.2 L17 19.2 L14.8 18.9 L13.2 20.4 L11.2 19.4 L9.2 20.4 L7.6 18.9 L5.4 19.2 L4.5 17.2 L2.4 16.5 L2.5 14.3 L1.1 12.6 L2 10.6 L1.3 8.5 L3 7.1 L3.1 4.9 L5.3 4.3 L6.4 2.4 L8.6 2.9 L10.4 1.5 Z"
        fill="#EE5A2C"
      />
      {/* Check mark */}
      <path
        d="M7.5 12 L10.5 15 L16.5 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
