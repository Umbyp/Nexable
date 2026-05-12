import { activityFeed, activityStats } from '@/data/activity'

export default function RecentActivity() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl mb-10 md:mb-14">
          <span className="eyebrow">LIVE FROM THE STUDIO / 06</span>
          <h2 className="h-section mt-6">
            What we <span className="accent-italic">shipped</span> this week.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
          {/* Feed */}
          <div className="reveal surface p-5 sm:p-7 md:p-8 relative overflow-hidden">
            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />

            <div className="flex items-center justify-between mb-6 font-mono text-[11px] tracking-[0.15em]">
              <span className="inline-flex items-center gap-2 text-text-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-live-blink shadow-[0_0_12px_#4F8CFF]" />
                DEPLOY FEED
              </span>
              <span className="text-text-3">LAST 72H</span>
            </div>

            <ul className="font-mono">
              {activityFeed.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[60px_1fr_auto] gap-4 py-3 text-sm border-b border-line last:border-b-0 items-baseline"
                >
                  <span className="text-text-3 tracking-wider">{item.time}</span>
                  <span className="font-sans text-text-1">
                    {item.description} <span className="text-accent">{item.target}</span>
                  </span>
                  <span className="text-text-3 text-[11px] hidden sm:inline">{item.ago}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Side */}
          <div className="reveal delay-2">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-text-1">
              Always <span className="accent-italic">shipping.</span> Always learning.
            </h3>
            <p className="mt-5 text-text-2 leading-relaxed text-[15px]">
              We don't disappear after launch. Every project we run stays under our care — measured,
              observed, improved. The feed on the left is a snapshot of the last few days across our
              active stack.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-7">
              {activityStats.map((s) => (
                <div key={s.label} className="surface p-4 rounded-2xl">
                  <div className="font-mono text-[22px] text-accent leading-tight">{s.value}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] text-text-3 uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
