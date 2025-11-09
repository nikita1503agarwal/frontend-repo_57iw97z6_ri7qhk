import React, { useEffect, useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import FeatureCards from './components/FeatureCards';
import CTAInstall from './components/CTAInstall';
import BottomNav from './components/BottomNav';
import OnboardingWizard from './components/OnboardingWizard';
import { LearnView, BuilderView, ContestsView, MapView, ProfileView } from './components/Views';

function App() {
  const [tab, setTab] = useState('learn');
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [profile, setProfile] = useState(() => {
    try {
      const raw = localStorage.getItem('ecokids.profile');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const installAvailable = Boolean(deferredPrompt);
  const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

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

  const handleOnboardingComplete = (data) => {
    setProfile(data);
    try {
      localStorage.setItem('ecokids.profile', JSON.stringify(data));
    } catch {}
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
        return <ProfileView profile={profile} />;
      default:
        return <LearnView />;
    }
  }, [tab, profile]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      <HeroSpline
        onStartLearning={() => setTab('learn')}
        onOpenBuilder={() => setTab('builder')}
        onInstall={handleInstall}
        onAbout={() => setTab('profile')}
      />

      <FeatureCards />

      <main className="mx-auto max-w-5xl">{view}</main>

      <CTAInstall onInstall={handleInstall} available={installAvailable} />

      <BottomNav current={tab} onChange={setTab} />

      {!profile && (
        <OnboardingWizard onComplete={handleOnboardingComplete} apiBase={apiBase} />
      )}
    </div>
  );
}

export default App;
