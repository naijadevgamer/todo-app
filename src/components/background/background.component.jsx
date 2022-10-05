import React from "react";
import "./background.styles.scss";

function Background() {
  return (
    <div className="background">
      <img
        src={require("../../images/bg-desktop-light.jpg")}
        alt="Background light"
        className="background__pic"
      />
    </div>
  );
}

export default Background;
