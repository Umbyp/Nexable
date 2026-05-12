export default function BracketMockup() {
  return (
    <div className="w-[85%] h-[85%] flex items-center gap-3 text-[10px]">
      <div className="flex flex-col gap-2 flex-1">
        {['Mavs', 'Heat', 'Suns', 'Lakers'].map((team, i) => (
          <div key={team} className={`bg-white/10 backdrop-blur-sm border ${i % 2 === 0 ? 'border-accent/40' : 'border-white/10'} rounded-lg px-2 py-1.5 text-text-1/90 flex justify-between`}>
            <span>{team}</span>
            <span className="font-mono text-accent">{[88, 76, 92, 71][i]}</span>
          </div>
        ))}
      </div>
      <svg className="w-6 flex-shrink-0" viewBox="0 0 20 80" fill="none">
        <path d="M0 12 L12 12 L12 28" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M0 36 L12 36 L12 28" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M0 52 L12 52 L12 68" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M0 76 L12 76 L12 68" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M12 28 L20 28" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M12 68 L20 68" stroke="#C5FA5A" strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col gap-12 flex-1">
        <div className="bg-accent/20 border border-accent/40 rounded-lg px-2 py-1.5 text-text-1/90 flex justify-between">
          <span>Mavs</span><span className="font-mono">88</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1.5 text-text-1/90 flex justify-between">
          <span>Suns</span><span className="font-mono text-accent">92</span>
        </div>
      </div>
      <svg className="w-6 flex-shrink-0" viewBox="0 0 20 80" fill="none">
        <path d="M0 28 L12 28 L12 48" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M0 68 L12 68 L12 48" stroke="#C5FA5A" strokeWidth="1.2" />
        <path d="M12 48 L20 48" stroke="#C5FA5A" strokeWidth="1.5" />
      </svg>
      <div className="flex-1">
        <div className="bg-accent/30 border border-accent/60 rounded-lg px-2 py-2 text-text-1 font-bold flex flex-col items-center shadow-glow-accent">
          <span className="text-[9px] uppercase tracking-wider opacity-70">Champion</span>
          <span className="text-sm mt-0.5">Suns</span>
        </div>
      </div>
    </div>
  )
}
