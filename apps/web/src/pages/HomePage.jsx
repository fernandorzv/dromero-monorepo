import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { homeMedia } from '../data/media'

function HomePage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, home, nav } = copy

  return (
    <>
      <main className="gate1-page home-page">
        <section className="hero-shell page-hero page-hero--home" aria-label={home.heroAria}>
          <ResponsiveImage
            alt={home.heroImageAlt}
            className="hero-image"
            fetchPriority="high"
            height={941}
            loading="eager"
            sizes="100vw"
            src={homeMedia.hero}
            width={1672}
          />
          <div className="hero-overlay" aria-hidden="true" />

          <SiteNavbar
            common={common}
            language={language}
            languageLabels={languageLabels}
            mode="overlay"
            nav={nav}
            navigationAria={home.navigationAria}
            onLanguageChange={onLanguageChange}
          />

          <div className="hero-content-grid page-hero__content">
            <section className="hero-copy">
              <h1>{home.heading}</h1>
              <a className="play-cta" href="#home-project">
                {home.playVideo}
              </a>
            </section>
          </div>
        </section>

        <section className="overview-section home-project home-featured-project" id="home-project" aria-label={home.overviewAria}>
          <div className="home-featured-project__main">
            <div className="thumb-rail home-featured-project__primary-media" aria-label={home.thumbnailsAria}>
              <div className="thumb-item">
                <ResponsiveImage alt={home.thumbnailAlts[0]} height={1024} sizes="(max-width: 1023px) 100vw, 40vw" src={homeMedia.thumbnails[0]} width={1536} />
              </div>
            </div>

            <div className="home-project__story home-featured-project__story">
              <p className="home-project__eyebrow">{home.featuredProject}</p>
              <h2>{home.overviewTitle}</h2>
              <p>{home.overviewText}</p>
              <Link className="home-project__action" to="/projects">
                {home.viewProject}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="home-project__metrics-panel home-featured-project__metrics metrics-panel">
              <ul className="kpi-list" aria-label={home.metricsAria}>
                {home.metrics.map((metric) => (
                  <li className="kpi-item" key={metric.label}>
                    <strong className="kpi-value">{metric.value}</strong>
                    <span className="kpi-label">{metric.label}</span>
                  </li>
                ))}
              </ul>

            <div className="review-row">
              <span className="rating-pill">{home.reviewBadge}</span>
              <span className="review-copy">{home.reviewsBasis}</span>
              <span className="review-button">
                {home.reviews}
              </span>
            </div>
            </div>
          </div>

          <div className="overview-preview home-featured-project__secondary-media">
            <ResponsiveImage alt={home.overviewImageAlt} height={1086} sizes="(max-width: 1023px) 100vw, 80vw" src={homeMedia.overview} width={1448} />
          </div>
        </section>

        <section className="recommend-section" aria-label={home.recommendationAria}>
          <article className="recommend-media" aria-label={home.recommendationMediaAria}>
            <ResponsiveImage
              alt={home.recommendationImageAlt}
              className="recommend-image"
              height={1402}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw"
              src={homeMedia.recommendation}
              width={1122}
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
