import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { NeighborhoodItem } from '../types';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { VisualAsset } from '../components/VisualAsset';
import { InteractiveMap } from '../components/InteractiveMap';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface LocationDetailViewProps {
  neighborhood: NeighborhoodItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const LocationDetailView: React.FC<LocationDetailViewProps> = ({
  neighborhood,
  lang,
  onNavigate
}) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canonicalUrl = `https://leakdetectionleesburg.com/locations/${neighborhood.slug}/`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Locations', url: 'https://leakdetectionleesburg.com/locations/' },
    { name: neighborhood.name, url: canonicalUrl }
  ];

  const locationFaqs = [
    {
      q: `What is the emergency response time to ${neighborhood.name}?`,
      a: `Our emergency mobile leak detection units are based locally in Leesburg and arrive at homes in ${neighborhood.name} within 30 to 45 minutes.`
    },
    {
      q: `What are the most common leak causes in ${neighborhood.name}?`,
      a: `Because ${neighborhood.name} features slab-on-grade foundations and porous sandy soil, underground pipe friction, tree root encroachment, and sub-slab copper electrolysis are the most common leak causes.`
    },
    {
      q: `Do you provide certified reports for the City of Leesburg Utilities?`,
      a: `Yes, we provide official licensed contractor diagnostic documentation required by Leesburg Utilities to qualify for leak adjustment credits on high water and sewer bills.`
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="location"
        title={`Leak Detection in ${neighborhood.name}, Leesburg, FL | 24/7 Water & Slab Specialists`}
        description={`Precision non-invasive water and slab leak detection in ${neighborhood.name}, Leesburg, FL (${neighborhood.zip}). 24/7 rapid 30-45 minute emergency response.`}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
        faqs={locationFaqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/locations/`} onClick={(e) => handleLink(e, `${prefix}/locations/`)} className="hover:text-white">Locations</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">{neighborhood.name}</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>LEESBURG, FL · ZIP {neighborhood.zip}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Leak Detection in {neighborhood.name}, Leesburg, FL
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                24/7 non-invasive acoustic and thermal water leak detection serving residential and commercial properties in {neighborhood.name}. Confirmed emergency arrival in 30-45 minutes.
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
                  <span>24/7 Dispatch (30-45 Min)</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <VisualAsset
                  type="map"
                  alt={`Map and service presence in ${neighborhood.name}, Leesburg FL`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Local Overview & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Neighborhood Plumbing Architecture & Geological Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {neighborhood.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-2">Key Architectural Features:</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {neighborhood.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-2">Local Plumbing Risks:</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {neighborhood.localRisks.map((lr, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{lr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Top 10 Services Available in this Neighborhood */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Priority Leak Detection Services Available in {neighborhood.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOP_10_PRIORITY_SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={`${prefix}/${neighborhood.slug}-${s.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/${neighborhood.slug}-${s.slug}/`)}
                    className="bg-slate-800/70 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/60 hover:border-sky-500/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        {s.name} in {neighborhood.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                        {s.shortDesc}
                      </p>
                    </div>
                    <span className="text-xs text-sky-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Combo Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Interactive Map Component */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Dispatch Proximity & Map for {neighborhood.name}
              </h2>
              <InteractiveMap activeNeighborhoodSlug={neighborhood.slug} />
            </section>

            {/* FAQs */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Frequently Asked Questions for {neighborhood.name}
              </h2>
              <div className="space-y-4">
                {locationFaqs.map((faq, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <h3 className="text-sm font-bold text-white mb-1.5">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-sky-500 rounded-2xl p-6 text-slate-950 text-center shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                24/7 Dispatch
              </span>
              <h3 className="text-xl font-extrabold mb-2">
                Need Fast Help in {neighborhood.name}?
              </h3>
              <p className="text-xs font-medium text-slate-900 mb-4">
                Confirmed arrival within 30 to 45 minutes.
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 px-4 rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (352) 703-8206</span>
              </a>
            </div>

            {/* Other Neighborhoods */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3">
                Other Leesburg Service Areas:
              </h3>
              <ul className="space-y-2 text-xs">
                {NEIGHBORHOODS.filter((n) => n.slug !== neighborhood.slug).map((on) => (
                  <li key={on.slug}>
                    <a
                      href={`${prefix}/locations/${on.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/locations/${on.slug}/`)}
                      className="text-slate-300 hover:text-sky-400 flex items-center justify-between py-1 border-b border-slate-800"
                    >
                      <span>{on.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target ZIP reference */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-2">
                Primary ZIP Code:
              </h3>
              <a
                href={`${prefix}/zip/${neighborhood.zip}/`}
                onClick={(e) => handleLink(e, `${prefix}/zip/${neighborhood.zip}/`)}
                className="text-sky-400 hover:underline text-xs font-mono font-bold block"
              >
                View Full Coverage for ZIP {neighborhood.zip} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
