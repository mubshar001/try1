export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  priority: boolean;
  category: 'residential' | 'commercial' | 'outdoor' | 'underground' | 'drainage';
  subServices: string[];
  problems: string[];
  symptoms: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
  homeownerTips: string[];
  faqs: { q: string; a: string }[];
}

export interface NeighborhoodItem {
  id: string;
  slug: string;
  name: string;
  zip: string;
  description: string;
  keyFeatures: string[];
  localRisks: string[];
  landmarks: string[];
}

export interface ZipItem {
  code: string;
  areaName: string;
  type: string;
  keySubdivisions: string[];
  emergencyDispatchTime: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  cluster: string;
  clusterSlug: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  metaDesc: string;
  relatedServiceSlug: string;
  keyTakeaways: string[];
  content: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
}
