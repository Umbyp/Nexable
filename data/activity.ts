export interface ActivityItem {
  time: string
  target: string
  description: string
  ago: string
}

export const activityFeed: ActivityItem[] = [
  { time: '10:24', target: 'court-republic',      description: 'deployed v3.2 to',     ago: '2h ago' },
  { time: '08:15', target: 'sukhumvit-line-oa',   description: 'ingested 4,212 chunks ·', ago: '4h ago' },
  { time: '06:43', target: 'queue-automation',    description: 'p99 latency ↓ 28% ·',  ago: '6h ago' },
  { time: 'YDAY',  target: '3x3-platform',        description: 'shipped',               ago: '1d ago' },
  { time: 'YDAY',  target: 'Flex carousel v4',    description: 'released',              ago: '1d ago' },
  { time: 'MON',   target: 'support-th-v3',       description: 'opened',                ago: '3d ago' },
]

export const activityStats = [
  { value: '11',     label: 'DEPLOYS THIS WEEK' },
  { value: '0',      label: 'P0 INCIDENTS · 90D' },
  { value: '2.1M',   label: 'INFERENCES · 30D' },
  { value: '99.97%', label: 'SLA · ROLLING 12M' },
]
