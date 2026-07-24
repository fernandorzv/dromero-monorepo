import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { homeMedia } from '../data/media'

function HomePage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, home, nav } = copy

  return (
    <>
      <main className="gate1-page">
      <section className="hero-shell" aria-label={home.heroAria}>
        <ResponsiveImage
          alt={home.heroImageAlt}
          className="hero-image"
          fetchPriority="high"
          loading="eager"
          src={homeMedia.hero}
        />
        <div className="hero-overlay" aria-hidden="true" />

        <SiteNavbar
          common={common}
          language={language}
          languageLabels={languageLabels}
          nav={nav}
          navigationAria={home.navigationAria}
          onLanguageChange={onLanguageChange}
        />

        <div className="hero-content-grid">
          <section className="hero-copy">
            <h1>{home.heading}</h1>
            <a className="play-cta" href="#home-project">
              {home.playVideo}
            </a>
          </section>
        </div>
      </section>

      <section className="overview-section home-project" id="home-project" aria-label={home.overviewAria}>
        <article className="overview-left home-project__content">
          <div className="thumb-rail" aria-label={home.thumbnailsAria}>
            {homeMedia.thumbnails.map((image, index) => (
              <div className="thumb-item" key={image}>
                <ResponsiveImage alt={home.thumbnailAlts[index]} src={image} />
              </div>
            ))}
            <button className="thumb-arrow" type="button" aria-label={home.previousThumbnail}>
              ‹
            </button>
            <button className="thumb-arrow" type="button" aria-label={home.nextThumbnail}>
              ›
            </button>
          </div>

          <div className="home-project__story">
            <p className="home-project__eyebrow">{home.featuredProject}</p>
            <h2>{home.overviewTitle}</h2>
            <p>{home.overviewText}</p>
            <Link className="home-project__action" to="/projects">
              {home.viewProject}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        <article className="overview-right home-project__media-stack">
          <div className="overview-preview">
            <ResponsiveImage alt={home.overviewImageAlt} src={homeMedia.overview} />
          </div>

          <div className="home-project__metrics-panel">
            <ul className="kpi-list" aria-label={home.metricsAria}>
            {home.metrics.map((metric) => (
              <li key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
            </ul>

            <div className="review-row">
              <span className="rating-pill">★ 4.8</span>
              <span className="review-copy">{home.reviewsBasis}</span>
              <button className="review-button" type="button">
                {home.reviews}
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="recommend-section" aria-label={home.recommendationAria}>
        <article className="recommend-media" aria-label={home.recommendationMediaAria}>
          <ResponsiveImage
            alt={home.recommendationImageAlt}
            className="recommend-image"
            src={homeMedia.recommendation}
          />
          <div className="recommend-overlay" aria-hidden="true" />
          <p className="media-caption">{home.mediaCaption}</p>
          <p className="media-index">{home.mediaIndex}</p>
        </article>

        <article className="recommend-panel">
          <p className="recommend-eyebrow">{home.recommendationEyebrow}</p>
          <h2>{home.recommendationTitle}</h2>
          <p className="recommend-subcopy">{home.recommendationText}</p>
        </article>

        <ol className="category-list recommend-categories" aria-label={home.recommendationCategoriesAria}>
          {home.categories.map((category, index) => (
            <li key={category}>
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{category}</span>
              <span className="category-arrow" aria-hidden="true">—</span>
            </li>
          ))}
        </ol>
      </section>

      </main>

      <SiteFooter copy={copy} />
    </>
  )
}

export default HomePage