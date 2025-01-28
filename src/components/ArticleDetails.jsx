import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ArticleDetails = () => {
  const { articleId } = useParams(); // Get article ID from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=finance&apiKey=a2f84585b43743f4a3e5076e232e370b`
        );
        // Find the article that matches the ID
        const articleDetails = response.data.articles.find(
          (item) => item.url === articleId
        );
        setArticle(articleDetails);
        setLoading(false);
      } catch (err) {
        setError("Failed to load article details.");
        setLoading(false);
      }
    };
    fetchArticleDetails();
  }, [articleId]);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6" initial="hidden" animate="visible" variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } }
    }}>
      {/* Main Content Section */}
      <motion.div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg" variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
      }}>
        {/* Article Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{article.title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          <span>Published on {new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>

        {/* Article Image */}
        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img
            src={article.urlToImage || "/default-image.jpg"}
            alt={article.title}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div className="text-lg text-gray-700 mb-6" variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}>
          {/* Check if there's content and show it, else show a placeholder */}
          {article.content ? (
            <p>{article.content}</p>
          ) : (
            <p className="text-gray-600">Unfortunately, the full content is unavailable. Please read the full article by visiting the link below.</p>
          )}
        </motion.div>

        {/* External Link */}
        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg text-sm font-medium hover:bg-blue-600 hover:scale-105 transition-transform"
          >
            Visit Full Article
          </a>
        </motion.div>
      </motion.div>

      {/* Sidebar with Ads */}
      <motion.div className="lg:block bg-white rounded-lg shadow-lg p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Advertisement</h3>
        <motion.div
  className="bg-gray-200 p-6 rounded-lg mb-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <p className="text-center text-gray-600 mb-4">
  Moviezilla is a popular platform for discovering and streaming the latest movies and TV shows in high quality.
  </p>
  <a href="https://moviezilla.in/" target="_blank" rel="noopener noreferrer">
    <img
      src="/mvz_logo.webp" // Add the correct path to the Moviezilla logo
      alt="Moviezilla Logo"
      className="w-full h-48 object-contain rounded-lg"
    />
  </a>
  <div className="text-center mt-6">
    <a
      href="https://moviezilla.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition-all"
    >
      Visit Moviezilla
    </a>
  </div>
</motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ArticleDetails;
