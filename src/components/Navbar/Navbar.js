import React, { useState } from 'react';
import HamburgerMenuButton from "../Drawer/HamburgerMenuButton"
import logo from "../../images/logo.svg";
import "./Navbar.css"
import useWindowScrollPosition from "@rehooks/window-scroll-position";

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
          <div className="navbar-logo">
            <a href="/"><img alt="Frolich Consulting Logo" src={logo}/></a>
          </div>
          <div className="navbar-navigation-items">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/">ABOUT</a></li>
              <li><a href="/">WORK</a></li>
              <li><a href="/">CONTACT</a></li>
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
