"use client";

import Image from "next/image";
import { Play, User, Circle } from "lucide-react";

interface VideoPlayerProps {
  thumbnailUrl?: string;
  viewerCount: string;
  duration: string;
}

export function VideoPlayer({ thumbnailUrl, viewerCount, duration }: VideoPlayerProps) {
  // Default to a tasteful warm interior scene if none provided
  const src = thumbnailUrl ?? "/stream-thumb.svg";

  return (
    <div className="relative overflow-hidden rounded-card bg-ink/5">
      {/* Aspect ratio container */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt="Livestream preview"
          fill
          className="object-cover"
          style={{ filter: "blur(2px)" }}
          unoptimized
          priority
        />
        {/* Soft vignette to lift overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Live badge top-left */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-white shadow-sm">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[12px] font-medium">Live</span>
        </div>

        {/* Play button center */}
        <button
          className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90"
          aria-label="Play"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-lg backdrop-blur-sm">
            <Play size={26} fill="#EE5A2C" stroke="#EE5A2C" className="ml-1" />
          </span>
        </button>

        {/* Bottom chips: viewer count + timer */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-md bg-black/40 px-2.5 py-1 text-white backdrop-blur-sm">
            <User size={13} strokeWidth={2} />
            <span className="text-[12px] font-medium tabular-nums">{viewerCount}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-black/40 px-2.5 py-1 text-white backdrop-blur-sm">
            <Circle size={9} fill="#EE5A2C" stroke="#EE5A2C" />
            <span className="text-[12px] font-medium tabular-nums">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
