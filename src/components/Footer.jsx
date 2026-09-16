
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="corporate-footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">

        {/* ================= COMPANY INFO ================= */}
        <div className="footer-company">

          <Link to="/" className="footer-logo">
            Servicely
          </Link>

          <p className="footer-tagline">
            Engineering solutions for a
            <br />
            better and sustainable future.
          </p>

          <p className="footer-description">
            Delivering reliable, innovative and
            professional solutions across multiple
            industries with quality and integrity.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <div className="footer-link-list">

            <Link to="/">
              Home
            </Link>

            <Link to="/how-it-works">
              How It Works
            </Link>

            <Link to="/for-customer">
              For Customer
            </Link>

            <Link to="/for-provider">
              For Provider
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>


        {/* ================= SERVICES ================= */}
        <div className="footer-column footer-services">

          <h3>Our Services</h3>

          <div className="footer-link-list">

            <Link to="/services/mep-maintenance">
              MEP & Maintenance
            </Link>

            <Link to="/services/construction-civil">
              Construction & Civil
            </Link>

            <Link to="/services/agriculture">
              Agriculture & Agro-Solution
            </Link>

            <Link to="/services/energy">
              Energy & Sustainable Solutions
            </Link>

            <Link to="/services/information-technology">
              Information Technology
            </Link>

          </div>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>


          {/* ADDRESS */}
          <div className="contact-row">

            <div className="contact-icon">
              <MapPin size={18} />
            </div>

            <div>

              <span className="contact-label">
                Address
              </span>

              <p>
                Northern Province,
                <br />
                Sri Lanka
              </p>

            </div>

          </div>


          {/* PHONE */}
          <div className="contact-row">

            <div className="contact-icon">
              <Phone size={18} />
            </div>

            <div>

              <span className="contact-label">
                Phone
              </span>

              <a href="tel:+94700000000">
                +94 70 000 0000
              </a>

            </div>

          </div>


          {/* EMAIL */}
          <div className="contact-row">

            <div className="contact-icon">
              <Mail size={18} />
            </div>

            <div>

              <span className="contact-label">
                Email
              </span>

              <a href="mailto:info@servicely.com">
                info@servicely.lk
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">


          {/* ================= COPYRIGHT ================= */}
          <div className="footer-copyright">

            <p>
              © {new Date().getFullYear()} Servicely.
              All rights reserved.
            </p>

            <span className="footer-divider">
              |
            </span>

            <p>
              Registration No: PV 123456
            </p>

          </div>


          {/* ================= POLICY LINKS ================= */}
          <div className="footer-policy">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/cookie-policy">
              Cookie Policy
            </Link>

          </div>


          {/* ================= SOCIAL MEDIA ================= */}
          <div className="footer-social">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link linkedin"
            >
              in
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link facebook"
            >
              f
            </a>


            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-link youtube"
            >
              ▶
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

