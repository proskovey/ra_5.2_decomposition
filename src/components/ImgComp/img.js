import React from "react";
/*Компонент для отображения картинки в списках */
function Img({img, styleImg}) {

    return (
        <img src={img} alt="" className={styleImg} />
    );
  }
  
  export default Img;