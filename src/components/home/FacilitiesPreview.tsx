import { Button } from '../ui/Button'
import { Photo } from '../ui/Photo'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FacilitiesPreview() {
  return (
    <section className="section section--dark facilities-preview">
      <div className="container">
        <div className="fp__grid">
          <div className="fp__text">
            <SectionHeading
              tone="light"
              eyebrow="Facilities"
              title="A Space for Care, Learning and Growth"
              lede="The environment in which a person receives care matters. A supportive setting can help individuals participate in activities, practise skills and engage with others."
            />
            <Reveal delay={1}>
              <p className="on-dark">
                Explore the facilities at Shanthi Nilayam, including the centre's premises, activity areas and other
                available spaces. Our aim is to provide an environment that reflects respect for the individuals we
                serve and the importance of appropriate care.
              </p>
              <Button to="/facilities">EXPLORE OUR FACILITIES</Button>
            </Reveal>
          </div>
          <Reveal className="fp__mosaic" variant="fade">
            <Photo slot="facilities-1" className="fp__a" tone="dusk" />
            <Photo slot="facilities-2" className="fp__b" tone="dusk" compact />
            <Photo slot="facilities-3" className="fp__c" tone="dusk" compact />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
