import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Users,
  Star,
  ShieldCheck,
  Check,
  X,
  MapPin,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

import "./ForProvider.css";

export default function ForProvider() {

  const nav = useNavigate();

  return (
    <>
      <main className="provider">

        <section className="provider-hero">

          <div>

            <span className="eyebrow">
              FOR PROVIDERS
            </span>

            <h1>
              Grow Your Business.
              <br />
              <b>On Your Terms.</b>
            </h1>

            <p>
              Join Sri Lanka's trusted service marketplace.
              Get quality leads, manage your jobs,
              and grow your income.
            </p>

            <div className="hero-actions">

              <button
                className="primary"
                onClick={() => nav("/contact")}
              >
                Join as Provider
                <ArrowRight size={16} />
              </button>

              <button className="secondary">
                Learn More
              </button>

            </div>

          </div>

          <div className="provider-dashboard">

            <div className="dash-top">

              <b>New Jobs</b>

              <span>
                Instant Access
              </span>

            </div>

            <div className="new-job">

              <small>
                STEP 01 • NEW REQUEST
              </small>

              <h3>
                AC Repair
              </h3>

              <p>
                <MapPin size={13} />
                Colombo 03 • 2.4 km
              </p>

              <div>

                <button className="accept">
                  <Check />
                  Accept
                </button>

                <button className="reject">
                  <X />
                  Reject
                </button>

              </div>

            </div>

            <div className="new-job faded">

              <small>
                NEW REQUEST
              </small>

              <h3>
                Plumbing
              </h3>

              <p>
                Colombo 07 • 4.1 km
              </p>

            </div>

          </div>

        </section>

        <section className="earn section">

          <div className="earn-copy">

            <span className="eyebrow">
              EARNINGS
            </span>

            <h2>
              Earn More.
              <br />
              <b>Work Smarter.</b>
            </h2>

            <p>
              Top providers on Servicely earn over
              Rs. 100,000 per month. Your income grows
              as your rating improves and you take on
              more jobs.
            </p>

            <div className="earn-cards">

              <div>
                <BriefcaseBusiness />

                <b>
                  Rs. 85K+
                </b>

                <span>
                  Monthly income
                </span>
              </div>

              <div>
                <Clock3 />

                <b>
                  24 hrs
                </b>

                <span>
                  Payment release
                </span>
              </div>

            </div>

          </div>

          <div className="provider-stats">

            <div>
              <Users />
              <b>850+</b>
              <span>
                Verified Providers
              </span>
            </div>

            <div>
              <ShieldCheck />
              <b>95%</b>
              <span>
                Acceptance Rate
              </span>
            </div>

            <div>
              <Star />
              <b>4.8★</b>
              <span>
                Avg. Provider Rating
              </span>
            </div>

            <div>
              <Users />
              <b>12K+</b>
              <span>
                Customers Served
              </span>
            </div>

          </div>

        </section>

        <section className="provider-steps">

          <span className="eyebrow">
            HOW IT WORKS
          </span>

          <h2>
            Simple. Fast. <b>Reliable.</b>
          </h2>

          <div className="provider-timeline">

            {[
              [
                "STEP 01",
                "Accept / Reject",
                "Review job details, then accept or pass.",
              ],
              [
                "STEP 02",
                "View Customer",
                "See customer info and confirmed location.",
              ],
              [
                "STEP 03",
                "Start Service",
                "Tap Start when you arrive at the job site.",
              ],
              [
                "STEP 04",
                "Upload Work Photos",
                "Document completion with before/after photos.",
              ],
            ].map(([tag, title, text], i) => (

              <article key={title}>

                <div className="timeline-dot">
                  {i + 1}
                </div>

                <small>{tag}</small>

                <h3>{title}</h3>

                <p>{text}</p>

              </article>

            ))}

          </div>

        </section>

        <section className="ready">

          <div>

            <h2>
              Ready to grow with Servicely?
            </h2>

            <p>
              Join trusted providers serving
              customers across Sri Lanka.
            </p>

          </div>

          <button
            className="white-btn"
            onClick={() => nav("/contact")}
          >
            Join as a Provider
            <ArrowRight size={15} />
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}