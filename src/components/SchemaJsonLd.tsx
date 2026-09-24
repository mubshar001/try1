import React from 'react';

interface SchemaJsonLdProps {
  type: 'home' | 'service' | 'location' | 'blog' | 'contact' | 'about';
  title?: string;
  description?: string;
  url?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { q: string; a: string }[];
  article?: {
    headline: string;
    datePublished: string;
    author: string;
    description: string;
  };
}

export const SchemaJsonLd: React.FC<SchemaJsonLdProps> = ({
  type,
  title,
  description,
  url = 'https://leakdetectionleesburg.com/',
  breadcrumbs,
  faqs,
  article
}) => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': 'https://leakdetectionleesburg.com/#plumber',
    name: 'Leesburg Leak Detection',
    alternateName: 'Leesburg Water & Slab Leak Specialists',
    url: 'https://leakdetectionleesburg.com/',
    telephone: '+13527038206',
    email: 'Contact@leakdetectionleesburg.com',
    priceRange: '$$',
    image: 'https://leakdetectionleesburg.com/images/hero-truck-plumber.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '719 Pa Walker Rd',
      addressLocality: 'Leesburg',
      addressRegion: 'FL',
      postalCode: '34748',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8108,
      longitude: -81.8779
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Leesburg, FL' },
      { '@type': 'AdministrativeArea', name: 'Lake County, FL' },
      { '@type': 'PostalCode', postalCode: '34748' },
      { '@type': 'PostalCode', postalCode: '34788' },
      { '@type': 'PostalCode', postalCode: '34749' },
      { '@type': 'PostalCode', postalCode: '34789' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  } : null;

  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Leesburg Leak Detection Tech Staff'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Leesburg Leak Detection',
      logo: {
        '@type': 'ImageObject',
        url: 'https://leakdetectionleesburg.com/images/hero-truck-plumber.svg'
      }
    },
    description: article.description,
    mainEntityOfPage: url
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
};
