import React from 'react';
import LandingText from "./LandingText"
import { Link } from "react-scroll"
import arrowDown from "../images/arrow_down.svg";

class HomeSection extends React.Component{
  render(){
    return(
      <section className="home" role="region" aria-labelledby="homeRegion">
        <LandingText></LandingText>
        <div className="bottom-aligned">
          <Link
          activeClass="none"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          tabIndex={0}
          href="/"
          className="a-clean"
          >
            <img alt="Arrow down" src={arrowDown} className="mr-05"/>
          SEE MORE
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeSection;
