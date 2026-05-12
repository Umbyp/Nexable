export default function Testimonial() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="container-x relative">
        <div className="reveal max-w-3xl mx-auto text-center">
          <div className="font-serif italic text-[120px] leading-none text-accent opacity-40">
            &ldquo;
          </div>

          <blockquote className="font-serif italic text-[clamp(24px,3vw,36px)] leading-[1.4] text-text-1 tracking-tight my-6">
            We went from a brittle spreadsheet workflow to a live{' '}
            <em className="text-accent not-italic font-serif italic">realtime platform</em>
            {' '}our entire league runs on. Nexable didn&apos;t just build us software — they shipped us the{' '}
            <em className="text-accent not-italic font-serif italic">unfair advantage</em>
            {' '}we&apos;d been trying to articulate for two years.
          </blockquote>

          <div className="inline-flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-bg font-semibold text-base">
              AP
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-text-1">Aran Phongphat</div>
              <div className="font-mono text-[11px] tracking-[0.15em] text-text-3 uppercase mt-0.5">
                FOUNDER · 3X3 BANGKOK LEAGUE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
