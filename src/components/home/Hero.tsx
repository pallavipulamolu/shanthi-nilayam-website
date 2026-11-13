import { Button } from '../ui/Button'
import { Photo } from '../ui/Photo'
import { site } from '../../data/site'

export function Hero() {
  const d = (i: number) => ({ '--i': i }) as React.CSSProperties
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow anim-in" style={d(0)}>
            Rehabilitation Centre · Bonakal, Telangana
          </p>
          <h1 id="hero-title" className="hero__title anim-in" style={d(1)}>
            Every Life Deserves <em>Dignity.</em> Every Individual Deserves a Chance.
          </h1>
          <p className="hero__lede anim-in" style={d(2)}>
            At Shanthi Nilayam, we believe that every individual deserves care, respect, opportunity and the chance
            to develop to their fullest potential.
          </p>
          <p className="hero__sub anim-in" style={d(3)}>
            Established in {site.established}, our centre is dedicated to the care, rehabilitation and development of
            persons with intellectual disabilities. Through rehabilitation services, life-skills training and
            community outreach, we strive to create opportunities for greater independence, participation and
            inclusion.
          </p>
          <div className="hero__actions anim-in" style={d(4)}>
            <Button to="/services">EXPLORE OUR SERVICES</Button>
            <Button to="/contact?topic=other#support" variant="secondary">
              SUPPORT OUR MISSION
            </Button>
          </div>
          <p className="hero__quote anim-in" style={d(5)}>
            Because a more compassionate world begins when we recognise the worth of every human life.
          </p>
        </div>

        <div className="hero__visual anim-in" style={d(2)}>
          <div className="hero__arch">
            <Photo slot="hero-main" className="hero__photo hero__photo--main" tone="sand" priority sizes="(min-width: 960px) 420px, 80vw" />
          </div>
          <div className="hero__round">
            <Photo slot="hero-secondary" className="hero__photo hero__photo--second" tone="ivory" compact />
          </div>
          <div className="hero__badge" role="img" aria-label="Serving since 2004">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#badge-circle" startOffset="0">
                  SERVING SINCE · SERVING SINCE ·
                </textPath>
              </text>
            </svg>
            <span>2004</span>
          </div>
          <span className="hero__dots" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
