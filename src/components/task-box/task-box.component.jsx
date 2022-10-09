import React from "react";

import Tasks from "../tasks/tasks.component";

import "./task-box.styles.scss";

function TaskBox({ tasks, setTask }) {
  return (
    <div className="task-box">
      <Tasks tasks={tasks} setTask={setTask} />
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
