import {
  ArrowRight,
  Search,
  Droplets,
  Zap,
  Wind,
  Sparkles,
  Paintbrush,
  Refrigerator,
  Laptop,
  Hammer,
  Tag,
  Clock3,
} from "lucide-react";

import { useState } from "react";

import Footer from "../components/Footer";

import "./Services.css";

const services = [
  [
    "Plumbing",
    "Pipes, leaks & drainage",
    "Professional plumbing services for homes and businesses. From minor leaks to full pipe replacement and drainage solutions.",
    Droplets,
    "Rs. 1,500 – Rs. 15,000",
    "1–3 hours",
  ],
  [
    "Electrical",
    "Wiring, panels & safety",
    "Safe and reliable electrical installation, repair and inspection services.",
    Zap,
    "Rs. 2,000 – Rs. 20,000",
    "1–4 hours",
  ],
  [
    "AC Repair",
    "Installation & servicing",
    "AC installation, servicing, repair and gas recharging by trained professionals.",
    Wind,
    "Rs. 2,500 – Rs. 25,000",
    "1–3 hours",
  ],
  [
    "Cleaning",
    "Home & business cleaning",
    "Professional cleaning for homes, offices and commercial spaces.",
    Sparkles,
    "Rs. 2,000 – Rs. 18,000",
    "2–5 hours",
  ],
  [
    "Painting",
    "Interior & exterior painting",
    "Quality painting services with clean finishing for homes and businesses.",
    Paintbrush,
    "Rs. 8,000 – Rs. 60,000",
    "1–4 days",
  ],
  [
    "Appliance Repair",
    "Repair & maintenance",
    "Reliable repair and maintenance for everyday home appliances.",
    Refrigerator,
    "Rs. 1,500 – Rs. 20,000",
    "1–3 hours",
  ],
  [
    "IT Support",
    "Computer & network help",
    "Setup, troubleshooting and technical support for homes and small businesses.",
    Laptop,
    "Rs. 1,500 – Rs. 15,000",
    "1–3 hours",
  ],
  [
    "Handyman",
    "General home repairs",
    "Practical help for small repairs, installations and maintenance jobs.",
    Hammer,
    "Rs. 1,500 – Rs. 15,000",
    "1–4 hours",
  ],
];

export default function Services() {

  const [q, setQ] = useState("");

  const [selected, setSelected] =
    useState(services[0]);

  const filtered = services.filter(
    (service) =>
      service[0]
        .toLowerCase()
        .includes(q.toLowerCase())
  );

  return (
    <>
      <main className="services">

        <section className="services-head">

          <span className="eyebrow">
            OUR SERVICES
          </span>

          <h1>
            Professional Services,
            <br />
            <b>When You Need Them.</b>
          </h1>

          <p>
            Browse our full catalogue of verified
            professional services.
            <br />
            Book in minutes.
          </p>

          <div className="search">

            <Search />

            <input
              value={q}
              onChange={(e) =>
                setQ(e.target.value)
              }
              placeholder="Search for a service..."
            />

          </div>

        </section>

        <section className="catalog">

          <div>

            <p className="count">
              {filtered.length} services available
            </p>

            <div className="service-grid">

              {filtered.map((service) => {

                const Icon = service[3];

                return (
                  <button
                    key={service[0]}
                    className={
                      selected[0] === service[0]
                        ? "service-tile selected"
                        : "service-tile"
                    }
                    onClick={() =>
                      setSelected(service)
                    }
                  >

                    <span>
                      <Icon />
                    </span>

                    <b>
                      {service[0]}
                    </b>

                    <small>
                      {service[1]}
                    </small>

                    <em>
                      View Details
                      <ArrowRight size={13} />
                    </em>

                  </button>
                );
              })}

            </div>

          </div>

          <aside className="service-detail">

            <span className="detail-icon">

              {(() => {
                const Icon = selected[3];

                return <Icon />;
              })()}

            </span>

            <small>
              SERVICE CATEGORY
            </small>

            <h2>
              {selected[0]}
            </h2>

            <p>
              {selected[2]}
            </p>

            <div className="detail-meta">

              <div>

                <Tag />

                <span>
                  PRICE RANGE
                  <b>
                    {selected[4]}
                  </b>
                </span>

              </div>

              <div>

                <Clock3 />

                <span>
                  AVG. DURATION
                  <b>
                    {selected[5]}
                  </b>
                </span>

              </div>

            </div>

            <button className="primary">

              Book {selected[0]}

              <ArrowRight size={15} />

            </button>

          </aside>

        </section>

      </main>

      <Footer />
    </>
  );
}