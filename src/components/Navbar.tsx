import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, Globe, AlertTriangle } from 'lucide-react';
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
    { label: t.navServices, path: lang === 'es' ? '/es/services/' : '/services/' },
    { label: t.navLocations, path: lang === 'es' ? '/es/locations/' : '/locations/' },
    { label: t.navEmergency, path: lang === 'es' ? '/es/emergency/' : '/emergency/' },
    { label: t.navBlogs, path: lang === 'es' ? '/es/blogs/' : '/blogs/' },
    { label: t.navAbout, path: lang === 'es' ? '/es/about/' : '/about/' },
    { label: t.navContact, path: lang === 'es' ? '/es/contact/' : '/contact/' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* 1. Utility / Top Bar */}
      <div className="bg-slate-950 text-xs border-b border-slate-800/80 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Available · Confirmed Arrival: 30-45 Min (Call to Confirm Availability)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* EN / ES Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-xs font-semibold py-0.5 px-2 rounded bg-slate-900 border border-slate-700/60"
              aria-label="Toggle English / Spanish Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'en' ? 'ESPAÑOL (ES)' : 'ENGLISH (EN)'}</span>
            </button>

            <a
              href="tel:+13527038206"
              className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(352) 703-8206</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href={lang === 'es' ? '/es/' : '/'}
          onClick={(e) => handleNavClick(e, lang === 'es' ? '/es/' : '/')}
          className="text-lg sm:text-xl font-extrabold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap"
        >
          {t.brandName}
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            const isEmergency = link.path.includes('/emergency/');
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-sky-400 font-bold border-b-2 border-sky-400'
                    : isEmergency
                    ? 'text-amber-400 hover:text-amber-300 font-semibold'
                    : 'hover:text-white hover:underline underline-offset-8'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+13527038206"
            className="hidden sm:inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors shadow-md shadow-sky-500/10 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callNow}</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-slate-300 hover:text-white text-base py-2 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+13527038206"
              className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 text-slate-950 font-bold py-3 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.callNow}</span>
            </a>
            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 py-2.5 rounded-lg text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
