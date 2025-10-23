import React from "react";
import "./style.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <a href="/" className="not-found-link">
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
