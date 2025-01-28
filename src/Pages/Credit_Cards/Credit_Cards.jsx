import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CreditCards = () => {
  // Mock API Data
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulate fetching credit card data
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Travel Rewards Card",
          imgSrc: "/travel_rewards.png",
          description: "Earn 3x points on travel and dining.",
          annualFee: "$95",
          category: "Travel",
        },
        {
          id: 2,
          name: "Cashback Card",
          imgSrc: "/cashback_card.png",
          description: "Get 5% cashback on groceries and gas.",
          annualFee: "$0",
          category: "Cashback",
        },
        {
          id: 3,
          name: "Premium Business Card",
          imgSrc: "/business_card.png",
          description: "Earn rewards tailored for business owners.",
          annualFee: "$199",
          category: "Business",
        },
        {
          id: 4,
          name: "Student Credit Card",
          imgSrc: "/student_card.png",
          description: "Ideal for students with no credit history.",
          annualFee: "$0",
          category: "Student",
        },
      ];
      setCards(data);
      setFilteredCards(data);
    };
    fetchData();
  }, []);

  // Handle Filtering
  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter((card) => card.category === category));
    }
  };

  return (
    <div className="bg-gray-100 p-6 lg:grid lg:grid-cols-3 gap-8">
      {/* Main Content Section */}
      <div className="lg:col-span-2">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center p-8 rounded-lg shadow-lg mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            Find the Perfect Credit Card for Your Needs
          </h1>
          <p className="text-lg">
            Compare top credit cards based on rewards, fees, and benefits.
          </p>
        </motion.section>

        {/* Filter Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Filter by Category</h2>
          <div className="flex justify-center space-x-4">
            {["All", "Travel", "Cashback", "Business", "Student"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  filter === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <motion.div
                key={card.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <img
                  src={card.imgSrc}
                  alt={card.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <p className="text-gray-800 font-bold mb-4">
                  Annual Fee: {card.annualFee}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-700 text-center col-span-full">
              No cards available in this category.
            </p>
          )}
        </motion.section>
      </div>

      {/* Sidebar (Ad Section) */}
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-xl shadow-md p-6 lg:sticky lg:top-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-blue-600">Special Offer</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get exclusive access to a 0% APR offer for the first 12 months when you apply now.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-full shadow-md hover:bg-blue-600"
        >
          Apply Now
        </motion.button>
      </motion.aside>
    </div>
  );
};

export default CreditCards;