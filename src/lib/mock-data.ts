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
  lastMessage: string;
  lastMessageSender?: string;
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
  time: string; // display string e.g. "04:50PM"
  read?: boolean;
}

export interface Viewer {
  id: string;
  name: string;
  avatarUrl?: string;
  role: "Host" | "Viewer";
  online?: boolean;
}

// ─── Conversation list ─────────────────────────────────────────────────────

export const conversations: Conversation[] = [
  {
    id: "c1",
    category: "DIRECT MESSAGE",
    name: "Anthony Williams",
    avatarUrl: "/avatars/anthony-w.svg",
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
    lastMessage: "Anthony: count me in for friday",
    timestamp: "2 hrs ago",
    unread: 5,
    flagged: true,
  },
  {
    id: "c3",
    category: "DIRECT MESSAGE",
    name: "Aisha Bello",
    avatarUrl: "/avatars/aisha.svg",
    verified: true,
    online: true,
    lastMessage: "lmk when you're free this week",
    timestamp: "Yesterday",
    unread: 5,
    flagged: true,
  },
  {
    id: "c4",
    category: "SQUAD",
    name: "Open Couch",
    initials: "OC",
    lastMessage: "we still on for tonight?",
    timestamp: "Yesterday",
    unread: 5,
  },
  {
    id: "c5",
    category: "SQUAD",
    name: "Open Couch",
    initials: "OC",
    lastMessage: "Marco: just sent the link",
    timestamp: "Yesterday",
    unread: 5,
  },
  {
    id: "c6",
    category: "DIRECT MESSAGE",
    name: "Sofiat Bello",
    avatarUrl: "/avatars/sofiat.svg",
    verified: true,
    online: true,
    lastMessage: "ok finally watched that show",
    timestamp: "Yesterday",
    unread: 5,
    flagged: true,
  },
  {
    id: "c7",
    category: "SQUAD",
    name: "Open Couch",
    initials: "OC",
    lastMessage: "Sam: lol no way",
    timestamp: "Yesterday",
    unread: 5,
  },
];

// ─── Messages in the open thread (Lagos Crew group chat) ───────────────────

export const groupMessages: Message[] = [
  {
    id: "m1",
    conversationId: "c2",
    senderName: "Anthony Sodunke",
    senderAvatarUrl: "/avatars/anthony-s.svg",
    senderVerified: true,
    senderOnline: true,
    role: "ADMIN",
    body: "Morning team, who's actually free this weekend? trying to lock something in",
    time: "04:50PM",
    read: true,
  },
  {
    id: "m2",
    conversationId: "c2",
    senderName: "Aisha Bello",
    senderAvatarUrl: "/avatars/aisha.svg",
    senderVerified: true,
    senderOnline: true,
    role: "FRIEND",
    body: "I'm in. saturday works better for me, i've got stuff sunday morning. anywhere in mind?",
    time: "04:50PM",
    read: true,
  },
  {
    id: "m3",
    conversationId: "c2",
    senderName: "Adebayo Oladipo",
    senderAvatarUrl: "/avatars/adebayo.svg",
    senderVerified: true,
    senderOnline: true,
    role: "FRIEND",
    body: "what about that new spot in lekki we were talking about last week? Aisha you said the food was solid right",
    time: "04:50PM",
    read: true,
  },
  {
    id: "m4",
    conversationId: "c2",
    senderName: "Anthony Williams",
    senderAvatarUrl: "/avatars/anthony-w.svg",
    senderVerified: true,
    senderOnline: true,
    role: "FRIEND",
    body: "Morning John. nice to see you again, how have you been?",
    time: "04:50PM",
    read: true,
  },
];

export const currentGroup = {
  id: "c2",
  name: "Lagos Crew",
  members: "Anthony Williams, Sofiat Bello, +3...",
  date: "26 AUG, 2025",
};

// ─── Livestream viewers ────────────────────────────────────────────────────

export const liveViewers: Viewer[] = [
  {
    id: "v1",
    name: "Anthony Williams",
    avatarUrl: "/avatars/anthony-w.svg",
    role: "Host",
    online: true,
  },
  {
    id: "v2",
    name: "Natasha Ivanka",
    avatarUrl: "/avatars/natasha.svg",
    role: "Host",
    online: true,
  },
  {
    id: "v3",
    name: "Shola Williams",
    avatarUrl: "/avatars/shola.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v4",
    name: "Jessica Levi",
    avatarUrl: "/avatars/jessica.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v5",
    name: "Joshua Destiny",
    avatarUrl: "/avatars/joshua.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v6",
    name: "Amelia Carter",
    avatarUrl: "/avatars/amelia.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v7",
    name: "Samuel Johnson",
    avatarUrl: "/avatars/samuel.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v8",
    name: "Lily Harper",
    avatarUrl: "/avatars/lily.svg",
    role: "Viewer",
    online: true,
  },
  {
    id: "v9",
    name: "Ethan Parker",
    avatarUrl: "/avatars/ethan.svg",
    role: "Viewer",
    online: true,
  },
];

export const currentStream = {
  title: "Mindful Living for Busy Professionals",
  host: "LENA KIM",
  hostAvatar: "/avatars/lena.svg",
  viewerCount: "1K",
  duration: "01:03:59",
  description:
    "This live session is currently underway! Join Emily Torres, Chef Marco Liu, and Nutritionist Sarah Chen as they dive into building small daily habits that actually stick. The conversation covers smart shopping, nutritious and affordable meal ideas, and how to carve out 15 quiet minutes when your week feels packed. Drop your questions in the chat — we'll get to as many as we can.",
};
