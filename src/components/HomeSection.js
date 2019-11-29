import React from 'react';
import LandingText from "./LandingText"
import Button from '@material-ui/core/Button'

class HomeSection extends React.Component{
  render(){
    return(
      <section className="home">
        <LandingText></LandingText>
        <Button className="bottom-aligned">SEE MORE</Button>
      </section>
    );
  }
}

export default HomeSection;
