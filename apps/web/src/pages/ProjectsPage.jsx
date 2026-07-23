import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa6'
import ResponsiveImage from '../components/ResponsiveImage'
import SiteFooter from '../components/SiteFooter'
import SiteNavbar from '../components/SiteNavbar'
import { projectCategoryOrder, projects as projectRegistry } from '../data/projects'
import '../styles/projects.css'

function getProjectCopy(projectsCopy, project) {
  return projectsCopy.items[project.copyKey]
}

function ProjectAction({ label, onClick }) {
  return (
    <button className="projects-action" onClick={onClick} type="button">
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </button>
  )
}

function FeaturedProject({ categoryLabel, onOpen, project, projectCopy, projectsCopy }) {
  return (
    <article className="projects-feature-card">
      <div className="projects-feature-copy">
        <p className="projects-card-eyebrow">{projectsCopy.labels.featured}</p>
        <p className="projects-card-category">{categoryLabel}</p>
        <h2>{projectCopy.title}</h2>
        <p className="projects-card-location">{projectCopy.location}</p>
        <p className="projects-card-summary">{projectCopy.summary}</p>
        <ProjectAction label={projectsCopy.labels.viewProject} onClick={onOpen} />
      </div>
      <div className="projects-feature-media">
        <ResponsiveImage
          alt={projectCopy.alt}
          className="projects-card-image"
          fetchPriority="high"
          loading="eager"
          src={project.image}
        />
      </div>
    </article>
  )
}

function SecondaryProject({ categoryLabel, onOpen, project, projectCopy, projectsCopy }) {
  return (
    <article className="projects-secondary-card">
      <div className="projects-secondary-media">
        <ResponsiveImage alt={projectCopy.alt} className="projects-card-image" src={project.image} />
      </div>
      <div className="projects-secondary-copy">
        <p className="projects-card-category">{categoryLabel}</p>
        <h2>{projectCopy.title}</h2>
        <p className="projects-card-location">{projectCopy.location}</p>
        <p className="projects-card-summary">{projectCopy.summary}</p>
        <ProjectAction label={projectsCopy.labels.viewProject} onClick={onOpen} />
      </div>
    </article>
  )
}

function ProjectCard({ categoryLabel, onOpen, project, projectCopy, projectsCopy }) {
  return (
    <article className="projects-grid-card">
      <div className="projects-grid-media">
        <ResponsiveImage alt={projectCopy.alt} className="projects-card-image" src={project.image} />
      </div>
      <div className="projects-grid-copy">
        <p className="projects-card-category">{categoryLabel}</p>
        <h3>{projectCopy.title}</h3>
        <p>{projectCopy.location}</p>
        <ProjectAction label={projectsCopy.labels.viewProject} onClick={onOpen} />
      </div>
    </article>
  )
}

function ProjectsPage({ copy, language, languageLabels, onLanguageChange }) {
  const { common, nav, projects } = copy
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const closeButtonRef = useRef(null)
  const lastActiveElementRef = useRef(null)

  const categoryFilters = useMemo(
    () => projectCategoryOrder.map((category) => ({ id: category, label: projects.filters[category] })),
    [projects.filters]
  )

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'all'
        ? projectRegistry
        : projectRegistry.filter((project) => project.category === selectedCategory),
    [selectedCategory]
  )

  const [featuredProject, secondaryProject, ...gridProjects] = filteredProjects

  useEffect(() => {
    setSelectedProject(null)
  }, [language, selectedCategory])

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', closeOnEscape)
      lastActiveElementRef.current?.focus?.()
    }
  }, [selectedProject])

  const openProject = (project, event) => {
    lastActiveElementRef.current = event.currentTarget
    setSelectedProject(project)
  }

  const selectedProjectCopy = selectedProject ? getProjectCopy(projects, selectedProject) : null

  return (
    <>
      <main className="projects-page">
        <section className="projects-shell" aria-label={projects.pageAria}>
          <SiteNavbar
            className="projects-nav"
            common={common}
            language={language}
            languageLabels={languageLabels}
            nav={nav}
            navigationAria={projects.navigationAria}
            onLanguageChange={onLanguageChange}
          />

          <section className="projects-intro" aria-label={projects.introAria}>
            <h1>{projects.header.title}</h1>
            <p>{projects.header.statement}</p>
          </section>

          <div className="projects-toolbar">
            <div className="projects-filter-list" aria-label={projects.categoriesAria}>
              {categoryFilters.map((category) => (
                <button
                  aria-pressed={selectedCategory === category.id}
                  className={`projects-filter-tab${
                    selectedCategory === category.id ? ' projects-filter-active' : ''
                  }`}
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  type="button"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <section className="projects-showcase" aria-label={projects.showcaseAria}>
            {featuredProject ? (
              <FeaturedProject
                categoryLabel={projects.filters[featuredProject.category]}
                onOpen={(event) => openProject(featuredProject, event)}
                project={featuredProject}
                projectCopy={getProjectCopy(projects, featuredProject)}
                projectsCopy={projects}
              />
            ) : null}

            {secondaryProject ? (
              <SecondaryProject
                categoryLabel={projects.filters[secondaryProject.category]}
                onOpen={(event) => openProject(secondaryProject, event)}
                project={secondaryProject}
                projectCopy={getProjectCopy(projects, secondaryProject)}
                projectsCopy={projects}
              />
            ) : null}

            {gridProjects.length > 0 ? (
              <div className="projects-grid" aria-label={projects.gridAria}>
                {gridProjects.map((project) => (
                  <ProjectCard
                    categoryLabel={projects.filters[project.category]}
                    key={project.id}
                    onOpen={(event) => openProject(project, event)}
                    project={project}
                    projectCopy={getProjectCopy(projects, project)}
                    projectsCopy={projects}
                  />
                ))}
              </div>
            ) : null}
          </section>

          <section className="projects-cta" aria-label={projects.cta.sectionAria}>
            <FaEnvelope aria-hidden="true" focusable="false" />
            <div>
              <h2>{projects.cta.title}</h2>
              <p>{projects.cta.body}</p>
            </div>
            <NavLink to="/contact">
              <span>{projects.cta.button}</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          </section>
        </section>

        {selectedProject && selectedProjectCopy ? (
          <div className="project-drawer-overlay" onClick={() => setSelectedProject(null)} role="presentation">
            <aside
              aria-label={projects.dialogTitle}
              aria-modal="true"
              className="project-drawer"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
            >
              <button
                className="project-drawer-close"
                onClick={() => setSelectedProject(null)}
                ref={closeButtonRef}
                type="button"
              >
                {projects.close}
              </button>
              <p className="project-drawer-category">{projects.filters[selectedProject.category]}</p>
              <h2>{selectedProjectCopy.title}</h2>
              <ResponsiveImage
                alt={selectedProjectCopy.alt}
                className="project-drawer-image"
                src={selectedProject.image}
              />
              <p className="project-drawer-summary">{selectedProjectCopy.summary}</p>
              <p className="project-drawer-details">{selectedProjectCopy.details}</p>
              <p className="project-drawer-context">{projects.labels.conceptual}</p>
            </aside>
          </div>
        ) : null}
      </main>

      <SiteFooter copy={copy} />
    </>
  )
}

export default ProjectsPage
