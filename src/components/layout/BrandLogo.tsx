import iconLight from '../../assets/brand/shanthi-nilayam-icon.svg'
import lockupDark from '../../assets/brand/shanthi-nilayam-logo-horizontal-on-dark.svg'
import { site } from '../../data/site'

/** Header logo: redesigned dove-and-globe mark with the organisation name. */
export function BrandLogo() {
  return (
    <span className="brand__lockup">
      <img className="brand__mark" src={iconLight} alt="" width={56} height={56} decoding="async" />
      <span className="brand__text">
        <span className="brand__name">SHANTHI NILAYAM</span>
        <span className="brand__place">BONAKAL</span>
        <span className="sr-only"> {site.descriptor}</span>
      </span>
    </span>
  )
}

/** Footer logo: full horizontal lockup (mark, name and tagline) for dark backgrounds. */
export function FooterLogo() {
  return (
    <img
      className="footer__lockup"
      src={lockupDark}
      alt="Shanthi Nilayam Bonakal. Service to humanity is service to God."
      width={750}
      height={240}
      loading="lazy"
      decoding="async"
    />
  )
}
