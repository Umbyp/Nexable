export default function FlexMockup() {
  return (
    <div className="w-[70%] max-w-[260px] bg-white rounded-2xl overflow-hidden shadow-lift">
      <div className="relative h-32 bg-gradient-to-br from-accent to-accent-700 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-40">
          <circle cx="50" cy="50" r="30" fill="#fff" />
        </svg>
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/90 text-accent rounded-full text-[10px] font-bold">
          -22%
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-text-3 font-medium uppercase tracking-wider">AUDIO · NEW</div>
        <h4 className="font-bold text-text-1 mt-1 text-sm">Wireless Earbuds Pro</h4>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-bold text-text-1">฿1,890</span>
          <span className="text-xs line-through text-text-3">฿2,420</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <button className="text-xs py-1.5 rounded-lg bg-surface-2 text-text-1 font-medium">Details</button>
          <button className="text-xs py-1.5 rounded-lg bg-accent text-text-1 font-medium">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
