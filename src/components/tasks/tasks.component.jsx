import React from "react";

import "./tasks.styles.scss";

function Tasks({ tasks, setTask }) {
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id != id));
  };
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id} className="task" draggable={true}>
          <div className="task__circle"></div>
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
