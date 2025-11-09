import React from 'react';
import { Download } from 'lucide-react';

const CTAInstall = ({ onInstall, available }) => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex items-center justify-between rounded-2xl bg-emerald-600 p-5 text-white shadow-lg">
        <div>
          <h3 className="text-lg font-semibold">Install EcoKids</h3>
          <p className="text-sm opacity-90">Get a faster, offline‑ready experience on your device.</p>
        </div>
        <button
          onClick={onInstall}
          disabled={!available}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-emerald-700 shadow disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Download className="h-5 w-5" />
          {available ? 'Install' : 'Not Available'}
        </button>
      </div>
    </section>
  );
};

export default CTAInstall;
