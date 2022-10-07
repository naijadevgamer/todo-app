import React from "react";
import "./search-box.styles.scss";

function SearchBox({ todo, setTodo }) {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="search-box">
      <div className="search-box__circle"></div>
      <form className="search-box__form">
        <input
          type="text"
          value={todo}
          className="search-box__input"
          placeholder="Create a new todo.."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBox;
