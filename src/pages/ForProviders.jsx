import { Link } from 'react-router-dom'
import './ForProviders.css'

function ForProviders() {
  const perks = [
    { icon: '💼', title: 'Grow Your Business', desc: 'Get more customers and expand your service reach.' },
    { icon: '📅', title: 'Flexible Schedule', desc: 'Work on your own time. Accept jobs that suit you.' },
    { icon: '💰', title: 'Earn More', desc: 'Set your own prices and increase your income.' },
    { icon: '📱', title: 'Easy App', desc: 'Manage bookings, payments and reviews from your phone.' },
    { icon: '🎯', title: 'Direct Customers', desc: 'Get connected directly with customers in your area.' },
    { icon: '🏆', title: 'Build Reputation', desc: 'Earn ratings and reviews to grow your credibility.' },
  ]

  const steps = [
    { no: '01', title: 'Sign Up', desc: 'Register as a provider in just a few minutes.' },
    { no: '02', title: 'Get Verified', desc: 'Complete verification to start receiving jobs.' },
    { no: '03', title: 'Accept Jobs', desc: 'Browse and accept jobs that match your skills.' },
    { no: '04', title: 'Get Paid', desc: 'Complete jobs and receive secure payments.' },
  ]

  return (
    <div className="providers-page">
      {/* HERO */}
      <section className="prov-hero">
        <div className="container">
          <div className="prov-hero-grid">
            <div className="prov-hero-left">
              <span className="hero-badge">💼 FOR PROVIDERS</span>
              <h1>Grow Your Business.<br /><span className="highlight">Work Your Way.</span></h1>
              <p>Join thousands of service professionals earning more with Servicely. Get direct customer requests, flexible schedule, and secure payments.</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Become a Provider →</Link>
                <Link to="/" className="btn-secondary">Learn More</Link>
              </div>
              <div className="prov-trust">
                <div className="trust-item">✓ Free to Join</div>
                <div className="trust-item">✓ No Hidden Fees</div>
                <div className="trust-item">✓ Weekly Payouts</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="perks">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY JOIN US</span>
            <h2>Perks of Being a Provider</h2>
            <p>Everything you need to grow your service business.</p>
          </div>
          <div className="perks-grid">
            {perks.map((p) => (
              <div className="perk-card" key={p.title}>
                <div className="perk-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="prov-steps">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">GET STARTED</span>
            <h2>How to Join Servicely</h2>
            <p>Simple 4 steps to start earning with us.</p>
          </div>
          <div className="steps-flow">
            {steps.map((s, i) => (
              <div className="flow-item" key={s.no}>
                <div className="flow-circle">{s.no}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="flow-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* VIDEO SECTION */}
<section className="prov-video-section">
  <div className="container">
    <div className="prov-video-grid">
      <div className="prov-video-left">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="How to Earn as a Provider on Servicely"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="prov-video-badge">
          <span>▶</span> Provider Success Guide
        </div>
      </div>

      <div className="prov-video-right">
        <span className="section-tag">🎥 SUCCESS STORY</span>
        <h2>How Providers Earn<br /><span className="highlight">₹40,000+ Monthly</span></h2>
        <p>Watch how our top providers grew their business with Servicely. Learn the tips, tricks, and strategies that helped them succeed.</p>

        <ul className="prov-video-features">
          <li>
            <span className="feat-icon">💰</span>
            <div>
              <strong>Real Earnings Breakdown</strong>
              <small>See actual provider income data</small>
            </div>
          </li>
          <li>
            <span className="feat-icon">📈</span>
            <div>
              <strong>Growth Strategies</strong>
              <small>Learn how to get more jobs</small>
            </div>
          </li>
          <li>
            <span className="feat-icon">⭐</span>
            <div>
              <strong>Rating Tips</strong>
              <small>Build 5-star reputation quickly</small>
            </div>
          </li>
          <li>
            <span className="feat-icon">🚀</span>
            <div>
              <strong>Scale Your Business</strong>
              <small>Turn side income into full-time</small>
            </div>
          </li>
        </ul>

        <Link to="/contact" className="btn-primary">Start Earning Today →</Link>
      </div>
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="prov-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>5,000+</strong>
              <small>Active Providers</small>
            </div>
            <div className="stat-item">
              <strong>₹35K</strong>
              <small>Avg Monthly Earning</small>
            </div>
            <div className="stat-item">
              <strong>95%</strong>
              <small>Provider Satisfaction</small>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <small>Support Available</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="prov-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Earning?</h2>
            <p>Join Servicely today and grow your service business.</p>
            <Link to="/contact" className="btn-primary large">Sign Up as Provider →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForProviders