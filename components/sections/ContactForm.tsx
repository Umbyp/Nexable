'use client'

import { useState } from 'react'

const topics = ['AI / RAG', 'LINE / Commerce', 'Live / Sports', 'Automation', 'Other']

const budgets = [
  '< $10k · prototype',
  '$10k–$30k · MVP',
  '$30k–$80k · production build',
  '$80k+ · multi-phase',
  'Not sure yet',
]

export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([])
  const [sent, setSent]     = useState(false)

  const togglePill = (t: string) => {
    setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="surface reveal delay-1 p-8 md:p-10">
      <h3 className="text-2xl font-bold text-text-1 mb-8">Project brief</h3>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <Field label="Your name">
          <input required type="text" placeholder="Jane Founder" className={inputCls} />
        </Field>
        <Field label="Company">
          <input type="text" placeholder="Acme Inc." className={inputCls} />
        </Field>
      </div>

      <Field label="Work email" className="mb-5">
        <input required type="email" placeholder="jane@acme.com" className={inputCls} />
      </Field>

      <Field label="What are you building?" className="mb-5">
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => {
            const isOn = picked.includes(t)
            return (
              <button
                type="button"
                key={t}
                onClick={() => togglePill(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isOn
                    ? 'bg-accent text-text-1 border-accent shadow-glow-accent'
                    : 'bg-white text-text-2 border-line hover:border-accent hover:text-accent'
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </Field>

      <Field label="Budget range" className="mb-5">
        <select required className={inputCls + ' appearance-none select-arrow'}>
          <option value="">Select a range…</option>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about it" className="mb-7">
        <textarea
          required
          rows={5}
          placeholder="What problem are you solving? Who's it for? What does success look like?"
          className={inputCls + ' resize-none'}
        />
      </Field>

      <button type="submit" className="btn btn-primary w-full justify-center">
        Send brief →
      </button>

      {sent && (
        <div className="mt-5 p-4 rounded-xl bg-accent/10 border border-accent/30 text-accent-700 text-center text-sm font-medium">
          ✓ Brief received. We'll reply within 48 hours.
        </div>
      )}
    </form>
  )
}

function Field({
  label,
  children,
  className = '',
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-text-2 mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition'
