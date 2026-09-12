import {
  ArrowRight,
  Check,
  ClipboardList,
  Search,
  Bell,
  Wrench,
  CheckCircle2,
  Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

import "./HowItWorks.css";

const steps = [
  [
    "STEP 01",
    "Choose a Service",
    "Browse our full catalogue of home and business services. Filter by category, location, or availability to find exactly what you need.",
    Search,
  ],
  [
    "STEP 02",
    "Create a Request",
    "Describe your job in detail — add photos, choose your preferred date & time, and share your location.",
    ClipboardList,
  ],
  [
    "STEP 03",
    "Find a Service Provider",
    "Servicely instantly matches your request to verified, rated professionals in your area. Review profiles, ratings, and pricing.",
    Search,
  ],
  [
    "STEP 04",
    "Provider Accepts",
    "Your matched provider reviews your request and accepts the job. You get a real-time notification the moment they confirm.",
    Bell,
  ],
  [
    "STEP 05",
    "Service Starts",
    "The provider arrives at your location and begins work. Track them live on the map, and communicate via in-app chat.",
    Wrench,
  ],
  [
    "STEP 06",
    "Service Completed",
    "The provider marks the job complete and uploads work-completion photos. You confirm the job is done to your satisfaction.",
    CheckCircle2,
  ],
  [
    "STEP 07",
    "Feedback",
    "Rate the provider and share your experience to help the community.",
    Star,
  ],
];

export default function HowItWorks() {

  const nav = useNavigate();

  return (
    <>
      <main className="how">

        <section className="page-hero">

          <span className="eyebrow">
            SIMPLE & TRANSPARENT
          </span>

          <h1>
            How Servicely Works
          </h1>

          <p>
            From request to completion — five effortless steps.
          </p>

          <button
            className="primary"
            onClick={() => nav("/services")}
          >
            See Full Details
            <ArrowRight size={16} />
          </button>

        </section>

        <section className="steps">

          {steps.map(
            ([tag, title, text, Icon], i) => (

              <article
                className="step"
                key={title}
              >

                <div className="step-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="step-content">

                  <span>{tag}</span>

                  <h2>{title}</h2>

                  <p>{text}</p>

                  <ul>

                    <li>
                      <Check size={14} />
                      Verified professionals
                    </li>

                    <li>
                      <Check size={14} />
                      Real-time status updates
                    </li>

                  </ul>

                </div>

                <div className="step-icon">
                  <Icon />
                </div>

                {i < steps.length - 1 && (
                  <div className="connector" />
                )}

              </article>

            )
          )}

        </section>

        <section className="ready compact">

          <div>

            <h2>
              Ready to book your first service?
            </h2>

            <p>
              Join thousands of happy customers
              across Sri Lanka.
            </p>

          </div>

          <button
            className="white-btn"
            onClick={() => nav("/services")}
          >
            Book a Service
            <ArrowRight size={15} />
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}