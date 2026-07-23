import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

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

    expect(within(navigation).getAllByRole('link')).toHaveLength(5)
    expect(within(footer).getByRole('heading', { name: /^services$/i })).toBeInTheDocument()
    expect(within(footer).getAllByRole('link', { name: /architectural design/i })).toHaveLength(1)
    expect(within(footer).getByText(/contact details will appear here/i)).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /facebook/i })).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /instagram/i })).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /whatsapp/i })).toBeInTheDocument()
    expect(document.querySelector('a[href="#"]')).not.toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /we design spaces that inspire/i })).toBeInTheDocument()
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('switches all footer copy to Spanish', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('heading', { name: /navegación/i })).toBeInTheDocument()
    expect(within(footer).getByText(/arquitectura contemporánea con identidad/i)).toBeInTheDocument()
    expect(within(footer).getByRole('img', { name: /diseñamos espacios que inspiran/i })).toBeInTheDocument()
  })
})
