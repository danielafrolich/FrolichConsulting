import React from 'react';
import "./Card.css"

function LinkCard(props){
  return(
    <div className="card-bg flex block mt-2">
      <div className="card-media">
        <img alt={props.alt} src={props.cardMedia}/>
      </div>
      <div className="card-text">
        <h2>{props.cardHeader}</h2>
        <h3 className="mb-1">{props.cardSubtitle}</h3>
        <p className="mb-1">{props.cardParagraph}</p>
        <a href={props.linkHref} target="_blank" rel="noopener noreferrer"><img src={props.linkIcon} alt={props.alt}/>{props.linkText}</a>
      </div>
    </div>
  );
}

export default LinkCard;
