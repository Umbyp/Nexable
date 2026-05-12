import { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="container-x pt-16 md:pt-24 pb-16 md:pb-20">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1
          className="reveal delay-1 mt-6 font-bold text-text-1 tracking-tight"
          style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.03em' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="reveal delay-2 mt-8 text-text-2 max-w-2xl text-lg md:text-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="reveal delay-3 mt-10">{children}</div>}
      </div>
    </section>
  )
}
