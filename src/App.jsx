import React from 'react';
import HeroSpline from './components/HeroSpline';
import FeatureCards from './components/FeatureCards';
import CTAInstall from './components/CTAInstall';
import BottomNav from './components/BottomNav';

function SafeBadge() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800">
        <p className="text-sm">
          EcoKids is part of the ZAMINAT.eco ecosystem. We protect kids’ privacy, require parental consent, and moderate all user content.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <HeroSpline />
      <FeatureCards />
      <CTAInstall />
      <SafeBadge />
      <BottomNav />
    </div>
  );
}
