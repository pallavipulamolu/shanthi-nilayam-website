import { Building2, HeartHandshake, Stethoscope, UserRound } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const who = [
  { icon: UserRound, title: 'Individuals', text: 'Well-wishers who wish to understand the need and find the right way to help.' },
  { icon: Building2, title: 'Institutions', text: 'Educational, healthcare and community organisations exploring collaboration.' },
  { icon: Stethoscope, title: 'Volunteers & professionals', text: 'Those able to offer time, skills or professional expertise.' },
  { icon: HeartHandshake, title: 'Philanthropic organisations', text: 'Trusts, foundations and corporate teams interested in a partnership.' },
]

export function SupportMission() {
  return (
    <section className="section support" id="support-mission">
      <div className="container">
        <div className="support__panel">
          <div className="support__ring" aria-hidden="true" />
          <div className="support__intro">
            <SectionHeading
              tone="light"
              eyebrow="Support our mission"
              title="Be Part of a More Compassionate Tomorrow"
              lede="Meaningful change grows when people come together around a shared purpose."
            />
            <Reveal delay={1}>
              <p className="on-dark">
                Your interest, encouragement, professional expertise, institutional partnership or eligible financial
                support can help strengthen the work of organisations serving persons with disabilities.
              </p>
              <p className="on-dark">
                If you are an individual well-wisher, philanthropic organisation, corporate representative or
                prospective volunteer, we welcome the opportunity to discuss how you may be able to contribute.
              </p>
              <div className="btn-row">
                <Button to="/contact#support">EXPLORE WAYS TO HELP</Button>
                <Button to="/contact" variant="light">
                  CONTACT SHANTHI NILAYAM
                </Button>
              </div>
              <p className="support__line">
                Every meaningful contribution begins with understanding the need and finding the right way to help.
              </p>
            </Reveal>
          </div>
          <ul className="support__who">
            {who.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i + 1}>
                <w.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
