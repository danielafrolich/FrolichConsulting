import React, { useState } from 'react';
import HamburgerMenuButton from "../Drawer/HamburgerMenuButton"
import logo from "../../images/logo.svg";
import "./Navbar.css"
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Link } from "react-scroll";

function Navbar(props) {
  const [change, setChange] = useState(false);
  // TODO Get right position.
  const changePosition = 300;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let bg = {
    backgroundColor: change ? "rgb(46, 46, 77, 0.85)" : "transparent",
    transition: "400ms ease",
  };


  return (
    <header className="navbar" style={bg}>
      <nav className="navbar-navigation">
          <div className="hamburgerMenu-button">
            <HamburgerMenuButton click={props.drawerClickHandler}></HamburgerMenuButton>
          </div>
            <Link
              activeClass="none"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              tabIndex={0}
              href="/"
            >
            <img alt="Frolich Consulting Logo" src={logo}/>
          </Link>
          <div className="navbar-navigation-items">
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
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
