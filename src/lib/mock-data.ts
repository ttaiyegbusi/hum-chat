export type ConversationCategory =
  | "DIRECT MESSAGE"
  | "GROUP"
  | "SQUAD"
  | "COMMUNITY";

export interface Conversation {
  id: string;
  category: ConversationCategory;
  name: string;
  avatarUrl?: string;
  initials?: string; // for group tiles
  verified?: boolean;
  online?: boolean;
  members?: string; // for groups
  lastMessage: string;
  timestamp: string;
  unread?: number;
  flagged?: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  senderName: string;
  senderAvatarUrl?: string;
  senderVerified?: boolean;
  senderOnline?: boolean;
  role?: string;
  body: string;
  time: string;
  read?: boolean;
}

export interface Viewer {
  id: string;
  name: string;
  avatarUrl?: string;
  role: "Host" | "Viewer";
  online?: boolean;
}

export interface LiveChatMessage {
  id: string;
  senderName: string;
  senderAvatarUrl?: string;
  body: string;
  time: string;
  isHost?: boolean;
}

// ─── Conversation list ─────────────────────────────────────────────────────

export const conversations: Conversation[] = [
  {
    id: "c1",
    category: "DIRECT MESSAGE",
    name: "Kira Mensah",
    avatarUrl: "/avatars/kira.svg",
    verified: true,
    online: true,
    lastMessage: "yo did you see the new drop?",
    timestamp: "2 hrs ago",
  },
  {
    id: "c2",
    category: "GROUP",
    name: "Lagos Crew",
    initials: "LC",
    members: "Deji, Maya, Tobi, Kemi, +3...",
    lastMessage: "Deji: count me in for friday",
    timestamp: "2 hrs ago",
    unread: 5,
    flagged: true,
  },
  {
    id: "c3",
    category: "DIRECT MESSAGE",
    name: "Maya Okafor",
    avatarUrl: "/avatars/maya.svg",
    verified: true,
    online: true,
    lastMessage: "lmk when you're free this week",
    timestamp: "Yesterday",
    unread: 3,
    flagged: true,
  },
  {
    id: "c4",
    category: "SQUAD",
    name: "Open Couch",
    initials: "OC",
    members: "Rio, Noah, Yuki, Marco, Ana",
    lastMessage: "Rio: we still on for tonight?",
    timestamp: "Yesterday",
    unread: 2,
  },
  {
    id: "c5",
    category: "DIRECT MESSAGE",
    name: "Deji Adebayo",
    avatarUrl: "/avatars/deji.svg",
    verified: true,
    online: false,
    lastMessage: "bro send me the link please",
    timestamp: "Yesterday",
    unread: 1,
  },
  {
    id: "c6",
    category: "DIRECT MESSAGE",
    name: "Sofiat B.",
    avatarUrl: "/avatars/sofiat.svg",
    verified: true,
    online: true,
    lastMessage: "ok finally watched that show",
    timestamp: "Yesterday",
    unread: 4,
    flagged: true,
  },
  {
    id: "c7",
    category: "GROUP",
    name: "Sunday Roast",
    initials: "SR",
    members: "Marco, Ana, Felix, Ines",
    lastMessage: "Marco: bringing the wine",
    timestamp: "Yesterday",
    unread: 2,
  },
  {
    id: "c8",
    category: "DIRECT MESSAGE",
    name: "Noah Reyes",
    avatarUrl: "/avatars/noah.svg",
    verified: false,
    online: true,
    lastMessage: "did the thing work? lmk",
    timestamp: "2 days ago",
  },
];

// ─── Per-conversation message threads ──────────────────────────────────────

export const messagesByConversation: Record<string, Message[]> = {
  // Kira — sneaker drop chat
  c1: [
    {
      id: "c1-m1",
      conversationId: "c1",
      senderName: "Kira Mensah",
      senderAvatarUrl: "/avatars/kira.svg",
      senderVerified: true,
      senderOnline: true,
      body: "yo did you see the new drop?",
      time: "01:12PM",
      read: true,
    },
    {
      id: "c1-m2",
      conversationId: "c1",
      senderName: "Kira Mensah",
      senderAvatarUrl: "/avatars/kira.svg",
      senderVerified: true,
      senderOnline: true,
      body: "the cream colorway is actually insane. i think i'm gonna try to cop tomorrow morning when it goes live",
      time: "01:12PM",
      read: true,
    },
    {
      id: "c1-m3",
      conversationId: "c1",
      senderName: "You",
      senderAvatarUrl: "/avatars/leo.svg",
      role: "ME",
      body: "wait what time does it release",
      time: "01:18PM",
      read: true,
    },
    {
      id: "c1-m4",
      conversationId: "c1",
      senderName: "Kira Mensah",
      senderAvatarUrl: "/avatars/kira.svg",
      senderVerified: true,
      senderOnline: true,
      body: "9am sharp. set an alarm fr, last time the size 9s sold out in like 3 minutes",
      time: "01:19PM",
      read: true,
    },
  ],

  // Lagos Crew — weekend plans
  c2: [
    {
      id: "c2-m1",
      conversationId: "c2",
      senderName: "Deji Adebayo",
      senderAvatarUrl: "/avatars/deji.svg",
      senderVerified: true,
      senderOnline: true,
      role: "ADMIN",
      body: "Morning team, who's actually free this weekend? trying to lock something in",
      time: "04:50PM",
      read: true,
    },
    {
      id: "c2-m2",
      conversationId: "c2",
      senderName: "Maya Okafor",
      senderAvatarUrl: "/avatars/maya.svg",
      senderVerified: true,
      senderOnline: true,
      role: "FRIEND",
      body: "I'm in. saturday works better for me, i've got stuff sunday morning. anywhere in mind?",
      time: "04:50PM",
      read: true,
    },
    {
      id: "c2-m3",
      conversationId: "c2",
      senderName: "Tobi Ade",
      senderAvatarUrl: "/avatars/tobi.svg",
      senderVerified: true,
      senderOnline: true,
      role: "FRIEND",
      body: "what about that new spot in lekki we were talking about last week? Maya you said the food was solid right",
      time: "04:51PM",
      read: true,
    },
    {
      id: "c2-m4",
      conversationId: "c2",
      senderName: "Kemi Williams",
      senderAvatarUrl: "/avatars/kemi.svg",
      senderVerified: true,
      senderOnline: true,
      role: "FRIEND",
      body: "yes please. and we should book ahead this time, last time we waited like 40 mins for a table",
      time: "04:52PM",
      read: true,
    },
    {
      id: "c2-m5",
      conversationId: "c2",
      senderName: "Deji Adebayo",
      senderAvatarUrl: "/avatars/deji.svg",
      senderVerified: true,
      senderOnline: true,
      role: "ADMIN",
      body: "ok cool. saturday 8pm, i'll book a table for 6. drop your +1 if you're bringing someone",
      time: "04:55PM",
      read: true,
    },
  ],

  // Maya — catching up, this one is selected by default
  c3: [
    {
      id: "c3-m1",
      conversationId: "c3",
      senderName: "Maya Okafor",
      senderAvatarUrl: "/avatars/maya.svg",
      senderVerified: true,
      senderOnline: true,
      body: "heyyyy how have you been? feels like forever",
      time: "02:30PM",
      read: true,
    },
    {
      id: "c3-m2",
      conversationId: "c3",
      senderName: "Maya Okafor",
      senderAvatarUrl: "/avatars/maya.svg",
      senderVerified: true,
      senderOnline: true,
      body: "i feel like the last time we properly hung out was that thing at amara's place lol",
      time: "02:31PM",
      read: true,
    },
    {
      id: "c3-m3",
      conversationId: "c3",
      senderName: "You",
      senderAvatarUrl: "/avatars/leo.svg",
      role: "ME",
      body: "i know i'm sorry, work has been wild. but yes let's actually do something soon",
      time: "02:45PM",
      read: true,
    },
    {
      id: "c3-m4",
      conversationId: "c3",
      senderName: "Maya Okafor",
      senderAvatarUrl: "/avatars/maya.svg",
      senderVerified: true,
      senderOnline: true,
      body: "yes please. coffee? this week if you can",
      time: "02:46PM",
      read: true,
    },
    {
      id: "c3-m5",
      conversationId: "c3",
      senderName: "Maya Okafor",
      senderAvatarUrl: "/avatars/maya.svg",
      senderVerified: true,
      senderOnline: true,
      body: "lmk when you're free this week",
      time: "02:46PM",
      read: true,
    },
  ],

  // Open Couch — tonight's plans
  c4: [
    {
      id: "c4-m1",
      conversationId: "c4",
      senderName: "Rio Tanaka",
      senderAvatarUrl: "/avatars/rio.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "we still on for tonight?",
      time: "11:02AM",
      read: true,
    },
    {
      id: "c4-m2",
      conversationId: "c4",
      senderName: "Noah Reyes",
      senderAvatarUrl: "/avatars/noah.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "yeah! same place same time. 7:30 right?",
      time: "11:08AM",
      read: true,
    },
    {
      id: "c4-m3",
      conversationId: "c4",
      senderName: "Yuki Sato",
      senderAvatarUrl: "/avatars/yuki.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "i'm running a bit late, like 7:45ish. order without me",
      time: "11:15AM",
      read: true,
    },
    {
      id: "c4-m4",
      conversationId: "c4",
      senderName: "Ana Vega",
      senderAvatarUrl: "/avatars/ana.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "all good. marco you in?",
      time: "11:20AM",
      read: true,
    },
  ],

  // Deji DM — quick link request
  c5: [
    {
      id: "c5-m1",
      conversationId: "c5",
      senderName: "Deji Adebayo",
      senderAvatarUrl: "/avatars/deji.svg",
      senderVerified: true,
      body: "yo",
      time: "Yesterday",
      read: true,
    },
    {
      id: "c5-m2",
      conversationId: "c5",
      senderName: "Deji Adebayo",
      senderAvatarUrl: "/avatars/deji.svg",
      senderVerified: true,
      body: "bro send me the link please",
      time: "Yesterday",
      read: true,
    },
    {
      id: "c5-m3",
      conversationId: "c5",
      senderName: "Deji Adebayo",
      senderAvatarUrl: "/avatars/deji.svg",
      senderVerified: true,
      body: "the one you sent in the group earlier — about the playlist",
      time: "Yesterday",
      read: true,
    },
  ],

  // Sofiat — TV show debrief
  c6: [
    {
      id: "c6-m1",
      conversationId: "c6",
      senderName: "Sofiat B.",
      senderAvatarUrl: "/avatars/sofiat.svg",
      senderVerified: true,
      senderOnline: true,
      body: "ok finally watched that show",
      time: "08:14PM",
      read: true,
    },
    {
      id: "c6-m2",
      conversationId: "c6",
      senderName: "Sofiat B.",
      senderAvatarUrl: "/avatars/sofiat.svg",
      senderVerified: true,
      senderOnline: true,
      body: "the one you've been telling me about for like 3 months",
      time: "08:14PM",
      read: true,
    },
    {
      id: "c6-m3",
      conversationId: "c6",
      senderName: "Sofiat B.",
      senderAvatarUrl: "/avatars/sofiat.svg",
      senderVerified: true,
      senderOnline: true,
      body: "you were SO right. the ending wrecked me, i had to sit in silence for like 20 min after",
      time: "08:15PM",
      read: true,
    },
    {
      id: "c6-m4",
      conversationId: "c6",
      senderName: "You",
      senderAvatarUrl: "/avatars/leo.svg",
      role: "ME",
      body: "FINALLY. i told you. now we can actually talk about it without me spoiling everything",
      time: "08:42PM",
      read: true,
    },
  ],

  // Sunday Roast
  c7: [
    {
      id: "c7-m1",
      conversationId: "c7",
      senderName: "Marco Silva",
      senderAvatarUrl: "/avatars/marco.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "what's everyone bringing on sunday?",
      time: "09:30AM",
      read: true,
    },
    {
      id: "c7-m2",
      conversationId: "c7",
      senderName: "Ines Rocha",
      senderAvatarUrl: "/avatars/ines.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "i'll do the salad and a dessert",
      time: "09:35AM",
      read: true,
    },
    {
      id: "c7-m3",
      conversationId: "c7",
      senderName: "Felix Holm",
      senderAvatarUrl: "/avatars/felix.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "bread and cheese from me",
      time: "09:40AM",
      read: true,
    },
    {
      id: "c7-m4",
      conversationId: "c7",
      senderName: "Marco Silva",
      senderAvatarUrl: "/avatars/marco.svg",
      senderOnline: true,
      role: "FRIEND",
      body: "bringing the wine",
      time: "09:45AM",
      read: true,
    },
  ],

  // Noah — short check-in
  c8: [
    {
      id: "c8-m1",
      conversationId: "c8",
      senderName: "Noah Reyes",
      senderAvatarUrl: "/avatars/noah.svg",
      senderOnline: true,
      body: "did the thing work? lmk",
      time: "2 days ago",
      read: true,
    },
  ],
};

export const currentDate = "26 AUG, 2025";

// ─── Livestream viewers (right side panel) ─────────────────────────────────

export const liveViewers: Viewer[] = [
  { id: "v1", name: "Kira Mensah", avatarUrl: "/avatars/kira.svg", role: "Host", online: true },
  { id: "v2", name: "Lena Kim", avatarUrl: "/avatars/lena-host.svg", role: "Host", online: true },
  { id: "v3", name: "Deji Adebayo", avatarUrl: "/avatars/deji.svg", role: "Viewer", online: true },
  { id: "v4", name: "Maya Okafor", avatarUrl: "/avatars/maya.svg", role: "Viewer", online: true },
  { id: "v5", name: "Rio Tanaka", avatarUrl: "/avatars/rio.svg", role: "Viewer", online: true },
  { id: "v6", name: "Noah Reyes", avatarUrl: "/avatars/noah.svg", role: "Viewer", online: true },
  { id: "v7", name: "Yuki Sato", avatarUrl: "/avatars/yuki.svg", role: "Viewer", online: true },
  { id: "v8", name: "Kemi Williams", avatarUrl: "/avatars/kemi.svg", role: "Viewer", online: true },
  { id: "v9", name: "Tobi Ade", avatarUrl: "/avatars/tobi.svg", role: "Viewer", online: true },
  { id: "v10", name: "Marco Silva", avatarUrl: "/avatars/marco.svg", role: "Viewer", online: true },
  { id: "v11", name: "Ana Vega", avatarUrl: "/avatars/ana.svg", role: "Viewer", online: true },
  { id: "v12", name: "Zara Khalid", avatarUrl: "/avatars/zara.svg", role: "Viewer", online: true },
  { id: "v13", name: "Amara Okeke", avatarUrl: "/avatars/amara.svg", role: "Viewer", online: true },
];

// ─── Livestream chat (the CHATS tab on the right side panel) ───────────────

export const liveChatMessages: LiveChatMessage[] = [
  { id: "lc1", senderName: "Felix Holm", senderAvatarUrl: "/avatars/felix.svg", body: "tuning in from copenhagen!", time: "just now" },
  { id: "lc2", senderName: "Priya Rao", senderAvatarUrl: "/avatars/priya.svg", body: "this is exactly what i needed today", time: "just now" },
  { id: "lc3", senderName: "Diego Cruz", senderAvatarUrl: "/avatars/diego.svg", body: "Dr. Kim where did you get those candles in the background lol", time: "1m ago" },
  { id: "lc4", senderName: "Sana Khan", senderAvatarUrl: "/avatars/sana.svg", body: "the part about the 15-minute reset hit hard", time: "1m ago" },
  { id: "lc5", senderName: "Lena Kim", senderAvatarUrl: "/avatars/lena-host.svg", body: "thank you all for being here! we'll do Q&A in 10 mins", time: "2m ago", isHost: true },
  { id: "lc6", senderName: "Kai Lin", senderAvatarUrl: "/avatars/kai.svg", body: "anyone else struggling with morning routine?", time: "2m ago" },
  { id: "lc7", senderName: "Thalia Owens", senderAvatarUrl: "/avatars/thalia.svg", body: "same. mornings are HARD", time: "3m ago" },
  { id: "lc8", senderName: "Ravi Patel", senderAvatarUrl: "/avatars/ravi.svg", body: "the 2-minute rule changed my life honestly", time: "3m ago" },
  { id: "lc9", senderName: "June Park", senderAvatarUrl: "/avatars/june.svg", body: "first time joining, this is so nice", time: "4m ago" },
  { id: "lc10", senderName: "Ines Rocha", senderAvatarUrl: "/avatars/ines.svg", body: "💛", time: "4m ago" },
  { id: "lc11", senderName: "Ethan Brooks", senderAvatarUrl: "/avatars/ethan.svg", body: "where can we get the worksheet?", time: "5m ago" },
  { id: "lc12", senderName: "Amara Okeke", senderAvatarUrl: "/avatars/amara.svg", body: "the link is in the description btw", time: "5m ago" },
];

// Pool of new messages that trickle in periodically to simulate live activity
export const liveChatIncoming: LiveChatMessage[] = [
  { id: "lci1", senderName: "Leo Carter", senderAvatarUrl: "/avatars/leo.svg", body: "great points so far", time: "just now" },
  { id: "lci2", senderName: "Zara Khalid", senderAvatarUrl: "/avatars/zara.svg", body: "could you talk more about boundaries with work?", time: "just now" },
  { id: "lci3", senderName: "Marco Silva", senderAvatarUrl: "/avatars/marco.svg", body: "joining late, what did i miss?", time: "just now" },
  { id: "lci4", senderName: "Yuki Sato", senderAvatarUrl: "/avatars/yuki.svg", body: "taking notes furiously rn", time: "just now" },
  { id: "lci5", senderName: "Noah Reyes", senderAvatarUrl: "/avatars/noah.svg", body: "this format is great, more of these pls", time: "just now" },
];

// ─── Current stream ────────────────────────────────────────────────────────

export const currentStream = {
  title: "Mindful Living for Busy Professionals",
  host: "LENA KIM",
  hostAvatar: "/avatars/lena-host.svg",
  viewerCount: "1K",
  duration: "01:03:59",
  description:
    "Tonight's session is on building small daily habits that actually stick. We'll cover the 15-minute reset, smart shopping for nutritious meals on a budget, and how to carve out quiet time when your week feels packed. Drop your questions in the chat — we'll get to as many as we can in the Q&A.",
  // Royalty-free atmospheric clip
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  posterUrl: "/stream-thumb.svg",
};

// ─── People online (Dashboard horizontal row) ──────────────────────────────

export const peopleOnline = [
  { id: "p1", name: "Kira", avatarUrl: "/avatars/kira.svg" },
  { id: "p2", name: "Maya", avatarUrl: "/avatars/maya.svg" },
  { id: "p3", name: "Rio", avatarUrl: "/avatars/rio.svg" },
  { id: "p4", name: "Noah", avatarUrl: "/avatars/noah.svg" },
  { id: "p5", name: "Yuki", avatarUrl: "/avatars/yuki.svg" },
  { id: "p6", name: "Kemi", avatarUrl: "/avatars/kemi.svg" },
  { id: "p7", name: "Tobi", avatarUrl: "/avatars/tobi.svg" },
  { id: "p8", name: "Marco", avatarUrl: "/avatars/marco.svg" },
  { id: "p9", name: "Ana", avatarUrl: "/avatars/ana.svg" },
  { id: "p10", name: "Zara", avatarUrl: "/avatars/zara.svg" },
  { id: "p11", name: "Amara", avatarUrl: "/avatars/amara.svg" },
  { id: "p12", name: "Felix", avatarUrl: "/avatars/felix.svg" },
  { id: "p13", name: "Priya", avatarUrl: "/avatars/priya.svg" },
  { id: "p14", name: "Diego", avatarUrl: "/avatars/diego.svg" },
  { id: "p15", name: "Ines", avatarUrl: "/avatars/ines.svg" },
  { id: "p16", name: "Kai", avatarUrl: "/avatars/kai.svg" },
];

// ─── Discover · Upcoming streams (Dashboard) ───────────────────────────────

export const upcomingStreams = [
  {
    id: "us1",
    title: "Late night talks with Ada",
    host: "ADA OKONKWO",
    time: "Tonight · 9:00 PM",
    image:
      "https://images.unsplash.com/photo-1519214605650-76a613ee3245?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "us2",
    title: "Sunday cookout sessions",
    host: "CHEF MARCO",
    time: "Sun · 4:00 PM",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "us3",
    title: "Indie music corner",
    host: "SOFIAT B.",
    time: "Mon · 7:30 PM",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&auto=format&fit=crop",
  },
];
