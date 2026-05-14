import { Avatar } from "@/components/ui/Avatar";
import { VerifiedSeal } from "@/components/ui/VerifiedSeal";
import { RoleBadge } from "@/components/ui/RoleBadge";
import { DoubleCheck } from "@/components/ui/DoubleCheck";
import type { Message } from "@/lib/mock-data";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className="flex gap-3">
      <Avatar
        src={message.senderAvatarUrl}
        alt={message.senderName}
        online={message.senderOnline}
        size={36}
      />
      <div className="min-w-0 flex-1">
        {/* Header row: name, verified, role */}
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-muted-strong">{message.senderName}</span>
          {message.senderVerified && <VerifiedSeal size={13} />}
          {message.role && <RoleBadge role={message.role} className="ml-1" />}
        </div>
        {/* Body */}
        <p className="mt-1 text-[15px] leading-relaxed text-ink">{message.body}</p>
        {/* Footer: read receipt + time */}
        <div className="mt-1.5 flex items-center gap-1.5">
          {message.read && <DoubleCheck size={12} />}
          <span className="text-[11px] text-muted-strong">{message.time}</span>
        </div>
      </div>
    </div>
  );
}
