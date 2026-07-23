import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NavLink } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle'
import ResponsiveImage from '../components/ResponsiveImage'
import { projectsById } from '../data/projects'
import symetrisHomeLogo from '../images/RA-LogoB.png'

function ProjectsPage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, nav, projects } = copy
  const projectCategories = projects.categories
  const [selectedCategory, setSelectedCategory] = useState(projectCategories[0].id)
  const [selectedSlide, setSelectedSlide] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' })

  const selectedCategoryData = useMemo(
    () =>
      projectCategories.find((category) => category.id === selectedCategory) ?? projectCategories[0],
    [projectCategories, selectedCategory]
  )
  const selectedCategorySlides = useMemo(
    () =>
      selectedCategoryData.slides.map((slide) => ({
        ...slide,
        image: projectsById[slide.id].image
      })),
    [selectedCategoryData]
  )

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) {
      return
    }

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) {
      return undefined
    }

    updateCarouselState()
    emblaApi.on('select', updateCarouselState)
    emblaApi.on('reInit', updateCarouselState)

    return () => {
      emblaApi.off('select', updateCarouselState)
      emblaApi.off('reInit', updateCarouselState)
    }
  }, [emblaApi, updateCarouselState])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    emblaApi.reInit()
    emblaApi.scrollTo(0)
    setSelectedIndex(0)
    setSelectedSlide(null)
  }, [selectedCategory, emblaApi])

  useEffect(() => {
    if (!selectedSlide) {
      return undefined
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedSlide(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedSlide])

  useEffect(() => {
    setSelectedSlide(null)
  }, [language])

  const openDetails = (slide) => {
    setSelectedSlide({
      ...slide,
      categoryLabel: selectedCategoryData.label,
      categoryDescription: selectedCategoryData.description
    })
  }

  return (
    <main className="gate1-page projects-page">
      <section className="projects-shell" aria-label={projects.pageAria}>
        <header className="hero-nav projects-nav" aria-label={projects.navigationAria}>
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
                <NavLink className="nav-link nav-link-active" to="/projects">
                  {nav.project}
                </NavLink>
              </li>
              <li>{nav.team}</li>
              <li>{nav.contact}</li>
            </ul>
          </nav>

          <LanguageToggle labels={languageLabels} language={language} onChange={onLanguageChange} />
        </header>

        <section className="projects-intro" aria-label={projects.introAria}>
          <p className="projects-eyebrow">{projects.eyebrow}</p>
          <h1>{projects.heading}</h1>
        </section>

        <ul className="projects-filter-list" role="tablist" aria-label={projects.categoriesAria}>
          {projectCategories.map((category) => (
            <li key={category.id}>
              <button
                aria-controls={`projects-panel-${category.id}`}
                aria-selected={selectedCategory === category.id}
                className={`projects-filter-tab${
                  selectedCategory === category.id ? ' projects-filter-active' : ''
                }`}
                id={`projects-tab-${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                role="tab"
                type="button"
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        <p className="projects-category-description">{selectedCategoryData.description}</p>

        <section
          aria-label={projects.showcaseAria}
          aria-labelledby={`projects-tab-${selectedCategoryData.id}`}
          className="projects-carousel-shell"
          id={`projects-panel-${selectedCategoryData.id}`}
          role="tabpanel"
        >
          <div className="projects-carousel-viewport" ref={emblaRef}>
            <div className="projects-carousel-track">
              {selectedCategorySlides.map((slide) => (
                <article className="project-slide" key={slide.id}>
                  <ResponsiveImage alt={slide.alt} src={slide.image} />
                  <p className="project-slide-title">{slide.subtype}</p>
                  <span className="project-slide-note">{slide.note}</span>
                  <button className="project-slide-details" onClick={() => openDetails(slide)} type="button">
                    {projects.viewDetails}
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="projects-carousel-controls" aria-label={projects.controlsAria}>
            <button
              aria-label={projects.previousProjects}
              className="projects-carousel-arrow"
              disabled={!canScrollPrev}
              onClick={() => emblaApi?.scrollPrev()}
              type="button"
            >
              ‹
            </button>

            <div className="projects-carousel-dots" aria-label={projects.paginationAria}>
              {selectedCategorySlides.map((slide, index) => (
                <button
                  aria-label={`${projects.goTo} ${slide.subtype}`}
                  aria-pressed={selectedIndex === index}
                  className={`projects-carousel-dot${
                    selectedIndex === index ? ' projects-carousel-dot-active' : ''
                  }`}
                  key={slide.id}
                  onClick={() => emblaApi?.scrollTo(index)}
                  type="button"
                />
              ))}
            </div>

            <button
              aria-label={projects.nextProjects}
              className="projects-carousel-arrow"
              disabled={!canScrollNext}
              onClick={() => emblaApi?.scrollNext()}
              type="button"
            >
              ›
            </button>
          </div>
        </section>
      </section>

      {selectedSlide ? (
        <div className="project-drawer-overlay" onClick={() => setSelectedSlide(null)} role="presentation">
          <aside
            aria-label={projects.dialogTitle}
            aria-modal="true"
            className="project-drawer"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button className="project-drawer-close" onClick={() => setSelectedSlide(null)} type="button">
              {projects.close}
            </button>
            <p className="project-drawer-category">{selectedSlide.categoryLabel}</p>
            <h2>{selectedSlide.subtype}</h2>
            <ResponsiveImage alt={selectedSlide.alt} src={selectedSlide.image} />
            <p className="project-drawer-summary">{selectedSlide.note}</p>
            <p className="project-drawer-details">{selectedSlide.details}</p>
            <p className="project-drawer-context">{selectedSlide.categoryDescription}</p>
          </aside>
        </div>
      ) : null}
    </main>
  )
}

export default ProjectsPage