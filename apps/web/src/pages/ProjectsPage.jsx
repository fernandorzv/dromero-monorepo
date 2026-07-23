import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NavLink } from 'react-router-dom'
import symetrisHomeLogo from '../images/RA-LogoB.png'

const projectCategories = [
  {
    id: 'residential',
    label: 'Residential',
    description:
      'Designed for habitation, including single-family homes, multifamily housing, condominiums, and apartment complexes.',
    slides: [
      {
        id: 'residential-single-family',
        subtype: 'Single-Family Homes',
        note: 'Private dwellings optimized for comfort, daylight, and neighborhood context.',
        details:
          'These homes prioritize privacy, natural ventilation, and a strong indoor-outdoor connection through patios, gardens, and shaded openings.',
        image:
          'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'residential-multifamily',
        subtype: 'Multifamily Housing',
        note: 'Efficient apartment and condo layouts for high-density urban living.',
        details:
          'Multifamily buildings balance shared amenities, circulation efficiency, and acoustic comfort while maximizing usable floor area.',
        image:
          'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  },
  {
    id: 'commercial',
    label: 'Commercial',
    description:
      'Focused on economic activity and services, such as offices, retail stores, shopping centers, and hotels.',
    slides: [
      {
        id: 'commercial-office',
        subtype: 'Office Environments',
        note: 'Flexible workplaces built for collaboration, focus, and brand identity.',
        details:
          'Commercial office design integrates modular meeting areas, adaptable workstations, and biophilic strategies to improve productivity.',
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'commercial-retail',
        subtype: 'Retail and Hospitality',
        note: 'Customer-first spaces with clear flow, visibility, and experiential zoning.',
        details:
          'Retail and hotel architecture emphasizes circulation sequencing, storefront presence, and memorable interiors that support conversion and retention.',
        image:
          'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  },
  {
    id: 'institutional-public',
    label: 'Institutional or Public',
    description:
      'Created for social well-being and administration, covering schools, hospitals, libraries, and government buildings.',
    slides: [
      {
        id: 'institutional-education',
        subtype: 'Education Facilities',
        note: 'Schools and campuses planned for inclusive, adaptable learning.',
        details:
          'Institutional education projects combine intuitive wayfinding, safe circulation, and multi-use spaces for teaching, community events, and recreation.',
        image:
          'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'institutional-healthcare',
        subtype: 'Healthcare and Civic',
        note: 'Public-service buildings balancing accessibility, resilience, and dignity.',
        details:
          'Healthcare and civic architecture requires efficient zoning, hygienic material systems, and clear public interfaces for high daily throughput.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  },
  {
    id: 'cultural',
    label: 'Cultural',
    description:
      'Spaces for art and social interaction, including museums, theaters, community centers, and auditoriums.',
    slides: [
      {
        id: 'cultural-museum',
        subtype: 'Museums and Galleries',
        note: 'Exhibition-oriented environments that control light, flow, and storytelling.',
        details:
          'Cultural institutions use neutral envelope design, lighting hierarchy, and curated procession routes to frame artistic narratives.',
        image:
          'https://images.unsplash.com/photo-1577083552431-6e5fd01988f9?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'cultural-performance',
        subtype: 'Performance Venues',
        note: 'Acoustically tuned theaters and auditoriums for immersive events.',
        details:
          'Performance buildings integrate acoustic shell geometry, audience sightlines, and backstage logistics for operational excellence.',
        image:
          'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  },
  {
    id: 'industrial',
    label: 'Industrial',
    description:
      'Structures for production and manufacturing, including factories, warehouses, and processing plants.',
    slides: [
      {
        id: 'industrial-factory',
        subtype: 'Manufacturing Plants',
        note: 'Process-driven facilities engineered for throughput and safety.',
        details:
          'Industrial plants rely on robust structural grids, heavy-load logistics paths, and ventilation systems sized for specialized machinery.',
        image:
          'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'industrial-warehouse',
        subtype: 'Logistics Warehouses',
        note: 'High-bay storage and distribution hubs optimized for rapid movement.',
        details:
          'Warehouse architecture prioritizes truck court layout, dock efficiencies, and adaptable rack systems to support changing supply chains.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    description:
      'Essential civil works such as bridges, transport stations, and airports.',
    slides: [
      {
        id: 'infrastructure-bridge',
        subtype: 'Bridge Systems',
        note: 'Civil structures connecting regions with structural clarity and resilience.',
        details:
          'Bridge projects demand advanced load analysis, durable materials, and phased construction planning to reduce service disruption.',
        image:
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80'
      },
      {
        id: 'infrastructure-hub',
        subtype: 'Transit and Airport Hubs',
        note: 'Passenger-focused transport nodes with high-capacity circulation.',
        details:
          'Transit infrastructure balances wayfinding legibility, crowd management, and multimodal integration to improve user experience.',
        image:
          'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=80'
      }
    ]
  }
]

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState(projectCategories[0].id)
  const [selectedSlide, setSelectedSlide] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' })

  const selectedCategoryData = useMemo(
    () =>
      projectCategories.find((category) => category.id === selectedCategory) ?? projectCategories[0],
    [selectedCategory]
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

  const openDetails = (slide) => {
    setSelectedSlide({
      ...slide,
      categoryLabel: selectedCategoryData.label,
      categoryDescription: selectedCategoryData.description
    })
  }

  return (
    <main className="gate1-page projects-page">
      <section className="projects-shell" aria-label="Projects page">
        <header className="hero-nav projects-nav" aria-label="Projects navigation">
          <NavLink className="brand" to="/" aria-label="Symetris home">
            <img className="brand-logo" src={symetrisHomeLogo} alt="Symetris home" />
          </NavLink>

          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>Service</li>
              <li>
                <NavLink className="nav-link nav-link-active" to="/projects">
                  Project
                </NavLink>
              </li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        <section className="projects-intro" aria-label="Projects introduction">
          <p className="projects-eyebrow">Our Project</p>
          <h1>Explore Our Projects: A Journey of Design and Innovation</h1>
        </section>

        <ul className="projects-filter-list" role="tablist" aria-label="Project categories">
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
          aria-label="Project showcase"
          aria-labelledby={`projects-tab-${selectedCategoryData.id}`}
          className="projects-carousel-shell"
          id={`projects-panel-${selectedCategoryData.id}`}
          role="tabpanel"
        >
          <div className="projects-carousel-viewport" ref={emblaRef}>
            <div className="projects-carousel-track">
              {selectedCategoryData.slides.map((slide) => (
                <article className="project-slide" key={slide.id}>
                  <img src={slide.image} alt={`${selectedCategoryData.label} - ${slide.subtype}`} />
                  <p className="project-slide-title">{slide.subtype}</p>
                  <span className="project-slide-note">{slide.note}</span>
                  <button className="project-slide-details" onClick={() => openDetails(slide)} type="button">
                    View Details
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="projects-carousel-controls" aria-label="Carousel controls">
            <button
              aria-label="Previous projects"
              className="projects-carousel-arrow"
              disabled={!canScrollPrev}
              onClick={() => emblaApi?.scrollPrev()}
              type="button"
            >
              ‹
            </button>

            <div className="projects-carousel-dots" aria-label="Carousel pagination">
              {selectedCategoryData.slides.map((slide, index) => (
                <button
                  aria-label={`Go to ${slide.subtype}`}
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
              aria-label="Next projects"
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
            aria-labelledby="project-details-title"
            aria-modal="true"
            className="project-drawer"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button className="project-drawer-close" onClick={() => setSelectedSlide(null)} type="button">
              Close
            </button>
            <p className="project-drawer-category">{selectedSlide.categoryLabel}</p>
            <h2 id="project-details-title">{selectedSlide.subtype}</h2>
            <img src={selectedSlide.image} alt={selectedSlide.subtype} />
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
