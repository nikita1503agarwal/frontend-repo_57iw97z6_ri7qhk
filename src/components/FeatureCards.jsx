import React from 'react';
import { Sparkles, Puzzle, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Mini‑Games & Quizzes',
    text: 'Play bite‑size eco challenges with instant rewards and fun animations.'
  },
  {
    icon: Puzzle,
    title: 'Interactive Lessons',
    text: 'Short, visual lessons with drag‑and‑drop, matching, and voice narration.'
  },
  {
    icon: Leaf,
    title: 'Real‑World Missions',
    text: 'Geolocated eco spots and missions to complete with friends and family.'
  },
  {
    icon: ShieldCheck,
    title: 'Kid‑Safe by Design',
    text: 'Anonymous profiles, parental controls, and content moderation.'
  }
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-800 mb-6">Why kids love EcoKids</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Icon size={22} />
            </div>
            <h3 className="font-bold text-emerald-800">{title}</h3>
            <p className="mt-1 text-sm text-emerald-800/80">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
