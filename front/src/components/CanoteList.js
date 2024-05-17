// CanoteList.js
import axios from "axios";
import { useEffect, useState } from "react";
import Canote from "./Canote";
import "./CanoteList.css";

const CanoteList = () => {
  const [canoteData, setCanoteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getCardInfo");
        setCanoteData(response.data);
      } catch (error) {
        console.error("Error fetching canotes: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="canote-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        canoteData.map((canote, index) => (
          <Canote
            key={index}
            title={canote.Title}
            ProfileName={canote.user}
            percentage={5}
            imageUrl={canote.image}
            {...canote}
          />
        ))
      )}
    </div>
  );
};

export default CanoteList;
