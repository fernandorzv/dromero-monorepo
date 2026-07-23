import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import translations from './i18n'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const routerBaseName = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')
const languageLabels = {
  en: 'English',
  es: 'Español'
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return window.localStorage.getItem('dromero-language') === 'es' ? 'es' : 'en'
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const copy = useMemo(() => translations[language], [language])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('dromero-language', language)
  }, [language])

  return (
    <BrowserRouter basename={routerBaseName}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              copy={copy}
              language={language}
              languageLabels={languageLabels}
              onLanguageChange={setLanguage}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsPage
              copy={copy}
              language={language}
              languageLabels={languageLabels}
              onLanguageChange={setLanguage}
            />
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App