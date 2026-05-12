import { processSteps } from '@/data/process'

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />

      <div className="container-x relative">
        {/* Head */}
        <div className="reveal max-w-3xl mb-20">
          <span className="eyebrow">HOW WE WORK / 02</span>
          <h2 className="h-section mt-6">
            Brief to <span className="accent-italic">deployed</span> in five steps.
          </h2>
          <p className="mt-6 text-text-2 text-lg leading-relaxed">
            No discovery decks, no waterfall handoffs. The same senior engineer who scopes your project
            is the one who ships it — and the one on call when you need them.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {processSteps.map((step, i) => (
            <article
              key={step.num}
              className={`reveal delay-${i + 1} group relative surface p-7 flex flex-col transition-all duration-500 hover:bg-surface-2 hover:border-accent/30 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Big editorial number */}
              <div className="relative font-serif italic text-[88px] leading-none text-text-3 group-hover:text-accent transition-colors duration-500">
                {step.num}
              </div>

              {/* Step name + duration */}
              <div className="relative mt-4 flex items-baseline justify-between gap-3 pb-4 border-b border-line">
                <h3 className="text-xl font-semibold text-text-1 tracking-tight">{step.name}</h3>
                <span className="font-mono text-[10px] tracking-[0.18em] text-text-3 whitespace-nowrap">
                  {step.duration}
                </span>
              </div>

              {/* Description */}
              <p className="relative mt-4 text-[14px] text-text-2 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Deliverables */}
              <div className="relative mt-6 pt-5 border-t border-line">
                <div className="font-mono text-[9px] tracking-[0.22em] text-text-3 mb-3">
                  YOU GET
                </div>
                <ul className="space-y-1.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[13px] text-text-1">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector arrow to next (desktop only, not last) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-5 h-5 items-center justify-center text-text-3 group-hover:text-accent transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
