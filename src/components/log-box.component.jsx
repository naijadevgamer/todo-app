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
    <ul className="log-box">
      <li className="log-box__log">{countActive}</li>
      <FilterBox
        className="filter-box--desktop"
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
        filter={filter}
      />
      <li className="log-box__log log-box__log--clear" onClick={clearCompleted}>
        clear Completed
      </li>
    </ul>
  );
};

export default LogBox;
