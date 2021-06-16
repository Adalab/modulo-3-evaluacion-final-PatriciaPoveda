import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CharacterDetailError from "./CharacterDetailError";

const CharacterDetail = (props) => {
  if (props.foundCharacter === undefined) {
    return <CharacterDetailError></CharacterDetailError>;
  } else {
    return (
      <>
        <Link to="/characters" className="characterDetailButton">
          Volver
        </Link>
        <article className="characterDetail">
          <img
            className="characterDetail__img"
            src={props.foundCharacter.image}
            alt={`Imagen: ${props.foundCharacter.name}`}
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
      </>
    );
  }
};

export default CharacterDetail;
