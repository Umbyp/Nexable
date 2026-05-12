import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/sections/ContactForm'

const channels = [
  { label: 'EMAIL',           value: 'hello@nexable.studio',  href: 'mailto:hello@nexable.studio' },
  { label: 'SCHEDULE A CALL', value: 'cal.com/nexable/intro', href: 'https://cal.com/nexable/intro' },
  { label: 'LINE OFFICIAL',   value: '@nexable',              href: '#' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT / 01"
        title={<>Tell us what to <span className="accent-italic">build.</span></>}
        subtitle="We respond to every project inquiry within 48 hours with a concrete next step — not a sales call."
      />

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-text-1 leading-tight">
              Three ways<br />to <em className="accent-italic">start.</em>
            </h2>
            <p className="mt-4 text-text-2 leading-relaxed">
              Whichever feels right. We're a small team — you'll hear back from someone who's actually building.
            </p>

            <div className="mt-10 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="surface surface-hover flex items-center justify-between p-5 group"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-text-3">
                      {c.label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-text-1">{c.value}</div>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-text-2 group-hover:bg-accent group-hover:text-text-1 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-line">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-text-3 mb-3">
                STUDIO
              </div>
              <p className="text-text-2 leading-relaxed">
                Nexable Studio<br />
                Sukhumvit 31, Wattana<br />
                Bangkok 10110, Thailand
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
