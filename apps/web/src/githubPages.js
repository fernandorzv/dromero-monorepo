const githubPagesRedirectKey = 'dromero-github-pages-redirect'

export function captureGithubPagesRedirect(pathname, search, hash, baseName) {
  if (!baseName || baseName === '/') {
    return null
  }

  const normalizedBaseName = baseName.endsWith('/') ? baseName : `${baseName}/`

  if (!pathname.startsWith(normalizedBaseName)) {
    return null
  }

  const redirectPath = `${pathname.replace(normalizedBaseName, '/') || '/'}${search}${hash}`
  window.sessionStorage.setItem(githubPagesRedirectKey, redirectPath)
  return redirectPath
}

export function restoreGithubPagesRoute(baseName) {
  if (!baseName || baseName === '/') {
    window.sessionStorage.removeItem(githubPagesRedirectKey)
    return null
  }

  const redirectPath = window.sessionStorage.getItem(githubPagesRedirectKey)

  if (!redirectPath) {
    return null
  }

  window.sessionStorage.removeItem(githubPagesRedirectKey)
  const restoredPath = `${baseName}${redirectPath}`

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== restoredPath) {
    window.history.replaceState({}, '', restoredPath)
  }

  return restoredPath
}
