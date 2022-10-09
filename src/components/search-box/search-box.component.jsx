import React from "react";
import "./search-box.styles.scss";

function SearchBox({ input, setInput, tasks, setTask }) {
  const generateKey = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let totalL = "",
      totalN = "";
    for (let i = 0; i < 3; i++) {
      let num = String(Math.floor(Math.random() * 10));
      totalN += num;
    }
    for (let i = 0; i < 4; i++) {
      let alpha = characters[Math.floor(Math.random() * 52)];
      totalL += alpha;
    }
    return totalN + totalL;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length)
      setTask([
        ...tasks,
        { value: input, id: generateKey(), completed: false },
      ]);
    setInput("");
  };
  return (
    <div className="search-box">
      <div className="search-box__circle"></div>
      <form className="search-box__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          className="search-box__input"
          placeholder="Create a new todo.."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBox;
