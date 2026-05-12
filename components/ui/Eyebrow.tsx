interface Props {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className = '' }: Props) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}
