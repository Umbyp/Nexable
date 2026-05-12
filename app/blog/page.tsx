import PageHero from '@/components/sections/PageHero'
import BlogFilter from '@/components/sections/BlogFilter'
import NewsletterCta from '@/components/sections/NewsletterCta'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="FIELD NOTES / 01"
        title={
          <>
            What we're <span className="accent-italic">learning</span> by shipping.
          </>
        }
        subtitle="Notes from the build — RAG patterns, automation traps, scoreboard latency, the hard parts."
      />

      <section className="container-x pb-20">
        <BlogFilter posts={blogPosts} />
      </section>

      <NewsletterCta />
    </>
  )
}
