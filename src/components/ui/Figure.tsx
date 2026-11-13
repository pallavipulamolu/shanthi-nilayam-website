import { Photo } from './Photo'
import { resolvePhoto, slotDescription, type PhotoSlot } from '../../data/photos'

interface Props {
  slot: PhotoSlot
  /** Caption used for authentic photographs and placeholders. */
  caption: string
  ratio?: string
  className?: string
  tone?: 'sand' | 'ivory' | 'dusk'
  compact?: boolean
  priority?: boolean
}

/** Photograph with an elegant caption. Stock imagery is always captioned as representative. */
export function Figure({ slot, caption, ratio, className = '', tone, compact, priority }: Props) {
  const stock = resolvePhoto(slot)?.stock
  return (
    <figure className={`figure ${className}`}>
      <Photo slot={slot} ratio={ratio} tone={tone} compact={compact} priority={priority} className="figure__photo" />
      <figcaption>{stock ? `${slotDescription(slot)} · Representative image` : caption}</figcaption>
    </figure>
  )
}
