import { useSearchParams } from 'react-router-dom'
import { Building2, ExternalLink, Gift, Globe, MapPin, Phone, Stethoscope, Wrench } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { enquiryLink, enquiryTopics, site, type EnquiryTopic } from '../data/site'
import { PageHero } from '../components/ui/PageHero'
import { EnquiryForm } from '../components/ui/EnquiryForm'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Photo } from '../components/ui/Photo'

const supportOptions = [
  { icon: Gift, title: 'Financial support', text: 'Explore how financial contributions could meet documented needs.', topic: 'csr' as EnquiryTopic },
  { icon: Wrench, title: 'In-kind assistance', text: 'Equipment, materials or other practical assistance.', topic: 'other' as EnquiryTopic },
  { icon: Stethoscope, title: 'Professional services', text: 'Volunteering, expertise and professional support.', topic: 'volunteering' as EnquiryTopic },
  { icon: Building2, title: 'Institutional partnerships', text: 'Collaboration with institutions, CSR teams, trusts and foundations.', topic: 'institutional' as EnquiryTopic },
]

export default function Contact() {
  usePageMeta('Contact Shanthi Nilayam | Bonakal, Telangana', 'Contact Shanthi Nilayam Rehabilitation Centre in Bonakal, Khammam District, Telangana.')
  const [params] = useSearchParams()
  const t = params.get('topic')
  const initialTopic: '' | EnquiryTopic = enquiryTopics.some((o) => o.value === t) ? (t as EnquiryTopic) : ''

  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact us"
        title={<>We Welcome <em>Your Enquiry</em></>}
        visual={<Photo slot="contact-welcome" ratio="4 / 5" className="contact-hero-photo" priority />}
        lede={
          <>
            <p className="lead">
              Whether you are a family member seeking information, an institution interested in collaboration or a
              well-wisher wishing to understand our work, we welcome your enquiry.
            </p>
            <p>
              Contact Shanthi Nilayam to learn more about the services currently available, the centre's activities or
              potential opportunities for partnership and support.
            </p>
          </>
        }
      />

      <section className="section contact" id="enquiry">
        <div className="container contact__grid">
          <Reveal className="contact__info">
            <h2 className="contact__org">{site.shortLegal}</h2>
            <ul className="info-cards">
              <li>
                <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Address</h3>
                  <p>{site.address}</p>
                </div>
              </li>
              <li>
                <Phone size={22} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  {site.phones.map((p) => (
                    <p key={p.href}>
                      <a href={p.href}>{p.display}</a>
                    </p>
                  ))}
                </div>
              </li>
              <li>
                <Globe size={22} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Website</h3>
                  <p>
                    <a href={site.website} target="_blank" rel="noopener noreferrer">
                      shanthinilayambonakal.org <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="contact__form" delay={1}>
            <h2>How Can We Help You?</h2>
            <p className="contact__form-lede">
              Please provide your details and a brief description of your enquiry. The centre can then review your
              request and respond using the contact information provided.
            </p>
            <EnquiryForm key={initialTopic} initialTopic={initialTopic} />
          </Reveal>
        </div>
      </section>

      <section className="section section--beige directions" id="directions">
        <div className="container directions__grid">
          <div>
            <SectionHeading eyebrow="Directions" title="Find Shanthi Nilayam" />
            <Reveal delay={1}>
              <p>Visit us at Bonakal, Khammam District, Telangana.</p>
              <p className="muted-small">
                A map pointing to the centre's verified location, with a directions link, will be added once the
                location is confirmed. Please call ahead if you plan to visit.
              </p>
              <ul className="directions__phones">
                {site.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="btn btn--secondary btn--sm">
                      <Phone size={15} aria-hidden="true" /> <span>{p.display}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal variant="scale" className="map" delay={1}>
            <div role="img" aria-label="Map placeholder. The verified location will be added." className="map__canvas">
              <svg viewBox="0 0 400 280" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
                <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".35">
                  <path d="M-10 220C60 190 90 150 160 160s110 70 250 20" />
                  <path d="M-10 170C70 140 120 100 190 110s120 50 230 0" />
                  <path d="M-10 120C60 90 130 60 200 70s110 30 220-20" />
                  <path d="M120 -10C130 60 90 120 120 190s50 80 40 110" />
                  <path d="M280 -10C270 70 310 120 290 190s-20 80 -10 110" />
                </g>
              </svg>
              <div className="map__pin">
                <MapPin size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="map__label">
                <strong>Map location to be verified</strong>
                <span>Bonakal, Khammam District, Telangana</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="support">
        <div className="container">
          <SectionHeading
            eyebrow="Support and partnerships"
            title="Interested in Supporting Our Work?"
            lede="We welcome conversations with individuals, institutions, corporate representatives and philanthropic organisations interested in our work with persons with intellectual disabilities."
          />
          <Reveal delay={1}>
            <p className="support-copy">
              If you would like to explore financial support, in-kind assistance, professional services or an
              institutional partnership, please contact us to discuss your proposal and the centre's current
              requirements.
            </p>
          </Reveal>
          <ul className="support-grid">
            {supportOptions.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i} className="support-card">
                <o.icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <Button to={enquiryLink(o.topic)} variant="text" size="sm">
                  DISCUSS SUPPORT OPTIONS
                </Button>
              </Reveal>
            ))}
          </ul>
          <p className="muted-small support-disclaimer">
            Contacting the centre does not itself establish CSR eligibility, approval or any tax benefit, and no
            donation is received through this website.
          </p>
        </div>
      </section>
    </>
  )
}
