import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/services'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="Our services"
            title="Support That Recognises Individual Potential"
            lede="Every individual has different abilities and needs. Appropriate support should respect those differences and focus on meaningful participation in everyday life."
          />
          <Reveal delay={2} className="section__head-cta">
            <Button to="/services">VIEW ALL SERVICES</Button>
          </Reveal>
        </div>
        <ul className="svc-grid">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i % 4}>
              <Link to={`/services#${s.id}`} className="svc-card">
                <span className="svc-card__icon">
                  <s.icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <ArrowUpRight className="svc-card__go" size={20} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
