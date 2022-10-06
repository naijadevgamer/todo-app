import React from "react";
import "./task-box.styles.scss";

function TaskBox() {
  return (
    <div className="task-box">
      <ul className="task-box__tasks"></ul>
      <ul className="task-box__log-box">
        <li className="task-box__log task-box__log--items-left">
          5 items left
        </li>
        <li className="task-box__filter-box">
          <span className="task-box__filter task-box__filter--all">All</span>
          <span className="task-box__filter task-box__filter--active">
            Active
          </span>
          <span className="task-box__filter task-box__filter--completed">
            Completed
          </span>
        </li>
        <li className="task-box__log task-box__log--clear">clear Completed</li>
      </ul>
    </div>
  );
}

export default TaskBox;
