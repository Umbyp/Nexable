import { TeamMember } from '@/data/team'

interface Props {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: Props) {
  return (
    <div className={`surface surface-hover reveal delay-${(index % 3) + 1} p-7 text-center`}>
      <div
        className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-text-1 text-xl font-bold tracking-wide shadow-card`}
      >
        {member.initials}
      </div>
      <h4 className="mt-5 text-lg font-bold text-text-1">{member.name}</h4>
      <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.15em] text-text-3">
        {member.role}
      </div>
    </div>
  )
}
