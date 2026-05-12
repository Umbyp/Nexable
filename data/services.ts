export interface Service {
  id: string
  title: string
  description: string
  size: 'large' | 'small' | 'third'
  icon: 'rag' | 'flow' | 'line' | 'tournament' | 'shield'
  tags?: string[]
  visual?: 'terminal' | 'dashboard' | 'none'
}

export const services: Service[] = [
  {
    id: 'ai-rag',
    title: 'Custom AI & RAG systems',
    description:
      'Conversational agents grounded in your data. We build the ingestion, vector store, retrieval, and front-end widgets — embedded anywhere your users live.',
    size: 'large',
    icon: 'rag',
    tags: ['OpenRouter', 'pgvector', 'embedding pipelines', 'streaming', 'function calling'],
    visual: 'terminal',
  },
  {
    id: 'automation',
    title: 'Workflow automation',
    description:
      'From ticket triage to nightly reports — we wire the systems your team uses into one orchestrated flow.',
    size: 'small',
    icon: 'flow',
    tags: ['n8n', 'Power Automate', 'Grafana'],
    visual: 'dashboard',
  },
  {
    id: 'line',
    title: 'LINE & messaging commerce',
    description:
      'Flex Messages, carts, PromptPay payments — full LINE OA storefronts and AI support agents.',
    size: 'third',
    icon: 'line',
    visual: 'none',
  },
  {
    id: 'tournaments',
    title: 'Live tournament systems',
    description:
      'Multi-court realtime brackets, scheduling, OBS overlays — purpose-built for live competitive play.',
    size: 'third',
    icon: 'tournament',
    visual: 'none',
  },
  {
    id: 'ops',
    title: 'Operations & observability',
    description:
      'Queue automation, monitoring dashboards, alerting — so your business actually runs while you sleep.',
    size: 'third',
    icon: 'shield',
    visual: 'none',
  },
]
