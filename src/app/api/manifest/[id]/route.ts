// src/app/api/manifest/[id]/route.ts
import { NextResponse } from "next/server";
import { SUPPORTED_APPS } from "@/lib/apps";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Теперь это Promise
) {
  // Дожидаемся параметров
  const { id } = await params;
  const app = SUPPORTED_APPS[id];

  if (!app) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const manifest = {
    id: `/${app.id}`,
    name: app.name,
    short_name: app.name,
    description: `Осознанная пауза перед открытием ${app.name}`,
    start_url: `/open/${app.id}`,
    scope: `/open/${app.id}`,
    display: "standalone",
    background_color: "#171717",
    theme_color: "#171717",
    icons: [
      {
        src: `/${app.id}.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/${app.id}.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };

  return NextResponse.json(manifest);
}
