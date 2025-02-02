import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>AlgoRisk Asset Management</h1>
        <p>Welcome to Structured Products Hub – Explore innovative investment solutions tailored to your needs.</p>
        
        <h2 className="explore-header">Explore Products</h2>
        <Link to="/products">
          <button className="explore-button">Explore Products</button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Customizable Products</h3>
            <p>Design investment solutions that match your risk-return profile.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Payoff Charts</h3>
            <p>Visualize product performance under different market conditions.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Insights</h3>
            <p>Stay ahead with research-backed investment strategies.</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@structuredproducts.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Investment Ave, Finance City, USA</p>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer-section">
        <p>
          <strong>Disclaimer:</strong> Investments in structured products are subject to market risks. 
          Please read all related documents carefully before investing.
        </p>
      </div>
    </div>
  );
}

export default Home;
