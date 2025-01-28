// FeatureCard.jsx
import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      {/* Image */}
      <img
        src={imgSrc}
        alt={altText}
        className="h-40 object-contain mb-4 rounded-lg"
      />
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {/* Description */}
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;