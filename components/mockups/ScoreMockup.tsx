export default function ScoreMockup() {
  return (
    <div className="w-[85%] bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-text-1">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-live-blink" />
          <span className="text-[10px] font-bold uppercase tracking-widest">LIVE · Q4 · 2:14</span>
        </div>
        <span className="text-[10px] font-mono text-accent">COURT 03</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="text-[10px] text-text-1/60 uppercase tracking-wider">Home</div>
          <div className="text-3xl font-bold mt-0.5">Mavericks</div>
        </div>
        <div className="text-5xl font-bold tabular-nums tracking-tighter">
          <span className="text-accent">88</span>
          <span className="text-text-1/40 mx-2">:</span>
          <span>76</span>
        </div>
        <div className="flex-1 text-right">
          <div className="text-[10px] text-text-1/60 uppercase tracking-wider">Away</div>
          <div className="text-3xl font-bold mt-0.5">Heat</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-text-1/50 border-t border-white/10 pt-2">
        <span>Fouls 4 / 3</span>
        <span>TO 2 / 4</span>
        <span className="font-mono">SHOT · 14</span>
      </div>
    </div>
  )
}
