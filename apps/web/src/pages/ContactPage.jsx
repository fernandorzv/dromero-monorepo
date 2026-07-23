import { useRef } from 'react'
import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaMapLocationDot,
  FaPhone
} from 'react-icons/fa6'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { contactMedia } from '../data/media'
import '../styles/contact.css'

const contactInfoItems = [
  { icon: FaEnvelope, id: 'email' },
  { icon: FaPhone, id: 'phone' },
  { icon: FaLocationDot, id: 'location' },
  { icon: FaClock, id: 'schedule' }
]

const projectTypeOptions = [
  'residential',
  'commercial',
  'institutional',
  'interiorDesign',
  'renovation',
  'other'
]

function ContactPage({ copy, language, languageLabels, onLanguageChange }) {
  const formHeadingRef = useRef(null)
  const { common, contact, nav } = copy

  function focusContactForm() {
    const heading = formHeadingRef.current

    if (!heading) {
      return
    }

    heading.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
    heading.focus({ preventScroll: true })
  }

  return (
    <>
      <main className="contact-page">
        <section className="contact-hero" aria-label={contact.hero.sectionAria}>
          <ResponsiveImage
            alt={contact.hero.imageAlt}
            className="contact-hero__image"
            fetchPriority="high"
            height={446}
            loading="eager"
            sizes="100vw"
            src={contactMedia.hero}
            width={1505}
          />
          <div className="contact-hero__overlay" aria-hidden="true" />

          <SiteNavbar
            className="contact-nav"
            common={common}
            language={language}
            languageLabels={languageLabels}
            nav={nav}
            navigationAria={contact.navigationAria}
            onLanguageChange={onLanguageChange}
          />

          <div className="contact-hero__content">
            <h1>{contact.hero.title}</h1>
            <p>{contact.hero.subtitle}</p>
          </div>
        </section>

        <section className="contact-form-section contact-section" id="contact-form">
          <div className="contact-container contact-form-section__grid">
            <div className="contact-intro">
              <div className="contact-intro__line" aria-hidden="true" />
              <div>
                <h2 ref={formHeadingRef} tabIndex="-1">
                  {contact.intro.title}
                </h2>
                <p>{contact.intro.body}</p>
              </div>
            </div>

            <form
              className="contact-form"
              aria-label={contact.form.formAria}
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="contact-field">
                <label htmlFor="contact-full-name">{contact.form.fullName}</label>
                <input autoComplete="name" id="contact-full-name" name="fullName" required />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">{contact.form.email}</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">{contact.form.phone}</label>
                <input autoComplete="tel" id="contact-phone" name="phone" type="tel" />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-project-type">{contact.form.projectType}</label>
                <select defaultValue="" id="contact-project-type" name="projectType" required>
                  <option disabled value="">
                    {contact.form.projectTypePrompt}
                  </option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {contact.form.options[option]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="contact-message">{contact.form.message}</label>
                <textarea id="contact-message" name="message" required rows="5" />
              </div>

              <div className="contact-form__actions">
                <button
                  className="contact-form__submit"
                  aria-describedby="contact-form-notice"
                  disabled
                  type="submit"
                >
                  {contact.form.submit}
                </button>
                <p className="contact-form__notice" id="contact-form-notice">
                  {contact.form.integrationNotice}
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="contact-info" aria-labelledby="contact-info-title">
          <div className="contact-info__grid">
            <div className="contact-info__panel">
              <h2 id="contact-info-title">{contact.info.title}</h2>
              <p className="contact-info__pending">{contact.info.pending}</p>

              <ul className="contact-info__list">
                {contactInfoItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <li className="contact-info__item" key={item.id}>
                      <Icon aria-hidden="true" focusable="false" />
                      <div>
                        <span className="contact-info__label">
                          {contact.info.items[item.id]}
                        </span>
                        <span className="contact-info__value">{contact.info.unavailable}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="contact-info__media">
              <ResponsiveImage
                alt={contact.info.imageAlt}
                height={373}
                sizes="(max-width: 760px) 100vw, 58vw"
                src={contactMedia.support}
                width={653}
              />
            </div>
          </div>
        </section>

        <section className="contact-map contact-section" aria-labelledby="contact-map-title">
          <div className="contact-container">
            <div className="contact-map__intro">
              <h2 id="contact-map-title">{contact.map.title}</h2>
              <p>{contact.map.locationPending}</p>
            </div>

            <div
              className="contact-map__placeholder"
              aria-label={contact.map.placeholderAria}
              role="img"
            >
              <FaMapLocationDot
                className="contact-map__marker"
                aria-hidden="true"
                focusable="false"
              />
              <p>{contact.map.placeholderText}</p>
            </div>
          </div>
        </section>

        <section className="contact-cta" aria-label={contact.cta.sectionAria}>
          <ResponsiveImage
            alt={contact.cta.imageAlt}
            className="contact-cta__image"
            height={373}
            sizes="100vw"
            src={contactMedia.ctaBanner}
            width={833}
          />
          <div className="contact-cta__overlay" aria-hidden="true" />
          <div className="contact-cta__content">
            <h2>{contact.cta.title}</h2>
            <p>{contact.cta.body}</p>
            <button className="contact-cta__button" onClick={focusContactForm} type="button">
              {contact.cta.button}
            </button>
          </div>
        </section>
      </main>

      <SiteFooter copy={copy} />
    </>
  )
}

export default ContactPage
