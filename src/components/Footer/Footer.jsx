import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Us Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">About Us</h3>
            <p className="text-sm">
              WealthVerse is dedicated to providing insightful financial advice, investment tips, and personal finance strategies to help individuals achieve financial freedom.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/Credit_Cards" className="text-sm hover:text-blue-300">Credit Cards</Link></li>
              <li><Link to="/Banking" className="text-sm hover:text-blue-300">Banking</Link></li>
              <li><Link to="/Loan" className="text-sm hover:text-blue-300">Loans</Link></li>
              <li><Link to="/Insurance" className="text-sm hover:text-blue-300">Insurance</Link></li>
              <li><Link to="/Terms_Conditions" className="text-sm hover:text-blue-300">Terms & Conditions</Link></li>
              <li><Link to="/Privacy_Policy" className="text-sm hover:text-blue-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@wealthverse.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-xl text-white hover:text-pink-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-xl text-white hover:text-pink-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-xl text-white hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-xl text-white hover:text-pink-500">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© 2025 WealthVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;