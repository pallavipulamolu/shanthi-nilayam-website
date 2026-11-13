import { Camera } from 'lucide-react'
import { photoSlots, resolvePhoto, slotDescription, type PhotoSlot } from '../../data/photos'

interface PhotoProps {
  slot: PhotoSlot
  /** CSS aspect-ratio, e.g. "4 / 5". Omit when the parent controls the height. */
  ratio?: string
  className?: string
  tone?: 'sand' | 'ivory' | 'dusk'
  /** Compact placeholder (smaller label). */
  compact?: boolean
  /** Load immediately (above-the-fold images only). */
  priority?: boolean
  /** Responsive `sizes` hint for the browser. */
  sizes?: string
}

/**
 * Renders the photograph for a slot: an authentic centre photograph if one has
 * been added, otherwise a representative stock image (always labelled), and
 * finally a labelled placeholder.
 */
export function Photo({ slot, ratio, className = '', tone = 'sand', compact, priority, sizes = '(min-width: 900px) 600px, 100vw' }: PhotoProps) {
  const photo = resolvePhoto(slot)
  const style = ratio ? { aspectRatio: ratio } : undefined

  if (photo) {
    const desc = slotDescription(slot)
    return (
      <div className={`photo ${className}`} style={style}>
        <img
          src={photo.src}
          srcSet={photo.small ? `${photo.small} 640w, ${photo.src} 1280w` : undefined}
          sizes={photo.small ? sizes : undefined}
          alt={photo.stock ? `Representative image: ${desc}` : desc}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchPriority: 'high' as const } : {})}
        />
        {photo.stock && <span className="photo__badge">Representative image</span>}
      </div>
    )
  }

  const info = photoSlots[slot]
  return (
    <div
      className={`photo photo--placeholder photo--${tone} ${className}`}
      style={style}
      role="img"
      aria-label={`Photograph placeholder: ${info.label}. A real photograph will be added.`}
    >
      <svg className="photo__shape" viewBox="0 0 200 200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <path d="M40 150c-30-40-10-100 40-115 45-14 100 5 112 48 12 42-25 85-70 92-35 6-62-3-82-25z" />
        <circle cx="168" cy="38" r="22" />
      </svg>
      <div className="photo__label">
        <Camera size={compact ? 18 : 22} strokeWidth={1.5} aria-hidden="true" />
        <strong>{info.label}</strong>
        {!compact && <span>{info.hint}</span>}
        <em>Photograph to be added</em>
      </div>
    </div>
  )
}
