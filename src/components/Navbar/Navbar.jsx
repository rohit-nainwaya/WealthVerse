import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearchBar = () => {
    const searchBar = document.querySelector('.two');
    if (searchBar) {
      searchBar.classList.toggle('hidden');
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg p-4"
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-17 mr-4" />
          <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
            <li><Link to="/Credit_Cards" className="hover:text-blue-300">Credit Cards</Link></li>
            <li><Link to="/Banking" className="hover:text-blue-300">Banking</Link></li>
            <li><Link to="/Loan" className="hover:text-blue-300">Loan</Link></li>
            <li><Link to="/Insurance" className="hover:text-blue-300">Insurance</Link></li>
            <li><Link to="/Personal_Finance" className="hover:text-blue-300">Personal Finance</Link></li>
            <li><Link to="/Investing" className="hover:text-blue-300">Investing</Link></li>
            <li><Link to="/Small_Business" className="hover:text-blue-300">Small Business</Link></li>
            <li><Link to="/Taxes" className="hover:text-blue-300">Taxes</Link></li>
            <li><Link to="/" className="hover:text-blue-300 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Home</Link></li>
          </ul>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            onClick={toggleSearchBar}
            icon={faMagnifyingGlass}
            className="text-white text-lg cursor-pointer hover:text-blue-300"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:inline px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg"
          >
            Log In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:inline px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg"
          >
            Sign Up
          </motion.button>
          {/* Hamburger Menu */}
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-white text-lg cursor-pointer md:hidden" // Ensures it hides on larger screens
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 mt-4 text-white text-sm font-medium md:hidden"
        >
          <ul className="flex flex-col gap-4">
            <li><Link to="/Credit_Cards" onClick={() => setIsMenuOpen(false)}>Credit Cards</Link></li>
            <li><Link to="/Banking" onClick={() => setIsMenuOpen(false)}>Banking</Link></li>
            <li><Link to="/Loan" onClick={() => setIsMenuOpen(false)}>Loan</Link></li>
            <li><Link to="/Insurance" onClick={() => setIsMenuOpen(false)}>Insurance</Link></li>
            <li><Link to="/Personal_Finance" onClick={() => setIsMenuOpen(false)}>Personal Finance</Link></li>
            <li><Link to="/Investing" onClick={() => setIsMenuOpen(false)}>Investing</Link></li>
            <li><Link to="/Small_Business" onClick={() => setIsMenuOpen(false)}>Small Business</Link></li>
            <li><Link to="/Taxes" onClick={() => setIsMenuOpen(false)}>Taxes</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          </ul>
          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg"
            >
              Log In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg"
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Search Bar */}
      <div className="mt-4 hidden two">
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600"
          >
            Search
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;