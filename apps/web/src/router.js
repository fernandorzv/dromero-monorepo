export function getRouterBaseName(baseUrl) {
  return baseUrl === '/' ? undefined : baseUrl.replace(/\/$/, '')
}

export const routerBaseName = getRouterBaseName(import.meta.env.BASE_URL)
