function LanguageToggle({ language, onChange, labels }) {
  const nextLanguage = language === 'en' ? 'es' : 'en'

  return (
    <button
      aria-label={`Switch language to ${labels[nextLanguage].name}`}
      className="language-toggle"
      onClick={() => onChange(nextLanguage)}
      type="button"
    >
      {labels[nextLanguage].short}
    </button>
  )
}

export default LanguageToggle