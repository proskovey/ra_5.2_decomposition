import React from "react";
/*Компонент для рендера списка, в children можно передать картинку*/
function List(props) {

    const arrList = props.list.map((value) => (
        <li className={props.style.li} key={Math.random()}>
          {props.children(value.img, props.style.img)}
          <a className={props.style.a} href="#0">{value.title}</a>
        </li>
      ));
    return (
        <ul className={props.style.ul}>{arrList}</ul>
    );
}
  
export default List;