import { HandHeart, Sprout, Users, Sun } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const items = [
  {
    icon: HandHeart,
    title: 'Dignity in Every Interaction',
    text: 'Every individual deserves to be treated with respect, patience and compassion, regardless of their abilities or support needs.',
  },
  {
    icon: Sprout,
    title: 'Opportunities to Develop',
    text: 'Rehabilitation and skill-building activities can help individuals strengthen functional abilities and participate more confidently in daily life.',
  },
  {
    icon: Users,
    title: 'Support for Families',
    text: 'Families and caregivers need understanding, information and access to appropriate support as they navigate the needs of their loved ones.',
  },
  {
    icon: Sun,
    title: 'A More Inclusive Community',
    text: 'A compassionate society recognises abilities, reduces stigma and creates opportunities for persons with disabilities to participate in community life.',
  },
]

export function Purpose() {
  return (
    <section className="section section--beige purpose">
      <div className="container">
        <SectionHeading eyebrow="Our purpose" title={<>Beyond Care. <em>Towards Possibility.</em></>} />
        <ol className="purpose__list">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i} className="purpose__item">
              <span className="purpose__index" aria-hidden="true">
                0{i + 1}
              </span>
              <it.icon className="purpose__icon" size={30} strokeWidth={1.4} aria-hidden="true" />
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
