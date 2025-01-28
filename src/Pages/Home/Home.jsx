import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeatureCard from "../../components/FeatureCard";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      imgSrc: "/easy.png",
      altText: "Easy Access",
      title: "Easy Access",
      description: "Access all your financial tools in one place.",
    },
    {
      imgSrc: "/trusted_info.jpeg",
      altText: "Trusted Information",
      title: "Trusted Information",
      description: "Get advice you can count on, backed by data.",
    },
    {
      imgSrc: "/free_icon.jpeg",
      altText: "Free to Use",
      title: "Free to Use",
      description: "Our services are 100% free for you to explore and benefit.",
    },
  ];

  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "This platform is designed to help you make smart financial decisions by providing comparison tools, calculators, and reliable financial advice.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "Yes, our platform is completely free for you to explore and use all the tools and resources we offer.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can start by exploring our tools or visiting the 'Compare' section to find solutions tailored to your needs.",
    },
    {
      question: "Are my personal details secure?",
      answer:
        "Yes, we prioritize your privacy and ensure that your personal details are secure and never shared with third parties.",
    },
  ];

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

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
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
            Your One-Stop Solution for Smart Financial Decisions
          </motion.h1>
          <motion.p variants={slideUp} className="text-base sm:text-lg mb-6">
            Compare, choose, and take control of your financial journey.
          </motion.p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.div variants={zoomIn}>
              <Link
                to="/Compare"
                className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-md hover:shadow-lg font-medium text-sm hover:scale-105 transition-transform"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div variants={zoomIn}>
              <Link
                to="/Blog"
                className="px-6 py-3 border-2 border-white text-white rounded-full shadow-md hover:shadow-lg font-medium text-sm hover:scale-105 transition-transform"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={zoomIn}>
                <FeatureCard
                  imgSrc={feature.imgSrc}
                  altText={feature.altText}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tools Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Explore Our Tools
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              variants={zoomIn}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Credit Card Finder</h3>
              <p className="text-sm mb-4">
                Match with the best credit cards for your needs.
              </p>
              <Link
                to="/Credit_cards"
                className="px-4 py-2 bg-white text-blue-600 rounded-full shadow hover:bg-gray-100 text-sm"
              >
                Explore
              </Link>
            </motion.div>
            <motion.div
              variants={zoomIn}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Loan Comparison</h3>
              <p className="text-sm mb-4">
                Compare and find affordable loan options instantly.
              </p>
              <Link
                to="/Loan"
                className="px-4 py-2 bg-white text-blue-600 rounded-full shadow hover:bg-gray-100 text-sm"
              >
                Compare
              </Link>
            </motion.div>
            <motion.div
              variants={zoomIn}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Insurance Guide</h3>
              <p className="text-sm mb-4">
                Choose the best policies for your future.
              </p>
              <Link
                to="/Insurance"
                className="px-4 py-2 bg-white text-blue-600 rounded-full shadow hover:bg-gray-100 text-sm"
              >
                Get Advice
              </Link>
            </motion.div>
            <motion.div
              variants={zoomIn}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Tax & EMI Calculators</h3>
              <p className="text-sm mb-4">
                Make confident financial decisions with accurate tools.
              </p>
              <Link
                to="/Calculators"
                className="px-4 py-2 bg-white text-blue-600 rounded-full shadow hover:bg-gray-100 text-sm"
              >
                Calculate
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={fadeIn}>
          <motion.h2
            variants={slideUp}
            className="text-3xl font-semibold text-blue-600 mb-8"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={zoomIn}
                className={`p-4 border rounded-lg shadow-sm ${
                  activeIndex === index
                    ? "bg-blue-50 border-blue-500"
                    : "bg-white"
                } hover:scale-105 transition-transform`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-blue-500 font-bold">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Sidebar */}
      <motion.aside
        variants={fadeIn}
        className="bg-white rounded-xl shadow-md p-6 lg:sticky lg:top-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-blue-600">Contact Us</h3>
        <p className="text-sm text-gray-600">
          Got questions? Reach out to us for personalized support.
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

export default Home;