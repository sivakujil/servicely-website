import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Primary Phone',
      info: '+94 212228350',
      link: 'tel:+94212228350',
      sub: 'Mon - Sat, 9am - 8pm'
    },
    {
      icon: '📞',
      title: 'Secondary Phone',
      info: '+94 701333000',
      link: 'tel:+94701333000',
      sub: 'Available for urgent inquiries'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      info: 'info@northernsustain.com',
      link: 'mailto:info@northernsustain.com',
      sub: 'We reply within 24 hours'
    },
    {
      icon: '✉️',
      title: 'Admin Email',
      info: 'admin@northernsustain.com',
      link: 'mailto:admin@northernsustain.com',
      sub: 'For administrative queries'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: 'No-106/1, Ramanathan Road, Thirunalveely, Jaffna',
      sub: 'Open for visits Mon - Sat'
    },
  ]

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="hero-badge">📞 GET IN TOUCH</span>
          <h1>Contact <span className="highlight">Servicely</span></h1>
          <p>Have a question or need help? We're here for you 24/7.<br />Our team will get back to you as soon as possible.</p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">CONTACT US</span>
            <h2>Get in Touch</h2>
            <p>Reach out through any of these channels and we'll respond quickly.</p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((c) => (
              <div className="info-card" key={c.title}>
                <div className="info-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                {c.link ? (
                  <a href={c.link} className="info-link" target="_blank" rel="noopener noreferrer">
                    {c.info}
                  </a>
                ) : (
                  <strong>{c.info}</strong>
                )}
                <small>{c.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDE */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <span className="section-tag">SEND A MESSAGE</span>
              <h2>We'd love to hear from you</h2>
              <p>Fill in the form below and we'll get back to you shortly.</p>

              {submitted && (
                <div className="success-msg">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Book a Service</option>
                      <option value="provider">Become a Provider</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Right side */}
            <div className="contact-side">
              <div className="side-card">
                <h3>Why Contact Us?</h3>
                <ul className="side-list">
                  <li><span>✓</span> Book services quickly</li>
                  <li><span>✓</span> Register as a provider</li>
                  <li><span>✓</span> Get 24/7 support</li>
                  <li><span>✓</span> Report issues</li>
                  <li><span>✓</span> Partnership queries</li>
                </ul>
              </div>

              <div className="side-card office">
                <h3>Office Hours</h3>
                <div className="hours">
                  <div><strong>Monday - Friday</strong><span>9:00 AM - 8:00 PM</span></div>
                  <div><strong>Saturday</strong><span>10:00 AM - 6:00 PM</span></div>
                  <div><strong>Sunday</strong><span>Closed</span></div>
                </div>
              </div>

              <div className="side-card social-card">
                <h3>Follow Us</h3>
                <p>Stay connected on social media</p>
                <div className="social-links">
                  <a href="#" className="social-btn">f</a>
                  <a href="#" className="social-btn">📷</a>
                  <a href="#" className="social-btn">in</a>
                  <a href="#" className="social-btn">🐦</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions.</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I book a service?</h3>
              <p>Simply click "Book a Service", choose your category, select a provider, and confirm your booking.</p>
            </div>
            <div className="faq-item">
              <h3>How much do services cost?</h3>
              <p>Prices vary by service type. All prices are shown upfront before you book — no hidden charges.</p>
            </div>
            <div className="faq-item">
              <h3>How do I become a provider?</h3>
              <p>Go to "For Providers" page, click sign up, complete verification, and start receiving jobs.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept UPI, credit/debit cards, net banking, and digital wallets for secure payments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
