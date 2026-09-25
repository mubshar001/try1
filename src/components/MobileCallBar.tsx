import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

interface MobileCallBarProps {
  lang: 'en' | 'es';
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ lang }) => {
  return (
    <aside
      aria-label="Emergency contact phone bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-xl"
    >
      <div className="flex items-center gap-2">
        <a
          href="tel:+13527038206"
          className="flex-1 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-extrabold py-3 px-3 rounded-full flex items-center justify-center gap-2 text-sm shadow-sm transition-all whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0 fill-slate-950" />
          <span>{lang === 'es' ? 'Llamar (352) 703-8206' : 'Call (352) 703-8206'}</span>
        </a>
        <a
          href={lang === 'es' ? '/es/emergency/' : '/emergency/'}
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold p-3 rounded-full flex items-center justify-center text-xs shrink-0 shadow-sm"
          title="24/7 Emergency Dispatch"
        >
          <AlertCircle className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
