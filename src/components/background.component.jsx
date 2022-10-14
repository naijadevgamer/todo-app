import React from "react";

import DesktopLight from "../images/bg-desktop-light.jpg";
import DesktopDark from "../images/bg-desktop-dark.jpg";
import MobileLight from "../images/bg-mobile-light.jpg";
import MobileDark from "../images/bg-mobile-dark.jpg";

const Background = ({ themeLight }) => {
  return (
    <div className="background">
      <img
        src={themeLight ? DesktopLight : DesktopDark}
        alt="Background light"
        className="background__pic background__pic--desktop"
      />
      <img
        src={themeLight ? MobileLight : MobileDark}
        alt="Background dark"
        className="background__pic background__pic--mobile"
      />
    </div>
  );
};

export default Background;
