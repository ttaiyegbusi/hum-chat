# Hum

A clean, minimal social platform for daily chats and livestreams — think Discord, but quieter. Built with Next.js 15, TypeScript, and Tailwind.

> **Hum** is a placeholder name. Search-and-replace once you've picked the real one.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/dashboard`.

## Tech stack

- **Next.js 15.5.18** (May 2026 security patches) App Router, TypeScript, static rendering
- **React 19.2.2** with the patched React Server Components implementation
- **Tailwind CSS** with custom design tokens (see `tailwind.config.ts`)
- **Framer Motion** for the drawer menu animation
- **Lucide React** for icons
- **IBM Plex Sans** loaded locally via `next/font/local` — no external font CDN

## A note on security

This project ships with the patched Next.js / React versions as of May 2026. The Next.js ecosystem has had several waves of CVE disclosures recently; if Vercel ever blocks a deploy with "Vulnerable version of Next.js detected", check the [Next.js blog](https://nextjs.org/blog) for the current patched version of your minor line and bump it:

```bash
npm install next@<latest-patched-version>
git commit -am "chore: bump next to patched version"
git push
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx           Root layout, fonts, metadata
│   ├── globals.css          Tailwind + base styles
│   ├── page.tsx             Redirects to /dashboard
│   ├── dashboard/page.tsx   Hub: greeting, live card, recent chats, friends, discover
│   ├── chats/page.tsx       Two-column chat (list + thread, mobile list/detail)
│   ├── livestream/page.tsx  Video player + side panel (Chats/Viewers tabs)
│   ├── profile/page.tsx     Placeholder
│   └── settings/page.tsx    Placeholder
├── components/
│   ├── layout/              TopBar, DrawerMenu, PageShell
│   ├── ui/                  Avatar, VerifiedSeal, DoubleCheck, BracketBadge, etc.
│   ├── chats/               ConversationList, ChatThread, MessageBubble, etc.
│   └── livestream/          VideoPlayer, StreamMeta, StreamTabs, SidePanel
└── lib/
    ├── cn.ts                clsx utility
    └── mock-data.ts         All mock conversations, messages, viewers, stream

public/
├── fonts/                   IBM Plex Sans TTFs (Light → Bold)
├── avatars/                 Local SVG avatar placeholders (replace with real photos)
└── stream-thumb.svg         Placeholder livestream thumbnail

scripts/
└── generate-avatars.js      Regenerates SVG avatars (run with `node`)
```

## Design tokens

All defined in `tailwind.config.ts`:

| Token              | Value     | Used for                                           |
| ------------------ | --------- | -------------------------------------------------- |
| `bg-canvas`        | `#F1F1EF` | Page background                                    |
| `bg-surface`       | `#FFFFFF` | Cards, panels                                      |
| `text-ink`         | `#0E0E0E` | Primary text                                       |
| `text-muted`       | `#9A9A9A` | Tertiary text                                      |
| `text-muted-strong`| `#6B6B6B` | Secondary text                                     |
| `bg-accent`        | `#EE5A2C` | Brand orange — /slash, Live badge, Leave button   |
| `bg-presence`      | `#22C55E` | Online indicator                                   |
| `border-line`      | `#EAEAEA` | Borders, dividers                                  |

## Where to wire real data

The mock data is in `src/lib/mock-data.ts` with clean TypeScript interfaces (`Conversation`, `Message`, `Viewer`). Swap the imports in each page for fetched data — the components don't care where the data comes from.

For the livestream player, `VideoPlayer.tsx` shows a blurred static image with a play button overlay. To wire up a real stream, replace the `<Image>` block with an `<video>` element pointed at an HLS source via `hls.js`, or integrate Mux / LiveKit / Agora.

## What's intentionally not done yet

- Real auth / accounts
- A backend (Pusher or Ably for chat, LiveKit / Mux for streaming)
- Live message updates (would need WebSockets / SSE)
- Profile and Settings pages — placeholder shells

These are all clean integration points, not redesigns. The UI is done.
