import React from "react";
import { ReactComponent as MoonIcon } from "../../images/icon-moon.svg";

import "./header.styles.scss";

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
