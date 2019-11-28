import React from 'react';

function IconText(props) {
    return (
      <div className="flex">
        <img alt={props.alt} src={props.icon} />
        <p>{props.text}</p>
      </div>
  );
}

export default IconText;
