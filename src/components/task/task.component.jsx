import React from "react";

import "./task.styles.scss";

function Task({tasks}) {
  {
    tasks.map((task) => (
       <li className="task" draggable={true}>
      <div className="task__circle"></div>
      <div className="task__circle-hover"></div>
      <div className="task__item">
       {todo} 
        <div className="task__remove">&#10005;</div>
      </div>
    </li>
    )
  
  }
   
  
}

export default Task;
