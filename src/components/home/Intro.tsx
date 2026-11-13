import { Button } from '../ui/Button'
import { Photo } from '../ui/Photo'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Intro() {
  return (
    <section className="section intro">
      <div className="container split">
        <Reveal className="intro__images" variant="scale">
          <Photo slot="intro-main" ratio="4 / 5" className="intro__photo-main" />
          <Photo slot="intro-secondary" ratio="1 / 1" className="intro__photo-sub" tone="ivory" compact />
          <span className="intro__stamp" aria-hidden="true">
            Care
            <br />
            becomes
            <br />
            commitment
          </span>
        </Reveal>

        <div className="split__text">
          <SectionHeading eyebrow="Introduction" title="A Place Where Care Becomes Commitment" />
          <Reveal delay={1}>
            <p className="lead">
              Every person has a story, a personality, abilities and a place in society. Persons with intellectual
              disabilities deserve the same dignity, understanding and opportunities as everyone else.
            </p>
            <p>
              Shanthi Nilayam Rehabilitation Centre was established in 2004 with a commitment to serving persons with
              intellectual disabilities. Our work encompasses care, rehabilitation, the development of everyday
              skills and community-based initiatives.
            </p>
            <p>
              We believe that meaningful support goes beyond meeting immediate needs. It also means encouraging
              individual abilities, supporting families and helping build communities where persons with disabilities
              are respected and included.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <blockquote className="pullquote">
              Service is not merely an act of kindness. It is a responsibility towards humanity.
            </blockquote>
            <Button to="/about">DISCOVER OUR STORY</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
