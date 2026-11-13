import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { photoSlots, resolvePhoto, slotDescription } from '../../data/photos'
import { galleryCategories, type GalleryItem } from '../../data/gallery'
import { Photo } from './Photo'

interface Props {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const count = items.length

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const prev = () => onChange((index - 1 + count) % count)
    const next = () => onChange((index + 1) % count)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Tab') {
        const f = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button') ?? [])
        if (!f.length) return
        if (e.shiftKey && document.activeElement === f[0]) {
          e.preventDefault()
          f[f.length - 1].focus()
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault()
          f[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, count, onChange, onClose])

  if (!item) return null
  const cat = galleryCategories.find((c) => c.id === item.category)
  const info = photoSlots[item.slot]
  const stock = resolvePhoto(item.slot)?.stock

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" ref={dialogRef}>
      <button type="button" className="lightbox__scrim" tabIndex={-1} aria-label="Close viewer" onClick={onClose} />
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>
      {count > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => onChange((index - 1 + count) % count)} aria-label="Previous photograph">
            <ChevronLeft size={26} />
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => onChange((index + 1) % count)} aria-label="Next photograph">
            <ChevronRight size={26} />
          </button>
        </>
      )}
      <figure className="lightbox__figure" key={item.slot}>
        <Photo slot={item.slot} ratio={item.ratio} className="lightbox__photo" />
        <figcaption>
          <strong>{stock ? slotDescription(item.slot) : item.title}</strong>
          <span>{cat?.label} · {stock ? 'Representative image, not a photograph of Shanthi Nilayam' : info.hint}</span>
          <small aria-live="polite">
            {index + 1} / {count}
          </small>
        </figcaption>
      </figure>
    </div>
  )
}
