import React from "react";

import "./task.styles.scss";

function Task() {
  return (
    <li className="task" draggable={true}>
      <div className="task__circle"></div>
      <div className="task__circle-hover"></div>
      <div className="task__item">
        Jog around the park 3x
        <div className="task__remove">&#10005;</div>
      </div>
    </li>
  );
}

export default Task;
