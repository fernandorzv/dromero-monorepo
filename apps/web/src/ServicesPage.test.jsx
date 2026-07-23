import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/services')
  window.localStorage.clear()
})

describe('Services page', () => {
  it('renders the complete localized Services structure with local images', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /^services$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our approach/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our process/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /service areas/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(11)

    const hero = screen.getByAltText(/stone and wood residence surrounding a landscaped courtyard/i)
    expect(hero).toHaveAttribute('loading', 'eager')
    expect(hero).toHaveAttribute('fetchpriority', 'high')
    expect(document.querySelector('img[src^="http"]')).not.toBeInTheDocument()
  })

  it('switches to Spanish and routes the contact CTA', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^servicios$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /nuestro proceso/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link', { name: /^contactar$/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^contacto$/i })).toBeInTheDocument()
  })

  it('marks Services active in the shared navigation', () => {
    render(<App />)

    const primaryNavigation = screen.getByRole('navigation', { name: /primary/i })

    expect(within(primaryNavigation).getByRole('link', { name: /^services$/i })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })
})
