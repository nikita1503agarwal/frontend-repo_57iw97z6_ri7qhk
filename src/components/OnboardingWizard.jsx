import React, { useMemo, useState } from 'react';
import { User, ShieldCheck, Mail, Leaf, Rocket } from 'lucide-react';

const ageOptions = [
  { id: '6-8', label: 'Ages 6–8' },
  { id: '9-12', label: 'Ages 9–12' },
  { id: '13-15', label: 'Ages 13–15' },
];

export default function OnboardingWizard({ onComplete, apiBase }) {
  const [step, setStep] = useState(0);
  const [nickname, setNickname] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const canNext = useMemo(() => {
    if (step === 0) return nickname.trim().length >= 2 && nickname.trim().length <= 24;
    if (step === 1) return Boolean(ageGroup);
    if (step === 2) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return true;
  }, [step, nickname, ageGroup, email]);

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/profiles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: nickname.trim(), age_group: ageGroup, parent_email: email.trim() }),
      });
      if (!res.ok) throw new Error('Failed to save profile');
      const data = await res.json();
      onComplete?.(data);
    } catch (e) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-emerald-950/40 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
        {step === 0 && (
          <div className="p-6">
            <div className="flex items-center gap-2 text-emerald-700">
              <Leaf className="h-5 w-5" />
              <span className="text-xs font-medium">Welcome to EcoKids</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-emerald-900">Pick a fun nickname</h3>
            <p className="mt-1 text-sm text-emerald-800/80">This is how you’ll appear on leaderboards.</p>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2">
              <User className="h-5 w-5 text-emerald-600" />
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="e.g., GreenFox"
                className="w-full bg-transparent outline-none placeholder:text-emerald-700/50"
                maxLength={24}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                disabled={!canNext}
                onClick={() => setStep(1)}
                className="rounded-full bg-emerald-600 px-5 py-2 text-white disabled:opacity-50"
              >Next</button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="p-6">
            <div className="flex items-center gap-2 text-emerald-700">
              <Leaf className="h-5 w-5" />
              <span className="text-xs font-medium">Ages</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-emerald-900">Choose your age group</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {ageOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAgeGroup(opt.id)}
                  className={`rounded-2xl border px-3 py-3 text-sm ${ageGroup === opt.id ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-emerald-200 text-emerald-700'}`}
                >{opt.label}</button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(0)} className="rounded-full px-4 py-2 text-emerald-700">Back</button>
              <button
                disabled={!canNext}
                onClick={() => setStep(2)}
                className="rounded-full bg-emerald-600 px-5 py-2 text-white disabled:opacity-50"
              >Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-6">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-medium">Parent Consent</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-emerald-900">Parent email</h3>
            <p className="mt-1 text-sm text-emerald-800/80">We’ll send a note for consent. We never show emails to kids.</p>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2">
              <Mail className="h-5 w-5 text-emerald-600" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@email.com"
                className="w-full bg-transparent outline-none placeholder:text-emerald-700/50"
                inputMode="email"
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(1)} className="rounded-full px-4 py-2 text-emerald-700">Back</button>
              <button
                disabled={!canNext || loading}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-white disabled:opacity-50"
              >
                <Rocket className="h-4 w-4" />
                {loading ? 'Saving...' : 'Let’s go!'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
