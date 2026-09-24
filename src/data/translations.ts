export interface TranslationStrings {
  brandName: string;
  tagline: string;
  callNow: string;
  emergency247: string;
  arrivalTime: string;
  navServices: string;
  navLocations: string;
  navEmergency: string;
  navBlogs: string;
  navAbout: string;
  navContact: string;
  heroHeadline: string;
  heroSubheadline: string;
  requestCallBtn: string;
  emergencyBtn: string;
  topPriorityTitle: string;
  whyChooseUsTitle: string;
  standardsTitle: string;
  citySpotlightTitle: string;
  serviceAreasTitle: string;
  customerFeedbackTitle: string;
  latestBlogsTitle: string;
  faqTitle: string;
  readyToHelpTitle: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<'en' | 'es', TranslationStrings> = {
  en: {
    brandName: 'Leesburg Leak Detection',
    tagline: '24/7 Precision Non-Invasive Water & Slab Leak Specialists',
    callNow: 'Call (352) 703-8206',
    emergency247: '24/7 Emergency Dispatch',
    arrivalTime: '30-45 Minute Arrival (Call to Confirm Availability)',
    navServices: 'Services',
    navLocations: 'Service Areas',
    navEmergency: '24/7 Emergency',
    navBlogs: 'Guides & Insights',
    navAbout: 'About Us',
    navContact: 'Contact',
    heroHeadline: '24/7 Non-Invasive Water Leak Detection in Leesburg, FL',
    heroSubheadline: 'We pinpoint hidden slab leaks, underground supply lines, high water bill spikes, and pool leaks without destructive demolition. Confirmed 30-45 minute emergency arrival (call to confirm availability).',
    requestCallBtn: 'Call (352) 703-8206',
    emergencyBtn: 'Emergency Dispatch: 30-45 Min (Call to Confirm)',
    topPriorityTitle: 'Priority Leak Detection Services',
    whyChooseUsTitle: 'Why Leesburg Homeowners Choose Us',
    standardsTitle: 'Our Service Standards',
    citySpotlightTitle: 'Leesburg & Lake County Presence',
    serviceAreasTitle: 'Neighborhoods & Communities Served',
    customerFeedbackTitle: 'Our Testimonials',
    latestBlogsTitle: 'Plumbing & Leak Prevention Articles',
    faqTitle: 'Frequently Asked Questions',
    readyToHelpTitle: 'Suspecting a Concealed Water Leak in Your Home?',
    footerRights: 'All Rights Reserved. Licensed Florida Plumbing Contractor.'
  },
  es: {
    brandName: 'Detección de Fugas en Leesburg',
    tagline: 'Especialistas 24/7 en Detección No Invasiva de Fugas de Agua y Losas',
    callNow: 'Llamar al (352) 703-8206',
    emergency247: 'Atención de Emergencia 24/7',
    arrivalTime: 'Llegada en 30-45 Minutos (Llame para Confirmar Disponibilidad)',
    navServices: 'Servicios',
    navLocations: 'Áreas de Servicio',
    navEmergency: 'Emergencia 24/7',
    navBlogs: 'Guías y Artículos',
    navAbout: 'Sobre Nosotros',
    navContact: 'Contacto',
    heroHeadline: 'Detección de Fugas de Agua No Invasiva 24/7 en Leesburg, FL',
    heroSubheadline: 'Localizamos fugas ocultas bajo losas de concreto, tuberías principales subterráneas, piscinas y aumentos en la factura sin demolición destructiva. Llegada de emergencia en 30-45 minutos (llame para confirmar disponibilidad inmediata).',
    requestCallBtn: 'Llamar (352) 703-8206',
    emergencyBtn: 'Despacho de Emergencia: 30-45 Min (Llame para Confirmar)',
    topPriorityTitle: 'Servicios Prioritarios de Detección de Fugas',
    whyChooseUsTitle: 'Por Qué los Propietarios de Leesburg Confían en Nosotros',
    standardsTitle: 'Nuestros Estándares de Servicio',
    citySpotlightTitle: 'Presencia en Leesburg y Condado de Lake',
    serviceAreasTitle: 'Vecindarios y Comunidades Atendidas',
    customerFeedbackTitle: 'Nuestros Testimonios',
    latestBlogsTitle: 'Artículos de Fontanería y Prevención de Fugas',
    faqTitle: 'Preguntas Frecuentes',
    readyToHelpTitle: '¿Sospecha de una Fuga Oculta de Agua en su Propiedad?',
    footerRights: 'Todos los derechos reservados. Contratista de plomería certificado en Florida.'
  }
};
