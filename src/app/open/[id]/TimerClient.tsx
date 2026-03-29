// src/app/open/[id]/TimerClient.tsx
"use client";

import { useEffect, useState } from "react";
import { SocialApp } from "@/lib/apps";

const FACTS = [
  "Обычно тяга зайти в соцсеть пропадает через 20–40 секунд, если ей не поддаться.",
  "Ваш мозг не видит разницы между реальным общением и лайком.",
  "Свайп вниз для обновления ленты имитирует принцип работы игрового автомата.",
  "Эта пауза — маленький шаг к возвращению контроля над своим вниманием.",
];

export default function TimerClient({ app }: { app: SocialApp }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [fact, setFact] = useState(FACTS[0]);

  useEffect(() => {
    // Жестко красим фон (работает и в PWA, и в браузере)
    document.documentElement.style.backgroundColor = "#171717";
    document.body.style.backgroundColor = "#171717";

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        if (prev % 8 === 0)
          setFact(FACTS[Math.floor(Math.random() * FACTS.length)]);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = ((30 - timeLeft) / 30) * 100;

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#171717] text-white">
      <img
        src={`/${app.id}.png`}
        alt={app.name}
        className="w-16 h-16 rounded-2xl mb-8 shadow-xl"
      />

      {timeLeft > 0 ? (
        <>
          <p className="text-neutral-400 text-sm mb-12">
            Открываем {app.name}...
          </p>
          <div className="relative w-40 h-40 flex items-center justify-center mb-12">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="76"
                fill="none"
                stroke="#262626"
                strokeWidth="4"
              />
              <circle
                cx="80"
                cy="80"
                r="76"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 477,
                  strokeDashoffset: 477 - (477 * progress) / 100,
                  transition: "stroke-dashoffset 1s linear",
                }}
              />
            </svg>
            <span className="text-6xl font-light tabular-nums">{timeLeft}</span>
          </div>
          <p className="text-center text-neutral-300 max-w-xs text-sm italic leading-relaxed h-16">
            "{fact}"
          </p>
        </>
      ) : (
        <div className="w-full max-w-xs flex flex-col gap-4">
          <a
            href={app.urlScheme}
            className="w-full text-center py-4 rounded-xl border border-neutral-700 font-medium hover:bg-neutral-800 transition-colors"
          >
            Продолжить в {app.name}
          </a>
          <button
            onClick={() => {
              window.history.length > 1
                ? window.history.back()
                : window.close();
            }}
            className="w-full py-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors"
          >
            🌿 Мне это уже не нужно
          </button>
        </div>
      )}
    </main>
  );
}
