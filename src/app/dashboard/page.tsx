"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, MessageSquare, Users } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Avatar, InitialsTile } from "@/components/ui/Avatar";
import { BracketBadge } from "@/components/ui/BracketBadge";
import { VerifiedSeal } from "@/components/ui/VerifiedSeal";
import {
  conversations,
  peopleOnline,
  upcomingStreams,
  currentStream,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const recent = conversations.slice(0, 5);
  const totalUnread = conversations.reduce((sum, c) => sum + (c.unread ?? 0), 0);

  return (
    <PageShell title="Dashboard" backHref={null}>
      <div className="mx-auto max-w-[1600px]">
        {/* Greeting */}
        <section className="px-1 pb-8 pt-2">
          <p className="text-[12px] uppercase tracking-[0.2em] text-muted-strong">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
            Good morning, Leo
          </h1>
          <p className="mt-2 text-[14px] text-muted-strong">
            <BracketBadge spaced>{totalUnread}</BracketBadge> unread messages
            <span className="mx-2 text-muted">·</span>
            <span className="text-accent">1 stream live now</span>
          </p>
        </section>

        {/* Feature cards */}
        <section className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Livestream feature card */}
          <Link
            href="/livestream"
            className="group relative overflow-hidden bg-surface p-5 shadow-card transition-shadow hover:shadow-lift sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-accent px-2 py-0.5 text-[11px] font-medium text-white">
                  <span
                    className="h-1.5 w-1.5 bg-white"
                    style={{ borderRadius: "9999px" }}
                  />
                  Live
                </span>
                <span className="text-[12px] uppercase tracking-wider text-muted-strong">
                  Now streaming
                </span>
              </div>
              <ArrowUpRight
                size={20}
                strokeWidth={1.6}
                className="text-muted-strong transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </div>
            <div className="relative mb-4 aspect-[16/9] overflow-hidden bg-line/40">
              <Image
                src="/stream-thumb.svg"
                alt="Live stream"
                fill
                className="object-cover"
                style={{ filter: "blur(2px)" }}
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center bg-white/80 shadow-md backdrop-blur-sm">
                  <Play size={20} fill="#EE5A2C" stroke="#EE5A2C" className="ml-0.5" />
                </span>
              </div>
            </div>
            <h2 className="text-[18px] font-semibold text-ink">{currentStream.title}</h2>
            <p className="mt-1 text-[12px] uppercase tracking-wider text-muted-strong">
              DR. {currentStream.host}
            </p>
            <div className="mt-3 flex items-center gap-4 text-[13px] text-muted-strong">
              <span className="flex items-center gap-1.5">
                <Users size={14} strokeWidth={1.6} />
                {currentStream.viewerCount} watching
              </span>
              <span>{currentStream.duration}</span>
            </div>
          </Link>

          {/* Chats feature card */}
          <Link
            href="/chats"
            className="group relative overflow-hidden bg-surface p-5 shadow-card transition-shadow hover:shadow-lift sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} strokeWidth={1.6} className="text-accent" />
                <span className="text-[12px] uppercase tracking-wider text-muted-strong">
                  Recent chats
                </span>
              </div>
              <ArrowUpRight
                size={20}
                strokeWidth={1.6}
                className="text-muted-strong transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </div>
            <div className="space-y-2.5">
              {recent.map((c) => (
                <div key={c.id} className="flex items-start gap-3 py-1.5">
                  {c.avatarUrl ? (
                    <Avatar src={c.avatarUrl} alt={c.name} online={c.online} size={36} />
                  ) : (
                    <InitialsTile initials={c.initials ?? "??"} size={36} />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="truncate text-[14px] font-medium text-ink">
                        {c.name}
                      </span>
                      {c.verified && <VerifiedSeal size={12} />}
                    </div>
                    <p className="truncate text-[12px] text-muted-strong">
                      {c.lastMessage}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] text-muted-strong">
                    {c.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </Link>
        </section>

        {/* People online */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between px-1">
            <h3 className="text-[13px] uppercase tracking-wider text-muted-strong">
              People online
            </h3>
            <span className="text-[12px] text-muted-strong">
              <BracketBadge>{peopleOnline.length}</BracketBadge>
            </span>
          </div>
          <div className="scrollbar-hidden flex gap-4 overflow-x-auto px-1 pb-2">
            {peopleOnline.map((f) => (
              <div key={f.id} className="flex w-16 shrink-0 flex-col items-center gap-2">
                <Avatar src={f.avatarUrl} alt={f.name} online size={48} />
                <span className="line-clamp-1 text-center text-[11px] text-ink">
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Discover row */}
        <section className="mt-8 pb-8">
          <div className="mb-4 flex items-center justify-between px-1">
            <h3 className="text-[13px] uppercase tracking-wider text-muted-strong">
              Discover · Upcoming streams
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingStreams.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden bg-surface p-4 shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="relative mb-3 aspect-[16/9] overflow-hidden bg-line/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <h4 className="text-[15px] font-medium text-ink">{item.title}</h4>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-strong">
                  {item.host}
                </p>
                <p className="mt-2 text-[12px] text-muted-strong">{item.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
