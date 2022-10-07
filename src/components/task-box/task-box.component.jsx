import React from "react";
import { useState } from "react";

import Task from "../task/task.component";

import "./task-box.styles.scss";

function TaskBox({ todo }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTask([tasks...,tasks])
  // };
  return (
    <div className="task-box">
      <ul className="task-box__tasks">
        <Task todo={todo} tasks={tasks} />
      </ul>
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
