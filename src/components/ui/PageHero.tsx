import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: ReactNode
  lede: ReactNode
  tone?: 'ivory' | 'beige'
  variant: 'about' | 'services' | 'facilities' | 'outreach' | 'gallery' | 'contact'
  children?: ReactNode
  visual?: ReactNode
  extra?: ReactNode
}

export function PageHero({ eyebrow, title, lede, tone = 'ivory', variant, children, visual, extra }: Props) {
  return (
    <section className={`page-hero page-hero--${variant} page-hero--${tone}`}>
      <div className="page-hero__deco" aria-hidden="true" />
      <div className="container page-hero__grid">
        <div className="page-hero__text">
          {eyebrow && (
            <p className="eyebrow anim-in" style={{ '--i': 0 } as React.CSSProperties}>
              {eyebrow}
            </p>
          )}
          <h1 className="page-hero__title anim-in" style={{ '--i': 1 } as React.CSSProperties}>
            {title}
          </h1>
          <div className="page-hero__lede anim-in" style={{ '--i': 2 } as React.CSSProperties}>
            {lede}
          </div>
          {extra && <div className="page-hero__lede anim-in">{extra}</div>}
          {children && (
            <div className="page-hero__extra anim-in" style={{ '--i': 3 } as React.CSSProperties}>
              {children}
            </div>
          )}
        </div>
        {visual && (
          <div className="page-hero__visual anim-in" style={{ '--i': 2 } as React.CSSProperties}>
            {visual}
          </div>
        )}
      </div>
    </section>
  )
}
