import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '../../data/site'
import { useScrolled } from '../../hooks/useScrolled'
import { BrandMark } from './BrandMark'
import { Button } from '../ui/Button'

export function Header() {
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  // The drawer is tied to the path it was opened on, so navigating closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null)
  const open = openAt === pathname
  const setOpen = useCallback(
    (v: boolean | ((o: boolean) => boolean)) =>
      setOpenAt((cur) => ((typeof v === 'function' ? v(cur === pathname) : v) ? pathname : null)),
    [pathname],
  )
  const toggleRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [setOpen])

  // Scroll lock, Escape to close, focus handling and a simple focus trap.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const drawer = drawerRef.current
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab') {
        const items = focusables()
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, setOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="brand" aria-label="Shanthi Nilayam, home">
          <BrandMark />
          <span className="brand__text">
            <span className="brand__name">SHANTHI NILAYAM</span>
            <span className="brand__desc">{site.descriptor}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button to="/contact?topic=other#support" size="sm" className="header__cta" arrow={false}>
            SUPPORT OUR WORK
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open}>
        <button type="button" className="drawer__scrim" tabIndex={-1} aria-label="Close menu" onClick={close} />
        <div
          ref={drawerRef}
          id="mobile-menu"
          className="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          {...(!open ? { inert: true } : {})}
        >
          <nav aria-label="Mobile">
            <ul className="drawer__list">
              {navItems.map((item, i) => (
                <li key={item.to} style={{ '--i': i } as React.CSSProperties}>
                  <NavLink to={item.to} end={item.to === '/'} className="drawer__link">
                    <span className="drawer__num">0{i + 1}</span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="drawer__foot">
            <Button to="/contact?topic=other#support" arrow={false} className="btn--block">
              SUPPORT OUR WORK
            </Button>
            <p className="drawer__tag">{site.tagline}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
