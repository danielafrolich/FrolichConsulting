import React from 'react'
import "./Drawer.css"
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Link, animateScroll as scroll } from "react-scroll";

const Drawer = props => {
  let drawerClasses = 'drawer';
  if(props.show) {
    drawerClasses = 'drawer open';
  }

  return(
    <nav className={drawerClasses}>
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
