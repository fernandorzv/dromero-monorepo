import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { studioMedia } from '../data/media'
import {
  studioCapabilities,
  studioPrinciples,
  studioProcessPhases,
  studioTools
} from '../data/studioProcess'
import '../styles/studio.css'

const teamImageDimensions = [
  { height: 427, width: 339 },
  { height: 427, width: 368 },
  { height: 388, width: 314 }
]

const processImageDimensions = [
  { height: 388, width: 428 },
  { height: 388, width: 363 }
]

function StudioPage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, nav, studioProcess } = copy

  return (
    <>
      <main className="studio-page">
        <section className="studio-hero" aria-label={studioProcess.hero.sectionAria}>
          <ResponsiveImage
            alt={studioProcess.hero.imageAlt}
            className="studio-hero__image"
            fetchPriority="high"
            height={427}
            loading="eager"
            objectPosition="center 56%"
            sizes="100vw"
            src={studioMedia.hero}
            width={391}
          />
          <div className="studio-hero__overlay" aria-hidden="true" />

          <SiteNavbar
            className="studio-nav"
            common={common}
            language={language}
            languageLabels={languageLabels}
            nav={nav}
            navigationAria={studioProcess.navigationAria}
            onLanguageChange={onLanguageChange}
          />

          <div className="studio-hero__content">
            <h1>{studioProcess.hero.title}</h1>
            <p>{studioProcess.hero.subtitle}</p>
          </div>
        </section>

        <section className="studio-story studio-section">
          <div className="studio-container studio-story__grid">
            <div className="studio-story__copy">
              <div className="studio-story__line" aria-hidden="true" />
              <div>
                <h2>{studioProcess.story.title}</h2>
                {studioProcess.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="studio-story__media">
              <ResponsiveImage
                alt={studioProcess.story.imageAlt}
                height={427}
                sizes="(max-width: 760px) 100vw, 56vw"
                src={studioMedia.story}
                width={401}
              />
            </div>
          </div>
        </section>

        <section className="studio-team studio-section" aria-labelledby="studio-team-title">
          <div className="studio-container">
            <h2 id="studio-team-title">{studioProcess.team.title}</h2>
            <p className="studio-section-intro">{studioProcess.team.intro}</p>
            <p className="studio-team__notice">{studioProcess.team.verificationNotice}</p>

            <div className="studio-team__grid">
              {studioMedia.team.map((portrait, index) => {
                const dimensions = teamImageDimensions[index]

                return (
                  <figure className="studio-team__portrait" key={portrait}>
                    <div className="studio-team__portrait-image">
                      <ResponsiveImage
                        alt={studioProcess.team.portraitAlts[index]}
                        height={dimensions.height}
                        sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw"
                        src={portrait}
                        width={dimensions.width}
                      />
                    </div>
                    <figcaption>{studioProcess.team.profilePending}</figcaption>
                  </figure>
                )
              })}
            </div>
          </div>
        </section>

        <section className="studio-process studio-section" aria-labelledby="studio-process-title">
          <div className="studio-container">
            <h2 id="studio-process-title">{studioProcess.process.title}</h2>

            <ol
              className="studio-process__timeline"
              aria-label={studioProcess.process.listAria}
            >
              {studioProcessPhases.map((phase) => {
                const Icon = phase.icon
                const content = studioProcess.process.phases[phase.id]

                return (
                  <li
                    className="studio-phase"
                    data-testid="studio-process-phase"
                    key={phase.id}
                  >
                    <div className="studio-phase__meta">
                      <span className="studio-phase__number">{phase.number}</span>
                      <Icon aria-hidden="true" focusable="false" />
                    </div>
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                    <ul className="studio-phase__outputs">
                      {content.outputs.map((output) => (
                        <li key={output}>{output}</li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ol>

            <div className="studio-process__media-grid">
              {studioMedia.process.map((image, index) => {
                const dimensions = processImageDimensions[index]

                return (
                  <div className="studio-process__media" key={image}>
                    <ResponsiveImage
                      alt={studioProcess.process.imageAlts[index]}
                      height={dimensions.height}
                      sizes="(max-width: 760px) 100vw, 50vw"
                      src={image}
                      width={dimensions.width}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="studio-principles studio-section"
          aria-labelledby="studio-principles-title"
        >
          <div className="studio-container">
            <h2 id="studio-principles-title">{studioProcess.principles.title}</h2>

            <div className="studio-principles__grid">
              {studioPrinciples.map((principle) => {
                const Icon = principle.icon
                const content = studioProcess.principles.items[principle.id]

                return (
                  <article className="studio-principle" key={principle.id}>
                    <Icon aria-hidden="true" focusable="false" />
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="studio-capabilities studio-section"
          aria-labelledby="studio-capabilities-title"
        >
          <div className="studio-container">
            <h2 id="studio-capabilities-title">{studioProcess.capabilities.title}</h2>
            <p className="studio-section-intro">{studioProcess.capabilities.intro}</p>

            <div className="studio-capabilities__grid">
              {studioCapabilities.map((capability) => {
                const Icon = capability.icon
                const content = studioProcess.capabilities.items[capability.id]

                return (
                  <article className="studio-capability" key={capability.id}>
                    <Icon aria-hidden="true" focusable="false" />
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="studio-tools studio-section" aria-labelledby="studio-tools-title">
          <div className="studio-container">
            <h2 id="studio-tools-title">{studioProcess.tools.title}</h2>

            <div className="studio-tools__grid">
              {studioTools.map((tool) => {
                const Icon = tool.icon
                const content = studioProcess.tools.items[tool.id]

                return (
                  <article className="studio-tool" key={tool.id}>
                    <Icon aria-hidden="true" focusable="false" />
                    <h3>{content.title}</h3>
                    <p>{content.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="studio-statement" aria-label={studioProcess.statement.sectionAria}>
          <ResponsiveImage
            alt={studioProcess.statement.imageAlt}
            className="studio-statement__image"
            height={388}
            objectPosition="center 58%"
            sizes="100vw"
            src={studioMedia.statement}
            width={389}
          />
          <div className="studio-statement__overlay" aria-hidden="true" />
          <h2>{studioProcess.statement.text}</h2>
        </section>

        <section className="studio-cta studio-section">
          <div className="studio-container">
            <h2>{studioProcess.cta.title}</h2>
            <p>{studioProcess.cta.body}</p>
            <Link className="studio-cta__button" to="/contact">
              {studioProcess.cta.button}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter copy={copy} />
    </>
  )
}

export default StudioPage
