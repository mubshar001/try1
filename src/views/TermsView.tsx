import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface TermsViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Terms and Conditions', url: 'https://leakdetectionleesburg.com/terms-and-conditions/' }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="about"
        title="Terms & Conditions | Leesburg Leak Detection"
        description="Terms of service and diagnostic service agreements for Leesburg Leak Detection in Leesburg, FL."
        url="https://leakdetectionleesburg.com/terms-and-conditions/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Terms and Conditions</span>
        </nav>

        <article className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last updated: September 2026</p>

          <p>
            Welcome to the official website of Leesburg Leak Detection. By accessing this site or engaging our diagnostic and plumbing services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Scope of Non-Invasive Diagnostic Services</h2>
          <p>
            Leesburg Leak Detection utilizes electronic acoustic hydrophones, high-frequency line locators, infrared thermal imaging, and inert tracer gas systems to identify subterranean and concealed water pipe leaks. Diagnostic findings represent professional technical assessments based on calibrated instrument readings.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Emergency Dispatch & Response Times</h2>
          <p>
            Our confirmed emergency arrival time of 30 to 45 minutes applies to standard service zones within Leesburg, FL and designated Lake County target ZIP codes (34748, 34788, 34749, 34789). Adverse weather conditions or road closures may occasionally affect travel times.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Customer Property Access & Water Shutoff</h2>
          <p>
            Customers are responsible for providing safe access to water meters, exterior cleanouts, and interior fixtures. In active flooding scenarios, customers are instructed to isolate the main water shutoff valve immediately.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Licensing & Jurisdiction</h2>
          <p>
            All plumbing services are conducted under Florida State Certified Plumbing Contractor License #CFC142890 in compliance with the Florida Building Code Plumbing Volume and Lake County ordinances.
          </p>
        </article>
      </div>
    </div>
  );
};
