import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Drawer from "./components/Drawer/Drawer"
import Backdrop from "./components/Backdrop/Backdrop"
import AboutSection from "./components/AboutSection"
import WorkSection from "./components/WorkSection"
import ContactSection from "./components/ContactSection"
import HomeSection from "./components/HomeSection"

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
          <HomeSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
          {/*
            TODO: Footern ska inte vara i main.
          */}
          <footer><p>© {(new Date().getFullYear())} Frolich Consulting</p></footer>
        </main>
      </div>
    );
  }
}

export default App;
