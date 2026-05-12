'use client'

import { useState } from 'react'
import ShowcaseCard from '@/components/cards/ShowcaseCard'
import { Project, Category } from '@/data/projects'

const filters: { id: 'all' | Category; label: string }[] = [
  { id: 'all',   label: 'All' },
  { id: 'ai',    label: 'AI & RAG' },
  { id: 'line',  label: 'LINE / Commerce' },
  { id: 'sport', label: 'Sports / Live' },
  { id: 'ops',   label: 'Operations' },
]

export default function ShowcaseFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<'all' | Category>('all')

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.cats.includes(active))

  return (
    <>
      {/* Filter bar */}
      <div className="reveal flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              active === f.id
                ? 'bg-surface-3 text-text-1 border-line-2 shadow-card'
                : 'bg-white text-text-2 border-line hover:border-accent hover:text-accent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <ShowcaseCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-3">No projects in this category yet.</div>
      )}
    </>
  )
}
