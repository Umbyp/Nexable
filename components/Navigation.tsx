'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#4F8CFF" strokeWidth="2" className="animate-pulse-soft" />
            <path d="M10 22V10l12 12V10" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-lg tracking-tight text-text-1">Nexable</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-surface-2/90 backdrop-blur-lg rounded-full p-1.5 border border-line-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                isActive(link.href)
                  ? 'bg-text-1 text-bg font-semibold shadow-md'
                  : 'text-text-2 hover:text-text-1 hover:bg-surface-3 font-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile button */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn btn-primary !py-2.5 !px-5 text-sm">
            Start a project
          </Link>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-line-2 bg-surface-2 text-text-1 hover:bg-surface-3 transition-colors shadow-sm"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-line-2 bg-surface/98 backdrop-blur-xl shadow-2xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-2xl text-base transition-all duration-200 ${
                  isActive(link.href) ? 'bg-text-1 text-bg font-semibold shadow-sm' : 'text-text-2 hover:text-text-1 hover:bg-surface-2 font-medium'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-2 justify-center">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
