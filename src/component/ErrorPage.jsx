import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find that page.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default ErrorPage;
