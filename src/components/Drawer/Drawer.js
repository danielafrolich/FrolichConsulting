import React from 'react'
import "./Drawer.css"

const Drawer = props => {
  let drawerClasses = 'drawer';
  if(props.show) {
    drawerClasses = 'drawer open';
  }

  return(
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/">ABOUT</a></li>
        <li><a href="/">WORK</a></li>
        <li><a href="/">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Drawer;
