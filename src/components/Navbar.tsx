import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Globe, Droplet, ArrowRight, Clock } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentPath: string;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  lang,
  onNavigate,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: lang === 'es' ? 'Inicio' : 'Home', path: lang === 'es' ? '/es/' : '/' },
    { label: t.navAbout, path: lang === 'es' ? '/es/about/' : '/about/' },
    { label: t.navServices, path: lang === 'es' ? '/es/services/' : '/services/' },
    { label: t.navLocations, path: lang === 'es' ? '/es/locations/' : '/locations/' },
    { label: t.navEmergency, path: lang === 'es' ? '/es/emergency/' : '/emergency/' },
    { label: t.navBlogs, path: lang === 'es' ? '/es/blogs/' : '/blogs/' },
    { label: t.navContact, path: lang === 'es' ? '/es/contact/' : '/contact/' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* 1. Sleek Top Utility Bar */}
      <div className="bg-slate-50 border-b border-slate-100 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-600 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Response · Confirmed Arrival: 30-45 Min (Call to Confirm Availability)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* EN / ES Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-slate-700 hover:text-sky-600 transition-colors text-xs font-semibold py-0.5 px-2 rounded-full bg-white border border-slate-200 shadow-2xs"
              aria-label="Toggle English / Spanish Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{lang === 'en' ? 'ESPAÑOL (ES)' : 'ENGLISH (EN)'}</span>
            </button>

            <a
              href="tel:+13527038206"
              className="text-sky-700 hover:text-sky-800 font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-semibold">(352) 703-8206</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean PlumbPro Aesthetic) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href={lang === 'es' ? '/es/' : '/'}
          onClick={(e) => handleNavClick(e, lang === 'es' ? '/es/' : '/')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Droplet className="w-6 h-6 fill-current text-white" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
              Leesburg<span className="text-sky-600">Leak</span>
            </div>
            <div className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-0.5">
              Plumbing & Detection Solutions
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.path ||
              (link.path !== '/' && link.path !== '/es/' && currentPath.startsWith(link.path));
            const isEmergency = link.path.includes('/emergency/');

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`relative py-1.5 transition-colors ${
                  isActive
                    ? 'text-sky-600 font-bold'
                    : isEmergency
                    ? 'text-amber-600 hover:text-amber-700 font-bold'
                    : 'hover:text-sky-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Call / Quote Button (Golden Yellow Pill) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+13527038206"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{lang === 'es' ? 'Llamar Ahora' : 'Get a Quote'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  currentPath === link.path
                    ? 'bg-sky-50 text-sky-600 font-bold'
                    : 'hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="tel:+13527038206"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-3 rounded-full shadow-sm text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call (352) 703-8206</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
