'use client'

import { useState } from 'react'
import { faqs } from '@/data/faq'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl mb-14">
          <span className="eyebrow">QUESTIONS / 08</span>
          <h2 className="h-section mt-6">
            Things we get <span className="accent-italic">asked</span> often.
          </h2>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border-t border-line ${i === faqs.length - 1 ? 'border-b' : ''}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span
                    className={`text-[17px] font-medium tracking-tight transition-colors ${
                      isOpen ? 'text-accent' : 'text-text-1 group-hover:text-accent'
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-accent border-accent text-bg rotate-45'
                        : 'border-line text-text-2 group-hover:border-accent group-hover:text-accent'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-out ${
                    isOpen ? 'max-h-[320px]' : 'max-h-0'
                  }`}
                >
                  <p className="text-text-2 leading-relaxed text-[15px] pr-16 pb-7">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
