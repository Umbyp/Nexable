'use client'

const partners = [
  'Court Republic',
  '3x3 Bangkok League',
  'SiamRetail',
  'NorthStar Logistics',
  'FieldOps',
  'Vertex Studio',
  'InsightAI',
  'Hatchwave',
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-surface-2/50 py-10 overflow-hidden">
      <div className="container-x">
        <p className="text-center text-text-3 text-xs font-medium tracking-[0.2em] uppercase">
          Building with teams across SaaS · sports · commerce · operations
        </p>
      </div>

      <div className="mt-8 relative overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="flex items-center gap-3 text-text-2 font-medium text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {p}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
