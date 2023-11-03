import React from "react";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";

const Header = ({ themeLight, setThemeLight }) => {
  return (
    <div className="header">
      <p className="header__logo" draggable={true}>
        Todo
      </p>
      {themeLight ? (
        <MoonIcon
          className="header__weather-icon night"
          onClick={() => {
            setThemeLight(false);
          }}
        />
      ) : (
        <SunIcon
          className="header__weather-icon day"
          onClick={() => {
            setThemeLight(true);
          }}
        />
      )}
    </div>
  );
};

export default Header;
