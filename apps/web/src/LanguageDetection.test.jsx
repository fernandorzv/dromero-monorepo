import { afterEach, describe, expect, it, vi } from 'vitest'
import { getInitialLanguage } from './language'

const browserWindow = globalThis.window
const originalLanguage = Object.getOwnPropertyDescriptor(window.navigator, 'language')
const originalLanguages = Object.getOwnPropertyDescriptor(window.navigator, 'languages')

afterEach(() => {
  vi.stubGlobal('window', browserWindow)

  if (originalLanguage) {
    Object.defineProperty(window.navigator, 'language', originalLanguage)
  }
  if (originalLanguages) {
    Object.defineProperty(window.navigator, 'languages', originalLanguages)
  }

  window.localStorage.clear()
})

describe('initial language detection fallbacks', () => {
  it('defaults to English outside a browser', () => {
    vi.stubGlobal('window', undefined)

    expect(getInitialLanguage()).toBe('en')
  })

  it('uses navigator.language when navigator.languages is empty', () => {
    Object.defineProperty(window.navigator, 'languages', {
      configurable: true,
      value: []
    })
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: 'es-MX'
    })

    expect(getInitialLanguage()).toBe('es')
  })
})
