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
  nav,
  navigationAria,
  onLanguageChange
}) {
  const navItems = [
    { end: true, label: nav.home, to: '/' },
    { label: nav.service, to: '/services' },
    { label: nav.project, to: '/projects' },
    { label: nav.team, to: '/studio' },
    { label: nav.contact, to: '/contact' }
  ]

  return (
    <header className={`hero-nav site-navbar ${className}`.trim()} aria-label={navigationAria}>
      <NavLink className="brand" to="/" aria-label={common.homeAria}>
        <img className="brand-logo" src={symetrisHomeLogo} alt={common.logoAlt} />
      </NavLink>

      <nav aria-label={common.primaryNav}>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink className={navLinkClassName} end={item.end} to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <LanguageToggle labels={languageLabels} language={language} onChange={onLanguageChange} />
    </header>
  )
}

export default SiteNavbar
