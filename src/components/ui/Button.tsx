import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'text'
  size?: 'md' | 'sm'
  arrow?: boolean
  className?: string
  disabled?: boolean
}

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  disabled,
}: ButtonProps) {
  const cls = `btn btn--${variant} btn--${size} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="btn__arrow" size={size === 'sm' ? 15 : 17} aria-hidden="true" />}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}
