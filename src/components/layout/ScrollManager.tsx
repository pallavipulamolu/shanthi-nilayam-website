import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change, or smoothly to the #anchor when one is present. */
export function ScrollManager() {
  const { pathname, hash, search } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    const attempt = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries++ < 10) {
        window.setTimeout(attempt, 50)
      }
    }
    attempt()
  }, [pathname, hash, search])

  return null
}
