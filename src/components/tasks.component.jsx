import React from "react";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";
import { ReactComponent as EmptyIcon } from "../images/icon-empty.svg";

function Tasks({ tasks, setTask, all, setAll, isEmpty, filter }) {
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
      {isEmpty === false ? (
        tasks.map((task) => (
          <li key={task.id} className="task" draggable={true}>
            <input type="checkbox" className="task__input" id={task.id} />
            <div
              className={`task__circle ${
                task.completed ? "task__completed" : ""
              }`}
              onClick={() => handleCompleted(task.id)}
            >
              {task.completed ? <CheckIcon /> : ""}
            </div>
            <div className="task__circle-hover"></div>
            <div
              className={`task__item ${
                task.completed ? "task__item-checked" : ""
              }`}
            >
              {task.value}
              <div
                className="task__remove"
                onClick={() => handleDelete(task.id)}
              >
                <CrossIcon />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="task__empty">
          <EmptyIcon className="task__empty-icon" />
          <span className="task__empty-text">
            {filter === "all"
              ? "All is empty"
              : filter === "active"
              ? "active is empty"
              : "Completed is empty"}
          </span>
        </li>
      )}
    </ul>
  );
}

export default Tasks;
