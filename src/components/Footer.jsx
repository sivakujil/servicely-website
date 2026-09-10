import { Link } from 'react-router-dom'
import servicelyLogo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <>
      {/* App Download Section */}
      <section className="app-download">
        <div className="app-container">
          <div className="app-left">
            <span className="app-tag">SERVICELY PRO APP</span>
            <h2>Manage your services<br />anytime, anywhere.</h2>
            <p>Stay connected with your customers, manage jobs, track payments and grow your service business with Servicely Pro.</p>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <span className="app-btn-icon">▶</span>
                <div>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href="#" className="app-btn">
                <span className="app-btn-icon"></span>
                <div>
                  <small>DOWNLOAD ON THE</small>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>
          </div>
          <div className="app-right">
            <div className="app-mockup">
              <div className="mockup-icon">📱</div>
              <h3>Servicely Pro</h3>
              <p>Your services in your hand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="navbar-logo">
              <img src={servicelyLogo} alt="Servicely" className="logo-img" />
              <div className="logo-text">
                <h1>Servicely</h1>
                <p>Simple. Fast. Reliable.</p>
              </div>
            </div>
            <p className="footer-about">Your professional partner for managing services, jobs and customers.</p>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/for-customers">For Customers</Link></li>
              <li><Link to="/for-providers">For Providers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#" className="social-btn">f</a>
              <a href="#" className="social-btn">📷</a>
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">🐦</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-container">
            <p className="footer-copyright">© 2026 Servicely. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
