
import React, { useState, useEffect } from 'react';
import Donation from './donation'; 
import axios from 'axios';

const Donationn = () => {
  const [donationData, setDonationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/donations/1');
        setDonationData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donation data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p style={{margin: '30% 50%'}}>Loading...</p>
      ) : (
        donationData && (
          <Donation
            pictureUrl={donationData.pictureUrl}
            title={donationData.title}
            username={donationData.username}
            amount={donationData.amount}
            target={donationData.target}
            description={donationData.description}
          />
        )
      )}
    </div>
  );
}

export default Donationn;
