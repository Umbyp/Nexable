interface Props {
  brand?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function ChatMockup({ brand = 'Acme RAG · KB v4', size = 'md' }: Props) {
  const sizeClass = size === 'lg' ? 'w-[80%] h-[80%]' : size === 'sm' ? 'w-[90%] h-[90%]' : 'w-full h-full'

  return (
    <div className={`${sizeClass} bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-2.5 text-[11px]`}>
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent" />
        <div className="text-text-1/80 font-medium">{brand}</div>
      </div>
      <div className="self-start max-w-[85%] bg-white/10 text-text-1/90 px-3 py-2 rounded-2xl rounded-bl-sm">
        Trained on 1,284 docs. Ready when you are.
      </div>
      <div className="self-end max-w-[85%] bg-accent text-text-1 px-3 py-2 rounded-2xl rounded-br-sm">
        What&apos;s our refund policy on enterprise?
      </div>
      <div className="self-start max-w-[85%] bg-white/10 text-text-1/90 px-3 py-2 rounded-2xl rounded-bl-sm">
        From doc #88: enterprise refunds prorate within 30 days. Cite §3.2?
      </div>
      <div className="self-start flex gap-1 px-3 py-2 bg-white/10 rounded-2xl w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-typing" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-typing [animation-delay:0.2s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-typing [animation-delay:0.4s]" />
      </div>
    </div>
  )
}
