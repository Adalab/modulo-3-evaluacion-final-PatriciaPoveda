import React from "react";
import "./characterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.id}`}>
        <article className="characterCard">
          <img
            className="characterCard__img"
            src={props.img}
            alt={`Character: ${props.name}`}
          />
          <div className="characterCard__info">
            <h2 className="characterCard__info--name">{props.name}</h2>
            <p className="characterCard__info--type">{props.species}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default CharacterCard;
