import React from "react";
import "./characterCard.scss";
import { Link } from "react-router-dom";

class CharacterCard extends React.Component {
  render() {
    return (
      <Link to={`/character/${this.props.id}`}>
        <article className="characterCard">
          <img
            className="characterCard__img"
            src={this.props.img}
            alt={`Character: ${this.props.name}`}
          />
          <div className="characterCard__info">
            <h2 className="characterCard__info--name">{this.props.name}</h2>
            <p className="characterCard__info--type">{this.props.species}</p>
          </div>
        </article>
      </Link>
    );
  }
}
export default CharacterCard;
