import React, { useEffect } from "react";

import LogBox from "./log-box.component";

import Tasks from "./tasks.component";

const TaskBox = ({
  tasks,
  setTask,
  all,
  setAll,
  filter,
  setFilter,
  countActive,
  isEmpty,
}) => {
  const handleAll = () => {
    setTask(all);
    setFilter("all");
  };
  const handleActive = () => {
    setTask(all.filter((task) => task.completed === false));
    setFilter("active");
  };
  const handleCompleted = () => {
    setTask(all.filter((task) => task.completed === true));
    setFilter("completed");
  };
  const clearCompleted = () => {
    setAll(all.filter((task) => task.completed === false));
    setTask(all.filter((task) => task.completed === false));
  };
  const filterChange = () => {
    if (filter === "all") {
      handleAll();
    } else if (filter === "active") {
      handleActive();
    } else {
      handleCompleted();
    }
  };
  useEffect(() => {
    filterChange();
  }, [all]);

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
      <LogBox
        countActive={countActive}
        clearCompleted={clearCompleted}
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
        filter={filter}
      />
    </div>
  );
};

export default TaskBox;
