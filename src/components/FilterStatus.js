import React from "react";

const FilterStatus = (props) => {
  const handleClick = (ev) => {
    const newValue = ev.target.value;
    props.statusFilter(newValue);
  };
  return (
    <>
      <label htmlFor="size" className="status__label">
        Estado
      </label>
      <select
        id="size"
        name="size"
        onChange={handleClick}
        className="status__select"
      >
        <option className="status__select--item">Selecciona</option>
        <option value="Alive" className="status__select--item">
          vivo
        </option>
        <option value="Dead" className="status__select--item">
          muerto
        </option>
        <option value="unknown" className="status__select--item">
          desconocido
        </option>
      </select>
    </>
  );
};

export default FilterStatus;
