import { fireEvent, render, screen, within } from '@testing-library/react'
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
  it('switches home page copy to Spanish', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(
      screen.getByRole('heading', {
        name: /diseñamos sueños y construimos futuros/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ver video/i })).toBeInTheDocument()
  })

  it('renders gate 2 overview heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /serenity haven: embracing nature in architecture/i
      })
    ).toBeInTheDocument()
  })

  it('renders gate 3 recommendation heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /we provide the best architecture categories/i
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