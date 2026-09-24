import React from 'react';
import { SERVICE_STANDARDS } from '../data/standardsData';
import { ShieldCheck, Award, Wrench, Clock, Zap, CheckCircle2 } from 'lucide-react';

const ICONS = [ShieldCheck, Award, Wrench, Clock, Zap, CheckCircle2];

export const StandardsSlider: React.FC = () => {
  return (
    <section className="py-14 bg-slate-900 border-y border-slate-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Our Service Standards
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Certified leak detection protocols, state licensed master plumbers, and verified equipment calibration serving Leesburg and Lake County.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-6 px-4">
          {SERVICE_STANDARDS.concat(SERVICE_STANDARDS).map((std, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={`${std.id}-${idx}`}
                className="w-72 sm:w-80 shrink-0 bg-slate-800/80 rounded-xl p-5 border border-slate-700/60 shadow-md backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-wider text-sky-400 block font-semibold">
                      {std.badgeCode}
                    </span>
                    <span className="text-xs text-slate-400 block truncate">
                      {std.verifiedOrg}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                    {std.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {std.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
