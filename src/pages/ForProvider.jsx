
import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  Star,
  ShieldCheck,
  Check,
  CalendarDays,
  MessageSquare,
  Play,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./ForProvider.css";

export default function ForProvider() {
  const nav = useNavigate();

  const steps = [
    [
      "STEP 01",
      "Accept / Reject",
      "Review job details and accept the service request.",
      BriefcaseBusiness,
    ],
    [
      "STEP 02",
      "View Customer",
      "Check customer information and confirmed service location.",
      Users,
    ],
    [
      "STEP 03",
      "Start Service",
      "Start the service when you arrive at the customer location.",
      CalendarDays,
    ],
    [
      "STEP 04",
      "Complete Job",
      "Complete the work and confirm the service is finished.",
      Check,
    ],
    [
      "STEP 05",
      "Get Feedback",
      "Receive customer feedback and build your professional reputation.",
      Star,
    ],
  ];

  return (
    <>
      <main className="provider-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="provider-hero">

          {/* LEFT CONTENT */}
          <div className="provider-hero-content">

            <span className="provider-eyebrow">
              FOR PROVIDERS
            </span>

            <h1>
              Grow Your Business,
              <br />
              <b>On Your Terms.</b>
            </h1>

            <p>
              Connect with customers, receive service requests,
              manage your jobs, and grow your professional
              reputation with Servicely.
            </p>

            <button
              className="provider-primary"
              onClick={() => nav("/contact")}
            >
              Join as a Provider
              <ArrowRight size={16} />
            </button>

          </div>

          {/* RIGHT HERO BANNER */}
          <div className="provider-hero-banner">

            <div className="provider-banner-content">

              <div className="provider-banner-icon">
                <BriefcaseBusiness size={30} />
              </div>

              <span>
                GROW WITH SERVICELY
              </span>

              <h2>
                Turn your skills into
                <br />
                <b>new opportunities.</b>
              </h2>

              <p>
                Find customers, manage your services,
                and build a trusted professional profile.
              </p>

              <div className="provider-service-pills">

                <div>
                  <BriefcaseBusiness size={15} />
                  More Jobs
                </div>

                <div>
                  <ShieldCheck size={15} />
                  Verified Profile
                </div>

                <div>
                  <Star size={15} />
                  Build Reputation
                </div>

              </div>

            </div>

            {/* DECORATION */}
            <div className="provider-banner-decoration">

              <div className="provider-banner-circle provider-circle-one"></div>

              <div className="provider-banner-circle provider-circle-two"></div>

              <div className="provider-banner-card provider-card-one">
                <Check size={15} />
                Job Accepted
              </div>

              <div className="provider-banner-card provider-card-two">
                <Star size={15} />
                4.9 Rating
              </div>

              <div className="provider-banner-card provider-card-three">
                <BriefcaseBusiness size={15} />
                New Request
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROVIDER FLOW
        ===================================================== */}

        <section className="provider-flow">

          {/* LEFT STEP LIST */}
          <div className="provider-flow-list">

            {steps.map(([tag, title, text, Icon]) => (
              <article key={title}>

                <span>
                  <Icon size={20} />
                </span>

                <div>
                  <small>{tag}</small>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>

                <ArrowRight size={17} />

              </article>
            ))}

          </div>


          {/* RIGHT VIDEO */}
          <div className="provider-demo-card">

            <div className="provider-video-card">

              <div className="provider-video-header">

                <div>

                  <span className="provider-video-label">
                    PROVIDER GUIDE
                  </span>

                  <h3>
                    சேவையை எப்படி நிர்வகிப்பது?
                  </h3>

                </div>

                <div className="provider-video-play">
                  <Play
                    size={18}
                    fill="currentColor"
                  />
                </div>

              </div>


              <div className="provider-youtube">

                <iframe
                  src="https://www.youtube.com/embed/HQNziXgadPE"
                  title="Servicely Provider Guide"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>


              <div className="provider-video-caption">

                <span>
                  ▶ YouTube
                </span>

                <p>
                  Servicely மூலம் provider ஆக
                  சேவைகளை எளிதாக நிர்வகிப்பது எப்படி
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST FEATURES
        ===================================================== */}

        <section className="provider-trust">

          <div>

            <ShieldCheck />

            <b>
              Verified Profile
            </b>

            <span>
              Build trust with customers
            </span>

          </div>


          <div>

            <MessageSquare />

            <b>
              Easy Communication
            </b>

            <span>
              Stay connected with customers
            </span>

          </div>


          <div>

            <Star />

            <b>
              Real Feedback
            </b>

            <span>
              Grow through customer reviews
            </span>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="provider-final-cta">

          <div>

            <span>
              READY TO GROW?
            </span>

            <h2>
              Start growing your
              <br />
              <b>service business today.</b>
            </h2>

            <p>
              Join Servicely and connect with customers
              who need your skills.
            </p>

            <button
              onClick={() => nav("/contact")}
            >
              Join as a Provider
              <ArrowRight size={17} />
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

