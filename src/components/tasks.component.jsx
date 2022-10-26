import React, { useRef } from "react";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";
import { ReactComponent as EmptyIcon } from "../images/icon-empty.svg";

const Tasks = ({ tasks, setTask, all, setAll, isEmpty, filter }) => {
  // handle delete task item
  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    setAll(all.filter((task) => task.id !== id));
  };

  // handle toggle completed
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

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const handleSort = () => {
    // duplicate tasks
    let _taskItems = [...tasks];

    //remove and save the drag item content
    const draggedItemContent = _taskItems.splice(dragItem.current, 1)[0];

    // switch position
    _taskItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setTask(_taskItems);
  };

  // handle drag start
  // const handleDragStart = (e, id) => {
  //   console.log(dragItem.current);
  // };

  //handle drag enter
  // const handleDragEnter = (e, id) => {
  //   console.log("drag entered", id);
  // };

  //handle drag end
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };
  // const handleDragOver = (e, id) => {
  //   e.preventDefault();
  //   console.log("dragover");
  // };
  const handleDragCapture = (e) => {
    e.target.style.opacity = "0";
  };

  return (
    <ul className="tasks">
      {isEmpty === false ? (
        tasks.map((task, index) => (
          <li
            key={task.id}
            className="task"
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnd={(e) => {
              handleSort();
              handleDragEnd(e);
            }}
            onDragEnter={() => (dragOverItem.current = index)}
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
