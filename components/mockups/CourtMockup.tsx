export default function CourtMockup() {
  const courts = [
    { id: 1, status: 'live', score: '14-12' },
    { id: 2, status: 'live', score: '21-18' },
    { id: 3, status: 'next', score: '—' },
    { id: 4, status: 'live', score: '8-10' },
    { id: 5, status: 'done', score: '21-15' },
    { id: 6, status: 'live', score: '17-19' },
  ]

  return (
    <div className="w-[85%] grid grid-cols-3 gap-2 text-[9px]">
      {courts.map((c) => (
        <div
          key={c.id}
          className={`relative rounded-lg p-2 border backdrop-blur-sm ${
            c.status === 'live'
              ? 'bg-accent/15 border-accent/40'
              : c.status === 'next'
              ? 'bg-accent/15 border-accent/40'
              : 'bg-white/5 border-white/10'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-text-1/80">C{c.id.toString().padStart(2, '0')}</span>
            {c.status === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-live-blink" />}
          </div>
          <div className="text-text-1 font-bold text-sm font-mono mt-1">{c.score}</div>
          <div className={`text-[8px] uppercase tracking-wider mt-0.5 ${
            c.status === 'live' ? 'text-accent' : c.status === 'next' ? 'text-accent' : 'text-text-1/40'
          }`}>
            {c.status}
          </div>
        </div>
      ))}
    </div>
  )
}
