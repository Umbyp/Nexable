export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  tags: string[]
  version: string
  icon: 'chat' | 'line' | 'tournament' | 'ops'
}

export const products: Product[] = [
  {
    id: 'nexable-chat',
    name: 'Nexable Chat',
    description:
      'A custom RAG chatbot platform with admin dashboard, document ingestion, and an embeddable widget that lives on any website in one line of code.',
    features: [
      'Drag-and-drop knowledge base ingestion',
      'Vector search with citation references',
      'Streaming responses, function calling',
      'White-label widget · brand-safe',
    ],
    tags: ['OpenRouter', 'pgvector', 'React'],
    version: 'v3.2',
    icon: 'chat',
  },
  {
    id: 'nexable-line-suite',
    name: 'Nexable LINE Suite',
    description:
      'Two LINE OA products in one: a Thai-language AI IT support agent, and a full commerce stack with Flex Messages, cart, and PromptPay QR checkout.',
    features: [
      'Thai-first language model routing',
      'Flex Message product carousels',
      'Cart, order summary, PromptPay QR',
      'Ticket sync to existing helpdesks',
    ],
    tags: ['LINE Messaging API', 'PromptPay', 'OpenRouter'],
    version: 'v2.4',
    icon: 'line',
  },
  {
    id: 'nexable-tournaments',
    name: 'Nexable Tournaments',
    description:
      'A complete tournament management platform: multi-court scheduling, live brackets, realtime scoreboards, OBS streaming overlays — purpose-built for 3x3 basketball but flexible.',
    features: [
      'Multi-court realtime scheduling',
      'Single, double-elimination, group stage',
      'OBS browser-source scoreboards',
      'Public bracket pages with live state',
    ],
    tags: ['Realtime', 'OBS', 'PostgreSQL'],
    version: 'v1.8',
    icon: 'tournament',
  },
  {
    id: 'nexable-ops',
    name: 'Nexable Ops',
    description:
      'Queue management and workflow automation built on n8n and Power Automate, with Grafana dashboards that actually tell you what\'s happening.',
    features: [
      'Visual workflow editor & templates',
      'Cross-system orchestration',
      'Grafana monitoring & alerting',
      'SLA tracking and incident routing',
    ],
    tags: ['n8n', 'Power Automate', 'Grafana'],
    version: 'v2.0',
    icon: 'ops',
  },
]
