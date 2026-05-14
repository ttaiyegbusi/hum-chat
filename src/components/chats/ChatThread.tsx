"use client";

import { MoreVertical, Users } from "lucide-react";
import { DateSeparator } from "./DateSeparator";
import { MessageBubble } from "./MessageBubble";
import { MessageComposer } from "./MessageComposer";
import type { Message } from "@/lib/mock-data";

interface ChatThreadProps {
  groupName: string;
  groupMembers: string;
  date: string;
  messages: Message[];
}

export function ChatThread({ groupName, groupMembers, date, messages }: ChatThreadProps) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-card bg-surface shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-line/60 px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2E5F5]">
            <Users size={18} strokeWidth={1.6} className="text-[#6B7AA1]" />
          </div>
          <div>
            <div className="text-[15px] text-ink">
              <span className="text-muted-strong">Group: </span>
              {groupName}
            </div>
            <div className="text-[13px] text-muted">{groupMembers}</div>
          </div>
        </div>
        <button
          className="text-muted-strong transition-colors hover:text-ink"
          aria-label="More options"
        >
          <MoreVertical size={20} strokeWidth={1.6} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
        <DateSeparator date={date} />
        <div className="flex flex-col gap-6">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
        <MessageComposer />
      </div>
    </div>
  );
}
