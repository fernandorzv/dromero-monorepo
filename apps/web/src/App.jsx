import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import translations from './i18n'
import { getInitialLanguage } from './language'
import { routerBaseName } from './router'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const languageLabels = {
  en: { short: 'EN', name: 'English' },
  es: { short: 'ES', name: 'Español' }
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