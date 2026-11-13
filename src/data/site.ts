export const site = {
  name: 'Shanthi Nilayam',
  legalName: 'Shanthi Nilayam Rehabilitation Centre for Persons with Intellectual Disabilities',
  shortLegal: 'Shanthi Nilayam Rehabilitation Centre',
  descriptor: 'Rehabilitation Centre for Persons with Intellectual Disabilities',
  tagline: 'Service to humanity is service to God.',
  established: 2004,
  address: 'H. No. 10-58/1, Shanthi Nilayam, Bonakal (V&M), Khammam District, Telangana.',
  phones: [
    { display: '+91 79893 74452', href: 'tel:+917989374452' },
    { display: '+91 94404 06373', href: 'tel:+919440406373' },
  ],
  website: 'https://shanthinilayambonakal.org',
} as const

export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Community Outreach', to: '/community-outreach' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

export const enquiryTopics = [
  { value: 'services', label: 'Information about services' },
  { value: 'residential', label: 'Residential care or admission enquiry' },
  { value: 'facilities', label: 'Facilities enquiry' },
  { value: 'community', label: 'Community programme enquiry' },
  { value: 'institutional', label: 'Institutional collaboration' },
  { value: 'csr', label: 'CSR or philanthropic partnership' },
  { value: 'volunteering', label: 'Volunteering or professional support' },
  { value: 'other', label: 'Other' },
] as const

export type EnquiryTopic = (typeof enquiryTopics)[number]['value']

/** Route to the enquiry form with a topic preselected. */
export const enquiryLink = (topic: EnquiryTopic) => `/contact?topic=${topic}#enquiry`
