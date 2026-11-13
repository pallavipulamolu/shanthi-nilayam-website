import { usePageMeta } from '../hooks/usePageMeta'
import { enquiryLink } from '../data/site'
import { PageHero } from '../components/ui/PageHero'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTASection } from '../components/ui/CTASection'
import type { PhotoSlot } from '../data/photos'

interface Story {
  id: string
  n: string
  eyebrow: string
  title: string
  body: string
  pending: string
  slot: PhotoSlot
  historical?: boolean
}

const stories: Story[] = [
  {
    id: 'cbr',
    n: '01',
    eyebrow: 'Community-based rehabilitation',
    title: 'Inclusion Is a Shared Responsibility',
    body: 'Community-based rehabilitation recognises that support for persons with disabilities involves more than one institution. Families, local communities, service providers and other stakeholders can all play important roles. This area of work focuses on the importance of awareness, participation and appropriate community-level support.',
    pending: 'Locations served, activities, dates, partners and outcomes',
    slot: 'outreach-cbr',
  },
  {
    id: 'awareness',
    n: '02',
    eyebrow: 'Community awareness',
    title: 'Understanding Is the Beginning of Inclusion',
    body: 'Awareness can help challenge misconceptions about intellectual disability and encourage more respectful attitudes. Community awareness initiatives can provide opportunities to discuss disability, support needs, inclusion and the importance of treating every person with dignity.',
    pending: 'Programme descriptions, photographs and event reports',
    slot: 'outreach-awareness',
  },
  {
    id: 'self-help-groups',
    n: '03',
    eyebrow: 'Self-help group awareness',
    title: 'Strengthening Community Understanding',
    body: "Self-help groups can serve as important community platforms for information-sharing, participation and local engagement. Shanthi Nilayam's self-help group awareness activities form part of its community-oriented work.",
    pending: 'Groups engaged, topics covered, programme dates and partner organisations',
    slot: 'outreach-shg',
  },
  {
    id: 'rural-development',
    n: '04',
    eyebrow: 'Rural development',
    title: 'Building Awareness and Participation at the Local Level',
    body: "Rural development initiatives can help bring information, engagement and opportunities closer to communities. They relate directly to the centre's mission and its community-oriented work.",
    pending: 'Villages covered, activities undertaken, collaborating organisations and documented results',
    slot: 'outreach-rural',
  },
  {
    id: 'historical-tb',
    n: '05',
    eyebrow: 'Historical tuberculosis-related initiatives',
    title: 'Recognising Earlier Community Health Work',
    body: "Shanthi Nilayam's earlier tuberculosis-related initiatives are part of its history of community health work. They are presented here as historical programmes; their current status has not been confirmed, and their relevance to the centre's wider community work will be described as records become available.",
    pending: 'Programme period, scope, implementing partners and outcomes supported by records',
    slot: 'outreach-historical',
    historical: true,
  },
]

const indicators = [
  'Awareness programmes conducted',
  'Communities or villages reached',
  'Individuals or families engaged',
  'Training or outreach activities completed',
  'Institutional collaborations',
  'Outcomes recorded in programme reports',
]

export default function CommunityOutreach() {
  usePageMeta('Community Outreach and Rehabilitation | Shanthi Nilayam', 'Community-based rehabilitation, awareness, self-help group awareness and rural development at Shanthi Nilayam.')
  return (
    <>
      <PageHero
        variant="outreach"
        eyebrow="Community outreach"
        title={<>Taking Awareness <em>Beyond Our Walls</em></>}
        lede={
          <>
            <p className="lead">
              A more inclusive society begins with understanding. Community awareness, local engagement and appropriate
              support can help families and communities recognise the needs, rights and abilities of persons with
              disabilities.
            </p>
            <p>
              Shanthi Nilayam's community-oriented work includes community-based rehabilitation, awareness initiatives,
              self-help group awareness and rural development activities.
            </p>
          </>
        }
        visual={
          <div className="out-hero-visual">
            <Photo slot="outreach-preview" ratio="4 / 5" className="out-hero-visual__a" />
            <Photo slot="outreach-awareness" ratio="1 / 1" className="out-hero-visual__b" tone="ivory" compact />
          </div>
        }
      />

      {stories.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section out-story ${i % 2 ? 'out-story--flip section--beige' : ''} ${s.historical ? 'out-story--historical' : ''}`}
        >
          <div className="container out-story__grid">
            <Reveal variant="scale" className="out-story__media">
              <Photo slot={s.slot} ratio="4 / 3" tone={i % 2 ? 'ivory' : 'sand'} />
              <span className="out-story__n" aria-hidden="true">
                {s.n}
              </span>
              {s.historical && <span className="tag-historical">Historical programme</span>}
            </Reveal>
            <div className="out-story__text">
              <Reveal>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
                <p className="pending">
                  <strong>To be added once verified:</strong> {s.pending}.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="container" aria-hidden="true">
            <div className="divider-dots" />
          </div>
        </section>
      ))}

      <section className="section section--dark impact" id="impact">
        <div className="container">
          <SectionHeading
            tone="light"
            eyebrow="06 · Our community impact"
            title="Every Effort Deserves to Be Accounted For"
            lede="The value of community work is best communicated through real activities, documented outcomes and the experiences of the people involved. Verified programme summaries, photographs, reports and measurable outcomes will be shown here wherever records exist."
          />
          <ul className="impact__grid">
            {indicators.map((label, i) => (
              <Reveal as="li" key={label} delay={i % 3} className="impact__item">
                <span className="impact__figure" aria-label="Figure not yet available">
                  —
                </span>
                <span className="impact__label">{label}</span>
                <span className="impact__status">Awaiting verified records</span>
              </Reveal>
            ))}
          </ul>
          <p className="impact__note">No estimated totals are published as actual achievements.</p>
        </div>
      </section>

      <CTASection
        tone="warm"
        eyebrow="07 · Partner with us"
        title="Let Us Work Together for Greater Inclusion"
        text="We welcome enquiries from educational institutions, healthcare organisations, community groups, philanthropic organisations and corporate representatives interested in understanding our work and exploring appropriate collaborations. Potential areas of discussion may include awareness programmes, professional expertise, training, community initiatives and eligible institutional support."
        cta={{ label: 'DISCUSS A PARTNERSHIP', to: enquiryLink('institutional') }}
      />
    </>
  )
}
