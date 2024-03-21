import React from "react";
/*Компонент для отображения формы поиска */
function Search(props) {
  return (
    <div className="box-search">
      {props.children}
      <form className="search__form">
        <span className="search__form-title">{props.item.title}</span>
        <input className="search__form-input" type="text" />
        <button className="search__form-button">{props.item.button}</button>
      </form>
      <span className="search__text">
      {props.item.text}
      </span>
    </div>
  );
}

export default Search;
