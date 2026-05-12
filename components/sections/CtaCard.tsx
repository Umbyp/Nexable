import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  title: ReactNode
  description: string
  buttonLabel: string
  buttonHref: string
}

export default function CtaCard({ title, description, buttonLabel, buttonHref }: Props) {
  return (
    <section className="container-x py-24">
      <div className="reveal relative overflow-hidden rounded-3xl gradient-navy-indigo p-12 md:p-16 text-center shadow-lift">
        {/* Glow accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-10 w-[420px] h-[420px] rounded-full blur-3xl bg-accent/30" />
          <div className="absolute -bottom-20 -right-10 w-[420px] h-[420px] rounded-full blur-3xl bg-accent/30" />
        </div>

        <div className="relative">
          <h2 className="text-h-section font-bold text-text-1 max-w-3xl mx-auto leading-[1.05]">
            {title}
          </h2>
          <p className="mt-6 text-text-2 max-w-xl mx-auto text-lg">{description}</p>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-card"
          >
            {buttonLabel} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
