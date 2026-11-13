import { Compass, Eye, Handshake, HandHeart, Heart, Scale, Sparkles, UsersRound } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import { PageHero } from '../components/ui/PageHero'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

const values = [
  { icon: HandHeart, title: 'Dignity', text: 'We believe every individual deserves respect, regardless of disability or support needs.' },
  { icon: Heart, title: 'Compassion', text: 'We value patience, understanding and thoughtful service in our interactions with others.' },
  { icon: UsersRound, title: 'Inclusion', text: 'We believe persons with intellectual disabilities should be recognised as members of their families, communities and society.' },
  { icon: Sparkles, title: 'Individual Potential', text: 'We recognise that every person has different strengths and abilities. Support should reflect those differences.' },
  { icon: Scale, title: 'Responsibility', text: 'We value accountable practices, transparent communication and the responsible use of resources entrusted to an organisation.' },
  { icon: Handshake, title: 'Service', text: 'We are guided by the belief that service to humanity is a meaningful expression of compassion and social responsibility.' },
]

export default function About() {
  usePageMeta('About Shanthi Nilayam | Our Story Since 2004', 'The story, vision, mission and values of Shanthi Nilayam, Bonakal.')
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="About us"
        title={
          <>
            <span className="hero-line">Our Story.</span>
            <span className="hero-line">Our Purpose.</span>
            <span className="hero-line hero-line--accent">Our Commitment.</span>
          </>
        }
        lede={
          <p>
            At the heart of Shanthi Nilayam lies a simple belief: every person deserves dignity, understanding and the
            opportunity to participate in life to the fullest extent possible.
          </p>
        }
        visual={
          <div className="about-hero-visual">
            <Photo slot="about-story" ratio="4 / 5" className="about-hero-visual__photo" />
            <p className="about-hero-visual__year" aria-hidden="true">
              {site.established}
            </p>
          </div>
        }
      />

      <section className="section" id="story">
        <div className="container split">
          <div className="split__text">
            <SectionHeading eyebrow="Our story" title="A Journey of Service Since 2004" />
            <Reveal delay={1}>
              <p className="lead">
                Established in 2004, Shanthi Nilayam Rehabilitation Centre for Persons with Intellectual Disabilities
                is based in Bonakal, Khammam District, Telangana.
              </p>
              <p>
                The centre's work is focused on serving persons with intellectual disabilities through care,
                rehabilitation, skill development and community-oriented initiatives.
              </p>
              <p>
                We recognise that the needs of every individual are different. Support must therefore be approached
                with patience, respect and an understanding of each person's abilities and circumstances.
              </p>
              <p>
                Our work also reflects the importance of community awareness. Families, caregivers, institutions and
                local communities all have a role in creating an environment where persons with intellectual
                disabilities are understood, respected and included.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" className="story-side">
            <ol className="story-line">
              <li>
                <span>{site.established}</span>
                <p>Shanthi Nilayam is established in Bonakal, Khammam District.</p>
              </li>
              <li className="is-pending">
                <span>Next</span>
                <p>Further verified milestones will be added as records become available.</p>
              </li>
            </ol>
            <p className="story-side__quote">
              Compassion becomes meaningful when it is translated into responsible, practical service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark vm" aria-label="Vision and mission">
        <div className="container vm__grid">
          <Reveal className="vm__card">
            <Eye size={30} strokeWidth={1.3} aria-hidden="true" />
            <p className="eyebrow">Our vision</p>
            <h2>A Society Where Every Individual Belongs</h2>
            <p>
              To contribute to a society where persons with intellectual disabilities are treated with dignity,
              included in community life and supported to develop their abilities and participate as fully as
              possible.
            </p>
          </Reveal>
          <Reveal className="vm__card" delay={2}>
            <Compass size={30} strokeWidth={1.3} aria-hidden="true" />
            <p className="eyebrow">Our mission</p>
            <h2>Care with Compassion. Support with Purpose.</h2>
            <p>
              To serve persons with intellectual disabilities through appropriate care, rehabilitation, functional
              skill development and community-oriented initiatives, while promoting respect, awareness and inclusion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige" id="values">
        <div className="container">
          <SectionHeading eyebrow="Our core values" title="What Guides Every Decision" align="center" />
          <ul className="values">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i % 3} className="value">
                <v.icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="container split split--reverse">
          <div className="split__text">
            <SectionHeading eyebrow="Our approach" title={<>Every Individual Is <em>More Than a Diagnosis</em></>} />
            <Reveal delay={1}>
              <p className="lead">
                Intellectual disability does not define a person's entire identity, abilities, preferences or
                potential.
              </p>
              <p>
                A respectful approach recognises the individual first. It considers personal needs, communication,
                functional abilities, dignity and opportunities for participation.
              </p>
              <p>
                At Shanthi Nilayam, our website presents our work through this person-centred perspective. We aim to
                communicate the importance of appropriate care, rehabilitation and community understanding without
                reducing individuals to labels or stereotypes.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale">
            <Photo slot="about-approach" ratio="1 / 1" tone="ivory" />
          </Reveal>
        </div>
      </section>

      <section className="section section--beige" id="families">
        <div className="container split">
          <Reveal variant="scale">
            <Photo slot="about-families" ratio="5 / 4" />
          </Reveal>
          <div className="split__text">
            <SectionHeading eyebrow="Families and communities" title="Our Commitment to Families and Communities" />
            <Reveal delay={1}>
              <p>
                Families and caregivers often seek reliable information, practical support and a better understanding
                of disability-related needs.
              </p>
              <p>
                Community awareness also plays an important role in reducing stigma and encouraging respectful
                participation.
              </p>
              <p>
                We welcome enquiries from families and institutions wishing to understand the centre's services, as
                well as organisations interested in learning about our work and exploring potential partnerships.
              </p>
              <Button to="/contact">CONTACT OUR CENTRE</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="people">
        <div className="container">
          <SectionHeading eyebrow="Management and organisation" title="The People Behind the Mission" align="center" />
          <Reveal className="people">
            <ul className="people__slots" aria-label="Leadership information to be added">
              {['Authorised leader', 'Governing body or management', 'Registration details'].map((t) => (
                <li key={t}>
                  <span className="people__avatar" aria-hidden="true" />
                  <strong>{t}</strong>
                  <em>Details to be added after approval by the centre</em>
                </li>
              ))}
            </ul>
            <p className="people__note">
              This space is reserved for the centre's founder, management or governing body, with verified names,
              roles and approved photographs. No details are shown until the organisation confirms them.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
