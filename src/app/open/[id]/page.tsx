// src/app/open/[id]/page.tsx
import { SUPPORTED_APPS } from "@/lib/apps";
import { Metadata } from "next";
import TimerClient from "./TimerClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = SUPPORTED_APPS[id];
  if (!app) return { title: "Не найдено" };

  return {
    title: app.name,
    manifest: `/api/manifest/${app.id}`,
    appleWebApp: {
      title: app.name,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    icons: { apple: `/${app.id}.png` },
  };
}

export default async function OpenAppPage({ params }: Props) {
  const { id } = await params;
  const app = SUPPORTED_APPS[id];
  if (!app) return null;
  return <TimerClient app={app} />;
}
