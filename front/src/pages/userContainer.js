import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./usercontainer.css";

const UserContainer = ({ title, username, reports }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setShowConfirmation(false);
  };

  const handleDeleteConfirm = () => {
    // Handle delete confirmation here
    // For now, let's just close the confirmation modal
    setShowConfirmation(false);
    // Here, you can add logic to delete the pot
    // For example, send a request to the backend to delete the pot
  };

  return (
    <div className="user-container" style={{ margin: ' 0 300px' }}>
      <div className="user-left-section">
        <h2 style={{ fontWeight: 'bold', marginLeft:'30px' }}>{title} </h2>
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="user-username">{username}</span>
        </div>
      </div>
      <div className="user-right-section">
        <div className="user-top-links">
          <Link to="/specific-page" className="user-link-button see">See the Pot</Link>
          <button onClick={handleDeleteConfirmation} className="user-link-button delete">Delete it</button>
        </div>
        <button className="user-report-button">
          Reports
          <div className="user-report-number" style={{ color: 'white', fontSize: 'bold' }}>{reports}</div>
        </button>
      </div>
      {showConfirmation && (
        <div className="delete-modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this pot?</p>
            <div className="button-container">
              <button onClick={handleDeleteConfirm} className="delete-button">Yes</button>
              <button onClick={handleDeleteCancel} className="cancel-button">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
