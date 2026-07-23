import { NavLink } from 'react-router-dom'
import symetrisHomeLogo from '../images/RA-LogoB.png'

function SiteFooter({ common, footer, nav }) {
  const footerLinks = [
    { end: true, label: nav.home, to: '/' },
    { label: nav.service, to: '/services' },
    { label: nav.project, to: '/projects' },
    { label: nav.team, to: '/studio' },
    { label: nav.contact, to: '/contact' }
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <NavLink className="site-footer__brand" to="/" aria-label={common.homeAria}>
          <img src={symetrisHomeLogo} alt={common.logoAlt} />
        </NavLink>

        <nav aria-label={footer.navigationAria}>
          <ul className="site-footer__nav">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <NavLink end={item.end} to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {footer.copyright}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
