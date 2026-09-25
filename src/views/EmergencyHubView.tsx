import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface EmergencyHubViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const EmergencyHubView: React.FC<EmergencyHubViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emergencyFaqs = [
    {
      q: 'What should I do immediately while waiting for your emergency technician?',
      a: '1. Locate your main domestic water shutoff valve (usually near your front hose bibb or garage water heater) and turn it a quarter-turn clockwise to stop pressurized water flow.\n2. Turn off the circuit breaker to your electric water heater to prevent element burnout.\n3. Move sensitive furniture and electronics away from damp areas.\n4. Take initial photos and video of standing water for your insurance claim.'
    },
    {
      q: 'How fast will a technician arrive at my home in Leesburg?',
      a: 'Our emergency units are stationed in Leesburg and confirmed arrival time is 30 to 45 minutes across all local neighborhoods and Lake County service ZIPs (call to confirm immediate availability).'
    },
    {
      q: 'Do you charge extra for nights, weekends, or holidays?',
      a: 'We provide 24/7/365 emergency dispatch with transparent, upfront pricing. Our technicians review flat-rate diagnostic fees with you over the phone before dispatch.'
    },
    {
      q: 'Can you detect a leak if the main water is shut off?',
      a: 'When our technician arrives, we temporarily pressurize specific isolated loops with test gauges or inert tracer gas to locate the leak safely without flooding your home.'
    }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="service"
        title="24/7 Emergency Water Leak Detection in Leesburg, FL | Rapid 30-45 Min Response"
        description="Immediate 24/7 emergency water and slab leak detection in Leesburg, Florida. Rapid 30-45 minute confirmed arrival. Non-invasive acoustic locating and urgent water cutoff."
        url="https://leakdetectionleesburg.com/emergency/"
        faqs={emergencyFaqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-amber-600 font-bold">24/7 Emergency Dispatch</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                <span>24/7 RAPID DISPATCH FLEET · CONFIRMED 30-45 MIN ARRIVAL</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                24/7 Emergency Water Leak Detection in Leesburg, FL
              </h1>
              <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                Active slab leaks, burst water mains, and sudden flooding require immediate professional intervention. Our fully-equipped emergency vans arrive on-site within 30 to 45 minutes to locate and isolate the source before structural damage spreads (call to confirm availability).
              </p>
              <div className="pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-10 py-5 rounded-full text-lg sm:text-xl shadow-xl shadow-black/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-6 h-6 fill-slate-950 animate-pulse" />
                  <span>Call Emergency Dispatch: (352) 703-8206</span>
                </a>
              </div>
              <p className="text-xs text-red-100">
                Operating 24 Hours a Day · 7 Days a Week · 365 Days a Year Across All Lake County Neighborhoods.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <VisualAsset
                  type="emergency"
                  alt="24/7 Emergency water leak detection response unit in Leesburg FL"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Safety Guidance */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-8 mb-12 shadow-2xs">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Immediate Homeowner Safety Guidance: What To Do Right Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-2xs">
              <span className="font-mono text-amber-600 font-extrabold text-base block mb-1">01. Shut Off Main</span>
              <p className="text-slate-600">Turn main shutoff valve clockwise a quarter-turn (located near front hose bibb or garage) to halt pressurized water.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-2xs">
              <span className="font-mono text-amber-600 font-extrabold text-base block mb-1">02. Kill Water Heater</span>
              <p className="text-slate-600">Flip the circuit breaker to your water heater. Running dry elements causes electrical burnout and hazards.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-2xs">
              <span className="font-mono text-amber-600 font-extrabold text-base block mb-1">03. Clear Area</span>
              <p className="text-slate-600">Move rugs, furniture, electronics, and documents away from moisture-compromised floors and walls.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-2xs">
              <span className="font-mono text-amber-600 font-extrabold text-base block mb-1">04. Call Our Dispatch</span>
              <p className="text-slate-600">Call (352) 703-8206. Our local Leesburg van will be en route immediately with acoustic gear.</p>
            </div>
          </div>
        </div>

        {/* When to Call & What Happens Next */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                When Should You Call For Emergency Leak Detection?
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Active Flooring Flood or Foundation Moisture:</strong> Water bubbling through tile grout, damp carpet, or warm spots spreading under vinyl planks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Spinning Water Meter Dial with All Valves Closed:</strong> Indicates high-volume subterranean water loss threatening sinkholes or foundation washout.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Ceiling Drywall Sagging or Staining:</strong> Immediate collapse risk from upstairs pipe rupture or AC condensate overflow.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Commercial Kitchen or Sump Backup:</strong> Sewage or wastewater overflows halting business operations and causing health hazards.</span>
                </li>
              </ul>
            </section>

            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                What Happens Next Once You Call (352) 703-8206?
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-sky-700 block mb-1">Step 1: Immediate Triage & Safety Guidance</span>
                  <p className="text-slate-600">Our dispatcher assesses your emergency, provides valve isolation instructions, and dispatches the closest mobile unit.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-sky-700 block mb-1">Step 2: On-Site Arrival in 30 to 45 Minutes</span>
                  <p className="text-slate-600">A certified master plumber arrives in a fully equipped service vehicle with ultrasonic sensors and thermal cameras.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-sky-700 block mb-1">Step 3: Acoustic Pinpointing & Emergency Containment</span>
                  <p className="text-slate-600">We isolate lines, listen through concrete or drywall, and pinpoint the leak coordinate within inches.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-sky-700 block mb-1">Step 4: Certified Insurance Documentation</span>
                  <p className="text-slate-600">You receive comprehensive photo and acoustic documentation to expedite your insurance claim.</p>
                </div>
              </div>
            </section>

            {/* Emergency FAQs */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Emergency Leak Detection FAQs
              </h2>
              <div className="space-y-4">
                {emergencyFaqs.map((faq, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Emergency Service Links & Neighborhoods */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-red-600 rounded-3xl p-6 sm:p-8 text-white text-center shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                Direct Emergency Line
              </span>
              <h3 className="text-2xl font-extrabold mb-2 font-mono">
                (352) 703-8206
              </h3>
              <p className="text-xs text-red-100 mb-4">
                24/7 Available · Confirmed Arrival in 30-45 Minutes (Call to Confirm).
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-4 rounded-full text-sm transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Emergency Dispatch Now</span>
              </a>
            </div>

            {/* Emergency by Service */}
            <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <h3 className="text-sm font-extrabold text-slate-900 mb-3">
                Emergency Service Specialties:
              </h3>
              <ul className="space-y-2 text-xs">
                {TOP_10_PRIORITY_SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`${prefix}/emergency/${s.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/emergency/${s.slug}/`)}
                      className="text-slate-600 hover:text-sky-600 flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium"
                    >
                      <span>Emergency {s.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency by Neighborhood */}
            <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <h3 className="text-sm font-extrabold text-slate-900 mb-3">
                Emergency Response by Area:
              </h3>
              <ul className="space-y-2 text-xs">
                {NEIGHBORHOODS.map((n) => (
                  <li key={n.slug}>
                    <a
                      href={`${prefix}/emergency/${n.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/emergency/${n.slug}/`)}
                      className="text-slate-600 hover:text-sky-600 flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium"
                    >
                      <span>{n.name} (30-45 Min)</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
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
