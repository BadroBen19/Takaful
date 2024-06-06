// Reports.js
import React, { useState, useEffect } from 'react';
import UserContainer from './userContainer';

const Reports = () => {
  const [containerData, setContainerData] = useState([]);

  useEffect(() => {
    // Fetch container data men lback
    const fetchContainerData = async () => {
      try {
        // dir fetch request lel back endpoint
        const response = await fetch('backend-url'); // url
        if (!response.ok) {
          throw new Error('Failed to fetch container data');
        }
        const data = await response.json();
        setContainerData(data); // Assuming data: array of container objects
      } catch (error) {
        console.error('Error fetching container data:', error);
      }
    };

    fetchContainerData();
  }, []);

  return (
    <div>
      <h1>User Containers</h1>
      {containerData.map((container, index) => (
        <UserContainer
          key={index}
          title={container.title}
          username={container.username}
          reports={container.reports}
          specificPageLink={container.specificPageLink}
        />
      ))}
    </div>
  );
};

export default Reports;
