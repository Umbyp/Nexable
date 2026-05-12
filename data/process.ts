export interface ProcessStep {
  num: string
  name: string
  duration: string
  description: string
  deliverables: string[]
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    name: 'Brief',
    duration: '30 MIN',
    description:
      '30-minute call. We listen, ask hard questions, and decide together if we\'re the right team for the job.',
    deliverables: ['Mutual NDA', 'Scope clarified', 'Go / no-go call'],
  },
  {
    num: '02',
    name: 'Architecture',
    duration: '48 HOURS',
    description:
      'A build plan with stack choices, milestones, and risks. Fixed estimate. No fishing expeditions.',
    deliverables: ['Build plan doc', 'Fixed quote', 'Timeline'],
  },
  {
    num: '03',
    name: 'Build',
    duration: '6–12 WEEKS',
    description:
      'Weekly demos in your Slack. You see it shaping up — no surprise reveals, no end-of-project disasters.',
    deliverables: ['Weekly demos', 'Slack channel', 'Live staging'],
  },
  {
    num: '04',
    name: 'Ship',
    duration: '1 DAY',
    description:
      'Production deploy with observability built in: dashboards, alerts, runbooks. Boring on purpose.',
    deliverables: ['Live URL', 'Dashboards', 'Runbooks'],
  },
  {
    num: '05',
    name: 'Operate',
    duration: 'ONGOING',
    description:
      'We stay on. Tuning, scaling, on-call support, monthly check-ins — for as long as you need us.',
    deliverables: ['Monthly check-in', 'On-call support', 'Iteration'],
  },
]
