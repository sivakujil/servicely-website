import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import servicelyLogo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'For Customers', path: '/for-customers' },
    { name: 'For Providers', path: '/for-providers' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    if (path.includes('#')) return false
    return location.pathname === path
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={servicelyLogo} alt="Servicely" className="logo-img" />
          <div className="logo-text">
            <h1>Servicely</h1>
            <p>Simple. Fast. Reliable.</p>
          </div>
        </Link>

        <nav className="navbar-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="navbar-cta">
          Book a Service →
        </Link>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="navbar-logo">
            <img src={servicelyLogo} alt="Servicely" className="logo-img" />
            <div className="logo-text">
              <h1>Servicely</h1>
            </div>
          </div>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Book a Service →
          </Link>
        </nav>
      </div>

      {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  )
}

export default Navbar