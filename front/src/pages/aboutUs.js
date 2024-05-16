import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="titleee">WELCOME TO TAKAFUL</h1>
        <p className="descriptionabout">At Takaful, we believe in the power of collective generosity to make a meaningful impact in the lives of those in need. Our platform allows users like you to select a cause close to your heart and contribute to it directly, whether it's supporting education, healthcare, or providing relief during times of crisis.</p>
        <p className="descriptionabout">Not only can you donate, but you also have the opportunity to nominate individuals deserving of assistance, or if you find yourself in a position of need, you can receive support from our community. Together, we can create a world where kindness knows no bounds. Join us in our mission to spread hope and uplift lives through the simple act of giving.</p>
        <h2 className="subtitle">Our Mission</h2>
        <p className="mission">Our mission at Takaful is to foster a culture of compassion and solidarity, where individuals come together to support each other and create positive change in society. We strive to provide a platform that empowers people to make a difference in the world and build a brighter future for generations to come.</p>
        <h2 className="subtitle">Our Values</h2>
        <ul className="values-list">
          <li>Compassion</li>
          <li>Empathy</li>
          <li>Equality</li>
          <li>Community</li>
          <li>Transparency</li>
          <li>Impact</li>
        </ul>
      </div>
      <div className="about-us-cta">
        <h2 className="cta-title">Ready to make a difference?</h2>
        <p className="cta-description">Join Takaful today and be a part of our growing community of givers and receivers. Together, we can create positive change and make the world a better place for everyone.</p>
      </div>
    </div>
  );
}

export default AboutUs;
