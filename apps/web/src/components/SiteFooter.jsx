import { NavLink } from 'react-router-dom'
import symetrisHomeLogo from '../images/RA-LogoB.png'
import footerSignatureLogo from '../images/footer-signature.png'
import {
  footerContact,
  footerNavigation,
  footerServices,
  footerSocials
} from '../data/footer'
import './SiteFooter.css'

function SiteFooter({ copy }) {
  const { common, footer, nav, services } = copy
  const currentYear = new Date().getFullYear()
  const activeContact = footerContact.filter((item) => item.href && item.value)

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
          className="site-footer__desktop-column"
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

        <section
          className="site-footer__desktop-column"
          aria-labelledby="site-footer-services-title"
        >
          <h2 className="site-footer__heading" id="site-footer-services-title">
            {footer.servicesTitle}
          </h2>
          <ul className="site-footer__services-list">
            {footerServices.map((service) => (
              <li key={service}>
                <NavLink to="/services">{services.areas.items[service].title}</NavLink>
              </li>
            ))}
          </ul>
        </section>

        <address className="site-footer__contact">
          <h2 className="site-footer__heading">{footer.contactTitle}</h2>

          {activeContact.length > 0 ? (
            <ul className="site-footer__contact-list">
              {activeContact.map((item) => {
                const Icon = item.icon

                return (
                  <li key={item.id}>
                    <Icon aria-hidden="true" focusable="false" />
                    <a href={item.href}>{item.value}</a>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="site-footer__unavailable">{footer.contactUnavailable}</p>
          )}
        </address>
      </div>

      <div className="site-footer__bottom">
        <p>© {currentYear} {footer.legal}</p>
        <div className="site-footer__closing">
          <img src={footerSignatureLogo} alt={footer.closingStatement} />
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
