import logo from '../../assets/brand/shanthi-nilayam-logo.png'
import { site } from '../../data/site'

const ALT = 'Shanthi Nilayam Bonakal. Service to humanity is service to God.'

/** Header logo: the complete original Shanthi Nilayam artwork (emblem, name and tagline). */
export function BrandLogo() {
  return (
    <span className="brand__lockup">
      <img className="brand__logo" src={logo} alt={ALT} width={1023} height={427} decoding="async" />
      <span className="sr-only">{site.descriptor}</span>
    </span>
  )
}

/** Footer logo: the same complete original artwork. */
export function FooterLogo() {
  return (
    <img className="footer__lockup" src={logo} alt={ALT} width={1023} height={427} loading="lazy" decoding="async" />
  )
}
