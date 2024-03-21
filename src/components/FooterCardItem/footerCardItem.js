import React from "react";
/*Карточки новостей, в children передается текст или список */
function FooterCardItem(props) {
  const arrFooterCardItem = props.footerCardItem.map((value) => (
    <div className="footer__card-item" key={Math.random()}>
      <div className="footer__card-title">{value.title}</div>
      <div className="footer__card-body">{props.children(value.footerCardText)}</div>
    </div>
  ));
  return (
    <React.Fragment>
       {arrFooterCardItem}
    </React.Fragment>
   );
}

export default FooterCardItem;
