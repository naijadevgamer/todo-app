import React from "react";

const Background = () => {
  return (
    <div className="background">
      <img
        src={require("../images/bg-desktop-light.jpg")}
        alt="Background light"
        className="background__pic"
      />
    </div>
  );
};

export default Background;
