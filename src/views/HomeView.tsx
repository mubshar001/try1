import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Zap, CheckCircle2, AlertTriangle, Droplets, MapPin, Award } from 'lucide-react';
import { ALL_SERVICES, TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { BLOG_POSTS } from '../data/blogsData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { TRANSLATIONS } from '../data/translations';
import { VisualAsset } from '../components/VisualAsset';
import { StandardsSlider } from '../components/StandardsSlider';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { InteractiveMap } from '../components/InteractiveMap';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface HomeViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeFaqs = [
    {
      q: 'How quickly can your leak detection technicians arrive in Leesburg?',
      a: 'We are stationed locally in Leesburg and provide confirmed 30-45 minute emergency arrival across all Leesburg neighborhoods and Lake County ZIP codes.'
    },
    {
      q: 'Do you need to break my concrete slab or walls to find a leak?',
      a: 'No. We use advanced ultrasonic acoustic listening ground microphones, high-resolution FLIR thermal imaging, and inert tracer gas to locate hidden water leaks non-invasively before any cutting or digging.'
    },
    {
      q: 'What causes slab leaks in Central Florida homes?',
      a: 'Central Florida sandy soil contains minerals that react with copper pipes (electrolysis). Coupled with thermal expansion and pipe friction against concrete aggregates, pinholes develop under monolithic slabs over time.'
    },
    {
      q: 'Can you help me get a credit on my high Leesburg water bill?',
      a: 'Yes. The City of Leesburg Utilities Department grants billing adjustments for documented underground or plumbing leaks. We provide the certified diagnostic report required for your credit application.'
    },
    {
      q: 'Are you licensed and insured in Florida?',
      a: 'Yes, Leesburg Leak Detection is fully licensed under Florida State Certified Plumbing Contractor #CFC142890 and carries comprehensive general liability and workers compensation coverage.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      <SchemaJsonLd
        type="home"
        title={t.heroHeadline}
        description={t.heroSubheadline}
        url="https://leakdetectionleesburg.com/"
        faqs={homeFaqs}
      />

      {/* 3. HERO SECTION */}
      <section className="relative pt-10 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Emergency Banner */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                <span>24/7 Available · Confirmed Arrival: 30-45 Minutes (Call to Confirm Availability)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t.heroSubheadline}
              </p>

              {/* Primary Call Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>{t.requestCallBtn}</span>
                </a>

                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl text-sm sm:text-base border border-slate-700 transition-colors"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>{t.emergencyBtn}</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Zero Destruction Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  FL State Licensed Contractor
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Ultrasonic & FLIR Certified
                </span>
              </div>
            </div>

            {/* Right Column: Visual Carrier */}
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <VisualAsset
                  type="hero"
                  alt="Leesburg Leak Detection rapid response vehicle equipped with ultrasonic acoustic water leak detection instrumentation"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / VALUE STRIP */}
      <section className="bg-slate-900/60 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono block">
                30-45 Min
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Confirmed Emergency Arrival
              </span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono block">
                100%
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Non-Invasive Electronic Locating
              </span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono block">
                24/7/365
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Always Available Live Dispatch
              </span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono block">
                $0
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Destructive Exploratory Demolition
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                Local Leesburg Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                About Leesburg Leak Detection
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Headquartered at 719 Pa Walker Rd, Leesburg, FL 34748, our specialized team is dedicated exclusively to subsurface water leak detection and forensic plumbing diagnostics. We protect Central Florida homes and businesses from the devastating structural consequences of concealed pipe leaks.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Central Florida unique sandy terrain and limestone bedrock present specific challenges: underground leaks frequently channel water deep into sub-slab soil rather than pooling on top of floors. By deploying multi-frequency acoustic correlators, high-resolution FLIR thermal cameras, and inert tracer gas systems, we locate the exact coordinate of sub-slab, yard, wall, and swimming pool leaks within inches.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <h3 className="font-bold text-white text-sm mb-1">State Certified Plumbers</h3>
                  <p className="text-xs text-slate-400">Master plumbers holding Florida CFC licenses with extensive diagnostic training.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <h3 className="font-bold text-white text-sm mb-1">Insurance & Utility Support</h3>
                  <p className="text-xs text-slate-400">Comprehensive digital reports to substantiate homeowner claims and city bill credits.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <VisualAsset
                  type="acoustic"
                  alt="Ultrasonic acoustic pipe leak detector in Leesburg, Florida"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW (Top Priority + All 22) */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Comprehensive Water & Pipe Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.topPriorityTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide 22 specialized diagnostic and remediation services tailored to Florida residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {TOP_10_PRIORITY_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-6 border border-slate-700/60 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                    <span className="font-mono text-sky-400 font-bold uppercase">
                      Priority Service
                    </span>
                    <span className="text-emerald-400 font-semibold">24/7 Available</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {s.shortDesc}
                  </p>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {s.subServices.slice(0, 3).map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <a
                    href={`${prefix}/services/${s.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/services/${s.slug}/`)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Service Guide</span>
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

          {/* Link to All 22 Services Hub */}
          <div className="text-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">
              Looking for our Complete Line of 22 Services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-4">
              Explore pool leak detection, attic pipes, commercial grease interceptor lift stations, sewer clearing, and municipal water meter audits.
            </p>
            <a
              href={`${prefix}/services/`}
              onClick={(e) => handleLink(e, `${prefix}/services/`)}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl border border-slate-700 transition-colors text-sm"
            >
              <span>View All 22 Specialized Leak Detection Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              The Non-Invasive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.whyChooseUsTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Why Leesburg homeowners trust our non-invasive acoustic technology over traditional exploratory destruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Acoustic Pinpoint Precision
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our high-frequency hydrophones isolate pipe friction frequencies through concrete slabs and yards, mapping leaks to within inches.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Upfront Pricing & Zero Hidden Fees
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clear flat-rate diagnostic quotes before work begins. No bait-and-switch pricing or mystery travel charges anywhere in Lake County.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Confirmed 30-45 Min Response
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Emergency mobile units with full gear deployed 24/7/365 across Leesburg for urgent water cutoffs and slab leaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              4-Step Diagnostic Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              How Our Non-Invasive Process Works
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From the moment you call (352) 703-8206, our systematic diagnostic procedure guarantees zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 flex flex-col">
              <span className="text-3xl font-extrabold text-sky-400 font-mono mb-2">01</span>
              <h3 className="text-lg font-bold text-white mb-2">Call & Rapid Dispatch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our local Leesburg dispatch team. We guide you through main water shutoff safety and dispatch a mobile unit in 30-45 minutes.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 flex flex-col">
              <span className="text-3xl font-extrabold text-sky-400 font-mono mb-2">02</span>
              <h3 className="text-lg font-bold text-white mb-2">System Pressure Isolation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calibrated pressure gauges test individual potable, irrigation, and pool loops to isolate the exact compromised system sector.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 flex flex-col">
              <span className="text-3xl font-extrabold text-sky-400 font-mono mb-2">03</span>
              <h3 className="text-lg font-bold text-white mb-2">Acoustic & FLIR Scanning</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ultrasonic listening sensors and infrared cameras detect acoustic frequency spikes and evaporative temperature blooms behind walls or slabs.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 flex flex-col">
              <span className="text-3xl font-extrabold text-sky-400 font-mono mb-2">04</span>
              <h3 className="text-lg font-bold text-white mb-2">Pinpoint Mark & Repair Plan</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We physically mark the exact coordinate on the floor or yard, providing surgical repair options and full insurance reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EMERGENCY SERVICES SECTION */}
      <section className="py-16 bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-950 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>24/7 LEESBURG EMERGENCY PLUMBING DISPATCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Active Water Leak Flooding Your Home Right Now?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every minute an active slab leak or burst water main runs, thousands of gallons wash away foundation sand under your home. Our rapid emergency response units arrive in 30-45 minutes with full diagnostic and emergency isolation equipment.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-red-600/30 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call Emergency Line: (352) 703-8206</span>
                </a>
                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Emergency Protocols</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-red-500/30">
                <VisualAsset
                  type="emergency"
                  alt="24/7 Emergency water leak detection response unit in Leesburg FL"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER */}
      <BeforeAfterSection />

      {/* 11. BRANDS WE SERVICE */}
      <section className="py-12 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-6">
            Equipment & System Brands We Service & Inspect
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75">
            {['Flo by Moen', 'FLIR Systems', 'Uponor PEX', 'Moen', 'Kohler', 'Rheem', 'Hayward Pools', 'Pentair', 'NIBCO', 'Zurn Commercial'].map((brand) => (
              <span key={brand} className="text-sm sm:text-base font-bold text-slate-300 font-mono tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SERVICE STANDARDS / VERIFIED AWARDS SLIDER */}
      <StandardsSlider />

      {/* 13. CITY SPOTLIGHT */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                Local Hydrology & Geological Context
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                City Spotlight: Leesburg & Lake County, Florida
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Leesburg, Florida, nestled between Lake Harris and Lake Griffin along the scenic Harris Chain of Lakes, features unique geological characteristics governed by the Upper Floridan Aquifer.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Unlike northern regions with dense clay soils, Lake County soil consists largely of deep, porous sand overlying soluble limestone karst bedrock. When an underground potable supply line or slab-on-grade copper pipe fractures, water immediately migrates downward through permeable sandy subsoil rather than surfacing as a puddle.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                This geological reality means a home can lose 5,000 gallons per day beneath its slab without visible interior pooling until foundation footers shift or utility bills spike. Electronic acoustic listening is the only proven method to pinpoint subterranean leaks before catastrophic void formation occurs.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60">
                  Elevation: 75-120 ft MSL
                </span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60">
                  Upper Floridan Aquifer System
                </span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60">
                  Lake County Utility Sector
                </span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <VisualAsset
                  type="thermal"
                  alt="Infrared thermography scan revealing hidden pipe leak in Leesburg FL home"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. SERVICE AREAS & INTERACTIVE MAP */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Local Dispatch Across Lake County
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.serviceAreasTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our rapid dispatch zones across Downtown, Briarwood, Woodland Hills, Rolling Meadows, Southside, Bridgewater, and all Leesburg ZIP codes.
            </p>
          </div>

          <InteractiveMap onSelectNeighborhood={(slug) => onNavigate(`/locations/${slug}/`)} />
        </div>
      </section>

      {/* 15. CUSTOMER FEEDBACK */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Verified Real Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.customerFeedbackTitle}
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
              <span className="text-sm font-bold text-white ml-2">5.0 / 5.0 (48 Verified Reviews)</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              Certified customer feedback across Leesburg residential and commercial leak detection projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 italic">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/60">
                  <span className="text-sm font-bold text-white block">{rev.author}</span>
                  <span className="text-xs text-sky-400 block">{rev.service}</span>
                  <span className="text-xs text-slate-400 block">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. BLOG TEASER */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Homeowner Plumbing Education
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {t.latestBlogsTitle}
              </h2>
            </div>
            <a
              href={`${prefix}/blogs/`}
              onClick={(e) => handleLink(e, `${prefix}/blogs/`)}
              className="text-sky-400 hover:text-sky-300 font-bold inline-flex items-center gap-1.5 text-sm"
            >
              <span>View All 20 Knowledge Articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="text-sky-400 font-medium truncate">{post.cluster}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`${prefix}/blogs/${post.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/blogs/${post.slug}/`)}
                    className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-slate-400">{post.publishDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQS */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.faqTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Clear answers regarding our non-invasive leak location procedures, pricing, and emergency response in Leesburg.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/60">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-t from-slate-900 to-slate-950 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            24/7 Rapid Local Service
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            {t.readyToHelpTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Do not let a hidden water leak destroy your foundation or inflate your utility bills. Speak directly with a licensed leak detection specialist right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13527038206"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-10 py-4 rounded-xl text-lg shadow-xl shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call (352) 703-8206</span>
            </a>
            <a
              href={`${prefix}/contact/`}
              onClick={(e) => handleLink(e, `${prefix}/contact/`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-base border border-slate-700 transition-colors"
            >
              <span>Schedule Inspection Online</span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
            <span>·</span>
            <span>Confirmed 30-45 Min Emergency Response</span>
            <span>·</span>
            <span>CFC Licensed & Insured</span>
          </div>
        </div>
      </section>
    </div>
  );
};
