"use client";

import { MoreVertical, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DateSeparator } from "./DateSeparator";
import { MessageBubble } from "./MessageBubble";
import { MessageComposer } from "./MessageComposer";
import { Avatar, InitialsTile } from "@/components/ui/Avatar";
import { VerifiedSeal } from "@/components/ui/VerifiedSeal";
import type { Conversation, Message } from "@/lib/mock-data";

interface ChatThreadProps {
  conversation: Conversation;
  messages: Message[];
  date: string;
}

export function ChatThread({ conversation, messages, date }: ChatThreadProps) {
  const isGroup = conversation.category === "GROUP" || conversation.category === "SQUAD";

  return (
    <div className="flex h-full min-h-0 flex-col bg-surface shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-line/60 px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-3">
          {isGroup ? (
            <div className="flex h-10 w-10 items-center justify-center bg-[#E2E5F5]">
              <Users size={18} strokeWidth={1.6} className="text-[#6B7AA1]" />
            </div>
          ) : (
            <Avatar
              src={conversation.avatarUrl}
              alt={conversation.name}
              online={conversation.online}
              size={40}
            />
          )}
          <div>
            <div className="flex items-center gap-1.5 text-[15px] text-ink">
              {isGroup ? (
                <>
                  <span className="text-muted-strong">
                    {conversation.category === "SQUAD" ? "Squad" : "Group"}:{" "}
                  </span>
                  {conversation.name}
                </>
              ) : (
                <>
                  {conversation.name}
                  {conversation.verified && <VerifiedSeal size={13} />}
                </>
              )}
            </div>
            <div className="text-[13px] text-muted">
              {isGroup
                ? conversation.members ?? ""
                : conversation.online
                ? "Active now"
                : "Active recently"}
            </div>
          </div>
        </div>
        <button
          className="text-muted-strong transition-colors hover:text-ink"
          aria-label="More options"
        >
          <MoreVertical size={20} strokeWidth={1.6} />
        </button>
      </div>

      {/* Messages — animated swap on conversation change */}
      <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={conversation.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <DateSeparator date={date} />
            <div className="flex flex-col gap-6">
              {messages.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: Math.min(i * 0.03, 0.18),
                    ease: "easeOut",
                  }}
                >
                  <MessageBubble message={m} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Composer */}
      <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
        <MessageComposer />
      </div>
    </div>
  );
}
