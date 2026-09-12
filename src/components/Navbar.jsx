import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/how-it-works", "How It Works"],
  ["/for-customer", "For Customer"],
  ["/for-provider", "For Provider"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="nav-inner">

        <button
          className="brand"
          onClick={() => navigate("/")}
          aria-label="Servicely home"
        >
          <img
            src="/src/assets/logo.png"
            alt="Servicely"
            className="brand-logo"
          />
          <span>Servicely</span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-cta"
          onClick={() => navigate("/services")}
        >
          Get Started
          <ArrowRight size={17} />
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}