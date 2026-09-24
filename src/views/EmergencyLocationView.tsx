import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import { NeighborhoodItem } from '../types';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS } from '../data/locationsData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface EmergencyLocationViewProps {
  neighborhood: NeighborhoodItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const EmergencyLocationView: React.FC<EmergencyLocationViewProps> = ({
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

  const canonicalUrl = `https://leakdetectionleesburg.com/emergency/${neighborhood.slug}/`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Emergency', url: 'https://leakdetectionleesburg.com/emergency/' },
    { name: `${neighborhood.name} Emergency`, url: canonicalUrl }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="service"
        title={`24/7 Emergency Leak Detection in ${neighborhood.name}, Leesburg, FL | 30-45 Min Response`}
        description={`Urgent water leak detection in ${neighborhood.name}, Leesburg FL (${neighborhood.zip}). 24/7 emergency dispatch arriving in 30 to 45 minutes for active slab and pipe leaks.`}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/emergency/`} onClick={(e) => handleLink(e, `${prefix}/emergency/`)} className="hover:text-white">Emergency</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-red-400 font-semibold">{neighborhood.name}</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-12 border border-red-500/40 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>CONFIRMED 30-45 MIN DISPATCH TO {neighborhood.name.toUpperCase()}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                24/7 Emergency Leak Detection in {neighborhood.name}, Leesburg, FL
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Plumbing emergency in {neighborhood.name}? Our rapid-response technicians arrive within 30 to 45 minutes to locate underground slab leaks, burst service lines, and hidden wall leaks before water ruins your home.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-extrabold px-10 py-5 rounded-2xl text-lg sm:text-xl shadow-xl shadow-red-600/30 transition-all hover:scale-105"
                >
                  <Phone className="w-6 h-6 fill-current animate-pulse" />
                  <span>Call Emergency Line: (352) 703-8206</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-red-500/30 shadow-lg">
                <VisualAsset
                  type="emergency"
                  alt={`Emergency water leak detection in ${neighborhood.name} Leesburg FL`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Local Emergency Dispatch in {neighborhood.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                In {neighborhood.name} ({neighborhood.zip}), foundation slabs rest on porous sandy soils prone to rapid subsurface erosion when high-pressure plumbing lines rupture.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Our emergency units are stocked with ground microphones, acoustic correlators, and inert tracer gas systems, ready to locate and help contain the leak on arrival.
              </p>
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 mt-4">
                <h3 className="font-bold text-white text-sm mb-2">Immediate Safety Checklist:</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <span>Turn off the domestic water main valve clockwise immediately.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <span>Switch off the electric water heater breaker in your panel.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <span>Call our Leesburg dispatcher directly at (352) 703-8206.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Emergency Services in this Area */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Emergency Leak Detection Services in {neighborhood.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOP_10_PRIORITY_SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={`${prefix}/emergency/${s.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/emergency/${s.slug}/`)}
                    className="bg-slate-800/70 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/60 hover:border-red-500/50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">Emergency {s.name}</span>
                    <ArrowRight className="w-4 h-4 text-red-400 shrink-0" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-red-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                Emergency Dispatch
              </span>
              <h3 className="text-2xl font-extrabold mb-2">
                (352) 703-8206
              </h3>
              <p className="text-xs text-red-100 mb-4">
                Confirmed arrival in {neighborhood.name} within 30 to 45 minutes.
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 px-4 rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Now</span>
              </a>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-2">
                Standard Area Page:
              </h3>
              <a
                href={`${prefix}/locations/${neighborhood.slug}/`}
                onClick={(e) => handleLink(e, `${prefix}/locations/${neighborhood.slug}/`)}
                className="text-sky-400 hover:underline text-xs font-semibold block"
              >
                View Standard Guide for {neighborhood.name} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
