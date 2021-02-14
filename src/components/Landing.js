import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";

const Landing = () => {
  return (
    <main className="landing">
      <Link to="/character" className="landing__btn">
        ENTRAR
      </Link>
    </main>
  );
};

export default Landing;
