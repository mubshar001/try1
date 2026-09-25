import React from 'react';
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, MapPin, ChevronRight, FileText } from 'lucide-react';
import { ServiceItem } from '../types';
import { ALL_SERVICES, TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS } from '../data/locationsData';
import { BLOG_POSTS } from '../data/blogsData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface ServiceDetailViewProps {
  service: ServiceItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
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

  const relatedServices = ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const relatedBlogs = BLOG_POSTS.filter((b) => b.relatedServiceSlug === service.slug || b.relatedServiceSlug === 'leak-detection').slice(0, 3);
  const relevantTestimonials = TESTIMONIALS.slice(0, 2);

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Services', url: 'https://leakdetectionleesburg.com/services/' },
    { name: service.name, url: `https://leakdetectionleesburg.com/services/${service.slug}/` }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="service"
        title={`${service.name} in Leesburg, FL | 24/7 Precision Non-Invasive Locating`}
        description={service.shortDesc}
        url={`https://leakdetectionleesburg.com/services/${service.slug}/`}
        breadcrumbs={breadcrumbs}
        faqs={service.faqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/services/`} onClick={(e) => handleLink(e, `${prefix}/services/`)} className="hover:text-sky-600">Services</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">{service.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold font-mono">
                <span>LEESBURG, FL · PRECISION DIAGNOSTICS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name} in Leesburg, Florida
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="tel:+13527038206"
                  className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-full text-base shadow-sm transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call (352) 703-8206</span>
                </a>
                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-4 rounded-full text-sm border border-slate-200 shadow-2xs"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>24/7 Rapid Arrival (30-45 Min)</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <VisualAsset
                  type={service.slug.includes('pool') ? 'pool' : service.slug.includes('wall') ? 'thermal' : 'acoustic'}
                  alt={`${service.name} equipment and non-invasive inspection in Leesburg, FL`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Answer-First Summary */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xs">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
            Answer-First Summary: What Homeowners Must Know About {service.name}
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            If you suspect an active pipe breach or foundation leak in your Leesburg property, the first priority is stopping active water migration before foundation subsidence occurs. Our Florida certified technicians deploy ultrasonic ground hydrophones, FLIR infrared thermal cameras, and electromagnetic transmitters to isolate the exact coordinate of the rupture within a 6-to-12 inch radius without destructive exploratory tearing of floors or walls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs">
              <span className="font-extrabold text-sky-700 block mb-1">Response Time:</span>
              <span className="text-slate-600">30 to 45 minute confirmed arrival for urgent Lake County water events (call to confirm availability).</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs">
              <span className="font-extrabold text-sky-700 block mb-1">Diagnostic Accuracy:</span>
              <span className="text-slate-600">Pinpoint acoustic frequency targeting avoids whole-room demolition.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs">
              <span className="font-extrabold text-sky-700 block mb-1">Documentation:</span>
              <span className="text-slate-600">Full engineering reports for Leesburg utility bill credits and insurance claims.</span>
            </div>
          </div>
        </div>

        {/* Overview & Deep Engineering Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Detailed Service Overview & Local Engineering Realities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                In Leesburg and surrounding Lake County communities, residential properties predominantly feature monolithic concrete slab-on-grade construction. Beneath this solid slab rests a network of pressurized copper or PEX tubing providing hot and cold potable water. When these subterranean lines suffer from chemical soil electrolysis, friction against limestone aggregate, or manufacturing defects, escaping water undermines sub-slab soil stability.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Traditional exploratory plumbing often resorted to blind sledgehammer demolition—smashing through finished hardwood, tile, and concrete to hunt for the pipe rupture. At Leesburg Leak Detection, we use acoustic audio amplifiers, high-resolution thermography, and harmless inert tracer gas to map the sub-slab or underground pipe path before a single tool touches your floor.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you live in historic Downtown Leesburg with vintage plumbing, a sprawling suburban home in Briarwood or Woodland Hills, or a waterfront estate in Bridgewater, our specialized diagnostic protocols eliminate guesswork and protect your home investment.
              </p>
            </section>

            {/* Sub-Services */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Specialized Sub-Services Included in Our Inspection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.subServices.map((sub, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-3 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm mb-1">{sub}</h3>
                      <p className="text-xs text-slate-500">Comprehensive diagnostic testing performed by certified leak technicians.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Problems & Signs/Symptoms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Common Problems Solved
                </h3>
                <ul className="space-y-3">
                  {service.problems.map((prob, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-600" />
                  Signs & Warning Symptoms
                </h3>
                <ul className="space-y-3">
                  {service.symptoms.map((sym, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step Diagnostic Process */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Our 4-Step Non-Invasive Diagnostic Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-4 items-start pb-6 border-b border-slate-200/80 last:border-b-0 last:pb-0">
                    <span className="w-10 h-10 rounded-full bg-sky-600 text-white font-mono font-bold flex items-center justify-center shrink-0 shadow-xs">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits & Why Choose Us */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Benefits of Precision Location & Why Leesburg Property Owners Choose Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {service.benefits.map((ben, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                By investing in certified non-invasive leak location, you save thousands of dollars on avoidable flooring demolition and retain full structural integrity of your concrete foundation.
              </p>
            </section>

            {/* Homeowner Tips */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Expert Homeowner Tips & Preventive Measures
              </h2>
              <ul className="space-y-3">
                {service.homeownerTips.map((tip, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 flex items-start gap-2.5 shadow-2xs">
                    <span className="font-bold text-sky-700 font-mono">0{i + 1}.</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6-10 FAQs */}
            <section className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions About {service.name}
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Contextual Internal Links, Service Areas, CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Call Box */}
            <div className="bg-[#0b1f3c] text-white rounded-3xl p-6 sm:p-8 text-center shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                Immediate Assistance
              </span>
              <h3 className="text-2xl font-extrabold mb-2">
                Need {service.name} Today?
              </h3>
              <p className="text-xs font-medium text-slate-300 mb-4">
                Confirmed arrival time is 30 to 45 minutes anywhere in Leesburg, Florida (call to confirm availability).
              </p>
              <a
                href="tel:+13527038206"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-4 rounded-full text-sm transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call (352) 703-8206</span>
              </a>
            </div>

            {/* Neighborhood Combos / Service Areas */}
            <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-extrabold text-slate-900 mb-3">
                {service.name} in Your Leesburg Neighborhood:
              </h3>
              <ul className="space-y-2 text-xs">
                {NEIGHBORHOODS.map((n) => (
                  <li key={n.slug}>
                    <a
                      href={`${prefix}/${n.slug}-${service.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/${n.slug}-${service.slug}/`)}
                      className="text-slate-600 hover:text-sky-600 flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium"
                    >
                      <span>{n.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Services */}
            <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <h3 className="text-base font-extrabold text-slate-900 mb-3">
                Related Leak Detection Services:
              </h3>
              <ul className="space-y-2 text-xs">
                {relatedServices.map((rel) => (
                  <li key={rel.slug}>
                    <a
                      href={`${prefix}/services/${rel.slug}/`}
                      onClick={(e) => handleLink(e, `${prefix}/services/${rel.slug}/`)}
                      className="text-slate-600 hover:text-sky-600 flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium"
                    >
                      <span className="truncate">{rel.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Blog Posts */}
            {relatedBlogs.length > 0 && (
              <div className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-extrabold text-slate-900 mb-3">
                  Related Expert Guides:
                </h3>
                <ul className="space-y-3 text-xs">
                  {relatedBlogs.map((b) => (
                    <li key={b.slug}>
                      <a
                        href={`${prefix}/blogs/${b.slug}/`}
                        onClick={(e) => handleLink(e, `${prefix}/blogs/${b.slug}/`)}
                        className="text-sky-700 hover:underline font-bold block mb-0.5"
                      >
                        {b.title}
                      </a>
                      <span className="text-[11px] text-slate-500">{b.readTime} · {b.cluster}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
