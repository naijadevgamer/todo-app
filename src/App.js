import React, { useState, useEffect } from "react";

import Background from "./components/background/background.component";
import Header from "./components/header/header.components";
import AddTask from "./components/add-task/add-task.component";
import TaskBox from "./components/task-box/task-box.component";

import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTask] = useState([]);
  const [all, setAll] = useState([]);
  const [countActive, setCountActive] = useState(0);

  useEffect(() => {
    setCountActive(activeCount());
  }, [all]);

  function activeCount() {
    let totalLeft = all.filter((task) => task.completed === false);
    if (totalLeft.length > 1) {
      return `${totalLeft.length} items left`;
    } else if (totalLeft.length === 1) {
      return `${totalLeft.length} item left`;
    } else {
      return "No items left";
    }
  }

  return (
    <div className="App">
      <Background />
      <div className="main">
        <Header />
        <AddTask
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTask={setTask}
          all={all}
          setAll={setAll}
        />
        <TaskBox
          tasks={tasks}
          setTask={setTask}
          all={all}
          setAll={setAll}
          filter={filter}
          setFilter={setFilter}
          countActive={countActive}
        />
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
