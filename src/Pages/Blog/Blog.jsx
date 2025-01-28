import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch financial news from News API using Axios
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=finance&apiKey=a2f84585b43743f4a3e5076e232e370b`
        );
        console.log(response.data);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to load news articles. Please try again later.");
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid lg:grid-cols-4 gap-8 p-4 sm:p-8"
    >
      {/* Main Content Section */}
      <div className="lg:col-span-3 space-y-12">
        {/* Hero Section */}
        <motion.section
          variants={fadeIn}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center px-4 sm:px-8 py-6 sm:py-8 rounded-2xl shadow-lg"
        >
          <motion.h1
            variants={slideUp}
            className="text-2xl sm:text-4xl font-bold mb-4"
          >
            Welcome to Our Blog
          </motion.h1>
          <motion.p variants={slideUp} className="text-base sm:text-lg mb-6">
            Stay updated with expert financial advice, tips, and guides.
          </motion.p>
        </motion.section>

        {/* Expert Financial Advice Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Expert Financial Advice
          </motion.h2>
          <p className="text-lg text-gray-600 mb-4">
            Discover expert financial advice tailored to help you make informed decisions about your investments, savings, and spending habits.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4">1. How to Build Wealth</h3>
            <p className="text-gray-600">
              Building wealth requires long-term planning and discipline. Start by investing in assets that grow over time, such as stocks, real estate, and mutual funds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4">2. Diversifying Your Portfolio</h3>
            <p className="text-gray-600">
              Diversifying your portfolio is crucial to reduce risk. Invest in different asset classes, including stocks, bonds, and alternative investments, to ensure stability.
            </p>
          </div>
        </motion.section>

        {/* Financial Tips Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Financial Tips
          </motion.h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
            <li>Start saving early to take advantage of compound interest.</li>
            <li>Review your budget regularly and adjust as necessary.</li>
            <li>Consider automatic savings to make saving easier.</li>
            <li>Invest in tax-efficient accounts like IRAs and 401(k)s.</li>
          </ul>
        </motion.section>

        {/* Guides Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Financial Guides
          </motion.h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4">Understanding Credit Scores</h3>
            <p className="text-gray-600">
              Your credit score plays a critical role in determining your financial future. Learn how credit scores work, how to improve them, and how they affect your ability to borrow money.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4">Investing for Beginners</h3>
            <p className="text-gray-600">
              Starting your investment journey can seem intimidating, but it doesn’t have to be. Our guide will help you understand the basics of investing and get you on the path to financial growth.
            </p>
          </div>
        </motion.section>

        {/* Financial News Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Latest Financial News
          </motion.h2>
          {loading ? (
            <p className="text-center text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={article.urlToImage || "/default-image.jpg"}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <Link
                      to={`/article/${encodeURIComponent(article.url)}`}
                      className="text-blue-500 font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* Sidebar */}
      <motion.aside
        variants={fadeIn}
        className="bg-white rounded-xl shadow-md p-6 lg:sticky lg:top-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-blue-600">Contact Us</h3>
        <p className="text-sm text-gray-600">
          Have questions or need personalized advice? Reach out to us for support.
        </p>
        <Link
          to="/Contact"
          className="block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow text-sm text-center hover:bg-blue-600 hover:scale-105 transition-transform"
        >
          Contact Now
        </Link>
      </motion.aside>
    </motion.div>
  );
};

export default Blog;