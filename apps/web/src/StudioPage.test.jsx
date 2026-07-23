import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/studio')
  window.localStorage.clear()
})

describe('Studio and Process page', () => {
  it('renders every approved Studio section with local architectural assets', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /studio & process/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our story/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /leadership and team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how we work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /working principles/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /capabilities and collaborators/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tools and methods/i })).toBeInTheDocument()

    expect(screen.getAllByTestId('studio-process-phase')).toHaveLength(4)
    expect(screen.queryByText(/Daniel Romero|Mariana López|Jorge Herrera/i)).not.toBeInTheDocument()

    const hero = screen.getByAltText(/stone studio entrance illuminated at dusk/i)
    expect(hero).toHaveAttribute('loading', 'eager')
    expect(hero).toHaveAttribute('fetchpriority', 'high')
    expect(
      document.querySelectorAll(
        '.studio-hero__image, .studio-story__media img, .studio-team__portrait img, .studio-process__media img, .studio-statement__image'
      )
    ).toHaveLength(8)
    expect(document.querySelector('.studio-page img[src^="http"]')).not.toBeInTheDocument()
  })

  it('switches the page to Spanish and routes the CTA to Contact', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /estudio y proceso/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /cómo trabajamos/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link', { name: /^contactar$/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^contacto$/i })).toBeInTheDocument()
  })

  it('marks Studio active in the shared navigation', () => {
    render(<App />)

    const primaryNavigation = screen.getByRole('navigation', { name: /primary/i })

    expect(within(primaryNavigation).getByRole('link', { name: /^studio$/i })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })
})
