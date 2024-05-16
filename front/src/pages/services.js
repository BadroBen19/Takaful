import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className='h1'>Our Offerings</h1>
      <p className='pp'>Welcome to Takaful, where you can give and receive!</p>
      
      <div className="core-services">
        <h2 className='h2'>Core Services</h2>
        <div className="service-item">
          <h3 className='h3'>Donation Platform</h3>
          <p>Join us in making a difference by donating to various causes through our user-friendly platform.</p>
        </div>
        <div className="service-item">
          <h3  className='h3'>Funding Campaigns</h3>
          <p className='pp'>Participate in our ongoing fundraising campaigns or create your own!</p>
        </div>
      </div>

      <div className="featured-causes">
        <h2  className='h2'>Featured Causes</h2>
        <ul className='ul'>
          <li className='li'>Disease research and treatment</li>
          <li className='li'>Support for victims of natural disasters</li>
          <li className='li'>Providing education for underprivileged groups</li>
          <li className='li'>Providing aid to the impoverished</li>
          <li className='li'>Funding scientific research</li>
          <li className='li'>Supporting social programs for disadvantaged children</li>
          <li className='li'>And many other causes</li>
        </ul>
      </div>

      <div className="how-it-works">
        <h2 className='h2'>How It Works</h2>
        <ol className='ol'>
          <li className='li'>Choose a Cause</li>
          <li className='li'>Donate or Receive</li>
          <li className='li'>Participate and Be Part of the Solution</li>
        </ol>
      </div>

      <div className="contact">
        <h2 className='h2'>Get in Touch</h2>
        <p className='pp'>For additional inquiries, support, or partnership opportunities, feel free to contact us.</p>
      </div>
    </div>
  );
}

export default Services;
