import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'
import { studioContact } from './data/contact'

beforeEach(() => {
  window.localStorage.clear()
})

describe('SiteFooter', () => {
  it.each(['/', '/projects', '/services', '/studio', '/contact'])(
    'renders exactly one shared footer on %s',
    (path) => {
      window.history.pushState({}, '', path)
      render(<App />)

      expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
    }
  )

  it('renders the desktop information architecture without fake links', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const navigation = within(footer).getByRole('navigation', { name: /footer navigation/i })
    const contact = footer.querySelector('.site-footer__contact')

    expect(within(navigation).getAllByRole('link')).toHaveLength(5)
    expect(within(footer).getByRole('heading', { name: /^contact$/i })).toBeInTheDocument()
    expect(contact).toBeInTheDocument()
    expect(within(contact).getByText(studioContact.businessName)).toBeInTheDocument()
    expect(within(contact).getByRole('link', { name: studioContact.email })).toHaveAttribute(
      'href',
      `mailto:${studioContact.email}`
    )
    expect(
      within(contact)
        .getAllByRole('link', { name: studioContact.phoneDisplay })
        .find((link) => link.getAttribute('href') === studioContact.phoneHref)
    ).toBeInTheDocument()
    expect(
      within(contact)
        .getAllByRole('link', { name: studioContact.whatsappDisplay })
        .find((link) => link.getAttribute('href') === studioContact.whatsappHref)
    ).toBeInTheDocument()
    expect(within(contact).getByRole('link', { name: studioContact.location })).toHaveAttribute(
      'href',
      studioContact.mapsHref
    )
    expect(within(contact).getByText(studioContact.hours)).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /facebook/i })).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /instagram/i })).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /whatsapp/i })).toBeInTheDocument()
    expect(document.querySelector('a[href="#"]')).not.toBeInTheDocument()
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('keeps a single footer logo lockup and no duplicate legal block', () => {
    window.history.pushState({}, '', '/projects')
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getAllByRole('link', { name: /symetris home/i })).toHaveLength(1)
    expect(within(footer).getAllByText(/all rights reserved/i)).toHaveLength(1)
  })

  it('switches all footer copy to Spanish', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('heading', { name: /navegación/i })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: /contacto/i })).toBeInTheDocument()
    expect(within(footer).getByText(/arquitectura contemporánea con identidad/i)).toBeInTheDocument()
  })
})
