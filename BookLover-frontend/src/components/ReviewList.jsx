import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    {reviews.length === 0 && <p>No reviews yet.</p>}
    {reviews.map((review, idx) => (
      <Review key={idx} review={review} />
    ))}
  </div>
);

export default ReviewList;