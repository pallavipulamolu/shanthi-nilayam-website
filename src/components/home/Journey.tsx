import { site } from '../../data/site'
import { Photo } from '../ui/Photo'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Journey() {
  return (
    <section className="section section--beige journey">
      <div className="container">
        <SectionHeading eyebrow="Our journey" title={<>Serving Since <em>{site.established}</em></>} />
        <div className="journey__grid">
          <Reveal className="journey__copy">
            <p className="lead">
              Since its establishment in {site.established}, Shanthi Nilayam has been dedicated to serving persons
              with intellectual disabilities through care, rehabilitation and related community initiatives.
            </p>
            <p>
              Our journey reflects a continuing commitment to compassionate service and the belief that every person
              deserves respect and opportunities suited to their abilities.
            </p>
            <p>
              We invite families, supporters, institutions and well-wishers to learn about our work and explore ways
              to contribute to a more inclusive society.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={1}>
            <Photo slot="journey-2004" ratio="4 / 3" tone="ivory" />
          </Reveal>
        </div>

        <Reveal as="ol" className="timeline">
          <li className="timeline__node timeline__node--verified">
            <span className="timeline__year">{site.established}</span>
            <span className="timeline__label">Shanthi Nilayam established in Bonakal</span>
          </li>
          <li className="timeline__node timeline__node--pending">
            <span className="timeline__year">·  ·  ·</span>
            <span className="timeline__label">Verified milestones will be added as records become available</span>
          </li>
          <li className="timeline__node timeline__node--now">
            <span className="timeline__year">Today</span>
            <span className="timeline__label">A continuing commitment to compassionate service</span>
          </li>
        </Reveal>
      </div>
    </section>
  )
}
