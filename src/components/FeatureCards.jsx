import React from 'react';
import { Leaf, Puzzle, ShieldCheck, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Mini‑Games',
    desc: 'Quick quizzes and eco‑puzzles to earn points.',
    icon: Puzzle,
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    title: 'Eco Missions',
    desc: 'Daily challenges that build green habits.',
    icon: Leaf,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'Safe for Kids',
    desc: 'No ads, privacy‑first, parent controls.',
    icon: ShieldCheck,
    color: 'bg-sky-50 text-sky-700',
  },
  {
    title: '3D Builder',
    desc: 'Create art tiles and share in contests.',
    icon: Rocket,
    color: 'bg-fuchsia-50 text-fuchsia-700',
  },
];

const FeatureCards = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {features.map(({ title, desc, icon: Icon, color }) => (
          <div
            key={title}
            className={`rounded-2xl ${color} p-4 shadow-sm ring-1 ring-black/5`}
          >
            <Icon className="h-6 w-6" />
            <h3 className="mt-2 text-sm font-semibold">{title}</h3>
            <p className="mt-1 text-xs opacity-80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
