export default function FlowMockup() {
  const nodes = [
    { label: 'n8n', sub: 'webhook' },
    { label: 'Power Automate', sub: 'orchestrate' },
    { label: 'Grafana', sub: 'observe' },
  ]

  return (
    <div className="w-[90%] flex items-center justify-between gap-2 text-[10px]">
      {nodes.map((n, i) => (
        <div key={n.label} className="contents">
          <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 text-center">
            <div className="text-text-1 font-semibold text-xs">{n.label}</div>
            <div className="text-text-1/50 mt-0.5">{n.sub}</div>
            <div className="mt-2 inline-flex items-center gap-1 text-accent text-[9px]">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse-soft" />
              running
            </div>
          </div>
          {i < nodes.length - 1 && (
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="flex-shrink-0">
              <path d="M0 6 H16 M12 2 L16 6 L12 10" stroke="#C5FA5A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
