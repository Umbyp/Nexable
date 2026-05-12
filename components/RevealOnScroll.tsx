'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealOnScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // ฟังก์ชันสำหรับหา Element ที่รอแอนิเมชันและยังไม่แสดงผล
    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.in-view)')
      elements.forEach((el) => observer.observe(el))
    }

    observeElements()

    // คอยจับตาดูว่า Next.js มีการแทรก DOM/เปลี่ยนหน้าหรือไม่
    let mutationObserver: MutationObserver | null = null;
    if (typeof document !== 'undefined' && document.body) {
      mutationObserver = new MutationObserver(observeElements)
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      if (mutationObserver) mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}
