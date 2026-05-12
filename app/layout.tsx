import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Nexable — Intelligent systems for modern teams',
  description:
    'We design, build, and run AI, LINE commerce, live tournament systems, and operational automations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navigation />
        <main className="pt-24">{children}</main>
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  )
}
