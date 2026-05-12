'use client'

import { useState, useMemo } from 'react'
import BlogCard from '@/components/cards/BlogCard'
import { BlogPost, BlogCat } from '@/data/blog'

const filters: { id: 'all' | BlogCat; label: string }[] = [
  { id: 'all',      label: 'All' },
  { id: 'ai',       label: 'AI' },
  { id: 'ops',      label: 'Ops' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'sport',    label: 'Sport' },
]

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<'all' | BlogCat>('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = active === 'all' || p.category === active
      const q = query.trim().toLowerCase()
      const matchQ =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.searchText.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [posts, active, query])

  const featured = visible.filter((p) => p.featured)
  const rest = visible.filter((p) => !p.featured)

  return (
    <>
      {/* Search + filter */}
      <div className="reveal flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="relative w-full md:max-w-sm">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search field notes…"
            className="w-full bg-white border border-line rounded-full pl-11 pr-5 py-3 text-[15px] text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === f.id
                  ? 'bg-surface-3 text-text-1 border-line-2 shadow-card'
                  : 'bg-white text-text-2 border-line hover:border-accent hover:text-accent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <BlogCard key={p.id} post={p} index={i} variant="featured" />
          ))}
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <BlogCard key={p.id} post={p} index={i} />
          ))}
        </div>
      ) : (
        featured.length === 0 && (
          <div className="text-center py-20 text-text-3">No notes match your search.</div>
        )
      )}
    </>
  )
}
