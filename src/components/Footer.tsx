import React from 'react';
import { Phone, Mail, MapPin, Droplet, Clock, ShieldCheck } from 'lucide-react';
import { TOP_10_PRIORITY_SERVICES } from '../data/servicesData';
import { NEIGHBORHOODS } from '../data/locationsData';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07152b] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top 5 Column Grid matching PlumbPro style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-1 space-y-4">
            <a
              href={lang === 'es' ? '/es/' : '/'}
              onClick={(e) => handleLink(e, lang === 'es' ? '/es/' : '/')}
              className="flex items-center gap-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Droplet className="w-6 h-6 fill-current text-white" />
              </div>
              <div className="text-xl font-extrabold tracking-tight text-white leading-none">
                Leesburg<span className="text-sky-400">Leak</span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              Reliable plumbing & non-invasive leak detection solutions for a protected, healthier home and business.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <Clock className="w-4 h-4 shrink-0" />
              <span>24/7 Available · Confirmed Arrival: 30-45 Min (Call to Confirm Availability)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={`${prefix}/`}
                  onClick={(e) => handleLink(e, `${prefix}/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/about/`}
                  onClick={(e) => handleLink(e, `${prefix}/about/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/services/`}
                  onClick={(e) => handleLink(e, `${prefix}/services/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/locations/`}
                  onClick={(e) => handleLink(e, `${prefix}/locations/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/emergency/`}
                  onClick={(e) => handleLink(e, `${prefix}/emergency/`)}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  24/7 Emergency
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/contact/`}
                  onClick={(e) => handleLink(e, `${prefix}/contact/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {TOP_10_PRIORITY_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href={`${prefix}/services/${service.id}/`}
                    onClick={(e) => handleLink(e, `${prefix}/services/${service.id}/`)}
                    className="hover:text-amber-400 transition-colors line-clamp-1"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Support & Info</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={`${prefix}/blogs/`}
                  onClick={(e) => handleLink(e, `${prefix}/blogs/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Blog & Guides
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/careers/`}
                  onClick={(e) => handleLink(e, `${prefix}/careers/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/privacy-policy/`}
                  onClick={(e) => handleLink(e, `${prefix}/privacy-policy/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/terms-and-conditions/`}
                  onClick={(e) => handleLink(e, `${prefix}/terms-and-conditions/`)}
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="space-y-3.5">
            <h4 className="text-base font-bold text-white mb-4">Contact Us</h4>
            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+13527038206" className="text-white hover:text-amber-400 font-semibold font-mono">
                (352) 703-8206
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="mailto:info@leakdetectionleesburg.com" className="hover:text-white">
                info@leakdetectionleesburg.com
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-sky-400 bg-sky-950/60 px-3 py-1.5 rounded-lg border border-sky-800/40">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>FL License #CFC142890</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Leesburg Leak Detection. All rights reserved.</p>
          <p>Serving Lake County, FL: 34748, 34788, 34749, 34789</p>
        </div>
      </div>
    </footer>
  );
};
