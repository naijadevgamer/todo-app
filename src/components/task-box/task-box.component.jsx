import React from "react";

import Tasks from "../tasks/tasks.component";

import "./task-box.styles.scss";

function TaskBox({ tasks, setTask, all, setAll, filter, setFilter }) {
  function handleAll() {
    setTask(all);
    setFilter("all");
  }
  function handleActive() {
    setTask(all.filter((task) => task.completed === false));
    setFilter("active");
  }
  function handleCompleted() {
    setTask(all.filter((task) => task.completed === true));
    setFilter("completed");
  }
  return (
    <div className="task-box">
      <Tasks tasks={tasks} setTask={setTask} all={all} setAll={setAll} />
      <ul className="task-box__log-box">
        <li className="task-box__log task-box__log--items-left">
          5 items left
        </li>
        <li className="task-box__filter-box">
          <span
            className={`task-box__filter ${
              filter === "all" ? "task-box__filter--all" : ""
            }`}
            onClick={handleAll}
          >
            All
          </span>
          <span
            className={`task-box__filter ${
              filter === "active" ? "task-box__filter--active" : ""
            }`}
            onClick={handleActive}
          >
            Active
          </span>
          <span
            className={`task-box__filter ${
              filter === "completed" ? "task-box__filter--completed" : ""
            }`}
            onClick={handleCompleted}
          >
            Completed
          </span>
        </li>
        <li className="task-box__log task-box__log--clear">clear Completed</li>
      </ul>
    </div>
  );
}

export default TaskBox;
