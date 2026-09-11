import {
  ArrowRight,
  Wrench,
  Zap,
  Wind,
  Sparkles,
  Paintbrush,
  Refrigerator,
  CheckCircle2,
} from "lucide-react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: <Wrench size={30} />,
      title: "Plumbing",
      description:
        "Professional plumbing services for leaks, repairs, installations and maintenance.",
      features: [
        "Pipe & leak repair",
        "Tap & sink repair",
        "Bathroom plumbing",
        "Water line services",
      ],
      className: "blue",
    },
    {
      icon: <Zap size={30} />,
      title: "Electrical",
      description:
        "Reliable electrical professionals for home and business electrical needs.",
      features: [
        "Wiring & rewiring",
        "Switch & socket repair",
        "Electrical installation",
        "Fault troubleshooting",
      ],
      className: "yellow",
    },
    {
      icon: <Wind size={30} />,
      title: "AC Repair",
      description:
        "Fast and professional air conditioning repair, servicing and maintenance.",
      features: [
        "AC repair",
        "AC servicing",
        "Gas refilling",
        "AC installation",
      ],
      className: "purple",
    },
    {
      icon: <Sparkles size={30} />,
      title: "Cleaning",
      description:
        "Trusted cleaning professionals to keep your home and workplace fresh.",
      features: [
        "Home cleaning",
        "Office cleaning",
        "Deep cleaning",
        "Move-in cleaning",
      ],
      className: "green",
    },
    {
      icon: <Paintbrush size={30} />,
      title: "Painting",
      description:
        "Give your home or business a fresh look with professional painting services.",
      features: [
        "Interior painting",
        "Exterior painting",
        "Wall preparation",
        "Color consultation",
      ],
      className: "orange",
    },
    {
      icon: <Refrigerator size={30} />,
      title: "Appliance Repair",
      description:
        "Expert repair services for your essential household appliances.",
      features: [
        "Refrigerator repair",
        "Washing machine repair",
        "Oven & cooker repair",
        "Other appliance repairs",
      ],
      className: "pink",
    },
  ];

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-container">
          <span className="services-badge">OUR SERVICES</span>

          <h1>
            Professional Services.
            <span> Just When You Need Them.</span>
          </h1>

          <p>
            Find trusted professionals for your home and business needs.
            Choose a service, create a request, and get the job done with
            Servicely.
          </p>

          <div className="services-hero-points">
            <div>
              <CheckCircle2 size={18} />
              Verified Professionals
            </div>

            <div>
              <CheckCircle2 size={18} />
              Easy Booking
            </div>

            <div>
              <CheckCircle2 size={18} />
              Secure Payment
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="services-container">
          <div className="services-heading">
            <span>WHAT WE OFFER</span>

            <h2>
              Everything You Need,
              <br />
              In One Place
            </h2>

            <p>
              From everyday repairs to urgent service needs, connect with
              reliable professionals through Servicely.
            </p>
          </div>

          <div className="services-list-grid">
            {services.map((service, index) => (
              <article className="service-detail-card" key={index}>
                <div className={`service-detail-icon ${service.className}`}>
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="service-book-btn">
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY SERVICE */}
      <section className="emergency-section">
        <div className="services-container">
          <div className="emergency-content">
            <span>NEED HELP NOW?</span>

            <h2>
              On-Demand & Emergency
              <br />
              Services
            </h2>

            <p>
              Some problems cannot wait. Create a service request and connect
              with available professionals when you need help quickly.
            </p>

            <button className="emergency-btn">
              Get Started
              <ArrowRight size={19} />
            </button>
          </div>

          <div className="emergency-card">
            <div className="emergency-card-icon">
              <Wrench size={28} />
            </div>

            <h3>Quick Service Request</h3>

            <p>
              Tell us what you need, choose a suitable time and let Servicely
              connect you with the right professional.
            </p>

            <div className="emergency-check">
              <CheckCircle2 size={18} />
              <span>Fast professional response</span>
            </div>

            <div className="emergency-check">
              <CheckCircle2 size={18} />
              <span>Verified service providers</span>
            </div>

            <div className="emergency-check">
              <CheckCircle2 size={18} />
              <span>Simple and secure process</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-container services-cta-inner">
          <div>
            <span>READY TO GET STARTED?</span>

            <h2>Find the Right Professional Today</h2>

            <p>
              Choose a service and create your request in just a few steps.
            </p>
          </div>

          <button>
            Book a Service
            <ArrowRight size={19} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Services;