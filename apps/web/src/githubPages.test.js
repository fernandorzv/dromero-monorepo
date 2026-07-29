import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { captureGithubPagesRedirect, restoreGithubPagesRoute } from './githubPages'

let replaceStateSpy

beforeEach(() => {
  window.history.pushState({}, '', '/dromero-monorepo/')
  window.sessionStorage.clear()
  replaceStateSpy = vi.spyOn(window.history, 'replaceState').mockImplementation(() => {})
})

afterEach(() => {
  replaceStateSpy?.mockRestore()
  window.sessionStorage.clear()
  vi.restoreAllMocks()
})

describe('GitHub Pages route restoration', () => {
  it('stores the missing route and restores it on app start', () => {
    const redirectPath = captureGithubPagesRedirect(
      '/dromero-monorepo/contact',
      '?ref=footer',
      '#contact-form',
      '/dromero-monorepo'
    )

    expect(redirectPath).toBe('/contact?ref=footer#contact-form')
    expect(window.sessionStorage.getItem('dromero-github-pages-redirect')).toBe(
      '/contact?ref=footer#contact-form'
    )

    const restoredPath = restoreGithubPagesRoute('/dromero-monorepo')

    expect(restoredPath).toBe('/dromero-monorepo/contact?ref=footer#contact-form')
    expect(window.history.replaceState).toHaveBeenCalledWith(
      {},
      '',
      '/dromero-monorepo/contact?ref=footer#contact-form'
    )
    expect(window.sessionStorage.getItem('dromero-github-pages-redirect')).toBeNull()
  })
})
