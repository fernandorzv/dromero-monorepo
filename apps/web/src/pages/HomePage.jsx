import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import symetrisHomeLogo from '../images/RA-LogoB.png'

function HomePage() {
  return (
    <main className="gate1-page">
      <section className="hero-shell media-black" aria-label="Hero section">
        <header className="hero-nav" aria-label="Hero navigation">
          <NavLink className="brand" to="/" aria-label="Symetris home">
            <img className="brand-logo" src={symetrisHomeLogo} alt="Symetris home" />
          </NavLink>

          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>Service</li>
              <li>
                <NavLink className="nav-link" to="/projects">
                  Project
                </NavLink>
              </li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        <div className="hero-content-grid">
          <section className="hero-copy">
            <h1>Designing Dreams, Building Futures with Timeless Elegance and Innovation</h1>
            <button className="play-cta" type="button">
              Play Video
            </button>
          </section>
        </div>
      </section>

      <section className="overview-section" aria-label="Overview section">
        <article className="overview-left">
          <div className="thumb-rail" aria-label="Project thumbnails">
            <div className="thumb-item media-black" />
            <div className="thumb-item media-black" />
            <div className="thumb-item media-black" />
            <button className="thumb-arrow" type="button" aria-label="Previous thumbnail">
              ‹
            </button>
            <button className="thumb-arrow" type="button" aria-label="Next thumbnail">
              ›
            </button>
          </div>

          <h2>Serenity Haven: Embracing Nature in Architecture</h2>
          <p>
            In our eco-nature-themed architecture project, we integrate natural elements such as
            wood, stone, and natural lighting to create a soothing and refreshing environment.
          </p>
        </article>

        <article className="overview-right">
          <div className="overview-preview media-black" aria-hidden="true" />

          <ul className="kpi-list" aria-label="Project metrics">
            <li>
              <strong>150+</strong>
              <span>Master Design</span>
            </li>
            <li>
              <strong>1200+</strong>
              <span>Happy Client</span>
            </li>
            <li>
              <strong>5000+</strong>
              <span>Project Finished</span>
            </li>
          </ul>

          <div className="review-row">
            <button className="rating-pill" type="button">
              ★ 4.8
            </button>
            <button className="review-button" type="button">
              See Reviews
            </button>
          </div>
        </article>
      </section>

      <section className="recommend-section" aria-label="Recommendation section">
        <article className="recommend-media media-black" aria-label="Recommendation media card">
          <p className="media-caption">Explore architectural collections for forward-thinking brands.</p>
          <p className="media-index">03 - Iconic Architectur</p>
        </article>

        <article className="recommend-panel">
          <p className="recommend-eyebrow">Recommendation</p>
          <h2>We provide best Architectur category</h2>
          <p className="recommend-subcopy">
            Welcome to our curated selection of architectural wonders and inspirations.
          </p>

          <ol className="category-list" aria-label="Recommendation categories">
            <li>
              <span className="category-number">01</span>
              <span>Smart House</span>
            </li>
            <li>
              <span className="category-number">02</span>
              <span>Real Estate</span>
            </li>
            <li>
              <span className="category-number">03</span>
              <span>Iconic Architectur</span>
              <span className="category-arrow" aria-hidden="true">
                ↗
              </span>
            </li>
          </ol>
        </article>
      </section>

      <section className="social-strip" aria-label="Social media section">
        <p className="social-title">Follow Us</p>

        <ul className="social-list" aria-label="Social media links">
          <li>
            <a className="social-link" href="#" aria-label="Instagram">
              <FaInstagram aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="Facebook">
              <FaFacebookF aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="X">
              <FaXTwitter aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" focusable="false" />
            </a>
          </li>
          <li>
            <a className="social-link" href="#" aria-label="YouTube">
              <FaYoutube aria-hidden="true" focusable="false" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default HomePage
