import React from "react";

const Review = ({ review }) => (
  <div style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "6px" }}>
    <strong>{review.user}</strong> rated <strong>{review.rating}/5</strong>
    <p>{review.comment}</p>
  </div>
);

export default Review;