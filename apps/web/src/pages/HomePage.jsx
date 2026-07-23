import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle'
import symetrisHomeLogo from '../images/RA-LogoB.png'

function HomePage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, home, nav } = copy

  return (
    <main className="gate1-page">
      <section className="hero-shell media-black" aria-label={home.heroAria}>
        <header className="hero-nav" aria-label={home.navigationAria}>
          <NavLink className="brand" to="/" aria-label={common.homeAria}>
            <img className="brand-logo" src={symetrisHomeLogo} alt={common.logoAlt} />
          </NavLink>

          <nav aria-label={common.primaryNav}>
            <ul className="nav-list">
              <li>
                <NavLink className="nav-link" to="/">
                  {nav.home}
                </NavLink>
              </li>
              <li>{nav.service}</li>
              <li>
                <NavLink className="nav-link" to="/projects">
                  {nav.project}
                </NavLink>
              </li>
              <li>{nav.team}</li>
              <li>{nav.contact}</li>
            </ul>
          </nav>

          <LanguageToggle labels={languageLabels} language={language} onChange={onLanguageChange} />
        </header>

        <div className="hero-content-grid">
          <section className="hero-copy">
            <h1>{home.heading}</h1>
            <button className="play-cta" type="button">
              {home.playVideo}
            </button>
          </section>
        </div>
      </section>

      <section className="overview-section" aria-label={home.overviewAria}>
        <article className="overview-left">
          <div className="thumb-rail" aria-label={home.thumbnailsAria}>
            <div className="thumb-item media-black" />
            <div className="thumb-item media-black" />
            <div className="thumb-item media-black" />
            <button className="thumb-arrow" type="button" aria-label={home.previousThumbnail}>
              ‹
            </button>
            <button className="thumb-arrow" type="button" aria-label={home.nextThumbnail}>
              ›
            </button>
          </div>

          <h2>{home.overviewTitle}</h2>
          <p>{home.overviewText}</p>
        </article>

        <article className="overview-right">
          <div className="overview-preview media-black" aria-hidden="true" />

          <ul className="kpi-list" aria-label={home.metricsAria}>
            {home.metrics.map((metric) => (
              <li key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>

          <div className="review-row">
            <button className="rating-pill" type="button">
              ★ 4.8
            </button>
            <button className="review-button" type="button">
              {home.reviews}
            </button>
          </div>
        </article>
      </section>

      <section className="recommend-section" aria-label={home.recommendationAria}>
        <article className="recommend-media media-black" aria-label={home.recommendationMediaAria}>
          <p className="media-caption">{home.mediaCaption}</p>
          <p className="media-index">{home.mediaIndex}</p>
        </article>

        <article className="recommend-panel">
          <p className="recommend-eyebrow">{home.recommendationEyebrow}</p>
          <h2>{home.recommendationTitle}</h2>
          <p className="recommend-subcopy">{home.recommendationText}</p>

          <ol className="category-list" aria-label={home.recommendationCategoriesAria}>
            {home.categories.map((category, index) => (
              <li key={category}>
                <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
                <span>{category}</span>
                {index === home.categories.length - 1 ? (
                  <span className="category-arrow" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="social-strip" aria-label={home.socialAria}>
        <p className="social-title">{home.socialTitle}</p>

        <ul className="social-list" aria-label={home.socialLinksAria}>
          <li>
            <a className="social-link" href="#" aria-label="Instagram">
              <FaInstagram aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="Facebook">
              <FaFacebookF aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="X">
              <FaXTwitter aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="YouTube">
              <FaYoutube aria-hidden="true" focusable="false" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default HomePage