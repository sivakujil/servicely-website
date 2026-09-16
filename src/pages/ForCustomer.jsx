import {
  ArrowRight,
  CalendarDays,
  Search,
  MessageSquare,
  ShieldCheck,
  Star,
  Check,
  Play,
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

  const appLink =
    "https://play.google.com/store/apps/details?id=com.servicely.serviceprovider";

  return (
    <>
      <main className="audience">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="aud-hero">

          <div className="aud-hero-content">

            <span className="eyebrow">
              FOR CUSTOMERS
            </span>

            <h1>
              Your Service,
              <br />
              <b>Your Way.</b>
            </h1>

            <p>
              Find trusted professionals, book the service
              you need, communicate with your provider,
              and complete your service with confidence.
            </p>

            <button
              className="primary"
              onClick={() => nav("/services")}
            >
              Book a Service
              <ArrowRight size={18} />
            </button>

          </div>


          {/* =====================================================
              HERO BANNER
          ===================================================== */}

          <div className="customer-hero-banner">

            <div className="hero-banner-content">

              <div className="hero-banner-icon">
                <ShieldCheck size={34} />
              </div>

              <span>
                TRUSTED SERVICE MARKETPLACE
              </span>

              <h2>
                Find the right
                <br />
                <b>professional for you.</b>
              </h2>

              <p>
                From home repairs to personal services,
                discover trusted providers near you.
              </p>

              <div className="hero-service-pills">

                <div>
                  <Search size={17} />
                  Find a Service
                </div>

                <div>
                  <ShieldCheck size={17} />
                  Verified Providers
                </div>

                <div>
                  <Star size={17} />
                  Real Reviews
                </div>

              </div>

            </div>


            <div className="hero-banner-decoration">

              <div className="banner-circle circle-one"></div>

              <div className="banner-circle circle-two"></div>

              <div className="banner-card banner-card-one">
                <Check size={17} />
                Service Confirmed
              </div>

              <div className="banner-card banner-card-two">
                <Star size={17} />
                4.9 Rating
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOMER FLOW
        ===================================================== */}

        <section className="customer-flow">

          <div className="flow-list">

            {flow.map(([tag, title, text, Icon]) => (

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
              YOUTUBE VIDEO
          ===================================================== */}

          <div className="demo-card">

            <div className="customer-video-card">

              <div className="video-card-header">

                <div>

                  <span className="video-label">
                    SERVICELY GUIDE
                  </span>

                  <h3>
                    சேவையை எப்படி பெறுவது?
                  </h3>

                </div>

                <div className="video-play-icon">

                  <Play
                    size={20}
                    fill="currentColor"
                  />

                </div>

              </div>


              <div className="customer-video">

                <iframe
                  src="https://www.youtube.com/embed/HQNziXgadPE"
                  title="Servicely Tamil Service Guide"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>


              <div className="video-caption">

                <span>
                  ▶ YouTube
                </span>

                <p>
                  Servicely சேவைகளை எளிதாக பயன்படுத்துவது எப்படி
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST
        ===================================================== */}

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


        {/* =====================================================
            DOWNLOAD APP
        ===================================================== */}

        <section className="customer-download-app">

          <div className="customer-download-content">

            <span className="customer-download-eyebrow">
              SERVICELY  pro APP
            </span>

            <h2>
              Download the <b>Servicely  pro App</b>
            </h2>

            <p>
              Available on Google Play and the App Store.
            </p>

            <div className="customer-app-buttons">

              {/* =================================================
                  GOOGLE PLAY
              ================================================= */}

              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-button"
                aria-label="Get it on Google Play"
              >

                <div className="app-store-icon">

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

                <div className="app-store-text">

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
                className="app-store-button"
                aria-label="Download on the App Store"
              >

                <div className="app-store-icon">

                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                  >
                    <path d="M17.05 12.54C17.03 10.21 18.96 9.08 19.05 9.03C17.95 7.43 16.25 7.21 15.65 7.19C14.22 7.04 12.83 8.04 12.1 8.04C11.35 8.04 10.23 7.2 9.02 7.23C7.46 7.25 6 8.15 5.2 9.55C3.55 12.4 4.79 16.59 5.87 18.89C6.41 20.01 7.67 21.3 8.89 21.25C10.08 21.2 10.52 20.49 11.96 20.49C13.39 20.49 13.79 21.25 15.03 21.22C16.31 21.2 17.44 20.1 17.84 18.97C18.51 17.69 18.92 16.43 18.93 16.37C18.9 16.36 17.08 15.66 17.05 12.54ZM14.71 5.66C15.35 4.86 15.79 3.77 15.67 2.67C14.75 2.71 13.64 3.28 12.97 4.05C12.38 4.72 11.86 5.85 12 6.91C13.03 6.99 14.04 6.43 14.71 5.66Z" />
                  </svg>

                </div>

                <div className="app-store-text">

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


          <div className="customer-download-decoration">

            <div className="download-phone-card">

              <div className="download-phone-screen">

                <ShieldCheck size={36} />

                <strong>
                  Servicely Pro
                </strong>

                <span>
                  Book. Connect. Relax.
                </span>

              </div>

            </div>


            <div className="download-floating-card download-card-one">
              <Check size={17} />
              Service Confirmed
            </div>


            <div className="download-floating-card download-card-two">
              <Star size={17} />
              4.9 Rating
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}