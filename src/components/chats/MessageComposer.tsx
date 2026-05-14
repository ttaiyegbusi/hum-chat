"use client";

import { useState } from "react";
import { Mic, Plus, Send } from "lucide-react";
import { cn } from "@/lib/cn";

interface MessageComposerProps {
  placeholder?: string;
  className?: string;
  onSend?: (text: string) => void;
}

export function MessageComposer({
  placeholder = "Send a message...",
  className,
  onSend,
}: MessageComposerProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend?.(value.trim());
    setValue("");
  };

  return (
    <div
      className={cn(
        "rounded-card border border-line bg-canvas px-5 py-4",
        className
      )}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder={placeholder}
        className="w-full bg-transparent text-[15px] text-ink placeholder:text-muted-strong focus:outline-none"
      />
      <div className="mt-3 flex items-center justify-between">
        <button
          className="flex h-7 w-7 items-center justify-center rounded-full text-muted-strong transition-colors hover:text-ink"
          aria-label="Attach"
        >
          <Plus size={18} strokeWidth={1.6} />
        </button>
        <div className="flex items-center gap-3">
          <button
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-strong transition-colors hover:text-ink"
            aria-label="Voice message"
          >
            <Mic size={16} strokeWidth={1.6} />
          </button>
          <button
            onClick={handleSend}
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-strong transition-colors hover:text-accent"
            aria-label="Send"
          >
            <Send size={16} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </div>
  );
}
