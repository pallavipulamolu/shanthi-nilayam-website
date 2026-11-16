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
        title="Our Services"
        lede={
          <>
            <p className="lead">
              Every individual has unique needs, strengths and abilities. Appropriate support can help people develop
              functional skills, participate in everyday activities and experience greater inclusion.
            </p>
            <p>
              Shanthi Nilayam's areas of service include care, rehabilitation, therapy-related support, life-skills
              development and community-based initiatives. Availability and suitability depend on the centre's current
              programmes and the needs of each individual.
            </p>
          </>
        }
        visual={
          <div className="svc-hero-visual">
            <Photo slot="services-hero" ratio="4 / 5" className="svc-hero-visual__photo" priority sizes="(min-width: 900px) 440px, 90vw" />
          </div>
        }
      >
        <nav className="svc-index" aria-label="Jump to a service">
          <ol>
            {services.map((s, i) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>
                  <span className="svc-index__n">{String(i + 1).padStart(2, '0')}</span>
                  <s.icon size={16} strokeWidth={1.6} aria-hidden="true" />
                  <span>{s.name}</span>
                </Link>
              </li>
            ))}
          </ol>
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
                <Button to={enquiryLink(s.topic)} variant="secondary" size="sm">
                  ENQUIRE ABOUT OUR SERVICES
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
            <div>
              <p>
                <strong>Service disclaimer:</strong> The website provides general information. It does not guarantee
                admission, treatment outcomes or the availability of a particular service. Confirm current availability
                directly with the centre.
              </p>
              <p className="muted-small">
                Photographs on this page are representative royalty-free stock images (not of Indian beneficiaries specifically), and are not photographs of Shanthi Nilayam, its
                residents, staff or facilities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Seek information or support"
        title="Let Us Understand Your Enquiry"
        text={[
          'If you are a family member, caregiver, institution or prospective partner, contact Shanthi Nilayam to enquire about the services currently available.',
          "Our team can provide information about the centre's actual programmes, eligibility or admission procedures, where applicable, and the next steps for an enquiry.",
        ]}
        cta={{ label: 'ENQUIRE ABOUT OUR SERVICES', to: enquiryLink('services') }}
      />
    </>
  )
}
