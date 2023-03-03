import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}> 404</h1>
      <h3 style={{ textAlign: "center" }}>Page Not Found Error</h3>
      <p style={{ textAlign: "center" }}>
        The requested URL /doesntexist was not found on this server.
      </p>
    </div>
  );
};

export default NotFound;
