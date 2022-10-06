import React from "react";

import Background from "./components/background/background.component";
import Header from "./components/header/header.components";
import SearchBox from "./components/search-box/search-box.component";
import TaskBox from "./components/task-box/task-box.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Background />
      <div className="main">
        <Header />
        <SearchBox />
        <TaskBox />
      </div>
    </div>
  );
}

export default App;
