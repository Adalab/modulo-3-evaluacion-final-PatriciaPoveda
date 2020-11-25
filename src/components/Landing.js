import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";

const Landing = () => {
  return (
    <main className="wrapper">
      <h1>Rick and Morty</h1>
      <Link to="/characters">
        <button>Entra</button>
      </Link>
    </main>
  );
};

export default Landing;
