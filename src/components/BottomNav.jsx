import React from 'react';
import { Home, Gamepad2, Medal, Map, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 mx-auto max-w-3xl rounded-t-2xl border-t border-emerald-100 bg-white/90 shadow-2xl backdrop-blur">
      <ul className="grid grid-cols-5 px-2 py-2 text-emerald-700">
        {[
          { icon: Home, label: 'Learn' },
          { icon: Gamepad2, label: 'Builder' },
          { icon: Medal, label: 'Contests' },
          { icon: Map, label: 'Map' },
          { icon: User, label: 'Profile' },
        ].map((item) => (
          <li key={item.label} className="flex flex-col items-center gap-1 p-2">
            <item.icon size={22} />
            <span className="text-xs font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
