'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { searchProjects, SearchProject } from '@/data/searchProjects'

const filters: { id: string; label: string }[] = [
  { id: 'all',   label: 'All' },
  { id: 'ai',    label: 'AI & RAG' },
  { id: 'line',  label: 'LINE / Commerce' },
  { id: 'sport', label: 'Sports / Live' },
  { id: 'ops',   label: 'Operations' },
]

export default function ProjectSearch() {
  const [query, setQuery]       = useState('')
  const [activeCat, setActive]  = useState('all')
  const inputRef                = useRef<HTMLInputElement | null>(null)

  // ⌘K / Ctrl-K to focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.select()
        inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return searchProjects.filter((p: SearchProject) => {
      const matchCat = activeCat === 'all' || p.cats.includes(activeCat)
      const matchQ =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.searchText.toLowerCase().includes(q) ||
        p.stack.join(' ').toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [query, activeCat])

  return (
    <section className="py-20 md:py-24 relative">
      <div className="container-x">
        <div className="max-w-3xl mx-auto reveal">
          {/* Head */}
          <div className="text-center mb-5 sm:mb-7 px-2">
            <span className="eyebrow">FIND A PROJECT / 00</span>
            <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-1">
              Search anything we've <span className="accent-italic">shipped.</span>
            </h3>
          </div>

          {/* Search bar */}
          <div className="surface flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1 sm:py-2 rounded-full focus-within:border-accent focus-within:shadow-glow-accent transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-3 flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: RAG · Thai LINE OA · scoreboard · 3x3 · automation…"
              className="flex-1 bg-transparent border-none outline-none py-2 sm:py-3 text-sm sm:text-base text-text-1 placeholder:text-text-3 min-w-0"
              autoComplete="off"
            />
            <kbd className="hidden sm:inline-block font-mono text-[11px] text-text-3 bg-surface-2 border border-line rounded-md px-2 py-1">
              ⌘ K
            </kbd>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mt-4 sm:mt-5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  activeCat === f.id
                    ? 'bg-accent text-bg border-accent'
                    : 'bg-surface text-text-2 border-line hover:border-accent hover:text-accent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visible.map((p) => (
              <Link
                key={p.id}
                href="/showcase"
                className="group surface p-4 sm:p-5 rounded-2xl flex flex-col gap-2 transition-all hover:border-accent/40 hover:bg-surface-2 hover:-translate-y-0.5"
              >
                <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                  {p.cat}
                </div>
                <h4 className="text-[15px] font-semibold text-text-1 leading-snug">{p.title}</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-line text-text-2">
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
            {visible.length === 0 && (
              <div className="col-span-full text-center py-12 text-text-3 font-mono text-sm tracking-[0.1em]">
                NO MATCHES · TRY A DIFFERENT QUERY
              </div>
            )}
          </div>

          {/* Footer link */}
          <div className="mt-7 text-center">
            <Link href="/showcase" className="btn-link">
              Open full showcase →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
