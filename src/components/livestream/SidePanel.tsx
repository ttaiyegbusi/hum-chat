"use client";

import { useState } from "react";
import { ViewerListItem } from "./ViewerListItem";
import { MessageComposer } from "@/components/chats/MessageComposer";
import { BracketBadge } from "@/components/ui/BracketBadge";
import { cn } from "@/lib/cn";
import type { Viewer } from "@/lib/mock-data";

interface SidePanelProps {
  viewers: Viewer[];
  totalViewers: number;
}

export function SidePanel({ viewers, totalViewers }: SidePanelProps) {
  const [tab, setTab] = useState<"chats" | "viewers">("viewers");

  return (
    <div className="flex h-full min-h-0 flex-col rounded-card bg-surface shadow-card">
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
      <div className="flex-1 overflow-y-auto px-5 py-3">
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
          <div className="flex h-full items-center justify-center px-4 text-center">
            <p className="text-[13px] text-muted-strong">
              Live chat appears here during the stream.
            </p>
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="px-5 pb-5">
        <MessageComposer />
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
