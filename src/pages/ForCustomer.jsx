import {
  ArrowRight,
  CalendarDays,
  Search,
  MessageSquare,
  ShieldCheck,
  Star,
  Check,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

import "./ForCustomer.css";

export default function ForCustomer() {

  const nav = useNavigate();

  const flow = [
    [
      "STEP 01",
      "Select Service",
      "Browse and select the service you need from our full catalogue.",
      Search,
    ],
    [
      "STEP 02",
      "Create Request",
      "Describe the job, set a date & time, and share your location.",
      CalendarDays,
    ],
    [
      "STEP 03",
      "Service",
      "A verified professional arrives and carries out your service.",
      ShieldCheck,
    ],
    [
      "STEP 04",
      "Complete",
      "Confirm the job is done to your satisfaction before payment.",
      Check,
    ],
    [
      "STEP 05",
      "Feedback",
      "Rate the provider and share your experience to help the community.",
      Star,
    ],
  ];

  return (
    <>
      <main className="audience">

        <section className="aud-hero">

          <div>

            <span className="eyebrow">
              FOR CUSTOMERS
            </span>

            <h1>
              Your Service,
              <br />
              <b>Your Way.</b>
            </h1>

            <p>
              Five simple steps from selecting your
              service to sharing your feedback —
              entirely in the app.
            </p>

            <button
              className="primary"
              onClick={() => nav("/services")}
            >
              Book a Service
              <ArrowRight size={16} />
            </button>

          </div>

          <div className="phone customer-phone">

            <div className="phone-top"></div>

            <b>My Jobs</b>

            <div className="job active">
              Plumbing
              <small>
                Accepted • 10:30 AM
              </small>
            </div>

            <div className="job">
              Painting
              <small>
                Pending
              </small>
            </div>

            <div className="job done">
              AC Repair
              <small>
                Completed
              </small>
            </div>

          </div>

        </section>

        <section className="customer-flow">

          <div className="flow-list">

            {flow.map(
              ([tag, title, text, Icon]) => (

                <article key={title}>

                  <span>
                    <Icon />
                  </span>

                  <div>

                    <small>{tag}</small>

                    <h3>{title}</h3>

                    <p>{text}</p>

                  </div>

                  <ArrowRight />

                </article>
              )
            )}

          </div>

          <div className="demo-card">

            <div className="video-error">

              <span>▶</span>

              <b>Video player</b>

              <small>
                configuration error
              </small>

              <em>
                Error 153
              </em>

              <button>
                Watch video on YouTube
              </button>

            </div>

          </div>

        </section>

        <section className="customer-trust">

          <div>
            <ShieldCheck />

            <b>
              Verified Providers
            </b>

            <span>
              Background checked & skill assessed
            </span>
          </div>

          <div>
            <MessageSquare />

            <b>
              Live Communication
            </b>

            <span>
              Chat with your provider
            </span>
          </div>

          <div>
            <Star />

            <b>
              Real Feedback
            </b>

            <span>
              Reviews from real customers
            </span>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}