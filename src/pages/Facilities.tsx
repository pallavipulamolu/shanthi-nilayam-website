import { ShieldCheck } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { enquiryLink } from '../data/site'
import { PageHero } from '../components/ui/PageHero'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTASection } from '../components/ui/CTASection'

const safetyPoints = [
  'Safety arrangements',
  'Accessible entrances',
  'Washrooms',
  'Mobility access',
  'Supervision',
  'Other support features',
]

export default function Facilities() {
  usePageMeta('Our Facilities | Shanthi Nilayam, Bonakal', 'The premises and spaces of Shanthi Nilayam Rehabilitation Centre in Bonakal, Khammam District.')
  return (
    <>
      <PageHero
        variant="facilities"
        eyebrow="Our facilities"
        title="Our Facilities"
        lede={
          <p>
            An appropriate environment can support care, rehabilitation, learning and participation. Explore the
            facilities available at Shanthi Nilayam through verified photographs and descriptions of the centre.
          </p>
        }
        extra={
          <p className="muted-small">
            Until authentic photographs are supplied, the images on this page are representative stock photographs and
            do not show the centre itself.
          </p>
        }
        visual={
          <div className="fac-hero-mosaic">
            <Figure slot="facility-centre" caption="The centre" className="fac-hero-mosaic__a" ratio="3 / 4" />
            <Figure slot="facility-activity" caption="Activity areas" className="fac-hero-mosaic__b" ratio="1 / 1" compact tone="ivory" />
          </div>
        }
      />

      <section className="section fac-centre" id="centre">
        <div className="container">
          <div className="fac-centre__grid">
            <div className="fac-centre__text">
              <SectionHeading eyebrow="01 · The centre" title="A Place Dedicated to Service" />
              <Reveal delay={1}>
                <p className="lead">
                  Shanthi Nilayam is located in Bonakal, Khammam District, Telangana.
                </p>
                <p>
                  This page presents the centre's premises and available facilities so that families, visitors,
                  prospective partners and well-wishers can better understand the environment in which its work takes
                  place.
                </p>
              </Reveal>
            </div>
            <Reveal variant="scale" className="fac-centre__wide">
              <Figure slot="facility-centre" caption="Exterior of the centre · photograph to be added" ratio="16 / 10" />
            </Reveal>
            <Reveal variant="scale" delay={2} className="fac-centre__narrow">
              <Figure slot="facility-centre-2" caption="Interior of the centre · photograph to be added" ratio="4 / 5" tone="ivory" compact />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--beige" id="residential">
        <div className="container">
          <SectionHeading eyebrow="02 · Residential facilities" title="Supporting Everyday Living" />
          <div className="fac-res">
            <Reveal className="fac-res__text">
              <p className="lead">Where residential accommodation is provided, families deserve clear and accurate information.</p>
              <p>
                Living arrangements, common spaces, care facilities and relevant accessibility features will be
                described here once confirmed by the centre, so that families can understand the environment before
                making an enquiry.
              </p>
              <p className="muted-small">Photographs will not identify residents unless appropriate consent has been obtained.</p>
            </Reveal>
            <Reveal variant="scale" className="fac-res__a">
              <Figure slot="facility-residential" caption="Residential space" ratio="4 / 5" />
            </Reveal>
            <Reveal variant="scale" delay={2} className="fac-res__b">
              <Figure slot="facility-residential-2" caption="Common area" ratio="1 / 1" tone="ivory" compact />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="activity">
        <div className="container">
          <SectionHeading
            tone="light"
            eyebrow="03 · Rehabilitation and activity areas"
            title="Spaces for Participation and Learning"
            lede="Where available, the spaces used for rehabilitation activities, functional skills, learning and other daily programmes will be shown here, with an explanation of how each space is used and which activities take place there."
          />
          <div className="fac-activity">
            <Reveal variant="scale" className="fac-activity__a">
              <Figure slot="facility-activity" caption="Activity area · photograph to be added" ratio="16 / 11" tone="dusk" />
            </Reveal>
            <Reveal variant="scale" delay={2} className="fac-activity__b">
              <Figure slot="facility-activity-2" caption="Learning space · consented photograph to be added" ratio="4 / 5" tone="dusk" compact />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="training">
        <div className="container split split--reverse">
          <div className="split__text">
            <SectionHeading eyebrow="04 · Training and skill development" title="Opportunities to Practise and Learn" />
            <Reveal delay={1}>
              <p>
                If the centre has dedicated training spaces, they will be introduced here with a description of the
                types of activities undertaken.
              </p>
              <p>
                Details of available equipment, learning materials and training programmes are included only when
                verified by the centre.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale">
            <Figure slot="facility-training" caption="Training space · photograph to be added" ratio="5 / 4" />
          </Reveal>
        </div>
      </section>

      <section className="section section--beige" id="safety">
        <div className="container fac-safety">
          <div>
            <SectionHeading eyebrow="05 · Safety, accessibility and comfort" title="An Environment That Respects Individual Needs" />
            <Reveal delay={1}>
              <p>
                Factual information about the safety arrangements, accessible entrances, washrooms, mobility access,
                supervision and other support features that are actually available will be provided here. We avoid
                broad claims and describe only what the centre confirms.
              </p>
            </Reveal>
          </div>
          <Reveal className="fac-safety__list" delay={1}>
            <ShieldCheck size={26} strokeWidth={1.4} aria-hidden="true" />
            <h3>To be confirmed with the centre</h3>
            <ul>
              {safetyPoints.map((p) => (
                <li key={p}>
                  <span>{p}</span>
                  <em>Pending verification</em>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="06 · Visit or make an enquiry"
        title="Learn More About Our Centre"
        text="Families, institutions and prospective partners can contact Shanthi Nilayam to enquire about the facilities and arrangements currently available."
        cta={{ label: 'CONTACT SHANTHI NILAYAM', to: enquiryLink('facilities') }}
      />
    </>
  )
}
