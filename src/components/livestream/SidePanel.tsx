"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ViewerListItem } from "./ViewerListItem";
import { MessageComposer } from "@/components/chats/MessageComposer";
import { BracketBadge } from "@/components/ui/BracketBadge";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/cn";
import type { Viewer, LiveChatMessage } from "@/lib/mock-data";

interface SidePanelProps {
  viewers: Viewer[];
  totalViewers: number;
  initialChat: LiveChatMessage[];
  incomingPool: LiveChatMessage[];
}

export function SidePanel({
  viewers,
  totalViewers,
  initialChat,
  incomingPool,
}: SidePanelProps) {
  const [tab, setTab] = useState<"chats" | "viewers">("chats");
  const [chatMessages, setChatMessages] = useState<LiveChatMessage[]>(initialChat);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Slowly trickle in new messages every 6-9 seconds
  useEffect(() => {
    if (incomingPool.length === 0) return;
    let idx = 0;
    const interval = setInterval(() => {
      const next = incomingPool[idx % incomingPool.length];
      idx++;
      const fresh: LiveChatMessage = {
        ...next,
        id: `${next.id}-${Date.now()}`,
        time: "just now",
      };
      setChatMessages((prev) => [...prev, fresh]);
    }, 6500 + Math.random() * 2500);
    return () => clearInterval(interval);
  }, [incomingPool]);

  // Auto-scroll chat to bottom when new message arrives
  useEffect(() => {
    if (tab === "chats" && chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, tab]);

  return (
    <div className="flex h-full min-h-0 flex-col bg-surface shadow-card">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-line/60 px-5 pt-5">
        <PanelTab active={tab === "chats"} onClick={() => setTab("chats")}>
          <span className="uppercase tracking-wider">Chats</span>
        </PanelTab>
        <PanelTab active={tab === "viewers"} onClick={() => setTab("viewers")}>
          <span className="uppercase tracking-wider">
            Viewers <BracketBadge>{totalViewers}</BracketBadge>
          </span>
        </PanelTab>
      </div>

      {/* List */}
      <div ref={chatScrollRef} className="flex-1 overflow-y-auto px-5 py-3">
        {tab === "viewers" && (
          <div>
            {viewers.map((v, i) => (
              <ViewerListItem
                key={v.id}
                viewer={v}
                showRoleOnRight={i === 0}
              />
            ))}
          </div>
        )}
        {tab === "chats" && (
          <div className="flex flex-col gap-3 py-1">
            <AnimatePresence initial={false}>
              {chatMessages.map((m) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <LiveChatRow message={m} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="px-5 pb-5">
        <MessageComposer placeholder="Say hi to the room..." />
      </div>
    </div>
  );
}

function LiveChatRow({ message }: { message: LiveChatMessage }) {
  return (
    <div className="flex items-start gap-2.5">
      <Avatar
        src={message.senderAvatarUrl}
        alt={message.senderName}
        size={28}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "text-[12px] font-medium",
              message.isHost ? "text-accent" : "text-ink"
            )}
          >
            {message.senderName}
          </span>
          {message.isHost && (
            <span className="bg-accent px-1 py-px text-[9px] font-medium uppercase tracking-wider text-white">
              Host
            </span>
          )}
          <span className="text-[10px] text-muted">{message.time}</span>
        </div>
        <p className="mt-0.5 break-words text-[13px] leading-snug text-muted-strong">
          {message.body}
        </p>
      </div>
    </div>
  );
}

function PanelTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative -mb-px border-b-2 px-1 py-2 text-[12px] transition-colors",
        active
          ? "border-accent text-ink"
          : "border-transparent text-muted-strong hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}
