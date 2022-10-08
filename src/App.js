import React from "react";
import { useState } from "react";

import Background from "./components/background/background.component";
import Header from "./components/header/header.components";
import SearchBox from "./components/search-box/search-box.component";
import TaskBox from "./components/task-box/task-box.component";

import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const generateKey = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let alpha = characters[Math.floor(Math.random() * 52)];

    let total = "";
    for (let i = 0; i < 3; i++) {
      let num = String(Math.floor(Math.random() * 10));
      total += num;
    }
    console.log(total);
  };
  generateKey();
  return (
    <div className="App">
      <Background />
      <div className="main">
        <Header />
        <SearchBox
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTask={setTask}
        />
        <TaskBox tasks={tasks} />
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
