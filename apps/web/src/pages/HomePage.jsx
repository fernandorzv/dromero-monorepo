const highlights = [
  {
    title: 'Fresh Frontend Architecture',
    detail: 'New routes and module boundaries to avoid carrying legacy UX technical debt.'
  },
  {
    title: 'Container-First Delivery',
    detail: 'Deterministic Docker build for dev and demo environments.'
  },
  {
    title: 'OpenShift-Ready Next Step',
    detail: 'Current structure is prepared for deployment manifests and CI/CD in the next phase.'
  }
]

function HomePage() {
  return (
    <section className="page-grid">
      <article className="surface surface-hero">
        <p className="eyebrow">Phase 1</p>
        <h2>Clean-slate web platform for architecture modernization.</h2>
        <p>
          This shell intentionally focuses on engineering structure first so future design and
          brand direction can iterate safely.
        </p>
      </article>

      <article className="surface">
        <h3>Implementation Highlights</h3>
        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item.title}>
              <p className="feature-title">{item.title}</p>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default HomePage
