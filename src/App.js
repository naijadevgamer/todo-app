import React from "react";

import Background from "./components/background/background.component";
import Header from "./components/header/header.components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
    </div>
  );
}

export default App;
