import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Soft grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)',
        }}
      />

      {/* Dual radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full blur-3xl bg-accent/15" />
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] max-w-[700px] max-h-[700px] rounded-full blur-3xl bg-accent/15" />
      </div>

      <div className="container-x relative text-left pt-32 pb-24">
        {/* Eyebrow badge — green dot + uppercase mono text */}
        <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase text-text-2">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_14px_#C5FA5A]" />
          NOW SHIPPING <span className="text-text-3 mx-0.5">·</span> V1.0
        </div>

        <h1 className="reveal delay-1 h-display mt-8 max-w-[1100px] font-bold tracking-tight leading-[0.96]">
          Engineered <span className="accent-italic">intelligence</span> for ambitious teams
        </h1>

        <p className="reveal delay-2 mt-8 max-w-xl text-text-2 text-lg md:text-xl leading-relaxed">
          AI platforms, LINE-native commerce, realtime sports infrastructure,
          and automation pipelines — built to ship, not to demo.
        </p>

        <div className="reveal delay-3 mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Start a project <span>→</span>
          </Link>
          <Link href="/showcase" className="btn btn-ghost">
            See our work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-3">
        <span className="text-[10px] tracking-[0.3em] font-mono">SCROLL</span>
        <span className="w-px h-12 bg-gradient-to-b from-text-3/50 to-transparent" />
      </div>
    </section>
  )
}
