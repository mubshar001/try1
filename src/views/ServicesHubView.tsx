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
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="service"
        title="All 22 Leak Detection & Plumbing Diagnostics Services in Leesburg, FL"
        description="Explore all 22 specialized non-invasive water leak detection services in Leesburg, FL. Slab leaks, water service lines, pools, commercial, and high bill forensics."
        url="https://leakdetectionleesburg.com/services/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Services</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            Complete Diagnostic Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Our 22 Specialized Leak Detection Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From pressurized copper slab lines and swimming pools to municipal water meter forensics, we utilize non-invasive technology to pinpoint leaks without destruction.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
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
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono text-sky-400 font-semibold uppercase">{service.category}</span>
                  {service.priority && (
                    <span className="text-emerald-400 font-bold">Top Priority</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {service.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {service.subServices.slice(0, 3).map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`${prefix}/services/${service.slug}/`}
                  onClick={(e) => handleLink(e, `${prefix}/services/${service.slug}/`)}
                  className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Full Service Details</span>
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
      </div>
    </div>
  );
};
