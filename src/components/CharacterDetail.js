import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./characterDetail.scss";
import logo from "../images/homero-simpson-400x360.jpg";

class CharacterDetail extends React.Component {
  render() {
    if (this.props.foundCharacter === undefined) {
      return (
        <>
          <Link to="/" className="characterDetailButton">
            Volver
          </Link>
          <article className="characterDetail">
            <img
              className="characterDetail__img"
              src={logo}
              alt="Imagen de Homer Simpson"
            />
            <p className="characterDetail__text">
              Te has equivocado de personaje
            </p>
          </article>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="characterDetailButton">
            Volver
          </Link>
          <article className="characterDetail">
            <img
              className="characterDetail__img"
              src={this.props.foundCharacter.image}
              alt={`Imagen: ${this.props.foundCharacter.name}`}
            />
            <section className="characterDetail__info">
              <h3 className="characterDetail__info--name">
                {this.props.foundCharacter.name}
              </h3>
              <ul className="characterDetail__info--list">
                <li>Status: {this.props.foundCharacter.status}</li>
                <li>Species: {this.props.foundCharacter.species}</li>
                <li>Origin: {this.props.foundCharacter.origin}</li>
                <li>Episodes: {this.props.foundCharacter.episode.length}</li>
              </ul>
            </section>
          </article>
        </>
      );
    }
  }
}

export default CharacterDetail;
