export function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLanguage = window.localStorage.getItem('dromero-language')
  if (savedLanguage === 'en' || savedLanguage === 'es') {
    return savedLanguage
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return browserLanguages.some((browserLanguage) => browserLanguage?.toLowerCase().startsWith('es'))
    ? 'es'
    : 'en'
}
