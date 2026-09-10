import { Link } from 'react-router-dom'
import './HowItWorks.css'

function HowItWorks() {
  const processSteps = [
    {
      no: '01',
      title: 'Choose a Service',
      desc: 'Browse through our wide range of professional categories. Whether you need a plumber, electrician, or AC mechanic, we have experts for everything.'
    },
    {
      no: '02',
      title: 'Find a Professional',
      desc: 'Our system instantly connects you with top-rated, background-checked professionals near you. You can review their profiles and ratings.'
    },
    {
      no: '03',
      title: 'Book a Service',
      desc: 'Tell us exactly what you need. Select your location, preferred time, and provide a brief description of the job. It takes less than a minute.'
    },
    {
      no: '04',
      title: 'Get the Work Done',
      desc: 'The professional arrives at your doorstep on time equipped with the right tools. Sit back and relax while they get the job done perfectly.'
    },
    {
      no: '05',
      title: 'Pay Securely',
      desc: 'Once the job is completed to your satisfaction, pay securely through the app. Multiple payment options available for your convenience.'
    },
    {
      no: '06',
      title: 'Rate Your Experience',
      desc: 'Don\'t forget to leave a review and rating. Your feedback helps others find the best professionals and improves our community.'
    }
  ]

  return (
    <div className="hiw-page">
      {/* HERO SECTION */}
      <section className="hiw-hero">
        <div className="container">
          <span className="hero-badge">💡 HOW IT WORKS</span>
          <h1>How Servicely <span className="highlight">Works</span></h1>
          <p>Getting your home or business services done is now easier than ever. Follow these 6 simple steps to get connected with expert professionals.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Book a Service →</Link>
            <Link to="/for-providers" className="btn-secondary">Become a Provider</Link>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="hiw-steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR PROCESS</span>
            <h2>How Servicely Works</h2>
            <p>Follow these simple steps to get your service done hassle-free.</p>
          </div>
          <div className="steps-flow">
            {processSteps.map((step, i) => (
              <div className="flow-item" key={step.no}>
                <div className="flow-circle">{step.no}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < processSteps.length - 1 && <div className="flow-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="hiw-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users who trust Servicely for their daily needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Book a Service →</Link>
              <Link to="/for-providers" className="btn-outline">Become a Provider</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
