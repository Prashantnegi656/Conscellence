import { useState } from 'react';
import './App.css';
import ServicesSection from './ServicesSection';

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "What services does Conscience offer?",
      answer: "We offer a range of services including Customized Strategy Development, Operational Efficiency Optimization, Market Analysis and Insights, and Leadership Development. Each offering is tailored to help develop results in just specific niches."
    },
    {
      question: "How can Conscience help my business grow?",
      answer: "We help businesses identify growth opportunities, streamline operations, and develop strategic plans that drive sustainable growth."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across multiple industries including technology, finance, healthcare, manufacturing, and retail sectors."
    },
    {
      question: "Are your services customized to my business needs?",
      answer: "Yes, all our services are fully customized based on your specific business challenges and goals."
    },
    {
      question: "What is the typical duration of a consulting project?",
      answer: "Project duration varies based on scope and complexity, typically ranging from 3-12 months."
    },
    {
      question: "How do you ensure confidentiality of our business information?",
      answer: "We maintain strict confidentiality agreements and follow industry-best security practices."
    }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        {/* Navigation INSIDE Hero */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <span>
                <img src="/Logo.png" alt="logo" className="logo-icon" />
              </span>
              CONSCELLENCE
            </div>

            <ul className="nav-menu">
              <li><a href="#home">SERVICES</a></li>
              <li><a href="#services">ABOUT US</a></li>
              <li><a href="#contact">CONTACT US</a></li>
            </ul>

            <div className="nav-phone">
              <a href="tel:+18877695401">+(887) 769-5401</a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Unlock Your Potential <br/>
              <span className="title-secondary">
                with Strategic <span className="title-blue">Consulting</span>
              </span>
            </h1>

            <p className="hero-description">
              Guiding Your Success Journey Through Expertise and Innovation
            </p>

            <div className="hero-form">
              <input 
                type="email" 
                placeholder="✉️ Your name and email" 
                className="hero-input"
              />
              <button className="hero-button">
                GET STARTED →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stone Image Section */}
      <section className="hero1">
        <div className="hero-image">
          <img src="/Stone.png" alt="Stone" className="hero-img" />
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <h2 className="section-title">Are You Running Into These Problems?</h2>
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-number">01</div>
            <h3>Stagnant Growth?</h3>
            <p>Unleash your business's true potential with our strategic solutions.</p>
          </div>
          <div className="problem-card">
            <div className="problem-number">02</div>
            <h3>Operational Inefficiencies?</h3>
            <p>Streamline processes and optimize operations with our consulting expertise.</p>
          </div>
          <div className="problem-card">
            <div className="problem-number">03</div>
            <h3>Market Challenges?</h3>
            <p>Customize market challenges and positioning for your business for success.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <section className="about-section" id="services">
        <div className="about-panel">
          <div className="about-content">
            <h2 className="about-title">ABOUT <span className="about-us-blue">US</span></h2>
            <p className="about-text">
              At Conscellence, we believe that sustainable growth comes from clarity, strategy, and execution. We partner with forward-thinking organizations to unlock opportunities, streamline operations, and build resilient business models that thrive in evolving markets.
            </p>
            <p className="about-text">
              Our consulting approach blends deep industry expertise with innovative thinking, ensuring measurable impact and long-term value creation.
            </p>
          </div>

          <div className="about-image-wrap">
            <img src="/Stone.png" alt="Stone" className="about-stone" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years<br/>Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">120+</div>
            <div className="stat-label">Projects<br/>Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Client<br/>Retention</div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section" id="approach">
        <div className="approach-container">
          <div className="approach-hero-image">
            <img src="/Stone.png" alt="Stone" className="approach-hero-img" />
          </div>
          
          <div className="approach-content">
            <h2>OUR<br/>APPROACH</h2>
            <p className="approach-text">
              Discover our unique consulting methodology. With a hands-on approach combining deep expertise, innovative thinking and results-oriented strategies, we partner with you every step of the way to unlock your business's true potential.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="success-stories-container">
          <h2 className="stories-title">
            <span className="stories-label">CLIENT</span>
            <div className="stories-row">
              <span className="stories-success">SUCCESS </span>
              <span className="stories-outline">STORIES</span>
            </div>
          </h2>
          <div className="stories-grid">
            <div className="story-card featured">
              <div className="story-badge">★</div>
              <p>Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities. Thanks to their expertise, we achieved record-breaking sales last quarter.</p>
              <div className="story-credit">Michael Thompson, Founder of EcoGreen Solutions</div>
            </div>
            <div className="story-card">
              <div className="story-badge">★</div>
              <p>Conscellence transformed our business operations with their customized strategies. Their team identified key areas for improvement and provided actionable solutions that significantly boosted our efficiency and growth. We couldn't be happier with the results.</p>
              <div className="story-credit">Emma Rodriguez, CEO of TrendTech Innovations</div>
            </div>
            <div className="story-card">
              <div className="story-badge">★</div>
              <p>The leadership training and team-building programs provided by Conscellence have been invaluable. Our team is now more cohesive and motivated, and our leaders are better equipped to drive the company forward. Cons truly understands our needs and delivers exceptional results.</p>
              <div className="story-credit">Lisa Nguyen, COO of HealthyBites Inc.</div>
            </div>
          </div>
          <div className="stories-navigation">
            <button className="nav-dot active"></button>
            <button className="nav-dot"></button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="faqs-container">
          <h2 className="section-title">FAQs</h2>
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${expandedFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                {expandedFAQ === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          
          {/* LEFT SIDE: Arrow + Title + Subtitle + Social */}
          <div className="contact-left">
            
            {/* Arrow and Title side by side */}
            <div className="contact-header">
              <div className="left-arrow"> 
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6L4 12L10 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="contact-title">CONTACT<br/>US TODAY</h2>
            </div>

            <p className="contact-subtitle">
              Contact us today to schedule a consultation and discover how we can help your business thrive.
            </p>

            <div className="social-row">
              <a href="#" className="social-circle">f</a>
              <a href="#" className="social-circle">ig</a>
              <a href="#" className="social-circle">in</a>
              <a href="#" className="social-circle">yt</a>
            </div>
          </div>

          {/* RIGHT SIDE: Consultation Card */}
          <div className="contact-right">
            <div className="consult-card">
              
              {/* Email Form */}
              <div className="consult-top">
                <h3 className="consult-title">Get a Free consultation</h3>
                <div className="consult-form">
                  <div className="email-pill">
                    <span className="mail-icon">✉️</span>
                    <input 
                      type="email" 
                      placeholder="Enter your email to get started" 
                      className="pill-input" 
                    />
                  </div>
                  <button className="start-btn">
                    GET STARTED 
                    <span className="start-arrow">↗</span>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="consult-contacts">
                <div className="contact-row">
                  <div className="circle-white">📞</div>
                  <div className="contact-text">(987)-749-5403</div>
                </div>
                <div className="contact-row">
                  <div className="circle-white">✉️</div>
                  <div className="contact-text">info88@conscellence.com</div>
                </div>
                <div className="contact-row">
                  <div className="circle-white">📍</div>
                  <div className="contact-text">123 Business Road, Suite 456, City, State, ZIP Code</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>
              <img src="/Logo.png" alt="logo" className="logo-icon" />
            </span>
            CONSCELLENCE
          </div>
          <div className="footer-links">
            {/* Links can go here */}
          </div>
          <div className="footer-text">
            <p>All rights reserved © 2024 Consulting Company. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App