
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Servicely"
            className="navbar-logo"
          />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="desktop-nav">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            How It Works
          </NavLink>

          <NavLink
            to="/for-customer"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            For Customer
          </NavLink>

          <NavLink
            to="/for-provider"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            For Provider
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>

        </nav>


        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        <div className="navbar-right">

          <Link
            to="/book-service"
            className="navbar-cta"
          >
            Book a Service
          </Link>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <nav className="mobile-menu">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            How It Works
          </NavLink>

          <NavLink
            to="/for-customer"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            For Customer
          </NavLink>

          <NavLink
            to="/for-provider"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            For Provider
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>


          {/* Mobile CTA */}

          <Link
            to="/book-service"
            className="navbar-cta"
            onClick={closeMobileMenu}
          >
            Book a Service
          </Link>

        </nav>
      )}

    </header>
  );
}

