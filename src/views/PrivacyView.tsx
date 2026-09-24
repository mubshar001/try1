import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface PrivacyViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Privacy Policy', url: 'https://leakdetectionleesburg.com/privacy-policy/' }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="about"
        title="Privacy Policy | Leesburg Leak Detection"
        description="Privacy policy and data governance practices of Leesburg Leak Detection in Leesburg, Florida."
        url="https://leakdetectionleesburg.com/privacy-policy/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Privacy Policy</span>
        </nav>

        <article className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last updated: September 2026</p>

          <p>
            At Leesburg Leak Detection (located at 719 Pa Walker Rd, Leesburg, FL 34748), we respect the privacy of our customers and website visitors. This privacy policy describes the information we collect and how we safeguard your personal data.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            When you contact us via telephone at (352) 703-8206 or submit our online inspection request form, we may collect your name, phone number, email address, physical property address, and details regarding suspected water leaks.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Use of Information</h2>
          <p>
            Your information is used solely to respond to your service requests, coordinate technician dispatch to your Leesburg property, prepare non-invasive diagnostic reports, and assist with utility credit documentation. We never sell or rent your personal information to third parties.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Data Security & Storage</h2>
          <p>
            We implement administrative and technical security measures to maintain the safety of your personal information. Only authorized dispatch personnel and licensed plumbing technicians have access to service records.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Contact Information</h2>
          <p>
            For privacy inquiries or data requests, contact our compliance officer at:
            <br />
            <strong>Leesburg Leak Detection</strong>
            <br />
            719 Pa Walker Rd, Leesburg, FL 34748
            <br />
            Email: Contact@leakdetectionleesburg.com
            <br />
            Phone: (352) 703-8206
          </p>
        </article>
      </div>
    </div>
  );
};
