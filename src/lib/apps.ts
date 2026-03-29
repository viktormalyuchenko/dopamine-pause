// src/lib/apps.ts

export type SocialApp = {
  id: string;
  name: string;
  color: string;
  urlScheme: string;
  fallbackUrl: string;
};

export const SUPPORTED_APPS: Record<string, SocialApp> = {
  instagram: {
    id: "instagram",
    name: "Instagram",
    color: "#E1306C",
    urlScheme: "instagram://app",
    fallbackUrl: "https://instagram.com",
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    color: "#000000",
    urlScheme: "tiktok://",
    fallbackUrl: "https://tiktok.com",
  },
  telegram: {
    id: "telegram",
    name: "Telegram",
    color: "#2AABEE",
    urlScheme: "tg://",
    fallbackUrl: "https://t.me",
  },
  vk: {
    id: "vk",
    name: "ВКонтакте",
    color: "#0077FF",
    urlScheme: "vk://",
    fallbackUrl: "https://vk.com",
  },
  youtube: {
    id: "youtube",
    name: "YouTube",
    color: "#FF0000",
    urlScheme: "youtube://",
    fallbackUrl: "https://youtube.com",
  },
  reddit: {
    id: "reddit",
    name: "Reddit",
    color: "#FF4500",
    urlScheme: "reddit://",
    fallbackUrl: "https://reddit.com",
  },
  x: {
    id: "x",
    name: "X (Twitter)",
    color: "#000000",
    urlScheme: "twitter://",
    fallbackUrl: "https://x.com",
  },
  threads: {
    id: "threads",
    name: "Threads",
    color: "#000000",
    urlScheme: "barcelona://",
    fallbackUrl: "https://threads.net", // Системно Threads называется barcelona
  },
  facebook: {
    id: "facebook",
    name: "Facebook",
    color: "#1877F2",
    urlScheme: "fb://",
    fallbackUrl: "https://facebook.com",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    color: "#0A66C2",
    urlScheme: "linkedin://",
    fallbackUrl: "https://linkedin.com",
  },
  snapchat: {
    id: "snapchat",
    name: "Snapchat",
    color: "#FFFC00",
    urlScheme: "snapchat://",
    fallbackUrl: "https://snapchat.com",
  },
};
