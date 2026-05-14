import { Avatar } from "@/components/ui/Avatar";
import type { Viewer } from "@/lib/mock-data";

interface ViewerListItemProps {
  viewer: Viewer;
  /** If true, role appears as a right-aligned tag instead of as a subtitle. */
  showRoleOnRight?: boolean;
}

export function ViewerListItem({ viewer, showRoleOnRight }: ViewerListItemProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <Avatar
        src={viewer.avatarUrl}
        alt={viewer.name}
        online={viewer.online}
        size={36}
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium text-ink">{viewer.name}</div>
        {!showRoleOnRight && (
          <div className="text-[12px] text-muted-strong">{viewer.role}</div>
        )}
      </div>
      {showRoleOnRight && (
        <span className="shrink-0 text-[12px] text-muted-strong">{viewer.role}</span>
      )}
    </div>
  );
}
