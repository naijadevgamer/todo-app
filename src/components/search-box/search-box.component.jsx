import React from "react";
import "./search-box.styles.scss";

function SearchBox({ input, setInput, tasks, setTask }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...tasks, { value: input }]);
    console.log(tasks);
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
