import {
  ArrowRight,
  Search,
  CheckCircle2,
  Wrench,
  Zap,
  Wind,
  Sparkles,
  Paintbrush,
  Refrigerator,
  Users,
  ClipboardCheck,
  BriefcaseBusiness,
  Check,
  Star,
} from "lucide-react";
import "./Home.css";

function Home() {
  const services = [
    {
      icon: <Wrench size={24} />,
      title: "Plumbing",
      text: "Professional plumbing services for your home.",
      className: "blue",
    },
    {
      icon: <Zap size={24} />,
      title: "Electrical",
      text: "Reliable electrical experts whenever you need.",
      className: "yellow",
    },
    {
      icon: <Wind size={24} />,
      title: "AC Repair",
      text: "Fast and professional AC repair services.",
      className: "cyan",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Cleaning",
      text: "Trusted cleaning professionals for every space.",
      className: "green",
    },
    {
      icon: <Paintbrush size={24} />,
      title: "Painting",
      text: "Interior, exterior and texture painting services.",
      className: "purple",
    },
    {
      icon: <Refrigerator size={24} />,
      title: "Appliance Repair",
      text: "Repair washing machines, fridges, ovens and more.",
      className: "red",
    },
  ];

  const steps = [
    {
      icon: <Search size={20} />,
      title: "Choose a Service",
      className: "blue",
    },
    {
      icon: <ClipboardCheck size={20} />,
      title: "Create a Request",
      className: "yellow",
    },
    {
      icon: <Users size={20} />,
      title: "Find a Service Provider",
      className: "cyan",
    },
    {
      icon: <Check size={20} />,
      title: "Provider Accepts",
      className: "green",
    },
    {
      icon: <Wrench size={20} />,
      title: "Service Starts",
      className: "purple",
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Service Completed",
      className: "blue",
    },
    {
      icon: <Star size={20} />,
      title: "Payment & Review",
      className: "yellow",
    },
  ];

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero">
        <div className="home-container hero-grid">

          <div className="hero-content">

            <div className="hero-badge">
              <CheckCircle2 size={16} />
              TRUSTED BY 12,000+ CUSTOMERS
            </div>

            <h1>
              Your Service.
              <span>Just One Click</span>
              Away.
            </h1>

            <p>
              Find trusted professionals and get your work done easily.
              Book in minutes, track in real-time, pay securely.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Book a Service
                <ArrowRight size={20} />
              </button>

              <button className="secondary-btn">
                Become a Provider
              </button>
            </div>

            <div className="hero-stats">

              <div>
                <strong>12K+</strong>
                <span>Happy Customers</span>
              </div>

              <div>
                <strong>850+</strong>
                <span>Verified Providers</span>
              </div>

              <div>
                <strong>4.9★</strong>
                <span>Average Rating</span>
              </div>

            </div>

          </div>

          {/* ================= PHONE MOCKUP ================= */}

          <div className="phone-area">

            <div className="phone-glow"></div>

            <div className="phone">

              <div className="phone-top">
                <span>9:41</span>
                <div className="dynamic-island"></div>
                <span>●●</span>
              </div>

              <div className="phone-header">
                <div>
                  <small>Good morning 👋</small>
                  <h4>Book a Service</h4>
                </div>

                <div className="notification">
                  ♧
                </div>
              </div>

              <div className="phone-search">
                <Search size={14} />
                <span>Search services...</span>
              </div>

              <div className="book-card">
                <div>
                  <small>Need help?</small>
                  <strong>Book a Service</strong>
                  <button>
                    Book <ArrowRight size={11} />
                  </button>
                </div>

                <div className="book-circle"></div>
              </div>

              <h5 className="phone-title">Services</h5>

              <div className="phone-services">

                <div>
                  <span>♢</span>
                  <small>Plumbing</small>
                </div>

                <div>
                  <span>ϟ</span>
                  <small>Electrical</small>
                </div>

                <div>
                  <span>≋</span>
                  <small>AC Repair</small>
                </div>

                <div>
                  <span>⌁</span>
                  <small>Cleaning</small>
                </div>

                <div>
                  <span>✧</span>
                  <small>Painting</small>
                </div>

                <div>
                  <span>⊞</span>
                  <small>Appliance</small>
                </div>

              </div>

              <div className="phone-job">
                <div>
                  <strong>AC Repair Service</strong>
                  <small>Today · 2:00 PM</small>
                </div>

                <span>In Progress</span>
              </div>

            </div>

            {/* Floating Jobs Card */}

            <div className="jobs-floating-card">
              <div className="jobs-check">
                <Check size={20} />
              </div>

              <div>
                <strong>4,200+</strong>
                <span>Jobs Done</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <div className="home-container">

          <div className="section-heading">
            <span>OUR SERVICES</span>

            <h2>
              Everything You Need,
              <br />
              In One Place
            </h2>

            <p>
              Whether you need a service or provide one,
              Servicely has you covered.
            </p>
          </div>

          <div className="services-grid">

            {services.map((service, index) => (
              <div className="service-card" key={index}>

                <div className={`service-icon ${service.className}`}>
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <button>
                  Book Now
                  <ArrowRight size={17} />
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SIMPLE PROCESS ================= */}

      <section className="process-section">

        <div className="home-container">

          <div className="section-heading">
            <span>SIMPLE PROCESS</span>

            <h2>How Servicely Works</h2>

            <p>
              From booking to completion, we make every step simple.
            </p>
          </div>

          <div className="process-grid">

            {steps.map((step, index) => (
              <div className="process-item" key={index}>

                <div className={`process-icon ${step.className}`}>
                  {step.icon}
                </div>

                <strong>{step.title}</strong>

                {index !== steps.length - 1 && (
                  <div className="process-line"></div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CUSTOMER / PROVIDER ================= */}

      <section className="audience-section">

        <div className="home-container">

          <div className="audience-heading">
            <span>BUILT FOR EVERYONE</span>

            <h2>
              Simple for Customers.
              <br />
              Powerful for Providers.
            </h2>

            <p>
              Whether you need a service or provide one,
              Servicely has you covered.
            </p>
          </div>

          <div className="audience-grid">

            <div className="customer-card">

              <div className="audience-icon">
                <Users size={25} />
              </div>

              <span>FOR CUSTOMERS</span>

              <h3>Easy Booking</h3>

              <div className="audience-list">

                <div>
                  <Search size={18} />
                  <section>
                    <strong>Select Service</strong>
                    <p>Browse verified providers near you</p>
                  </section>
                </div>

                <div>
                  <ClipboardCheck size={18} />
                  <section>
                    <strong>Create Request</strong>
                    <p>Schedule at your preferred time</p>
                  </section>
                </div>

                <div>
                  <Wrench size={18} />
                  <section>
                    <strong>Service</strong>
                    <p>Professional arrives and works</p>
                  </section>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <section>
                    <strong>Complete</strong>
                    <p>Confirm satisfaction before pay</p>
                  </section>
                </div>

                <div>
                  <Star size={18} />
                  <section>
                    <strong>Feedback</strong>
                    <p>Rate your experience & help others</p>
                  </section>
                </div>

              </div>

            </div>

            <div className="provider-card">

              <div className="audience-icon provider-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <span>FOR PROVIDERS</span>

              <h3>Grow Your Business</h3>

              <div className="provider-list">

                <div>
                  <BriefcaseBusiness size={18} />
                  <section>
                    <strong>Receive Jobs</strong>
                    <p>Get job requests from customers</p>
                  </section>
                </div>

                <div>
                  <Check size={18} />
                  <section>
                    <strong>Accept</strong>
                    <p>Review and accept with one tap</p>
                  </section>
                </div>

                <div>
                  <Wrench size={18} />
                  <section>
                    <strong>Complete</strong>
                    <p>Do the work, mark done in-app</p>
                  </section>
                </div>

                <div>
                  <BriefcaseBusiness size={18} />
                  <section>
                    <strong>Earn</strong>
                    <p>Get paid instantly, track income</p>
                  </section>
                </div>

              </div>

              <div className="provider-bottom">
                <div>
                  <strong>Rs. 85K+</strong>
                  <span>Avg. monthly earn</span>
                </div>

                <div>
                  <strong>95%</strong>
                  <span>Job acceptance rate</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="home-container">

          <div className="cta-box">

            <div>
              <span>READY TO GET STARTED?</span>

              <h2>
                Your next service
                <br />
                is just one click away.
              </h2>

              <p>
                Connect with trusted professionals and get your
                work done quickly and securely.
              </p>
            </div>

            <button>
              Get Started
              <ArrowRight size={19} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;