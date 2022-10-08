import React from "react";

import "./tasks.styles.scss";

function Tasks({ tasks }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li className="task" draggable={true}>
          <div className="task__circle"></div>
          <div className="task__circle-hover"></div>
          <div className="task__item">
            {task.value}
            {task.id}
            <div className="task__remove">&#10005;</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
