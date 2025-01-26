import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Financial Platform</h1>
      <p>This platform offers comprehensive tools and resources for financial products and research.</p>

      <div className="home-section">
        <h2>Contacts</h2>
        <p>For inquiries, please contact us at:</p>
        <ul>
          <li>Email: support@financialplatform.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Finance Street, Money City, Wealthland</li>
        </ul>
      </div>

      <div className="home-section">
        <h2>Disclaimers</h2>
        <p>
          All financial products are subject to market risk. Please read the offer documents
          carefully before investing. Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  );
}

export default Home;
