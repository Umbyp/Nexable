import { Service } from '@/data/services'
import Tag from '@/components/ui/Tag'

const ICONS: Record<Service['icon'], JSX.Element> = {
  rag: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 9h6M9 13h6M9 17h3" />
      <circle cx="17" cy="17" r="2.5" />
    </>
  ),
  flow: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
    </>
  ),
  line: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 11h20M7 16h2M11 16h2" />
    </>
  ),
  tournament: (
    <>
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
}

const TerminalMock = () => (
  <div className="rounded-2xl bg-surface-3 p-5 font-mono text-[11px] leading-relaxed text-text-1/90 border border-white/10">
    <div className="flex gap-1.5 mb-3">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
    </div>
    <div>
      <span className="text-accent">$</span> nexable rag ingest --source ./docs --vector pgvector
    </div>
    <div className="text-text-1/50">→ embedding 1,284 chunks · model: text-embedding-3-large</div>
    <div className="text-text-1/50">
      → indexed to <span className="text-accent">production</span> · 312ms p95 retrieval
    </div>
    <div className="mt-2">
      <span className="text-accent">$</span> nexable agent deploy
    </div>
    <div className="text-text-1/50">
      → agent <span className="text-accent">support-th-v3</span> live · widget embed ready
    </div>
  </div>
)

const DashMock = () => {
  const heights = [35, 50, 42, 65, 70, 48, 80, 55, 62, 90, 72, 85]
  return (
    <div className="rounded-2xl bg-surface-3 p-5 border border-white/10">
      <div className="text-[10px] text-text-1/50 font-mono mb-3">RUNS · LAST 12 HOURS</div>
      <div className="flex items-end gap-1.5 h-24">
        {heights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${i % 3 === 0 ? 'bg-white/20' : 'bg-accent'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

interface Props {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: Props) {
  const sizeClass =
    service.size === 'large'
      ? 'md:col-span-2 md:row-span-2'
      : service.size === 'small'
      ? 'md:col-span-2'
      : ''
  const delayClass = `delay-${(index % 3) + 1}` // for reveal stagger

  return (
    <div
      className={`surface surface-hover ${sizeClass} reveal ${delayClass} p-8 md:p-10 flex flex-col`}
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[service.icon]}
        </svg>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-text-1 tracking-tight">{service.title}</h3>
      <p className="mt-3 text-text-2 leading-relaxed">{service.description}</p>

      {service.tags && service.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      {service.visual === 'terminal' && (
        <div className="mt-6">
          <TerminalMock />
        </div>
      )}
      {service.visual === 'dashboard' && (
        <div className="mt-6">
          <DashMock />
        </div>
      )}
    </div>
  )
}
