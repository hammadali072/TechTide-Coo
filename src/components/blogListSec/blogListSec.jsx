"use client";

import { useState, useMemo } from "react";
import BlogCard from "../blogCard/blogCard";
import { MagnifyingGlassIcon, XIcon, ArrowDownIcon, FunnelIcon } from "@phosphor-icons/react";
import clsx from "clsx";

export default function BlogListSec({ posts }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(6);

  // Compute categories and counts
  const categories = useMemo(() => {
    const cats = { All: posts.length };
    posts.forEach(p => {
      cats[p.category] = (cats[p.category] || 0) + 1;
    });
    return Object.entries(cats).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Filter, search, and sort
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search query
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, activeCategory, query, sortOrder]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="bg-black py-24 relative min-h-[500px]">
      <div className="container">
        <div className="mb-14 space-y-0 bg-tint-black-2 border border-white/8 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-4 border-b border-white/8">
            <div className="relative flex-1 flex items-center">
              <div className="absolute left-3.5 text-white/40 pointer-events-none">
                <MagnifyingGlassIcon size={18} />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, or tags..."
                className="w-full bg-black/40 border border-white/8 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 duration-200"
                aria-label="Search articles"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 text-white/30 hover:text-white duration-200"
                  aria-label="Clear search"
                >
                  <XIcon size={16} />
                </button>
              )}
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10 shrink-0" />

            <span className="hidden sm:block text-sm font-medium text-white/40 shrink-0 whitespace-nowrap" aria-live="polite">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </span>

            <div className="hidden sm:block w-px h-8 bg-white/10 shrink-0" />

            <div className="relative shrink-0">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none bg-black/40 border border-white/8 rounded-lg pl-3 pr-8 py-2.5 text-sm text-white/80 focus:outline-none focus:border-primary/60 duration-200 cursor-pointer"
                aria-label="Sort articles"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                <FunnelIcon size={13} />
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-1 px-4 overflow-x-auto"
            role="group"
            aria-label="Filter by category"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => { setActiveCategory(cat.name); setVisibleCount(6); }}
                aria-pressed={activeCategory === cat.name}
                className={clsx(
                  "snap-start shrink-0 px-4 py-3.5 text-sm font-semibold duration-300 border-b-2 whitespace-nowrap",
                  activeCategory === cat.name
                    ? "border-primary text-primary"
                    : "border-transparent text-white/50 hover:text-white"
                )}
              >
                {cat.name}
                <span className={clsx(
                  "ml-1.5 text-xs font-normal",
                  activeCategory === cat.name ? "text-primary/70" : "text-white/25"
                )}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 motion-safe:animate-fade-in-up">
            {visiblePosts.map((post) => (
              <div key={post.slug}>
                <BlogCard item={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-tint-black-2 border border-white/5 rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/30 mb-4">
              <MagnifyingGlassIcon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-white/50 mb-6 max-w-md">
              We couldn&rsquo;t find any articles matching your search for &quot;{query}&quot; in the {activeCategory} category.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="px-6 py-2 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-tint-black-2 border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-primary/50 duration-200 group"
            >
              Load More Articles
              <ArrowDownIcon size={16} className="text-white/50 group-hover:text-primary group-hover:translate-y-0.5 duration-200" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
