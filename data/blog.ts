export type BlogCat = 'ai' | 'ops' | 'frontend' | 'sport'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: BlogCat
  tag: string
  author: string
  date: string
  readTime: string
  featured?: boolean
  thumb: 'rag' | 'orbit' | 'score' | 'thai' | 'tokens' | 'sla' | 'tools' | 'dashboard'
  searchText: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'rag-chunking',
    title: 'The RAG chunking strategies that actually move the needle',
    excerpt:
      'After 38 production RAG deployments, here\'s what we\'ve learned about chunk size, semantic splits, hybrid retrieval, and why most "best practice" advice falls apart at 50k+ documents.',
    category: 'ai',
    tag: 'FEATURED · AI',
    author: 'ARNAN K.',
    date: 'MAR 12',
    readTime: '14 MIN READ',
    featured: true,
    thumb: 'rag',
    searchText: 'rag chunking strategy hybrid retrieval',
  },
  {
    id: 'n8n-vs-power-automate',
    title: 'When to reach for n8n vs Power Automate',
    excerpt:
      'A pragmatic decision tree from someone who\'s shipped both — and lived with the tradeoffs.',
    category: 'ops',
    tag: 'OPS',
    author: 'PLOY T.',
    date: 'MAR 04',
    readTime: '9 MIN',
    thumb: 'orbit',
    searchText: 'n8n vs power automate workflow',
  },
  {
    id: 'sub-100ms-scoreboards',
    title: 'Sub-100ms scoreboards: how we stream live games to OBS',
    excerpt:
      'A breakdown of the websocket fan-out, browser-source overlay, and operator UX that keeps broadcasts perfectly in sync.',
    category: 'sport',
    tag: 'SPORT · LIVE',
    author: 'RACHAN S.',
    date: 'FEB 26',
    readTime: '11 MIN',
    thumb: 'score',
    searchText: 'websocket scoreboard latency obs streaming',
  },
  {
    id: 'thai-line-agents',
    title: 'Building Thai-first AI agents on LINE OA',
    excerpt:
      'Model routing, tone calibration, and the specific failure modes you\'ll hit when shipping Thai-language support at scale.',
    category: 'ai',
    tag: 'AI · LINE',
    author: 'ARNAN K.',
    date: 'FEB 18',
    readTime: '13 MIN',
    thumb: 'thai',
    searchText: 'thai language line oa agent openrouter',
  },
  {
    id: 'micro-interactions',
    title: 'The micro-interactions that make a SaaS feel premium',
    excerpt:
      'Twelve small motion patterns we ship in nearly every product — and the principles behind them.',
    category: 'frontend',
    tag: 'FRONTEND',
    author: 'RACHAN S.',
    date: 'FEB 11',
    readTime: '8 MIN',
    thumb: 'tokens',
    searchText: 'design system tokens micro-interactions',
  },
  {
    id: 'sla-dashboards',
    title: 'SLA dashboards that actually predict trouble',
    excerpt:
      'Most monitoring shows you what already broke. Here\'s the Grafana setup we use to see the breakage forming.',
    category: 'ops',
    tag: 'OPS',
    author: 'PLOY T.',
    date: 'FEB 02',
    readTime: '10 MIN',
    thumb: 'sla',
    searchText: 'grafana sla monitoring queue depth',
  },
  {
    id: 'function-calling',
    title: 'Function calling at scale: the mistakes we made first',
    excerpt:
      'Schema drift, parallel tool calls, and how we now structure agents so they degrade gracefully.',
    category: 'ai',
    tag: 'AI',
    author: 'ARNAN K.',
    date: 'JAN 25',
    readTime: '12 MIN',
    thumb: 'tools',
    searchText: 'function calling openrouter agent tools',
  },
  {
    id: 'dashboard-design',
    title: 'Designing dashboards for power users (without overwhelm)',
    excerpt: 'Density isn\'t the enemy — undifferentiated density is. A field guide.',
    category: 'frontend',
    tag: 'FRONTEND',
    author: 'RACHAN S.',
    date: 'JAN 14',
    readTime: '9 MIN',
    thumb: 'dashboard',
    searchText: 'dashboard ux information density',
  },
]
