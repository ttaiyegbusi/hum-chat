"use client";

import { PageShell } from "@/components/layout/PageShell";
import { VideoPlayer } from "@/components/livestream/VideoPlayer";
import { StreamMeta } from "@/components/livestream/StreamMeta";
import { StreamTabs } from "@/components/livestream/StreamTabs";
import { SidePanel } from "@/components/livestream/SidePanel";
import {
  currentStream,
  liveViewers,
  liveChatMessages,
  liveChatIncoming,
} from "@/lib/mock-data";

export default function LivestreamPage() {
  return (
    <PageShell title="Livestream">
      <div className="mx-auto grid max-w-[1600px] gap-4 lg:grid-cols-[1fr_360px] lg:gap-6 xl:grid-cols-[1fr_400px]">
        {/* Main column: video + meta + tabs */}
        <div className="bg-surface px-4 pt-4 shadow-card sm:px-6 sm:pt-6">
          <VideoPlayer
            videoUrl={currentStream.videoUrl}
            posterUrl={currentStream.posterUrl}
            viewerCount={currentStream.viewerCount}
            duration={currentStream.duration}
          />
          <StreamMeta
            title={currentStream.title}
            host={currentStream.host}
            hostAvatar={currentStream.hostAvatar}
          />
          <div className="pb-6">
            <StreamTabs description={currentStream.description} />
          </div>
        </div>

        {/* Side column: viewers + chat */}
        <div className="h-[600px] lg:h-[calc(100vh-112px)]">
          <SidePanel
            viewers={liveViewers}
            totalViewers={65}
            initialChat={liveChatMessages}
            incomingPool={liveChatIncoming}
          />
        </div>
      </div>
    </PageShell>
  );
}
