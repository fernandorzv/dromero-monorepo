import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/')
  window.localStorage.clear()
})

describe('local architectural imagery', () => {
  it('prioritizes the Home hero and lazy-loads supporting images', () => {
    render(<App />)

    const hero = screen.getByAltText(
      /contemporary double-height living room integrated with tropical vegetation/i
    )
    expect(hero).toHaveAttribute('loading', 'eager')
    expect(hero).toHaveAttribute('fetchpriority', 'high')
    expect(hero).toHaveAttribute('src', expect.stringContaining('home-hero'))

    const supportingImages = [
      screen.getByAltText(/exterior entrance of a contemporary residence/i),
      screen.getByAltText(/tropical interior courtyard with a central tree/i),
      screen.getByAltText(/floating wooden staircase beside an interior garden/i),
      screen.getByAltText(/residential terrace opening toward a tropical landscape/i),
      screen.getByAltText(/contemporary residence with a terrace, natural stone/i)
    ]

    supportingImages.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy')
      expect(image).not.toHaveAttribute('src', expect.stringMatching(/^https?:/))
    })
  })

  it('uses local project images and localized alt text', () => {
    render(<App />)

    fireEvent.click(within(screen.getByRole('navigation', { name: /primary/i })).getByRole('link', { name: /project/i }))

    const englishImage = screen.getByAltText(
      /contemporary residence in concrete and wood surrounded by tropical vegetation/i
    )
    expect(englishImage).toHaveAttribute('loading', 'lazy')
    expect(englishImage).toHaveAttribute(
      'src',
      expect.stringContaining('project-residential-single-family')
    )

    fireEvent.click(screen.getByRole('button', { name: /switch language to español/i }))

    expect(
      screen.getByAltText(/residencia contemporánea de concreto, madera y vegetación tropical/i)
    ).toBeInTheDocument()
    expect(document.querySelector('img[src^="http"]')).not.toBeInTheDocument()
  })
})
