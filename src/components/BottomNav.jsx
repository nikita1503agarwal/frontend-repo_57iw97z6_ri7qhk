import React from 'react';
import { Home, Gamepad2, Medal, Map, User } from 'lucide-react';

const tabs = [
  { key: 'learn', label: 'Learn', icon: Home },
  { key: 'builder', label: 'Builder', icon: Gamepad2 },
  { key: 'contests', label: 'Contests', icon: Medal },
  { key: 'map', label: 'Map', icon: Map },
  { key: 'profile', label: 'Profile', icon: User },
];

const BottomNav = ({ current, onChange }) => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-emerald-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-1">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`mx-1 flex flex-col items-center justify-center rounded-xl px-2 py-2 text-xs transition ${
                active
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-emerald-800/80 hover:bg-emerald-50'
              }`}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-0.5">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
