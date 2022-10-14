import React from "react";

function Background() {
  return (
    <div className="background">
      <img
        src={require("../images/bg-desktop-light.jpg")}
        alt="Background light"
        className="background__pic"
      />
    </div>
  );
}

export default Background;
