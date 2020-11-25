import React from "react";
import FilterName from "./FilterName";

class Filters extends React.Component {
  handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  render() {
    return (
      <form
        action=""
        className="filterCharacter"
        onSubmit={this.handleFormSubmit}
      >
        <FilterName
          handleFilter={this.props.handleFilter}
          filterCharacters={this.props.filterCharacters}
        ></FilterName>
      </form>
    );
  }
}

export default Filters;
