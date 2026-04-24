import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="surface">
      <h2>Route not found</h2>
      <p>The requested page is outside the scaffolded routes.</p>
      <Link className="inline-link" to="/">
        Return to home
      </Link>
    </section>
  )
}

export default NotFoundPage
