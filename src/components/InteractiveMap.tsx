import React, { useState } from 'react';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { MapPin, Phone, ShieldCheck, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  activeNeighborhoodSlug?: string;
  onSelectNeighborhood?: (slug: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  activeNeighborhoodSlug,
  onSelectNeighborhood
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    activeNeighborhoodSlug || 'downtown-city-center'
  );

  const selectedNeighborhood =
    NEIGHBORHOODS.find((n) => n.slug === selectedSlug) || NEIGHBORHOODS[0];

  const handleSelect = (slug: string) => {
    setSelectedSlug(slug);
    if (onSelectNeighborhood) {
      onSelectNeighborhood(slug);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 text-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Interactive SVG Map Visual */}
        <div className="w-full lg:w-3/5 bg-slate-900 rounded-2xl p-4 border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-semibold text-sky-400 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" />
              Lake County GIS Dispatch Sector
            </span>
            <span>HQ: 719 Pa Walker Rd, Leesburg, FL 34748</span>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-900/90 border border-slate-800">
            <svg viewBox="0 0 800 500" className="w-full h-full select-none">
              {/* Lakes */}
              <ellipse cx="640" cy="390" rx="130" ry="75" fill="#0369a1" opacity="0.4" />
              <text x="640" y="395" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold">Lake Harris</text>

              <ellipse cx="280" cy="110" rx="160" ry="60" fill="#0369a1" opacity="0.4" />
              <text x="280" y="115" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold">Lake Griffin</text>

              {/* Highways */}
              <line x1="200" y1="0" x2="600" y2="500" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
              <text x="280" y="190" fill="#64748b" fontSize="10" fontWeight="bold">US-27 S</text>

              <line x1="50" y1="260" x2="750" y2="260" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
              <text x="700" y="250" fill="#64748b" fontSize="10" fontWeight="bold">US-441</text>

              {/* HQ Marker */}
              <g transform="translate(420, 255)">
                <circle cx="0" cy="0" r="16" fill="#ef4444" opacity="0.3" className="animate-ping" />
                <circle cx="0" cy="0" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="18" y="-12" width="130" height="24" rx="4" fill="#0f172a" opacity="0.9" />
                <text x="24" y="4" fill="#ffffff" fontSize="10" fontWeight="bold">HQ: 719 Pa Walker Rd</text>
              </g>

              {/* 1. Downtown City Center */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('downtown-city-center')}
              >
                <circle
                  cx="370"
                  cy="220"
                  r={selectedSlug === 'downtown-city-center' ? 14 : 9}
                  fill={selectedSlug === 'downtown-city-center' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="370" y="200" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Downtown</text>
              </g>

              {/* 2. Briarwood */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('briarwood')}
              >
                <circle
                  cx="310"
                  cy="290"
                  r={selectedSlug === 'briarwood' ? 14 : 9}
                  fill={selectedSlug === 'briarwood' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="310" y="320" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Briarwood</text>
              </g>

              {/* 3. Woodland Hills */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('woodland-hills')}
              >
                <circle
                  cx="480"
                  cy="180"
                  r={selectedSlug === 'woodland-hills' ? 14 : 9}
                  fill={selectedSlug === 'woodland-hills' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="480" y="165" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Woodland Hills</text>
              </g>

              {/* 4. Rolling Meadows */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('rolling-meadows')}
              >
                <circle
                  cx="240"
                  cy="250"
                  r={selectedSlug === 'rolling-meadows' ? 14 : 9}
                  fill={selectedSlug === 'rolling-meadows' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="240" y="240" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Rolling Meadows</text>
              </g>

              {/* 5. Southside */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('southside')}
              >
                <circle
                  cx="450"
                  cy="360"
                  r={selectedSlug === 'southside' ? 14 : 9}
                  fill={selectedSlug === 'southside' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="450" y="390" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Southside</text>
              </g>

              {/* 6. Bridgewater */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleSelect('bridgewater')}
              >
                <circle
                  cx="610"
                  cy="260"
                  r={selectedSlug === 'bridgewater' ? 14 : 9}
                  fill={selectedSlug === 'bridgewater' ? '#38bdf8' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="610" y="245" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Bridgewater</text>
              </g>
            </svg>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {NEIGHBORHOODS.map((n) => (
              <button
                key={n.slug}
                onClick={() => handleSelect(n.slug)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  selectedSlug === n.slug
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {n.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Area Local Details */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 mb-2 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>LEESBURG ZIP {selectedNeighborhood.zip}</span>
              <span>·</span>
              <span>RAPID 30-45 MIN DISPATCH</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {selectedNeighborhood.name}
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              {selectedNeighborhood.description}
            </p>

            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Common Local Plumbing Vulnerabilities:
              </h4>
              <ul className="space-y-1.5">
                {selectedNeighborhood.localRisks.map((risk, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Key Landmarks & Corridors:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedNeighborhood.landmarks.map((mark, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 border border-slate-200"
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+13527038206"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-3 rounded-full text-sm transition-all shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call (352) 703-8206</span>
            </a>
            <a
              href={`/locations/${selectedNeighborhood.slug}/`}
              className="inline-flex items-center justify-center px-4 py-3 rounded-full text-sm bg-white hover:bg-slate-50 text-slate-800 font-bold border border-slate-200 transition-colors shadow-2xs"
            >
              <span>View Area Guide</span>
            </a>
          </div>
        </div>
      </div>

      {/* Target ZIP Codes Bar */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
          All Target Lake County ZIP Codes Served:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TARGET_ZIPS.map((zip) => (
            <a
              key={zip.code}
              href={`/zip/${zip.code}/`}
              className="bg-slate-50 hover:bg-sky-50/60 border border-slate-200/80 rounded-xl p-3.5 transition-colors group shadow-2xs"
            >
              <span className="text-base font-extrabold text-sky-700 block group-hover:text-sky-800 font-mono">
                ZIP {zip.code}
              </span>
              <span className="text-xs text-slate-600 block truncate font-medium">
                {zip.areaName}
              </span>
              <span className="text-[11px] text-emerald-600 font-mono block mt-1 font-semibold">
                {zip.emergencyDispatchTime}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
