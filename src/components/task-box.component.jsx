import React, { useEffect, useState } from "react";

import Tasks from "./tasks.component";

function TaskBox({
  tasks,
  setTask,
  all,
  setAll,
  filter,
  setFilter,
  countActive,
}) {
  const [isEmpty, setIsEmpty] = useState(true);
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
  function clearCompleted() {
    setAll(all.filter((task) => task.completed === false));
    setTask(all.filter((task) => task.completed === false));
    setFilter("all");
  }
  function filterChange() {
    if (filter === "all") {
      handleAll();
    } else if (filter === "active") {
      handleActive();
    } else {
      handleCompleted();
    }
  }
  useEffect(() => {
    filterChange();
  }, [all]);

  useEffect(() => {
    if (tasks.length) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [tasks]);

  return (
    <div className="task-box">
      <Tasks
        tasks={tasks}
        setTask={setTask}
        all={all}
        setAll={setAll}
        isEmpty={isEmpty}
        filter={filter}
      />
      <ul className="task-box__log-box">
        <li className="task-box__log task-box__log--items-left">
          {countActive}
        </li>
        <li className="task-box__filter-box">
          <button
            className={`task-box__filter ${
              filter === "all" ? "task-box__filter--all" : ""
            }`}
            onClick={handleAll}
          >
            All
          </button>
          <button
            className={`task-box__filter ${
              filter === "active" ? "task-box__filter--active" : ""
            }`}
            onClick={handleActive}
          >
            Active
          </button>
          <button
            className={`task-box__filter ${
              filter === "completed" ? "task-box__filter--completed" : ""
            }`}
            onClick={handleCompleted}
          >
            Completed
          </button>
        </li>
        <li
          className="task-box__log task-box__log--clear"
          onClick={clearCompleted}
        >
          clear Completed
        </li>
      </ul>
    </div>
  );
}

export default TaskBox;
