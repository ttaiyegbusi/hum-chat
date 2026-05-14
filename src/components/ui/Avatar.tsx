import Image from "next/image";
import { cn } from "@/lib/cn";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  online?: boolean;
  className?: string;
}

export function Avatar({ src, alt, size = 40, online = false, className }: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <div
        className="relative overflow-hidden rounded-full bg-line"
        style={{ width: size, height: size }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={size * 2}
            height={size * 2}
            className="h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-line text-ink">
            <span style={{ fontSize: size * 0.35 }} className="font-medium">
              {initials}
            </span>
          </div>
        )}
      </div>
      {online && (
        <span
          className="absolute bottom-0 right-0 block rounded-full bg-presence ring-2 ring-surface"
          style={{
            width: size * 0.28,
            height: size * 0.28,
          }}
          aria-label="Online"
        />
      )}
    </div>
  );
}

interface InitialsTileProps {
  initials: string;
  size?: number;
  className?: string;
}

/**
 * Square tile with initials, used for group conversations (LD, OC in the design).
 */
export function InitialsTile({ initials, size = 40, className }: InitialsTileProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md bg-line/60 text-ink",
        className
      )}
      style={{ width: size, height: size, fontSize: size * 0.3 }}
    >
      <span className="font-medium tracking-wide">{initials}</span>
    </div>
  );
}
