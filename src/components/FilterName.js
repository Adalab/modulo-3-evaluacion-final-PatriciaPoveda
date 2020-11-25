import React from "react";
import "./filterName.scss";

class FiltersName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    const inputValue = ev.target.value;
    this.props.handleFilter(inputValue);
  };
  render() {
    return (
      <>
        <label htmlFor="nameCharacter"></label>
        <input
          type="text"
          id="nameCharacter"
          className="filterCharacter__input"
          placeholder="Ej: Morty"
          onChange={this.handleChange}
          value={this.props.filterCharacters}
        />
      </>
    );
  }
}

export default FiltersName;
