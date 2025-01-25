import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-layout">
      {/* Main Content Section */}
      <div className="home-main">
        {/* Hero Section */}
        <section className="hero">
          <h1>Your One-Stop Solution for Smart Financial Decisions</h1>
          <p>Compare, choose, and take control of your financial journey.</p>
          <div className="cta-buttons">
            <Link to="/Compare" className="btn primary-btn">Get Started</Link>
            <Link to="/Blog" className="btn secondary-btn">Learn More</Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="src/assets/easy.png" alt="Easy Access" />
              <h3>Easy Access</h3>
              <p>Access all your financial tools in one place.</p>
            </div>
            <div className="feature-card">
              <img src="src/assets/trusted_info.jpeg" alt="Trusted Information" />
              <h3>Trusted Information</h3>
              <p>Get advice you can count on, backed by data.</p>
            </div>
            <div className="feature-card">
              <img src="src/assets/free_icon.jpeg" alt="Free to Use" />
              <h3>Free to Use</h3>
              <p>Our services are 100% free for you to explore and benefit.</p>
            </div>
          </div>
        </section>

        {/* Popular Tools */}
        <section className="tools">
          <h2>Explore Our Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Credit Card Finder</h3>
              <p>Match with the best credit cards for your needs.</p>
              <Link to="/Credit_cards" className="btn tool-btn">Explore</Link>
            </div>
            <div className="tool-card">
              <h3>Loan Comparison</h3>
              <p>Compare and find affordable loan options instantly.</p>
              <Link to="/Loan" className="btn tool-btn">Compare</Link>
            </div>
            <div className="tool-card">
              <h3>Insurance Guide -</h3>
              <p>Choose the best policies for your future.</p>
              <Link to="/Insurance" className="btn tool-btn">Get Advice</Link>
            </div>
            <div className="tool-card">
              <h3>Tax & EMI Calculators</h3>
              <p>Make confident financial decisions with accurate tools.</p>
              <Link to="/Calculators" className="btn tool-btn">Try Now</Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"This platform helped me find the best credit card in minutes. Highly recommend!"</p>
              <h4>- Sarah W.</h4>
            </div>
            <div className="testimonial-card">
              <p>"Great experience using the loan comparison tool. Saved me a lot of time and money."</p>
              <h4>- John D.</h4>
            </div>
            <div className="testimonial-card">
              <p>"I love the blog section! The tips are practical and easy to follow."</p>
              <h4>- Emily R.</h4>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            <div className="faq-item">
              <h3>How does the credit card comparison work?</h3>
              <p>We use the latest data to match you with credit cards based on your spending habits and preferences.</p>
            </div>
            <div className="faq-item">
              <h3>Are your tools really free?</h3>
              <p>Yes, our tools are 100% free to use. We aim to empower users with financial knowledge.</p>
            </div>
            <div className="faq-item">
              <h3>Can I get personalized recommendations?</h3>
              <p>Yes, create a free account to receive tailored recommendations and updates.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest financial insights and tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn primary-btn">Subscribe</button>
          </form>
        </section>
      </div>

      {/* Right-Side Ad Section */}
      <div className="home-ads">
        <h2>Sponsored Ads</h2>
        <div className="ad-container">
          <p>Google Ad 1</p>
        </div>
        <div className="ad-container">
          <p>Google Ad 2</p>
        </div>
        <div className="ad-container">
          <p>Google Ad 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;