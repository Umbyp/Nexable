'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  decimals?: number
  suffix?: string
  label: string
}

export default function StatCounter({ target, decimals = 0, suffix = '', label }: Props) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setValue(target * eased)
            if (t < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, started])

  return (
    <div ref={ref} className="reveal">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-bold text-text-1 tracking-tight tabular-nums">
          {value.toFixed(decimals)}
        </span>
        <span className="text-3xl md:text-4xl accent-italic">{suffix}</span>
      </div>
      <p className="mt-3 text-text-2 text-sm md:text-base max-w-[280px] leading-relaxed">{label}</p>
    </div>
  )
}
