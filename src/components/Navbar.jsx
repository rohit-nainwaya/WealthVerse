import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => {
  const toggleSearchBar = () => {
    const searchBar = document.querySelector('.two');
    if (searchBar) {
      searchBar.classList.toggle('hidden');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <img src="src/assets/logo.png" alt="logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/Credit_Cards">Credit Cards</Link></li>
                <li><Link to="/Banking">Banking</Link></li>
                <li><Link to="/Loan">Loan</Link></li>
                <li><Link to="/Insurance">Insurance</Link></li>
                <li><Link to="/Personal_Finance">Personal Finance</Link></li>
                <li><Link to="/Investing">Investing</Link></li>
                <li><Link to="/Small_Business">Small Business</Link></li>
                <li><Link to="/Taxes">Taxes</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
          </div>
          <div className="action-section">
            <FontAwesomeIcon
              onClick={toggleSearchBar}
              icon={faMagnifyingGlass}
              className="search-icon"
            />
            <button className="login-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
        <div className="search-bar hidden two">
          <input
            type="search"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;