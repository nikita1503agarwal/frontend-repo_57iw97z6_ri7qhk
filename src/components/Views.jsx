import React from 'react';

export function LearnView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-extrabold text-emerald-800">Learning Modules</h2>
      <p className="text-emerald-800/80">Choose a category to start your eco journey.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {['Recycling 101', 'Clean Energy', 'Water Savers', 'Eco Facts Quiz'].map((t) => (
          <div key={t} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">{t}</div>
            <div className="mt-1 text-xs text-emerald-700/70">5–10 min • +50 points</div>
            <button className="mt-3 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BuilderView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-extrabold text-emerald-800">3D Builder (Preview)</h2>
      <p className="text-emerald-800/80">Create simple eco products. A full Babylon.js canvas will live here.</p>
      <div className="mt-4 h-56 rounded-2xl border border-emerald-100 bg-emerald-50" />
    </div>
  );
}

export function ContestsView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-extrabold text-emerald-800">Monthly Contests</h2>
      <p className="text-emerald-800/80">Submit creations and vote for favorites.</p>
      <div className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">Theme: Upcycle Magic ✨</div>
    </div>
  );
}

export function MapView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-extrabold text-emerald-800">Eco Map</h2>
      <p className="text-emerald-800/80">Nearby parks, schools, and missions will appear here.</p>
      <div className="mt-4 h-56 rounded-2xl border border-emerald-100 bg-emerald-50" />
    </div>
  );
}

export function ProfileView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-extrabold text-emerald-800">Your Profile</h2>
      <p className="text-emerald-800/80">Nickname, avatar, age group, and achievements are shown here.</p>
      <div className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">Sign in to sync progress across devices.</div>
    </div>
  );
}
