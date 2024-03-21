import React from "react";
/*Компонент для подвала, в children карточки новостей*/
function Footer(props) {
    const arrFooterCard = props.footerCard.map((value)=>(
        <div className="footer__card" key={Math.random()}>
            {props.children(value)}
        </div>
    ));
  return (
    <div className="footer">
      {arrFooterCard}
    </div>
  );
}

export default Footer;
