import logo from "../images/Rick_and_Morty.png";
import React from "react";

const Header = () => {
  return (
    <img
      src={logo}
      alt="Logo Rick and Morty"
      className="headerLogo__img headerLogo"
    />
  );
};

export default Header;
