import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from '../data/locationsData';
import { BLOG_CLUSTERS } from '../data/blogsData';

interface FooterProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prefix = lang === 'es' ? '/es' : '';

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-24 sm:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Brand & NAP Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: NAP & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-extrabold tracking-tight text-white block">
              Leesburg Leak Detection
            </span>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Certified non-invasive acoustic, thermal, and tracer gas water leak detection in Leesburg, Florida. Rapid 30-45 minute emergency arrival for residential and commercial slab and pipe leaks.
            </p>

            {/* Strict NAP Block */}
            <div className="space-y-2 text-xs text-slate-300 font-medium pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+13527038206"
                  className="hover:text-white transition-colors text-sky-400 font-bold"
                >
                  (352) 703-8206
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:Contact@leakdetectionleesburg.com"
                  className="hover:text-white transition-colors"
                >
                  Contact@leakdetectionleesburg.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24/7 Available · Confirmed Arrival: 30-45 Min (Call to Confirm Availability)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block">
                License: State Certified Florida Plumbing Contractor #CFC142890
              </span>
            </div>
          </div>

          {/* Col 2: Priority Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Top Priority Services
            </h4>
            <ul className="space-y-2 text-xs">
              {TOP_10_PRIORITY_SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href={`${prefix}/services/${s.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/services/${s.slug}/`)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${prefix}/services/`}
                  onClick={(e) => handleLink(e, `${prefix}/services/`)}
                  className="text-sky-400 font-semibold inline-flex items-center gap-1 hover:underline pt-1"
                >
                  <span>All 22 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas & ZIPs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {NEIGHBORHOODS.map((n) => (
                <li key={n.slug}>
                  <a
                    href={`${prefix}/locations/${n.slug}/`}
                    onClick={(e) => handleLink(e, `${prefix}/locations/${n.slug}/`)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {n.name}
                  </a>
                </li>
              ))}
              <li className="pt-1 text-[11px] text-slate-400">
                <span>ZIP Codes: </span>
                {TARGET_ZIPS.map((z, idx) => (
                  <span key={z.code}>
                    <a
                      href={`${prefix}/zip/${z.code}/`}
                      onClick={(e) => handleLink(e, `${prefix}/zip/${z.code}/`)}
                      className="text-sky-400 hover:underline"
                    >
                      {z.code}
                    </a>
                    {idx < TARGET_ZIPS.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          {/* Col 4: Guides & Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Company & Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`${prefix}/about/`}
                  onClick={(e) => handleLink(e, `${prefix}/about/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/contact/`}
                  onClick={(e) => handleLink(e, `${prefix}/contact/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  Contact & Map
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  24/7 Emergency Dispatch
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/blogs/`}
                  onClick={(e) => handleLink(e, `${prefix}/blogs/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  Plumbing Guides & Blog
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/careers/`}
                  onClick={(e) => handleLink(e, `${prefix}/careers/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/privacy-policy/`}
                  onClick={(e) => handleLink(e, `${prefix}/privacy-policy/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/terms-and-conditions/`}
                  onClick={(e) => handleLink(e, `${prefix}/terms-and-conditions/`)}
                  className="hover:text-sky-400 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Hreflang Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Leesburg Leak Detection. All Rights Reserved. 719 Pa Walker Rd, Leesburg, FL 34748.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Hreflang: en / es / x-default</span>
            <span>·</span>
            <a href="/privacy-policy/" onClick={(e) => handleLink(e, '/privacy-policy/')} className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="/terms-and-conditions/" onClick={(e) => handleLink(e, '/terms-and-conditions/')} className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
