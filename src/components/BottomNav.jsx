import React from 'react';
import { Home, Gamepad2, Medal, Map, User } from 'lucide-react';

const TABS = [
  { key: 'learn', icon: Home, label: 'Learn' },
  { key: 'builder', icon: Gamepad2, label: 'Builder' },
  { key: 'contests', icon: Medal, label: 'Contests' },
  { key: 'map', icon: Map, label: 'Map' },
  { key: 'profile', icon: User, label: 'Profile' },
];

export default function BottomNav({ current = 'learn', onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 mx-auto max-w-3xl rounded-t-2xl border-t border-emerald-100 bg-white/90 shadow-2xl backdrop-blur">
      <ul className="grid grid-cols-5 px-2 py-2 text-emerald-700">
        {TABS.map((item) => {
          const active = current === item.key;
          const Icon = item.icon;
          return (
            <li key={item.key} className="flex items-stretch">
              <button
                type="button"
                aria-label={item.label}
                onClick={() => onChange && onChange(item.key)}
                className={`flex w-full flex-col items-center gap-1 rounded-xl p-2 transition ${
                  active ? 'bg-emerald-50 text-emerald-700' : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Icon size={22} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
