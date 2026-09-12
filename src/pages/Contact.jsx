import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-badge">CONTACT US</span>

          <h1>
            We’re Here to <span>Help.</span>
          </h1>

          <p>
            Have a question, need support, or want to learn more about
            Servicely? Our team is ready to help.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="section-label">GET IN TOUCH</div>

            <h2>
              Let’s Talk About
              <br />
              <span>Your Service Needs.</span>
            </h2>

            <p className="contact-description">
              Whether you are looking for a trusted professional,
              need help with your account, or want to partner with us,
              simply reach out. We are happy to assist you.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:info@servicely.lk"
              className="contact-info-card"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email Us</span>
                <strong>info@servicely.lk</strong>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+94771234567"
              className="contact-info-card"
            >
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <span>Call Us</span>
                <strong>+94 77 123 4567</strong>
              </div>
            </a>

            {/* LOCATION */}
            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <strong>Sri Lanka</strong>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="contact-social-section">
              <span>FOLLOW US</span>

              <div className="contact-socials">
                <a
                  href="#"
                  className="contact-social facebook"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  className="contact-social linkedin"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="#"
                  className="contact-social youtube"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-card">

            <div className="form-header">
              <span className="form-badge">SEND A MESSAGE</span>

              <h3>How Can We Help?</h3>

              <p>
                Fill out the form and our team will get back to you
                as soon as possible.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* NAME */}
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* PHONE */}
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <select id="subject" defaultValue="">
                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="general">
                    General Inquiry
                  </option>

                  <option value="customer">
                    Customer Support
                  </option>

                  <option value="provider">
                    Provider Support
                  </option>

                  <option value="partnership">
                    Partnership
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="contact-cta">
        <div className="contact-cta-inner">

          <div>
            <span>NEED A SERVICE?</span>

            <h2>
              Get the Help You Need,
              <br />
              <strong>When You Need It.</strong>
            </h2>
          </div>

          <Link
            to="/services"
            className="contact-cta-button"
          >
            Explore Services
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}