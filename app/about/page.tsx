import PageHero from '@/components/sections/PageHero'
import CtaCard from '@/components/sections/CtaCard'
import StatCounter from '@/components/StatCounter'
import TeamCard from '@/components/cards/TeamCard'
import { team } from '@/data/team'

const pillars = [
  {
    num: '01 / VISION',
    title: 'Software that thinks.',
    body:
      'We believe every company will run on intelligent infrastructure within five years. Our job is to make that infrastructure boring enough to trust and powerful enough to matter.',
  },
  {
    num: '02 / MISSION',
    title: 'Ship the real thing.',
    body:
      'Demos are easy. Production is hard. We measure ourselves on systems running in your stack, not pitch decks. If it isn\'t deployed, it doesn\'t count.',
  },
  {
    num: '03 / METHOD',
    title: 'Senior, end-to-end.',
    body:
      'No handoffs. The person who designs the architecture is the person writing the code is the person on call when it breaks. Small teams, deep expertise.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NEXABLE / 01"
        title={
          <>
            We build the <span className="accent-italic">unfair advantage</span>
            <br />
            modern teams quietly run on.
          </>
        }
        subtitle="Nexable is a small, senior team obsessed with shipping infrastructure that holds up in production — not slideware. We work where ambition meets technical depth: AI agents that retrieve from your real data, live systems that don't blink at load, automations that make whole teams faster."
      />

      {/* PILLARS */}
      <section className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.num} className={`surface reveal delay-${i + 1} p-8 md:p-10`}>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5">{p.num}</div>
              <h3 className="text-2xl font-bold text-text-1 tracking-tight">{p.title}</h3>
              <p className="mt-4 text-text-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-strong" />
        <div className="container-x relative py-28">
          <span className="eyebrow reveal mb-8">MANIFESTO / 02</span>
          <p className="reveal delay-1 mt-8 max-w-4xl text-2xl md:text-3xl font-serif italic text-text-1 leading-relaxed">
            We exist to close the gap between <em className="text-accent">what's technically possible</em> and what teams actually have running.
            Most software is built to demo. We build it to <em className="text-accent">last</em> — to handle a quiet Tuesday at 3am
            and a launch day at 9. That's the only kind of software worth shipping.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="container-x py-24">
        <div className="reveal max-w-3xl mb-14">
          <span className="eyebrow">THE TEAM / 03</span>
          <h2 className="h-section mt-6">
            Builders, not <span className="accent-italic">spectators.</span>
          </h2>
          <p className="mt-6 text-text-2 text-lg leading-relaxed">
            A senior team across AI, distributed systems, and frontend craft. Every project is led
            by someone who has shipped one before.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <TeamCard key={m.initials} member={m} index={i} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20">
        <div className="reveal max-w-3xl mb-14">
          <span className="eyebrow">BY THE NUMBERS / 04</span>
          <h2 className="h-section mt-6">
            Track record, <span className="accent-italic">measured.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter target={38}  suffix="+"   label="Production systems live across AI, commerce, ops." />
          <StatCounter target={14}  suffix="/14" label="On-time launches in the last twelve months." />
          <StatCounter target={2.1} decimals={1} suffix="M" label="Inferences served across our deployed agents (90d)." />
          <StatCounter target={0}   suffix=" P0" label="Production-blocking incidents in our active stack." />
        </div>
      </section>

      <CtaCard
        title={<>Want to know <span className="accent-italic">how we work?</span></>}
        description="The fastest way is to send us a problem. We'll come back with what we'd build, how, and when."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  )
}
