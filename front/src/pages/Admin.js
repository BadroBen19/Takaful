import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-content">
        <Link to="/requetes" className="admin-button requetes-button">
          Les Requetes
        </Link>
        <Link to="/reports" className="admin-button reports-button">
          Reports
        </Link>
      </div>
    </div>
  );
}

export default Admin;
