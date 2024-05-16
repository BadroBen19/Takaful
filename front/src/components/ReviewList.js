
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Review from './Review';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getReviews") // replace with your API endpoint
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {reviews.map((review, index) => (
        <div
          key={index}
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <Review
            imgUrl={review.imgUrl}
            userName={review.userName}
            reviewText={review.reviewText}
          />
        </div>
      ))}
    </div>
  );
};
export default ReviewList;
