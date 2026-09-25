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
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="location"
        title="Service Areas & Neighborhoods in Leesburg, FL | 24/7 Leak Detection"
        description="Explore all neighborhoods and ZIP codes served by Leesburg Leak Detection across Lake County, FL. Downtown, Briarwood, Woodland Hills, Rolling Meadows, Southside, and Bridgewater."
        url="https://leakdetectionleesburg.com/locations/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">Service Areas</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            — LOCAL LAKE COUNTY DISPATCH —
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Leesburg Neighborhoods & <span className="text-sky-600">Coverage Areas</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered at 719 Pa Walker Rd, our mobile leak detection units provide confirmed 30 to 45 minute emergency arrival across all of Leesburg and surrounding Lake County communities (call to confirm availability).
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <InteractiveMap onSelectNeighborhood={(slug) => onNavigate(`/locations/${slug}/`)} />
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            All Leesburg Service Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-sky-700 font-bold">ZIP {n.zip}</span>
                    <span className="text-emerald-700 font-semibold">30-45 Min Arrival</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {n.description}
                  </p>
                  <div className="text-xs text-slate-500 space-y-1 mb-4">
                    <span className="font-bold text-slate-700 block">Common Local Risks:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {n.localRisks.slice(0, 2).map((r, i) => (
                        <li key={i} className="truncate">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`${prefix}/locations/${n.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/locations/${n.slug}/`)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    <span>View Area Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+13527038206"
                    className="text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2 rounded-full transition-colors shadow-2xs"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target ZIPs Grid */}
        <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 mb-12 shadow-xs">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">
            Target Lake County ZIP Codes Served:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TARGET_ZIPS.map((z) => (
              <a
                key={z.code}
                href={`${prefix}/zip/${z.code}/`}
                onClick={(e) => handleLink(e, `${prefix}/zip/${z.code}/`)}
                className="bg-white hover:bg-sky-50/50 p-4 rounded-2xl border border-slate-200/80 hover:border-sky-300 transition-colors block shadow-2xs"
              >
                <span className="text-lg font-extrabold text-sky-700 block mb-1 font-mono">
                  ZIP {z.code}
                </span>
                <span className="text-xs text-slate-700 block mb-2 font-bold">
                  {z.areaName}
                </span>
                <span className="text-[11px] text-emerald-600 font-mono font-semibold">
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
