/**
 * Photograph slots. No stock imagery is used anywhere: each slot renders a
 * clearly labelled placeholder until a real, consented photograph named
 * `<slot-id>.jpg|png|webp|avif` is dropped into `src/assets/photos/`.
 */
export interface SlotInfo {
  label: string
  hint: string
}

const s = (label: string, hint: string): SlotInfo => ({ label, hint })

export const photoSlots = {
  'hero-main': s('Shanthi Nilayam centre', 'Authentic photograph of the centre or a consented activity'),
  'hero-secondary': s('Everyday life at the centre', 'Consented photograph of a meaningful activity'),
  'intro-main': s('Care and daily activity', 'Consented photograph showing care or participation'),
  'intro-secondary': s('The centre premises', 'Photograph of the centre'),
  'facilities-1': s('The centre', 'Exterior or entrance of the centre'),
  'facilities-2': s('Activity area', 'A space used for daily programmes'),
  'facilities-3': s('Living spaces', 'Approved photograph of common or residential space'),
  'outreach-preview': s('Community outreach', 'Photograph from a documented community programme'),
  'journey-2004': s('Early years', 'Historical photograph, if records are available'),
  'about-story': s('Our story', 'Photograph of the centre or its early work'),
  'about-approach': s('Person-centred support', 'Consented photograph of respectful, individual support'),
  'about-families': s('Families and community', 'Photograph from a family or community gathering'),

  'service-residential': s('Residential care', 'Approved photograph of residential arrangements'),
  'service-rehabilitation': s('Rehabilitation', 'Consented photograph of a rehabilitation activity'),
  'service-physiotherapy': s('Physiotherapy', 'Photograph only if the service is verified'),
  'service-speech': s('Speech therapy', 'Photograph only if the service is verified'),
  'service-occupational': s('Occupational therapy', 'Photograph only if the service is verified'),
  'service-adl': s('Daily living training', 'Consented photograph of a daily-living activity'),
  'service-vocational': s('Vocational training', 'Photograph of verified vocational activity'),
  'service-cbr': s('Community-based rehabilitation', 'Photograph from a documented community programme'),

  'facility-centre': s('The centre, exterior', 'Actual exterior photograph'),
  'facility-centre-2': s('The centre, interior', 'Actual interior photograph'),
  'facility-residential': s('Residential space', 'Approved photograph without identifying residents'),
  'facility-residential-2': s('Common area', 'Approved photograph of a common space'),
  'facility-activity': s('Activity area', 'Space used for rehabilitation or daily programmes'),
  'facility-activity-2': s('Learning space', 'Consented photograph of an activity'),
  'facility-training': s('Training space', 'Photograph only of verified training areas'),
  'facility-safety': s('Access and comfort', 'Photograph of verified access features'),

  'outreach-cbr': s('Community-based rehabilitation', 'Documented community programme photograph'),
  'outreach-awareness': s('Community awareness', 'Photograph from an awareness event'),
  'outreach-shg': s('Self-help group awareness', 'Photograph from a documented session'),
  'outreach-rural': s('Rural development', 'Photograph from a documented initiative'),
  'outreach-historical': s('Earlier community health work', 'Archive photograph, if records are available'),

  'gallery-centre-1': s('Centre premises', 'Building or campus'),
  'gallery-centre-2': s('Common areas', 'Available facilities'),
  'gallery-centre-3': s('Entrance', 'Approved photograph'),
  'gallery-rehab-1': s('Rehabilitation activity', 'Approved photograph'),
  'gallery-rehab-2': s('Rehabilitation activity', 'Approved photograph'),
  'gallery-daily-1': s('Learning and participation', 'Approved photograph'),
  'gallery-daily-2': s('Practical activity', 'Approved photograph'),
  'gallery-daily-3': s('Skill development', 'Approved photograph'),
  'gallery-outreach-1': s('Awareness programme', 'Documented programme photograph'),
  'gallery-outreach-2': s('Community visit', 'Documented programme photograph'),
  'gallery-outreach-3': s('Rural initiative', 'Documented programme photograph'),
  'gallery-events-1': s('Event or observance', 'Actual event photograph'),
  'gallery-events-2': s('Celebration', 'Actual event photograph'),
  'gallery-journey-1': s('Historical photograph', 'Verified milestone since 2004'),
  'gallery-journey-2': s('From the archive', 'Verified milestone since 2004'),
  'contact-welcome': s('A warm welcome', 'Authentic, welcoming photograph of the centre'),
} as const

export type PhotoSlot = keyof typeof photoSlots


/** What each representative stock image actually shows (used for alt text and captions). */
const stockAlt: Record<PhotoSlot, string> = {
  'hero-main': "A smiling elderly Indian woman in an orange sari",
  'hero-secondary': "Two elderly people holding hands, a sari and white kurta visible",
  'intro-main': "A caregiver kneeling to talk warmly with an older woman in a wheelchair",
  'intro-secondary': "An elderly woman in a pink sari leaning in a green doorway",
  'facilities-1': "A yellow residential building with a lawn and trees",
  'facilities-2': "Older adults and caregivers sharing a meal at a table in a bright common room",
  'facilities-3': "An older woman reading a book on a comfortable bed in a calm bedroom",
  'outreach-preview': "A smiling elderly man among a group of seniors at an outdoor gathering",
  'journey-2004': "An elderly Indian couple standing together in a park",
  'about-story': "An Indian grandfather and grandmother smiling with their grandchild",
  'about-approach': "An elderly Indian couple standing together, smiling, holding a flower",
  'about-families': "A grandmother and her granddaughter sharing a moment on a veranda",
  'service-residential': "Two older women laughing together on a sofa in a comfortable living room",
  'service-rehabilitation': "A senior man stretching his arms with a helper in a bright room",
  'service-physiotherapy': "A smiling senior man doing floor exercises with a trainer",
  'service-speech': "An older woman and a younger woman laughing together over a book",
  'service-occupational': "An older man doing a hands-on activity with a helper at a table",
  'service-adl': "A senior man making his own bed in a bright bedroom",
  'service-vocational': "An older woman knitting with pink yarn",
  'service-cbr': "Older women chatting warmly together at a community gathering",
  'facility-centre': "A residential building with a red roof, trees and a clear sky",
  'facility-centre-2': "Older residents seated together in a bright common room",
  'facility-residential': "Two older women looking at a book together on a bed in a bedroom",
  'facility-residential-2': "Three older women chatting on a sofa in a sunlit lounge",
  'facility-activity': "Senior women smiling during a group exercise class",
  'facility-activity-2': "Older adults painting pottery together at a workshop table",
  'facility-training': "Seniors raising their arms in a seated group exercise class",
  'facility-safety': "A caregiver supporting an older woman who is using a walker",
  'outreach-cbr': "A man bending to speak with an older man seated on a park bench",
  'outreach-awareness': "Senior men working together on laptops in a bright meeting room",
  'outreach-shg': "Older friends relaxing together on garden chairs outdoors",
  'outreach-rural': "A smiling elderly woman in a yellow sari sitting outside a village home",
  'outreach-historical': "A black-and-white portrait of an elderly woman in a sari",
  'gallery-centre-1': "A white three-storey building with a lawn and young trees",
  'gallery-centre-2': "Older friends sharing tea and biscuits on a sofa",
  'gallery-centre-3': "A senior man bringing a drink to a woman reading in a comfortable bedroom",
  'gallery-rehab-1': "An older man holding a small coloured therapy ball",
  'gallery-rehab-2': "Two seniors practising yoga poses under a tree",
  'gallery-daily-1': "Two seniors watering plants together in a garden",
  'gallery-daily-2': "Older people sitting around a table sharing a meal and conversation",
  'gallery-daily-3': "Three seniors playing chess together on a sofa",
  'gallery-outreach-1': "Seniors and a younger man smiling around a laptop",
  'gallery-outreach-2': "An elderly Indian couple in festive clothing against warm golden lights",
  'gallery-outreach-3': "An older man and woman chatting warmly outdoors",
  'gallery-events-1': "An elderly man in glasses celebrating Holi with coloured powder",
  'gallery-events-2': "An elderly Indian couple in flower garlands holding hands at a ceremony",
  'gallery-journey-1': "An elderly Indian couple in garlands cutting a celebration cake",
  'gallery-journey-2': "An elderly woman in a green sari among decorated festival pots",
  'contact-welcome': "A smiling elderly Indian woman in a blue headscarf, welcoming and warm",
}

export interface ResolvedPhoto {
  src: string
  /** 640px variant for small screens, when available. */
  small?: string
  /** True for royalty-free stock imagery, which must always be labelled as representative. */
  stock: boolean
}

const load = (glob: Record<string, string>) => {
  const full: Record<string, string> = {}
  const small: Record<string, string> = {}
  for (const [path, url] of Object.entries(glob)) {
    const base = path.split('/').pop()!.replace(/\.[^.]+$/, '')
    if (base.endsWith('@640')) small[base.slice(0, -4)] = url
    else full[base] = url
  }
  return { full, small }
}

// Authentic photographs supplied by the centre take priority over stock imagery.
const authentic = load(
  import.meta.glob('/src/assets/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
)
const stock = load(
  import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
)

export const resolvePhoto = (slot: PhotoSlot): ResolvedPhoto | undefined => {
  if (authentic.full[slot]) return { src: authentic.full[slot], small: authentic.small[slot], stock: false }
  if (stock.full[slot]) return { src: stock.full[slot], small: stock.small[slot], stock: true }
  return undefined
}

/** Short, honest description of the image currently shown in a slot. */
export const slotDescription = (slot: PhotoSlot): string => {
  const p = resolvePhoto(slot)
  return p?.stock ? stockAlt[slot] : photoSlots[slot].label
}
