import Link from 'next/link'
import { Project } from '@/data/projects'
import ChatMockup from '@/components/mockups/ChatMockup'
import LineMockup from '@/components/mockups/LineMockup'
import FlexMockup from '@/components/mockups/FlexMockup'
import BracketMockup from '@/components/mockups/BracketMockup'
import ScoreMockup from '@/components/mockups/ScoreMockup'
import CourtMockup from '@/components/mockups/CourtMockup'
import FlowMockup from '@/components/mockups/FlowMockup'

function Mockup({ kind }: { kind: Project['mockup'] }) {
  switch (kind) {
    case 'chat':    return <ChatMockup />
    case 'line':    return <LineMockup />
    case 'flex':    return <FlexMockup />
    case 'bracket': return <BracketMockup />
    case 'score':   return <ScoreMockup />
    case 'court':   return <CourtMockup />
    case 'flow':    return <FlowMockup />
  }
}

interface Props {
  project: Project
  index?: number
}

export default function FeaturedProjectCard({ project, index = 0 }: Props) {
  return (
    <Link
      href="/showcase"
      className={`group surface surface-hover reveal delay-${(index % 3) + 1} overflow-hidden flex flex-col relative`}
    >
      {/* Mockup */}
      <div className={`relative h-[320px] flex items-center justify-center bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.20), transparent 50%)',
          }}
        />
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <Mockup kind={project.mockup} />
        </div>
      </div>

      {/* Arrow chip top-right */}
      <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-line/60 flex items-center justify-center text-text-1 group-hover:bg-accent group-hover:text-text-1 group-hover:rotate-[-45deg] transition-all duration-300">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>

      <div className="p-7 flex-1 flex flex-col">
        <div className="text-xs font-mono uppercase tracking-[0.15em] text-accent mb-3">
          {project.category}
        </div>
        <h3 className="text-2xl font-bold text-text-1 tracking-tight leading-tight">{project.title}</h3>
        <p className="mt-3 text-text-2 leading-relaxed">{project.solution}</p>
      </div>
    </Link>
  )
}
