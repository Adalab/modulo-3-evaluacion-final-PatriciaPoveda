import React from "react";
import "./filters.scss";

const Filters = (props) => {
  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    props.handleFilter(inputValue);
  };
  return (
    <form action="" className="filterCharacter">
      <label htmlFor="nameCharacter"></label>
      <input
        type="text"
        id="nameCharacter"
        className="filterCharacter__input"
        onChange={handleChange}
      />
    </form>
  );
};

export default Filters;
