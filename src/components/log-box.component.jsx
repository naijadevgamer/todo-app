import React from "react";

import FilterBox from "./filter-box.component";

const LogBox = ({
  countActive,
  clearCompleted,
  handleAll,
  handleActive,
  handleCompleted,
  filter,
}) => {
  return (
    <ul className="task-box__log-box">
      <li className="task-box__log task-box__log--items-left">{countActive}</li>
      <FilterBox
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
        filter={filter}
      />
      <li
        className="task-box__log task-box__log--clear"
        onClick={clearCompleted}
      >
        clear Completed
      </li>
    </ul>
  );
};

export default LogBox;
