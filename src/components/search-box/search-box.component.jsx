import React from "react";
import "./search-box.styles.scss";

function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-box__circle"></div>
      <form className="search-box__form">
        <input
          type="text"
          className="search-box__input"
          placeholder="Create a new todo.."
        />
      </form>
    </div>
  );
}

export default SearchBox;
