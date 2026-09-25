import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Droplet,
  MapPin,
  Award,
  Wrench,
  Search,
  Activity,
  Layers,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Play
} from 'lucide-react';
import { ALL_SERVICES, TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { BLOG_POSTS } from '../data/blogsData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { TRANSLATIONS } from '../data/translations';
import { VisualAsset } from '../components/VisualAsset';
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeFaqs = [
    {
      q: 'How quickly can your technicians arrive in Leesburg?',
      a: 'We are stationed locally in Leesburg on Pa Walker Rd and provide confirmed 30-45 minute emergency arrival across all Leesburg neighborhoods and Lake County ZIP codes (call to confirm immediate availability).'
    },
    {
      q: 'Do you need to break concrete slabs or cut drywall to find a leak?',
      a: 'No. We use advanced ultrasonic acoustic listening ground microphones, high-resolution FLIR radiometric thermal imaging, and inert tracer gas to pinpoint hidden water leaks with surgical millimeter accuracy before any cutting occurs.'
    },
    {
      q: 'Do you offer upfront, transparent pricing?',
      a: 'Yes, we provide 100% upfront flat-rate diagnostic pricing before any work begins. There are zero hidden fees, zero surprise mileage surcharges, and zero exploratory demolition costs.'
    },
    {
      q: 'Are your technicians licensed and insured in Florida?',
      a: 'Yes. Leesburg Leak Detection is fully licensed under Florida State Certified Plumbing Contractor license #CFC142890 and carries comprehensive $2M general liability and workers compensation coverage.'
    },
    {
      q: 'Can you help me get a utility credit for high water bills?',
      a: 'Yes. The City of Leesburg Utilities Department grants billing adjustments for documented underground or plumbing leaks. We provide the certified diagnostic report required for your municipal credit application.'
    }
  ];

  // 6 Primary Service Cards formatted exactly like the PlumbPro grid
  const primaryServices = [
    {
      id: 'slab-leak-detection',
      name: 'Slab Leak Detection',
      desc: 'Pinpoint underground pressurized hot & cold water lines under foundation slabs.',
      visualType: 'leak_detection' as const,
      icon: Search
    },
    {
      id: 'water-service-line-leak-detection',
      name: 'Main Line Detection',
      desc: 'Locate underground yard pipe fractures between your city meter and residence.',
      visualType: 'drain_cleaning' as const,
      icon: Activity
    },
    {
      id: 'pool-leak-detection',
      name: 'Pool Leak Detection',
      desc: 'Specialized dye testing & pressure checks for Florida pools, pumps & skimmers.',
      visualType: 'pool' as const,
      icon: Droplet
    },
    {
      id: 'wall-leak-detection',
      name: 'Wall & Ceiling Leaks',
      desc: 'FLIR thermal imaging to trace moisture blooms behind drywall without cuts.',
      visualType: 'pipe_repair' as const,
      icon: Wrench
    },
    {
      id: 'high-water-bill-investigation',
      name: 'High Water Bill Forensics',
      desc: 'Meter spin diagnostics and continuous flow isolation to eliminate bill spikes.',
      visualType: 'water_heater' as const,
      icon: Layers
    },
    {
      id: 'emergency-leak-detection',
      name: '24/7 Emergency Detection',
      desc: 'Rapid emergency arrival to contain active flooding and structural damage.',
      visualType: 'toilet_repair' as const,
      icon: AlertTriangle
    }
  ];

  return (
    <div className="bg-white text-slate-800">
      <SchemaJsonLd
        type="home"
        title={t.heroHeadline}
        description={t.heroSubheadline}
        url="https://leakdetectionleesburg.com/"
        faqs={homeFaqs}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Clean Daylight White & Navy Aesthetic)    */}
      {/* ========================================================= */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition & CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold tracking-wide uppercase shadow-2xs">
                <span>Fast • Reliable • Professional</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Expert Plumbing Solutions for a{' '}
                <span className="text-sky-600">Healthier Home</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                From emergency slab leaks to complete water supply line inspections, we provide
                certified non-invasive leak detection for homes & businesses throughout Leesburg, FL.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-extrabold px-7 py-3.5 rounded-full text-base shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`${prefix}/services/slab-leak-detection/`}
                  onClick={(e) => handleLink(e, `${prefix}/services/slab-leak-detection/`)}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-3.5 rounded-full text-sm border border-slate-200 shadow-2xs transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Diagnostic Process</span>
                </a>
              </div>

              {/* 4 Trust Badges Strip Underneath */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100 text-slate-600 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Floating Emergency Badge */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
                <VisualAsset
                  type="hero_plumber"
                  alt="Certified plumber inspecting residential plumbing lines with diagnostic tools"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Emergency Box (matching PlumbPro style) */}
              <div className="absolute -bottom-6 right-2 sm:right-6 bg-[#0c2340] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-sky-900/60 max-w-xs flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center shrink-0 text-slate-950 shadow-md">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                    Need Emergency Help?
                  </div>
                  <a
                    href="tel:+13527038206"
                    className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors block font-mono"
                  >
                    (352) 703-8206
                  </a>
                  <span className="text-[11px] text-slate-300 block">Call Now · 24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR SERVICES (Clean Split Card Grid with Photos)       */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50/70 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              — OUR SERVICES —
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              We Provide Complete <span className="text-sky-600">Plumbing Services</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From small pinhole leaks to major slab foundation diagnostics, we handle it all with
              certified expertise and zero destructive demolition.
            </p>
          </div>

          {/* 6 Split Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Left text & icon (7 cols) */}
                    <div className="col-span-7 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {service.desc}
                      </p>
                      <a
                        href={`${prefix}/services/${service.id}/`}
                        onClick={(e) => handleLink(e, `${prefix}/services/${service.id}/`)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 pt-1"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Right photo thumbnail (5 cols) */}
                    <div className="col-span-5 aspect-square rounded-xl overflow-hidden shadow-2xs border border-slate-100">
                      <VisualAsset
                        type={service.visualType}
                        alt={service.name}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href={`${prefix}/services/`}
              onClick={(e) => handleLink(e, `${prefix}/services/`)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-sky-700 font-extrabold text-sm px-6 py-3 rounded-full border border-sky-200 shadow-2xs transition-colors"
            >
              <span>Explore All 22 Diagnostic Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ABOUT US SECTION (Technician Portrait & Key Stats)     */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Technician Portrait with Circular Blue Backdrop */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <VisualAsset
                  type="plumber_friendly"
                  alt="Friendly licensed master plumber technician in Leesburg Florida"
                  className="w-full h-full"
                />
              </div>

              {/* Decorative Circular Blue Badge */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-sky-100 -z-10 blur-xl" />
            </div>

            {/* Middle Column: Proposition & Checklist */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Your Local Plumbing Experts <span className="text-sky-600">You Can Trust</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Leesburg Leak Detection, we're dedicated to providing high-accuracy leak
                locating with honesty, integrity, and exceptional master plumbing workmanship. Our
                team of licensed Florida professionals is here to protect your home 24/7.
              </p>

              {/* 4 Checkmarks in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Fast & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Experienced Techs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>100% Satisfaction</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${prefix}/about/`}
                  onClick={(e) => handleLink(e, `${prefix}/about/`)}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-full shadow-xs transition-all hover:scale-[1.02]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Stat Boxes Stack */}
            <div className="lg:col-span-3 space-y-4">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-mono">15+</div>
                  <div className="text-xs font-medium text-slate-600">Years of Experience</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-mono">2500+</div>
                  <div className="text-xs font-medium text-slate-600">Happy Customers</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-mono">3500+</div>
                  <div className="text-xs font-medium text-slate-600">Projects Completed</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 font-mono">24/7</div>
                  <div className="text-xs font-medium text-slate-600">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW IT WORKS (Simple 4 Step Process with Arrows)       */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              — HOW IT WORKS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Our Simple <span className="text-sky-600">4 Step Process</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We make resolving hidden water leaks effortless, stress-free, and 100% non-invasive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 01 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-sky-300 transition-colors">
              <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center text-lg font-black font-mono mb-4 shadow-md shadow-sky-600/20">
                01
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">Book Appointment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Call or request an inspection online in under 60 seconds.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-sky-300 transition-colors">
              <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center text-lg font-black font-mono mb-4 shadow-md shadow-sky-600/20">
                02
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">We Arrive</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our certified technician arrives on time with full acoustic mobile gear.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-sky-300 transition-colors">
              <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center text-lg font-black font-mono mb-4 shadow-md shadow-sky-600/20">
                03
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">Solve the Problem</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We locate the hidden leak with acoustic precision — zero demolition.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center relative group hover:border-sky-300 transition-colors">
              <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center text-lg font-black font-mono mb-4 shadow-md shadow-sky-600/20">
                04
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-1.5">Peace of Mind</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Receive certified documentation and transparent repair solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY CHOOSE US ("The PlumbPro Difference" Navy Banner)   */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0b1f3c] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading & 5 Icon Features */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
                  — WHY CHOOSE US —
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  The Leesburg Leak <span className="text-sky-400">Difference</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  We go beyond the basics to deliver a diagnostic plumbing experience you can count
                  on — every single time.
                </p>

                {/* 5 Icons Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-slate-700/80 text-center">
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-sky-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">24/7 Response</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-sky-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">Licensed & Insured</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-sky-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">Certified Techs</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-sky-400">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">Upfront Pricing</div>
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-sky-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-slate-200">100% Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Friendly Team Photo with Script Callout */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl">
                  <VisualAsset
                    type="technicians_team"
                    alt="Leesburg Leak Detection professional diagnostic team"
                    className="w-full h-full"
                  />
                </div>

                <div className="absolute -bottom-4 right-4 bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-xl text-sm shadow-lg rotate-2">
                  Your Local Plumbing Partner!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BEFORE & AFTER CASE STUDY                              */}
      {/* ========================================================= */}
      <BeforeAfterSection />

      {/* ========================================================= */}
      {/* 7. FAQ SECTION (Split layout with tools photo & Accordion) */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Photo Card & FAQ Header */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <VisualAsset
                  type="tools"
                  alt="Professional plumbing wrenches and leak detection diagnostic tools"
                  className="w-full h-full"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
                  Got Questions? <span className="text-sky-600">We've Got Answers!</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Find quick answers to the most common leak detection and plumbing questions or
                  contact our Leesburg master plumbers for personalized assistance.
                </p>

                <a
                  href={`${prefix}/contact/`}
                  onClick={(e) => handleLink(e, `${prefix}/contact/`)}
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-xs transition-colors"
                >
                  <span>View All FAQs & Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Clean Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {homeFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-sky-600 transition-colors gap-4 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. TESTIMONIALS SECTION ("What Our Customers Say")         */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              — TESTIMONIALS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              What Our <span className="text-sky-600">Customers</span> Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real feedback from real homeowners across Lake County. Your complete satisfaction
              means everything to us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-blue-500 text-white font-black flex items-center justify-center text-sm shadow-2xs">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {testimonial.location}, FL · {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. SERVICE AREAS & GIS LEESBURG MAP                       */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              — SERVICE AREAS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Serving All of <span className="text-sky-600">Leesburg & Lake County</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stationed at 719 Pa Walker Rd for rapid 30-45 minute emergency arrival across all
              neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive / Cartographic Map */}
            <div className="lg:col-span-7">
              <InteractiveMap />
            </div>

            {/* Neighborhood Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {NEIGHBORHOODS.map((nh) => (
                <a
                  key={nh.id}
                  href={`${prefix}/locations/${nh.id}/`}
                  onClick={(e) => handleLink(e, `${prefix}/locations/${nh.id}/`)}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-sky-400 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-sky-600">
                      {nh.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">ZIP {nh.zip}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. BOTTOM BLUE WAVE CTA BANNER ("Need a Plumber Now?")    */}
      {/* ========================================================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Need a Plumber or Leak Specialist Now?
              </h2>
              <p className="text-sky-100 text-xs sm:text-sm leading-relaxed">
                Get fast, reliable, and professional leak locating services. We're available 24/7 for
                all your emergency plumbing needs in Leesburg, FL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="tel:+13527038206"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-full text-sm shadow-md hover:scale-[1.02] transition-transform"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-sky-200">Call Us Anytime</div>
                  <a
                    href="tel:+13527038206"
                    className="text-white hover:text-amber-300 font-extrabold text-sm sm:text-base font-mono block"
                  >
                    (352) 703-8206
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
