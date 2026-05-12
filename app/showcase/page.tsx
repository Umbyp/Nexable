import PageHero from '@/components/sections/PageHero'
import CtaCard from '@/components/sections/CtaCard'
import ShowcaseFilter from '@/components/sections/ShowcaseFilter'
import { projects } from '@/data/projects'

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="SHOWCASE / 01"
        title={
          <>
            Systems we put <span className="accent-italic">in production.</span>
          </>
        }
        subtitle="Real builds, with real users, running today. Filter by category to see what's relevant to you."
      />

      <section className="container-x pb-20">
        <ShowcaseFilter projects={projects} />
      </section>

      <CtaCard
        title={<>Want one of these <span className="accent-italic">tailored to you?</span></>}
        description="Most projects start as a 30-minute call. We'll tell you what's possible, what isn't, and what we'd build first."
        buttonLabel="Start the conversation"
        buttonHref="/contact"
      />
    </>
  )
}
