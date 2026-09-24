import React from 'react';
import { AlertCircle, Phone, Home, ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  return (
    <div className="bg-slate-950 text-slate-100 py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>

          <span className="text-4xl font-extrabold text-sky-400 font-mono block mb-2">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            The requested page does not exist or has been relocated. If you are experiencing a water leak emergency in Leesburg, please call our 24/7 hotline directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+13527038206"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (352) 703-8206</span>
            </a>
            <button
              onClick={() => onNavigate(prefix || '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl text-sm border border-slate-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Go to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
