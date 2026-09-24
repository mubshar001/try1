import React from 'react';
import { ChevronRight, ArrowRight, Clock, Calendar, CheckCircle2, Phone, BookOpen, Share2 } from 'lucide-react';
import { BlogPostItem } from '../types';
import { BLOG_POSTS } from '../data/blogsData';
import { ALL_SERVICES } from '../data/servicesData';
import { VisualAsset } from '../components/VisualAsset';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface BlogDetailViewProps {
  post: BlogPostItem;
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({ post, lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canonicalUrl = `https://leakdetectionleesburg.com/blogs/${post.slug}/`;
  const relatedService = ALL_SERVICES.find((s) => s.slug === post.relatedServiceSlug) || ALL_SERVICES[0];
  const relatedArticles = BLOG_POSTS.filter((b) => b.clusterSlug === post.clusterSlug && b.slug !== post.slug).slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Blog', url: 'https://leakdetectionleesburg.com/blogs/' },
    { name: post.title, url: canonicalUrl }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="blog"
        title={`${post.title} | Leesburg Leak Detection Guide`}
        description={post.metaDesc}
        url={canonicalUrl}
        breadcrumbs={breadcrumbs}
        article={{
          headline: post.title,
          datePublished: post.publishDate,
          author: 'Leesburg Leak Detection Tech Staff',
          description: post.metaDesc
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`${prefix}/blogs/`} onClick={(e) => handleLink(e, `${prefix}/blogs/`)} className="hover:text-white">Blog</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="text-sky-400 font-bold tracking-wide uppercase">{post.cluster}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.publishDate}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-4 border-sky-500 pl-4 py-1">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Visual */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl mb-10">
          <VisualAsset
            type={post.relatedServiceSlug.includes('pool') ? 'pool' : post.relatedServiceSlug.includes('wall') ? 'thermal' : 'acoustic'}
            alt={post.title}
            className="w-full h-full"
          />
        </div>

        {/* Key Takeaways */}
        <div className="bg-sky-950/30 border border-sky-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sky-400" />
            Key Technical Takeaways
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            {post.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Content */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 mb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Contextual Service Callout */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Related Inspection Service
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              Need Professional {relatedService.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Our certified technicians arrive with non-invasive acoustic sensors in 30-45 minutes.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+13527038206"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (352) 703-8206</span>
            </a>
            <a
              href={`${prefix}/services/${relatedService.slug}/`}
              onClick={(e) => handleLink(e, `${prefix}/services/${relatedService.slug}/`)}
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-2.5 rounded-xl text-xs border border-slate-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Related Cluster Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-slate-800 pt-10">
            <h2 className="text-xl font-bold text-white mb-6">
              More Articles in: {post.cluster}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.slug}
                  href={`${prefix}/blogs/${rel.slug}/`}
                  onClick={(e) => handleLink(e, `${prefix}/blogs/${rel.slug}/`)}
                  className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-colors block group"
                >
                  <span className="text-[11px] text-sky-400 font-semibold block mb-1">{rel.readTime}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h3>
                  <span className="text-xs text-sky-400 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
