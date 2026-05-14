"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

interface StreamMetaProps {
  title: string;
  host: string;
  hostAvatar?: string;
  onLeave?: () => void;
  onShare?: () => void;
}

export function StreamMeta({ title, host, hostAvatar, onLeave, onShare }: StreamMetaProps) {
  return (
    <div className="flex flex-col gap-4 px-1 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <Avatar src={hostAvatar} alt={host} size={36} />
        <div>
          <h2 className="text-[17px] font-semibold text-ink">{title}</h2>
          <div className="text-[12px] uppercase tracking-wider text-muted-strong">
            DR. {host}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="primary" onClick={onLeave}>
          Leave
        </Button>
        <Button variant="secondary" onClick={onShare}>
          Share
        </Button>
      </div>
    </div>
  );
}
