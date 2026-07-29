import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import symetrisHomeLogo from '../images/RA-LogoB.png'
import { studioContact } from '../data/contact'
import { footerNavigation, footerSocials } from '../data/footer'
import './SiteFooter.css'

function SiteFooter({ copy }) {
  const { common, footer, nav } = copy
  const currentYear = new Date().getFullYear()
  const contactItems = [
    {
      href: `mailto:${studioContact.email}`,
      icon: FaEnvelope,
      id: 'email',
      value: studioContact.email
    },
    {
      href: studioContact.phoneHref,
      icon: FaPhone,
      id: 'phone',
      value: studioContact.phoneDisplay
    },
    {
      href: null,
      icon: FaLocationDot,
      id: 'location',
      value: studioContact.location
    }
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <NavLink className="site-footer__logo" to="/" aria-label={common.homeAria}>
            <img src={symetrisHomeLogo} alt={footer.logoAlt} />
          </NavLink>
          <p className="site-footer__statement">{footer.brandStatement}</p>

          <ul className="site-footer__socials" aria-label={footer.socialsAria}>
            {footerSocials.map((social) => {
              const Icon = social.icon
              const externalLinkProps = social.href?.startsWith('http')
                ? { rel: 'noopener noreferrer', target: '_blank' }
                : {}

              return (
                <li key={social.id}>
                  {social.href ? (
                    <a
                      aria-label={footer.socialLabels[social.id]}
                      className="site-footer__social-link"
                      href={social.href}
                      {...externalLinkProps}
                    >
                      <Icon aria-hidden="true" focusable="false" />
                    </a>
                  ) : (
                    <span
                      aria-label={footer.socialLabels[social.id]}
                      className="site-footer__social-link"
                      role="img"
                    >
                      <Icon aria-hidden="true" focusable="false" />
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <nav
          className="site-footer__desktop-column site-footer__navigation"
          aria-label={footer.navigationAria}
        >
          <h2 className="site-footer__heading">{footer.navigationTitle}</h2>
          <ul className="site-footer__links">
            {footerNavigation.map((item) => (
              <li key={item.path}>
                <NavLink end={item.end} to={item.path}>
                  {nav[item.id]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <address className="site-footer__contact">
          <h2 className="site-footer__heading">{footer.contactTitle}</h2>
          <ul className="site-footer__contact-list">
            {contactItems.map((item) => (
              <li key={item.id}>
                <item.icon aria-hidden="true" focusable="false" />
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </address>
      </div>

      <div className="site-footer__bottom">
        <p>© {currentYear} {footer.legal}</p>
      </div>
    </footer>
  )
}

export default SiteFooter
