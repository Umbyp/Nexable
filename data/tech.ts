export interface TechCategory {
  label: string
  chips: string[]
}

export const techStack: TechCategory[] = [
  { label: 'AI / RETRIEVAL',     chips: ['OpenRouter', 'LangChain', 'pgvector', 'Pinecone', 'Hugging Face', 'LiteLLM'] },
  { label: 'FRONTEND',           chips: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'shadcn/ui'] },
  { label: 'BACKEND / DATA',     chips: ['Node.js', 'Bun', 'Postgres', 'Redis', 'tRPC', 'Prisma'] },
  { label: 'LIVE / REALTIME',    chips: ['WebSockets', 'Pusher', 'OBS Browser', 'YouTube Live', 'Twitch API'] },
  { label: 'AUTOMATION / OPS',   chips: ['n8n', 'Power Automate', 'Grafana', 'Prometheus', 'Sentry'] },
  { label: 'LINE / COMMERCE',    chips: ['LINE Messaging API', 'Flex Messages', 'PromptPay QR', 'LIFF'] },
]
