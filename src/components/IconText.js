import React from 'react';

function IconText(props) {
    return (
      <div className="flex mb-2 align-items">
        <img alt={props.alt} src={props.icon} />
        <p className="ml-1">{props.text}</p>
      </div>
  );
}

export default IconText;
