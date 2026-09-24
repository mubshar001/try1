import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { ZipItem } from '../types';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { VisualAsset } from '../components/VisualAsset';
import { InteractiveMap } from '../components/InteractiveMap';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface ZipDetailViewProps {
  zip: ZipItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ZipDetailView: React.FC<ZipDetailViewProps> = ({
  zip,
  lang,
  onNavigate
}) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canonicalUrl = `https://leakdetectionleesburg.com/zip/${zip.code}/`;
  const relatedNeighborhoods = NEIGHBORHOODS.filter((n) => n.zip === zip.code);
  const otherZips = TARGET_ZIPS.filter((z) => z.code !== zip.code);

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Service Areas', url: 'https://leakdetectionleesburg.com/locations/' },
    { name: `ZIP ${zip.code}`, url: canonicalUrl }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="location"
        title={`Leak Detection in Leesburg, FL ZIP ${zip.code} | 24/7 Water & Slab Specialists`}
        description={`Emergency water and slab leak detection in Leesburg FL ZIP code ${zip.code} (${zip.areaName}). 24/7 non-invasive acoustic locating with rapid ${zip.emergencyDispatchTime} response.`}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/locations/`} onClick={(e) => handleLink(e, `${prefix}/locations/`)} className="hover:text-white">Locations</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">ZIP Code {zip.code}</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>LAKE COUNTY SECTOR · LEESBURG {zip.code}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Leak Detection in Leesburg, FL {zip.code}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Dedicated non-invasive acoustic and thermal water leak detection serving residential subdivisions, commercial corridors, and municipal utilities in {zip.areaName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-base shadow-lg shadow-sky-500/20 transition-all"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call (352) 703-8206</span>
                </a>
                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl text-sm border border-slate-700"
                >
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Dispatch: {zip.emergencyDispatchTime}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <VisualAsset
                  type="map"
                  alt={`Service map coverage for ZIP code ${zip.code}, Leesburg Florida`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coverage & Subdivisions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Service Area Overview & Subdivisions in {zip.code}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Postal code {zip.code} encompasses key sectors of {zip.areaName}. Operating from our central facility on Pa Walker Rd, our equipped mobile vans reach properties across this ZIP zone within {zip.emergencyDispatchTime}.
              </p>
              <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 mb-6">
                <h3 className="font-bold text-white text-sm mb-3">Key Subdivisions & Zones Served:</h3>
                <div className="flex flex-wrap gap-2">
                  {zip.keySubdivisions.map((sub, i) => (
                    <span key={i} className="bg-slate-900 px-3 py-1 rounded text-xs text-sky-300 border border-slate-700/60 font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether diagnosing an active sub-slab hot water leak in a concrete home foundation or tracing a cracked underground irrigation line running through sandy soil, our electronic listening equipment provides surgical accuracy with zero damage.
              </p>
            </section>

            {/* Top 10 Services in this ZIP */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Top Priority Services Available in ZIP {zip.code}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOP_10_PRIORITY_SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={`${prefix}/services/${s.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/services/${s.slug}/`)}
                    className="bg-slate-800/70 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/60 hover:border-sky-500/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        {s.name} in {zip.code}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                        {s.shortDesc}
                      </p>
                    </div>
                    <span className="text-xs text-sky-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Service Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Map */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Geographic Dispatch Route for ZIP {zip.code}
              </h2>
              <InteractiveMap />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-sky-500 rounded-2xl p-6 text-slate-950 text-center shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                Local Dispatch
              </span>
              <h3 className="text-xl font-extrabold mb-2">
                Water Leak in {zip.code}?
              </h3>
              <p className="text-xs font-medium text-slate-900 mb-4">
                Dispatch time to {zip.code} is {zip.emergencyDispatchTime}.
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 px-4 rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (352) 703-8206</span>
              </a>
            </div>

            {/* Related Neighborhoods */}
            {relatedNeighborhoods.length > 0 && (
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-3">
                  Neighborhoods in ZIP {zip.code}:
                </h3>
                <ul className="space-y-2 text-xs">
                  {relatedNeighborhoods.map((n) => (
                    <li key={n.slug}>
                      <a
                        href={`${prefix}/locations/${n.slug}/`}
                        onClick={(e) => handleLink(e, `${prefix}/locations/${n.slug}/`)}
                        className="text-slate-300 hover:text-sky-400 flex items-center justify-between py-1 border-b border-slate-800"
                      >
                        <span>{n.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Other ZIP codes */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3">
                Other Target Lake County ZIP Codes:
              </h3>
              <ul className="space-y-2 text-xs">
                {otherZips.map((oz) => (
                  <li key={oz.code}>
                    <a
                      href={`${prefix}/zip/${oz.code}/`}
                      onClick={(e) => handleLink(e, `${prefix}/zip/${oz.code}/`)}
                      className="text-slate-300 hover:text-sky-400 flex items-center justify-between py-1 border-b border-slate-800"
                    >
                      <span>ZIP {oz.code} ({oz.areaName})</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
