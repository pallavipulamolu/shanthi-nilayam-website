import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger index; each step delays the entrance by 80ms. */
  delay?: number
  variant?: 'up' | 'fade' | 'scale'
}

/** Scroll-reveal wrapper. Motion is disabled via CSS for prefers-reduced-motion. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = { '--d': `${delay * 80}ms` } as CSSProperties
  return (
    <Tag ref={ref} className={`reveal reveal--${variant} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
