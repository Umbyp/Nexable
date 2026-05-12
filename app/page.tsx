import Link from 'next/link'
import Hero            from '@/components/sections/Hero'
import TrustBar        from '@/components/sections/TrustBar'
import ProjectSearch   from '@/components/sections/ProjectSearch'
import Process         from '@/components/sections/Process'
import TechStack       from '@/components/sections/TechStack'
import RecentActivity  from '@/components/sections/RecentActivity'
import Testimonial     from '@/components/sections/Testimonial'
import FAQ             from '@/components/sections/FAQ'
import CtaCard         from '@/components/sections/CtaCard'
import ServiceCard     from '@/components/cards/ServiceCard'
import FeaturedProjectCard from '@/components/cards/FeaturedProjectCard'
import StatCounter     from '@/components/StatCounter'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

export default function HomePage() {
  const featured = projects.slice(0, 2)

  return (
    <>
      {/* 1 — HERO */}
      <Hero />

      {/* 2 — TRUST */}
      <TrustBar />

      {/* 3 — SEARCH PROJECTS */}
      <ProjectSearch />

      {/* 4 — SERVICES */}
      <section className="container-x py-24 md:py-32">
        <div className="reveal max-w-3xl mb-16">
          <span className="eyebrow">CAPABILITIES / 01</span>
          <h2 className="h-section mt-6">
            A full stack for <span className="accent-italic">intelligent</span> products.
          </h2>
          <p className="mt-6 text-text-2 text-lg leading-relaxed">
            We design, build, and run the infrastructure modern teams need — from conversational AI
            to operational automations and live data pipelines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[1fr]">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* 5 — PROCESS (improved!) */}
      <Process />

      {/* 6 — STATS */}
      <section className="container-x py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter target={38}    suffix="+"  label="Production systems shipped across AI, commerce, and live ops." />
          <StatCounter target={99.97} decimals={2} suffix="%"  label="Uptime across deployed services in the last twelve months." />
          <StatCounter target={312}   suffix="ms" label="Median p95 retrieval latency across our RAG deployments." />
          <StatCounter target={6}     suffix="×"  label="Average operational throughput gain after we automate a workflow." />
        </div>
      </section>

      {/* 7 — TECH STACK */}
      <TechStack />

      {/* 8 — FEATURED PROJECTS */}
      <section className="container-x py-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow">SELECTED WORK / 05</span>
            <h2 className="h-section mt-6">
              Recent <span className="accent-italic">deployments.</span>
            </h2>
          </div>
          <Link href="/showcase" className="btn btn-ghost">
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <FeaturedProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* 9 — RECENT ACTIVITY */}
      <RecentActivity />

      {/* 10 — TESTIMONIAL */}
      <Testimonial />

      {/* 11 — FAQ */}
      <FAQ />

      {/* 12 — CTA */}
      <CtaCard
        title={<>Have a system you wish <span className="accent-italic">already existed?</span></>}
        description="Tell us what's slow, fragile, or impossible today. We'll come back with a build plan within 48 hours."
        buttonLabel="Start a project"
        buttonHref="/contact"
      />
    </>
  )
}
