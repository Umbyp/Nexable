export type Category = 'ai' | 'line' | 'sport' | 'ops'

export interface Project {
  id: string
  title: string
  category: string // display label
  cats: Category[] // for filtering
  challenge: string
  solution: string
  stack: string[]
  mockup: 'chat' | 'line' | 'flex' | 'bracket' | 'score' | 'court' | 'flow'
  bgGradient: string // tailwind gradient classes for mockup background
}

export const projects: Project[] = [
  {
    id: 'chatbot-rag',
    title: 'ChatBot platform with custom RAG & embeddable widget',
    category: 'AI · RAG · WIDGET',
    cats: ['ai'],
    challenge:
      'A growing SaaS team wanted self-serve answers grounded in their product docs — without leaking hallucinations.',
    solution:
      'A full RAG pipeline with chunking, embeddings, retrieval-with-citations, and a one-line embed widget that drops onto any page.',
    stack: ['React', 'pgvector', 'OpenRouter', 'streaming'],
    mockup: 'chat',
    bgGradient: 'from-[#0e1015] to-[#143157]',
  },
  {
    id: 'line-it-support',
    title: 'LINE Official IT Support agent (Thai)',
    category: 'LINE · AI · THAI',
    cats: ['ai', 'line'],
    challenge:
      'An enterprise IT team was overwhelmed with repeat tickets, mostly in Thai, mostly resolvable in two steps.',
    solution:
      'A Thai-first LINE OA agent over OpenRouter with model fallback, ticket sync, and human handoff. Deflected ~62% of tier-1 volume in month one.',
    stack: ['LINE Messaging API', 'OpenRouter', 'ServiceNow'],
    mockup: 'line',
    bgGradient: 'from-[#06283d] to-[#080a0d]',
  },
  {
    id: 'line-commerce',
    title: 'LINE commerce chatbot with Flex Messages & QR PromptPay',
    category: 'LINE · COMMERCE · PROMPTPAY',
    cats: ['line'],
    challenge:
      'A retailer needed full-funnel commerce inside LINE — browse, cart, checkout — without sending users to a separate site.',
    solution:
      'Flex Message product carousels, a stateful cart, an order summary screen, and PromptPay QR generation for one-tap payment.',
    stack: ['LINE Flex', 'PromptPay', 'Node.js', 'Redis'],
    mockup: 'flex',
    bgGradient: 'from-[#312E81] to-[#1E1B4B]',
  },
  {
    id: 'tournament-scheduling',
    title: 'Tournament scheduling & bracket engine',
    category: 'SPORTS · BRACKETS · ENGINE',
    cats: ['sport'],
    challenge:
      'Tournament organizers managing 64+ teams across multiple courts spent days building schedules in spreadsheets — and rebuilding them after every drop-out.',
    solution:
      'A scheduling engine that auto-generates conflict-free brackets, handles late entries, and exports printable run-of-show.',
    stack: ['Next.js', 'PostgreSQL', 'scheduling-engine'],
    mockup: 'bracket',
    bgGradient: 'from-[#0e1015] to-[#1E293B]',
  },
  {
    id: 'live-scoreboard',
    title: 'Live basketball scoreboard for OBS streaming',
    category: 'SPORTS · OBS · LIVE',
    cats: ['sport'],
    challenge:
      'Streaming crews needed a clean, broadcast-quality scoreboard that updated instantly from courtside — with no clunky overlays or browser hacks.',
    solution:
      'A websocket-driven HTML overlay you drop into OBS as a browser source. Operator types the score on a phone, the broadcast updates in <100ms.',
    stack: ['WebSockets', 'OBS', 'React', 'Tailwind'],
    mockup: 'score',
    bgGradient: 'from-[#0F172A] to-[#020617]',
  },
  {
    id: '3x3-platform',
    title: '3x3 basketball tournament platform',
    category: '3X3 · MULTI-COURT · STREAM',
    cats: ['sport'],
    challenge:
      'A 3x3 basketball league needed multi-court realtime updates, livestream integration, and public-facing brackets — all running on tournament day with zero latency for staff.',
    solution:
      'A unified platform with court-by-court live state, websocket fan-out, embedded YouTube/Twitch streams, and bracket pages that update the moment the score does.',
    stack: ['WebSockets', 'YouTube Live API', 'Next.js', 'Redis'],
    mockup: 'court',
    bgGradient: 'from-[#083344] to-[#080a0d]',
  },
  {
    id: 'queue-automation',
    title: 'Queue automation with n8n, Power Automate & Grafana',
    category: 'OPERATIONS · AUTOMATION',
    cats: ['ops'],
    challenge:
      'An ops team was triaging hundreds of inbound requests by hand — and had no visibility into where bottlenecks were forming.',
    solution:
      'A multi-layer automation: n8n for branching logic, Power Automate for Microsoft-native steps, Grafana dashboards monitoring queue depth and SLA breach in real time.',
    stack: ['n8n', 'Power Automate', 'Grafana', 'Prometheus'],
    mockup: 'flow',
    bgGradient: 'from-[#1E1B4B] to-[#0F0A2E]',
  },
]
