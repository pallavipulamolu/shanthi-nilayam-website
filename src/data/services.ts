import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BedDouble,
  Hammer,
  Hand,
  HeartPulse,
  ListChecks,
  MessageCircle,
  Users,
} from 'lucide-react'
import type { PhotoSlot } from './photos'
import type { EnquiryTopic } from './site'

export interface Service {
  id: string
  name: string
  icon: LucideIcon
  short: string
  heading: string
  body: string
  focus: string
  slot: PhotoSlot
  topic: EnquiryTopic
}

export const services: Service[] = [
  {
    id: 'residential-care',
    name: 'Residential Care',
    icon: BedDouble,
    short:
      "Support and care for residents, in accordance with the centre's verified residential arrangements and individual needs.",
    heading: 'Care in a Supportive Environment',
    body: 'Residential care, where provided, involves supporting individuals in their daily routines and care needs within an appropriate living environment. The approach should respect personal dignity, individual preferences, safety and opportunities for participation.',
    focus:
      "To provide appropriate care and support in accordance with the centre's actual residential facilities, operating arrangements and individual care needs.",
    slot: 'service-residential',
    topic: 'residential',
  },
  {
    id: 'rehabilitation',
    name: 'Rehabilitation',
    icon: HeartPulse,
    short:
      'Structured support intended to develop functional abilities, participation and everyday independence.',
    heading: 'Supporting Functional Abilities and Participation',
    body: "Rehabilitation aims to support individuals in developing or maintaining abilities relevant to everyday life. Support should be suited to the person's needs and abilities, with realistic goals and respect for individual progress.",
    focus:
      'To support meaningful participation and functional development through the rehabilitation services available at the centre.',
    slot: 'service-rehabilitation',
    topic: 'services',
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy',
    icon: Activity,
    short:
      'Physical rehabilitation support, according to individual needs and the services currently available at the centre.',
    heading: 'Supporting Movement and Physical Function',
    body: 'Physiotherapy may support movement, physical function, mobility and participation in appropriate daily activities. The type of support required varies from person to person and should be guided by individual assessment and qualified professional advice.',
    focus:
      'To provide access to appropriate physical rehabilitation support where this service is currently available.',
    slot: 'service-physiotherapy',
    topic: 'services',
  },
  {
    id: 'speech-therapy',
    name: 'Speech Therapy',
    icon: MessageCircle,
    short:
      'Support for communication and speech-related needs, where provided by appropriately qualified professionals.',
    heading: 'Supporting Communication',
    body: 'Communication is an important part of daily life, relationships and participation. Speech and language therapy may help address individual communication needs through suitable assessment and intervention by qualified professionals.',
    focus: 'To support communication-related needs where the service is available and appropriate.',
    slot: 'service-speech',
    topic: 'services',
  },
  {
    id: 'occupational-therapy',
    name: 'Occupational Therapy',
    icon: Hand,
    short:
      'Activities designed to support functional skills, everyday participation and independence, where available.',
    heading: 'Building Skills for Everyday Participation',
    body: 'Occupational therapy can help individuals work towards functional goals involving daily activities, coordination, participation and practical skills. Activities should be adapted to individual needs and abilities and delivered by appropriately qualified professionals.',
    focus:
      'To support functional participation and everyday skills where occupational therapy is available at the centre.',
    slot: 'service-occupational',
    topic: 'services',
  },
  {
    id: 'adl-training',
    name: 'Activities of Daily Living (ADL) Training',
    icon: ListChecks,
    short:
      'Opportunities to practise everyday tasks and self-care skills at a pace suited to each individual.',
    heading: 'Small Steps. Meaningful Progress.',
    body: "Everyday activities can be important opportunities for learning, participation and independence. ADL training may include practising personal routines, eating-related tasks, dressing, hygiene or other everyday activities, according to the individual's needs and abilities.",
    focus:
      'To encourage participation in daily routines and support the development of practical skills at an appropriate pace.',
    slot: 'service-adl',
    topic: 'services',
  },
  {
    id: 'vocational-training',
    name: 'Vocational Training',
    icon: Hammer,
    short:
      'Skill-development opportunities intended to encourage participation, practical learning and greater independence.',
    heading: 'Skills That Create Opportunities',
    body: 'Vocational training can provide opportunities to learn practical tasks, practise skills and explore meaningful forms of participation. Training should be adapted to the abilities, interests and support needs of each individual.',
    focus:
      'To support practical skill development through the vocational activities actually offered by the centre.',
    slot: 'service-vocational',
    topic: 'services',
  },
  {
    id: 'community-based-rehabilitation',
    name: 'Community-Based Rehabilitation',
    icon: Users,
    short: 'Community-oriented initiatives that promote awareness, rehabilitation and inclusion.',
    heading: 'Inclusion Begins in the Community',
    body: 'Community-based rehabilitation brings attention to the role of families, communities and local institutions in supporting persons with disabilities. Community initiatives may include awareness, engagement, information-sharing and activities designed to encourage participation and reduce stigma.',
    focus:
      "To contribute to greater disability awareness and more inclusive communities through the centre's community-based work.",
    slot: 'service-cbr',
    topic: 'community',
  },
]
