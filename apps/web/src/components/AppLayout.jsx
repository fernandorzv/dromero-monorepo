import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/studio', label: 'Studio' },
  { to: '/contact', label: 'Contact' }
]

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="brand-kicker">DRomero Architecture</p>
          <h1 className="brand-title">Modernization Demo Foundation</h1>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                  end={item.end}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>Phase 1 complete: clean structure and Docker baseline for next OpenShift step.</p>
      </footer>
    </div>
  )
}

export default AppLayout
