import React from 'react';
import { ShieldCheck, Award, Wrench, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';
import { VisualAsset } from '../components/VisualAsset';
import { StandardsSlider } from '../components/StandardsSlider';

interface AboutViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'About Us', url: 'https://leakdetectionleesburg.com/about/' }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="about"
        title="About Leesburg Leak Detection | Licensed Florida Plumbing Contractor"
        description="Learn about Leesburg Leak Detection. Our background, Florida CFC master plumbing license, non-invasive acoustic mission, and 24/7 emergency response commitment."
        url="https://leakdetectionleesburg.com/about/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">About Us</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 block">
                719 PA WALKER RD, LEESBURG, FL 34748
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About Leesburg Leak Detection
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Founded with a singular engineering mission: to replace destructive exploratory sledgehammer plumbing with ultra-precise ultrasonic, thermal, and electronic acoustic diagnostics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-3.5 rounded-full text-base shadow-sm transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call (352) 703-8206</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <VisualAsset
                  type="plumber_friendly"
                  alt="Leesburg Leak Detection headquarters and mobile service unit in Leesburg, Florida"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Story & Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Our Journey & Dedication to Central Florida Property Owners
            </h2>
            <p>
              For decades, homeowners faced with hidden water leaks were subjected to traumatic experiences. Plumbers would smash through beautiful tile floors, custom kitchen cabinetry, and monolithic concrete foundation slabs merely guessing where a pinhole copper leak might be located.
            </p>
            <p>
              Leesburg Leak Detection was established to permanently eliminate guesswork. Operating from our central headquarters at 719 Pa Walker Rd, Leesburg, FL 34748, we equipped our certified master plumbers with laboratory-grade acoustic correlators, ground hydrophones, FLIR infrared thermography cameras, and non-toxic inert tracer gas sniffers.
            </p>
            <p>
              Today, we isolate the exact coordinate of sub-slab, in-wall, swimming pool, and underground yard leaks within a 1-foot target. Rather than demolishing your home, our surgical findings enable minimal spot repairs or overhead PEX reroutes that protect your investment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-center shadow-2xs">
                <span className="text-2xl font-bold text-sky-700 font-mono block mb-1">CFC142890</span>
                <span className="text-xs text-slate-500">Florida State Certified Master Plumber License</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-center shadow-2xs">
                <span className="text-2xl font-bold text-sky-700 font-mono block mb-1">30-45 Min</span>
                <span className="text-xs text-slate-500">Confirmed Emergency Arrival Time in Lake County</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-center shadow-2xs">
                <span className="text-2xl font-bold text-sky-700 font-mono block mb-1">5.0 ★</span>
                <span className="text-xs text-slate-500">48+ Verified Leesburg Customer Testimonials</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Our Core Values</h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Non-Invasive Integrity</strong>
                    <span>We never destroy flooring or walls when acoustic and thermal instruments can pinpoint the source.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Transparent Pricing</strong>
                    <span>Flat-rate diagnostic pricing with zero surprise charges or unneeded repair upselling.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">24/7 Availability</strong>
                    <span>Real technicians answering calls 24 hours a day, 365 days a year across Lake County.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <StandardsSlider />
      </div>
    </div>
  );
};
