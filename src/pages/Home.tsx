import { usePageMeta } from '../hooks/usePageMeta'
import { Hero } from '../components/home/Hero'
import { Intro } from '../components/home/Intro'
import { Purpose } from '../components/home/Purpose'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { FacilitiesPreview } from '../components/home/FacilitiesPreview'
import { OutreachPreview } from '../components/home/OutreachPreview'
import { Journey } from '../components/home/Journey'
import { SupportMission } from '../components/home/SupportMission'
import { CTASection } from '../components/ui/CTASection'

export default function Home() {
  usePageMeta(
    'Shanthi Nilayam | Rehabilitation Centre, Bonakal',
    'Shanthi Nilayam, a rehabilitation centre for persons with intellectual disabilities in Bonakal, Khammam District, Telangana. Serving since 2004.',
  )
  return (
    <>
      <Hero />
      <Intro />
      <Purpose />
      <ServicesPreview />
      <FacilitiesPreview />
      <OutreachPreview />
      <Journey />
      <SupportMission />
      <CTASection
        tone="warm"
        title="Let Us Start a Conversation"
        text="Would you like to learn more about our services, understand the work of Shanthi Nilayam or explore a possible collaboration? We welcome genuine enquiries from families, institutions, supporters and well-wishers."
        cta={{ label: 'GET IN TOUCH', to: '/contact' }}
      />
    </>
  )
}
