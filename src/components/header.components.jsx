import React from "react";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";
// import { ReactComponent as SunIcon } from "../../images/icon-sun.svg";

function Header() {
  return (
    <div className="header">
      <p className="header__logo" draggable={true}>
        Todo
      </p>
      <MoonIcon className="header__weather-icon" />
    </div>
  );
}

export default Header;
