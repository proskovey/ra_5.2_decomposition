import React from "react";
/* Компонент для отображения банера */
function Banner(props) {
  return (
    <div className="banner">
      <img src={props.img} alt="banner" className="banner__img" />
      <div className="banner__title">{props.title}</div>
      <a href="#0" className="banner__link">
      {props.link}
      </a>
    </div>
  );
}

export default Banner;