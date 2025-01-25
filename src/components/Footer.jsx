import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best information about financial products, investments, and personal finance tips.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Credit Cards</a></li>
            <li><a href="#">Banking</a></li>
            <li><a href="#">Loans</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@earningsblog.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Earnings Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;