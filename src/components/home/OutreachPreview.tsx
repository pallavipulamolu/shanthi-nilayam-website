import { Button } from '../ui/Button'
import { Photo } from '../ui/Photo'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const areas = ['Community-Based Rehabilitation', 'Awareness Activities', 'Self-Help Group Awareness', 'Rural Development Initiatives']

export function OutreachPreview() {
  return (
    <section className="section outreach-preview">
      <div className="container split split--reverse">
        <div className="split__text">
          <SectionHeading eyebrow="Community outreach" title="Compassion Must Reach Beyond Our Walls" />
          <Reveal delay={1}>
            <p className="lead">
              Disability awareness and inclusion are not responsibilities that belong to one institution alone. They
              require the participation of families, communities and society.
            </p>
            <ul className="trail">
              {areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p>
              Through these areas of work, we seek to contribute to greater understanding, informed participation and
              more inclusive communities.
            </p>
            <Button to="/community-outreach">EXPLORE COMMUNITY OUTREACH</Button>
          </Reveal>
        </div>
        <Reveal variant="scale" className="outreach-preview__photo">
          <Photo slot="outreach-preview" ratio="5 / 6" tone="sand" />
        </Reveal>
      </div>
    </section>
  )
}
