import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { ALL_SERVICES } from '../data/servicesData';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface ServicesHubViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ServicesHubView: React.FC<ServicesHubViewProps> = ({ lang, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredServices =
    activeCategory === 'all'
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All 22 Services' },
    { id: 'residential', label: 'Residential Indoor' },
    { id: 'underground', label: 'Slab & Underground' },
    { id: 'outdoor', label: 'Pools & Irrigation' },
    { id: 'commercial', label: 'Commercial Systems' },
    { id: 'drainage', label: 'Sewer & Drainage' }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Services', url: 'https://leakdetectionleesburg.com/services/' }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="service"
        title="All 22 Leak Detection & Plumbing Diagnostics Services in Leesburg, FL"
        description="Explore all 22 specialized non-invasive water leak detection services in Leesburg, FL. Slab leaks, water service lines, pools, commercial, and high bill forensics."
        url="https://leakdetectionleesburg.com/services/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">Services</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            — COMPLETE DIAGNOSTIC DIRECTORY —
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our 22 Specialized <span className="text-sky-600">Leak Detection Services</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From pressurized copper slab lines and swimming pools to municipal water meter forensics, we utilize non-invasive technology to pinpoint leaks without destruction.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono text-sky-700 font-bold uppercase">{service.category}</span>
                  {service.priority && (
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Top Priority</span>
                  )}
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 mb-6 text-xs text-slate-500">
                  {service.subServices.slice(0, 3).map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`${prefix}/services/${service.slug}/`}
                  onClick={(e) => handleLink(e, `${prefix}/services/${service.slug}/`)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+13527038206"
                  className="text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2 rounded-full transition-colors shadow-2xs"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
