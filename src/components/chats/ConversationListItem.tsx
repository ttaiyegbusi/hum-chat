"use client";

import { Flag } from "lucide-react";
import { Avatar, InitialsTile } from "@/components/ui/Avatar";
import { VerifiedSeal } from "@/components/ui/VerifiedSeal";
import { DoubleCheck } from "@/components/ui/DoubleCheck";
import { BracketBadge } from "@/components/ui/BracketBadge";
import { cn } from "@/lib/cn";
import type { Conversation } from "@/lib/mock-data";

interface ConversationListItemProps {
  conversation: Conversation;
  active?: boolean;
  onClick?: () => void;
}

export function ConversationListItem({
  conversation,
  active,
  onClick,
}: ConversationListItemProps) {
  const { category, name, avatarUrl, initials, verified, online, lastMessage, timestamp, unread, flagged } =
    conversation;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-start gap-3 rounded-card px-3 py-3 text-left transition-all",
        active
          ? "bg-surface shadow-card"
          : "bg-transparent hover:bg-surface/60"
      )}
    >
      {/* Left: avatar or initials tile */}
      {avatarUrl !== undefined ? (
        <Avatar src={avatarUrl} alt={name} online={online} size={44} />
      ) : (
        <InitialsTile initials={initials ?? "??"} size={44} />
      )}

      {/* Middle: text content */}
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-wider text-muted-strong">
          {category}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="truncate text-[15px] font-medium text-ink">{name}</span>
          {verified && <VerifiedSeal size={13} />}
        </div>
        <div className="mt-1 flex items-start gap-1.5">
          <DoubleCheck size={12} className="mt-1 shrink-0 opacity-70" />
          <p className="truncate text-[13px] text-muted-strong">{lastMessage}</p>
        </div>
      </div>

      {/* Right: timestamp + unread + flag */}
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        {flagged && (
          <Flag size={13} strokeWidth={1.6} className="text-accent" />
        )}
        <span className="text-[11px] text-muted-strong">{timestamp}</span>
        {unread !== undefined && (
          <span className="text-[11px] text-muted-strong">
            <BracketBadge spaced>{unread}</BracketBadge>
          </span>
        )}
      </div>
    </button>
  );
}
