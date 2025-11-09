import React, { useEffect, useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import FeatureCards from './components/FeatureCards';
import CTAInstall from './components/CTAInstall';
import BottomNav from './components/BottomNav';
import { LearnView, BuilderView, ContestsView, MapView, ProfileView } from './components/Views';

function App() {
  const [tab, setTab] = useState('learn');
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const installAvailable = Boolean(deferredPrompt);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome) {
      setDeferredPrompt(null);
    }
  };

  const view = useMemo(() => {
    switch (tab) {
      case 'learn':
        return <LearnView />;
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
  }, [tab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      <HeroSpline
        onStartLearning={() => setTab('learn')}
        onOpenBuilder={() => setTab('builder')}
        onInstall={handleInstall}
        onAbout={() => setTab('profile')}
      />

      <FeatureCards />

      <main className="mx-auto max-w-5xl">
        {view}
      </main>

      <CTAInstall onInstall={handleInstall} available={installAvailable} />

      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}

export default App;
