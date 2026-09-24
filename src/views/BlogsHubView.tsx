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
    <div className="bg-slate-950 text-slate-100 py-8">
      <SchemaJsonLd
        type="blog"
        title="Plumbing & Leak Detection Insights | Leesburg Leak Detection Blog"
        description="20 expert homeowner guides on slab leaks, pool leak detection, high water bills, and non-invasive acoustic diagnostics in Central Florida."
        url="https://leakdetectionleesburg.com/blogs/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <a href={`${prefix}/`} onClick={(e) => handleLink(e, `${prefix}/`)} className="hover:text-white">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-400 font-semibold">Guides & Blog</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            Plumbing Diagnostics Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Leak Detection & Plumbing Insights
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In-depth technical guides, homeowner troubleshooting tips, and local geological context from licensed leak detection specialists in Leesburg, Florida.
          </p>
        </div>

        {/* Cluster Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCluster('all')}
            className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-medium transition-all ${
              selectedCluster === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All 20 Articles
          </button>
          {BLOG_CLUSTERS.map((cl) => (
            <button
              key={cl.slug}
              onClick={() => setSelectedCluster(cl.slug)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCluster === cl.slug
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
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
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-sky-400 font-semibold truncate">{post.cluster}</span>
                  <span className="flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={`${prefix}/blogs/${post.slug}/`}
                  onClick={(e) => handleLink(e, `${prefix}/blogs/${post.slug}/`)}
                  className="font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <span className="text-slate-400">{post.publishDate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
