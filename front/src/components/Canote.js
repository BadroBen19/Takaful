import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import defaultProfileImage from "../image/profile.jpg";
import "./Canote.css";

const Canote = ({ _id, imageUrl, title, ProfileName, percentage }) => {
  return (
    <Link to={`/donation/${_id}`} className="canote" aria-label={`Go to donation page for ${title}`}>
      <div className="canote-image">
        <img
          src={imageUrl ? `http://localhost:5000/images/${imageUrl}` : defaultProfileImage}
          alt={title}
          onError={(e) => { e.target.src = defaultProfileImage; }}
        />
      </div>
      <div className="canote-content">
        <div className="canote-title">
          <h1>{title}</h1>
        </div>
        <div className="canote-profile">
          <img src={defaultProfileImage} alt={`${ProfileName}'s profile`} className="profile-image" />
          <h2>{ProfileName}</h2>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <style>
        {`
          .progress {
            --percentage: ${percentage}%; /* Pass the percentage value */
          }
        `}
      </style>
    </Link>
  );
};

Canote.propTypes = {
  _id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  ProfileName: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default Canote;
