import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { navItems, site } from '../../data/site'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <BrandMark size={48} />
            <div>
              <p className="footer__name">SHANTHI NILAYAM</p>
              <p className="footer__desc">{site.descriptor}</p>
            </div>
          </div>
          <p className="footer__tagline">{site.tagline.toUpperCase()}</p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h2 className="footer__h">Quick links</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <span className="footer__soon" aria-disabled="true">
                Privacy Policy <small>Coming soon</small>
              </span>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__h">Visit or call</h2>
          <address className="footer__address">
            <p>
              <MapPin size={17} aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            {site.phones.map((p) => (
              <p key={p.href}>
                <Phone size={17} aria-hidden="true" />
                <a href={p.href}>{p.display}</a>
              </p>
            ))}
          </address>
        </div>
      </div>
      <div className="container footer__legal">
        <p>
          Copyright © {site.established} {site.legalName}. All rights reserved.
        </p>
        <p className="footer__credit">
          Photographs shown are royalty-free stock images from Pexels, used only as representative imagery.
          They are not photographs of Shanthi Nilayam, its residents, staff or facilities.
        </p>
      </div>
    </footer>
  )
}
