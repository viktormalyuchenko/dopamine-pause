// src/app/page.tsx

import Link from "next/link";
import { SUPPORTED_APPS } from "@/lib/apps";
import { ShieldCheck, Brain, TimerReset } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] text-neutral-900 selection:bg-emerald-200">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Хедер */}
        <header className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Дофаминовая Пауза</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-neutral-900">
            Верните своё <br />
            <span className="italic text-emerald-700">внимание.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Замените иконки соцсетей на фейковые ярлыки. При нажатии они дадут
            вашему мозгу 30-секундную паузу на осознанность, прежде чем открыть
            ленту.
          </p>
        </header>

        {/* Как это работает (3 шага) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-10 h-10 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-500 font-mono">
              01
            </div>
            <h3 className="font-semibold mb-2">Выберите приложение</h3>
            <p className="text-sm text-neutral-500">
              Нажмите на соцсеть, от которой хотите отдохнуть.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-10 h-10 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-500 font-mono">
              02
            </div>
            <h3 className="font-semibold mb-2">Добавьте на экран</h3>
            <p className="text-sm text-neutral-500">
              Сохраните ярлык-обманку на домашний экран телефона.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-10 h-10 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
              <TimerReset className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-2">Сделайте паузу</h3>
            <p className="text-sm text-neutral-500">
              Каждое открытие запускает 30-секундный таймер-фильтр.
            </p>
          </div>
        </section>

        {/* Сетка приложений */}
        <section className="text-center">
          <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-6">
            Выберите приложение-цель
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.values(SUPPORTED_APPS).map((app) => (
              <Link
                href={`/app/${app.id}`}
                key={app.id}
                className="group relative flex flex-col items-center justify-center p-6 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all active:scale-95"
              >
                {/* Здесь мы выводим иконку, которую ты скачаешь в папку public */}
                <img
                  src={`/${app.id}.png`}
                  alt={app.name}
                  className="w-16 h-16 rounded-2xl shadow-sm mb-4 group-hover:-translate-y-1 transition-transform"
                />
                <span className="font-medium text-neutral-800">{app.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-neutral-200 pt-10">
          <div className="grid grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Open Source
              </span>
              <a
                href="https://github.com"
                className="text-sm font-medium text-neutral-700 hover:text-emerald-600 transition-colors"
              >
                Код на GitHub
              </a>
              <p className="text-[11px] text-neutral-500">
                Бесплатно навсегда. Без регистрации.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Создано ярлыков
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif font-bold text-neutral-800">
                  1 052
                </span>
                <span
                  className="flex items-center justify-center w-4 h-4 rounded-full border border-neutral-300 text-[9px] text-neutral-400 cursor-help"
                  title="Количество установок (скоро подключим БД)"
                >
                  ?
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">
                Никакой слежки и аккаунтов.
              </p>
            </div>
          </div>

          <p className="text-center text-[10px] text-neutral-400 mt-12 mb-4">
            Вся магия происходит локально на вашем устройстве.
          </p>
        </footer>
      </div>
    </main>
  );
}
