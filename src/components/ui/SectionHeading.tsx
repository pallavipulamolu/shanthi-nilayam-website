import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
  as?: 'h1' | 'h2' | 'h3'
  id?: string
}

export function SectionHeading({ eyebrow, title, lede, align = 'left', tone = 'default', as: H = 'h2', id }: Props) {
  return (
    <Reveal className={`sh sh--${align} sh--${tone}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className="sh__title" id={id}>
        {title}
      </H>
      {lede && <p className="sh__lede">{lede}</p>}
    </Reveal>
  )
}
