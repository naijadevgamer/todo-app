import React from "react";
import { ReactComponent as CrossIcon } from "../../images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../../images/icon-check.svg";

import "./tasks.styles.scss";

function Tasks({ tasks, setTask, all, setAll }) {
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    setAll(all.filter((task) => task.id !== id));
  };
  const handleCompleted = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
    setAll(
      all.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id} className="task" draggable={true}>
          <input type="checkbox" className="task__input" id={task.id} />
          <label
            className={`task__circle ${
              task.completed ? "task__completed" : ""
            }`}
            htmlFor={task.id}
            onClick={() => handleCompleted(task.id)}
          >
            {task.completed ? <CheckIcon /> : ""}
          </label>
          <div className="task__circle-hover"></div>
          <div
            className={`task__item ${
              task.completed ? "task__item-checked" : ""
            }`}
          >
            {task.value}
            <div className="task__remove" onClick={() => handleDelete(task.id)}>
              <CrossIcon />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
