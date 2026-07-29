import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import App from './App'

const originalLanguages = Object.getOwnPropertyDescriptor(window.navigator, 'languages')

function setBrowserLanguages(languages) {
  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    value: languages
  })
}

afterAll(() => {
  if (originalLanguages) {
    Object.defineProperty(window.navigator, 'languages', originalLanguages)
  }
})

beforeEach(() => {
  window.history.pushState({}, '', '/')
  window.localStorage.clear()
  setBrowserLanguages(['en-US'])
})

describe('App', () => {
  it('renders hero heading in English by default', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /designing dreams, building futures with timeless elegance and innovation/i
      })
    ).toBeInTheDocument()
  })


  it('detects Spanish from browser language when no preference is saved', () => {
    setBrowserLanguages(['es-MX', 'en-US'])

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /diseñamos sueños y construimos futuros/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /switch language to english/i })).toHaveTextContent('EN')
  })

  it('uses saved language before browser language', () => {
    setBrowserLanguages(['es-MX', 'en-US'])
    window.localStorage.setItem('dromero-language', 'en')

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /designing dreams, building futures with timeless elegance and innovation/i
      })
    ).toBeInTheDocument()
  })

  it('opens, closes, and restores the mobile navigation accessibly', async () => {
    const { unmount } = render(<App />)

    const openButton = screen.getByRole('button', { name: /open navigation menu/i })

    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(openButton)

    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    expect(document.body.style.overflow).toBe('hidden')
    await waitFor(() => expect(screen.getByRole('button', { name: /close navigation menu/i })).toHaveFocus())
    expect(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /services/i })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(openButton).toHaveFocus()
    expect(document.body.style.overflow).toBe('')

    fireEvent.click(openButton)
    fireEvent.click(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /services/i }))

    expect(screen.getByRole('heading', { level: 1, name: /^services$/i })).toBeInTheDocument()
    const routedOpenButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(routedOpenButton).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')

    fireEvent.click(routedOpenButton)
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('')
  })
  it('switches home page copy to Spanish', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(
      screen.getByRole('heading', {
        name: /diseñamos sueños y construimos futuros/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explorar proyecto/i })).toBeInTheDocument()
  })

  it('renders gate 2 overview heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /serenity haven: embracing nature in architecture/i
      })
    ).toBeInTheDocument()
  })

  it('renders the stable Home featured-project structure', () => {
    render(<App />)

    const section = document.querySelector('.home-featured-project')
    const main = section?.querySelector('.home-featured-project__main')
    const primary = section?.querySelector('.home-featured-project__primary-media')
    const story = section?.querySelector('.home-featured-project__story')
    const metrics = section?.querySelector('.home-featured-project__metrics')
    const secondary = section?.querySelector('.home-featured-project__secondary-media')

    expect(section).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(primary).toBeInTheDocument()
    expect(story).toBeInTheDocument()
    expect(metrics).toBeInTheDocument()
    expect(secondary).toBeInTheDocument()
    expect(main?.children).toHaveLength(3)
  })

  it('keeps locale selector controls in Navbar', () => {
    render(<App />)

    expect(screen.getByRole('group', { name: /language selector/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /switch language to español/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /current language: english/i })).toBeInTheDocument()
  })

  it('uses the shared navbar geometry markup across routes', () => {
    const routes = [
      { path: '/', shell: '.page-hero', mode: 'site-navbar--overlay' },
      { path: '/services', shell: '.page-hero', mode: 'site-navbar--overlay' },
      { path: '/projects', shell: '.projects-shell', mode: 'site-navbar--dark' },
      { path: '/studio', shell: '.page-hero', mode: 'site-navbar--overlay' },
      { path: '/contact', shell: '.page-hero', mode: 'site-navbar--overlay' }
    ]

    routes.forEach(({ path, shell, mode }) => {
      window.history.pushState({}, '', path)
      const { unmount } = render(<App />)
      const navbar = document.querySelector('.site-navbar')

      expect(navbar).toHaveClass(mode)
      expect(navbar?.querySelectorAll('.language-toggle')).toHaveLength(1)
      expect(navbar?.querySelector('.site-navbar__actions')).toBeInTheDocument()
      expect(document.querySelector(shell)).toBeInTheDocument()

      unmount()
    })
  })

  it('renders gate 3 recommendation heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /explore our architecture categories/i
      })
    ).toBeInTheDocument()
  })


  it('opens projects page from nav project link', () => {
    render(<App />)

    fireEvent.click(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /project/i }))

    expect(
      screen.getByRole('heading', {
        name: /^projects$/i
      })
    ).toBeInTheDocument()
  })

  it('switches projects page copy to Spanish', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))
    fireEvent.click(within(screen.getByRole('navigation', { name: /principal/i })).getByRole('link', { name: /proyectos/i }))

    expect(
      screen.getByRole('heading', {
        name: /^proyectos$/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /comercial/i })).toBeInTheDocument()
  })

  it('renders projects content inside the dark projects shell', () => {
    render(<App />)

    fireEvent.click(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /project/i }))

    expect(document.querySelector('.projects-shell')).toBeInTheDocument()
  })

  it('filters by tab and opens details drawer', () => {
    render(<App />)

    fireEvent.click(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /project/i }))
    fireEvent.click(screen.getByRole('button', { name: /^commercial$/i }))

    expect(screen.getByText(/office environment/i)).toBeInTheDocument()
    expect(screen.getByText(/retail and hospitality/i)).toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /view project/i })[0])

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(within(screen.getByRole('dialog')).getByRole('heading', { name: /office environment/i })).toBeInTheDocument()
  })
})
