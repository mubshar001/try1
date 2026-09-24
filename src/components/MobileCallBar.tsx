import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

interface MobileCallBarProps {
  lang: 'en' | 'es';
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ lang }) => {
  return (
    <aside
      aria-label="Emergency contact phone bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <a
          href="tel:+13527038206"
          className="flex-1 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-extrabold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0 fill-current" />
          <span>{lang === 'es' ? 'Llamar (352) 703-8206' : 'Call (352) 703-8206'}</span>
        </a>
        <a
          href={lang === 'es' ? '/es/emergency/' : '/emergency/'}
          className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold p-3 rounded-xl flex items-center justify-center text-xs shrink-0"
          title="24/7 Emergency Dispatch"
        >
          <AlertCircle className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
