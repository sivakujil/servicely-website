import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  CreditCard,
  Wrench,
  Zap,
  Wind,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

import "./Home.css";

const services = [
  [
    "Plumbing",
    "Leak repairs, pipe installation & drain",
    Wrench,
  ],
  [
    "Electrical",
    "Wiring, upgrades & safety inspections",
    Zap,
  ],
  [
    "AC Repair",
    "Installation, servicing & gas recharging",
    Wind,
  ],
];

export default function Home() {

  const nav = useNavigate();

  return (
    <div>

      <main className="home">

        {/* HERO */}

        <section className="hero">

          <div className="hero-copy">

            <span className="eyebrow">
              TRUSTED BY 12,000+ CUSTOMERS
            </span>

            <h1>
              Your Service.
              <br />
              <span>Just One Click</span>
              <br />
              Away.
            </h1>

            <p>
              Find trusted professionals and get your work
              done easily. Book in minutes, track in real-time,
              pay securely.
            </p>

            <div className="hero-actions">

              <button
                className="primary"
                onClick={() => nav("/services")}
              >
                Book a Service
                <ArrowRight size={17} />
              </button>

              <button
                className="secondary"
                onClick={() => nav("/for-provider")}
              >
                Become a Provider
              </button>

            </div>

            <div className="stats">

              <div>
                <b>12K+</b>
                <span>Happy Customers</span>
              </div>

              <div>
                <b>850+</b>
                <span>Verified Providers</span>
              </div>

              <div>
                <b>4.9</b>
                <span>Average Rating</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="request-card">

              <span className="small-icon">
                ✓
              </span>

              <b>Book a Service</b>

              <p>
                Choose a trusted professional
                for your needs.
              </p>

              <button
                onClick={() => nav("/services")}
              >
                Get Started
                <ArrowRight size={14} />
              </button>

            </div>

            <div className="phone">

              <div className="phone-top"></div>

              <strong>My Jobs</strong>

              <div className="job active">
                AC Repair
                <small>
                  Today • 10:00 AM
                </small>
              </div>

              <div className="job">
                Plumbing
                <small>
                  Tomorrow
                </small>
              </div>

              <div className="job done">
                Painting
                <small>
                  Completed
                </small>
              </div>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section className="offer section">

          <div className="section-heading">

            <span className="eyebrow">
              OUR SERVICES
            </span>

            <h2>
              What We Offer
            </h2>

            <p>
              Professional home and business services delivered by
              <br />
              verified, vetted technicians.
            </p>

          </div>

          <div className="service-cards">

            {services.map(
              ([name, text, Icon]) => (

                <article key={name}>

                  <span className="service-icon">
                    <Icon />
                  </span>

                  <h3>{name}</h3>

                  <p>{text}</p>

                </article>
              )
            )}

          </div>

        </section>

        {/* TRUST */}

        <section className="trust section">

          <div className="section-heading">

            <span className="eyebrow">
              WHY CHOOSE US
            </span>

            <h2>
              Built on Trust & Transparency
            </h2>

            <p>
              Every step of the process is designed
              to make you feel safe and informed.
            </p>

          </div>

          <div className="trust-grid">

            <article>

              <ShieldCheck />

              <h3>
                Verified Providers
              </h3>

              <p>
                Every service provider is
                background-checked, ID-verified,
                and skill-assessed before joining
                the platform.
              </p>

            </article>

            <article>

              <Clock3 />

              <h3>
                On-Time Guarantee
              </h3>

              <p>
                Providers who miss appointments
                without notice are penalised.
                Your time is respected, always.
              </p>

            </article>

            <article>

              <CreditCard />

              <h3>
                Secure Payment
              </h3>

              <p>
                Funds are only released to providers
                after you confirm the job is complete.
                Zero risk of fraud.
              </p>

            </article>

          </div>

        </section>

        {/* CTA */}

        <section className="ready">

          <div>

            <h2>
              Ready to experience it?
            </h2>

            <p>
              Book your first service today
              and see how simple it can be.
            </p>

          </div>

          <button
            className="white-btn"
            onClick={() => nav("/services")}
          >
            Get Started
            <ArrowRight size={15} />
          </button>

        </section>

      </main>

      <Footer />

    </div>
  );
}