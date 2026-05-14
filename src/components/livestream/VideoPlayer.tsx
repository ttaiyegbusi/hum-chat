"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, User, Circle } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  viewerCount: string;
  duration: string;
}

export function VideoPlayer({ videoUrl, posterUrl, viewerCount, duration }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  // Auto-play muted on mount for that "ambient live" feel
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
        setPlaying(true);
      } catch {
        // Autoplay was blocked; user will tap to start
      }
    };
    tryPlay();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      className="relative overflow-hidden bg-ink/5"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      {/* Aspect ratio container */}
      <div className="relative aspect-[16/10] w-full">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          loop
          muted={muted}
          playsInline
          className="h-full w-full object-cover"
          onClick={togglePlay}
        />

        {/* Soft gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Live badge top-left */}
        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 bg-accent px-2.5 py-1 text-white shadow-sm">
          <span
            className="block h-1.5 w-1.5 animate-pulse-dot bg-white"
            style={{ borderRadius: "9999px" }}
          />
          <span className="text-[12px] font-medium">Live</span>
        </div>

        {/* Center play/pause overlay — shows when paused or on hover */}
        {(!playing || showControls) && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center transition-opacity"
            aria-label={playing ? "Pause" : "Play"}
          >
            <span className="flex h-16 w-16 items-center justify-center bg-white/80 shadow-lg backdrop-blur-sm transition-transform hover:scale-105">
              {playing ? (
                <Pause size={26} fill="#EE5A2C" stroke="#EE5A2C" />
              ) : (
                <Play size={26} fill="#EE5A2C" stroke="#EE5A2C" className="ml-1" />
              )}
            </span>
          </button>
        )}

        {/* Bottom-left chips: viewer count + timer */}
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 text-white backdrop-blur-sm">
            <User size={13} strokeWidth={2} />
            <span className="text-[12px] font-medium tabular-nums">{viewerCount}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 text-white backdrop-blur-sm">
            <Circle size={9} fill="#EE5A2C" stroke="#EE5A2C" />
            <span className="text-[12px] font-medium tabular-nums">{duration}</span>
          </div>
        </div>

        {/* Bottom-right: mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 flex items-center justify-center bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeX size={14} strokeWidth={2} />
          ) : (
            <Volume2 size={14} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
}
