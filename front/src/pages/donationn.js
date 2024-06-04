// Donationn.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Donation from "./donation";

const Donationn = () => {
  const { id } = useParams();
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getUserById/${id}`
        );
        setDonationData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donation data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p style={{ margin: "30% 50%" }}>Loading...</p>
      ) : (
        donationData && (
          <Donation
            pictureUrl={donationData.image}
            title={donationData.Title}
            username={donationData.user}
            amount={donationData.amount}
            target={donationData.target}
            description={donationData.description}
          />
        )
      )}
    </div>
  );
};

export default Donationn;
