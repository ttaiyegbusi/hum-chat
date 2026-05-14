"use client";

import { useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { ConversationList } from "@/components/chats/ConversationList";
import { ChatThread } from "@/components/chats/ChatThread";
import {
  conversations,
  messagesByConversation,
  currentDate,
} from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export default function ChatsPage() {
  const [activeId, setActiveId] = useState<string>("c3"); // Maya, matches the highlighted item
  const [mobileShowThread, setMobileShowThread] = useState(false);

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeId) ?? conversations[0],
    [activeId]
  );

  const activeMessages = useMemo(
    () => messagesByConversation[activeId] ?? [],
    [activeId]
  );

  const handleSelect = (id: string) => {
    setActiveId(id);
    setMobileShowThread(true);
  };

  return (
    <PageShell title="Chats">
      <div className="mx-auto flex h-[calc(100vh-112px)] max-w-[1600px] gap-4 lg:gap-6">
        {/* Left: conversation list */}
        <div
          className={cn(
            "min-h-0 flex-1 overflow-y-auto pr-1 md:flex-none md:w-[380px] lg:w-[420px]",
            mobileShowThread && "hidden md:block"
          )}
        >
          <ConversationList
            conversations={conversations}
            activeId={activeId}
            onSelect={handleSelect}
          />
        </div>

        {/* Right: chat thread */}
        <div
          className={cn(
            "min-h-0 flex-1",
            !mobileShowThread && "hidden md:block"
          )}
        >
          {/* Mobile back button */}
          <button
            onClick={() => setMobileShowThread(false)}
            className="mb-3 flex items-center gap-2 text-sm text-muted-strong md:hidden"
            aria-label="Back to conversations"
          >
            <ArrowLeft size={16} />
            Back to chats
          </button>
          <div className="h-[calc(100%-32px)] md:h-full">
            <ChatThread
              conversation={activeConversation}
              messages={activeMessages}
              date={currentDate}
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
