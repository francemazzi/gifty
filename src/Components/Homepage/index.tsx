import React, { Component } from "react";
import "./homepage.css";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="home__container">
      <h1>La soluzione al problema della scelta del ragalo giusto </h1>
      <div className="navigate">
        <button onClick={() => navigate("/organizzaregalo")}>
          Organizza regalo
        </button>

        <button onClick={() => navigate("/festeggiato")}>
          Sei il festeggiato? 🥳
        </button>
      </div>
    </div>
  );
};

export default Homepage;
