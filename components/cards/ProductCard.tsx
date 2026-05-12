import { Product } from '@/data/products'
import Tag from '@/components/ui/Tag'
import Link from 'next/link'

const ICONS: Record<Product['icon'], JSX.Element> = {
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  line: <path d="M3 12h4l3-9 4 18 3-9h4" />,
  tournament: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2M8 18h2M14 18h2" />
    </>
  ),
  ops: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className={`surface surface-hover reveal delay-${(index % 3) + 1} p-8 md:p-10 flex flex-col`}>
      <div className="w-14 h-14 rounded-2xl bg-accent text-text-1 flex items-center justify-center mb-6 shadow-glow-accent">
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[product.icon]}
        </svg>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-text-1 tracking-tight">{product.name}</h3>
      <p className="mt-3 text-text-2 leading-relaxed">{product.description}</p>

      <ul className="mt-6 space-y-2.5">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] text-text-1">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {product.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-line flex justify-between items-center">
        <Link href="/showcase" className="btn-link">
          View case study →
        </Link>
        <span className="font-mono text-xs text-text-3">{product.version}</span>
      </div>
    </article>
  )
}
