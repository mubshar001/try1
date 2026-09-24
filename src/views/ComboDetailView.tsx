import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, ChevronRight, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { ServiceItem, NeighborhoodItem } from '../types';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { BLOG_POSTS } from '../data/blogsData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface ComboDetailViewProps {
  service: ServiceItem;
  neighborhood: NeighborhoodItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ComboDetailView: React.FC<ComboDetailViewProps> = ({
  service,
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

  const comboTitle = `${service.name} in ${neighborhood.name}, Leesburg, FL`;
  const canonicalUrl = `https://leakdetectionleesburg.com/${neighborhood.slug}-${service.slug}/`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Locations', url: 'https://leakdetectionleesburg.com/locations/' },
    { name: neighborhood.name, url: `https://leakdetectionleesburg.com/locations/${neighborhood.slug}/` },
    { name: service.name, url: canonicalUrl }
  ];

  const comboFaqs = [
    {
      q: `How quickly can you arrive in ${neighborhood.name} for ${service.name}?`,
      a: `Our emergency mobile units are dispatched locally from Pa Walker Rd and arrive on-site in ${neighborhood.name} within 30 to 45 minutes.`
    },
    {
      q: `What causes ${service.name.toLowerCase()} issues specifically in ${neighborhood.name}?`,
      a: `In ${neighborhood.name}, ${neighborhood.description.toLowerCase()} Combined with Lake County sandy soil and mineral reactions on copper tubing, subterranean leaks develop over time.`
    },
    {
      q: `Will you damage my floors during ${service.name.toLowerCase()} in ${neighborhood.name}?`,
      a: `Never. We use ultrasonic frequency sensors and FLIR thermal cameras to pinpoint the leak coordinate to within inches before any surgical access.`
    }
  ];

  const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== neighborhood.slug);
  const otherPriorityServices = TOP_10_PRIORITY_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5);

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="service"
        title={`${comboTitle} | 24/7 Precision Non-Invasive Locating`}
        description={`Expert ${service.name} in ${neighborhood.name}, Leesburg FL (${neighborhood.zip}). 24/7 non-invasive acoustic locating with rapid 30-45 minute emergency arrival.`}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
        faqs={comboFaqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/locations/`} onClick={(e) => handleLink(e, `${prefix}/locations/`)} className="hover:text-white">Locations</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/locations/${neighborhood.slug}/`} onClick={(e) => handleLink(e, `${prefix}/locations/${neighborhood.slug}/`)} className="hover:text-white">{neighborhood.name}</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">{service.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>LEESBURG ZIP {neighborhood.zip} · {neighborhood.name.toUpperCase()}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {comboTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialized non-invasive acoustic and thermal {service.name.toLowerCase()} tailored to the architectural foundation styles and plumbing systems of {neighborhood.name}.
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
                  <span>30-45 Min Emergency Dispatch</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <VisualAsset
                  type="acoustic"
                  alt={`${service.name} in ${neighborhood.name}, Leesburg FL`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Localized Context & Engineering Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Localized {service.name} Insights for {neighborhood.name} Residents
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                In {neighborhood.name}, properties are built upon Lake County sandy soils overlying limestone karst geology. {neighborhood.description}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                When water pipes leak beneath foundation slabs or lawns in {neighborhood.name}, water typically seeps straight down into sandy strata rather than pooling visibly. This silent subterranean flow washes away soil supporting foundation footings and concrete driveways.
              </p>
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 mt-4">
                <h3 className="font-bold text-white text-sm mb-2">Local Neighborhood Hazards:</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {neighborhood.localRisks.map((risk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sub-services & Process */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Precision Diagnostic Process in {neighborhood.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {service.subServices.map((sub, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{sub}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {service.process.slice(0, 3).map((st) => (
                  <div key={st.step} className="flex gap-3 text-xs sm:text-sm">
                    <span className="font-mono text-sky-400 font-bold shrink-0">{st.step}.</span>
                    <span className="text-slate-300"><strong className="text-white">{st.title}:</strong> {st.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Frequently Asked Questions in {neighborhood.name}
              </h2>
              <div className="space-y-4">
                {comboFaqs.map((faq, i) => (
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
            {/* Call card */}
            <div className="bg-sky-500 rounded-2xl p-6 text-slate-950 text-center shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                Local Dispatch
              </span>
              <h3 className="text-xl font-extrabold mb-2">
                Emergency in {neighborhood.name}?
              </h3>
              <p className="text-xs font-medium text-slate-900 mb-4">
                Technicians dispatched from Pa Walker Rd arrive in 30 to 45 minutes.
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 px-4 rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (352) 703-8206</span>
              </a>
            </div>

            {/* Other Neighborhoods for this Service */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3">
                {service.name} in Other Areas:
              </h3>
              <ul className="space-y-2 text-xs">
                {otherNeighborhoods.map((on) => (
                  <li key={on.slug}>
                    <a
                      href={`${prefix}/${on.slug}-${service.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/${on.slug}-${service.slug}/`)}
                      className="text-slate-300 hover:text-sky-400 flex items-center justify-between py-1 border-b border-slate-800"
                    >
                      <span>{on.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services in this Neighborhood */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3">
                Other Services in {neighborhood.name}:
              </h3>
              <ul className="space-y-2 text-xs">
                {otherPriorityServices.map((ops) => (
                  <li key={ops.slug}>
                    <a
                      href={`${prefix}/${neighborhood.slug}-${ops.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/${neighborhood.slug}-${ops.slug}/`)}
                      className="text-slate-300 hover:text-sky-400 flex items-center justify-between py-1 border-b border-slate-800"
                    >
                      <span className="truncate">{ops.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target ZIP reference */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-sm font-bold text-white mb-2">
                Service ZIP Code:
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
