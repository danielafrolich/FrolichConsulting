import React from 'react'
import "./Drawer.css"
import { Link } from "react-scroll";

const Drawer = props => {
  let drawerClasses = 'drawer';
  if(props.show) {
    drawerClasses = 'drawer open';
  }

  return(
    <nav id="navigation-mobile" className={drawerClasses} role="navigation" aria-labelledby="navigation-mobile">
    <ul>
      <li>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={0}
        href="/"
      >
        HOME
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={0}
        href="/"
      >
        ABOUT
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={0}
        href="/"
      >
        WORK
      </Link>
      </li>
      <li>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={0}
        href="/"
      >
        CONTACT
      </Link>
      </li>
    </ul>
    </nav>
  );
};

export default Drawer;
