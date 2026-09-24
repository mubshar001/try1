import React from 'react';
import { CheckCircle2, Phone, ArrowLeft, Clock } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface ThankYouViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ThankYouView: React.FC<ThankYouViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  return (
    <div className="bg-slate-950 text-slate-100 py-16">
      <SchemaJsonLd
        type="about"
        title="Thank You | Leesburg Leak Detection"
        description="Thank you for contacting Leesburg Leak Detection. Our dispatch team is processing your request."
        url="https://leakdetectionleesburg.com/thank-you/"
      />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Thank You for Contacting Us
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Your inspection request has been logged into our Leesburg dispatch system. A certified plumbing coordinator will call you back shortly to confirm your property details and appointment.
          </p>

          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60 mb-8 text-xs sm:text-sm text-slate-300 flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Need immediate emergency dispatch? Call (352) 703-8206 for 30-45 min arrival.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13527038206"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (352) 703-8206</span>
            </a>
            <button
              onClick={() => onNavigate(prefix || '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
