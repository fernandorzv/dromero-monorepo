import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/contact')
  window.localStorage.clear()
})

describe('Contact page', () => {
  it('renders the complete Contact structure with local images and an honest form state', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /^contact$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tell us about your project/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /where are we/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^phone$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled()

    const hero = screen.getByAltText(/contemporary stone residence illuminated at dusk/i)
    expect(hero).toHaveAttribute('loading', 'eager')
    expect(hero).toHaveAttribute('fetchpriority', 'high')
    expect(
      document.querySelectorAll(
        '.contact-hero__image, .contact-info__media img, .contact-cta__image'
      )
    ).toHaveLength(3)
    expect(document.querySelector('.contact-page img[src^="http"]')).not.toBeInTheDocument()
  })

  it('switches Contact content to Spanish and focuses the form from the CTA', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^contacto$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /cuéntanos sobre tu proyecto/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /^contactar$/i }))

    expect(screen.getByRole('heading', { name: /cuéntanos sobre tu proyecto/i })).toHaveFocus()
  })

  it('marks Contact active in the shared navigation', () => {
    render(<App />)

    const primaryNavigation = screen.getByRole('navigation', { name: /primary/i })

    expect(within(primaryNavigation).getByRole('link', { name: /^contact$/i })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })
})
