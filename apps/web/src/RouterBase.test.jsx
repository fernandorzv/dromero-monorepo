import { describe, expect, it } from 'vitest'
import { getRouterBaseName } from './router'

describe('router base path', () => {
  it('uses no basename for local and Docker builds', () => {
    expect(getRouterBaseName('/')).toBeUndefined()
  })

  it('normalizes the GitHub Pages repository base path', () => {
    expect(getRouterBaseName('/dromero-monorepo/')).toBe('/dromero-monorepo')
  })
})
