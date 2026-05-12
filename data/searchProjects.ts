export interface SearchProject {
  id: string
  title: string
  cat: string
  cats: string[]
  stack: string[]
  searchText: string
}

export const searchProjects: SearchProject[] = [
  {
    id: 'chatbot-rag',
    title: 'ChatBot platform with custom RAG & embeddable widget',
    cat: 'AI · RAG · WIDGET',
    cats: ['ai'],
    stack: ['React', 'pgvector', 'OpenRouter'],
    searchText: 'chatbot rag widget custom react pgvector openrouter streaming embeddings',
  },
  {
    id: 'line-it-support',
    title: 'LINE Official IT Support agent (Thai)',
    cat: 'LINE · AI · THAI',
    cats: ['ai', 'line'],
    stack: ['LINE API', 'OpenRouter', 'ServiceNow'],
    searchText: 'line it support thai oa agent openrouter servicenow tickets',
  },
  {
    id: 'line-commerce',
    title: 'LINE commerce chatbot with Flex Messages & QR PromptPay',
    cat: 'LINE · COMMERCE · PROMPTPAY',
    cats: ['line'],
    stack: ['LINE Flex', 'PromptPay', 'Node.js'],
    searchText: 'line commerce flex messages promptpay qr cart checkout retail',
  },
  {
    id: 'tournament-scheduling',
    title: 'Tournament scheduling & bracket engine',
    cat: 'SPORTS · BRACKETS · ENGINE',
    cats: ['sport'],
    stack: ['Next.js', 'PostgreSQL', 'Scheduler'],
    searchText: 'tournament scheduling bracket engine basketball 3x3 league postgresql nextjs',
  },
  {
    id: 'live-scoreboard',
    title: 'Live basketball scoreboard for OBS streaming',
    cat: 'SPORTS · OBS · LIVE',
    cats: ['sport'],
    stack: ['WebSockets', 'OBS', 'React'],
    searchText: 'live basketball scoreboard obs streaming broadcast websocket realtime',
  },
  {
    id: '3x3-platform',
    title: '3x3 basketball tournament platform',
    cat: '3X3 · MULTI-COURT · STREAM',
    cats: ['sport'],
    stack: ['WebSockets', 'YouTube Live', 'Redis'],
    searchText: '3x3 basketball tournament multi court livestream youtube twitch realtime platform',
  },
  {
    id: 'queue-automation',
    title: 'Queue automation with n8n, Power Automate & Grafana',
    cat: 'OPERATIONS · AUTOMATION',
    cats: ['ops'],
    stack: ['n8n', 'Power Automate', 'Grafana'],
    searchText: 'queue automation n8n power automate grafana prometheus monitoring sla incident',
  },
]
