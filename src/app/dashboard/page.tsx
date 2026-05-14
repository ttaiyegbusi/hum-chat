"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, MessageSquare, Users } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Avatar } from "@/components/ui/Avatar";
import { BracketBadge } from "@/components/ui/BracketBadge";
import { VerifiedSeal } from "@/components/ui/VerifiedSeal";
import { conversations, liveViewers, currentStream } from "@/lib/mock-data";

export default function DashboardPage() {
  const recent = conversations.slice(0, 3);
  const onlineFriends = liveViewers.filter((v) => v.online).slice(0, 8);
  const totalUnread = conversations.reduce((sum, c) => sum + (c.unread ?? 0), 0);

  return (
    <PageShell title="Dashboard" backHref={null}>
      <div className="mx-auto max-w-[1600px]">
        {/* Greeting */}
        <section className="px-1 pb-8 pt-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-muted-strong">
                Welcome back
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
                Good morning, John
              </h1>
              <p className="mt-2 text-[14px] text-muted-strong">
                <BracketBadge spaced>{totalUnread}</BracketBadge> unread messages
                <span className="mx-2 text-muted">·</span>
                <span className="text-accent">1 stream live now</span>
              </p>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Livestream feature card */}
          <Link
            href="/livestream"
            className="group relative overflow-hidden rounded-card bg-surface p-5 shadow-card transition-all hover:shadow-lift sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-md bg-accent px-2 py-0.5 text-[11px] font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
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
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md bg-line/40">
              <Image
                src="/stream-thumb.svg"
                alt="Live stream"
                fill
                className="object-cover"
                style={{ filter: "blur(2px)" }}
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-md backdrop-blur-sm">
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
            className="group relative overflow-hidden rounded-card bg-surface p-5 shadow-card transition-all hover:shadow-lift sm:p-6"
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
            <div className="space-y-3">
              {recent.map((c) => (
                <div key={c.id} className="flex items-start gap-3 rounded-md py-2">
                  {c.avatarUrl ? (
                    <Avatar src={c.avatarUrl} alt={c.name} online={c.online} size={36} />
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-line/60 text-[12px] font-medium text-ink">
                      {c.initials}
                    </div>
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

        {/* Online friends */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between px-1">
            <h3 className="text-[13px] uppercase tracking-wider text-muted-strong">
              People online
            </h3>
            <span className="text-[12px] text-muted-strong">
              <BracketBadge>{onlineFriends.length}</BracketBadge>
            </span>
          </div>
          <div className="scrollbar-hidden flex gap-4 overflow-x-auto px-1 pb-2">
            {onlineFriends.map((f) => (
              <div key={f.id} className="flex w-20 shrink-0 flex-col items-center gap-2">
                <Avatar src={f.avatarUrl} alt={f.name} online size={52} />
                <span className="line-clamp-1 text-center text-[12px] text-ink">
                  {f.name.split(" ")[0]}
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
            {[
              { title: "Late night talks with Ada", host: "ADA OKONKWO", time: "Tonight · 9:00 PM" },
              { title: "Sunday cookout sessions", host: "CHEF MARCO", time: "Sun · 4:00 PM" },
              { title: "Indie music corner", host: "SOFIAT B.", time: "Mon · 7:30 PM" },
            ].map((item) => (
              <div
                key={item.title}
                className="cursor-pointer rounded-card bg-surface p-4 shadow-card transition-all hover:shadow-lift"
              >
                <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-md bg-line/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-canvas to-line/30" />
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
