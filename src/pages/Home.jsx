import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const services = [
    { icon: '🔧', name: 'Plumbing', color: '#3b82f6' },
    { icon: '⚡', name: 'Electrical', color: '#f59e0b' },
    { icon: '❄️', name: 'AC Repair', color: '#06b6d4' },
    { icon: '🧹', name: 'Cleaning', color: '#10b981' },
    { icon: '🎨', name: 'Painting', color: '#8b5cf6' },
    { icon: '🔨', name: 'Carpenter', color: '#ef4444' },
    { icon: '📱', name: 'Electronics', color: '#ec4899' },
    { icon: '🚗', name: 'Vehicle', color: '#14b8a6' },
  ]

  const steps = [
    {
      no: '01',
      icon: '🔍',
      title: 'Choose a Service',
      desc: 'Find the service you need from our categories.',
    },
    {
      no: '02',
      icon: '📋',
      title: 'Create a Request',
      desc: 'Tell us what you need and submit your request.',
    },
    {
      no: '03',
      icon: '👤',
      title: 'Find a Provider',
      desc: 'Connect with a suitable professional near you.',
    },
    {
      no: '04',
      icon: '🛠️',
      title: 'Get Your Service',
      desc: 'Let the provider complete your requested service.',
    },
    {
      no: '05',
      icon: '💳',
      title: 'Pay & Review',
      desc: 'Complete payment and share your experience.',
    },
  ]

  return (
    <div className="home">

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-badge">
              <span className="badge-dot"></span>
              Trusted by 12,000+ Customers
            </span>

            <h1 className="hero-title">
              Your Service.
              <br />
              Just One Click{' '}
              <span className="highlight">Away.</span>
            </h1>

            <p className="hero-desc">
              Find trusted professionals and get your work done easily.
              Book in minutes, track in real-time, and pay securely.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="btn-primary">
                Book a Service →
              </Link>

              <Link to="/for-providers" className="btn-secondary">
                Become a Provider
              </Link>

            </div>

            <div className="hero-features">

              <div className="feature">
                <span>✓</span>
                Trusted Professionals
              </div>

              <div className="feature">
                <span>⚡</span>
                Quick Service
              </div>

              <div className="feature">
                <span>⭐</span>
                Rated Providers
              </div>

            </div>

            {/* HERO STATS */}

            <div className="hero-stats-bar">

              <div className="hero-stats-item">
                <strong>12K+</strong>
                <small>Happy Customers</small>
              </div>

              <div className="hero-stats-divider"></div>

              <div className="hero-stats-item">
                <strong>850+</strong>
                <small>Verified Providers</small>
              </div>

              <div className="hero-stats-divider"></div>

              <div className="hero-stats-item">
                <strong>4.9★</strong>
                <small>Average Rating</small>
              </div>

            </div>

          </div>

        </div>

        {/* TRUST SECTION */}

        <div className="trust-section">

          <div className="container">

            <p className="trust-title">
              TRUSTED BY LEADING PLATFORMS
            </p>

            <div className="trust-logos">

              <div className="trust-logo">
                ⭐ Google Reviews <strong>4.9</strong>
              </div>

              <div className="trust-logo">
                🏆 Trustpilot <strong>Excellent</strong>
              </div>

              <div className="trust-logo">
                🎖️ ISO Certified <strong>Verified</strong>
              </div>

              <div className="trust-logo">
                🔒 Secure Payment <strong>SSL</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EMERGENCY SECTION
          ===================================================== */}

      <section className="emergency">

        <div className="container">

          <div className="emergency-card">

            <div className="emergency-left">

              <div className="emergency-icon-wrap">
                <div className="emergency-icon">
                  🚨
                </div>
              </div>

              <div>

                <span className="section-tag">
                  SERVICELY FEATURE
                </span>

                <h2>
                  On-Demand & Emergency Services
                </h2>

                <p>
                  Need help right now? Servicely allows you to request
                  services whenever you need them, including urgent and
                  emergency requests.
                </p>

                <div className="emergency-features">

                  <span>
                    ⚡ 30 min response
                  </span>

                  <span>
                    🕐 24/7 available
                  </span>

                  <span>
                    ✅ Verified experts
                  </span>

                </div>

              </div>

            </div>

            <Link to="/contact" className="btn-primary">
              Request Service →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}

      <section className="how-works" id="how">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              SIMPLE PROCESS
            </span>

            <h2>
              How Servicely Works
            </h2>

            <p>
              Getting the service you need is simple.
              Just follow a few easy steps.
            </p>

          </div>

          <div className="steps-grid">

            {steps.map((step, i) => (

              <div className="step-card" key={step.no}>

                <div className="step-circle">
                  {step.no}
                </div>

                {i < steps.length - 1 && (
                  <div className="step-line"></div>
                )}

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="services" id="services">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              OUR SERVICES
            </span>

            <h2>
              Services You Can Count On
            </h2>

            <p>
              Find trusted professionals across a wide range
              of service categories.
            </p>

          </div>

          <div className="services-grid">

            {services.map((s) => (

              <div className="service-card" key={s.name}>

                <div className="service-icon">
                  {s.icon}
                </div>

                <div className="service-info">

                  <h3>
                    {s.name}
                  </h3>

                  <small>
                    Professional service
                  </small>

                </div>

                <span className="arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROMO
          ===================================================== */}

      <section className="promo">

        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              ONE PLATFORM
            </span>

            <h2>
              One Platform. Every Service.
            </h2>

            <p>
              Everything you need — for both customers and providers.
            </p>

          </div>

          <div className="promo-grid">

            <div className="promo-card">

              <span className="promo-icon">
                👥
              </span>

              <h3>
                For Customers
              </h3>

              <p>
                Book trusted professionals instantly, track your
                requests, and pay securely.
              </p>

              <Link
                to="/for-customers"
                className="btn-primary"
              >
                Get Started →
              </Link>

            </div>


            <div className="promo-card">

              <span className="promo-icon">
                💼
              </span>

              <h3>
                For Providers
              </h3>

              <p>
                Grow your business, receive customer requests,
                and manage jobs easily.
              </p>

              <Link
                to="/for-providers"
                className="btn-primary"
              >
                Join as Provider →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-box">

            <h2>
              Ready to Get Started?
            </h2>

            <p>
              Join thousands of happy customers and professionals
              on Servicely.
            </p>

            <div className="cta-buttons">

              <Link
                to="/contact"
                className="btn-primary"
              >
                Book a Service →
              </Link>

              <Link
                to="/for-providers"
                className="btn-secondary"
              >
                Become a Provider
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home