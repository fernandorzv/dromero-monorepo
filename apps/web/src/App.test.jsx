import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders hero heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /designing dreams, building futures with timeless elegance and innovation/i
      })
    ).toBeInTheDocument()
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
        name: /we provide best architectur category/i
      })
    ).toBeInTheDocument()
  })

  it('renders gate 4 social media row', () => {
    render(<App />)

    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  })

  it('opens projects page from nav project link', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: /project/i }))

    expect(
      screen.getByRole('heading', {
        name: /explore our projects: a journey of design and innovation/i
      })
    ).toBeInTheDocument()
  })

  it('filters by tab and opens details drawer', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: /project/i }))
    fireEvent.click(screen.getByRole('tab', { name: /commercial/i }))

    expect(screen.getByText(/office environments/i)).toBeInTheDocument()
    expect(screen.getByText(/retail and hospitality/i)).toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /view details/i })[0])

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /office environments/i })).toBeInTheDocument()
  })
})
