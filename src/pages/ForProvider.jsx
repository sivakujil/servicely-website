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

  const appLink =
    "https://play.google.com/store/apps/details?id=com.servicely.serviceprovider";

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
              <ArrowRight size={18} />
            </button>

          </div>


          {/* =====================================================
              HERO BANNER
          ===================================================== */}

          <div className="provider-hero-banner">

            <div className="provider-banner-content">

              <div className="provider-banner-icon">
                <BriefcaseBusiness size={34} />
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
                  <BriefcaseBusiness size={17} />
                  More Jobs
                </div>

                <div>
                  <ShieldCheck size={17} />
                  Verified Profile
                </div>

                <div>
                  <Star size={17} />
                  Build Reputation
                </div>

              </div>

            </div>


            <div className="provider-banner-decoration">

              <div className="provider-banner-circle provider-circle-one"></div>

              <div className="provider-banner-circle provider-circle-two"></div>

              <div className="provider-banner-card provider-card-one">
                <Check size={17} />
                Job Accepted
              </div>

              <div className="provider-banner-card provider-card-two">
                <Star size={17} />
                4.9 Rating
              </div>

              <div className="provider-banner-card provider-card-three">
                <BriefcaseBusiness size={17} />
                New Request
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROVIDER FLOW
        ===================================================== */}

        <section className="provider-flow">

          <div className="provider-flow-list">

            {steps.map(([tag, title, text, Icon]) => (

              <article key={title}>

                <span>
                  <Icon size={23} />
                </span>

                <div>

                  <small>
                    {tag}
                  </small>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </div>

                <ArrowRight size={19} />

              </article>

            ))}

          </div>


          {/* =====================================================
              VIDEO
          ===================================================== */}

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
                    size={20}
                    fill="currentColor"
                  />

                </div>

              </div>


              <div className="provider-youtube">

                <iframe
                  src="https://www.youtube.com/embed/HQNziXgadPE"
                  title="Servicely Pro Provider Guide"
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
                  Servicely Pro மூலம் provider ஆக
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
            DOWNLOAD SERVICELY PRO APP
        ===================================================== */}

        <section className="provider-download-app">

          <div className="provider-download-decoration">

            <div className="provider-phone-card">

              <div className="provider-phone-screen">

                <BriefcaseBusiness size={36} />

                <strong>
                  Servicely Pro
                </strong>

                <span>
                  Grow. Connect. Earn.
                </span>

              </div>

            </div>


            <div className="provider-floating-card provider-download-card-one">
              <Check size={17} />
              Job Accepted
            </div>


            <div className="provider-floating-card provider-download-card-two">
              <Star size={17} />
              4.9 Rating
            </div>

          </div>


          <div className="provider-download-content">

            <span className="provider-download-eyebrow">
              SERVICELY PRO APP
            </span>

            <h2>
              Download the <b>Servicely Pro App</b>
            </h2>

            <p>
              Available on Google Play and the App Store.
            </p>


            <div className="provider-app-buttons">

              {/* =================================================
                  GOOGLE PLAY
              ================================================= */}

              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="provider-app-store-button"
                aria-label="Get Servicely Pro on Google Play"
              >

                <div className="provider-app-store-icon">

                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                  >
                    <path d="M3.5 2.8L13.8 12 3.5 21.2C3.2 20.8 3 20.2 3 19.5V4.5C3 3.8 3.2 3.2 3.5 2.8Z" />
                    <path d="M14.8 12.9L17.7 10.3L20.4 11.8C21.2 12.2 21.2 13.8 20.4 14.2L17.7 15.7L14.8 12.9Z" />
                    <path d="M4.4 2.3L15.9 8.8L13.8 11L4.4 2.3Z" />
                    <path d="M4.4 21.7L13.8 13L15.9 15.2L4.4 21.7Z" />
                  </svg>

                </div>

                <div className="provider-app-store-text">

                  <span>
                    GET IT ON
                  </span>

                  <strong>
                    Google Play
                  </strong>

                </div>

              </a>


              {/* =================================================
                  APP STORE
              ================================================= */}

              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="provider-app-store-button"
                aria-label="Download Servicely Pro on the App Store"
              >

                <div className="provider-app-store-icon">

                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                  >
                    <path d="M17.05 12.54C17.03 10.21 18.96 9.08 19.05 9.03C17.95 7.43 16.25 7.21 15.65 7.19C14.22 7.04 12.83 8.04 12.1 8.04C11.35 8.04 10.23 7.2 9.02 7.23C7.46 7.25 6 8.15 5.2 9.55C3.55 12.4 4.79 16.59 5.87 18.89C6.41 20.01 7.67 21.3 8.89 21.25C10.08 21.2 10.52 20.49 11.96 20.49C13.39 20.49 13.79 21.25 15.03 21.22C16.31 21.2 17.44 20.1 17.84 18.97C18.51 17.69 18.92 16.43 18.93 16.37C18.9 16.36 17.08 15.66 17.05 12.54ZM14.71 5.66C15.35 4.86 15.79 3.77 15.67 2.67C14.75 2.71 13.64 3.28 12.97 4.05C12.38 4.72 11.86 5.85 12 6.91C13.03 6.99 14.04 6.43 14.71 5.66Z" />
                  </svg>

                </div>

                <div className="provider-app-store-text">

                  <span>
                    DOWNLOAD ON THE
                  </span>

                  <strong>
                    App Store
                  </strong>

                </div>

              </a>

            </div>

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
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}