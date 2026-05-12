import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href?: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  onClick,
}: Props) {
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
