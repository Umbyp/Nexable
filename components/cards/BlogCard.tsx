import Link from 'next/link'
import { BlogPost } from '@/data/blog'

const Thumbs: Record<BlogPost['thumb'], JSX.Element> = {
  rag: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <rect x="20" y="20" width="160" height="80" rx="6" stroke="#C5FA5A" strokeWidth="1.2" opacity="0.6" />
      <rect x="35" y="35" width="40" height="6" rx="3" fill="#C5FA5A" opacity="0.8" />
      <rect x="35" y="48" width="100" height="4" rx="2" fill="#0e1015" opacity="0.4" />
      <rect x="35" y="58" width="80" height="4" rx="2" fill="#0e1015" opacity="0.4" />
      <rect x="35" y="68" width="120" height="4" rx="2" fill="#0e1015" opacity="0.4" />
      <circle cx="155" cy="42" r="6" fill="#C5FA5A" />
      <circle cx="170" cy="55" r="4" fill="#C5FA5A" />
      <circle cx="160" cy="80" r="5" fill="#C5FA5A" opacity="0.7" />
      <line x1="155" y1="42" x2="170" y2="55" stroke="#C5FA5A" opacity="0.4" />
      <line x1="170" y1="55" x2="160" y2="80" stroke="#C5FA5A" opacity="0.4" />
    </svg>
  ),
  orbit: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <circle cx="50"  cy="60" r="18" stroke="#C5FA5A" strokeWidth="1.5" opacity="0.7" />
      <circle cx="100" cy="60" r="14" stroke="#C5FA5A" strokeWidth="1.5" opacity="0.8" />
      <circle cx="150" cy="60" r="18" stroke="#0e1015" strokeWidth="1.5" opacity="0.7" />
      <line x1="68"  y1="60" x2="86"  y2="60" stroke="#0e1015" strokeDasharray="2,2" opacity="0.4" />
      <line x1="114" y1="60" x2="132" y2="60" stroke="#0e1015" strokeDasharray="2,2" opacity="0.4" />
    </svg>
  ),
  score: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <rect x="30"  y="40" width="60" height="40" rx="4" fill="#C5FA5A" fillOpacity="0.15" stroke="#C5FA5A" />
      <text x="60"  y="68" fill="#C5FA5A" fontFamily="monospace" fontSize="22" textAnchor="middle">22</text>
      <rect x="110" y="40" width="60" height="40" rx="4" fill="#0e1015" fillOpacity="0.05" stroke="#0e1015" strokeOpacity="0.3" />
      <text x="140" y="68" fill="#0e1015" fontFamily="monospace" fontSize="22" textAnchor="middle">19</text>
    </svg>
  ),
  thai: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <path d="M40 30 Q100 10, 160 30 L160 80 Q100 100, 40 80 Z" fill="#C5FA5A" fillOpacity="0.15" stroke="#C5FA5A" />
      <text x="100" y="65" fill="#C5FA5A" fontFamily="serif" fontSize="22" textAnchor="middle" fontStyle="italic">ภาษาไทย</text>
    </svg>
  ),
  tokens: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <rect x="20"  y="20" width="40" height="20" rx="3" fill="#C5FA5A" opacity="0.6" />
      <rect x="70"  y="20" width="50" height="20" rx="3" fill="#0e1015" opacity="0.6" />
      <rect x="130" y="20" width="50" height="20" rx="3" fill="#C5FA5A" opacity="0.6" />
      <rect x="20"  y="55" width="160" height="6" rx="3" fill="#0e1015" opacity="0.2" />
      <rect x="20"  y="70" width="120" height="6" rx="3" fill="#0e1015" opacity="0.2" />
      <rect x="20"  y="85" width="100" height="6" rx="3" fill="#0e1015" opacity="0.2" />
    </svg>
  ),
  sla: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <polyline points="20,90 50,75 80,80 110,55 140,60 180,30" stroke="#C5FA5A" strokeWidth="2" fill="none" />
      <polyline points="20,90 50,75 80,80 110,55 140,60 180,30 180,100 20,100" fill="#C5FA5A" opacity="0.1" />
      <circle cx="180" cy="30" r="4" fill="#C5FA5A" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <rect x="40"  y="35" width="50" height="50" rx="6" stroke="#C5FA5A" opacity="0.7" fill="#C5FA5A" fillOpacity="0.1" />
      <rect x="110" y="35" width="50" height="50" rx="6" stroke="#C5FA5A" opacity="0.7" fill="#C5FA5A" fillOpacity="0.1" />
      <path d="M90 60 L110 60" stroke="#0e1015" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
      <text x="65"  y="64" fill="#C5FA5A" fontFamily="monospace" fontSize="9" textAnchor="middle">tool()</text>
      <text x="135" y="64" fill="#C5FA5A" fontFamily="monospace" fontSize="9" textAnchor="middle">agent</text>
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
      <rect x="20"  y="25" width="70"  height="30" rx="4" stroke="#C5FA5A" opacity="0.6" fill="#C5FA5A" fillOpacity="0.08" />
      <rect x="100" y="25" width="80"  height="30" rx="4" stroke="#C5FA5A" opacity="0.6" fill="#C5FA5A" fillOpacity="0.08" />
      <rect x="20"  y="65" width="160" height="30" rx="4" stroke="#0e1015" opacity="0.6" fill="#0e1015" fillOpacity="0.05" />
      <line x1="30"  y1="80" x2="60"  y2="75" stroke="#C5FA5A" />
      <line x1="60"  y1="75" x2="90"  y2="85" stroke="#C5FA5A" />
      <line x1="90"  y1="85" x2="120" y2="72" stroke="#C5FA5A" />
      <line x1="120" y1="72" x2="150" y2="78" stroke="#C5FA5A" />
      <line x1="150" y1="78" x2="170" y2="70" stroke="#C5FA5A" />
    </svg>
  ),
}

interface Props {
  post: BlogPost
  index?: number
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, index = 0, variant = 'default' }: Props) {
  const isFeatured = variant === 'featured'
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`surface surface-hover reveal delay-${(index % 3) + 1} overflow-hidden group flex flex-col ${
        isFeatured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      <div
        className={`relative bg-gradient-to-br from-surface-2 to-surface-3 overflow-hidden flex items-center justify-center ${
          isFeatured ? 'h-[260px] md:h-auto md:w-1/2' : 'h-[200px]'
        }`}
      >
        <div className="absolute inset-0 p-6">{Thumbs[post.thumb]}</div>
      </div>
      <div className={`p-6 md:p-7 flex-1 flex flex-col ${isFeatured ? 'md:p-10' : ''}`}>
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-accent mb-3">
          {post.tag}
        </div>
        <h3 className={`font-bold text-text-1 tracking-tight leading-tight ${
          isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'
        }`}>
          {post.title}
        </h3>
        <p className="mt-3 text-text-2 leading-relaxed text-[15px] flex-1">{post.excerpt}</p>
        <div className="mt-5 flex justify-between items-center text-[11px] text-text-3 font-mono uppercase tracking-wider">
          <span>{post.author} · {post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
