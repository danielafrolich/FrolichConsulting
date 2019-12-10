import React from 'react';
import LandingText from "./LandingText"
import { Link } from "react-scroll";

class HomeSection extends React.Component{
  render(){
    return(
      <section className="home" role="Home content" aria-label="Home content of Frolich Consulting.">
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
          SEE MORE
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeSection;
