import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/services'
import { enquiryLink } from '../data/site'
import { PageHero } from '../components/ui/PageHero'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/ui/CTASection'

const chipLabel = (name: string) =>
  name.replace(' (ADL)', '').replace('Activities of Daily Living', 'Daily Living')

export default function Services() {
  usePageMeta(
    'Rehabilitation and Support Services | Shanthi Nilayam',
    'Residential care, rehabilitation, therapy-related support, daily living and vocational training, and community-based rehabilitation.',
  )
  return (
    <>
      <PageHero
        variant="services"
        tone="beige"
        eyebrow="What we offer"
        title="Our Services"
        lede={
          <>
            <p className="lead">Every individual has unique needs, strengths and abilities.</p>
            <p>
              Appropriate support can help people develop functional skills, participate in everyday activities and
              experience greater inclusion. Shanthi Nilayam's areas of service include care, rehabilitation,
              therapy-related support, life-skills development and community-based initiatives.
            </p>
            <p className="muted-small">
              Availability and suitability depend on the centre's current programmes and the needs of each individual.
            </p>
          </>
        }
      >
        <nav className="svc-index" aria-label="Jump to a service">
          {services.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`} className="chip">
              <s.icon size={15} strokeWidth={1.7} aria-hidden="true" />
              {chipLabel(s.name)}
            </Link>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section svc-row ${i % 2 ? 'svc-row--flip section--beige' : ''}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className="container svc-row__grid">
            <Reveal variant="scale" className="svc-row__media">
              <Photo slot={s.slot} ratio="5 / 4" tone={i % 2 ? 'ivory' : 'sand'} />
              <span className="svc-row__number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </Reveal>
            <div className="svc-row__body">
              <Reveal>
                <span className="svc-row__icon">
                  <s.icon size={26} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <p className="eyebrow">{s.name}</p>
                <h2 id={`${s.id}-title`}>{s.heading}</h2>
                <p>{s.body}</p>
              </Reveal>
              <Reveal delay={1}>
                <div className="focus">
                  <h3>Our focus</h3>
                  <p>{s.focus}</p>
                </div>
                {s.note && <p className="muted-small">{s.note}</p>}
                <Button to={enquiryLink(s.topic)} variant="secondary" size="sm">
                  ENQUIRE ABOUT THIS SERVICE
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="section disclaimer-wrap">
        <div className="container">
          <Reveal className="disclaimer">
            <Info size={22} aria-hidden="true" />
            <p>
              <strong>Please note.</strong> This website provides general information. It does not guarantee admission,
              treatment outcomes or the availability of a particular service. Confirm current availability directly
              with the centre.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Seek information or support"
        title="Let Us Understand Your Enquiry"
        text="If you are a family member, caregiver, institution or prospective partner, contact Shanthi Nilayam to enquire about the services currently available. Our team can provide information about the centre's actual programmes, eligibility or admission procedures, where applicable, and the next steps for an enquiry."
        cta={{ label: 'ENQUIRE ABOUT OUR SERVICES', to: enquiryLink('services') }}
      />
    </>
  )
}
