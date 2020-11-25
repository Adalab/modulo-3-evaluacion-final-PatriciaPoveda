import logo from "../images/Rick_and_Morty.png";
import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <header className="headerLogo">
      <img src={logo} alt="Logo Rick and Morty" className="headerLogo__img" />
    </header>
  );
};

export default Header;
