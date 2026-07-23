import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { servicesMedia } from '../data/media'
import { serviceAreas, serviceProcessSteps } from '../data/services'
import '../styles/services.css'

function ServicesPage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, nav, services } = copy

  return (
    <>
      <main className="services-page">
        <section className="services-hero" aria-label={services.hero.sectionAria}>
          <ResponsiveImage
            alt={services.hero.imageAlt}
            className="services-hero__image"
            fetchPriority="high"
            height={365}
            loading="eager"
            sizes="100vw"
            src={servicesMedia.hero}
            width={754}
          />
          <div className="services-hero__overlay" aria-hidden="true" />

          <SiteNavbar
            className="services-nav"
            common={common}
            language={language}
            languageLabels={languageLabels}
            nav={nav}
            navigationAria={services.navigationAria}
            onLanguageChange={onLanguageChange}
          />

          <div className="services-hero__content">
            <h1>{services.hero.title}</h1>
            <p>{services.hero.subtitle}</p>
          </div>
        </section>

        <section className="services-approach services-section">
          <div className="services-container services-approach__grid">
            <div className="services-approach__copy">
              <div className="services-accent-line" aria-hidden="true" />
              <div>
                <h2>{services.approach.title}</h2>
                <p>{services.approach.body}</p>
              </div>
            </div>

            <div className="services-approach__media">
              <ResponsiveImage
                alt={services.approach.imageAlt}
                height={365}
                sizes="(max-width: 760px) 100vw, 58vw"
                src={servicesMedia.approach}
                width={755}
              />
            </div>
          </div>
        </section>

        <section className="services-process services-section">
          <div className="services-container">
            <h2>{services.process.title}</h2>

            <ol className="services-process__list" aria-label={services.process.listAria}>
              {serviceProcessSteps.map((step) => {
                const Icon = step.icon
                const content = services.process.items[step.id]

                return (
                  <li className="process-step" key={step.id}>
                    <article className="process-step__content">
                      <div className="process-step__meta">
                        <span className="process-step__number">{step.number}</span>
                        <Icon aria-hidden="true" focusable="false" />
                      </div>
                      <h3>{content.title}</h3>
                      <p>{content.body}</p>
                    </article>

                    <div className="process-step__media">
                      <ResponsiveImage
                        alt={content.imageAlt}
                        height={step.height}
                        sizes="(max-width: 760px) 100vw, 58vw"
                        src={step.image}
                        width={step.width}
                      />
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="services-areas services-section">
          <div className="services-container">
            <h2>{services.areas.title}</h2>

            <div className="services-areas__grid">
              {serviceAreas.map((area) => {
                const Icon = area.icon
                const content = services.areas.items[area.id]

                return (
                  <article className="service-card" key={area.id}>
                    <Icon aria-hidden="true" focusable="false" />
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="services-statement" aria-label={services.statement.sectionAria}>
          <ResponsiveImage
            alt={services.statement.imageAlt}
            className="services-statement__image"
            height={262}
            sizes="100vw"
            src={servicesMedia.statement}
            width={895}
          />
          <div className="services-statement__overlay" aria-hidden="true" />
          <h2>{services.statement.text}</h2>
        </section>

        <section className="services-cta services-section">
          <div className="services-container">
            <h2>{services.cta.title}</h2>
            <p>{services.cta.body}</p>
            <Link className="services-cta__button" to="/contact">
              {services.cta.button}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter copy={copy} />
    </>
  )
}

export default ServicesPage
