
import './Card.css';        // specific component css
import React from 'react';  // react package


////////////////////////
//     basic card     //
////////////////////////

const Card = (props) => {
    return (
        <div className={"card " + props.className}>{props.children}</div>
    );
};



export default Card;