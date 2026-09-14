
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Users,
  Mail,
} from "lucide-react";

import logo from "../assets/logo.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
    {
      name: "Services",
      path: "/services",
      icon: Briefcase,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: Users,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* ================= BRAND ================= */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Servicely Logo"
              className="navbar-logo"
            />
          </div>

          <div className="brand-content">
            <h2>Servicely</h2>
            <span>Simple. Fast. Reliable.</span>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  isActive(link.path) ? "active" : ""
                }`}
              >
                <Icon size={17} strokeWidth={2} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div className={`mobile-nav ${isOpen ? "show" : ""}`}>
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActive(link.path) ? "active" : ""
              }`}
            >
              <Icon size={19} strokeWidth={2} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}

