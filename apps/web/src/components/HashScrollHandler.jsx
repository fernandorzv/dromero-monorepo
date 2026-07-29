import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function HashScrollHandler() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ left: 0, top: 0, behavior: 'auto' })
      return undefined
    }

    const targetId = decodeURIComponent(hash.slice(1))

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId)

      if (!target) {
        return
      }

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname])

  return null
}

export default HashScrollHandler
