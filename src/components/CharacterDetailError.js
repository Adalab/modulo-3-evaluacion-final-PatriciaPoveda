import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/homero-simpson-400x360.jpg";

const CharacterDetailError = () => {
  return (
    <>
      <Link to="/characters" className="characterDetailButton">
        Volver
      </Link>
      <article className="characterDetail">
        <img
          className="characterDetail__img"
          src={logo}
          alt="Imagen de Homer Simpson"
        />
        <p className="characterDetail__text">Te has equivocado de personaje</p>
      </article>
    </>
  );
};

export default CharacterDetailError;
