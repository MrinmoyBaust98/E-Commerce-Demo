import React from "react";
import img from "../../images/giphy.gif";

const PlaceOder = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Thank you !!</h1>
      <h4 style={{ textAlign: "center" }}>Your oder has been Placed!!</h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "330px",
        }}
        src={img}
        alt="Place oder pic"
      ></img>
    </div>
  );
};

export default PlaceOder;
