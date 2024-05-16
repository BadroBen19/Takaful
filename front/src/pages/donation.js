

import './donation.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faExclamationTriangle, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';

const Donation = ({ 
  pictureUrl,
  title,
  username,
  amount,
  target,
  description
}) => {
  const amountPercentage = (amount * 100) / target;
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);


  const openShareModal = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const openReportModal = () => {
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  
  
  return (
  
    <div className="post-container">

      <div className='lfog'>
      <div className="left-container">
        <img src={pictureUrl} alt="There is no picture!" className="valid-picture" />
      </div>
      <div className="right-container">
        <div className="post-info">
          <p style={{ fontSize:'1.2rem', textTransform: 'capitalize',margin:'7px',fontWeight:'bold',
  color: 'rgba(2, 48, 71, 1)'}} className="post-title">{title}</p>
          <div className="user-info">
          <FontAwesomeIcon className='user-icon' icon={faUser} />
           
            <span className="username" style={{fontSize:'0.7rem', color:'rgba(2, 48, 71, 1)', fontWeight:'bold', textTransform: 'capitalize'}} >{username}</span>
          </div>
          <div className="amount-info">
            <span className="amount" style={{fontSize:'0.7rem', color:'rgba(2, 48, 71, 1)', fontWeight:'bold'}}> {amount} $</span>
            <span className="target" style={{fontSize:'0.7rem', color:'rgba(2, 48, 71, 1)'}}> ( The target is to raise {target} $)</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${amountPercentage}%` }}></div>
          </div>
        </div> 
        <div className="actions">
           <button className="donate-btn" > <a href='/donate'>
            
          <span style={{color:'white', fontSize:'0.8rem',textTransform: 'capitalize', fontWeight: 'bold'}}>Donate </span>
          </a></button>
      
          <button className="share-btn" onClick={openShareModal}>
        <i className="fa-solid fa-share-from-square" style={{ color: 'rgba(33, 158, 188, 1)', fontSize: '1.5em' }}></i>
        <span style={{ color: 'rgba(33, 158, 188, 1)', textTransform: 'capitalize', fontSize: '0.8rem', fontWeight: 'bold' }}>Share</span>
      </button>
      <button className="report-btn" onClick={openReportModal}>
        <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'rgba(136, 15, 51, 1)', fontSize: '1.5em' }} />
        <span style={{ color: 'rgba(136, 15, 51, 1)', fontSize: '0.8rem', textTransform: 'capitalize', fontWeight: 'bold' }}>Report</span>
      </button>

      {showShareModal && (
        <div id="shareModal" className="modal">
          <div className="contenuu">
          <span className="closeshare" onClick={closeShareModal}>&times;</span>
           <h3 className='shariha' style={{textAlign:'center', margin:'35px 6px 4px 4px ',color:'rgba(2, 48, 71, 1)' }}>Share it now and spread the act of kindness with others!</h3>
          <div className="social-media-list">
            <a href='https://www.instagram.com/' target="_blank"  className="social-media-item">
              <i className="fab fa-instagram social-media-icon">  </i>
             
            </a>
            <a href="https://t.me/" target="_blank" className="social-media-item">
              <i className="fab fa-telegram social-media-icon" ></i>
             
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="social-media-item">
              <i className="fab fa-facebook-f social-media-icon" > </i>
              
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" className="social-media-item">
              <i className="fab fa-whatsapp social-media-icon"></i>
            
            </a>
            <a href="https://www.tiktok.com/" target="_blank"className="social-media-item">
              <i className="fab fa-tiktok social-media-icon"></i>
              
            </a>
            <a href="https://twitter.com/" target="_blank" className="social-media-item">
              <i className="fab fa-twitter social-media-icon"></i>
             
            </a>
            </div>
           
          </div>
        </div>
      )}

   
      {showReportModal && (
        <div id="reportModal" className="modal">
          <div className="contenuu">
            <span className="closereport" onClick={closeReportModal}>&times;</span>
            
            <div className="containerta3problem">
            <h2 className='reportiha' style={{textAlign:'center', margin:'35px 6px 4px 4px ', color:'rgba(2, 48, 71, 1)'}}>Select your problem:</h2>
      
      <div className="checkbox-container">
        <div className="checkbox-column">
          <div className='prob'>
          <input type="checkbox" id="problem1" name="problem1" />
          <label htmlFor="problem1">fradulent activities</label></div>
          <div className='prob'>
          <input type="checkbox" id="problem2" name="problem2" />
          <label htmlFor="problem2">Lack of transparency</label></div>
          <div className='prob'>
          <input type="checkbox" id="problem3" name="problem3" />
          <label htmlFor="problem3">Misrepresentation</label></div>
        </div>
        <div className="checkbox-column">
        <div className='prob'>
          <input type="checkbox" id="problem4" name="problem4" />
          <label htmlFor="problem4">Ethical Concerns</label></div><div className='prob'>
          <input type="checkbox" id="problem5" name="problem5" />
          <label htmlFor="problem5">Questionable Intentions</label></div>
          <div className='prob'>
          <input type="checkbox" id="problem6" name="problem6" />
          <label htmlFor="problem6">Others...</label></div>
        </div>
      </div>
      <button className="submit-buttonnn" onClick={closeReportModal}>Send</button>
    </div>
            
          </div>
        </div>
      )}
        </div> 
        </div>
      </div>
      <div className="description-container">
        <h2 className="description-title" style={{color:'rgba(2, 48, 71, 1)', fontWeight:'bold', marginBottom:'7px'}} >Description</h2>
            <p className="description" style={{color:'rgba(2, 48, 71, 1)', fontSize:'1rem', fontWeight:'lighter', marginTop:'10px'}}>{description}</p>
      </div>
 
     
    </div>
  );
}

export default Donation;
