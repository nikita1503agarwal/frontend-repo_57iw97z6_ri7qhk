import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTAInstall() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-500 to-lime-500 p-6 text-white shadow-lg sm:flex-row">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold">Install EcoKids as an App</h3>
          <p className="text-white/90">Play offline, get faster loading, and quick access from your home screen.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 shadow hover:bg-emerald-50">
          <Rocket size={20} />
          Install PWA
        </button>
      </div>
    </section>
  );
}
