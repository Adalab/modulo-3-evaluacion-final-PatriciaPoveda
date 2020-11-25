import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./characterDetail.scss";
import logo from "../images/homero-simpson-400x360.jpg";

const CharacterDetail = (props) => {
  if (props.foundCharacter === undefined) {
    return (
      <Link to="/">
        <article className="characterDetail">
          <img className="characterDetail__img" src={logo} alt="" />
          <p className="characterDetail__text">
            Te has equivocado de personaje
          </p>
        </article>
      </Link>
    );
  } else {
    return (
      <Link to="/">
        <article className="characterDetail">
          <img
            className="characterDetail__img"
            src={props.foundCharacter.image}
            alt={`Imagen: ${props.foundCharacter.image}`}
          />
          <section className="characterDetail__info">
            <h3 className="characterDetail__info--name">
              {props.foundCharacter.name}
            </h3>
            <ul className="characterDetail__info--list">
              <li>Status: {props.foundCharacter.status}</li>
              <li>Species: {props.foundCharacter.species}</li>
              <li>Origin: {props.foundCharacter.origin}</li>
              <li>Episodes: {props.foundCharacter.episode.length}</li>
            </ul>
          </section>
        </article>
      </Link>
    );
  }
};

export default CharacterDetail;
