import React from "react";

const FilterBox = ({ handleActive, handleAll, handleCompleted, filter }) => {
  return (
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
  );
};

export default FilterBox;
