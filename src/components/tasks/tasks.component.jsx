import React from "react";

import "./tasks.styles.scss";

function Tasks({ tasks, setTask }) {
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id != id));
  };
  // const handleCompleted = (e) => {
  //   if (e) return false;
  //   else return true;
  // };
  // console.log(handleCompleted(true));
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id} className="task" draggable={true}>
          <input type="checkbox" className="task__check" id={task.id} />
          <label
            className="task__circle"
            htmlFor={task.id}
            onClick={() => {
              if (task.completed == false) task.completed = true;
              else task.completed = false;
              console.log(task);
            }}
          >
            {task.completed == false ? "&#10003;" : ""}
          </label>
          <div className="task__circle-hover"></div>
          <div className="task__item">
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
