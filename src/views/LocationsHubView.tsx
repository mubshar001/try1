import React from 'react';
import { Phone, ArrowRight, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { InteractiveMap } from '../components/InteractiveMap';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface LocationsHubViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const LocationsHubView: React.FC<LocationsHubViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Locations', url: 'https://leakdetectionleesburg.com/locations/' }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="location"
        title="Service Areas & Neighborhoods in Leesburg, FL | 24/7 Leak Detection"
        description="Explore all neighborhoods and ZIP codes served by Leesburg Leak Detection across Lake County, FL. Downtown, Briarwood, Woodland Hills, Rolling Meadows, Southside, and Bridgewater."
        url="https://leakdetectionleesburg.com/locations/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Service Areas</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            Local Lake County Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Leesburg Neighborhoods & Coverage Areas
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Headquartered at 719 Pa Walker Rd, our mobile leak detection units provide confirmed 30 to 45 minute emergency arrival across all of Leesburg and surrounding Lake County communities.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <InteractiveMap onSelectNeighborhood={(slug) => onNavigate(`/locations/${slug}/`)} />
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            All Leesburg Service Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.slug}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="text-sky-400 font-bold">ZIP {n.zip}</span>
                    <span className="text-emerald-400">30-45 Min Arrival</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {n.description}
                  </p>
                  <div className="text-xs text-slate-400 space-y-1 mb-4">
                    <span className="font-semibold text-slate-300 block">Common Local Risks:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {n.localRisks.slice(0, 2).map((r, i) => (
                        <li key={i} className="truncate">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`${prefix}/locations/${n.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/locations/${n.slug}/`)}
                    className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Area Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+13527038206"
                    className="text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target ZIPs Grid */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">
            Target Lake County ZIP Codes Served:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TARGET_ZIPS.map((z) => (
              <a
                key={z.code}
                href={`${prefix}/zip/${z.code}/`}
                onClick={(e) => handleLink(e, `${prefix}/zip/${z.code}/`)}
                className="bg-slate-800/80 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/60 hover:border-sky-500/50 transition-colors block"
              >
                <span className="text-lg font-bold text-sky-400 block mb-1">
                  ZIP {z.code}
                </span>
                <span className="text-xs text-slate-300 block mb-2 font-medium">
                  {z.areaName}
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">
                  {z.emergencyDispatchTime} dispatch
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
