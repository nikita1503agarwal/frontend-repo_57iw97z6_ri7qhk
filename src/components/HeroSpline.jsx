import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, ShieldCheck } from 'lucide-react';

const HeroSpline = ({ onStartLearning, onOpenBuilder, onInstall, onAbout }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      <div className="h-[420px] sm:h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay that won't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-white/0" />

      {/* content overlay */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center pb-8 sm:pb-0">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" /> Child‑Safe • No ads
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-emerald-900 sm:text-4xl">
            EcoKids
            <span className="block text-emerald-600">Learn • Play • Build</span>
          </h1>
          <p className="mt-3 text-emerald-800/80">
            Explore eco‑friendly missions and mini‑games. Earn points while
            making the planet happier.
          </p>
          <div className="pointer-events-auto mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onStartLearning}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Sparkles className="h-5 w-5" /> Start Learning
            </button>
            <button
              onClick={onOpenBuilder}
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-emerald-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <Rocket className="h-5 w-5" /> Open 3D Builder
            </button>
            <button
              onClick={onInstall}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-white shadow transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Install App
            </button>
            <button
              onClick={onAbout}
              className="inline-flex rounded-xl px-3 py-2 text-emerald-800/80 underline-offset-2 hover:underline"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
