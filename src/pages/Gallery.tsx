import { useCallback, useMemo, useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { galleryCategories, galleryItems, type GalleryCategory } from '../data/gallery'
import { PageHero } from '../components/ui/PageHero'
import { Photo } from '../components/ui/Photo'
import { slotDescription } from '../data/photos'
import { Lightbox } from '../components/ui/Lightbox'
import { Reveal } from '../components/ui/Reveal'
import { CTASection } from '../components/ui/CTASection'

type Filter = 'all' | GalleryCategory

export default function Gallery() {
  usePageMeta('Gallery | Shanthi Nilayam Rehabilitation Centre', 'Photographs of the premises, activities, programmes and events of Shanthi Nilayam.')
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState<number | null>(null)

  const items = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  )
  const active = galleryCategories.find((c) => c.id === filter)
  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Gallery"
        title={<>Moments That <em>Reflect Our Work</em></>}
        lede={
          <p>
            Every photograph can tell a story of service, participation, learning and community engagement. Explore
            photographs documenting Shanthi Nilayam's premises, activities, programmes and events. Each image should
            reflect the dignity of the individuals involved and the actual work of the centre.
          </p>
        }
      />

      <section className="section gallery" aria-label="Photo gallery">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter photographs by category">
            <button type="button" className="chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </button>
            {galleryCategories.map((c) => (
              <button key={c.id} type="button" className="chip" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <p className="filters__desc" aria-live="polite">
            {active ? active.text : 'Showing every category. Images are representative stock photographs for now; authentic photographs will be added only with the centre’s approval and appropriate consent.'}
          </p>

          <ul className="masonry" key={filter}>
            {items.map((item, i) => (
              <li key={item.slot} className="masonry__item" style={{ '--i': i } as React.CSSProperties}>
                <button type="button" className="tile" onClick={() => setOpen(i)} aria-label={`View photograph: ${slotDescription(item.slot)}`}>
                  <Photo slot={item.slot} ratio={item.ratio} compact className="tile__photo" />
                  <span className="tile__veil">
                    <span className="tile__title">{slotDescription(item.slot)}</span>
                    <Maximize2 size={18} aria-hidden="true" />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Reveal className="gallery__caption-note">
            <h2>About these photographs</h2>
            <p>
              <strong>The images currently shown are royalty-free stock photographs from Pexels, used only
              as representative imagery. They are not photographs of Shanthi Nilayam, its residents, staff, facilities or
              activities.</strong> Authentic, consented photographs of the centre will replace them as they are supplied.
            </p>
            <p>
              Each authentic photograph will be captioned
              with the activity or event name, location where relevant, date or year if known, and a brief
              description. We do not identify residents or disclose personal information without
              appropriate consent, and we avoid portraying people with disabilities as helpless or using their
              experiences to solicit sympathy.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        tone="warm"
        eyebrow="Photo submissions and enquiries"
        title="Help Us Document Our Work"
        text="If you are a partner or participant with photographs relevant to a documented Shanthi Nilayam programme, contact the centre before submitting material for publication. The centre reviews all photographs for accuracy, privacy, consent and suitability before adding them to the website."
        cta={{ label: 'CONTACT THE CENTRE', to: '/contact?topic=other#enquiry' }}
      />

      {open !== null && <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />}
    </>
  )
}
