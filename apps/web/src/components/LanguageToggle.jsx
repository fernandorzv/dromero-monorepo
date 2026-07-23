function LanguageToggle({ language, onChange, labels }) {
  const nextLanguage = language === 'en' ? 'es' : 'en'

  return (
    <button
      aria-label={`Switch language to ${labels[nextLanguage]}`}
      className="language-toggle"
      onClick={() => onChange(nextLanguage)}
      type="button"
    >
      {labels[nextLanguage]}
    </button>
  )
}

export default LanguageToggle