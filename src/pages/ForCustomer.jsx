
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
              <ArrowRight size={16} />
            </button>

          </div>


          {/* =====================================================
              HERO BANNER
          ===================================================== */}

          <div className="customer-hero-banner">

            <div className="hero-banner-content">

              <div className="hero-banner-icon">
                <ShieldCheck size={30} />
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
                  <Search size={15} />
                  Find a Service
                </div>

                <div>
                  <ShieldCheck size={15} />
                  Verified Providers
                </div>

                <div>
                  <Star size={15} />
                  Real Reviews
                </div>

              </div>

            </div>

            <div className="hero-banner-decoration">

              <div className="banner-circle circle-one"></div>

              <div className="banner-circle circle-two"></div>

              <div className="banner-card banner-card-one">
                <Check size={15} />
                Service Confirmed
              </div>

              <div className="banner-card banner-card-two">
                <Star size={15} />
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

            {flow.map(
              ([tag, title, text, Icon]) => (

                <article key={title}>

                  <span>
                    <Icon size={20} />
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

                  <ArrowRight size={17} />

                </article>

              )
            )}

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
                  <Play size={18} fill="currentColor" />
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

      </main>

      <Footer />
    </>
  );
}
