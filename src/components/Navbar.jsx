
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.jpeg";

import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobile}
        >
          <img
            src={logo}
            alt="Servicely"
          />
        </Link>


        {/* ================= DESKTOP NAV ================= */}

        <nav className="desktop-nav">

          {/* HOME */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>


          {/* SERVICES */}

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Services
          </NavLink>


          {/* FOR CUSTOMER */}

          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            For Customer
          </NavLink>


          {/* FOR PROVIDER */}

          <NavLink
            to="/provider"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            For Provider
          </NavLink>


          {/* HOW IT WORKS */}

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            How It Works
          </NavLink>


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>


        {/* ================= RIGHT SIDE ================= */}

        <div className="navbar-right">

          <Link
            to="/services"
            className="navbar-cta"
          >
            Book a Service
          </Link>

        </div>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label="Toggle navigation"
        >

          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}

        </button>

      </div>


      {/* ================= MOBILE NAV ================= */}

      {mobileOpen && (
        <div className="mobile-nav">

          <NavLink
            to="/"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/services"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            Services
          </NavLink>


          <NavLink
            to="/customer"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            For Customer
          </NavLink>


          <NavLink
            to="/provider"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            For Provider
          </NavLink>


          <NavLink
            to="/how-it-works"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            How It Works
          </NavLink>


          <NavLink
            to="/contact"
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            Contact
          </NavLink>


          {/* MOBILE CTA */}

          <Link
            to="/services"
            className="mobile-cta"
            onClick={closeMobile}
          >
            Book a Service
          </Link>

        </div>
      )}

    </header>
  );
}
