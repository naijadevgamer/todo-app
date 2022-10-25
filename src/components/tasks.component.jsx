import React from "react";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";
import { ReactComponent as EmptyIcon } from "../images/icon-empty.svg";

const Tasks = ({ tasks, setTask, all, setAll, isEmpty, filter }) => {
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    setAll(all.filter((task) => task.id !== id));
  };
  const handleToggleCompleted = (id) => {
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
  const handleDragStart = (id) => {
    // e.target.style.opacity = "1";
    tasks.filter((task) => task.id !== id);
  };
  const handleDragEnd = (id) => {
    tasks.map((task) => {
      setTask([...task]);
      return task;
    });
  };
  const handleDragOver = (e, id) => {
    e.preventDefault();
    console.log("dragover");
  };
  const handleDragCapture = (e) => {
    e.target.style.opacity = "0";
  };

  return (
    <ul className="tasks" onDragOver={handleDragOver}>
      {isEmpty === false ? (
        tasks.map((task) => (
          <li
            key={task.id}
            className="task"
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCapture={handleDragCapture}
          >
            <div
              className={`task__circle ${
                task.completed ? "task__completed" : ""
              }`}
              onClick={() => handleToggleCompleted(task.id)}
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
                <CrossIcon className="task__remove-icon" />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="task__empty">
          <EmptyIcon className="task__empty-icon" />
          <span className="task__empty-text">
            {filter === "all"
              ? "No task found"
              : filter === "active"
              ? "Well done! You have no active task left"
              : "No task is completed yet"}
          </span>
        </li>
      )}
    </ul>
  );
};

export default Tasks;
