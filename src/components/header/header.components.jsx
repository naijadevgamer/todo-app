import React from "react";
import { ReactComponent as Logo } from "../../images/icon-sun.svg";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <p className="header__logo">LOGO</p>
      <Logo className="header__weather-icon" />
    </div>
  );
}

export default Header;
