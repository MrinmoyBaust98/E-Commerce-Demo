import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, quantity, seller, key } = props.product;
  return (
    <div className="product-details">
      <h4>{name}</h4>
      <p>
        Sold By:<small> {seller}</small>
      </p>
      <p> Price: ${price}</p>
      <p> Quantity: {quantity}</p>
      <button
        onClick={() => {
          props.handleRemove(key);
        }}
        className="remove-btn"
      >
        Remove
      </button>
      <hr className="hr" />
    </div>
  );
};

export default ReviewItem;
