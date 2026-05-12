import PageHero from '@/components/sections/PageHero'
import CtaCard from '@/components/sections/CtaCard'
import ProductCard from '@/components/cards/ProductCard'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE BUILD / 01"
        title={
          <>
            Six products. <span className="accent-italic">One stack.</span>
            <br />
            Built to scale with your team.
          </>
        }
        subtitle="Each Nexable product solves a specific operational gap — and they compose. Deploy one, or wire them together into your full intelligent backbone."
      />

      <section className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <CtaCard
        title={<>Need <span className="accent-italic">something else?</span></>}
        description="If your problem doesn't fit one of these, we build custom. Tell us what you need."
        buttonLabel="Talk to engineering"
        buttonHref="/contact"
      />
    </>
  )
}
