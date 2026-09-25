import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';

// Views
import { HomeView } from './views/HomeView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { ServicesHubView } from './views/ServicesHubView';
import { LocationDetailView } from './views/LocationDetailView';
import { LocationsHubView } from './views/LocationsHubView';
import { ZipDetailView } from './views/ZipDetailView';
import { ComboDetailView } from './views/ComboDetailView';
import { EmergencyHubView } from './views/EmergencyHubView';
import { EmergencyServiceView } from './views/EmergencyServiceView';
import { EmergencyLocationView } from './views/EmergencyLocationView';
import { BlogsHubView } from './views/BlogsHubView';
import { BlogDetailView } from './views/BlogDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { CareersView } from './views/CareersView';
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { ThankYouView } from './views/ThankYouView';
import { NotFoundView } from './views/NotFoundView';

// Data
import { ALL_SERVICES, TOP_10_PRIORITY_SERVICES } from './data/servicesData';
import { NEIGHBORHOODS, TARGET_ZIPS } from './data/locationsData';
import { BLOG_POSTS } from './data/blogsData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [lang, setLang] = useState<'en' | 'es'>(() => {
    return window.location.pathname.startsWith('/es') ? 'es' : 'en';
  });

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      setLang(path.startsWith('/es') ? 'es' : 'en');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (path: string) => {
    let cleanPath = path;
    if (!cleanPath.endsWith('/') && !cleanPath.includes('.')) {
      cleanPath += '/';
    }
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    setLang(cleanPath.startsWith('/es') ? 'es' : 'en');
  };

  const handleToggleLang = () => {
    if (lang === 'en') {
      const newPath = currentPath === '/' ? '/es/' : `/es${currentPath}`;
      handleNavigate(newPath);
    } else {
      const newPath = currentPath.replace(/^\/es/, '') || '/';
      handleNavigate(newPath);
    }
  };

  // Normalize path without trailing slash issues and strip /es prefix for route matching
  const normalizedPath = currentPath.replace(/^\/es/, '') || '/';
  const cleanPath = normalizedPath.endsWith('/') && normalizedPath.length > 1
    ? normalizedPath.slice(0, -1)
    : normalizedPath;

  // ROUTER LOGIC
  const renderContent = () => {
    // Root
    if (cleanPath === '/' || cleanPath === '') {
      return <HomeView lang={lang} onNavigate={handleNavigate} />;
    }

    // Core static routes
    if (cleanPath === '/about') {
      return <AboutView lang={lang} onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/contact') {
      return <ContactView lang={lang} onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/careers') {
      return <CareersView lang={lang} onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/privacy-policy') {
      return <PrivacyView lang={lang} onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/terms-and-conditions') {
      return <TermsView lang={lang} onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/thank-you') {
      return <ThankYouView lang={lang} onNavigate={handleNavigate} />;
    }

    // Services hub
    if (cleanPath === '/services') {
      return <ServicesHubView lang={lang} onNavigate={handleNavigate} />;
    }

    // Locations hub
    if (cleanPath === '/locations') {
      return <LocationsHubView lang={lang} onNavigate={handleNavigate} />;
    }

    // Blogs hub
    if (cleanPath === '/blogs') {
      return <BlogsHubView lang={lang} onNavigate={handleNavigate} />;
    }

    // Emergency hub
    if (cleanPath === '/emergency') {
      return <EmergencyHubView lang={lang} onNavigate={handleNavigate} />;
    }

    // Emergency sub-routes
    if (cleanPath.startsWith('/emergency/')) {
      const emergencySlug = cleanPath.replace('/emergency/', '');
      
      // Check if it matches a service
      const matchedService = ALL_SERVICES.find((s) => s.slug === emergencySlug);
      if (matchedService) {
        return <EmergencyServiceView service={matchedService} lang={lang} onNavigate={handleNavigate} />;
      }

      // Check if it matches a neighborhood
      const matchedLocation = NEIGHBORHOODS.find((n) => n.slug === emergencySlug);
      if (matchedLocation) {
        return <EmergencyLocationView neighborhood={matchedLocation} lang={lang} onNavigate={handleNavigate} />;
      }
    }

    // Service detail: /services/[service-slug]
    if (cleanPath.startsWith('/services/')) {
      const serviceSlug = cleanPath.replace('/services/', '');
      const service = ALL_SERVICES.find((s) => s.slug === serviceSlug);
      if (service) {
        return <ServiceDetailView service={service} lang={lang} onNavigate={handleNavigate} />;
      }
    }

    // Location detail: /locations/[location-slug]
    if (cleanPath.startsWith('/locations/')) {
      const locSlug = cleanPath.replace('/locations/', '');
      const neighborhood = NEIGHBORHOODS.find((n) => n.slug === locSlug);
      if (neighborhood) {
        return <LocationDetailView neighborhood={neighborhood} lang={lang} onNavigate={handleNavigate} />;
      }
    }

    // ZIP detail: /zip/[zip-code]
    if (cleanPath.startsWith('/zip/')) {
      const zipCode = cleanPath.replace('/zip/', '');
      const zipItem = TARGET_ZIPS.find((z) => z.code === zipCode);
      if (zipItem) {
        return <ZipDetailView zip={zipItem} lang={lang} onNavigate={handleNavigate} />;
      }
    }

    // Blog detail: /blogs/[blog-slug]
    if (cleanPath.startsWith('/blogs/')) {
      const blogSlug = cleanPath.replace('/blogs/', '');
      const post = BLOG_POSTS.find((b) => b.slug === blogSlug);
      if (post) {
        return <BlogDetailView post={post} lang={lang} onNavigate={handleNavigate} />;
      }
    }

    // Service + Neighborhood combos: /[location-slug]-[service-slug]
    // e.g. /downtown-city-center-slab-leak-detection/
    const comboMatch = cleanPath.slice(1); // remove leading slash
    for (const neighborhood of NEIGHBORHOODS) {
      if (comboMatch.startsWith(`${neighborhood.slug}-`)) {
        const potentialServiceSlug = comboMatch.replace(`${neighborhood.slug}-`, '');
        const matchedService = TOP_10_PRIORITY_SERVICES.find((s) => s.slug === potentialServiceSlug)
          || ALL_SERVICES.find((s) => s.slug === potentialServiceSlug);
        if (matchedService) {
          return (
            <ComboDetailView
              service={matchedService}
              neighborhood={neighborhood}
              lang={lang}
              onNavigate={handleNavigate}
            />
          );
        }
      }
    }

    // Fallback 404
    return <NotFoundView lang={lang} onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      <Navbar
        currentPath={currentPath}
        lang={lang}
        onNavigate={handleNavigate}
        onToggleLang={handleToggleLang}
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer lang={lang} onNavigate={handleNavigate} />
      <MobileCallBar lang={lang} />
    </div>
  );
}
