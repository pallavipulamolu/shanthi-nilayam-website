import type { PhotoSlot } from './photos'

export const galleryCategories = [
  { id: 'centre', label: 'Our Centre', text: 'Photographs of the building, campus, available facilities and common areas.' },
  { id: 'rehab', label: 'Rehabilitation Activities', text: 'Approved photographs of rehabilitation-related activities actually conducted at the centre.' },
  { id: 'daily', label: 'Daily Living and Skill Development', text: 'Photographs illustrating learning, participation and practical activities, where available.' },
  { id: 'outreach', label: 'Community Outreach', text: 'Images from documented awareness programmes, community-based rehabilitation and rural initiatives.' },
  { id: 'events', label: 'Events and Celebrations', text: 'Photographs of actual events, observances, visits and organisational programmes.' },
  { id: 'journey', label: 'Our Journey', text: 'Historical photographs and records showing verified milestones since the centre’s establishment in 2004.' },
] as const

export type GalleryCategory = (typeof galleryCategories)[number]['id']

export interface GalleryItem {
  slot: PhotoSlot
  category: GalleryCategory
  title: string
  ratio: string
}

/** Placeholders only: real captions (activity, location, year, description) are added with each photograph. */
export const galleryItems: GalleryItem[] = [
  { slot: 'gallery-centre-1', category: 'centre', title: 'Centre premises', ratio: '4 / 5' },
  { slot: 'gallery-rehab-1', category: 'rehab', title: 'Rehabilitation activity', ratio: '1 / 1' },
  { slot: 'gallery-outreach-1', category: 'outreach', title: 'Awareness programme', ratio: '5 / 4' },
  { slot: 'gallery-daily-1', category: 'daily', title: 'Learning and participation', ratio: '4 / 5' },
  { slot: 'gallery-events-1', category: 'events', title: 'Event or observance', ratio: '1 / 1' },
  { slot: 'gallery-centre-2', category: 'centre', title: 'Common areas', ratio: '5 / 4' },
  { slot: 'gallery-journey-1', category: 'journey', title: 'Historical photograph', ratio: '4 / 5' },
  { slot: 'gallery-daily-2', category: 'daily', title: 'Practical activity', ratio: '5 / 4' },
  { slot: 'gallery-outreach-2', category: 'outreach', title: 'Community visit', ratio: '4 / 5' },
  { slot: 'gallery-rehab-2', category: 'rehab', title: 'Rehabilitation activity', ratio: '5 / 4' },
  { slot: 'gallery-events-2', category: 'events', title: 'Celebration', ratio: '4 / 5' },
  { slot: 'gallery-centre-3', category: 'centre', title: 'Entrance', ratio: '1 / 1' },
  { slot: 'gallery-daily-3', category: 'daily', title: 'Skill development', ratio: '1 / 1' },
  { slot: 'gallery-outreach-3', category: 'outreach', title: 'Rural initiative', ratio: '5 / 4' },
  { slot: 'gallery-journey-2', category: 'journey', title: 'From the archive', ratio: '5 / 4' },
]
