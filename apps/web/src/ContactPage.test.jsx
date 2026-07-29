import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'
import { studioContact } from './data/contact'

beforeEach(() => {
  window.history.pushState({}, '', '/contact')
  window.localStorage.clear()
})

describe('Contact page', () => {
  it('renders the complete Contact structure with local images and an honest form state', () => {
    render(<App />)
    const contactInfoSection = document.querySelector('.contact-info')

    expect(screen.getByRole('heading', { level: 1, name: /^contact$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tell us about your project/i })).toBeInTheDocument()
    expect(document.getElementById('contact-form')).toHaveAttribute('aria-labelledby', 'contact-form-title')
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /where are we/i })).toBeInTheDocument()
    expect(within(contactInfoSection).getByRole('link', { name: studioContact.email })).toHaveAttribute(
      'href',
      `mailto:${studioContact.email}`
    )
    expect(within(contactInfoSection).getByRole('link', { name: studioContact.phoneDisplay })).toHaveAttribute(
      'href',
      studioContact.phoneHref
    )
    expect(within(contactInfoSection).getByText(studioContact.location)).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^phone$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /project type/i })).toHaveDisplayValue(
      /select a project type/i
    )
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled()
    expect(screen.getByText(/located in cuernavaca, morelos, mexico/i)).toBeInTheDocument()

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

  it('switches Contact content to Spanish and points the CTA at the anchored form', () => {
    render(<App />)
    const contactInfoSection = document.querySelector('.contact-info')

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^contacto$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /cuéntanos sobre tu proyecto/i })).toBeInTheDocument()
    expect(document.getElementById('contact-form')).toBeInTheDocument()
    expect(within(contactInfoSection).getByText(studioContact.location)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^contactar$/i })).toHaveAttribute(
      'href',
      '/contact#contact-form'
    )
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
