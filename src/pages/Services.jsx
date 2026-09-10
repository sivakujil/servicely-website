import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 1,
    emoji: '🔧',
    title: 'Plumbing',
    description: 'Expert leak fixes, pipe repairs, installations, and complete plumbing solutions for your home.',
    color: '#2563eb',
    link: '/contact',
  },
  {
    id: 2,
    emoji: '⚡',
    title: 'Electrical',
    description: 'Licensed electricians for wiring, fixtures, safety inspections, and all electrical needs.',
    color: '#f59e0b',
    link: '/contact',
  },
  {
    id: 3,
    emoji: '❄️',
    title: 'AC Repair',
    description: 'Professional AC servicing, gas refilling, installation, and repair for all AC brands.',
    color: '#06b6d4',
    link: '/contact',
  },
  {
    id: 4,
    emoji: '🧹',
    title: 'Home Cleaning',
    description: 'Deep cleaning, regular housekeeping, kitchen & bathroom sanitization, and sofa cleaning.',
    color: '#10b981',
    link: '/contact',
  },
  {
    id: 5,
    emoji: '🎨',
    title: 'Painting',
    description: 'Interior and exterior painting, wall textures, waterproofing, and complete renovation painting.',
    color: '#ef4444',
    link: '/contact',
  },
  {
    id: 6,
    emoji: '🔨',
    title: 'Carpentry',
    description: 'Custom furniture making, door & window fitting, shelving, and all woodwork solutions.',
    color: '#92400e',
    link: '/contact',
  },
  {
    id: 7,
    emoji: '📺',
    title: 'Electronics Repair',
    description: 'TV, washing machine, fridge, microwave repairs and maintenance by certified technicians.',
    color: '#7c3aed',
    link: '/contact',
  },
  {
    id: 8,
    emoji: '🚗',
    title: 'Vehicle Service',
    description: 'Complete car servicing, denting & painting, battery replacement, and roadside assistance.',
    color: '#db2777',
    link: '/contact',
  },
  {
    id: 9,
    emoji: '📦',
    title: 'Packers & Movers',
    description: 'Safe and reliable packing, loading, transportation, and unpacking for hassle-free relocation.',
    color: '#059669',
    link: '/contact',
  },
]

function Services() {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="services-badge">🔧 OUR SERVICES</span>
            <h1 className="services-hero-title">
              Professional Services,{' '}
              <span className="services-hero-highlight">When You Need Them</span>
            </h1>
            <p className="services-hero-subtitle">
              From plumbing to painting, we connect you with verified, trained professionals
              for every service you need — at your doorstep, on demand.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Book a Service →</Link>
              <Link to="/" className="btn-secondary">Back to Home</Link>
            </div>
            <div className="hero-features">
              <div className="feature"><span>✓</span> Verified Professionals</div>
              <div className="feature"><span>⚡</span> Quick Response</div>
              <div className="feature"><span>⭐</span> Top Rated</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2>Services We Offer</h2>
            <p>Professional solutions for every need, delivered by trusted experts.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.id}
                className="service-card"
              >
                <div className="service-card-icon">
                  <span className="service-card-emoji">{service.emoji}</span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <span className="service-card-link">
                  Book Now <span className="link-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="services-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>10K+</strong>
              <small>Happy Customers</small>
            </div>
            <div className="stat-item">
              <strong>500+</strong>
              <small>Verified Professionals</small>
            </div>
            <div className="stat-item">
              <strong>4.8★</strong>
              <small>Average Rating</small>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <small>Support Available</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-box">
            <h2 className="services-cta-title">Didn't find what you're looking for?</h2>
            <p className="services-cta-text">
              We offer many more services. Reach out to our support team and we'll find the right professional for you.
            </p>
            <Link to="/contact" className="services-cta-button">
              Contact Support →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
