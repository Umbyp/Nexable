'use client'

import { useState } from 'react'

export default function NewsletterCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 4000)
    setEmail('')
  }

  return (
    <section className="container-x py-24">
      <div className="reveal relative overflow-hidden rounded-3xl gradient-navy-indigo p-12 md:p-16 text-center shadow-lift">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-10 w-[420px] h-[420px] rounded-full blur-3xl bg-accent/30" />
          <div className="absolute -bottom-20 -right-10 w-[420px] h-[420px] rounded-full blur-3xl bg-accent/30" />
        </div>

        <div className="relative">
          <h2 className="text-h-section font-bold text-text-1">
            Subscribe to <span className="accent-italic !text-[#C7B8FF]">field notes.</span>
          </h2>
          <p className="mt-6 text-text-2 max-w-xl mx-auto text-lg">
            One email a month. New essays on what we're shipping, what's breaking, what's next. No hype.
          </p>

          <form onSubmit={onSubmit} className="mt-10 flex flex-wrap gap-3 justify-center max-w-md mx-auto">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@team.com"
              className="flex-1 min-w-[220px] px-5 py-3 rounded-full bg-white/10 border border-white/20 text-text-1 placeholder:text-text-1/50 focus:outline-none focus:bg-white/15 focus:border-white/40 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
            >
              {status === 'sent' ? '✓ Subscribed' : 'Subscribe →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
