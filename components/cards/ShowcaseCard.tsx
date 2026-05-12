import { Project } from '@/data/projects'
import Tag from '@/components/ui/Tag'
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

export default function ShowcaseCard({ project, index = 0 }: Props) {
  return (
    <article className={`surface surface-hover reveal delay-${(index % 3) + 1} overflow-hidden flex flex-col`}>
      {/* Mockup */}
      <div className={`relative h-[280px] flex items-center justify-center bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
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

      {/* Meta */}
      <div className="p-7 flex-1 flex flex-col">
        <div className="text-xs font-mono uppercase tracking-[0.15em] text-accent mb-3">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-text-1 tracking-tight leading-tight">{project.title}</h3>
        <div className="mt-4 text-sm text-text-2 leading-relaxed space-y-2">
          <p>
            <strong className="text-text-1 font-semibold">Challenge:</strong> {project.challenge}
          </p>
          <p>
            <strong className="text-text-1 font-semibold">Solution:</strong> {project.solution}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </article>
  )
}
