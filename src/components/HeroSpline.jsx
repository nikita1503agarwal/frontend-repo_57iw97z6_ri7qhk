import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 shadow-lg" />
            <span className="font-extrabold text-2xl tracking-tight text-emerald-700">EcoKids</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 backdrop-blur hover:bg-white">About</button>
            <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">Install PWA</button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 pb-4 md:pb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-emerald-800">
              Learn. Build. Protect our Planet.
            </h1>
            <p className="mt-3 text-base sm:text-lg text-emerald-800/80">
              Play mini‑games, complete real‑world eco missions, and design creative 3D projects. Earn points, unlock badges, and climb the leaderboard!
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">
                Start Learning
              </button>
              <button className="rounded-xl bg-white px-5 py-3 text-emerald-700 font-semibold shadow ring-1 ring-emerald-200 hover:bg-emerald-50">
                Open 3D Builder
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-700/70 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Child‑safe • No public profiles • Parental controls
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[320px] sm:h-[380px] md:h-[460px] rounded-3xl border border-emerald-100 bg-white shadow-inner">
              <Spline
                scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/40 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
