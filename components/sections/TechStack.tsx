import { techStack } from '@/data/tech'

export default function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl mb-16">
          <span className="eyebrow">THE TOOLBOX / 04</span>
          <h2 className="h-section mt-6">
            Built on tools we <span className="accent-italic">trust</span> in production.
          </h2>
          <p className="mt-6 text-text-2 text-lg leading-relaxed">
            We're opinionated about the stack — but pragmatic. These are the tools we reach for first
            because they hold up under load.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((cat, i) => (
            <div
              key={cat.label}
              className={`reveal delay-${(i % 3) + 1} surface p-7 transition-all duration-300 hover:border-accent/30 hover:bg-surface-2`}
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-text-3 uppercase mb-5">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3.5 py-2 rounded-lg bg-surface-2 border border-line text-sm font-medium text-text-2 hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-px transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
