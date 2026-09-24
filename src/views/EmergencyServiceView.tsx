import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Clock, CheckCircle2, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import { ServiceItem } from '../types';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS } from '../data/locationsData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface EmergencyServiceViewProps {
  service: ServiceItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const EmergencyServiceView: React.FC<EmergencyServiceViewProps> = ({
  service,
  lang,
  onNavigate
}) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canonicalUrl = `https://leakdetectionleesburg.com/emergency/${service.slug}/`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Emergency', url: 'https://leakdetectionleesburg.com/emergency/' },
    { name: `Emergency ${service.name}`, url: canonicalUrl }
  ];

  const emergencyServiceFaqs = [
    {
      q: `How quickly can you dispatch for emergency ${service.name.toLowerCase()}?`,
      a: 'We maintain 24/7 on-call mobile vans stationed in Leesburg. Confirmed arrival time is 30 to 45 minutes from the moment you call.'
    },
    {
      q: `What is the immediate risk of delaying emergency ${service.name.toLowerCase()}?`,
      a: 'In Florida sandy soil, high-pressure water leaks quickly wash away sub-slab fill, causing foundation cracking, floor tile tenting, and expensive structural repairs.'
    },
    {
      q: `Can you contain the leak without tearing up our floors?`,
      a: 'Yes. Our ultrasonic acoustic sensors and thermal cameras locate the pipe rupture non-invasively, allowing surgical spot access or overhead bypass.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="service"
        title={`24/7 Emergency ${service.name} in Leesburg, FL | Rapid 30-45 Min Arrival`}
        description={`Urgent 24/7 emergency ${service.name.toLowerCase()} in Leesburg, FL. Non-invasive acoustic locating and emergency water containment within 30-45 minutes.`}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
        faqs={emergencyServiceFaqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/emergency/`} onClick={(e) => handleLink(e, `${prefix}/emergency/`)} className="hover:text-white">Emergency</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-red-400 font-semibold">{service.name}</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-12 border border-red-500/40 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>CONFIRMED 30-45 MIN DISPATCH · 24/7 RAPID RESPONSE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                24/7 Emergency {service.name} in Leesburg, FL
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Facing an urgent {service.name.toLowerCase()} crisis? Our emergency diagnostic units are dispatched immediately from Pa Walker Rd, arriving on-site in 30-45 minutes to stop active water destruction.
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
                  alt={`24/7 Emergency ${service.name} in Leesburg FL`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Guidance & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Immediate Action Plan for Emergency {service.name}
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <p>
                  When {service.name.toLowerCase()} emergencies strike, pressurized water escapes at up to 10 gallons per minute. Every minute of delay allows water to migrate beneath concrete slabs or into drywall cavities.
                </p>
                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-2">Emergency Protocols En Route:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span>Shut down the main water valve (quarter-turn clockwise).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span>Switch off electric water heater circuit breaker to protect heating elements.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span>Clear flooring and keep pets and family away from wet electrical areas.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Call Our Emergency Response Team?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-1">Confirmed 30-45 Min Response</h3>
                  <p className="text-xs text-slate-400">Stationed locally on Pa Walker Rd, ready to deploy immediately.</p>
                </div>
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-1">Non-Invasive Equipment</h3>
                  <p className="text-xs text-slate-400">Ultrasonic listening gear locates leaks without blind jackhammering.</p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Emergency {service.name} FAQs
              </h2>
              <div className="space-y-4">
                {emergencyServiceFaqs.map((faq, i) => (
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
            <div className="bg-red-600 rounded-2xl p-6 text-white text-center shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                Emergency Dispatch
              </span>
              <h3 className="text-2xl font-extrabold mb-2">
                (352) 703-8206
              </h3>
              <p className="text-xs text-red-100 mb-4">
                Confirmed arrival time is 30 to 45 minutes in Leesburg, FL.
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 px-4 rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Now</span>
              </a>
            </div>

            {/* Link back to standard service */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-2">
                Standard Service Guide:
              </h3>
              <a
                href={`${prefix}/services/${service.slug}/`}
                onClick={(e) => handleLink(e, `${prefix}/services/${service.slug}/`)}
                className="text-sky-400 hover:underline text-xs font-semibold block"
              >
                View Full Non-Emergency {service.name} Overview →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
