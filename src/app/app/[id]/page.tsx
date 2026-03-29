// src/app/app/[id]/page.tsx
"use client";

import { use, useEffect, useState } from "react";
import { SUPPORTED_APPS } from "@/lib/apps";
import Link from "next/link";

// Обрати внимание: params теперь Promise
export default function InstructionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // РАСПАКОВЫВАЕМ PROMISE ЧЕРЕЗ React.use() (Фикс для Next.js 16)
  const { id } = use(params);

  const app = SUPPORTED_APPS[id];
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  if (!app) return null;

  const pwaUrl = `${host}/open/${app.id}`;

  return (
    <main className="min-h-screen w-full bg-[#FDFCF8] text-neutral-900">
      <div className="max-w-md mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-900 mb-12 block"
        >
          ← Назад
        </Link>

        <div className="flex flex-col items-center text-center mb-12">
          <img
            src={`/${app.id}.png`}
            alt={app.name}
            className="w-24 h-24 rounded-3xl shadow-sm mb-6"
          />
          <h1 className="text-3xl font-serif font-bold mb-2">
            Ярлык {app.name}
          </h1>
          <p className="text-neutral-600 text-sm">
            Добавьте ярлык на экран. При нажатии на него сработает 30-секундная
            пауза осознанности.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm mb-8">
          <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-6">
            Как установить
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="text-xl font-serif font-bold text-emerald-600 mt-1">
                1
              </span>
              <div className="w-full">
                <p className="text-sm font-medium mb-2">
                  Откройте эту ссылку в браузере
                </p>
                <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-100 p-2 rounded-lg w-full overflow-hidden">
                  <img
                    src={`/${app.id}.png`}
                    className="w-5 h-5 rounded"
                    alt="icon"
                  />
                  <span className="text-xs font-mono text-emerald-600 truncate">
                    {pwaUrl}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl font-serif font-bold text-emerald-600 mt-1">
                2
              </span>
              <div>
                <p className="text-sm font-medium mb-1">
                  Нажмите меню браузера
                </p>
                <p className="text-xs text-neutral-500">
                  В Safari это кнопка "Поделиться" внизу. В Chrome — три точки
                  (⋮) вверху.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl font-serif font-bold text-emerald-600 mt-1">
                3
              </span>
              <div>
                <p className="text-sm font-medium mb-1">
                  Выберите «Установить» или «На экран Домой»
                </p>
                <p className="text-xs text-neutral-500">
                  Имя и иконка подставятся автоматически.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/open/${app.id}`}
            className="text-emerald-600 text-sm font-medium hover:underline"
          >
            Тест: посмотреть, как работает пауза →
          </Link>
        </div>
      </div>
    </main>
  );
}
