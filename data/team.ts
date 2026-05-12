export interface TeamMember {
  initials: string
  name: string
  role: string
  gradient: string // Tailwind gradient utility
}

export const team: TeamMember[] = [
  {
    initials: 'AK',
    name: 'Arnan K.',
    role: 'FOUNDER · AI SYSTEMS',
    gradient: 'from-accent to-primary', // indigo → navy
  },
  {
    initials: 'PT',
    name: 'Ploy T.',
    role: 'LEAD · INFRASTRUCTURE',
    gradient: 'from-secondary to-primary', // cyan → navy
  },
  {
    initials: 'RS',
    name: 'Rachan S.',
    role: 'FRONTEND · DESIGN ENG',
    gradient: 'from-accent to-secondary', // indigo → cyan
  },
  {
    initials: 'NV',
    name: 'Nina V.',
    role: 'PRODUCT · DELIVERY',
    gradient: 'from-primary to-accent', // navy → indigo
  },
]
