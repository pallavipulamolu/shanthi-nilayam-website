import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollManager } from './ScrollManager'

export function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" key={pathname} className="page" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
