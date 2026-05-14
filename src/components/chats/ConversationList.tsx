"use client";

import { ConversationListItem } from "./ConversationListItem";
import type { Conversation } from "@/lib/mock-data";

interface ConversationListProps {
  conversations: Conversation[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export function ConversationList({
  conversations,
  activeId,
  onSelect,
}: ConversationListProps) {
  return (
    <div className="flex flex-col gap-1">
      {conversations.map((c) => (
        <ConversationListItem
          key={c.id}
          conversation={c}
          active={c.id === activeId}
          onClick={() => onSelect?.(c.id)}
        />
      ))}
    </div>
  );
}
