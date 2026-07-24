function LanguageToggle({ language, onChange, labels }) {
  const languageOrder = ['es', 'en']

  return (
    <div className="language-toggle" aria-label="Language selector" role="group">
      {languageOrder.map((code, index) => {
        const isActive = language === code

        return (
          <span className="language-toggle__item" key={code}>
            <button
              aria-current={isActive ? 'true' : undefined}
              aria-label={
                isActive
                  ? `Current language: ${labels[code].name}`
                  : `Switch language to ${labels[code].name}`
              }
              className={isActive ? 'language-toggle__button language-toggle__button--active' : 'language-toggle__button'}
              disabled={isActive}
              onClick={() => onChange(code)}
              type="button"
            >
              {labels[code].short}
            </button>
            {index < languageOrder.length - 1 ? <span className="language-toggle__separator" aria-hidden="true">|</span> : null}
          </span>
        )
      })}
    </div>
  )
}

export default LanguageToggle
