import React, { useState } from 'react';
import { ChevronRight, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS, BLOG_CLUSTERS } from '../data/blogsData';
import { SchemaJsonLd } from '../components/SchemaJsonLd';

interface BlogsHubViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const BlogsHubView: React.FC<BlogsHubViewProps> = ({ lang, onNavigate }) => {
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  const prefix = lang === 'es' ? '/es' : '';

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPosts =
    selectedCluster === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((b) => b.clusterSlug === selectedCluster);

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Blog', url: 'https://leakdetectionleesburg.com/blogs/' }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="blog"
        title="Plumbing & Leak Detection Insights | Leesburg Leak Detection Blog"
        description="20 expert homeowner guides on slab leaks, pool leak detection, high water bills, and non-invasive acoustic diagnostics in Central Florida."
        url="https://leakdetectionleesburg.com/blogs/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">Guides & Blog</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            — PLUMBING DIAGNOSTICS KNOWLEDGE BASE —
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Leak Detection & <span className="text-sky-600">Plumbing Insights</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In-depth technical guides, homeowner troubleshooting tips, and local geological context from licensed leak detection specialists in Leesburg, Florida.
          </p>
        </div>

        {/* Cluster Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCluster('all')}
            className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-bold transition-all cursor-pointer ${
              selectedCluster === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 20 Articles
          </button>
          {BLOG_CLUSTERS.map((cl) => (
            <button
              key={cl.slug}
              onClick={() => setSelectedCluster(cl.slug)}
              className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-bold transition-all cursor-pointer ${
                selectedCluster === cl.slug
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cl.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-sky-700 font-bold truncate">{post.cluster}</span>
                  <span className="flex items-center gap-1 shrink-0 font-medium">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`${prefix}/blogs/${post.slug}/`}
                  onClick={(e) => handleLink(e, `${prefix}/blogs/${post.slug}/`)}
                  className="font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <span className="text-slate-400 font-medium">{post.publishDate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
