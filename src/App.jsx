import React, { useCallback, useEffect, useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import FeatureCards from './components/FeatureCards';
import CTAInstall from './components/CTAInstall';
import BottomNav from './components/BottomNav';
import { BuilderView, ContestsView, LearnView, MapView, ProfileView } from './components/Views';

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
  const [tab, setTab] = useState('learn');

  // PWA install prompt capture
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  const Content = useMemo(() => {
    switch (tab) {
      case 'learn':
        return (
          <>
            <HeroSpline
              onStartLearning={() => setTab('learn')}
              onOpenBuilder={() => setTab('builder')}
              onInstall={handleInstall}
              onAbout={() => setTab('profile')}
            />
            <FeatureCards />
          </>
        );
      case 'builder':
        return <BuilderView />;
      case 'contests':
        return <ContestsView />;
      case 'map':
        return <MapView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <LearnView />;
    }
  }, [tab, handleInstall]);

  return (
    <div className="min-h-screen bg-white text-emerald-900 pb-24">
      {Content}
      <CTAInstall onInstall={handleInstall} />
      <SafeBadge />
      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}
