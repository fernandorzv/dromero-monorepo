import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import symetrisHomeLogo from '../images/RA-LogoB.png'
import LanguageToggle from './LanguageToggle'

function navLinkClassName({ isActive }) {
  return isActive ? 'nav-link nav-link-active' : 'nav-link'
}

function SiteNavbar({
  className = '',
  common,
  language,
  languageLabels,
  mode = 'overlay',
  nav,
  navigationAria,
  onLanguageChange
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const panelId = 'site-mobile-menu'
  const navItems = [
    { end: true, label: nav.home, to: '/' },
    { label: nav.service, to: '/services' },
    { label: nav.project, to: '/projects' },
    { label: nav.team, to: '/studio' },
    { label: nav.contact, to: '/contact' }
  ]

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const focusTimers = [0, 80].map((delay) =>
      window.setTimeout(() => {
        closeButtonRef.current?.focus()
      }, delay)
    )

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      focusTimers.forEach((focusTimer) => window.clearTimeout(focusTimer))
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className={`hero-nav site-navbar site-navbar--${mode} ${className}`.trim()} aria-label={navigationAria}>
      <NavLink className="brand" to="/" aria-label={common.homeAria} onClick={() => setIsMenuOpen(false)}>
        <img className="brand-logo" src={symetrisHomeLogo} alt={common.logoAlt} />
      </NavLink>

      <nav
        aria-label={common.primaryNav}
        className={isMenuOpen ? 'site-nav-panel site-nav-panel--open' : 'site-nav-panel'}
        id={panelId}
      >
        <div className="site-nav-panel__header">
          <span>{common.menuTitle}</span>
          <button
            aria-label={common.closeMenu}
            className="site-nav-close"
            onClick={closeMenu}
            ref={closeButtonRef}
            type="button"
          >
            ×
          </button>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                className={navLinkClassName}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen ? <button aria-hidden="true" className="site-nav-backdrop" onClick={closeMenu} tabIndex={-1} type="button" /> : null}

      <div className="site-navbar__actions">
        <LanguageToggle labels={languageLabels} language={language} onChange={onLanguageChange} />

        <button
          aria-controls={panelId}
          aria-expanded={isMenuOpen}
          aria-label={common.openMenu}
          className="mobile-menu-button site-navbar__menu-button"
          onClick={() => setIsMenuOpen(true)}
          ref={menuButtonRef}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default SiteNavbar
