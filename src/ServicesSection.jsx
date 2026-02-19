import React from "react";
import "./ServicesSection.css";

const services = [
  {
    title: "Customized Strategy Development",
    description:
      "Tailored strategies aligned with your business goals, market conditions, and competitive landscape, ensuring sustainable growth and competitive advantage.",
  },
  {
    title: "Operational Efficiency & Optimization",
    description:
      "Streamline processes and optimize efficiency with our expert approach, helping you reduce time and costs.",
  },
  {
    title: "Market Analysis and Insights",
    description:
      "Gain deep market insights and competitive intelligence to inform your strategic decisions and stay ahead.",
  },
  {
    title: "Leadership and Team Building",
    description:
      "Achieve your leadership capabilities and high-performing teams to drive organizational success and growth.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section-premium">
      <h2 className="services-title">
        WHAT WE CAN DO <span className="highlight">FOR YOU?</span>
      </h2>
      <div className="services-container-premium">
        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-row" key={service.title}>
              <div className="service-arrow">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14H20M20 14L15.5 9.5M20 14L15.5 18.5" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.description}</div>
            </div>
          ))}
        </div>
        <div className="services-cta-bar">
          <div className="cta-left">Free consultation</div>
          <div className="cta-right">
            <span className="cta-price">$299</span>
            <button className="cta-btn">Schedule a free call <span className="cta-arrow">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
