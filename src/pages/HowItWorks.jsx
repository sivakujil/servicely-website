import {
  Search,
  ClipboardCheck,
  Users,
  CheckCircle2,
  Wrench,
  CreditCard,
  Star,
  ArrowRight,
} from "lucide-react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Search size={26} />,
      title: "Choose a Service",
      text: "Browse the service you need from our wide range of trusted services.",
    },
    {
      number: "02",
      icon: <ClipboardCheck size={26} />,
      title: "Create a Request",
      text: "Tell us what you need, choose your preferred date and provide your location.",
    },
    {
      number: "03",
      icon: <Users size={26} />,
      title: "Find a Provider",
      text: "We connect your request with verified service professionals near you.",
    },
    {
      number: "04",
      icon: <CheckCircle2 size={26} />,
      title: "Provider Accepts",
      text: "A suitable provider reviews your request and accepts the job.",
    },
    {
      number: "05",
      icon: <Wrench size={26} />,
      title: "Service Starts",
      text: "The provider arrives at the scheduled time and starts the service.",
    },
    {
      number: "06",
      icon: <CheckCircle2 size={26} />,
      title: "Service Completed",
      text: "Once the work is completed, confirm the service in the app.",
    },
    {
      number: "07",
      icon: <CreditCard size={26} />,
      title: "Payment & Review",
      text: "Complete your payment securely and share your experience with a review.",
    },
  ];

  return (
    <main className="how-page">

      {/* HERO */}

      <section className="how-hero">

        <div className="how-container">

          <div className="how-hero-content">

            <div className="how-badge">
              <CheckCircle2 size={16} />
              SIMPLE & TRANSPARENT
            </div>

            <h1>
              How
              <span>Servicely Works</span>
            </h1>

            <p>
              Getting the service you need has never been easier.
              From finding the right professional to completing your
              payment, everything happens in a few simple steps.
            </p>

          </div>

          <div className="hero-flow">

            <div className="flow-card">
              <div className="flow-number">01</div>

              <div className="flow-icon">
                <Search size={22} />
              </div>

              <strong>Choose</strong>
              <span>Your Service</span>
            </div>

            <ArrowRight className="flow-arrow" size={22} />

            <div className="flow-card">
              <div className="flow-number">02</div>

              <div className="flow-icon">
                <ClipboardCheck size={22} />
              </div>

              <strong>Create</strong>
              <span>Your Request</span>
            </div>

            <ArrowRight className="flow-arrow" size={22} />

            <div className="flow-card">
              <div className="flow-number">03</div>

              <div className="flow-icon">
                <Users size={22} />
              </div>

              <strong>Find</strong>
              <span>A Provider</span>
            </div>

          </div>

        </div>

      </section>

      {/* STEPS */}

      <section className="steps-section">

        <div className="how-container">

          <div className="section-heading">

            <span>THE PROCESS</span>

            <h2>
              From Request to
              <br />
              Completed Service
            </h2>

            <p>
              Follow these simple steps to get your job done
              quickly and professionally.
            </p>

          </div>

          <div className="steps-list">

            {steps.map((step, index) => (

              <div className="step-row" key={index}>

                <div className="step-number">
                  {step.number}
                </div>

                <div className={`step-icon step-color-${index}`}>
                  {step.icon}
                </div>

                <div className="step-content">

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </div>

                {index !== steps.length - 1 && (
                  <div className="step-line"></div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CUSTOMER / PROVIDER */}

      <section className="how-audience">

        <div className="how-container">

          <div className="section-heading">

            <span>FOR EVERYONE</span>

            <h2>
              One Platform.
              <br />
              Two Simple Experiences.
            </h2>

            <p>
              Servicely makes it simple whether you need a service
              or want to provide one.
            </p>

          </div>

          <div className="experience-grid">

            {/* CUSTOMER */}

            <div className="experience-card customer">

              <div className="experience-top">

                <div className="experience-icon">
                  <Users size={24} />
                </div>

                <span>FOR CUSTOMERS</span>

              </div>

              <h3>
                Get your service
                <br />
                done with confidence.
              </h3>

              <p>
                Find trusted professionals, create service requests,
                track your jobs and share feedback.
              </p>

              <div className="experience-list">

                <div>
                  <CheckCircle2 size={18} />
                  Verified professionals
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Easy service requests
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Secure payments
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Ratings & reviews
                </div>

              </div>

              <button>
                Find a Service
                <ArrowRight size={18} />
              </button>

            </div>

            {/* PROVIDER */}

            <div className="experience-card provider">

              <div className="experience-top">

                <div className="experience-icon">
                  <Wrench size={24} />
                </div>

                <span>FOR PROVIDERS</span>

              </div>

              <h3>
                Grow your business
                <br />
                with Servicely.
              </h3>

              <p>
                Receive new job requests, manage your services,
                complete jobs and build your reputation.
              </p>

              <div className="experience-list">

                <div>
                  <CheckCircle2 size={18} />
                  Receive service requests
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Accept jobs easily
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Manage your work
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  Build your reputation
                </div>

              </div>

              <button>
                Become a Provider
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST */}

      <section className="trust-section">

        <div className="how-container">

          <div className="trust-box">

            <div className="trust-icon">
              <Star size={25} />
            </div>

            <div>

              <span>WHY SERVICELY?</span>

              <h2>
                Built around trust,
                <br />
                simplicity and convenience.
              </h2>

            </div>

            <div className="trust-points">

              <div>
                <CheckCircle2 size={18} />
                <span>Verified Providers</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Transparent Process</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Secure Payments</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Customer Feedback</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default HowItWorks;