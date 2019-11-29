import React, { Component } from 'react';
import LandingText from "./components/LandingText"
import InputForm from "./components/InputForm"
import Button from '@material-ui/core/Button'
import Navbar from "./components/Navbar/Navbar"
import Drawer from "./components/Drawer/Drawer"
import Backdrop from "./components/Backdrop/Backdrop"
import AboutSection from "./components/AboutSection"


class App extends Component {
  state = {
    drawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({drawerOpen: false});
  }

  render() {
    let backdrop;

    if(this.state.drawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="app">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Drawer show={this.state.drawerOpen}/>
        {backdrop}
        <main>
          <section className="home">
            <LandingText></LandingText>
            <Button className="bottom-aligned">SEE MORE</Button>
          </section>
          <AboutSection />
          <section className="work">
          </section>
          <section className="contact">
            <InputForm />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
