import { Link } from 'react-router-dom'
import './ForCustomers.css'

function ForCustomers() {
  const benefits = [
    {
      icon: '✅',
      title: 'Verified Professionals',
      desc: 'All service providers are background-checked and verified for your safety.',
    },
    {
      icon: '⚡',
      title: 'Instant Booking',
      desc: 'Book services in just a few clicks. Get responses within minutes.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      desc: 'No hidden charges. See prices upfront before you book.',
    },
    {
      icon: '⭐',
      title: 'Rated & Reviewed',
      desc: 'Choose providers based on real customer ratings and reviews.',
    },
    {
      icon: '🛡️',
      title: 'Secure Payments',
      desc: 'Safe and secure payment methods with buyer protection.',
    },
    {
      icon: '📞',
      title: '24/7 Support',
      desc: 'Our support team is always available to help you.',
    },
  ]

  const steps = [
    {
      no: '01',
      title: 'Browse Services',
      desc: 'Explore our wide range of professional services.',
    },
    {
      no: '02',
      title: 'Book Instantly',
      desc: 'Choose a provider and book your service in minutes.',
    },
    {
      no: '03',
      title: 'Get It Done',
      desc: 'Professional arrives and completes the job.',
    },
    {
      no: '04',
      title: 'Pay & Review',
      desc: 'Pay securely and share your experience.',
    },
  ]

  return (
    <div className="customers-page">

      {/* =========================
          1. HERO SECTION
      ========================== */}
      <section className="cust-hero">
        <div className="container">
          <div className="cust-hero-grid">

            <div className="cust-hero-left">

              <span className="hero-badge">
                👥 FOR CUSTOMERS
              </span>

              <h1>
                Your Service.
                <br />
                <span className="highlight">
                  Just One Click Away.
                </span>
              </h1>

              <p>
                Book trusted professionals for all your home and business
                needs. Fast, reliable, and affordable services at your
                fingertips.
              </p>

              <div className="hero-buttons">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Book a Service →
                </Link>

                <Link
                  to="/"
                  className="btn-secondary"
                >
                  Explore Services
                </Link>
              </div>

              <div className="cust-trust">
                <div className="trust-item">
                  ✓ Verified Experts
                </div>

                <div className="trust-item">
                  ✓ Instant Booking
                </div>

                <div className="trust-item">
                  ✓ Secure Payments
                </div>
              </div>

              <div className="cust-stats-bar">

                <div className="cust-stats-item">
                  <strong>12K+</strong>
                  <small>Happy Customers</small>
                </div>

                <div className="cust-stats-divider"></div>

                <div className="cust-stats-item">
                  <strong>850+</strong>
                  <small>Verified Providers</small>
                </div>

                <div className="cust-stats-divider"></div>

                <div className="cust-stats-item">
                  <strong>4.9★</strong>
                  <small>Average Rating</small>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          2. BENEFITS SECTION
      ========================== */}
      <section className="cust-benefits">
        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>
              Benefits for Customers
            </h2>

            <p>
              Enjoy a smooth, safe and hassle-free service booking experience.
            </p>

          </div>

          <div className="benefits-grid">

            {benefits.map((b) => (
              <div
                className="benefit-card"
                key={b.title}
              >

                <div className="benefit-icon">
                  {b.icon}
                </div>

                <h3>
                  {b.title}
                </h3>

                <p>
                  {b.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          3. STEPS SECTION
      ========================== */}
      <section className="cust-steps-section">
        <div className="container">

          <div className="section-header">

            <span className="section-tag">
              SIMPLE PROCESS
            </span>

            <h2>
              How to Book a Service
            </h2>

            <p>
              Getting help has never been easier.
            </p>

          </div>

          <div className="steps-flow">

            {steps.map((s, i) => (
              <div
                className="flow-item"
                key={s.no}
              >

                <div className="flow-circle">
                  {s.no}
                </div>

                <h3>
                  {s.title}
                </h3>

                <p>
                  {s.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="flow-line"></div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          4. VIDEO SECTION
      ========================== */}
      <section className="cust-video-section">
        <div className="container">

          <div className="cust-video-grid">

            <div className="video-left">

              <div className="video-wrapper">

                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="How to Book a Service on Servicely"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>

              <div className="video-badge">
                <span>▶</span>
                Customer Booking Guide
              </div>

            </div>


            <div className="video-right">

              <span className="section-tag">
                🎥 WATCH & LEARN
              </span>

              <h2>
                See How Servicely Works
                <br />
                in{' '}
                <span className="highlight">
                  2 Minutes
                </span>
              </h2>

              <p>
                Watch our quick guide to see how easy it is to book trusted
                professionals and get your work done through Servicely.
              </p>

              <ul className="video-features">

                <li>

                  <span className="feat-icon">
                    📱
                  </span>

                  <div>
                    <strong>
                      Easy Booking
                    </strong>

                    <small>
                      Find and book services instantly
                    </small>
                  </div>

                </li>

                <li>

                  <span className="feat-icon">
                    🛡️
                  </span>

                  <div>
                    <strong>
                      Verified Experts
                    </strong>

                    <small>
                      Choose the right professional
                    </small>
                  </div>

                </li>

                <li>

                  <span className="feat-icon">
                    💳
                  </span>

                  <div>
                    <strong>
                      Secure Payment
                    </strong>

                    <small>
                      Pay safely after the job is done
                    </small>
                  </div>

                </li>

              </ul>

              <Link
                to="/contact"
                className="btn-primary"
              >
                Try It Now →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          5. STATS SECTION
      ========================== */}
      <section className="cust-stats-boxes">
        <div className="container">

          <div className="stats-box-grid">

            <div className="stat-box-item">
              <strong>
                12,000+
              </strong>

              <small>
                Happy Customers
              </small>
            </div>

            <div className="stat-box-item">
              <strong>
                50+
              </strong>

              <small>
                Service Categories
              </small>
            </div>

            <div className="stat-box-item">
              <strong>
                30 Min
              </strong>

              <small>
                Avg. Response Time
              </small>
            </div>

            <div className="stat-box-item">
              <strong>
                4.9/5
              </strong>

              <small>
                Customer Satisfaction
              </small>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          6. CTA SECTION
      ========================== */}
      <section className="cust-cta">
        <div className="container">

          <div className="cta-box">

            <h2>
              Ready to Get Started?
            </h2>

            <p>
              Join thousands of satisfied customers using Servicely every day.
            </p>

            <Link
              to="/contact"
              className="btn-primary large"
            >
              Book Your First Service →
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

export default ForCustomers
