import React from "react";

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
            className="task__circle"
            htmlFor={task.id}
            onClick={() => handleCompleted(task.id)}
          >
            {task.completed ? <>&#10003;</> : ""}
          </label>
          <div className="task__circle-hover"></div>
          <div
            className={`task__item ${
              task.completed ? "task__item-checked" : ""
            }`}
          >
            {task.value}
            <div className="task__remove" onClick={() => handleDelete(task.id)}>
              &#10005;
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
