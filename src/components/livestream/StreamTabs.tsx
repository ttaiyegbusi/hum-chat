"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface StreamTabsProps {
  description: string;
}

export function StreamTabs({ description }: StreamTabsProps) {
  const [tab, setTab] = useState<"description" | "files">("description");
  const [expanded, setExpanded] = useState(false);

  const previewLength = 220;
  const isLong = description.length > previewLength;
  const visible = expanded || !isLong ? description : description.slice(0, previewLength) + "…";

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-line/60">
        <TabButton active={tab === "description"} onClick={() => setTab("description")}>
          Description
        </TabButton>
        <TabButton active={tab === "files"} onClick={() => setTab("files")}>
          Files
        </TabButton>
      </div>

      {/* Content */}
      <div className="px-1 pt-5">
        {tab === "description" && (
          <>
            <h3 className="mb-3 text-[15px] font-medium text-ink">About this class</h3>
            <p className="text-[14px] leading-relaxed text-muted-strong">{visible}</p>
            {isLong && (
              <button
                onClick={() => setExpanded((e) => !e)}
                className="mt-3 text-[13px] font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {expanded ? "See less" : "See more"}
              </button>
            )}
          </>
        )}
        {tab === "files" && (
          <p className="text-[14px] text-muted-strong">No files shared in this stream yet.</p>
        )}
      </div>
    </div>
  );
}

function TabButton({
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
        "relative -mb-px border-b-2 px-1 py-2 text-[14px] transition-colors",
        active
          ? "border-accent text-ink"
          : "border-transparent text-muted-strong hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}
