import React, { useState } from 'react';

export const LearnView = () => {
  return (
    <div className="px-4 pb-24">
      <h2 className="text-xl font-semibold text-emerald-900">Learning Hub</h2>
      <p className="mt-1 text-emerald-800/80">Choose a category to start your eco‑journey.</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {['Clean Planet', 'Sorting Waste', 'Upcycling', 'Energy Savers'].map((c) => (
          <button key={c} className="rounded-2xl bg-white p-4 text-left shadow ring-1 ring-black/5">
            <span className="block text-sm font-semibold text-emerald-900">{c}</span>
            <span className="text-xs text-emerald-800/70">0% complete</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const BuilderView = () => {
  return (
    <div className="px-4 pb-24">
      <h2 className="text-xl font-semibold text-emerald-900">3D Builder</h2>
      <p className="mt-1 text-emerald-800/80">Create your first eco tile. Coming soon!</p>
      <div className="mt-4 h-48 rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50" />
    </div>
  );
};

export const ContestsView = () => {
  return (
    <div className="px-4 pb-24">
      <h2 className="text-xl font-semibold text-emerald-900">Contests</h2>
      <p className="mt-1 text-emerald-800/80">Join monthly art tile contests and win badges.</p>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <div className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/5">
          <div className="text-sm font-semibold">Eco Tiles: Spring</div>
          <div className="text-xs text-emerald-800/70">Opens next week • Age 6–12</div>
        </div>
      </div>
    </div>
  );
};

export const MapView = () => {
  return (
    <div className="px-4 pb-24">
      <h2 className="text-xl font-semibold text-emerald-900">Module Map</h2>
      <p className="mt-1 text-emerald-800/80">Track your learning path across themed islands.</p>
      <div className="mt-4 h-56 rounded-2xl bg-emerald-50" />
    </div>
  );
};

export const ProfileView = () => {
  const [hasProfile] = useState(false);
  return (
    <div className="px-4 pb-24">
      <h2 className="text-xl font-semibold text-emerald-900">Profile</h2>
      {!hasProfile ? (
        <div className="mt-3 rounded-2xl bg-white p-4 shadow ring-1 ring-black/5">
          <p className="text-sm text-emerald-800/80">Create a child profile to personalize learning.</p>
        </div>
      ) : (
        <div className="mt-3 rounded-2xl bg-white p-4 shadow ring-1 ring-black/5">
          <p>Your profile details will appear here.</p>
        </div>
      )}
    </div>
  );
};
