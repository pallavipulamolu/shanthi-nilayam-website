import type { ReactNode } from 'react'
import { Button } from './Button'
import { Reveal } from './Reveal'

interface Props {
  title: ReactNode
  /** A single paragraph, or several paragraphs. */
  text: ReactNode | string[]
  cta: { label: string; to: string }
  secondary?: { label: string; to: string }
  eyebrow?: string
  tone?: 'dark' | 'warm'
  note?: ReactNode
}

/** Reusable closing call-to-action band. */
export function CTASection({ title, text, cta, secondary, eyebrow, tone = 'dark', note }: Props) {
  return (
    <section className={`cta cta--${tone}`}>
      <div className="container">
        <Reveal className="cta__inner">
          <div className="cta__ring" aria-hidden="true" />
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="cta__title">{title}</h2>
          {Array.isArray(text) ? (
            text.map((t) => (
              <p key={t} className="cta__text">
                {t}
              </p>
            ))
          ) : (
            <p className="cta__text">{text}</p>
          )}
          <div className="cta__actions">
            <Button to={cta.to} variant={tone === 'dark' ? 'primary' : 'dark'}>
              {cta.label}
            </Button>
            {secondary && (
              <Button to={secondary.to} variant={tone === 'dark' ? 'light' : 'secondary'}>
                {secondary.label}
              </Button>
            )}
          </div>
          {note && <p className="cta__note">{note}</p>}
        </Reveal>
      </div>
    </section>
  )
}
