import React from "react";
import { useEffect, useState } from "react";

import "./tasks.styles.scss";

function Tasks({ tasks, setTask }) {
  const [check, setCheck] = useState(false);
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id != id));
  };
  const handle = () => {};
  useEffect(() => {
    tasks.map((task) => {
      // task.completed = !task.completed;
      // console.log(task);
      task.addEventListener("change", handle);
    });
  }, [check]);
  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id} className="task" draggable={true}>
          <input
            type="checkbox"
            className="task__check"
            id={task.id}
            onChange={handleChecked}
          />
          <label className="task__circle" htmlFor={task.id}>
            {check ? "&#10003;" : ""}
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
