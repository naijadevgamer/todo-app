import React from "react";
import { useState } from "react";

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
        />
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
