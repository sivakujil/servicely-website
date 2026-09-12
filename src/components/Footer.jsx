import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* ABOUT */}
        <div className="footer-about">

          <div className="footer-brand">
            <img
              src="/src/assets/logo.png"
              alt="Servicely"
              className="footer-logo"
            />

            <b>Servicely</b>
          </div>

          <p>
            Connecting trusted service
            <br />
            professionals with customers across
            <br />
            Sri Lanka.
          </p>

          <a href="mailto:info@servicely.lk">
            <Mail size={15} />
            info@servicely.lk
          </a>

          <a href="tel:+94771234567">
            <Phone size={15} />
            +94 77 123 4567
          </a>

          {/* SOCIAL MEDIA */}
          <div className="socials">

            <a
              href="#"
              aria-label="Facebook"
              className="social-text"
            >
              f
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-text linkedin"
            >
              in
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="social-text youtube"
            >
              ▶
            </a>

          </div>

        </div>


        {/* NAVIGATION */}
        <div>

          <h4>NAVIGATION</h4>

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


        {/* SERVICES */}
        <div>

          <h4>SERVICES</h4>

          <span>Plumbing</span>
          <span>Electrical</span>
          <span>AC Repair</span>
          <span>Cleaning</span>
          <span>Painting</span>
          <span>Appliance Repair</span>

        </div>


        {/* DOWNLOAD APP */}
        <div>

          <h4>DOWNLOAD THE APP</h4>

          <p>
            Available on Google Play
            and the App Store.
          </p>

          <div className="store">
            GET IT ON
            <br />
            <b>Google Play</b>
          </div>

          <div className="store">
             <b>App Store</b>
          </div>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          © 2025 Servicely. All rights reserved.
        </span>

        <span>
          Terms &nbsp;&nbsp; Privacy &nbsp;&nbsp; Cookies
        </span>

      </div>

    </footer>
  );
}