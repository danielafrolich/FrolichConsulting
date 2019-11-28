import React from 'react';
import HamburgerMenuButton from "../Drawer/HamburgerMenuButton"
import logo from "../../images/logo.svg";
import "./Navbar.css"

const navbar = props => (
  <header className="navbar">
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

export default navbar;
