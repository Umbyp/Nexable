import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-line mt-24">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#C5FA5A" strokeWidth="2" />
                <path d="M10 22V10l12 12V10" stroke="#C5FA5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-lg text-text-1">Nexable</span>
            </Link>
            <p className="text-text-2 max-w-sm leading-relaxed">
              We build intelligent products: AI agents, LINE commerce, live tournament systems, and ops automation.
            </p>
          </div>

          {/* Link columns */}
          <FooterColumn
            title="Company"
            links={[
              { label: 'About', href: '/about' },
              { label: 'Showcase', href: '/showcase' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
          <FooterColumn
            title="Capabilities"
            links={[
              { label: 'AI & RAG', href: '/products' },
              { label: 'LINE Commerce', href: '/products' },
              { label: 'Live Systems', href: '/products' },
              { label: 'Automation', href: '/products' },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { label: 'Documentation', href: '#' },
              { label: 'Case studies', href: '/showcase' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ]}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-text-3">
          <span>© {new Date().getFullYear()} Nexable Co., Ltd. — Bangkok, Thailand.</span>
          <span className="font-mono">v1.0.0 · build@stable</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-text-1 uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-text-2 hover:text-accent transition-colors text-[15px]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
