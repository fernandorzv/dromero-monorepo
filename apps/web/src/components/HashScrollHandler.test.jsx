import { render, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import HashScrollHandler from './HashScrollHandler'

const originalMatchMedia = window.matchMedia
const originalScrollTo = window.scrollTo
const originalRequestAnimationFrame = window.requestAnimationFrame
const originalCancelAnimationFrame = window.cancelAnimationFrame
const originalScrollIntoView = HTMLElement.prototype.scrollIntoView

beforeEach(() => {
  window.scrollTo = vi.fn()
  window.requestAnimationFrame = vi.fn((callback) => {
    callback()
    return 1
  })
  window.cancelAnimationFrame = vi.fn()
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

afterEach(() => {
  window.matchMedia = originalMatchMedia
  window.scrollTo = originalScrollTo
  window.requestAnimationFrame = originalRequestAnimationFrame
  window.cancelAnimationFrame = originalCancelAnimationFrame
  HTMLElement.prototype.scrollIntoView = originalScrollIntoView
  vi.restoreAllMocks()
})

describe('HashScrollHandler', () => {
  it('scrolls to the hash target', async () => {
    const scrollIntoView = vi.fn()
    HTMLElement.prototype.scrollIntoView = scrollIntoView

    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        initialEntries={['/contact#contact-form']}
      >
        <Routes>
          <Route
            path="/contact"
            element={
              <>
                <HashScrollHandler />
                <section id="contact-form">
                  <h2>Contact form</h2>
                </section>
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => expect(window.requestAnimationFrame).toHaveBeenCalled())
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })
    expect(document.getElementById('contact-form')).toBeInTheDocument()
  })

  it('scrolls to the top without a hash and respects reduced motion', async () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))

    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        initialEntries={['/contact']}
      >
        <Routes>
          <Route
            path="/contact"
            element={
              <>
                <HashScrollHandler />
                <section id="contact-form">
                  <h2>Contact form</h2>
                </section>
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() =>
      expect(window.scrollTo).toHaveBeenCalledWith({ behavior: 'auto', left: 0, top: 0 })
    )
  })
})
