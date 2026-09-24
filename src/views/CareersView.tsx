import React from 'react';
import { Briefcase, CheckCircle2, ChevronRight, Phone, Mail } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface CareersViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const CareersView: React.FC<CareersViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Careers', url: 'https://leakdetectionleesburg.com/careers/' }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="about"
        title="Careers at Leesburg Leak Detection | Join Our Florida Tech Team"
        description="Explore career opportunities at Leesburg Leak Detection. Hiring certified acoustic leak technicians, apprentices, and licensed Florida plumbers."
        url="https://leakdetectionleesburg.com/careers/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Careers</span>
        </nav>

        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            Join Our Technical Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Careers at Leesburg Leak Detection
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are always seeking detail-oriented, certified plumbers and acoustic diagnostic technicians passionate about non-invasive leak location across Lake County.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs text-sky-400 font-mono font-semibold">FULL-TIME · LEESBURG, FL</span>
                <h2 className="text-xl font-bold text-white">Lead Acoustic Leak Detection Specialist</h2>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
                Competitive Base + Commission
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Operate state-of-the-art ultrasonic correlators, ground hydrophones, and FLIR thermal cameras to diagnose slab, pool, and underground supply line leaks.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Minimum 3 years experience in plumbing or electronic leak detection.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Clean Florida driving record and background check.
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs text-sky-400 font-mono font-semibold">APPRENTICESHIP · LEESBURG, FL</span>
                <h2 className="text-xl font-bold text-white">Leak Detection Field Technician Apprentice</h2>
              </div>
              <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full w-fit">
                Paid Technical Training
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Train directly under Florida State Certified Master Plumbers in acoustic triangulation, tracer gas deployment, and video sewer camera diagnostics.
            </p>
          </div>
        </div>

        <div className="bg-sky-950/40 border border-sky-500/30 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Interested in Applying?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Email your resume or plumbing credentials to our Leesburg management office.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:Contact@leakdetectionleesburg.com?subject=Career%20Application%20-%20Leesburg%20Leak%20Detection"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact@leakdetectionleesburg.com</span>
            </a>
            <a
              href="tel:+13527038206"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl text-sm border border-slate-800"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call (352) 703-8206</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
