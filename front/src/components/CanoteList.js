import axios from "axios";
import { useEffect, useState } from "react";
import diaa from "../image/profile.jpg";
import Canote from "./Canote";
import "./CanoteList.css";
const CanoteList = ({ category }) => {
  const [canoteData, setCanoteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortCriterion, setSortCriterion] = useState("title"); // Default sorting by title

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

  // Filter canotes based on the selected category
  const filteredCanoteData = canoteData.filter(
    (canote) => canote.selectedCategory === category
  );

  // Sort the filtered canotes based on the selected criterion
  const sortedCanoteData = filteredCanoteData.sort((a, b) => {
    if (sortCriterion === "title") {
      return a.Title.localeCompare(b.Title);
    } else if (sortCriterion === "user") {
      return a.user.localeCompare(b.user);
    }
    return 0;
  });

  return (
    <div className="canote-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {sortedCanoteData.map((canote, index) => {
            const imageUrl = canote.image.length > 0 ? canote.image[0] : "";
            const profileImageUrl =
              canote.profileImageUrl || "default-profile.png";
            return (
              <Canote
                key={index}
                title={canote.Title}
                ProfileName={canote.user}
                percentage={50}
                imageUrl={imageUrl}
                // hna bdlt
                profileImageUrl={diaa}
                {...canote}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default CanoteList;
