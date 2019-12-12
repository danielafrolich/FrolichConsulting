import React from 'react';
import "./HamburgerMenuButton.css"

const hamburgerMenuButton = props =>(
  <button aria-label="Menu" className="hamburgerButton" onClick={props.click}>
      <div className="hamburgerButton-line"></div>
      <div className="hamburgerButton-line"></div>
      <div className="hamburgerButton-line"></div>
  </button>
)

export default hamburgerMenuButton;
