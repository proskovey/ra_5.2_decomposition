import React from "react";

function FooterCardText(props) {

    const arrFooterCard = props.text.map((value) => (
        <span className="footer__card-text" key={Math.random()}>{value}</span>
    ))
    return(
        <React.Fragment>
            {arrFooterCard}
        </React.Fragment>
    )
};

export default FooterCardText;